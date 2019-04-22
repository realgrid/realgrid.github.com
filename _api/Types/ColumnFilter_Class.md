---
layout: apipost
title: ColumnFilter
part: Types
typename: Classes
order: ColumnFilter
objectname: 
directiontype: 
permalink: /api/types/ColumnFilter/
tags: 
  - ColumnFilter
  - ColumnFiltering
  - Filter
  - Filtering
  - 컬럼필터
  - 컬럼필터링
  - 필터
  - 필터링
---

#### Description

 컬럼 필터링에 관련된 설정 정보를 관리한다.
 1.1.32버전부터 critera에서 function(){}을 사용할 수 있다.   

#### Properties

> **name**  
> Type: String   
> Default:  null     
> 필터 이름.  

<a name="criteria"></a> 
> **criteria**  
> Type: String || function(dataProvider, dataRow, field, filter) {} 
> Default: null    
> 필터에 표시될 [Expression](/api/features/Expression)을 지정한다.   
> funtion()의 return 값은 필터링 대상이면 true, 필터링 제외 대상이면 false로 지정한다.  
> RealGridJS 1.1.32 부터 fuction()을 지원한다.   

> **text**  
> Type: String  
> Default: null    
> selector에 표시되는 문자열이다. null이면 name 이 표시된다.  

> **description**  
> Type: String   
> Default:  null     
> 필터의 설명을 기재한다.  

> **active**  
> Type: Boolean   
> Default: true     
> 필터를 수행할 것인 지를 지정한다.  
> visible 여부에 상관없이 적용된다.    

> **visible**  
> Type: Boolean   
> Default: true     
> 필터의 보임 여부를 지정한다.  
> RealGridJS 1.1.29 이상부터 지원한다.     

<a name="tag"></a> 
> **tag**  
> Type: String   
> Default:  null     
> 필요한 기타 정보들을 지정한다.    
> RealGridJS 1.1.32 부터 지원한다.   

#### Examples   

<pre class="prettyprint">
var columns = [{
      "name": "CustomerID",
      "fieldName": "CustomerID",
      "type": "data",
      "width": "130",
      "styles": {
          "textAlignment": "center"
      },
      "header": {
          "text": "Customer ID"
      },
      "filters": [{
          name: "VINET",
          criteria: "value = 'VINET'"
      }, {
          name: "VICTE",
          criteria: "value = 'VICTE'"
      }, {
          name: "HANAR",
          criteria: "value = 'HANAR'",
          visible: false
      }]
}];

gridView.setColumns(columns);

////////////////////////////////////////////
var columns = [{
      "name": "CustomerID",
      "fieldName": "CustomerID",
      "type": "data",
      "width": "130",
      "styles": {
          "textAlignment": "center"
      },
      "header": {
          "text": "Customer ID"
      },
      "filters": [{
          name: "VINET",
          criteria: function(dataProvider, dataRow, field, filter) {
              var value = dataProvider.getValue(dataRow, field),
         
              return value == "VINET";
          }
      }]
}];

gridView.setColumns(columns);
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