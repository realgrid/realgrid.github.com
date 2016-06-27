---
layout: apipost
title: ColumnHeaderOptions
part: Types
typename: Classes
order: ColumnHeaderOptions
objectname: 
directiontype: 
permalink: /api/types/ColumnHeaderOptions/
---

#### Description

 컬럼 헤더와 관련된 옵션 정보이다.

#### Properties

> **checkVisibility**  
> Type: [HandleVisibility](/api/types/HandleVisibility/)  
> Default: HandleVisibility.ALWAYS  
> 체크박스의 표시 방법을 지정한다.  

> **checkBorderColor**  
> Type: string  
> Default: undefined  
> 체크박스의 경계선 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다. 

> **checkColor**  
> Type: string  
> Default: undefined  
> 체크의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다. 

> **checkNoneColor**
> Type: string  
> Default: undefined  
> 체크 되지 않았을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **hoveredCheckColor**
> Type: string  
> Default: undefined  
> 마우스가 호버되고, 체크 되었을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **hoveredCheckNoneColor**
> Type: string  
> Default: undefined  
> 마우스가 호버되고, 체크 되지 않았을때의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.  

> **imageCheckHandle**
> Type: boolean  
> Default: false  
> 체크박스를 이미지로 표시할 것인지의 여부를 지정한다.  

> **checkImage**
> Type: object
> none, fill, hoveredNone, hoveredFill 의 속성을 가진 객체이다. 각 속성에는 해당 속성에 맞는 이미지의 경로를 지정한다.  

#### Examples   

<pre class="prettyprint">
gridView.setColumnHeaderOptions({
    checkColor: "ffff0000",
    checkNoneColor: "ff00ff00",
    ...
});
</pre>

---

#### API Links

* [setColumnHeaderOptions](/api/GridBase/setColumnHeaderOptions/)   
* [getColumnHeaderOptions](/api/GridBase/getColumnHeaderOptions/)  

#### Demo Links

* [Column HeaderCheckbox](http://demo.realgrid.net/Demo/HeaderCheckbox)  
* [Column HeaderImage](http://demo.realgrid.net/Demo/HeaderImage)  