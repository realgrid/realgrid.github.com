---
layout: apipost
title: SortingOptions
part: Types
typename: Classes
order: SortingOptions
objectname: 
directiontype: 
permalink: /api/types/SortingOptions/
---


#### Description

> 컬럼 정렬과 관련된 설정 모델이다.

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

##### Examples s

**다중컬럼 정렬이 가능하도록 설정하기**

<pre class="prettyprint">
    var options = {};
    options.style = "inclusive";
    gridView.setSortingOptions(options);
</pre>

    
#### API Links

* [Sorting](/api/features/Sorting/)
* [SortingOptions](/api/types/SortingOptions/)

#### Tutorial Links

* [A12 소팅(sorting), 데이터 정렬하기 - I 단일 컬럼 정렬](http://help.realgrid.com/tutorial/a12/)
* [A13 소팅(sorting), 데이터 정렬하기 - II 다중 컬럼 정렬](http://help.realgrid.com/tutorial/a13/)

#### Demo Links

> [Column Sorting](http://demo.realgrid.net/Demo/ColumnSorting)
