---
layout: apipost
title: SortingOptions
part: Types
typename: Classes
order: SortingOptions
objectname: 
directiontype: 
permalink: /api/types/SortingOptions/
tags:
    - 정렬설정
---


#### Description

 컬럼 정렬과 관련된 설정 모델이다.  
style이 "exclusive"일 때 Shift키와 함께 컬럼 헤더를 클릭하면 "inclusive"처럼 동작한다.  

#### Properties

> **enabled**  
> Type: boolean  
> Default: true  
> 사용자가 컬럼 헤더를 클릭해서 컬럼을 정렬시킬 수 있도록 할 것인지를 지정한다. GridView.orderBy()는 이 속성 값과 상관없이 실행된다.  

> **style**  
> Type: [SortStyle](/api/types/SortStyle)  
> Default: SortStyle.EXCLUSIVE     
> 그리드의 여러 컬럼에 대해 정렬 상태를 지정하는 방식을 지정한다.

> **keepFocusedRow**  
> Type: boolean  
> Default: false  
> 소트시 현재 포커스된 행을 유지할 것인지의 여부를 지정한다.  

> **HandleVisibility**  
> Type: [HandleVisibility](/api/types/HandleVisibility/)  
> Default: HandleVisibility.VISIBLE  
> 필터 핸들의 표시 방법을 지정한다.

> **toast**  
> Type: [ToastOptions](/api/types/ToastOptions)  
> Default: none  
> ToastOptions 참조

> **handleColor**  
> Type: string  
> Default: undefined  
> 소트되었을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **handleNoneColor**  
> Type: string   
> Default: undefined   
> 미소트되었을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **handleBorderColor**   
> Type: string   
> Default: undefined   
> 소트핸들의 경계선 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **hoveredHandleColor**  
> Type: string   
> Default: undefined   
> 마우스가 호버되고, 소트되었을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **hoveredHandleNoneColor**  
> Type: string   
> Default: undefined   
> 마우스가 호버되고, 미소트되었을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **imageHandle**  
> Type: boolean   
> Default: false   
> 핸들 기호를 이미지로 표시할 것인지의 여부를 지정한다.  

> **handleImage**  
> Type: object 
> ascending, descending, hoveredAscending, hoveredDescending, none, hoveredNone 의 속성을 가진 객체이다. 각 속성에는 해당 속성에 맞는 이미지의 경로를 지정한다.  

> **showSortOrder**  
> Type: boolean  
> Default: false  
> 소트 순서 표시 여부를 지정한다.    
> JS ver 1.1.22부터 지원된다. 

> **sortOrderStyles**  
> Type: style object  
> Default: null  
> 소트 순서의 스타일을 지정한다.(foreground, font, textAlignment, lineAlignment)
> JS ver 1.1.22부터 지원된다.    

> **pageSorting**  
> Type: boolean  
> Default: false  
> true이면 페이징 모드에서 소트시 전체 페이지가 아닌 현재 페이지를 기준으로 소팅된다.   
> JS ver 1.1.33부터 지원된다.    

#### Examples

**다중컬럼 정렬이 가능하도록 설정하기**

<pre class="prettyprint">
gridView.setSortingOptions({
  style: "inclusive",
  showSortOrder: true, 
  sortOrderStyles: {
    foreground: "#88ececec", 
    fontSize: 11, 
    fontBold: true, 
    textAlignment: "far", 
    lineAlignment: "far"
  }
});
</pre>

---
    
#### API Links

* [Sorting](/api/features/Sorting/)
* [SortingOptions](/api/types/SortingOptions/)

#### Tutorial Links

* [A12 소팅(sorting), 데이터 정렬하기 - I 단일 컬럼 정렬](http://help.realgrid.com/tutorial/a12/)
* [A13 소팅(sorting), 데이터 정렬하기 - II 다중 컬럼 정렬](http://help.realgrid.com/tutorial/a13/)

#### Demo Links

* [Column Sorting](http://demo.realgrid.com/Columns/ColumnSorting/)
