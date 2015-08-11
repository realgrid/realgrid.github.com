var RealGrids = (function () {
    // "use strict";

    var win = window;
    var doc = document;
    var REQUIRED_VERSION = "1.1.25.2618";
    var DEBUG = false;
    var TRACE = false;

    var __grids = {};
    var __externalWheelGrids = {};
    var __externalWheelPropagations = {};
    var __resetIme = false;

    var _enum = function (v) {
        return Object.freeze ? Object.freeze(v) : v;
    };

    var _extend = function (obj, source) {
        if (source) {
            obj = obj || {};
            for (var prop in source) {
                obj[prop] = source[prop];
            };
        };
        return obj;
    };

    var setDebug = function (debug) {
    	DEBUG = debug;
    };
    var setTrace = function (trace) {
        TRACE = trace;
    };
    var _log = function (message) {
        TRACE && win && win.console.log(message);
    };

    var enableImeOnExit = function (reset) {
        __resetIme = reset;
    };

    var _clickCallback = function (e) {
        var id;
        var grid = null;
        var elt = e.target;

        if (elt == undefined) {
            elt = e.srcElement;
        };

        for (id in __grids) {
            if (id == elt.id && __grids[id] && __grids[id].dom) {
                grid = id;
                break;
            };
        };

        if (!grid) {
            if (__resetIme) 
                    RealGrids.resetIme();
                        
            elt = doc.elementFromPoint(e.clientX, e.clientY);
            if (elt) {
                for (id in __grids) {
                    if (id == elt.id && __grids[id] && __grids[id].dom) {
                        grid = id;
                        break;
                    };
                };
            };
        };

        for (id in __grids) {
            if ((!grid || id != grid) && __grids[id] && __grids[id].dom) {
                __grids[id].closeList();
            };
        };
    };
    
    var _externalWheelCallback = function(e) {
        var id;
        var grid = null;
        var propagation = true;
        var elt = e.target;

        if (elt == undefined) {
            elt = e.srcElement;
        };

        if (elt.nodeName == "OBJECT") { 
            for (id in __externalWheelGrids) {
                if (id == elt.id && __externalWheelGrids[id] && __externalWheelGrids[id].dom) {
                    grid = __externalWheelGrids[id].dom;
                    propagation = __externalWheelPropagations[id];
                    break;
                };
            };
            
            if (grid && grid.externalWheelEvent) {
                var edelta = (navigator.userAgent.indexOf('Firefox') !=-1) ? -e.detail : e.wheelDelta/40;
                var eventObj = { x: e.screenX, y: e.screenY, 
                    delta: edelta,
                    ctrlKey: e.ctrlKey, altKey: e.altKey,
                    shiftKey: e.shiftKey
                }
            
                grid.externalWheelEvent(eventObj);     
                
                if (!propagation) {
                    e.preventDefault();
                    e.stopPropagation();                
                }       
            }
        }    
    } 

    // 그리드 밖에서 마우스를 클릭하면 그리드에 표시된 드랍다운 리스트가 닫히게 한다.
    if (win.addEventListener) {
        win.addEventListener("mousedown", _clickCallback);
    } else if (document.attachEvent) {
        document.attachEvent("onmousedown", _clickCallback);
    };

    // 그리드나 프로바이더에 존재하는 객체의 속성을 변경하는 모델은 기본값을 undefined로 해서
    // 불필요한 설정을 줄인다.
    // 하지만 javascript 호출 시점에 객체가 생성되는 경우에는 기본값을 flex 모델의 기본값과 맞춘다.

    /**
    * DataType.
    */
    var DataType = _enum({
        TEXT: "text",
        // @Deprecated
        NUMERIC: "numeric",
        NUMBER: "number",
        // @Deprecated
        BOOL: "bool",
        BOOLEAN: "boolean",
        DATETIME: "datetime"
    });

    /**
    * SubDataType.
    */
    var SubDataType = _enum({
        // text subType
        CHAR: "char",    // fixed size
        // number subType
        UNUM: "unum",    // unsigned number
        INT: "int",      // integer
        UINT: "uint",    // unsigned integer
        // datetime subType
        DATE: "date"     // not incluse time
    });

    /**
    * RowState
    */
    var RowState = _enum({
        NONE: "none",
        CREATED: "created",
        UPDATED: "updated",
        DELETED: "deleted",
        CREATE_AND_DELETED: "createAndDeleted"
    });
    
    /**
     * RestoreMode
     */
    var RestoreMode = _enum({
    	NONE: "none",
    	EXPLICIT: "explicit",
    	AUTO: "auto"
    });

    /** 
    * DataFilterMode
    */
    var DataFilterMode = _enum({
        AND: "and",
        OR: "or"
    });
    
    /**
    * LoadPolicyType
    */
    var LoadPolicyType = _enum({
        ERROR: "error",
        CANCEL: "cancel",
        COMMIT: "commit",
        DELAY: "delay"
    });
    
    /**
    * DataField.
    */
    var DataField = function (fieldName) {
        this.fieldName    = fieldName;
        this.dataType     = DataType.TEXT;
        this.subtype      = undefined;      // SubDataType
        this.length       = 10;
        this.header       = null;
        this.baseField    = null;           // 기준 필드 이름.
        this.defaultValue = undefined;      // setRowCount()로 추가할 때
        this.min          = undefined;      // for number, datetime field, 값이 min보다 작으면 min으로 저장
        this.max          = undefined;      // for number, datetime field, 값이 max보다 크면 max으로 저장
        this.set          = undefined;      // array, boolean외의 field에서 배열에 포함되지 않은경우 undefined로 저장
    };

    /**
    * DataProviderOptions.
    */
    var DataProviderOptions = function () {
        this.booleanFormat = undefined;     // null
        this.datetimeFormat = undefined;    // null
        this.amText = undefined;            // "AM"
        this.pmText = undefined;            // "PM"
        this.baseYear = undefined;          // 2000
        this.insertable = undefined;        // true
        this.updatable = undefined;         // true
        this.deletable = undefined;         // true
        this.softDeleting = undefined;      // false    
        this.deleteCreated = undefined;     // false
        this.checkStates = undefined;       // true
        this.subtypeEnabled = undefined;    // true
        this.restoreMode = undefined;		// "none"
        this.strictRestore = undefined;		// false
    };
    
    /**
    * DataLoadOptions
    */
    var DataLoadOptions = function () {
        this.type = "json";             // "json" | "xml" | "csv"
        this.url = null;                // server url
        this.method = "get";            // "get" | "post"
        this.params = null;             // name value pairs
        this.rows = "row";              // row element name | rows array name
        this.progress = true;           // show progress bar
        this.rootArray = true;          // use json root array as rows

        this.count = -1;                // -1 => all
        this.fillMode = "set";          // set | append | insert | update
        this.fillPos = 0;               // only for insert | update
        //this.append = false;          // 기본값은 false @Deprecated fillMode로 대체

        this.filters = undefined;       // array of expression
        this.filterMode = undefined;    // DataFilterMode.AND

        this.headers = undefined;       // name value pairs, Request Header Infomation
        this.clientPolicy = undefined;  // LoadPolicyType.ERROR
        
        // csv
        this.start = 0;                 // start line
        this.quoted = false;            // quoted string ?
        this.delimiter = undefined      // ","

        // tree
        this.tree = "tree";             // tree field
        this.children = "hasChild";     // children field
        this.icon = "icon";             // icon field
        this.append = false;            // fillMode로 대체 예정
        this.parent = 0;                // parent row id
        this.sorting = false;           // need sorting ?
    };

    /**
    * DataProvider
    */
    var DataProvider = function () {
        /// callbacks
        this.onLoadCompleted = function (provider, ticket) {
            _log("onLoadCompleted");
        };
        this.onLoadFailed = function (provider, error, ticket) {
            _log("onLoadFailed:" + error);
        };

        /// internal variables
        this.dom = null;
        this.fields = [];

        this.__comparers = {};
        this.__maxComparer = 0;
    };
    DataProvider.prototype = {
        constructor: DataProvider,

        getOptions: function () {
            return this.dom.getDataOptions();
        },
        setOptions: function (options) {
            this.dom.setDataOptions(options);
        },
        setFields: function (fields) {
            this.dom.setDataFields(fields);
            this.fields = fields;
        },
        getFields: function () {
            return this.dom.getDataFields();
        },
        getFieldNames: function () {
            return this.dom.getFieldNames();
        },
        getOrgFieldNames: function () {
            return this.dom.getOrgFieldNames();
        },
        getFieldName: function (fieldIndex) {
            return this.dom.getFieldName(fieldIndex);
        },
        getOrgFieldName: function (fieldIndex) {
            return this.dom.getOrgFieldName(fieldIndex);
        },
        getFieldIndex: function (fieldName) {
            return this.dom.getFieldIndex(fieldName);
        },
        getFieldCount: function () {
            return this.fields ? this.fields.length : 0;
        },
        getRowCount: function () {
            return this.dom.getRowCount();
        },
        beginUpdate: function () {
            this.dom.beginDataUpdate();
        },
        endUpdate: function (refresh) {
            this.dom.endDataUpdate(arguments.length > 0 ? refresh : true);
        },
        refreshClients: function () {
            this.dom.refreshDataClients();
        },
        loadData: function (options, onCompleted, onFailed) {
            if (onCompleted)
                this.onLoadCompleted = onCompleted;
            if (onFailed)
                this.onLoadFailed = onFailed;
            return this.dom.loadData(options);
        },
        clearRows: function () {
            this.dom.clearDataRows();
        },
        // row 행을 Array로 리턴
        getValues: function (row) {
            return this.dom.getDataValues(row);
        },
        // row 행을 json 객체로 리턴
        getJsonRow: function (row) {
            return this.dom.getJsonRow(row);
        },
        // @Deprecated use getJsonRow() instead.
        getDataRow: function (row) {
            return this.dom.getJsonRow(row);
        },
        // @Deprecated use getJsonRow() instead.
        getRowData: function (row) {
            return this.dom.getJsonRow(row);
        },
        // @Deprecated use getJsonRow() instead.
        getRow: function (row) {
            return this.dom.getJsonRow(row);
        },
        updateRow: function (row, values) {
            this.dom.updateDataRow(row, values);
        },
        updateStrictRow: function (row, values) {
            this.dom.updateStrictDataRow(row, values);
        },
        checkRowStates: function (check) {
            this.dom.checkRowStates(check);
        },
        getRowState: function (row) {
            return this.dom.getRowState(row);
        },
        getStateRows: function (rowState) {
            return this.dom.getStateRows(rowState);
        },
        getAllStateRows: function () {
            return this.dom.getAllStateRows();
        },
        clearRowStates: function (deleteRows, rowEvents) {
            rowEvents = arguments.length > 1 ? rowEvents : false;
            this.dom.clearRowStates(deleteRows, rowEvents);
        },
        setRowState: function (row, state, force) {
            state = arguments.length > 1 ? state : RowState.NONE;
            force = arguments.length > 2 ? force : false;
            this.dom.setRowState(row, state, force);
        },
        setRowStates: function (rows, state, force, rowEvents) {
            state = arguments.length > 1 ? state : RowState.NONE;
            force = arguments.length > 2 ? force : false;
            rowEvents = arguments.length > 3 ? rowEvents : false;
            this.dom.setRowStates(rows, state, force, rowEvents);
        },
        getRowStateCount: function (rowStates) {
            return this.dom.getRowStateCount(rowStates);
        },
        restoreUpdatedStates: function (rows) {
        	return this.dom.restoreUpdatedStates(rows);
        },
        restoreUpdatedRows: function (rows) {
        	return this.dom.restoreUpdatedRows(rows);
        },
        getDistinctValues: function (field, maxCount) {
            maxCount = arguments.length > 1 ? maxCount : -1;
            return this.dom.getDistinctData(field, maxCount);
        },
        savePoint: function (saveStates) {
            saveStates = arguments.length > 0 ? saveStates : true;
            return this.dom.savePoint(saveStates);
        },
        rollback: function (savePoint) {
            savePoint = arguments.length > 0 ? savePoint : 0;
            this.dom.rollback(savePoint);
        },
        clearSavePoints: function () {
            this.dom.clearSavePoints();
        },
        getSavePoints: function () {
            return this.dom.getSavePoints();
        },
        setComparer: function (field, comparer) {
            this.__maxComparer++;
            this.__comparers[this.__maxComparer] = comparer;
            this.dom.setDataComparer(field, comparer);
        },
        getComparer: function (comparerId) {
            return this.__comparers[comparerId];
        }
    };

    /**
    * LocalDataProvider.
    */
    var LocalDataProvider = function () {
        this.base = DataProvider;
        this.base();

        /// callbacks
        this.onRowCountChanged = DEBUG ? function (provider, count) {
        	_log("onRowCountChanged:" + count);
        } : null;
        this.onRowUpdating = DEBUG ? function (provider, row) {
            _log("onRowUpdating:" + row);
            return true;
        } : null;
        this.onRowUpdated = DEBUG ? function (provider, row) {
            _log("onRowUpdated:" + row);
        } : null;
        this.onRowsUpdated = DEBUG ? function (provider, row, count) {
            _log("onRowsUpdated:" + row + "," + count);
        } : null;
        this.onRowInserting = DEBUG ? function (provider, row) {
            _log("onRowInserting:" + row);
            return true;
        } : null;
        this.onRowInserted = DEBUG ? function (provider, row) {
            _log("onRowInserted:" + row);
        } : null;
        this.onRowsInserted = DEBUG ? function (provider, row, count) {
            _log("onRowsInserted:" + row + ',' + count);
        } : null;
        this.onRowDeleting = DEBUG ? function (provider, row) {
            _log("onRowDeleting:" + row);
            return true;
        } : null;
        this.onRowDeleted = DEBUG ? function (provider, row) {
            _log("onRowDeleted:" + row);
        } : null;
        // 연속된 행들이 삭제되지 않았을 수 있으므로 이벤트르 제공한다.
        this.onRowsDeleted = DEBUG ? function (provider, rows) {
            _log("onRowsDeleted:" + rows.length + " rows");
        } : null;
        this.onRowMoving = DEBUG ? function (provider, row, newRow) {
            _log("onRowMoving:" + row + "," + newRow);
            return true;
        } : null;
        this.onRowMoved = DEBUG ? function (provider, row, newRow) {
            _log("onRowMoved:" + row + "," + newRow);
        } : null;
        this.onRowsMoving = DEBUG ? function (provider, row, count, newRow) {
            _log("onRowsMoving:" + row + "," + count + "," + newRow);
            return true;
        } : null;
        this.onRowsMoved = DEBUG ? function (provider, row, count, newRow) {
            _log("onRowsMoved:" + row + "," + count + "," + newRow);
        } : null;
        this.onValueChanged = DEBUG ? function (provider, row, field) {
            _log("onValueChanged:" + row + "," + field);
        } : null;
        this.onRowStateChanged = DEBUG ? function (provider, row) {
            _log("onRowStateChanged:" + row);
        } : null;
        this.onRowStatesChanged = DEBUG ? function (provider, rows) {
            _log("onRowStatesChanged:" + rows.length + " rows");
        } : null;
        this.onRowStatesCleared = DEBUG ? function (provider) {
            _log("onRowStateCleared");
        } : null;
    };
    LocalDataProvider.prototype = _extend(new DataProvider(), {
        constructor: LocalDataProvider,
        type: "local",

        setRowCount: function (newCount, fillFieldDefaults, defaultValues, rowState) {
            fillFieldDefaults = arguments.length > 1 ? fillFieldDefaults : false;
            defaultValues = arguments.length > 2 ? defaultValues : null;
            rowState = arguments.length > 3 ? rowState : "none";
            this.dom.setRowCount(newCount, fillFieldDefaults, defaultValues, rowState);
        },
        setFilters: function (filters, filterMode) {
            filterMode = arguments.length > 0 ? filterMode : "and";
            this.dom.setDataFilters(filters, filterMode);
        },
        setRows: function (rows, start, count) {
            start = arguments.length > 1 ? start : 0;
            count = arguments.length > 2 ? count : -1;
            this.dom.setDataRows(rows, start, count);
        },
        setJsonRows: function (rows, rowsProp, start, count) {
            start = arguments.length > 2 ? start : 0;
            count = arguments.length > 3 ? count : -1;
            this.dom.setJsonRows(rows, rowsProp, start, count);
        },
        setXmlRows: function (rows, rowElement, start, count) {
            start = arguments.length > 2 ? start : 0;
            count = arguments.length > 3 ? count : -1;
            this.dom.setXmlRows(rows, rowElement, start, count);
        },
        addRows: function (rows, start, count, rowEvents) {
            start = arguments.length > 1 ? start : 0;
            count = arguments.length > 2 ? count : -1;
            rowEvents = arguments.length > 3 ? rowEvents : false;
            this.dom.addDataRows(rows, start, count, rowEvents);
        },
        // @Deprecated use addRows instead.
        appendRows: function (rows, start, count, rowEvents) {
            start = arguments.length > 1 ? start : 0;
            count = arguments.length > 2 ? count : -1;
            rowEvents = arguments.length > 3 ? rowEvents : false;
            this.dom.appendDataRows(rows, start, count, rowEvents);
        },
        insertRows: function (row, rows, start, count, rowEvents) {
            start = arguments.length > 2 ? start : 0;
            count = arguments.length > 3 ? count : -1;
            rowEvents = arguments.length > 4 ? rowEvents : false;
            this.dom.insertDataRows(row, rows, start, count, rowEvents);
        },
        updateRows: function (row, rows, start, count, rowEvents) {
            start = arguments.length > 2 ? start : 0;
            count = arguments.length > 3 ? count : -1;
            rowEvents = arguments.length > 4 ? rowEvents : false;
            this.dom.updateDataRows(row, rows, start, count, rowEvents);
        },
        updateStrictRows: function (row, rows, start, count, rowEvents) {
            start = arguments.length > 2 ? start : 0;
            count = arguments.length > 3 ? count : -1;
            rowEvents = arguments.length > 4 ? rowEvents : false;
            this.dom.updateStrictDataRows(row, rows, start, count, rowEvents);
        },
        addRow: function (values) {
            return this.dom.addDataRow(values);
        },
        insertRow: function (row, values) {
            this.dom.insertDataRow(row, values);
        },
        removeRow: function (row) {
            this.dom.removeDataRow(row);
        },
        removeRows: function (rows, rowEvents) {
            rowEvents = arguments.length > 1 ? rowEvents : false;
            this.dom.removeDataRows(rows, rowEvents);
        },
        moveRow: function (row, newRow) {
            this.dom.moveDataRow(row, newRow);
        },
        getValue: function (row, field) {
            return this.dom.getDataValue(row, field);
        },
        setValue: function (row, field, value) {
            this.dom.setDataValue(row, field, value);
        },
        hasData: function (row) {
            return this.dom.hasData(row);
        },
        /*
        * startRow에서 endRow까지 포함된 row 데이터를 Array로 리턴. @param endRow 지정하지 않거나
        * 0보다 작은 값을 지정하면 마지막 row까지 리턴.
        */
        getRows: function (startRow, endRow) {
            startRow = arguments.length > 0 ? startRow : 0;
            endRow = arguments.length > 1 ? endRow : -1;
            return this.dom.getDataRows(startRow, endRow);
        },
        // @Deprecated use getRows() instead.
        getDataRows: function (startRow, endRow) {
            startRow = arguments.length > 0 ? startRow : 0;
            endRow = arguments.length > 1 ? endRow : -1;
            return this.dom.getDataRows(startRow, endRow);
        },
        /*
        * startRow에서 endRow까지 포함된 row 데이터를 객체 Array로 리턴. @param endRow 지정하지 않거나
        * 0보다 작은 값을 지정하면 마지막 row까지 리턴.
        */
        getJsonRows: function (startRow, endRow) {
            startRow = arguments.length > 0 ? startRow : 0;
            endRow = arguments.length > 1 ? endRow : -1;
            return this.dom.getJsonRows(startRow, endRow);
        },
        getFieldValues: function (field, startRow, endRow) {
            startRow = arguments.length > 1 ? startRow : 0;
            endRow = arguments.length > 2 ? endRow : -1;
            return this.dom.getFieldValues(field, startRow, endRow);
        }
    });

    /**
    * TreeDataProvider
    */
    var TreeDataProvider = function () {
        this.base = DataProvider;
        this.base();

        /// callbacks
        this.checkParentProc = function (parent, child) {
            return false;
        };
        this.onRowCountChanged = DEBUG ? function (provider, count) {
            _log("onRowCountChanged:" + count);
        } : null;
        this.onRowAdding = DEBUG ? function (provider, rowId, index) {
            _log("onRowAdding:" + rowId + ", " + index);
            return true;
        } : null;
        this.onRowAdded = DEBUG ? function (provider, rowId) {
            _log("onRowAdded:" + rowId);
        } : null;
        this.onRowsAdded = DEBUG ? function (provider, parentId, rowIds) {
            _log("onRowsAdded:" + parentId + ", " + rowIds.length);
        } : null;
        this.onRowDeleting = DEBUG ? function (provider, rowId) {
            _log("onRowDeleting:" + rowId);
            return true;
        } : null;
        this.onRowDeleted = DEBUG ? function (provider, rowId) {
            _log("onRowDeleted:" + rowId);
        } : null;
        this.onRowsDeleting = DEBUG ? function (provider, rowIds) {
            _log("onRowsDeleting:" + rowIds.length);
            return true;
        } : null;
        this.onRowsDeleted = DEBUG ? function (provider, rowIds) {
            _log("onRowsDeleted:" + rowIds.length);
        } : null;
        this.onRowUpdating = DEBUG ? function (provider, rowId) {
            _log("onRowUpdating:" + rowId);
            return true;
        } : null;
        this.onRowUpdated = DEBUG ? function (provider, rowId) {
            _log("onRowUpdated:" + rowId);
        } : null;
        this.onValueChanged = DEBUG ? function (provider, rowId) {
            _log("onValueChanged:" + rowId);
        } : null;
        this.onRowStateChanged = DEBUG ? function (provider, rowId) {
            _log("onRowStateChanged:" + rowId);
        } : null;
        this.onRowStatesChanged = DEBUG ? function (provider, rowIds) {
            _log("onRowStatesChanged:" + rowIds.length);
        } : null;
    };
    TreeDataProvider.prototype = _extend(new DataProvider(), {
        constructor: TreeDataProvider,
        type: "tree",

        loadData: function (options, onCompleted, onFailed) {
            if (onCompleted)
                this.onLoadCompleted = onCompleted;
            if (onFailed)
                this.onLoadFailed = onFailed;
            return this.dom.loadTreeData(options);
        },
        setRows: function (rows, treeField, needSorting, childrenField, iconField) {
            this.dom.setTreeDataRows(rows, treeField, needSorting, childrenField, iconField);
        },
        // @Deprecated use setRows instead.
        setDataRows: function (rows, treeField, needSorting, childrenField, iconField) {
            this.dom.setTreeDataRows(rows, treeField, needSorting, childrenField, iconField);
        },
        setXmlRows: function (xml, rowElement, childrenField, iconField) {
            this.dom.setTreeXmlSource(xml, rowElement, childrenField, iconField);
        },
        setJsonRows: function (json, rowsProp, childrenProp, iconProp) {
            this.dom.setTreeJsonSource(json, rowsProp, childrenProp, iconProp);
        },
        addChildRow: function (rowId, values, iconIndex, hasChildren) {
            iconIndex = arguments.length > 2 ? iconIndex : -1;
            hasChildren = arguments.length > 3 ? hasChildren : false;
            rowId = (rowId === null || isNaN(rowId)) ? -1 : rowId;
            return this.dom.addTreeDataRow(rowId, values, iconIndex, hasChildren);
        },
        insertChildRow: function (rowId, index, values, iconIndex, hasChildren) {
            iconIndex = arguments.length > 3 ? iconIndex : -1;
            hasChildren = arguments.length > 4 ? hasChildren : false;
            rowId = (rowId === null || isNaN(rowId)) ? -1 : rowId;
            return this.dom.insertTreeDataRow(rowId, index, values, iconIndex, hasChildren);
        },
        removeRow: function (rowId) {
            this.dom.removeTreeDataRow(rowId);
        },
        removeRows: function (rowIds) {
            this.dom.removeTreeDataRows(rowIds);
        },
        getIconIndex: function (rowId) {
            return this.dom.getTreeIconIndex(rowId);
        },
        setIconIndex: function (rowId, iconIndex) {
            this.dom.setTreeIconIndex(rowId, iconIndex);
        },
        getParent: function (rowId) {
            return this.dom.getParentRow(rowId);
        },
        getLevel: function (rowId) {
            return this.dom.getRowLevel(rowId);
        },
        getChildCount: function (rowId) {
            rowId = (rowId === null || isNaN(rowId)) ? -1 : rowId;
            return this.dom.getChildRowCount(rowId);
        },
        getChildren: function (rowId) {
            rowId = (rowId === null || isNaN(rowId)) ? -1 : rowId;
            return this.dom.getChildRows(rowId);
        },
        getDescendantCount: function (rowId) {
            rowId = (rowId === null || isNaN(rowId)) ? -1 : rowId;
            return this.dom.getDescendantRowCount(rowId);
        },
        getDescendants: function (rowId, maxLevel) {
            maxLevel = arguments.length > 1 ? maxLevel : 0; 
            rowId = (rowId === null || isNaN(rowId)) ? -1 : rowId;
            return this.dom.getDescendantRows(rowId, maxLevel);
        },
        getAncestors: function (rowId) {
            return this.dom.getAncestorRows(rowId);
        },
        getValue: function (rowId, field) {
            return this.dom.getTreeDataValue(rowId, field);
        },
        setValue: function (rowId, field, value) {
            this.dom.setTreeDataValue(rowId, field, value);
        }
    });

    /**
    * Cell index
    */
    var CellIndex = function () {
        this.itemIndex = -1;
        this.column = null;
        // setCurrent()로 설정할 때 위 두 값 대신 사용할 수 있음.
        this.dataRow = -1;
        this.fieldName = null;
    };
    
    /**
     * ItemType
     */
    var ItemType = _enum({
        ROW: "row",
        GROUP: "group",
        FOOTER: "footer",
        TREE: "tree"
    });

    /**
    * Item state
    */
    var ItemState = _enum({
        NORMAL: "normal",
        FOCUSED: "focused",
        UPDATING: "updating",
        INSERTING: "inserting",
        APPENDING: "appending",
        isInserting: function (state) {
    		return state == ItemState.INSERTING || state == ItemState.APPENDING;
    	}
    });

    /**
    * Summary mode
    */
    var SummaryMode = _enum({
        NONE: "none",
        AGGREGATE: "aggregate",
        STATISTICAL: "statistical"
    });
    
    /** 
    * Summary Expression type
    */
    var SummaryExpressionType = _enum({
        COUNT: "count",        // 건수
        SUM: "sum",            // 합계
        MAX: "max",            // 최대
        MIN: "min",            // 최소
        AVG: "avg",            // 평균
        VAR: "var",            // 분산
        VARP: "varp",        // 모집단 분산
        STDEV: "stdev",        // 표준편차
        STDEVP: "stdevp"    // 모집단 표준편차
    });
    
    /**
    * RowGroupCellDisplay. Row grouping된 셀들의 표시 방식.
    */
    var RowGroupCellDisplay = _enum({
        NORMAL: "normal",        // 그룹핑되지 않은 컬럼처럼 모든 row의 셀들을 표시한다.
        MERGE: "merge",            // 해당 그룹의 모든 row의 셀들을 하나의 대표 셀로 표시한다.
        HIDE: "hide"            // 해당 컬럼 자체를 표시하지 않는다.
    });        

    /**
    * Alignment. Text나 아이콘 등의 위치를 지정한다.
    */
    var Alignment = _enum({
        NEAR: "near",
        CENTER: "center",
        FAR: "far"
    });

    /**
    * ContentFit. 이미지르 셀에 어떤 크기/위치에 표시할 것인 지를 지정한다.
    */
    var ContentFit = _enum({
        // 맞추지 않고 top/left 에서부터 그린다.
        NONE: "none",
        // 맞추지 않고 중앙에 정렬한다.
        CENTER: "center",
        // 높이와 너비를 셀 크기에 맟준다(왜곡된다).
        BOTH: "both",
        // 너비를 셀 너비에 맟주고 높이는 너비의 비율대로 중앙 정렬.
        WIDTH: "width",
        // 높이를 셀 높이에 맞추고 너비는 높이의 비율대로 중앙 정렬.
        HEIGHT: "height",
        // 최대한 셀 크기에 맞춘다(넘치지 않게 한다).
        AUTO: "auto"
    });

    /**
    * IconLocation. ImageList에 포함된 이미지 아이콘을 셀에 표시할 때 이미지의 위치를 지정한다. iconOffset,
    * iconAlignment, iconPadding 스타일 속성들과 함께 사용한다.
    */
    var IconLocation = _enum({
        // 아이콘을 text 왼쪽에 표시한다.
        LEFT: "left",
        // 아이콘을 text 오른쪽에 표시한다.
        RIGHT: "right",
        // 아이콘을 text 위쪽에 표시한다.
        TOP: "top",
        // 아이콘을 text 아래쪽에 표시한다.
        BOTTOM: "bottom",
        // text없이 아이콘만 중앙에 표시한다
        CENTER: "center"
    });

    /**
    * CellButton.
    */
    var CellButton = _enum({
        NONE: "none",
        ACTION: "action",
        POPUP: "popup"
    });

    /**
    * TextInputCase
    */
    var TextInputCase = _enum({
        NORMAL: "normal",
        UPPER: "upper",
        LOWER: "lower",
        DEFAULT: "default" // editor가 이 값이면 컬럼의 textInputCase 값을 따른다.
    });

    /**
    * ItemSortStyle
    */
    var ItemSortStyle = _enum({
        NONE: "none",
        ASCENDING: "ascending",
        DESCENDING: "descending"
    });

    /**
    * GridFitStyle.
    */
    var GridFitStyle = _enum({
        NONE: "none",
        EVEN: "even",
        EVEN_FILL: "evenFill",
        FILL: "fill"
    });

    /**
    * ValidationMode.
    */
    var ValidationMode = _enum({
        ALWAYS: "always",
        INSERT: "insert",
        UPDATE: "update"
    });

    /**
    * ValidationLevel.
    */
    var ValidationLevel = _enum({
        ERROR: "error",
        WARNING: "warning",
        INFO: "info",
        IGNORE: "ignore"
    });

    /**
    * SelectionStyle.
    */
    var SelectionStyle = _enum({
        BLOCK: "block",
        ROWS: "rows",
        COLUMNS: "columns",
        SINGLE_ROW: "singleRow",
        SINGLE_COLUMN: "singleColumn",
        NONE: "none"
    });

    /**
    * ColumnGroup Orientation.
    */
    var ColumnGroupOrientation = _enum({
        HORIZONTAL: "horizontal",
        VERTICAL: "vertical"
    });

    /*
    * RowGroup Adornments
    */
    var RowGroupAdornments = _enum({
        BOTH: "both",
        HEADER: "header",
        FOOTER: "footer",
        NONE: "none" // expandedAdornments only
    });

    /**
    * Indicator display value.
    */
    var IndicatorValue = _enum({
        NONE: "none",
        INDEX: "index",
        ROW: "row"
    });

    /**
    * Sort style.
    */
    var SortStyle = _enum({
        NONE: "none", // 정렬 불가
        EXCLUSIVE: "exclusive", // 최근 클릭한 컬럼으로 정렬
        INCLUSIVE: "inclusive", // 지정한 순서대로 모든 컬럼으로 정렬
        REVERSE: "reverse"      // 나중에 지정한 컬럼을 우선 순위로 모든 컬럼 정렬
    });

    /**
    * Sort direction.
    */
    var SortDirection = _enum({
        ASCENDING: "ascending",
        DESCENDING: "descending"
    });
    
    /**
     * Handle visibility
     */
    var HandleVisibility = _enum({
        VISIBLE: "visible",
        HOVERED: "hovered",
        ALWAYS: "always",
        HIDDEN: "hidden"
    });

    /**
    * Region visibility when exporting
    */
    var PrintVisibility = _enum({
        DEFAULT: "default",
        VISIBLE: "visible",
        HIDDEN: "hidden"
    });

    /**
    * Menu item type
    */
    var MenuItemType = _enum({
        NORMAL: "normal",
        CHECK: "check",
        RADIO: "radio",
        SEPARATOR: "separator"
    });

    /**
    * Ime mode.
    */
    var ImeMode = _enum({
        ALPHA: "alpha",
        ALPHA_FULL: "alphaFull",
        KOREAN: "korean",
        CHINESE: "chinese",
        JAPANESE_HIRAGANA: "hiragana",
        JAPANESE_KATAKANA: "katakana",
        JAPANESE_KATAKANA_FULL: "katakanaFull",
        DONT_CARE: "dontCare"
    });

    /**
    * Bar Cell Renderer Origin
    */
    var BarCellRendererOrigin = _enum({
        DEFAULT: "default", // locale 에 따라 좌/우 결정.
        LEFT   : "left"   ,
        RIGHT  : "right"  ,
        TOP    : "top"    ,
        BOTTOM : "bottom"
    });
        

    /**
    * MenuItem
    */
    var MenuItem = function (label) {
        this.label = label;
        this.type = MenuItemType.NORMAL;
        this.group = undefined;
        this.enabled = undefined; // true
        this.checked = false;
        this.tag = null;
        this.data = null;
        this.children = [];
        this.callback = null; // function (data);
    };

    /**
    * ImageList.
    */
    var ImageList = function (name) {
        this.name = name;
        this.rootUrl = null;
        this.images = [];
    };
    
    /**
     * ColumnFilter
     */
    var ColumnFilter = function () {
        this.name = null;
        this.criteria = null;        // filter 수식
        this.text = null;            // selector에 표시되는 문자열. null이면 name 표시
        this.description = null;
        this.active = true;
    };
    
    /**
     * ColumnFilterAction
     */
    var ColumnFilterAction = function () {
        this.name = null;
        this.text = null;
        this.description = null;
    };

    /**
    * SearchOptions.
    */
    var SearchOptions = function () {
        this.fields = undefined;         // []
        this.values = undefined;         // []
        this.startIndex = undefined;     // 0
        this.wrap = undefined;           // true
        this.select = undefined;         // true
        this.caseSensitive = undefined;  // false
        this.partialMatch = undefined;   // false
        this.allFields = undefined;      // true
    };

    /**
    * GridExportOptions
    */
    var GridExportOptions = function () {
        this.type = undefined;              // "excel" | "excelx"
        this.target = undefined;            // "remote"        // "remote" | "local"
        this.url = undefined;               // server url
        this.fileName = undefined;          // client file name
        this.indicator = undefined;         // "default"    // "default" | "visible" | "hidden"
        this.header = undefined;            // "default"    // "default" | "visible" | "hidden"
        this.footer = undefined;            // "default"    // "default" | "visible" | "hidden"
        this.showConfirm = undefined;       // true
        this.confirmMessage = undefined;    // "Excel 문서로 저장하시겠습니까?"
        this.confirmTitle = undefined;      // "Excel 저장"
        this.lookupDisplay = undefined;     // column의 lookupDisplay가 true일 때 표시된 값으로 저장
        this.allItems = undefined;          // 감춰진 모든 행을 출력할것인지의 여부
        this.documentTitle = undefined;     // 첫행에 표시될 문구및 style, string or {text:"",style:{}} 
    };

    /**
    * EditValidation.
    */
    var EditValidation = function () {
        this.name = undefined;             // null
        this.active = undefined;           // true
        this.mode = undefined;             // ValidationMode.ALWAYS
        this.level = undefined;            // ValidationLevel.ERROR
        this.criteria = undefined;         // null
        this.message = undefined;          // null
        this.description = undefined;      //null
    };

    /**
    * ValidationResult.
    */
    var ValidationResult = function (result) {
        this.level = result && result.level || ValidationLevel.ERROR;
        this.message = result && result.message || "Validation error.";
    };

    /**
    * DynamicStyle.
    */
    var DynamicStyle = function (criteria, styles) {
        this.criteria = criteria;
        this.styles = styles;
    };


    /**
    * CellRenderer.
    */
    var CellRenderer = function () {
    };
    CellRenderer.TEXT = "text";
    CellRenderer.BAR = "bar";
    CellRenderer.CHECK = "check";
    CellRenderer.IMAGE = "image";
    CellRenderer.ICON = "icon";
    CellRenderer.SHAPE = "shape";
    CellRenderer.SIGNAL = "signal";
    CellRenderer.LINK = "link";
    CellRenderer.CODE128 = "code128"; // barcode
    CellRenderer.CODE39 = "code39"; // barcode

    /**
    * TextCellRender.
    */
    var TextCellRenderer = function () {
        this.showTooltip = undefined;    // false
    };
    TextCellRenderer.prototype.type = CellRenderer.TEXT;
    
        
    /**
    * BarCellRenderer.
    */
    var BarCellRenderer = function () {
        this.minimum = undefined;         // 0;
        this.maximum = undefined;         // 100;
        this.minimumWidth = undefined;    // 100;
        this.showLabel = undefined;       // false
        this.origin = undefined;          // BarCellRendererOrigin.DEFAULT
    };
    BarCellRenderer.prototype.type = CellRenderer.BAR;

    /**
    * CheckCellRenderer.
    */
    var CheckCellRenderer = function () {
        this.trueValues = undefined;     // null, "aaa,bbb,ccc"
        this.falseValues = undefined;    // null
    };
    CheckCellRenderer.prototype.type = CellRenderer.CHECK;

    /**
    * ImageCellRenderer.
    */
    var ImageCellRenderer = function () {
        this.smoothing = undefined;     // false;
    };
    ImageCellRenderer.prototype.type = CellRenderer.IMAGE;

    /**
    * IconCellRenderer. 
    * 컬럼의 ImageList와 iconIndex 스타일 등으로 지정하는 이미지 아이콘과 텍스트를 같이 표시한다.
    */
    var IconCellRenderer = function () {
    };
    IconCellRenderer.prototype.type = CellRenderer.ICON;

    /**
    * ShapeCellRenderer.
    */
    var ShapeCellRenderer = function () {
    };
    ShapeCellRenderer.prototype.type = CellRenderer.SHAPE;
    ShapeCellRenderer.NULL = "null";
    ShapeCellRenderer.RECTANGLE = "rectangle";
    ShapeCellRenderer.TRIANLGE = "triangle";
    ShapeCellRenderer.INVERTED_TRIANGLE = "invertedtriangle";
    ShapeCellRenderer.DIAMOND = "diamond";
    ShapeCellRenderer.UP_ARROW = "uparrow";
    ShapeCellRenderer.DOWN_ARROW = "downarrow";
    ShapeCellRenderer.LEFT_ARROW = "leftarrow";
    ShapeCellRenderer.RIGHT_ARROW = "rightarrow";
    ShapeCellRenderer.PLUS = "plus";
    ShapeCellRenderer.MINUS = "minus";
    ShapeCellRenderer.EQUAL = "equal";
    ShapeCellRenderer.STAR = "star";

    /**
    * SignalCellRenderer.
    */
    var SignalCellRenderer = function () {
        this.barCount = undefined; // 4
    };
    SignalCellRenderer.prototype.type = CellRenderer.SIGNAL;
    
    /**
     * LinkCellRenderer
     */
    var LinkCellRenderer = function () {
        this.url = undefined;            // null - expression ("http://abc.com//${country}/")
        this.urlField = undefined;       // null
        this.showUrl = undefined;        // true - show tooltip
        this.requiredFields = undefined; // null, required field names in url expression ("fieldA,fieldB")
    };
    LinkCellRenderer.prototype.type = CellRenderer.LINK;

    /**
     * Code128CellRenderer 
     */
    var Code128CellRenderer = function() {
    };
    Code128CellRenderer.prototype.type = CellRenderer.CODE128;
     
    /**
     * Code39CellRenderer 
     */
    var Code39CellRenderer = function() {
    };
    Code39CellRenderer.prototype.type = CellRenderer.CODE39;

    /** 
     * SeriesCellRenderer
     */
    var SeriesCellRenderer = function () {
    };
    SeriesCellRenderer.ACTUAL_TARGET_BULLET = "actualTargetBullet";
    SeriesCellRenderer.ACTUAL_TARGET_TEXT = "actualTargetText";
    SeriesCellRenderer.SPARK_LINE = "sparkLine";
    SeriesCellRenderer.SPARK_COLUMN = "sparkColumn";
    SeriesCellRenderer.SPARK_WIN_LOSS = "sparkWinLoss";
    
    /**
     * ActualTargetBulletRenderer
     */
    var ActualTargetBulletRenderer = function () {
        this.minValue = undefined;              // 0
        this.maxValue = undefined;              // 1
        this.maximumBackground = undefined;     // null        
    };
    ActualTargetBulletRenderer.prototype.type = SeriesCellRenderer.ACTUAL_TARGET_BULLET;
    
    /**
     * ActualTargetTextRenderer
     */
    var ActualTargetTextRenderer = function () {
        this.separator = undefined;         // " / "
        this.actualForeground = undefined;  // null
        this.actualFont = undefined;        // null
        this.targetForeground = undefined;  // null
        this.targetFont = undefined;        // null
    };
    ActualTargetTextRenderer.prototype.type = SeriesCellRenderer.ACTUAL_TARGET_TEXT;
    
    /**
     * SparkLineRenderer
     */
    var SparkLineRenderer = function () {
        this.baseValue = undefined; // Number
        this.firstFill = undefined; // fill
        this.lastFill = undefined;  // fill
        this.highFill = undefined;  // fill
        this.lowFill = undefined;   // fill
        this.belowFill = undefined; // fill
    };
    SparkLineRenderer.prototype.type = SeriesCellRenderer.SPARK_LINE;
    
    /**
     * SparkColumnRenderer
     */
    var SparkColumnRenderer = function () {
        this.baseValue = undefined; // Number
        this.highFill = undefined;  // fill
        this.lowFill = undefined;   // fill
        this.belowFill = undefined; // fill
        this.barWidth = undefined;  // 0.8;
    };
    SparkColumnRenderer.prototype.type = SeriesCellRenderer.SPARK_COLUMN;
    
    /**
     * SparkWinLossRenderer
     */
    var SparkWinLossRenderer = function () {
        this.baseValue = undefined; // Number
        this.belowFill = undefined; // fill
        this.barWidth = undefined;      // 0.8;
        this.belowHeight = undefined;   // 0.4;
    };
    SparkWinLossRenderer.prototype.type = SeriesCellRenderer.SPARK_WIN_LOSS;
    
    /**
    * CellEditor.
    */
    var CellEditor = function () {
    };
    CellEditor.LINE = "line";
    CellEditor.MULTILINE = "multiLine";
    CellEditor.DROPDOWN = "dropDown";
    CellEditor.SEARCH = "search";
    CellEditor.NUMBER = "number";
    CellEditor.DATE = "date";

    /**
    * LineCellEditor.
    */
    var LineCellEditor = function () {
        this.maxLength = undefined;    // 0
        this.textCase = undefined;     // TextInputCase.NORMAL
    };
    LineCellEditor.prototype.type = CellEditor.LINE;

    /**
    * MultiLineCellEditor.
    */
    var MultiLineCellEditor = function () {
        this.maxLength = undefined;    // 0
        this.textCase = undefined;     // TextInputCase.NORMAL
    };
    MultiLineCellEditor.prototype.type = CellEditor.MULTILINE;

    /**
    * DropDownCellEditor.
    */
    var DropDownCellEditor = function () {
        this.maxLength = undefined;         // 0
        this.textReadOnly = undefined;      // false
        this.textCase = undefined;          // TextInputCase.NORMAL
        this.displayLabels = undefined;     // true
        this.values = undefined;            // null // []
        this.labels = undefined;            // null // []
        this.dropDownCount = undefined;     // 8
        this.itemSortStyle = undefined;     // ItemSortStyle.NONE
        this.caseSensitive = undefined;     // false;
        this.commitOnSelect = undefined;    // true
    };
    DropDownCellEditor.prototype.type = CellEditor.DROPDOWN;

    /**
    * SearchCellEditor.
    */
    var SearchCellEditor = function () {
        this.searchLength = undefined;      // 1
        this.searchDelay = undefined;       // 1000
        this.dropDownCount = undefined;     // 8
    }
    SearchCellEditor.prototype.type = CellEditor.SEARCH;
    
    /**
    * NumberCellEditor.
    */
    var NumberCellEditor = function () {
        this.maxLength = undefined;     // 0
        this.positiveOnly = undefined;  // false;
        this.integerOnly = undefined;   // false;
    };
    NumberCellEditor.prototype.type = CellEditor.NUMBER;

    /**
    * DateCellEditor.
    */
    var DateCellEditor = function () {
        this.textReadOnly = undefined;       // false
        this.yearNavigation = undefined;     // false
        this.commitOnSelect = undefined;     // true
        this.editFormat = null;
    };
    DateCellEditor.prototype.type = CellEditor.DATE;

    /**
    * ColumnHeader.
    */
    var ColumnHeader = function () {
        this.text = null;
    };

    /**
    * ColumnGroupHeader.
    */
    var ColumnGroupHeader = function () {
        this.text = null;
        this.visible = true;
    };
    
    /**
    * ColumnFooter.
    */
    var ColumnFooter = function () {
        this.text = undefined;                // null
        this.groupText = undefined;           // null
        this.expression = undefined;          // null, SummaryExpressionType
        this.groupExpression = undefined;     // null, SummaryExpressionType
        this.styles = undefined;              // null, GridViewStyles
        this.groupStyles = undefined          // null, GridViewStyles
    };
    
    /**
    * Column
    */
    var Column = function () {
    };
    // column properties
    Column.NAME = "name";
    Column.TAG = "tag";
    Column.WIDTH = "width";
    Column.DISPLAY_WIDTH = "displayWidth";
    Column.FIELD_NAME = "fieldName";
    Column.VISIBLE = "visible";
    Column.EDITABLE = "editable";
    Column.READ_ONLY = "readOnly";
    Column.RESIZABLE = "resizable";
    Column.MOVABLE = "movable";
    Column.SORTABLE = "sortable";
    Column.BUTTON = "button";
    Column.POPUP_MENU = "popupMenu";
    Column.IMAGE_LIST = "imageList";
    Column.HEADER = "header";


    /**
    * DataColumn 명세. undefined로 지정된 속성은 플렉스 쪽에서 무시한다.
    */
    var DataColumn = function () {
        this.name = undefined;
        this.tag = undefined;
        this.width = undefined;                         // 100
        this.displayWidth = undefined;
        this.height = undefined;
        this.fillHeight = undefined;                    // 0
        this.fillWidth = undefined;                     // 0
        this.fieldName = undefined;
        this.visible = undefined;                       // true
        this.editable = undefined;                      // true
        this.readOnly = undefined;                      // false
        this.resizable = undefined;                     // true
        this.movable = undefined;                       // true
        this.sortable = undefined;                      // true
        this.groupable = undefined;                     // true
        this.button = undefined;                        // CellButton.NONE
        this.popupMenu = undefined;                     // null
        this.alwaysShowButton = undefined;              // false
        this.alwaysShowEditButton = undefined;          // false    
        
        this.mergeRule = undefined;                     // Cell merging rule, ex) { criteria: "value" }
        this.equalBlank = undefined;                    // false
        
        this.labelField = undefined;                    // null
        this.labels = undefined;                        // Empty Array
        this.values = undefined;                        // Empty Array
        this.lookupDisplay = undefined;                 // false
        this.lookupKeyFields = undefined;               // null
        this.lookupSourceId = undefined;                // null

        this.defaultValue = undefined;
        this.required = undefined;                      // false
        this.requiredLevel = undefined;                 // ValidationLevel.ERROR
        this.requiredMessage = undefined;               // null
        this.imeMode = undefined;                       // ImeMode.DontCare
        this.textInputCase = undefined;                 // TextInputCase.NORMAL
        this.nanText = undefined;                       // null
        this.imageList = undefined;

        this.header = undefined;                        // ColumnHeader
        this.styles = undefined;                        // GridViewStyles
        this.dynamicStyles = undefined;                 // DynamicStyle[]
        this.ignoreDefaultDynamicStyles = undefined;    // false
        this.footer = undefined;                        // ColumnFooter
        this.editor = undefined;                        // CellEditor
        this.renderer = undefined;                      // CellRenderer
        this.filters = undefined;                       // ColumnFilter[]
        this.validations = undefined;                   // EditValidation[]
    };
    DataColumn.prototype.type = "data";
    DataColumn.prototype.proxy = function () {
        return {
            type: this.type,
            refId: this.refId
        };
    };

    /**
    * ColumnGroup 명세. undefined로 지정된 속성은 플렉스 쪽에서 무시한다.
    */
    var ColumnGroup = function () {
        this.orientation = ColumnGroupOrientation.HORIZONTAL;
        this.header = undefined; // ColumnHeader
        this.name = undefined;
        this.width = 120;
        this.visible = true;
        this.resizable = true;
        this.movable = true;
        this.displayIndex = undefined;
        this.displayWidth = undefined;
        this.hideChildHeaders = false;
        this.styles = undefined;
    };
    ColumnGroup.prototype.type = "group";
    ColumnGroup.prototype.proxy = function () {
        return {
            type: this.type,
            refId: this.refId
        };
    };
    // properties
    ColumnGroup.ORIENTATION = "orientation";
    ColumnGroup.HIDE_CHILD_HEADERS = "hideChildHeaders";

    // 아래 옵션들은 생성자로서 사용되어서는 안된다.
    // 그리드에서 지정된 기본값을 표시한 속성들의 명세다.
    // 그리드로 설정을 넘길 때는 속성들 중 변경할 값들만 넘겨야 한다.
    // undefine로 지정된 속성은 flex에서 무시한다.

    /**
    * Grid options.
    */
    var GridOptions = function () {
        this.summaryMode = undefined;     // SummaryMode.AGGREGATE;
        this.hideDeletedRows = undefined; // false         
    };

    /**
    * Toast view options.
    */
    var ToastOptions = function () {
        this.visible = undefined;     // true
        this.message = undefined;     // null
    };

    /**
    * Display options.
    */
    var DisplayOptions = function () {
        this.columnResizable = undefined;         // true
        this.columnMovable = undefined;           // true
        this.parentChangable = undefined;         // false
        this.defaultColumnWidth = undefined;      // 120
        this.fitStyle = undefined;                // GridFitStyle.NONE
        this.rowResizable = undefined;            // false
        // @Deprecated use rowHeight instead.
        this.defaultRowHeight = undefined;        // 0
        this.rowHeight = undefined;               // 0
        this.minRowHeight = undefined;            // 4
        this.maxRowHeight = undefined;            // 0
        this.hscrollBar = undefined;              // true
        this.vscrollBar = undefined;              // true
        this.hscrollOverflow = undefined;         // 0
        this.vscrollOverflow = undefined;         // 0
        this.horzScrollStep = undefined;          // 8
        this.emptyMessage = undefined;            // "Loading..."
        // defaultRowHeight가 0일 때 행 높이를 결정하는 방법, null이면 데이터에 따라 자동으로 결정 
        this.heightMeasurer = undefined;          // null
        // Grid 크기가 변경될 때 가로 Scroll 위치를 계산하여 변경  
        this.fitWhenResized = undefined;          // true, When grid is resized, diplay maximum data column 
        // false이면 스크롤이 끝날때 표시되고 true이면 스크롤되는중에도 표시
        this.liveScroll = undefined;              // true
        
        this.focusVisible = undefined;            // true
        this.focusColor = undefined;              // 0x555555
        this.focusActiveColor = undefined;        // NaN
    };

    /**
    * Editing options.
    */
    var EditOptions = function () {
        this.deletable = undefined;               // false
        this.deleteRowsConfirm = undefined;       // true
        this.deleteRowsMessage = undefined;       //
        this.readOnly = undefined;                // false
        this.editable = undefined;                // true
        this.appendable = undefined;              // false
        this.insertable = undefined;              // false
        this.updatable = undefined;               // true
        this.validateOnEdited = undefined;        // true
        this.validateOnExit = undefined;          // false
        this.hintOnError = undefined;             // true
        this.commitLevel = undefined;             // ValidationLevel.IGNORE
        this.useTabKey = undefined;               // true
        this.enterToTab = undefined;              // false
        this.enterToNextRow = undefined;          // false
        this.enterToEdit = undefined;             // false
        this.commitWhenExitLast = undefined;      // false  
        this.crossWhenExitLast = undefined;       // false
        // 변경된 내용이 없어도 appending 상태에서 항상 commit
        this.forceAppend = undefined;             // false
        // 변경된 내용이 없어도 inserting 상태에서 항상 commit
        this.forceInsert = undefined;             // false
        this.checkable = undefined;               // true
        // 사용자 수정 완료 시 실제 변경이 있었는 지를 검사한다.
        this.checkDiff = undefined;               // false
        this.checkCellDiff = undefined;           // false
        this.strictDiff = undefined;			  // false	
        this.deletableWhenEdit = undefined;       // true
        this.skipReadOnly = undefined;            // false
        this.showCommitError = undefined;         // true
        this.fontName = undefined;                // null
        this.fontSize = undefined;                // NaN
    };

    /**
    * Copy options.
    */
    var CopyOptions = function () {
        this.singleMode = undefined;         // false
        this.datetimeFormat = undefined;     // null
        this.booleanFormat = undefined;     // null
    };

    /**
    * Paste options.
    */
    var PasteOptions = function () {
        this.singleMode = undefined;              // false; 
        this.startEdit = undefined;               // true;
        this.commitEdit = undefined;              // true;
        this.enableAppend = undefined;            // true;
        this.fillFieldDefaults = undefined;       // false;
        this.fillColumnDefaults = undefined;      // false;
        this.forceRowValidation = undefined;      // false;
        this.forceColumnValidation = undefined;   // false;
        this.datetimeFormats = undefined;         // null;
        this.booleanFormat = undefined;           // null;
        this.numberChars = undefined;             // null;
        this.selectionBase = undefined;           // false;
        this.stopOnError = undefined;             // true;
        this.noEditEvent = undefined;             // false;
    };

    /**
    * Fixed options.
    */
    var FixedOptions = function () {
        this.colCount = undefined;              // 0
        this.rowCount = undefined;              // 0
        this.exceptFromFiltering = undefined;   // true
        this.exceptFromSorting = undefined;     // true
        this.editable = undefined;              // true
        this.resizable = undefined;             // false
        this.rowResizable = undefined;          // false
        // 최상위 컬럼들에만 적용
        this.movable = undefined;               // false
        this.colBarWidth = undefined;           // 3
        this.rowBarHeight = undefined;          // 3
        this.ignoreColumnStyles = undefined;    // true
        this.ignoreDynamicStyles = undefined;   // false
    };

    /**
    * RowGroup options
    */
    var RowGroupOptions = function () {
        this.expandedAdornments = undefined;     // RowGroupAdornments.BOTH
        this.collapsedAdornments = undefined;    // RowGroupAdornments.HEADER
        this.summaryMode = undefined;            // SummaryMode.AGGREGATE
        this.cellDisplay = undefined;            // RowGroupCellDisplay.MERGE
        this.headerStatement = undefined;        // "${groupField}: ${groupValue} - ${rowCount} rows"
        this.levelIndent = undefined;            // 20
        this.mergeExpander = undefined;          // true
        this.mergeMode = undefined;              // false
    };

    /**
    * Select options.
    */
    var SelectOptions = function () {
        this.style = undefined;             // SelectionStyle.BLOCK
        //this.rangeSelect = undefined;     // true
    };

    /**
    * Sorting options.
    */
    var SortingOptions = function () {
        this.enabled = undefined;                 // true
        this.style = undefined;                   // SortStyle.EXCLUSIVE
        this.keepFocusedRow = undefined;		  // false
        //this.commitBeforeSorting = undefined;   // true
        this.toast = undefined;                   // ToastOptions { visible: false, message: "Sorting..." }
    };

    /**
    * FilterSelector options
    */
    var FilterSelectorOptions = function () {
        this.minWidth = undefined;            // 0
        this.maxWidth = undefined;            // 0
        this.minHeight = undefined;           // 0
        this.maxHeight = undefined;           // 0
        this.styles = undefined;              // GridViewStyles
        this.closeWhenClick = undefined;      // false
        this.showAll = undefined;             // true
     };
    
    /**
    * Filtering options
    */
    var FilteringOptions = function () {
        this.enabled = undefined;                 // true;
        this.handleVisibility = undefined;        // "visible"(default), "hovered", "hidden"
        this.toast = undefined;                   // ToastOptions { visible: false, message: "Filtering..." }
        this.selector = undefined;                // FilterSelectorOptions 
    };

    /**
    * Row grouping options
    */
    var GroupingOptions = function () {
        this.enabled = undefined;                 // true;
        this.prompt = undefined;                  // "컬럼 헤더를 이 곳으로 끌어다 놓으면 그 컬럼으로 그룹핑합니다.";
        this.linear = undefined;                  // false;
        this.expandWhenGrouping = undefined;      // true
        this.toast = undefined;                   // ToastOptions { visible: false, message: "Grouping..." }
    };

    /**
    * Panel options.
    * @Deprecated Use Panel instead.
    */
    var PanelOptions = function () {
        this.minHeight = undefined;   // 20
        this.visible = undefined;     // true
        this.height = undefined;      // 0
    };

    /**
    * Grid panel options.
    */
    var Panel = function () {
        this.minHeight = undefined;   // 20
        this.visible = undefined;     // true
        this.height = undefined;      // 0
    };

    /**
    * Indicator options.
    */
    var Indicator = function () {
        this.displayValue = undefined;     // IndicatorValue.INDEX
        this.minWidth = undefined;         // 40
        this.maxWidth = undefined;         // 0
        this.width = undefined;            // 0
        this.selectable = undefined;       // true
        this.visible = undefined;          // true
        this.zeroBase = undefined;         // false
        this.indexOffset = undefined;      // 0
        this.rowOffset = undefined;        // 0
    };

    /**
    * State bar options.
    * @Deprecated use StateBar instead.
    */
    var StatusBar = function () {
        this.width = undefined;       // 20
        this.visible = undefined;     // tru
    };

    /**
    * State bar options.
    */
    var StateBar = function () {
        this.width = undefined;       // 20
        this.visible = undefined;     // tru
    };

    /**
    * Check bar options.
    */
    var CheckBar = function () {
        this.width = undefined;                 // 20
        this.showAll = undefined;               // true
        this.showGroup = undefined;             // true
        this.visibleOnly = undefined;           // false
        this.checkableOnly = undefined;         // true
        this.visible = undefined;               // true
        this.exclusive = undefined;             // false
        this.checkableExpression = undefined;   // null
    };

    /**
    * Header options.
    */
    var Header = function () {
        this.height = undefined;        // 0
        this.minHeight = undefined;     // 23
        this.resizable = undefined;     // false
        this.visible = undefined;       // true
        this.filterable = undefined;    // true
        this.sortable = undefined;      // true
    };

    /**
    * Footer options.
    */
    var Footer = function () {
        this.height = undefined;     // 0
        this.minHeight = undefined;  // 23
        this.resizable = undefined;  // false
        this.visible = undefined;    // true
    };

    /**
    * GridView styles. 명시적으로 값이 지정되지 않은 속성은 조상 스타일 값을 계승한다. "자신의 명시적인 값 > 조상들의
    * 명시적인 값 > 기본값 > 조상들의 기본값 > 스타일 클래스 기본값" 순서대로 우선 순위를 갖는다. undefined로 값을
    * 지정하면 그 스타일의 명시적 설정값을 지운다. undefined가 아닌 값으로 지정하면 그 값이 이 스타일의 명시적인 값이 된다.
    */
    var GridViewStyles = function (styles) {
        if (styles) {
            for (var prop in styles) {
                this[prop] = styles[prop];
            };
        };

        // this.background = "#ffffffff";
        // this.selectedBackground = "#FF696969";
        // this.inactiveBackground = "#FFD3D3D3";
        // this.border = null;
        // this.borderLeft =
        // this.borderRight =
        // this.borderTop =
        // this.borderBottom =
        // this.line =
        // this.font =
        // this.foreground =
        // this.textAlignment =
        // this.lineAlignment =
        // this.numberFormat =
        // this.dateFormat =
        // this.prefix =
        // this.postfix =
        // this.textWrap =
        // this.paddingLeft =
        // this.paddingRight =
        // this.paddingTop =
        // this.paddingBottom =
        // this.buttonWidth =
        // this.iconIndex =
        // this.iconLocation =
        // this.iconAlignment =
        // this.iconOffset =
        // this.iconPadding =
        // this.contentFit =
        // this.selectionDisplay =
        // this.hoveredBackground =
        // this.hoveredForeground =
        // this.hoveredMaskBackground =
        // this.hoveredMaskBorder =
        // this.figureBackground =
        // this.figureInactiveBackground =
        // this.figureBorder =
        // this.figureSize =
        // this.figureName =
        // this.figureState =
    };
    // style regions
    GridViewStyles.DEFAULT = "grid";
    GridViewStyles.PANEL = "panel";
    GridViewStyles.BODY = "body";
    GridViewStyles.BODY_EMPTY = "body.empty";
    GridViewStyles.FIXED = "fixed";
    GridViewStyles.FIXED_COLBAR = "fixed.colBar";
    GridViewStyles.FIXED_ROWBAR = "fixed.rowBar";
    GridViewStyles.HEADER = "header";
    GridViewStyles.HEADER_GROUP = "header.group";
    GridViewStyles.FOOTER = "footer";
    GridViewStyles.ROWGROUP_HEADER = "rowGroup.header";
    GridViewStyles.ROWGROUP_FOOTER = "rowGroup.footer";
    GridViewStyles.ROWGROUP_HEAD = "rowGroup.head";
    GridViewStyles.ROWGROUP_FOOT = "rowGroup.foot";
    GridViewStyles.ROWGROUP_BAR = "rowGroup.bar";
    GridViewStyles.ROWGROUP_HEADER_BAR = "rowGroup.headerBar";
    GridViewStyles.ROWGROUP_FOOTER_BAR = "rowGroup.footerBar";
    GridViewStyles.ROWGROUP_PANEL = "rowGroup.panel";
    GridViewStyles.ROWGROUP_LEVELS = "rowGruop.levels";
    GridViewStyles.INDICATOR = "indicator";
    GridViewStyles.INDICATOR_HEAD = "indicator.head";
    GridViewStyles.INDICATOR_FOOT = "indicator.foot";
    GridViewStyles.CHECKBAR = "checkBar";
    GridViewStyles.CHECKBAR_HEAD = "checkBar.head";
    GridViewStyles.CHECKBAR_FOOT = "checkBar.foot";
    GridViewStyles.STATEBAR = "stateBar";
    GridViewStyles.STATEBAR_HEAD = "stateBar.head";
    GridViewStyles.STATEBAR_FOOT = "stateBar.foot";
    // @Deprecate Use STATEBAR instead.
    GridViewStyles.STATUSBAR = "statusBar";
    // @Deprecate Use STATEBAR_HEAD instead.
    GridViewStyles.STATUSBAR_HEAD = "statusBar.head";
    // @Deprecate Use STATEBAR_FOOT instead.
    GridViewStyles.STATUSBAR_FOOT = "statusBar.foot";
    GridViewStyles.SELECTION = "selection";
    GridViewStyles.TREE_EXPANDER = "tree.expander";

    /**
    * GridBase
    */
    var GridBase = function (id, ignoreVersion) {
        this.id = id;
        this.dom = win.jQuery ? $("#" + id)[0] : doc.getElementById(id);

        if (!ignoreVersion)
            checkVersion(this.dom);

        this.dataProvider = null;

        this.__defStyles = new GridViewStyles();
        this.__maxRef = 0;
        __grids[id] = this;

        function calcVersion(ver) {
            ver = ver.split(".");
            var v = 0;
            for (var i = ver.length - 1; i >= 0; i--) {
                v += Math.pow(10, ver.length - 1 - i) * ver[i];
            };
            return v;
        };

        function checkVersion(dom) {
            if (dom && dom.getVersion) {
                var swf = dom.getVersion();
                if (!swf) {
                    alert("Can not load RealGridPlus version data.");
                    return;
                };

                var swfver = calcVersion(swf);
                var reqver = calcVersion(REQUIRED_VERSION);
                if (swfver < reqver) {
                    alert("This is old RealGridPlus version: " + swf + "\n" + "Please refresh page for: " + REQUIRED_VERSION);
                };
            } else {
                alert("RealGridPlus is unloaded or invalid version data.");
            };
        };
        
        // events
        this.onCurrentChanging = DEBUG ? function (grid, oldIndex, newIndex) {
            _log("onCurrentChanging: " + "(" + oldIndex.itemIndex + ", " + oldIndex.column + ") => (" + newIndex.itemIndex + ", " + newIndex.column + ")");
            return true;
        } : null;
        this.onCurrentChanged = DEBUG ? function (grid, newIndex) {
            _log("onCurrentChanged: " + "(" + newIndex.itemIndex + ", " + newIndex.column + ")");
        } : null;
        this.onCurrentRowChanged = DEBUG ? function (grid, oldRow, newRow) {
            _log("onCurrentRowChanged: " + "(" + oldRow + " => " + newRow + ")");
        } : null;
        this.onDataCellClicked = DEBUG ? function (grid, index) {
            _log("onDataCellClicked: " + "(" + index.itemIndex + ", " + index.column + ")");
        } : null;
        this.onDataCellDblClicked = DEBUG ? function (grid, index) {
            _log("onDataCellDblClicked: " + "(" + index.itemIndex + ", " + index.column + ")");
        } : null;
        // 삭제하지 못하게 하려면 string 메시지나 boolean false를 리턴한다.
        this.onRowsDeleting = DEBUG ? function (grid, rows) {
            _log("onRowsDeleting:" + rows);
            return null;
        } : null;
        // 추가하지 못하게 하려면 string 메시지나 boolean false를 리턴한다.
        this.onRowInserting = DEBUG ? function (grid, itemIndex) {
            _log("onRowInserting:" + itemIndex);
            return null;
        } : null;
        this.onSelectionAdded = DEBUG ? function (grid, selection) {
            _log("onSelectionAdded: " + selection.startItem + "," + selection.startColumn + ": " + selection.endItem + "," + selection.endColumn);
        } : null;
        this.onSelectionChanged = DEBUG ? function (grid) {
            _log("onSelectionChanged");
        } : null;
        this.onSelectionEnded = DEBUG ? function (grid) {
            _log("onSelectionEnded");
        } : null;
        this.onColumnHeaderClicked = DEBUG ? function (grid, column) {
            _log("onColumnHeaderClicked: " + "(" + column.name + ")");
        } : null;
        this.onColumnHeaderDblClicked = DEBUG ? function (grid, column) {
            _log("onColumnHeaderDblClicked: " + "(" + column.name + ")");
        } : null;
        this.onCellButtonClicked = DEBUG ? function (grid, itemIndex, column) {
            _log("onCellButtonClicked: " + "(" + itemIndex + ", " + column.fieldName + ")");
        } : null;
        // 문제가 있으면 ValidationResult 리턴. 문제 없으면 null 리턴.
        this.onValidateColumn = DEBUG ? function (grid, column, inserting, value) {
            _log("onValidateColumn:" + column.fieldName + "," + inserting + "," + value);
            return null;
        } : null;
        // 문제가 있으면 ValidationResult 리턴. 문제 없으면 null 리턴.
        this.onValidateRow = DEBUG ? function (grid, itemIndex, dataRow, inserting, values) {
            _log("onValidateRow:" + itemIndex + "," + dataRow + "," + inserting + "," + values);
            return null;
        } : null;
        this.onShowEditor = DEBUG ? function (id, index) {
            _log("onShowEditor:" + index.itemIndex + "," + index.column);            
        } : null; 
        this.onEditChange = DEBUG ? function (id, index, value) {
            _log("onEditChange:" + index.itemIndex + "," + index.column + " => " + value);
        } : null;
        this.onCellEdited = DEBUG ? function (grid, itemIndex, dataRow, field) {
            _log("onCellEdited:" + itemIndex + "," + dataRow + "," + field);
        } : null;
        this.onEditCommit = DEBUG ? function (id, index, oldValue, newValue) {
            _log("onEditCommit:" + index.itemIndex + "," + index.column + ", " + oldValue + " => " + newValue);
            return null;            
        } : null;
        this.onEditCanceled = DEBUG ? function (id, index) {
            _log("onEditCanceled:" + index.itemIndex + "," + index.column);
        } : null;
        this.onEditSearch = DEBUG ? function (id, index, text) {
            _log("onEditSearch:" + index.itemIndex + "," + index.column + ", " + text);
        } : null;
        this.onEditRowChanged = DEBUG ? function (grid, itemIndex, dataRow, field, oldValue, newValue) {
            _log("onEditRowChanged:" + itemIndex + "," + dataRow + "," + field + ": " + oldValue + " => " + newValue);
        } : null;
        this.onEditRowPasted = DEBUG ? function (grid, itemIndex, dataRow, fields, oldValues, newValues) {
            _log("onEditRowPasted:" + itemIndex + "," + dataRow + "," + fields + ": " + oldValues + " => " + newValues);
        } : null;
        this.onItemChecked = DEBUG ? function (grid, itemIndex, checked) {
            _log("onItemChecked:" + itemIndex + "," + checked);
        } : null;
        this.onItemsChecked = DEBUG ? function (grid, items, checked) {
            _log("onItemsChecked:" + items.length + " rows " + checked);
        } : null;
        this.onItemAllChecked = DEBUG ? function (grid, checked) {
            _log("onItemAllChecked:" + checked);
        } : null;
        this.onScrollToBottom = DEBUG ? function (grid) {
            _log("onScrollToBottom");
        } : null;
        this.onErrorClicked = DEBUG ? function (grid, error) {
            _log("onErrorClicked: " + error);
            alert(error);
        } : null;
        this.onMenuItemClicked = DEBUG ? function (grid, data) {
            _log("onMenuItemClick: " + data);
        } : null;
        this.onContextMenuItemClicked = DEBUG ? function (grid, label, index) {
            _log("onContextMenuItemClicked: " + label);
        } : null;
        this.onFilteringChanged = DEBUG ? function (grid) {
            _log("onFilteringChanged");
        } : null;
        this.onFilterActionClicked = DEBUG ? function (grid, column, action, x, y) {
            _log("onFilterActionClicked: " + column + ", " + action + ", " + x + ", " + y);
        } : null;
        this.onLinkableCellClicked = DEBUG ? function (grid, index, url) {
            _log("onLinkableCellClicked: " + "(" + index.itemIndex + ", " + index.column + "), " + url);
        } : null;
        this.onSortingChanged = DEBUG ? function (grid) {
            _log("onSortingChanged");
        } : null;
    };
    function __setIndices(grid, columns) {
        for (var i = 0; i < columns.length; i++) {
            column = columns[i];
            column.refId = grid.__maxRef++;
            if (column.columns) {
                __setIndices(grid, column.columns);
            };
        };
    };
    
    GridBase.prototype = {
        constructor: GridBase,

        getVersion: function () {
            return this.dom.getVersion();
        },
        ping: function (message) {
            this.dom.ping(message);
        },
        refresh: function () {
            this.dom.refreshGrid();
        },
        setFocus: function () {
            // ie에서 동작한다.
            this.dom.focus();
            this.dom.setFocus();
        },
        beginUpdate: function () {
            this.dom.beginUpdate();
        },
        endUpdate: function (force) {
            this.dom.endUpdate(arguments.length > 0 ? force : true);
        },
        setCachedCell: function (cached) {
            this.dom.setCachedCell(cached);
        },
        setDisplayError: function (displayError) {
            this.dom.setDisplayError(displayError);
        },
        clearError: function () {
            this.dom.clearError();
        },
        setDisplayUpdateError: function (displayError) {
            displayError = arguments.length > 0 ? displayError : true;
            this.dom.setDisplayUpdateError(displayError);
        },
        setThrowUpdateError: function (throwError) {
            throwError = arguments.length > 0 ? throwError : true;
            this.dom.setThrowUpdateError(throwError);
        },
        clearUpdateError: function () {
            this.dom.clearUpdateError();
        },
        requestUpdateError: function (context, message) {
            this.dom.requestUpdateError(context, message);
        },
        getItemCount: function () {
            return this.dom.getItemCount();
        },

        /// data
        setDataProvider: function (provider) {
            if (!provider.dom) {
                provider.dom = this.dom;
                this.dom.setDataProvider(provider.type);
            };
            this.dataProvider = provider;
        },
        getDataProvider: function () {
            return this.dataProvider;
        },
        // @Deprecate Use getDataRow() instead.
        getRowId: function (itemIndex) {
            return this.dom.getDataIndex(itemIndex);
        },
        getDataRow: function (itemIndex) {
            return this.dom.getRowIndex(itemIndex);
        },
        getItemIndex: function (dataRow) {
            return this.dom.getItemIndex(dataRow);
        },
        getRowsOfItems: function (items) {
            return this.dom.getRowsOfItems(items);
        },
        getItemsOfRows: function (rows) {
            return this.dom.getItemsOfRows(rows);
        },
        // @Deprecated Use getValues() instead.
        getRowData: function (itemIndex) {
            return this.dom.getValues(itemIndex);
        },
        // @Deprecated Use setValues() instead.
        setRowData: function (itemIndex, values, strict) {
            strict = arguments.length > 2 ? strict : false;
            return this.dom.setValues(itemIndex, values, strict);
        },
        // return 되는 row 개체의 __rowId 속성에 row id가 담겨있다.
        getValues: function (itemIndex) {
            return this.dom.getValues(itemIndex);
        },
        setValues: function (itemIndex, values, strict) {
            strict = arguments.length > 2 ? strict : false;
            return this.dom.setValues(itemIndex, values, strict);
        },
        getValue: function (itemIndex, field) {
            return this.dom.getValue(itemIndex, field);
        },
        setValue: function (itemIndex, field, value) {
            this.dom.setValue(itemIndex, field, value);
        },
        getItemState: function (itemIndex) {
            return this.dom.getItemState(itemIndex);
        },
        getEditingItem: function () {
            return this.dom.getEditingItem();
        },
        orderBy: function (fieldNames, sortDirs) {
            if (fieldNames) {
                this.dom.orderBy(fieldNames, sortDirs);
            };
        },
        getSortedFields: function () {
        	return this.dom.getSortedFields();
        },
        getSummary: function (field, summary) {
            summary = arguments.length > 1 ? summary : "sum";
            return this.dom.getSummary(field, summary);
        },
        
        // item model
        getModel: function (itemIndex, extended) {
            return this.dom.getModel(itemIndex, extended);
        },    
        getModelAs: function (itemIndex, itemType, extended) {
            return this.dom.getModelAs(itemIndex, itemType, extended);
        },    
        getParentModel: function (model, extended) {
            return this.dom.getParentModel(model, extended);
        },    
        getRootModel: function (model, extended) {
            return this.dom.getRootModel(model, extended)
        },
        getChildModels: function (model, extended) {
            return this.dom.getChildModels(model, extended);
        },
        getChildModel: function (model, index, extended) {
            return this.dom.getChildModel(model, index, extended);
        },
        getModels: function (itemIndices, extended) {
            return this.dom.getModels(itemIndices, extended);
        },    
        getModelOfRow: function (dataRow, extended) {
            return this.dom.getModelOfRow(dataRow, extended);
        },    
        getModelsOfRows: function (dataRows, extended) {
            return this.dom.getModelsOfRows(dataRows, extended);
        },    

        /// lookups
        setLookups: function (sources) {
            this.dom.setLookups(sources);
        },
        addLookupSource: function (source) {
            this.dom.addLookupSource(source);
        },
        removeLookupSource: function (sourceId) {
            this.dom.removeLookupSource(sourceId);
        },
        existsLookupData: function (sourceId, keys) {
            return this.dom.existsLookupData(sourceId, keys);
        },
        fillLookupData: function (sourceId, data) {
            this.dom.fillLookupData(sourceId, data);
        },
        clearLookupData: function (sourceId) {
            this.dom.clearLookupData(sourceId);
        },

        /// columns
        setColumns: function (columns) {
            this.__maxRef = 0;
            __setIndices(this, columns);
            this.dom.setColumns(columns);
        },
        getColumnNames: function (columnsOnly) {
            return this.dom.getColumnNames(arguments.length > 0 ? columnsOnly : false);
        },
        // @Deprecated use getColumnGroupNames instead.
        getGroupNames: function () {
            return this.dom.getGroupNames();
        },
        getColumnGroupNames: function () {
            return this.dom.getGroupNames();
        },
        // @Deprecated use columnByName instead.
        findColumn: function (name) {
            return this.dom.columnByName(name);
        },
        columnByName: function (name) {
            return this.dom.columnByName(name);
        },
        columnByTag: function (tag) {
            return this.dom.columnByTag(tag);
        },
        columnsByTag: function (tag) {
            return this.dom.columnsByTag(tag);
        },
        columnByField: function (fieldName) {
            return this.dom.columnByField(fieldName);
        },
        columnsByField: function (fieldName) {
            return this.dom.columnsByField(fieldName);
        },
        // @Deprecated use getColumnProperty instead.
        getColumnHeader: function (column) {
            if (typeof column === "string") {
                var col = this.dom.columnByName(column);
                return col && this.dom.getColumnHeader(col.refId);
            } else if (column) {
                return this.dom.getColumnHeader(column.refId);
            };
        },
        // @Deprecated
        getProxy: function (column) {
            if (column) {
                proxy = {
                    type: column.type,
                    refId: column.refId,
                    name: column.name
                };
                proxy.column = column;
                return proxy;
            };
            return null;
        },
        setColumn: function (column) {
            this.dom.setColumn(column);
        },
        _getColumn: function (column) {
            return (typeof column === "string") ? this.dom.columnByName(column) : column;
        },
        getColumnProperty: function (column, prop) {
            var col = this._getColumn(column);
            return col ? this.dom.getColumnProperty(col.refId, prop) : undefined;
        },
        setColumnProperty: function (column, prop, value) {
            var col = this._getColumn(column);
            col && this.dom.setColumnProperty(col.refId, prop, value);
        },
        /// column filters
        setColumnFilters: function (column, filters) {
            var col = this._getColumn(column);
            col && this.dom.setColumnFilters(col.refId, filters);
        },
        clearColumnFilters: function (column) {
            var col = this._getColumn(column);
            col && this.dom.clearColumnFilters(col.refId);
        },
        addColumnFilters: function (column, filters, overwrite) {
            overwrite = arguments.length > 2 ? overwrite : false;
            var col = this._getColumn(column);
            col && this.dom.addColumnFilters(col.refId, filters, overwrite);
        },
        removeColumnFilters: function (column, filterNames) {
            var col = this._getColumn(column);
            col && this.dom.removeColumnFilters(col.refId, filterNames);
        },
        activateColumnFilters: function (column, filterNames, active) {
            var col = this._getColumn(column);
            col && this.dom.activateColumnFilters(col.refId, filterNames, active);
        },
        activateAllColumnFilters: function (column, active) {
            var col = this._getColumn(column);
            col && this.dom.activateAllColumnFilters(col.refId, active);
        },
        toggleColumnFilters: function (column, filterNames) {
            var col = this._getColumn(column);
            col && this.dom.toggleColumnFilters(col.refId, filterNames);
        },
        toggleAllColumnFilters: function (column) {
            var col = this._getColumn(column);
            col && this.dom.toggleAllColumnFilters(col.refId);
        },
        getColumnFilter: function (column, filterName) {
            var col = this._getColumn(column);
            return col && this.dom.getColumnFilter(col.refId, filterName);
        },
        getColumnFilters: function (column) {
            var col = this._getColumn(column);
            return col && this.dom.getColumnFilters(col.refId);
        },
        getActiveColumnFilters: function (column, active) {
            active = arguments.length > 1 ? active : true;
            var col = this._getColumn(column);
            return col && this.dom.getActiveColumnFilters(col.refId, active);
        },
        /// column filter actions
        setColumnFilterActions: function (column, actions) {
            var col = this._getColumn(column);
            col && this.dom.setColumnFilterActions(col.refId, actions);
        },
        clearColumnFilterActions: function (column) {
            var col = this._getColumn(column);
            col && this.dom.clearColumnFilterActions(col.refId);
        },
        /// column layout
        // @Deprecated use registerColumnLayouts instead.
        setColumnLayouts: function (layouts) {
            this.dom.registerColumnLayouts(layouts);
        },
        registerColumnLayouts: function (layouts) {
            this.dom.registerColumnLayouts(layouts);
        },
        setColumnLayout: function (layout) {
            this.dom.setColumnLayout(layout);
        },
        // @Deprecated use saveColumnLayout instead.
        getDisplayColumns: function () {
            return this.dom.getDisplayColumns();
        },
        restoreColumns: function (restoreSize) {
            restoreSize = arguments.length > 0 ? restoreSize : true;
            return this.dom.restoreColumns(restoreSize);
        },
        linearizeColumns: function (sortProps) {
            return this.dom.linearizeColumns(sortProps);
        },
        saveColumnLayout: function () {
            return this.dom.saveColumnLayout();
        },
        fitColumnWidth: function(column, maxWidth, minWidth, visibleOnly) {
            maxWidth = arguments.length > 1 ? maxWidth : 0;
            minWidth = arguments.length > 2 ? minWidth : 0;
            visibleOnly = arguments.length > 3 ? visibleOnly : true;
            return this.dom.fitColumnWidth(column, maxWidth, minWidth, visibleOnly);
        },

        /// options
        setGridOptions: function (options) {
            this.dom.setGridOptions(options);
        },
        getGridOptions: function () {
            return this.dom.getGridOptions();
        },
        setOptions: function (options) {
            this.dom.setGridOptions(options);
        },
        getOptions: function () {
            return this.dom.getGridOptions();
        },
        // @Deprecated Use getOptions/setOptions instead.
        options: function (options) {
            if (!arguments.length)
                return this.dom.getGridOptions();
            else if (options)
                this.dom.setGridOptions(options);
        },
        setDisplayOptions: function (options) {
            this.dom.setDisplayOptions(options);
        },
        getDisplayOptions: function () {
            return this.dom.getDisplayOptions();
        },
        // @Deprecated Use getDisplayOptions/setDisplayOptions instead.
        displayOptions: function (options) {
            if (!arguments.length)
                return this.dom.getDisplayOptions();
            else if (options)
                this.dom.setDisplayOptions(options);
        },
        setEditOptions: function (options) {
            this.dom.setEditOptions(options);
        },
        getEditOptions: function () {
            return this.dom.getEditOptions();
        },
        // @Deprecated Use setEditOptions/getEditOptions instead.
        editOptions: function (options) {
            if (!arguments.length)
                return this.dom.getEditOptions();
            else if (options)
                this.dom.setEditOptions(options);
        },
        setCopyOptions: function (options) {
            this.dom.setCopyOptions(options);
        },
        getCopyOptions: function () {
            return this.dom.getCopyOptions();
        },
        setPasteOptions: function (options) {
            this.dom.setPasteOptions(options);
        },
        getPasteOptions: function () {
            return this.dom.getPasteOptions();
        },
        // @Deprecated Use setPanel instead.
        setPanelOptions: function (options) {
            this.dom.setPanelOptions(options);
        },
        // @Deprecated Use getPanel instead.
        getPanelOptions: function () {
            return this.dom.getPanelOptions();
        },
        // @Deprecated Use getPanel/setPanel instead.
        panel: function (options) {
            if (!arguments.length)
                return this.dom.getPanelOptions();
            else if (options)
                this.dom.setPanelOptions(options);
        },
        setFixedOptions: function (options) {
            this.dom.setFixedOptions(options);
        },
        getFixedOptions: function () {
            return this.dom.getFixedOptions();
        },
        // @Deprecated Use getFixedOptions/setFixedOptions instead.
        fixedOptions: function (options) {
            if (!arguments.length)
                return this.dom.getFixedOptions();
            else if (options)
                this.dom.setFixedOptions(options);
        },
        setPanel: function (options) {
            this.dom.setPanel(options);
        },
        getPanel: function () {
            return this.dom.getPanel();
        },
        setIndicator: function (options) {
            this.dom.setIndicator(options);
        },
        getIndicator: function () {
            return this.dom.getIndicator();
        },
        // @Deprecated Use setIndicator instead.
        setIndicatorOptions: function (options) {
            this.dom.setIndicator(options);
        },
        // @Deprecated Use getIndicator instead.
        getIndicatorOptions: function () {
            return this.dom.getIndicator();
        },
        // @Deprecated Use getIndicator/setIndicator instead.
        indicator: function (options) {
            if (!arguments.length)
                return this.dom.getIndicator();
            else if (options)
                this.dom.setIndicator(options);
        },
        setStateBar: function (options) {
            this.dom.setStatusBar(options);
        },
        getStateBar: function () {
            return this.dom.getStatusBar();
        },
        // @Deprecated Use setStateBar instead.
        setStatesBar: function (options) {
            this.dom.setStatusBar(options);
        },
        // @Deprecated Use getStateBar instead.
        getStatesBar: function () {
            return this.dom.getStatusBar();
        },
        // @Deprecated Use setStateBar instead.
        setStatesBarOptions: function (options) {
            this.dom.setStatusBar(options);
        },
        // @Deprecated Use getStateBar instead.
        getStatesBarOptions: function () {
            return this.dom.getStatusBar();
        },
        // @Deprecated Use getStateBar/setStateBar instead.
        statusBar: function (options) {
            if (!arguments.length)
                return this.dom.getStatusBar();
            else if (options)
                this.dom.setStatusBar(options);
        },
        // @Deprecated Use getStateBar/setStateBar instead.
        stateBar: function (options) {
            if (!arguments.length)
                return this.dom.getStatusBar();
            else if (options)
                this.dom.setStatusBar(options);
        },
        setCheckBar: function (options) {
            this.dom.setCheckBar(options);
        },
        getCheckBar: function () {
            return this.dom.getCheckBar();
        },
        // @Deprecated Use setCheckBar instead.
        setCheckBarOptions: function (options) {
            this.dom.setCheckBar(options);
        },
        // @Deprecated Use getCheckBar instead.
        getCheckBarOptions: function () {
            return this.dom.getCheckBar();
        },
        // @Deprecated Use getCheckBar/setCheckBar instead.
        checkBar: function (options) {
            if (!arguments.length)
                return this.dom.getCheckBar();
            else if (options)
                this.dom.setCheckBar(options);
        },
        setHeader: function (options) {
            this.dom.setHeader(options);
        },
        getHeader: function () {
            return this.dom.getHeader();
        },
        // @Deprecated Use setHeader instead.
        setHeaderOptions: function (options) {
            this.dom.setHeader(options);
        },
        // @Deprecated Use getHeader instead.
        getHeaderOptions: function () {
            return this.dom.getHeader();
        },
        // @Deprecated Use getHeader/setHeader instead.
        header: function (options) {
            if (!arguments.length)
                return this.dom.getHeader();
            else if (options)
                this.dom.setHeader(options);
        },
        setFooter: function (options) {
            this.dom.setFooter(options);
        },
        getFooter: function () {
            return this.dom.getFooter();
        },
        // @Deprecated Use setFooter instead.
        setFooterOptions: function (options) {
            this.dom.setFooter(options);
        },
        // @Deprecated Use getFooter instead.
        getFooterOptions: function () {
            return this.dom.getFooter();
        },
        // @Deprecated Use getFooter/setFooter instead.
        footer: function (options) {
            if (!arguments.length)
                return this.dom.getFooter();
            else if (options)
                this.dom.setFooter(options);
        },
        // @Deprecated Use setRowGroup instead.
        setRowGroupOptions: function (options) {
            this.dom.setRowGroup(options);
        },
        // @Deprecated Use getRowGroup instead.
        getRowGroupOptions: function () {
            return this.dom.getRowGroup();
        },
        setRowGroup: function (options) {
            this.dom.setRowGroupOptions(options);
        },
        getRowGroup: function () {
            return this.dom.getRowGroupOptions();
        },
        // @Deprecated Use getRowGroup/setRowGroup instead.
        rowGroup: function (options) {
            if (!arguments.length)
                return this.dom.getRowGroupOptions();
            else if (options)
                this.dom.setRowGroupOptions(options);
        },
        setSelectOptions: function (options) {
            this.dom.setSelectOptions(options);
        },
        getSelectOptions: function () {
            return this.dom.getSelectOptions();
        },
        // @Deprecated Use getSelectOptions/setSelectOptions instead.
        selectOptions: function (options) {
            if (!arguments.length)
                return this.dom.getSelectOptions();
            else if (options)
                this.dom.setSelectOptions(options);
        },
        setSortingOptions: function (options) {
            this.dom.setSortingOptions(options);
        },
        getSortingOptions: function () {
            return this.dom.getSortingOptions();
        },
        // @Deprecated Use getSortingOptions/setSortingOptions instead.
        sortingOptions: function (options) {
            if (!arguments.length)
                return this.dom.getSortingOptions();
            else if (options)
                this.dom.setSortingOptions(options);
        },
        setFilteringOptions: function (options) {
            this.dom.setFilteringOptions(options);
        },
        getFilteringOptions: function () {
            return this.dom.getFilteringOptions();
        },
        // @Deprecated Use getFilteringOptions/setFilteringOptions instead.
        filteringOptions: function (options) {
            if (!arguments.length)
                return this.dom.getFilteringOptions();
            else if (options)
                this.dom.setFilteringOptions(options);
        },
        setGroupingOptions: function (options) {
            this.dom.setGroupingOptions(options);
        },
        getGroupingOptions: function () {
            return this.dom.getGroupingOptions();
        },
        setValidations: function (validations) {
            this.dom.setValidations(validations);
        },
        addCellRenderers: function (renderers) {
            this.dom.addCellRenderers(renderers);
        },

        /// imageList
        /*
        * @param imageList string
        */
        addImageList: function (imageList) {
            this.dom.addImageList(imageList);
        },

        /// menu
        /*
        * @param menuItems Array of MenuItem
        */
        addPopupMenu: function (name, menuItems) {
            this.dom.addPopupMenu(name, menuItems);
        },
        setContextMenu: function (menuItems) {
            this.dom.setContextMenu(menuItems);
        },
        isVisible: function () {
            return this.dom.isVisible();
        },
        setVisible: function (visible) {
            this.dom.setVisible(visible);
        },
        showEditor: function () {
            this.dom.showEditor();
        },
        closeList: function () {
            if (this.dom.closeList)
                this.dom.closeList();
        },
        resetCurrent: function () {
            this.dom.resetCurrent();
        },

        showToast: function(message) {
        	this.dom.showToast(message);
        },
        hideToast: function() {
        	this.dom.hideToast();
        },
        
        /// styles
        setStyles: function (styles) {
            this.dom.setStyles(styles);
        },
        getStyles: function (region, all) {
            all = arguments.length > 1 ? all : true;
            return this.dom.getStyles(region, all);
        },
        clearStyles: function (region) {
            this.dom.clearStyles(region);
        },

        /// cell index
        getCurrent: function () {
            var current = this.dom.getCurrent();
            return current;
        },
        setCurrent: function (current, select) {
            select = (arguments.length > 1) ? select : true;
            this.dom.setCurrent(current, select);
        },
        mouseToIndex: function (x, y) {
            return this.dom.mouseToIndex(x, y);
        },

        /// editing
        // 선택 영역 리턴
        getSelection: function () {
            return this.dom.getSelection();
        },
        setSelection: function (selection) {
            this.dom.setSelection(selection);
        },
        clearSelection: function () {
            this.dom.clearSelection();
        },
        getSelectedItems: function () {
            return this.dom.getSelectedItems();
        },
        getSelectedRows: function () {
            return this.dom.getSelectedRows();
        },
        // maxRows: -1이면 모든 행
        getSelectionData: function (maxRows) {
            return this.dom.getSelectionData(arguments.length > 0 ? maxRows : -1);
        },
        deleteSelection: function (force) {
            this.dom.deleteSelection(arguments.length > 0 ? force : false);
        },
        isItemEditing: function () {
            return this.dom.isItemEditing();
        },
        commitEditor: function (hideEditor) {
            hideEditor = arguments.length > 0 ? hideEditor : true;
            this.dom.commitEditor(hideEditor);
        },
        commit: function (force) {
            return this.dom.commit(arguments.length > 0 ? force : false);
        },
        cancel: function () {
            this.dom.cancel();
        },
        fillEditSearchItems: function (column, searchKey, values, labels) {
            var col = this._getColumn(column);
            this.dom.fillEditSearchItems(col.refId, searchKey, values, labels);
        },

        /// data cell styles
        hasCellStyle: function (id) {
            return this.dom.hasCellStyle(id);
        },
        addCellStyle: function (id, cellStyle, overwrite) {
            overwrite = arguments.length > 2 ? overwrite : false;
            this.dom.addCellStyle(id, cellStyle, overwrite);
        },
        addCellStyles: function (cellStyles, overwrite) {
            overwrite = arguments.length > 1 ? overwrite : false;
            this.dom.addCellStyles(cellStyles, overwrite);
        },
        removeCellStyles: function (ids) {
            this.dom.removeCellStyles(ids);
        },
        removeAllCellStyles: function () {
            this.dom.removeAllCellStyles();
        },

        setCellStyle: function (dataRow, field, styleId, updateNow) {
            this.dom.setCellStyle(dataRow, field, styleId, updateNow);
        },
        setCellStyles: function (dataRows, fields, styleId) {
            this.dom.setCellStyles(dataRows, fields, styleId);
        },
        setCellStyleRows: function (rows, fieldMap) {
            this.dom.setCellStyleRows(rows, fieldMap);
        },
        clearCellStyles: function () {
            this.dom.clearCellStyles();
        },
        getCellStyle: function (dataRow, field) {
            return this.dom.getCellStyle(dataRow, field);
        },
        
        // checked
        isCheckable: function (itemIndex) {
            return this.dom.isCheckable(itemIndex);
        },
        setCheckable: function (itemIndex, value) {
            this.dom.setCheckable(itemIndex, value);
        },
        isCheckedItem: function (itemIndex) {
            return this.dom.isCheckedItem(itemIndex);
        },
        isCheckedRow: function (dataRow) {
            return this.dom.isCheckedRow(dataRow);
        },
        checkItem: function (itemIndex, checked, exclusive) {
            checked = arguments.length > 1 ? checked : true;
            exclusive = arguments.length > 2 ? exclusive : false;
            this.dom.checkItem(itemIndex, checked, exclusive);
        },
        checkRow: function (dataRow, checked, exclusive) {
            checked = arguments.length > 1 ? checked : true;
            exclusive = arguments.length > 2 ? exclusive : false;
            this.dom.checkRow(dataRow, checked, exclusive);
        },
        checkItems: function (items, checked) {
            checked = arguments.length > 1 ? checked : true;
            this.dom.checkItems(items, checked);
        },
        checkRows: function (dataRows, checked) {
            checked = arguments.length > 1 ? checked : true;
            this.dom.checkRows(dataRows, checked);
        },
        checkAll: function (checked, visibleOnly, checkableOnly) {
            checked = arguments.length > 0 ? checked : true;
            visibleOnly = arguments.length > 1 ? visibleOnly : false;
            checkableOnly = arguments.length > 2 ? checkableOnly : true;
            return this.dom.checkAll(checked, visibleOnly, checkableOnly);
        },
        setAllCheck: function (checked) {
            checked = arguments.length > 0 ? checked : true;
            return this.dom.setAllCheck(checked);
        },
        isAllChecked: function () {
            return this.dom.isAllChecked();
        },
        resetCheckables: function (clearExpr) {
            this.dom.resetCheckables();
            if (clearExpr) {
                this.dom.setCheckBar({
                    checkableExpression: null
                });
            }
        },
        applyCheckables: function () {
            this.dom.applyCheckables();
        },
        setCheckableExpression: function (expression, apply) {
            apply = arguments.length > 1 ? apply : true;
            this.dom.setCheckBar({
                checkableExpression: expression
            });
            apply && this.dom.applyCheckables();
        },

        /// utilities
        // @Deprecated use searchItem() instead.
        search: function (options) {
            return this.searchItem(options);
        },
        searchItem: function (options) {
            return this.dom.searchItem(options);
        },
        exportGrid: function (options) {
            this.dom.exportGrid(options);
        },
        isLocalExporting: function () {
            return this.dom.isLocalExporting();
        },
        resetLocalExporting: function () {
            this.dom.resetLocalExporting();
        },
        centerLocalExporting: function () {
            this.dom.centerLocalExporting();
        },
        showBusyIndicator: function () {
            this.dom.showBusyIndicator();
        },
        hideBusyIndicator: function () {
            this.dom.hideBusyIndicator();
        }
    };

    /**
    * GridView
    */
    var GridView = function (id, ignoreVersion) {
        this.base = GridBase;
        this.base(id, ignoreVersion);

        // events
        this.onGroupingChanged = DEBUG ? function (grid) {
            _log("onGroupingChanged");
        } : null;
        this.onPageChanging = DEBUG ? function (grid, newPage) {
            _log("onPageChanging: " + newPage);
            return true;
        } : null;
        this.onPageChanged = DEBUG ? function (grid, page) {
            _log("onPageChanged: " + page);
        } : null;
    };
    GridView.prototype = _extend(new GridBase(null, true), {
        constructor: GridView,

        /// checked
        getCheckedItems: function (all) {
            all = arguments.length > 0 ? all : false;
            return this.dom.getCheckedItems(all);
        },
        getCheckedRows: function (sort, visibleOnly) {
            sort = arguments.length > 0 ? sort : true;
            visibleOnly = arguments.length > 1 ? visibleOnly : false;
            return this.dom.getCheckedRows(sort, visibleOnly);
        },

        // grouping
        groupBy: function (fieldNames) {
            this.dom.groupBy(fieldNames);
        },
        isGrouped: function () {
        	return this.dom.isGrouped();
        },
        isMergedGrouped: function () {
        	return this.dom.isMergedGrouped();
        },
        getGroupFields: function () {
        	return this.dom.getGroupFields();
        },
        getGroupFieldNames: function (orgName) {
        	return this.dom.getGroupFieldNames(orgName);
        },
        getGroupLevels: function () {
            return this.dom.getGroupLevels();
        },
        getGroupLevel: function (field) {
            return this.dom.getGroupLevel(field);
        },
        getGroupIndex: function (itemIndex) {
            return this.dom.getGroupIndex(itemIndex);
        },
        isGroupItem: function (itemIndex) {
            return this.dom.isGroupItem(itemIndex);
        },
        expandGroup: function (itemIndex, recursive, force) {
            recursive = arguments.length > 1 ? recursive : false;
            force = arguments.length > 2 ? force : false;
            this.dom.expandGroup(itemIndex, recursive, force);
        },
        collapseGroup: function (itemIndex, recursive) {
            recursive = arguments.length > 1 ? recursive : false;
            this.dom.collapseGroup(itemIndex, recursive);
        },
        
        // item model
        expandModel: function (model, recursive, force) {
            recursive = arguments.length > 1 ? recursive : false;
            force = arguments.length > 2 ? force : false;
            return this.dom.expandModel(model, recursive, force);
        },
        collapseModel: function (model, recursive) {
            recursive = arguments.length > 1 ? recursive : false;
            return this.dom.collapseModel(model, recursive);
        },
        getGroupSummary: function (model, field, statistical) {
            return this.dom.getGroupSummary(model, field, statistical);
        },

        // paging
        setPaging: function (paging, pageSize, pageCount, pageSource) {
            pageSize = arguments.length > 1 ? pageSize : 10;
            pageCount = arguments.length > 2 ? pageCount : -1;
            pageSource = arguments.length > 3 ? pageSource : "rows";
            this.dom.setPaging(paging, pageSize, pageCount, pageSource);
        },
        getPage: function () {
            return this.dom.getPage();
        },
        setPage: function (page, startItem) {
            startItem = arguments.length > 1 ? startItem : -1;
            this.dom.setPage(page, startItem);
        },
        getPageCount: function () {
            return this.dom.getPageCount();
        },
        setPageCount: function (pageCount) {
            this.dom.setPageCount(pageCount);
        },
        
        // editing
        beginInsertRow: function (itemIndex) {
            itemIndex = arguments.length > 0 ? itemIndex : -1;
            this.dom.beginInsertRow(itemIndex);
        },
        beginAppendRow: function () {
            this.dom.beginAppendRow();
        },
        beginUpdateRow: function (itemIndex) {
            itemIndex = arguments.length > 0 ? itemIndex : -1;
            this.dom.beginUpdateRow(itemIndex);
        },

        // utilities
        loadGrid: function (config) {
            this.dom.loadGrid(config);
        }
    });

    /**
    * TreeOptions
    */
    var TreeOptions = function () {
        this.expanderWidth = undefined; // 17
        this.showCheckBox = undefined;  // false
        this.checkBoxSize = undefined;  // 15
        this.iconImages = undefined;
        // 크기를 지정하지 않거나 0이하로 지정하면 아이콘 크기대로 표시.
        this.iconWidth = undefined;      // 0
    };

    /**
    * TreeView
    */
    var TreeView = function (id, ignoreVersion) {
        this.base = GridBase;
        this.base(id, ignoreVersion);

        // events
        this.onTreeItemExpanding = function (tree, itemIndex, rowId) {
            return true;
        };
    };
    TreeView.prototype = _extend(new GridBase(null, true), {
        constructor: TreeView,

        getTreeOptions: function () {
            return this.dom.getTreeOptions();
        },
        setTreeOptions: function (options) {
            this.dom.setTreeOptions(options);
        },
        getParent: function (itemIndex) {
            return this.dom.getParent(itemIndex);
        },
        getChildren: function (itemIndex) {
            return this.dom.getChildren(itemIndex);
        },
        getDescendants: function (itemIndex) {
            return this.dom.getDescendants(itemIndex);
        },
        getAncestors: function (itemIndex, includeRoot) {
            includeRoot = arguments.length > 1 ? includeRoot : true;
            return this.dom.getAncestors(itemIndex, includeRoot);
        },
        expand: function (itemIndex, recursive, force) {
            recursive = arguments.length > 1 ? recursive : false;
            force = arguments.length > 2 ? force : false;
            this.dom.expand(itemIndex, recursive, force);
        },
        collapse: function (itemIndex, recursive) {
            recursive = arguments.length > 1 ? recursive : false;
            this.dom.collapse(itemIndex, recursive);
        },
        expandAll: function (level) {
            level = arguments.length > 0 ? level : 0;
            this.dom.expandAll(level);
        },
        collapseAll: function () {
            this.dom.collapseAll();
        },
        /// checked
        getCheckedItems: function () {
            return this.dom.getCheckedItems();
        },
        getCheckedRows: function (visibleOnly) {
            visibleOnly = arguments.length > 0 ? visibleOnly : false;
            return this.dom.getCheckedRows(visibleOnly);
        },
        checkChildren: function (itemIndex, checked, recursive, visibleOnly, checkableOnly) {
            checked = arguments.length > 1 ? checked : true;
            recursive = arguments.length > 2 ? recursive : false;
            visibleOnly = arguments.length > 3 ? visibleOnly : true;
            this.dom.checkChildren(itemIndex, checked, recursive, visibleOnly, checkableOnly);
        }
    });

    return {
        /// internal methods
        _getRealGridLic: function () {
            return realGridLic;
        },
        getRealGridLic: function () {
            return realGridLic;
        },
        compareDataValue: function (id, comparerId, field, value1, value2) {
            var grid = __grids[id];
            if (grid && grid.dataProvider) {
                var comparer = grid.dataProvider.getComparer(comparerId);
                return comparer(field, value1, value2);
            };
            return 0;
        },

        /// global events
        onready: function (id, tester) {
            var result = _extend({}, tester);
            return result;
        },
        onload: function (id, scope) {
            alert("RealGridPlus loaded: " + id);
        },
        onerror: function (id, error) {
            win && win.console.log(error);
            alert(error);
        },


        /// utilities
        alert: function (message) {
            setTimeout(function () {
                win.alert(message);
            }, 1);
        },
        setTrace: function (trace) {
            TRACE = trace;
        },
        enableImeOnExit : enableImeOnExit,
        resetIme: function () {
            var grid = null;
            
            for (id in __grids) {
                if (__grids[id] && __grids[id].dom) {
                    grid = __grids[id].dom;
                    break;
                };
            };
            
            if (grid)        
                grid.resetIme();
        },
        
        setExternalWheelEvents: function (grid, active, propagation) {
            active = arguments.length > 1 ? active : true;
            propagation = arguments.length > 2 ? propagation : true;
            
            if (active) {
                __externalWheelGrids[grid.id] = grid;
                __externalWheelPropagations[grid.id] = propagation
            } else {
                delete __externalWheelGrids[grid.id];
                delete __externalWheelPropagations[grid.id];     
            };
            
            grid.setOptions({useExternalWheelEvents: active});
            
            if(window.addEventListener || document.attachEvent) {
                var eventType = "mousewheel"; // Internet Explorer, Opera, Google Chrome and Safari
                if (!window.addEventListener) // IE before version 9
                    eventType = "onmousewheel";
                else if (navigator.userAgent.indexOf('Firefox') !=-1) 
                    eventType = "DOMMouseScroll";
                
                var attrCount = 0;
                if (__externalWheelGrids) {
                    for (var attr in __externalWheelGrids) {
                        if (__externalWheelGrids.hasOwnProperty(attr) && __externalWheelGrids[attr]) {
                           ++attrCount;
                        };
                    };
                };
                
                if (window.addEventListener) {                            
                    if (attrCount > 0)
                        window.addEventListener(eventType, _externalWheelCallback, false);
                    else 
                        window.removeEventListener(eventType, _externalWheelCallback, false);
                } else {                    
                    if (attrCount > 0)
                        document.attachEvent(eventType, _externalWheelCallback);
                    else
                        document.detachEvent(eventType, _externalWheelCallback);
                };
                    
            };
        },

        /// common
        onRequestLog: function (message) {
            console.log(message);
        },

        /// data provider callbacks for internal use
        onDataLoadCompleted: function (id, ticket) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onLoadCompleted) {
                return grid.dataProvider.onLoadCompleted(grid.dataProvider, ticket);
            };
        },
        onDataLoadFailed: function (id, message, ticket) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onLoadFailed) {
                return grid.dataProvider.onLoadFailed(grid.dataProvider, message, ticket);
            };
        },
        onDataRowCountChanged: function (id, count) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowCountChanged) {
                grid.dataProvider.onRowCountChanged(grid.dataProvider, count);
            };
        },
        onDataRowUpdating: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowUpdating) {
                return grid.dataProvider.onRowUpdating(grid.dataProvider, row);
            };
            return true;
        },
        onDataRowUpdated: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowUpdated) {
                grid.dataProvider.onRowUpdated(grid.dataProvider, row);
            };
        },
        onDataRowsUpdated: function (id, row, count) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowsUpdated) {
                grid.dataProvider.onRowsUpdated(grid.dataProvider, row, count);
            };
        },
        onDataRowInserting: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowInserting) {
                return grid.dataProvider.onRowInserting(grid.dataProvider, row);
            };
            return true;
        },
        onDataRowInserted: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowInserted) {
                grid.dataProvider.onRowInserted(grid.dataProvider, row);
            };
        },
        onDataRowsInserted: function (id, row, count) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowsInserted) {
                grid.dataProvider.onRowsInserted(grid.dataProvider, row, count);
            };
        },
        onDataRowDeleting: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowDeleting) {
                return grid.dataProvider.onRowDeleting(grid.dataProvider, row);
            };
            return true;
        },
        onDataRowDeleted: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowDeleted) {
                grid.dataProvider.onRowDeleted(grid.dataProvider, row);
            };
        },
        onDataRowsDeleted: function (id, rows) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowsDeleted) {
                grid.dataProvider.onRowsDeleted(grid.dataProvider, rows);
            };
        },
        onDataRowMoving: function (id, row, newRow) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowMoving) {
                return grid.dataProvider.onRowMoving(grid.dataProvider, row, newRow);
            };
            return true;
        },
        onDataRowMoved: function (id, row, newRow) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowMoved) {
                grid.dataProvider.onRowMoved(grid.dataProvider, row, newRow);
            };
        },
        onDataRowsMoving: function (id, row, count, newRow) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowsMoving) {
                return grid.dataProvider.onRowsMoving(grid.dataProvider, row, count, newRow);
            };
            return true;
        },
        onDataRowsMoved: function (id, row, count, newRow) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowMoved) {
                grid.dataProvider.onRowsMoved(grid.dataProvider, row, count, newRow);
            };
        },
        onDataValueChanged: function (id, row, field) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onValueChanged) {
                grid.dataProvider.onValueChanged(grid.dataProvider, row, field);
            };
        },
        onDataRowStateChanged: function (id, row) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowStateChanged) {
                grid.dataProvider.onRowStateChanged(grid.dataProvider, row);
            };
        },
        onDataRowStatesChanged: function (id, rows) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowStatesChanged) {
                grid.dataProvider.onRowStatesChanged(grid.dataProvider, rows);
            };
        },
        onDataRowStatesCleared: function (id) {
            var grid = __grids[id];
            if (grid && grid.dataProvider && grid.dataProvider.onRowStatesCleared) {
                grid.dataProvider.onRowStatesCleared(grid.dataProvider);
            };
        },

        // tree data provider callbacks
        onTreeDataRowCountChanged: function (id, newCount) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowCountChanged) {
                tree.dataProvider.onRowCountChanged(tree.dataProvider, newCount);
            };
        },
        onTreeDataRowAdding: function (id, rowId, index) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowAdding) {
                return tree.dataProvider.onRowAdding(tree.dataProvider, rowId, index);
            };
            return true;
        },
        onTreeDataRowAdded: function (id, rowId) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowAdded) {
                tree.dataProvider.onRowAdded(tree.dataProvider, rowId);
            };
        },
        onTreeDataRowsAdded: function (id, parentId, rowIds) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowsAdded) {
                tree.dataProvider.onRowsAdded(tree.dataProvider, parentId, rowIds);
            };
        },
        onTreeDataRowDeleting: function (id, rowId) {
            var tree = __grids[id];
            if (tree && tree.dataProvider) {
                if (tree.dataProvider.onRowRemoving) {
                    return tree.dataProvider.onRowRemoving(tree.dataProvider, rowId);
                };
                if (tree.dataProvider.onRowDeleting) {
                    return tree.dataProvider.onRowDeleting(tree.dataProvider, rowId);
                };
            };
            return true;
        },
        onTreeDataRowDeleted: function (id, rowId) {
            var tree = __grids[id];
            if (tree && tree.dataProvider) {
                if (tree.dataProvider.onRowRemoved) {
                    return tree.dataProvider.onRowDeleted(tree.dataProvider, rowId);
                };
                if (tree.dataProvider.onRowDeleted) {
                    return tree.dataProvider.onRowDeleted(tree.dataProvider, rowId);
                };
            };
        },
        onTreeDataRowsDeleting: function (id, rowIds) {
            var tree = __grids[id];
            if (tree && tree.dataProvider) {
                if (tree.dataProvider.onRowsRemoving) {
                    return tree.dataProvider.onRowsRemoving(tree.dataProvider, rowIds);
                };
                if (tree.dataProvider.onRowsDeleting) {
                    return tree.dataProvider.onRowsDeleting(tree.dataProvider, rowIds);
                };
            };
            return true;
        },
        onTreeDataRowsDeleted: function (id, rowIds) {
            var tree = __grids[id];
            if (tree && tree.dataProvider) {
                if (tree.dataProvider.onRowsRemoved) {
                    tree.dataProvider.onRowsRemoved(tree.dataProvider, rowIds);
                    return;
                };
                if (tree.dataProvider.onRowsDeleted) {
                    tree.dataProvider.onRowsDeleted(tree.dataProvider, rowIds);
                };
            };
        },
        onTreeDataRowUpdating: function (id, rowId) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowUpdating) {
                return tree.dataProvider.onRowUpdating(tree.dataProvider, rowId);
            };
            return true;
        },
        onTreeDataRowUpdated: function (id, rowId) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowUpdated) {
                tree.dataProvider.onRowUpdated(tree.dataProvider, rowId);
            };
        },
        onTreeDataValueChanged: function (id, rowId, field) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onValueChanged) {
                tree.dataProvider.onValueChanged(tree.dataProvider, rowId, field);
            };
        },
        onTreeDataRowStateChanged: function (id, rowId) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowStateChanged) {
                tree.dataProvider.onRowStateChanged(tree.dataProvider, rowId);
            };
        },
        onTreeDataRowStatesChanged: function (id, rowIds) {
            var tree = __grids[id];
            if (tree && tree.dataProvider && tree.dataProvider.onRowStatesChanged) {
                tree.dataProvider.onRowStatesChanged(tree.dataProvider, rowIds);
            };
        },

        /// grid view callbacks
        onErrorClicked: function (id, error) {
            var grid = __grids[id];
            if (grid && grid.onErrorClicked) {
                grid.onErrorClicked(grid, error);
            } else {
                win && win.console.log(error);
                alert(error);
            };
        },
        onMenuItemClicked: function (id, data) {
            var grid = __grids[id];
            if (grid && grid.onMenuItemClicked) {
                grid.onMenuItemClicked(grid, data);
            };
        },
        onContextMenuItemClicked: function (id, label, index) {
            var grid = __grids[id];
            if (grid && grid.onContextMenuItemClicked) {
                grid.onContextMenuItemClicked(grid, label, index);
            };
        },
        onCurrentChanging: function (id, oldIndex, newIndex) {
            var grid = __grids[id];
            if (grid && grid.onCurrentChanging) {
                var rslt = grid.onCurrentChanging(grid, oldIndex, newIndex);
                return rslt;
            };
            return true;
        },
        onCurrentChanged: function (id, newIndex) {
            var grid = __grids[id];
            if (grid && grid.onCurrentChanged) {
                grid.onCurrentChanged(grid, newIndex);
            };
        },
        onCurrentRowChanged: function (id, oldRow, newRow) {
            var grid = __grids[id];
            if (grid && grid.onCurrentRowChanged) {
                grid.onCurrentRowChanged(grid, oldRow, newRow);
            };
        },
        onDataCellClicked: function (id, index) {
            var grid = __grids[id];
            if (grid && grid.onDataCellClicked) {
                grid.onDataCellClicked(grid, index);
            };
        },
        onDataCellDblClicked: function (id, index) {
            var grid = __grids[id];
            if (grid && grid.onDataCellDblClicked) {
                grid.onDataCellDblClicked(grid, index);
            };
        },
        onLinkableCellClicked: function (id, index, url) {
            var grid = __grids[id];
            if (grid && grid.onLinkableCellClicked) {
                grid.onLinkableCellClicked(grid, index, url);
            };
        },
        onSelectionAdded: function (id, selection) {
            var grid = __grids[id];
            if (grid && grid.onSelectionAdded) {
                grid.onSelectionAdded(grid, selection);
            };
        },
        onSelectionChanged: function (id) {
            var grid = __grids[id];
            if (grid && grid.onSelectionChanged) {
                grid.onSelectionChanged(grid);
            };
        },
        onSelectionEnded: function (id) {
            var grid = __grids[id];
            if (grid && grid.onSelectionEnded) {
                grid.onSelectionEnded(grid);
            };
        },
        onColumnHeaderClicked: function (id, column) {
            var grid = __grids[id];
            if (grid && grid.onColumnHeaderClicked) {
                grid.onColumnHeaderClicked(grid, column);
            };
        },
        onColumnHeaderDblClicked: function (id, column) {
            var grid = __grids[id];
            if (grid && grid.onColumnHeaderDblClicked) {
                grid.onColumnHeaderDblClicked(grid, column);
            };
        },
        onCellButtonClicked: function (id, itemIndex, column) {
            var grid = __grids[id];
            if (grid && grid.onCellButtonClicked) {
                grid.onCellButtonClicked(grid, itemIndex, column);
            };
        },
        onRowsDeleting: function (id, rows) {
            var grid = __grids[id];
            if (grid) {
                if (grid.onRowsDeleting) {
                    return grid.onRowsDeleting(grid, rows);
                } else {
                    return null;
                };
            };
            return null;
        },
        onRowInserting: function (id, itemIndex) {
            var grid = __grids[id];
            if (grid && grid.onRowInserting) {
                return grid.onRowInserting(grid, itemIndex);
            };
            return null;
        },
        onValidateColumn: function (id, column, inserting, value) {
            var grid = __grids[id];
            if (grid && grid.onValidateColumn) {
                return grid.onValidateColumn(grid, column, inserting, value);
            } else {
                return null;
            };
        },
        onValidateRow: function (id, itemIndex, dataRow, inserting, values) {
            var grid = __grids[id];
            if (grid && grid.onValidateRow) {
                return grid.onValidateRow(grid, itemIndex, dataRow, inserting, values);
            } else {
                return null;
            };
        },
        onShowEditor: function (id, index) {
            var grid = __grids[id];
            if (grid && grid.onShowEditor) {
                return grid.onShowEditor(grid, index);
            };
        },
        onEditChange: function (id, index, value) {
            var grid = __grids[id];
            if (grid && grid.onEditChange) {
                return grid.onEditChange(grid, index, value);
            };
        },
        onEditCanceled: function (id, index) {
            var grid = __grids[id];
            if (grid && grid.onEditCanceled) {
                return grid.onEditCanceled(grid, index);
            };
        },
        onEditCommit: function (id, index, oldValue, newValue) {
            var grid = __grids[id];
            if (grid && grid.onEditCommit) {
                return grid.onEditCommit(grid, index, oldValue, newValue);
            };
        },
        onEditSearch: function (id, index, text) {
            var grid = __grids[id];
            if (grid && grid.onEditSearch) {
                return grid.onEditSearch(grid, index, text);
            };
        },
        onCellEdited: function (id, itemIndex, dataRow, field) {
            var grid = __grids[id];
            if (grid && grid.onCellEdited) {
                return grid.onCellEdited(grid, itemIndex, dataRow, field);
            };
        },
        onEditRowChanged: function (id, itemIndex, dataRow, field, oldValue, newValue) {
            var grid = __grids[id];
            if (grid && grid.onEditRowChanged) {
                return grid.onEditRowChanged(grid, itemIndex, dataRow, field, oldValue, newValue);
            };
        },
        onEditRowPasted: function (id, itemIndex, dataRow, fields, oldValues, newValues) {
            var grid = __grids[id];
            if (grid && grid.onEditRowPasted) {
                return grid.onEditRowPasted(grid, itemIndex, dataRow, fields, oldValues, newValues);
            };
        },
        onItemChecked: function (id, itemIndex, checked) {
            var grid = __grids[id];
            if (grid && grid.onItemChecked) {
                return grid.onItemChecked(grid, itemIndex, checked);
            };
        },
        onItemsChecked: function (id, items, checked) {
            var grid = __grids[id];
            if (grid && grid.onItemsChecked) {
                return grid.onItemsChecked(grid, items, checked);
            };
        },
        onItemAllChecked: function (id, checked) {
            var grid = __grids[id];
            if (grid && grid.onItemAllChecked) {
                return grid.onItemAllChecked(grid, checked);
            };
        },
        onScrollToBottom: function (id) {
            var grid = __grids[id];
            if (grid && grid.onScrollToBottom) {
                grid.onScrollToBottom(grid);
            };
        },
        onGroupingChanged: function (id) {
            var grid = __grids[id];
            if (grid && grid.onGroupingChanged) {
                grid.onGroupingChanged(grid);
            };
        },
        onPageChanging: function (id, newPage) {
            var grid = __grids[id];
            if (grid && grid.onPageChanging) {
                var v = grid.onPageChanging(grid, newPage);
                return (v == false) ? false : true;
            };
            return true;
        },
        onPageChanged: function (id, page) {
            var grid = __grids[id];
            if (grid && grid.onPageChanged) {
                grid.onPageChanged(grid, page);
            };
        },
        onPageCountChanged: function (id, pageCount) {
            var grid = __grids[id];
            if (grid && grid.onPageCountChanged) {
                grid.onPageCountChanged(grid, pageCount);
            };
        },
        onFilteringChanged: function (id) {
            var grid = __grids[id];
            if (grid && grid.onFilteringChanged) {
                grid.onFilteringChanged(grid);
            };
        },
        onFilterActionClicked: function (id, column, action, x, y) {
            var grid = __grids[id];
            if (grid && grid.onFilterActionClicked) {
                grid.onFilterActionClicked(grid, column, action, x, y);
            };
        },
        onSortingChanged: function (id) {
            var grid = __grids[id];
            grid && grid.onSortingChanged && grid.onSortingChanged(grid);
        },
        /// TreeView callbacks
        // false를 리턴하면 expanding 취소.
        onTreeItemExpanding: function (id, itemIndex, rowId) {
            var grid = __grids[id];
            if (grid && grid.onTreeItemExpanding) {
                return grid.onTreeItemExpanding(grid, itemIndex, rowId);
            } else {
                return true;
            };
        },

        /************************************************************
        * public api
        ************************************************************/
        setDebug: setDebug,
        setTrace: setTrace,

        DataType: DataType,
        RowState: RowState,
        DataField: DataField,
        DataLoadOptions: DataLoadOptions,
        DataProvider: DataProvider,
        LocalDataProvider: LocalDataProvider,
        TreeDataProvider: TreeDataProvider,

        SummaryMode: SummaryMode,
        Alignment: Alignment,
        ContentFit: ContentFit,
        IconLocation: IconLocation,
        SearchOptions: SearchOptions,
        ValidationMode: ValidationMode,
        ValidationLevel: ValidationLevel,
        CellButton: CellButton,
        GridFitStyle: GridFitStyle,
        SortStyle: SortStyle,
        SortDirection: SortDirection,
        SelectionStyle: SelectionStyle,
        ColumnGroupOrientation: ColumnGroupOrientation,
        RowGroupAdornments: RowGroupAdornments,
        IndicatorValue: IndicatorValue,

        CellIndex: CellIndex,
        ItemType: ItemType,
        ItemState: ItemState,
        ImageList: ImageList,
        EditValidation: EditValidation,
        DynamicStyle: DynamicStyle,
        CellRenderer: CellRenderer,
        BarCellRenderer: BarCellRenderer,
        CheckCellRenderer: CheckCellRenderer,
        ImageCellRenderer: ImageCellRenderer,
        IconCellRenderer: IconCellRenderer,
        ShapeCellRenderer: ShapeCellRenderer,
        SignalCellRenderer: SignalCellRenderer,
        CellEditor: CellEditor,
        LineCellEditor: LineCellEditor,
        MultiLineCellEditor: MultiLineCellEditor,
        DropDownCellEditor: DropDownCellEditor,
        NumberCellEditor: NumberCellEditor,
        DateCellEditor: DateCellEditor,

        ColumnHeader: ColumnHeader,
        ColumnGroupHeader: ColumnGroupHeader,
        DataColumn: DataColumn,
        ColumnGroup: ColumnGroup,
        Paenl: Panel,
        Indicator: Indicator,

        GridOptions: GridOptions,
        DisplayOptions: DisplayOptions,
        EditOptions: EditOptions,
        PanelOptions: PanelOptions,
        FixedOptions: FixedOptions,
        RowGroupOptions: RowGroupOptions,
        SelectOptions: SelectOptions,
        SortingOptions: SortingOptions,
        FilteringOptions: FilteringOptions,
        GridViewStyles: GridViewStyles,
        GridBase: GridBase,
        GridView: GridView,
        TreeView: TreeView
    };
})();
