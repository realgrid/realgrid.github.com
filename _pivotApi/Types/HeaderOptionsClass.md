---
layout: apipost
title: HeaderOptions
part: Types
typename: Classes
order: HeaderOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/HeaderOptions/
tags: 
  - HeaderOptions
  - 헤더옵션
---

#### Description
피벗 그리드의 상단 헤더의 표시여부 설정 모델이다.

#### Properties

> **titleVisible**  
> Type: Boolean   
> Default: true       
> 타이틀 바(Context Menu, Setup Menu 버튼이 있는 영역)의 표시 여부를 지정한다.  

> **titleHeight**  
> Type: Number   
> Default: 20       
> 타이틀 바의 높이를 지정한다.  

> **rowHeadVisible**  
> Type: Boolean   
> Default: true       
> 행 헤더 바의 표시 여부를 지정한다.  

> **columnHeadVisible**  
> Type: Boolean   
> Default: true       
> 컬럼 헤더 바의 표시 여부를 지정한다.  

> **valueHeadVisible**  
> Type: Boolean   
> Default: true       
> 값 헤더 바의 표시 여부를 지정한다.  

> **menuButtonVisible**  
> Type: Boolean   
> Default: true       
> Context Menu 버튼의 표시 여부를 지정한다.  

> **setupButtonVisible**  
> Type: Boolean   
> Default: true       
> Setup 버튼의 표시 여부를 지정한다.  

<a name="formType"></a>
> **formType**  
> Type: [FormType](/pivotApi/types/FormType/)   
> Default: "normal"       
> 피벗의 표시형태를 지정한다. "grid"를 지정하면 일반 그리드의 형태로 표시된다.    
> 1.0.2 버전부터 지원한다.    

<a name="width"></a>
> **width**  
> Type: Number   
> Default: null       
> 필드의 너비를 지정한다. 컬럼의 그룹역활을 하는 필드에는 적용되지 않는다.       
> 1.0.2 버전부터 지원한다.    

<a name="headerSortable"></a>
> **headerSortable**  
> Type: Boolean   
> Default: True  
> True이면 Row 또는 Column의 필드 헤더를 클릭했을때 다시 정렬한다.  
> 1.0.9 버전부터 지원한다.

#### Examples   

<pre class="prettyprint">
pivot.setOptions({
    header: {
        titleVisible: true,
        titleHeight: 50,
        setupButtonVisible: false,
        menuButtonVisible: false
    }
});

or

pivot.setHeaderOptions({
    titleVisible: true,
    titleHeight: 50,
    setupButtonVisible: false,
    menuButtonVisible: false
});
</pre>

---

#### API Links

* [getHeaderOptions](/pivotApi/RealPivot/getHeaderOptions/)   
* [setHeaderOptions](/pivotApi/RealPivot/setHeaderOptions/)   


