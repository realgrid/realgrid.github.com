---
layout: apipost
title: DataFillOptions
part: Types
typename: Classes
order: DataFillOptions
objectname: 
directiontype: 
permalink: /api/types/DataFillOptions/
tags: 
  - FillOptions
  - 채우기옵션
---

#### Description

> 데이터 로드에 관련된 옵션 값을 정의합니다. 

#### Properties

> **fillMode**         
> Type: [DataFillMode]    
> Default: DataFillMode.SET   
> 데이터 채움모드, SET, APPEND, INSERT, UPDATE 가 있다.    

> **fillPos**          
> Type: Number   
> Default: 0 
> fillMode가 insert거나 update일때 시작되는 행     

> **count**       
> Type: Number    
> Default: -1    
> 가져올 데이터 행, -1인 경우 전체를 가져온다.         

> **rootArray**         
> Type: Boolean   
> Default: true    
> 데이터 소스의 최상위가 Array인지의 여부. json인 경우에만 사용  

> **rows**         
> Type: String    
> Default: "row"    
> 데이터 중에서 row element나 array 요소의 이름. json, xml안 경우에만 사용     

> **start**  
> Type: Number  
> Default: 0  
> 데이터에서 해더등을 제외한 실제 데이터 시작 line(0부터 시작). csv인 경우에만 사용  

> **delimiter**  
> Type: String  
> Default: ","  
> 구분자를 지정한다. csv인 경우에만 사용   

> **quoted**  
> Type: Boolean  
> Default: false  
> 각 셀의 데이터가 double-quotation mark(")로 감싸여져 있는지의 여부. csv인 경우에만 사용    

> **parentId**  
> Type: Number  
> TreeProvider만 사용가능, parent row id  

> **tree**  
> Type: String  
> TreeProvider만 사용가능, tree field  

> **children**   
> Type: String  
> TreeProvider만 사용가능, children field  

> **icon**  
> Type: String  
> TreeProvider만 사용가능, icon field  

> **sorting**  
> Type: Boolean  
> TreeProvider만 사용가능, 소트가 필요할 경우 true를 지정한다.  

<pre class="prettyprint">
    dataProvider.fillJsonData(data, {
        quoted: true,
        start: 0,
        count: 10,
        fillMode: "update",
        fillPos: start
    });
</pre>

<pre class="prettyprint">
    dataProvider.fillJsonData(data, { rows: "rows", icon: "icon" });
</pre>

<pre class="prettyprint">
    dataProvider.fillCsvData(data, { tree:"tree", icon:"icon", quoted:true,  start:1 });
</pre>

#### See Also
> [Tree Load Json Array DataSet](http://demo.realgrid.com/Demo/TreeLoadJsonData) 참조  
> [Tree Load CSV DataSet](http://demo.realgrid.com/Demo/TreeLoadCsvData) 참조  
> [LazyLoadData](http://demo.realgrid.com/Demo/LazyLoadData) 참조  
> [PagingLazyLoading2](http://demo.realgrid.com/Demo/PagingLazyLoading2) 참조  

> [fillJsonData](/api/LocalDataProvider/fillJsonData/)   
> [fillCsvData](/api/LocalDataProvider/fillCsvData/)   
> [fillXmlData](/api/LocalDataProvider/fillXmlData/)   

> [Tree fillJsonData](/api/TreeDataProvider/fillJsonData/)   
> [Tree fillCsvData](/api/TreeDataProvider/fillCsvData/)   
> [Tree fillXmlData](/api/TreeDataProvider/fillXmlData/)   

