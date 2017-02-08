---
layout: apipost
title: ColumnFilterAction
part: Types
typename: Classes
order: ColumnFilterAction
objectname: 
directiontype: 
permalink: /api/types/ColumnFilterAction/
tags: 
  - ColumnFilter
  - ColumnFiltering
  - Filter
  - Filtering
  - 컬럼필터
  - 컬럼필터링
  - 필터
  - 필터링
  - ColumnFilterAction
  - FilterAction
  - 컬럼필터액션
  - 필터액션
  
---

#### Description

 컬럼 필터 액션에 관련된 설정 정보를 관리한다.

#### Properties

> **name**  
> Type: String   
> Default:  null     
> 필터 이름.  

> **text**  
> Type: String   
> Default: null    
> selector에 표시되는 문자열이다. null이면 name 이 표시된다.  

> **description**  
> Type: String   
> Default:  null      
> 필터의 설명을 기재한다.  

#### Examples   

<pre class="prettyprint">
var actions = [{
    name: "autoFilter",
    text: "Auto Filter",
    description: "100개의 순차 데이터중 선택하여 filter하는 action."
}];

gridView.setColumnFilterActions('CustomerID', actions);
gridView.setColumnFilterActions('OrderID', actions);
</pre>

---

#### API Links 

* [getFilteringOptions](/api/GridBase/getFilteringOptions)  
* [setFilteringOptions](/api/GridBase/setFilteringOptions)  
* [activateAllColumnFilters](/api/GridBase/activateAllColumnFilters)  
* [activateColumnFilters](/api/GridBase/activateColumnFilters)  
* [addColumnFilters](/api/GridBase/addColumnFilters)  
* [clearColumnFilterActions](/api/GridBase/clearColumnFilterActions)  
* [clearColumnFilters](/api/GridBase/clearColumnFilters)  
* [getActiveColumnFilters](/api/GridBase/getActiveColumnFilters)  
* [getColumnFilter](/api/GridBase/getColumnFilter)  
* [getColumnFilters](/api/GridBase/getColumnFilters)  
* [removeColumnFilters](/api/GridBase/removeColumnFilters)  
* [setColumnFilterActions](/api/GridBase/setColumnFilterActions)  
* [setColumnFilters](/api/GridBase/setColumnFilters)  
* [toggleAllColumnFilters](/api/GridBase/toggleAllColumnFilters)  
* [toggleColumnFilters](/api/GridBase/toggleColumnFilters)  
* [onFilterActionClicked](/api/GridBase/onFilterActionClicked)  
* [onFiltering](/api/GridBase/onFiltering)  
* [onFilteringChanged](/api/GridBase/onFilteringChanged)  

#### Demo Links 

* [Column Filtering](http://demo.realgrid.com/Columns/ColumnFiltering/) 