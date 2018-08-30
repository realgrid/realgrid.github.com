---
layout: apipost
title: Selector
part: Types
typename: Classes
order: Selector
objectname: 
directiontype: 
permalink: /api/types/selector/
jsonly: true
versions:
    - JS 1.1.29+
tags: 
  - ColumnFilter
  - ColumnFiltering
  - Filter
  - Filtering
  - Selector
  - 컬럼필터
  - 컬럼필터링
  - 필터
  - 필터링
  - 셀렉터
---

#### Description

 필터 검색창과 관련된 설정 정보를 관리한다.

#### Properties

> **showSearchInput**  
> Type: Boolean     
> Default: true       
> 필터 검색창 보임여부를 지정한다.     

> **showButtons**  
> Type: Boolean  
> Default: true      
> 확인, 취소 버튼의 표시여부를 지정한다.     

> **acceptText**  
> Type: String  
> Default: "확인"    
> 확인 버튼에 표시되는 문구를 지정한다.    

> **cancelText**  
> Type: String  
> Default: "취소"    
> 취소 버튼에 표시되는 문구를 지정한다.    

#### Examples   

<pre class="prettyprint">
gridView.setFilteringOptions({
  clearWhenSearchCheck: true, 
  selector: {
    showSearchInput: true,   
    showButtons: true,        
    acceptText: "확인",
    cancelText: "취소"
  }
});
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