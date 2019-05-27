---
layout: faqpost
title:  dropDown리스트가 동적으로 앞의 값에 따라서 변경되는 방법이 있나요? (다른 방법)
date:   2016-08-12 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - dropdown
---

<script type="text/javascript" src="/script/realgridjs-lic.js"></script>
<script type="text/javascript" src="/script/realgridjs_eval.1.1.31.min.js"></script>
<script type="text/javascript" src="/script/realgridjs-api.1.1.31.js"></script>

<script>
var gridView;
var dataProvider;

$(document).ready( function() {

    RealGridJS.setTrace(false);
    RealGridJS.setRootContext("/script");
    
    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);

    //필드 배열 객체를 생성합니다.
    var fields = [
        { "fieldName": "text1", dataType: "text" },
        { "fieldName": "text2", dataType: "text" },
        { "fieldName": "text3", dataType: "text" },
        { "fieldName": "text2Name", dataType: "text" }, // 이름을 가지고 있을 field를 추가로 지정합니다.  
        { "fieldName": "text3Name", dataType: "text" }, // 이름을 가지고 있을 field를 추가로 지정합니다.  
    ];
    //DataProvider의 setFields함수로 필드를 입력합니다.
    dataProvider.setFields(fields);

    //필드와 연결된 컬럼 배열 객체를 생성합니다.
    var columns = [
        { "fieldName": "text1", name: "text1", lookupDisplay: true, labels: ["PC", "카메라"], values: ["1", "2"], editor: { type: "dropDown", lookupDisplay: true } },
        { "fieldName": "text2", name: "text2", lookupDisplay: true, editor: { type: "dropDown" }, labelField: "text2Name" }, // labelField지정합니다.
        { "fieldName": "text3", name: "text3", lookupDisplay: true, editor: { type: "dropDown" }, labelField: "text3Name" }, // labelField지정합니다.
    ];
    //컬럼을 GridView에 입력 합니다.
    gridView.setColumns(columns);

    var data = [
        ["1","NOTEBOOK","SAMSUNG","노트북","삼성"],
        ["2","COMPACT","NIKON","똑딱이","니콘"],
        ["1","NOTEBOOK","SAMSUNG","노트북","삼성"],
        ["2","COMPACT","NIKON","똑딱이","니콘"],
        ["1","NOTEBOOK","SAMSUNG","노트북","삼성"],
        ["2","COMPACT","NIKON","똑딱이","니콘"],
        ["1","NOTEBOOK","SAMSUNG","노트북","삼성"],
        ["2","COMPACT","NIKON","똑딱이","니콘"]
    ];
    dataProvider.setRows(data);

    setEvent(gridView, dataProvider)
});

// text1의 값이 변경되거나 row가 변경되는 경우 dorpDown editor를 다시 설정합니다.
function changeDropDown(key) {
    var acol = gridView.columnByName("text2");
    if (key === "1") {
        acol.values = "NOTEBOOK,DESKTOP,MONITER,PRINTER".split(",");
        acol.labels = "노트북,본체,모니터,프린터".split(",");
    } else if (key === '2'){
        acol.values = "COMPACT,HIGHEND,MIRRORLESS,DSLR,FULLFRAME".split(",");
        acol.labels = "똑딱이,비싼똑딱이,거울없음,디지털일안리플렉스,풀프레임".split(",");
    };

    gridView.setColumn(acol);
}

function changeDropDown1(key) {
    var values1 = "NOTEBOOK,DESKTOP,MONITER,PRINTER".split(",");
    var values2 = "COMPACT,HIGHEND,MIRRORLESS,DSLR,FULLFRAME".split(",");
    var acol = gridView.columnByName("text3");
    if (values1.indexOf(key) > -1) {
        acol.values = "SAMSUNG,LG,LENOVO".split(",");
        acol.labels = "삼성,엘지,레노버".split(",");
    } else if (values2.indexOf(key) > -1) {
        acol.values = "NIKON,캐논".split(",");
        acol.labels = "니콘,캐논".split(",");
    }; // 샘플로 추가만 추가, 나머지 것들도 추가.

    gridView.setColumn(acol);
}

function setEvent(grid, provider) {
    // text1의 값이 수정되는 경우 체크및 text2값 초기화.
    grid.onEditCommit = function (grid, index, oldValue, newValue) {
        if (index.fieldName === "text1") {
            changeDropDown(newValue);
            if (oldValue !== newValue) {
                grid.setValue(index.itemIndex, "text2", "");
                grid.setValue(index.itemIndex, "text2Name", "");
            }
        } else if (index.fieldName === "text2") {
            changeDropDown1(newValue);
            if (oldValue !== newValue) {
                grid.setValue(index.itemIndex, "text3", "");
                grid.setValue(index.itemIndex, "text3Name", "");
            }
        };
    };
    // row가 변경되는 경우 
    grid.onCurrentRowChanged = function (grid, oldRow, newRow) {
        if (newRow >= 0) {
            changeDropDown(grid.getValue(newRow, "text1"));
            changeDropDown1(grid.getValue(newRow, "text2"));
        }
    };
    // text2의 dropDown을 이용하여 값을 선택한경우 labelField에 값을 넣어줌.
    grid.onGetEditValue = function (grid, index, editResult) {
        if (index.fieldName === "text2") {
            grid.setValue(index.itemIndex, "text2Name", editResult.text);
        }
        if (index.fieldName === "text3") {
            grid.setValue(index.itemIndex, "text3Name", editResult.text);
        }
        console.log(JSON.stringify(index), JSON.stringify(editResult));
    };
    provider.onRowDeleted = function (provider, row) {
        // 필요한 경우 var idx = grid.getCurrent(); changeDropDown(grid.getValue(idx.itemIndex, "text1")); 추가
    }
    provider.onRowsDeleted = function (provider, rows) {
        // 필요한 경우 var idx = grid.getCurrent(); changeDropDown(grid.getValue(idx.itemIndex, "text1")); 추가
    }
}
   
</script>

# Q.

dropDown리스트가 동적으로 앞의 값에 따라서 변경되는 방법이 있나요? #2

---
***

# A.

[dropDown리스트가 동적으로 앞의 값에 따라서 변경되는 방법이 있나요?](http://help.realgrid.com/faq/2015/05/13/FaqRealGrid-1.html) 에 이어 다른 방법으로 
설정하는 법을 보여 드겠습니다.  

<pre class="prettyprint">
function setFields(provider) {
    var fields = [
        { "fieldName": "text1", dataType: "text" },
        { "fieldName": "text2", dataType: "text" },
        { "fieldName": "text3", dataType: "text" },
        { "fieldName": "text2Name", dataType: "text" }, // 이름을 가지고 있을 field를 추가로 지정합니다.  
        { "fieldName": "text3Name", dataType: "text" }, // 이름을 가지고 있을 field를 추가로 지정합니다.  
    ];
    provider.setFields(fields);
};

function setColumns(grid) {
    var columns = [
        { "fieldName": "text1", name: "text1", lookupDisplay: true, labels: ["PC", "카메라"], values: ["1", "2"], editor: { type: "dropDown", lookupDisplay: true } },
        { "fieldName": "text2", name: "text2", lookupDisplay: true, editor: { type: "dropDown" }, labelField: "text2Name" }, // labelField지정합니다.
        { "fieldName": "text3", name: "text3", lookupDisplay: true, editor: { type: "dropDown" }, labelField: "text3Name" }, // labelField지정합니다.
    ];
    grid.setColumns(columns);
};

// text1의 값이 변경되거나 row가 변경되는 경우 dorpDown editor를 다시 설정합니다.
function changeDropDown(key) {
    var acol = gridView.columnByName("text2");
    if (key === "1") {
        acol.values = "NOTEBOOK,DESKTOP,MONITER,PRINTER".split(",");
        acol.labels = "노트북,본체,모니터,프린터".split(",");
    } else if(key === "2"){
        acol.values = "COMPACT,HIGHEND,MIRRORLESS,DSLR,FULLFRAME".split(",");
        acol.labels = "똑딱이,비싼똑딱이,거울없음,디지털일안리플렉스,풀프레임".split(",");
    };

    gridView.setColumn(acol);
}

function changeDropDown1(key) {
    var acol = gridView.columnByName("text3");
    if (key === "NOTEBOOK") {
        acol.values = "SAMSUNG,LG,LENOVO".split(",");
        acol.labels = "삼성,엘지,레노버".split(",");
    } else if (key === "COMPACT") {
        acol.values = "NIKON,캐논".split(",");
        acol.labels = "니콘,캐논".split(",");
    }; // 샘플로 추가만 추가, 나머지 것들도 추가.
    gridView.setColumn(acol);
}

function setEvent(grid, provider) {
    // text1의 값이 수정되는 경우 체크및 text2값 초기화.
    grid.onEditCommit = function (grid, index, oldValue, newValue) {
        if (index.fieldName === "text1") {
            changeDropDown(newValue);
            if (oldValue !== newValue) {
                grid.setValue(index.itemIndex, "text2", "");
                grid.setValue(index.itemIndex, "text2Name", "");
            }
        } else if (index.fieldName === "text2") {
            changeDropDown1(newValue);
            if (oldValue !== newValue) {
                grid.setValue(index.itemIndex, "text3", "");
                grid.setValue(index.itemIndex, "text3Name", "");
            }
        };
    };
    // row가 변경되는 경우 
    grid.onCurrentRowChanged = function (grid, oldRow, newRow) {
        if (newRow >= 0) {
            changeDropDown(grid.getValue(newRow, "text1"));
            changeDropDown1(grid.getValue(newRow, "text2"));
        }
    };
    // text2의 dropDown을 이용하여 값을 선택한경우 labelField에 값을 넣어줌.
    grid.onGetEditValue = function (grid, index, editResult) {
        if (index.fieldName === "text2") {
            grid.setValue(index.itemIndex, "text2Name", editResult.text);
        }
        if (index.fieldName === "text3") {
            grid.setValue(index.itemIndex, "text3Name", editResult.text);
        }
        console.log(JSON.stringify(index), JSON.stringify(editResult));
    };
    provider.onRowDeleted = function (provider, row) {
        // 필요한 경우 var idx = grid.getCurrent(); changeDropDown(grid.getValue(idx.itemIndex, "text1")); 추가
    }
    provider.onRowsDeleted = function (provider, rows) {
        // 필요한 경우 var idx = grid.getCurrent(); changeDropDown(grid.getValue(idx.itemIndex, "text1")); 추가
    }
}
</pre>

#### 실행화면

<div id="realgrid" style="width: 100%; height: 300px;"></div>
