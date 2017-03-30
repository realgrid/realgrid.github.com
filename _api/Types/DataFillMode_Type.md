---
layout: apipost
title: DataFillMode
part: Types
typename: Constants
order: DataFillMode
objectname: 
directiontype: 
permalink: /api/types/DataFillMode/
jsonly: true
tags: 
  - FillMode
  - 채우기모드
---

#### Description

 Data provider에 행을 채우는 방법.

#### Members

> **SET**  
> Value: "set"  
> 0행부터 데이터 행 개수만큼 채운다. (기존의 데이터는 무시)   

> **APPEND**  
> Value: "append"  
> 현재 존재하는 마지막 행의 뒤로 데이터 추가한다.    

> **INSERT**  
> Value: "insert"  
> 데이터 삽입 한다.     

> **UPDATE**  
> Value: "update"  
> 기존 데이터를 대체. 추가할 데이터는 남아있는데 이미 마지막행일 경우는 append와 같이 뒤로 추가한다.  

#### Examples   

<pre class="prettyprint">
dataProvider.fillJsonData(data, { count: 1000, fillMode: "set" });
</pre>

<pre class="prettyprint">
dataProvider.fillJsonData(data, {});
</pre>

<pre class="prettyprint">
dataProvider.fillJsonData(data, {
    quoted: true,
    start: 0,
    count: 10,
    fillMode: "update",
    fillPos: start
});
</pre>

---

#### API Links

* [fillJsonData](/api/LocalDataProvider/fillJsonData/)   
* [fillCsvData](/api/LocalDataProvider/fillCsvData/)   
* [fillXmlData](/api/LocalDataProvider/fillXmlData/)  
* [Tree fillJsonData](/api/TreeDataProvider/fillJsonData/)   
* [Tree fillCsvData](/api/TreeDataProvider/fillCsvData/)   
* [Tree fillXmlData](/api/TreeDataProvider/fillXmlData/) 

#### Demo Links

* [LoadJsonData](http://demo.realgrid.com/FillData/LoadJsonData/)  
* [LazyLoadData](http://demo.realgrid.com/FillData/LazyLoading/)  