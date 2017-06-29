---
layout: apipost
title: BarCellRenderer
part: Types
typename: Cell Renderers
order: BarCellRenderer
objectname: 
directiontype: 
permalink: /api/types/BarCellRenderer/
tags:
  - BarCellRenderer
  - Renderer
  - 바셀렌더러
  - 렌더러
---

#### Description

Bar 셀렌더러는 숫자형 컬럼 셀의 값을 막대 상자로 표시하는 렌더러이다. 

#### Properties

> **minimum**  
> Type: Number  
> Default: 0  
> 최소값을 지정한다.  

> **maximum**  
> Type: Number  
> Default: 100  
> 최대값을 지정한다.  

> **minimumWidth**   
> Type: Number   
> Default: 100   
> 막대 상자의 최소 크기를 지정한다.  

> **showLabel**  
> Type: Boolean  
> Default: null  
> 라벨을 보여줄 것인지를 지정한다.  

> **origin**  
> Type: String  
> Default: [BarCellRendererOrigin](/api/types/BarCellRendererOrigin)\.DEFAULT		  
> 막대 상자의 시작 위치를 지정한다. 

> **showTooltip**  
> Type: Boolean   
> Default: false     
> 셀 데이터 값을 툴팁으로 표시해준다.   


#### Examples   

<pre class="prettyprint">
var columns = [{
    "name": "Quantity",
    "fieldName": "Quantity",
    "type": "data",
    "width": 100,
    "renderer": {
        "type": "bar",
        "minimum": 0,
        "maximum": 100,
        "minWidth": 150,
        "showLabel": true,
        "origin":"left"
    },
    "styles": {
        "figureBackground": "linear,#ff000044,#ffeeeeee,90",
        "textAlignment": "center",
        "lineAlignment": "far",
        "paddingRight": 5,
        "figureSize": "70%"
    },
    "header": {
        "text": "Quantity"
    }
}]
gridView.setColumns(columns);
</pre>

---

#### Demo Links

* [Bar Cell Renderer](http://demo.realgrid.com/Renderer/BarCellRenderer/) 참조 
