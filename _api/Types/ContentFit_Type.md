---
layout: apipost
title: ContentFit
part: Types
typename: Constants
order: ContentFit
objectname: 
directiontype: 
permalink: /api/types/ContentFit/
---

#### Description

 이미지를 셀에 어떤 위치, 어떤 크기로 표시할 것인 지를 정의한다.

#### Members

> **NONE**  
> Value: "none"  
> 크기를 변경하지 않고 (top,left) 에서부터 그린다.  

> **CENTER**  
> Value: "center"  
> 크기를 변경하지 않고 맞추지 않고 수평및 수직 중앙에 정렬한다.  

> **BOTH**  
> Value: "both"  
> 이미지의 높이와 너비를 셀 크기에 최대한 채운다. 이미지가 왜곡될 수 있다.  

> **WIDTH**  
> Value: "width"  
> 이미지의 너비를 셀 너비에 최대한 채우고 높이는 이미지 비율에 맞게  중앙 정렬한다.  

> **HEIGHT**   
> Value: "height"  
> 이미지의 높이를 셀 높이에 최대한 채우고 너비는 이미지 비율에 맞게 중앙 정렬한다.  

> **AUTO**  
> Value: "auto"  
> 이미지가 왜곡되지 않는 상태로 최대한 셀 크기에 맞춰 중앙에 정렬한다.  

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

* [Column HeaderCheckbox](http://demo.realgrid.com/HeaderAndFooter/HeaderCheckbox/) 
* [Column HeaderImage](http://demo.realgrid.com/HeaderAndFooter/HeaderImage/) 