---
layout: apipost
title: setColumnFilters
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setColumnFilters/
tags:
  - filter
  - 필터
  - 컬럼필터
---


#### Description

> 그리드 컬럼에 filter를 설정한다.
> 사용가능한 Operator와 variables는 [Expression](http://demo.realgrid.com/Demo/ExpressionConcept) 참조

#### Syntax

> function setColumnFilters(column, filters)

#### Parameters

> **column**  
> Type: String\|Object  
> column명 또는 [Column](/api/types/DataColumn/)객체이다.  

> **filters**  
> Type: Array of Object  
> filter객체의 배열이다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    var filters = [{name:"filter1",criteria:"value='가나다라'"},{name:"filter2",criteria:"value='가나다라'", active:true}];
    var aColumn = gridView.columnByField("title");

    gridView.setColumnFilters(aColumn,filters);
    ....
    /* 아래와 같이 컬럼을 설정할때 함께할수 있다. */
    gridView.setColumns([
        { fieldName:"title", 
          name:"title",
          filters:[
            {name:"filter1",
             criteria:"value='가나다라'"},
            {name:"filter2",
             criteria:"value='일이삼사',
             active:true"},
            {name:"filter3",
             criteria:"value like '%가나%'"}
          ]
        }
    ]);

</pre>

#### Demo Links
> [Expression](http://demo.realgrid.com/Demo/ExpressionConcept)