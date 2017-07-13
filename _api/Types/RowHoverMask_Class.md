---
layout: apipost
title: RowHoverMask
part: Types
typename: Classes
order: RowHoverMask
objectname: 
directiontype: 
jsonly: true
versions:
  - JS 1.1.24+
permalink: /api/types/RowHoverMask/
tags: 
  - RowHoverMask
  - 호버
  - 로우호버  
---

#### Description

 로우 호버와 관련된 설정 모델이다.

#### Properties

> **visible**  
> Type: Boolean   
> Default: true      
> 마우스 호버링시 행 포커스 표시여부를 지정한다.    

> **hoverMask**    
> Type: String | [RowFocusMask](/api/types/RowFocusMask/)    
> Default: "row"     
> 행 포커스의 표시 형태를 지정한다. "fill", "row", "data", "cell" 지정 가능    

> **styles**    
> Type: Object     
> Default: 
> 행포커스의 스타일을 지정한다. background만 사용가능하다.     


#### Examples   

<pre class="prettyprint">
gridView.setDisplayOptions({
    columnResizable: true,
    columnMovable: true,
    rowHeight: 40,
    rowHoverMask: {
    	visible: true,
    	hoverMask: "row",
    	styles: {
    		background:"#30c0c0c0"
    	}
    }
});
</pre>

---

#### API Links

* [setDisplayOptions](/api/GridBase/setDisplayOptions/)   
* [getDisplayOptions](/api/GridBase/getDisplayOptions/)   
