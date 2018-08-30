---
layout: apipost
title: GridOptions
part: Types
typename: Classes
order: GridOptions
objectname: 
directiontype: 
permalink: /api/types/GridOptions/
tags:
  - GridOptions
  - 그리드설정
  - SortMode
  - 소트모드  
  - FilterMode
  - 필터모드  
---

#### Description

 그리드 전체에 대한 설정

#### Properties

> **summaryMode**  
> Type: [SummaryMode](/api/types/SummaryMode)  
> Default: SummaryMode.AGGREGATE  

> **hideDeletedRows**  
> Type: Boolean  
> Default: false  
> 삭제된 행의 표시 여부를 지정한다.

> **sortMode**  
> Type: String      
> Default: "auto"      
> "explicit"를 사용하면 정렬된 데이터가 수정되었을때 명시적으로 소트를 수행해야 재정렬된다.    

> **filterMode**  
> Type: String   
> Default: "auto"    
> "explicit"를 사용하면 필터링된 데이터가 수정되었을때 명시적으로 필터링을 해야 재필터링 된다.   

> **filterOr**  
> Type: Boolean   
> Default: false    
> true를 지정하면 각 컬럼의 필터간 필터링이 or 조건으로 반영되어 표시된다.      
> RealGridJS 1.1.29 이상부터 지원한다.   

> **currentChangingFirst**  
> Type: Boolean   
> Default: false    
> true를 onCurrentChanging Event가 hideEditor보다 먼저 발생하고 false를 return하면 editor가 사라지지 않는다.      
> RealGridJS 1.1.29 이상부터 지원한다.   

> **checkBar**  
> Type: [checkBar](/api/types/CheckBar/)  
> CheckBar를 설정한다.  

> **copy**  
> Type: [copyOptions](/api/types/CopyOptions/)  
> CopyOption을 설정한다.  

> **display**  
> Type: [displayOptions](/api/types/DisplayOptions/)  
> DisplayOption을 설정한다.  

> **edit**  
> Type: [editOptions](/api/types/EditOptions/)  
> EditOption을 설정한다.  

> **filtering**  
> Type: [filteringOptions](/api/types/FilteringOptions/)  
> FilteringOption을 설정한다.  

> **fixed**  
> Type: [fixedOptions](/api/types/FixedOptions/)  
> FixedOption을 설정한다.  

> **grouping**  
> Type: [groupingOptions](/api/types/GroupingOptions/)  
> GroupingOption을 설정한다.  

> **header**  
> Type: [header](/api/types/Header/)  
> Header를 설정한다.  

> **indicator**  
> Type: [indicator](/api/types/Indicator/)  
> Indicator를 설정한다.  

> **panel**  
> Type: [panel](/api/types/Panel/)  
> Panel을 설정한다.  

> **paste**  
> Type: [pasteOptions](/api/types/PasteOptions/)  
> PasteOption을 설정한다.  

> **rowGroup**  
> Type: [rowGroupOptions](/api/types/RowGroupOptions/)  
> RowGroupOption은 설정한다.  

> **select**  
> Type: [selectOptions](/api/types/SelectOptions/)  
> SelectOption을 설정한다.  

> **sorting**  
> Type: [sortingOptions](/api/types/SortingOptions/)  
> SortingOption을 설정한다.  

> **stateBar**  
> Type: [stateBar](/api/types/StateBar/)  
> StateBar을 설정한다.  

### Example  

<pre class="prettyprint">
gridView.setOptions({
    hideDeletedRows: true,
    sortMode: "explicit",
    filterMode: "explicit",
    display: {
        fitStyle: "evenFill"
    },
    fixed: {
        colCount: 3
    }
});
</pre>

---

#### API Links

* [setOptions](/api/GridBase/setOptions/)  
* [getOptions](/api/GridBase/getOptions/) 

#### Demo Links

* [GridFitting](http://demo.realgrid.com/Columns/GridFitting/) 