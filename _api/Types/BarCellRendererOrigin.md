---
layout: apipost
title: BarCellRendererOrigin
part: Types
typename: Constants
order: BarCellRendererOrigin
objectname: 
directiontype: 
permalink: /api/types/BarCellRendererOrigin/
tags:
  - BarCellRenderer
  - Renderer
  - 바셀렌더러
  - 렌더러
  - origin
  - 시작위치
  - 오리진
---

#### Description

 Bar Cell Renderer에서 표시되는 막대상자의 시작 위치를 지정합니다.

#### Members

> **DEFAULT**       
> Type: "default"       
> 기본값, 미지정시 BarCellRendererOrigin.LEFT 와 같다.      

> **LEFT**      
> Type: "left"       
> 막대 상자가 셀의 왼쪽부터 사작한다. 

> **RIGHT**      
> Type: "right"       
> 막대 상자가 셀의 오른쪽부터 사작한다. 

> **TOP**  
> Type: "top"   
> 막대 상자가 셀의 위쪽부터 사작한다.

> **BOTTOM**  
> Type: "bottom"  
> 막대 상자가 셀의 아래쪽부터 사작한다.                

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

* [Bar Cell Renderer](http://demo.realgrid.com/Demo/BarCellRenderer)