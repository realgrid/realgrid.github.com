---
layout: tutopost
title: Datatime Output Format.  
date: 2017-09-08 09:00:00 +9:00 GMT
permalink: /tip/datetimeOutputFormat/
categories: Tutorial
course:
  - Tip
tags: 
  - RealGridJS
  - datetime
  - format
  - output
  - 화면표시
---
   
리얼그리드에서 사용하는 데이터 형은 자바스크립트를 기본으로 사용하고 있습니다. 그렇기 때문에 필드의 dataType이 "datetime"인 필드의 값을 가져오게되면 자바스크립트의 Date 객체값으로 반환됩니다. 

이 경우 실제 업무에 사용하기에 불편한 점이 있을 수도 있습니다. 이 경우 아래와 같이 dataProvider.[getOutputRow()](http://help.realgrid.com/api/LocalDataProvider/getOutputRow/), [getOutputRows()](http://help.realgrid.com/api/LocalDataProvider/getOutputRows/)를 사용하면 원하는 Format으로 출력할 수 있습니다.


<pre class="pretty-print">
var rowData = dataProvider.getOutputRow({datetimeFormat: "yyyyMMdd"}, 10);
</pre>

그러나 하나의 그리드에서 사용하는 datetime 필드가 여러개이고 각 필드에 적용된 datetime format이 여러개 인 경우는 위의 방법이 해결책이 될 수 없습니다. 이런 경우는 아래와 같이 사용하시면 됩니다.  

<pre class="pretty-print">
// javascript datetimeFormat
Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "am" : "pm";
            default: return $1;
        }
    });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

dataProvider.getOutputRow({datetimeCallback:function(index, field, value){
    //필드 마다 다른 포맷 설정
    if(field == "field3"){
        return new Date(value).format('yyyy/MM/dd')
    }
    if(field == "field4"){
        return new Date(value).format('yyyyMMdd')
    }
}},0)
</pre>

dataProvider.getOutputRow()의 경우 화면에 보이는 것과 다른 포맷으로 가져올 수 있는 장점이 있습니다.

그러나 다른 포맷이 필요하지 않고 화면에 보이는 포맷 그대로 가져오고 싶은 경우는 dataProvider.getOutputRow(), dataProvider.getOutputRows()를 사용하지 않고 아래의 gridView.[getDisplayValues()](http://help.realgrid.com/api/GridView/getDisplayValues/)를 사용하시면 됩니다.

<pre class="pretty-print">
var values = gridView.getDisplayValues(0);
</pre>


---
