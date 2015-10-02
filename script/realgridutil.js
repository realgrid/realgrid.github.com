/****************************************
* realgridsutil.js
*****************************************/

/* console 객체가 없는 경우 에러 방지 */
if (window.console == undefined) {
	console = { log: function () { } };
};

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


var __grids = {};

var RealGridsUtil = {
    /**
     * setup 함수
     *
     * @param id : 그리드가 생성될 division의 id
     * @param width : 그리드의 폭 (숫자 || 비율)
     * @param height : 그리드의 높이 (숫자 || 비율)
     * @param gridObj.type: 그리드의 종류 ("grid" || "tree")
     * @param gridObj.fields: DataProvider.setFields에 전달될 값, array of DataField  
     * @param gridObj.columns: GridBase.setColumns에 전달될 값, array of DataColumn  
     * @param gridObj.options: GridBase.setOptions에 전달될 값, GridOptions  
     * @param gridObj.onCompleted: complete callback 
     */
    setup: function(id, width, height, product, gridObj) {       
        
        if (!gridObj)
            gridObj = {};
        
        gridObj.id = id;
        
        if (!gridObj.type)
            gridObj.type = "grid";

        __grids[id] = gridObj;
        
        var jsVer = product == "js";
        
        if (jsVer) {
            if (!isNaN(width)) 
                width = width + "px";
            if (!isNaN(height)) 
                height = height + "px";
            
            $("#" + id).css({ width: width, height: height });
            
            RealGridJS.setRootContext("RealGridJS"); //RealGridJS assets 폴더의 위치
            if (gridObj.type == "grid") {
                gridObj.dataProvider = new RealGridJS.LocalDataProvider();
                gridObj.gridView = new RealGridJS.GridView(id);
            } else {
                gridObj.dataProvider = new RealGridJS.LocalTreeDataProvider();
                gridObj.gridView = new RealGridJS.TreeView(id);             
            }
            gridObj.gridView.setDataSource(gridObj.dataProvider);
            
            RealGridsUtil.ready(gridObj);
        } else {
            var flashvars = {
                id: id
            };
            
            var pars = {
                quality: "high",
                wmode: "opaque",
                allowscriptaccess: "sameDomain",
                allowfullscreen: false,
                seamlesstabbing: false
            };
            
            if (isFirefox)
                pars.wmode = "direct";

            var attrs = {
                id: id,
                name: id,
                align: "middle"
            };

            if(gridObj.type == "grid"){
            	/* swfObject.js required */
            	var swfUrl = "/objects/RealGridWeb.swf"; // RealGrid+ swf path
                if (location.href.indexOf("http://localhost") == 0) {
                    swfUrl = swfUrl + "?" + new Date().getTime();
                };
                /* used SWFObject v2.2 <http://code.google.com/p/swfobject/> */
                swfobject.embedSWF(swfUrl, id, width, height, "11.1.0", "/objects/expressInstall.swf", flashvars, pars, attrs);
            }else{
            	/* swfObject.js required */
            	var swfUrl = "/objects/TreeGridWeb.swf"; // RealGrid+ swf path
            	if (location.href.indexOf("http://localhost") == 0) {
                    swfUrl = swfUrl + "?" + new Date().getTime();
                };
                /* used SWFObject v2.2 <http://code.google.com/p/swfobject/> */
                swfobject.embedSWF(swfUrl, id, width, height, "11.1.0", "/objects/expressInstall.swf", flashvars, pars, attrs);
            }
        }
                    
    },
    ready: function(gridObj) {
        if (gridObj.fields) 
            gridObj.dataProvider.setFields(gridObj.fields);

        if (gridObj.columns) 
            gridObj.gridView.setColumns(gridObj.columns);
        
        if (gridObj.options)
            gridObj.gridView.setOptions(gridObj.options);
        
        if (gridObj.onCompleted) 
            gridObj.onCompleted(gridObj);
        
    }
}

RealGrids.onload = function (id) {
    if (__grids[id]) {
        if (__grids[id].type == "grid") {
            __grids[id].dataProvider = new RealGrids.LocalDataProvider();
            __grids[id].gridView = new RealGrids.GridView(id);
        } else {
            __grids[id].dataProvider = new RealGrids.TreeDataProvider();
            __grids[id].gridView = new RealGrids.TreeView(id);
        }
        __grids[id].gridView.setDataProvider(__grids[id].dataProvider);
    
        RealGridsUtil.ready(__grids[id]);
    }
}

/* RealGridJS prototyping */

function findGridView(provider) {
    for (var i in __grids) {
        if (__grids[i].dataProvider == provider) {
            return __grids[i].gridView;
        }
    }
    return null;
} 

RealGridJS.LocalDataProvider.prototype.loadData = function (options, onSuccess, onFailed, onComplete) {
    var provider = this;
    var xhrcallback = undefined;
    options.progress = (options.progress == null || options.progress == undefined) ? true : options.progress;

    var gridView = findGridView(provider);
        
    if (options.progress && gridView) {
        xhrcallback = function () {
            var xhr = new window.XMLHttpRequest();
            //Download progress
            xhr.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    gridView.setProgress(0, evt.total, evt.loaded);
                }
            }, false);
            return xhr;
        }
        
        gridView.showProgress();
    }

    $.ajax({
        type: options.method ? options.method : "GET",
        url: options.url,
        dataType: "text",
        data: options.params,
        success: function (data) {
            if (options.filters) {
                provider.setFilters(provider.filters);
            };

            if (options.type == "json") {
                provider.fillJsonData(data, options);
            } else if (options.type == "xml") {
                provider.fillXmlData(data, options);
            } else if (options.type == "csv") {
                provider.fillCsvData(data, options);
            };

            if (onSuccess)
                onSuccess(provider);
        },
        error: function (xhr, status, error) {
            if (onFailed)
                onFailed(provider, xhr + ', ' + status + ', ' + error);
        },
        complete: function (data) {
            if (options.progress && gridView)
                gridView.closeProgress();

            if (onComplete)
                onComplete();
        },
        xhr: xhrcallback
    });
};

RealGridJS.LocalTreeDataProvider.prototype.loadData = function (options, onSuccess, onFailed, onComplete) {
    var provider = this;
    var xhrcallback = undefined;
    options.progress = (options.progress == null || options.progress == undefined) ? true : options.progress;

    var gridView = findGridView(provider);
        
    if (options.progress && gridView) {
        xhrcallback = function () {
            var xhr = new window.XMLHttpRequest();
            //Download progress
            xhr.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    gridView.setProgress(0, evt.total, evt.loaded);
                }
            }, false);
            return xhr;
        }
        
        gridView.showProgress();
    }

    $.ajax({
        type: options.method ? opt.method : "GET",
        url: options.url,
        data: options.params,
        success: function (data) {
            if (options.filters) {
                provider.setFilters(provider.filters);
            };

            if (options.type == "json") {
                provider.fillJsonData(data, options);
            } else if (options.type == "xml") {
                provider.fillXmlData(data, options);
            } else if (options.type == "csv") {
                provider.fillCsvData(data, options);
            };

            if (onComplete)
                onComplete(provider);
        },
        error: function (xhr, status, error) {
            if (onFailed)
                onFailed(provider, xhr + ', ' + status + ', ' + error);
        },
        complete: function (data) {
            if (options.progress && gridView)
                gridView.closeProgress();

            if (onComplete)
                onComplete();
        },
        xhr: xhrcallback
    });
};

RealGridJS.GridView.prototype.addImageList = function (images) {
    var imgs = new RealGridJS.ImageList(images.name, images.rootUrl);
    imgs.addUrls(images.images);
    this.registerImageList(imgs);
};

RealGridJS.TreeView.prototype.addImageList = function (images) {
    var imgs = new RealGridJS.ImageList(images.name, images.rootUrl);
    imgs.addUrls(images.images);
    this.registerImageList(imgs);
};
