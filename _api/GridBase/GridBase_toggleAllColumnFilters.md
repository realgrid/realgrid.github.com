---
layout: apipost
title: toggleAllColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/toggleAllColumnFilters/
tags:
  - filter
  - 필터
  - 필터토클
  - toggleFilter
---


#### Description

> 해당 컬럼의 모든 필터들을 토글한다.

#### Syntax

> function toggleAllColumnFilters(column)

#### Parameters

> **column**  
> Type: Object  
> 컬럼 설정 정보  


#### Return value

> NONE

#### Example

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
    gridView.toggleAllColumnFilters("column1");
</pre>

#### See Also
> [toggleColumnFilters](/api/GridBase/toggleColumnFilters), [setColumnFilters](/api/GridBase/setColumnFilters), [clearColumnFilters](/api/GridBase/clearColumnFilters), [activateAllColumnFilters](/api/GridBase/activateAllColumnFilters), [activateColumnFilters](/api/GridBase/activateColumnFilters)  
> [Filtering Demo](http://demo.realgrid.com/Demo/ColumnFiltering)