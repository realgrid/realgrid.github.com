---
layout: apipost
title: toggleColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/toggleColumnFilters/
tags:
  - filter
  - 필터
  - 컬럼필터
  - columnFilter
---


#### Description

 해당 컬럼의 지정한 필터들을 토글한다.

#### Syntax

> function toggleColumnFilters(column, filterNames)

#### Parameters

> **column**  
> Type: Object  
> 컬럼 설정 정보

> **filterNames**  
> Type: Array of String  
> 토글할 필터들의 이름

#### Return value

> NONE

#### Examples 

<pre class="prettyprint">
gridView.setColumns([
    { fieldName:"field1", 
      name:"column1", 
      filters:[
        {  name:"filter1",
           criteria:"value='11'",
           active:true  },
        {  name:"filter2",
           criteria:"value='12'",
           active:false  },
        {  name:"filter3",
           criteria:"value='13'"  }
      ]
    }
]);
...
gridView.toggleColumnFilters("column1",["filter1","filter2"]);
</pre>

---

#### API Links

* [toggleAllColumnFilters](/api/GridBase/toggleColumnFilters)
* [setColumnFilters](/api/GridBase/setColumnFilters)
* [clearColumnFilters](/api/GridBase/clearColumnFilters)
* [activateAllColumnFilters](/api/GridBase/activateAllColumnFilters)
* [activateColumnFilters](/api/GridBase/activateColumnFilters)  

#### Demo Links

* [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)