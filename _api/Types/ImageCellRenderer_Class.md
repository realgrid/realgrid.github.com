---
layout: apipost
title: ImageCellRenderer
part: Types
typename: Cell Renderers
order: ImageCellRenderer
objectname: 
directiontype: 
permalink: /api/types/ImageCellRenderer/
tags:
  - 이미지셀랜더러
  - 렌더러
---


#### Description

 Image 셀 렌더러는 데이터 셀의 값을 이미지 url로 해석해서 그 이미지를 내려받고 표시한다. 컬럼 스타일 contentFit 값으로 이미지의 위치와 크기가 결정되고, 렌더러의 smoothing 속성으로 이미지 크기 변경 후 처리 방법을 지정한다.

#### Properties

> **smoothing**  
> Type: boolean  
> Default: false  
> true이면 실제 이미지보다 크게 그릴 때 보정하여 그린다. 느리지만 보다 품질 좋은 렌더링을 하게된다.  

> **showTooltip**  
> Type: boolean  
> Default: false  
> 셀 데이터 값을 툴팁으로 표시해준다.   

#### Examples 

<pre class="prettyprint">
var columns = [{
    name: "col1",
    fieldName: "field1",
    width: 200,
    header: {
        text: "imageCellRenderer"
    },
    renderer: {
        type: "image",
        smoothing: "true"
    },
    styles: {
        contentFit: "none"
    }
}];

gridView.setColumns(columns);
</pre>

---

#### Demo Links

* [ImageCellRenderer](http://demo.realgrid.com/Renderer/ImageCellRenderer/){:target="_blank"}