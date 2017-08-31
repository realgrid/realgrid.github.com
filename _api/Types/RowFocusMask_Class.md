---
layout: apipost
title: RowFocusMask
part: Types
typename: Classes
order: RowFocusMask
objectname: 
directiontype: 
jsonly: true
versions:
  - JS 1.1.25+
permalink: /api/types/RowFocusMask/
tags: 
  - RowFocusMask
  - 포커스
---

#### Description

 선택 행과 관련된 설정 모델이다.

#### Properties

> **visible**  
> Type: Boolean   
> Default: true      
> 행 및 셀 선택시 행 포커스 표시여부를 지정한다.    

> **FocusMask**    
> Type: String | [RowFocusMask](/api/types/RowFocusMaskType/)    
> Default: "row"     
> 행 포커스의 표시 형태를 지정한다. "fill", "row", "data", "cell" 지정 가능    

> **styles**    
> Type: Object     
> Default: 
> 행포커스의 스타일을 지정한다. background와 border만 사용가능하다.     


#### Examples   

<pre class="prettyprint">
gridView.setDisplayOptions({
    columnResizable: true,
    columnMovable: true,
    rowHeight: 40,
    rowFocusOption: {
      visible:true, 
      rowFocusMask: "row", 
      styles: {
        background: "#40888888", 
        border: "#40FF8888,2"
      }
    }
});
</pre>

---

#### API Links

* [setDisplayOptions](/api/GridBase/setDisplayOptions/)   
* [getDisplayOptions](/api/GridBase/getDisplayOptions/)   
