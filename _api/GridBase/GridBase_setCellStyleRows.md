---
layout: apipost
title: setCellStyleRows
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCellStyleRows/
---


#### Description

> 필드별 스타일 id 값을 가지고 있는 하나 이상의 행을 적용해서 DataCellStyle을 일괄적으로 지정할 수 있다
> rows 매개변수는 DataProvider의 setRows에 전달하는 것과 똑 같은 형식이면 된다. Json 객체 배열의 배열이거나, 배열의 배열일 수 있다. 즉, ajax 호출로 전달받은 데이터셋 등에 데이터와 스타일id 값이 동시에 포함될 수도 있다.
> fieldMap 매개변수에는 style id를 갖는 rows의 필드 위치나 속성명을 DataProvider의 필드 인덱스나 필드명과 매핑하는 정보가 들어가야 한다. rows가 Json 객체 배열의 배열이라면 { 속성명:필드명 or 속성:fieldIndex, ... } 로 구성되는 Json 객체로 매핑 정보를 전달하고, 배열의 배열이라면 [11, 12...]와 같은 배열 구조로 매핑 정보를 전달해야 한다.

#### Syntax

> function setCellStyleRows(rows, fieldMap)

#### Parameters

> **rows**
> Type: array of object
> 셀 스타일을 적용할 데이터 행들

> **fieldMap**
> Type: array of object
> 셀 스타일을 적용할 맵핑 정보들

#### Return value

> None.

#### Example

<pre class="prettyprint">
grid.addCellStyle("style01", {
    "foreground": "#ffffffff",
    ...
});
 
// with json objects
var rows = [
    {"id":1,"userid":"jwagner","company":"Mynte","first_name":"Theresa","last_name":"Reynolds","col1style":"style01"},
    {"id":2,"userid":"tphillips","company":"Zazio","first_name":"Raymond","last_name":"Tucker","col1style":"style02"},
    {"id":3,"userid":"bmendoza","company":"Edgeify","first_name":"Emily","last_name":"Flores","col1style":"style03"},
    {"id":4,"userid":"phicks","company":"Nlounge","first_name":"Johnny","last_name":"Reed","col1style":"style01"},
    {"id":5,"userid":"tbanks","company":"Yodoo","first_name":"David","last_name":"Miller","col1style":"style03"},
    ...
];
grid.setCellStyleRows(rows, {"col1style": 1});
</pre>

