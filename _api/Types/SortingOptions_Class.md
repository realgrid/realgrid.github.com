---
layout: apipost
title: SortingOptions
part: Types
typename: Config Classes
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

> **toast**  
> Type: [ToastOptions](/api/types/ToastOptions)  
> Default: none  
> ToastOptions 참조

#### Example

<pre class="prettyprint">
    var options = {};
    options.style = "exclusive";
    grdMain.sortingOptions(options);
</pre>

#### See Also

> [Column Sorting](http://demo.realgrid.net/Demo/ColumnSorting)
