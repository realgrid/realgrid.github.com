---
layout: apipost
title: RowFocusMask
part: Types
typename: Constants
order: RowFocusMask
objectname: 
directiontype: 
permalink: /api/types/RowFocusMask/
jsOnly: true
versions:
  - JS 1.1.22+
tags:
  - 행표시설정
---


#### Description

선택된 행의 표시 형태에 대한 모델이다.  

#### Members

> **ROW**  
> Value: "row"  
> indicator, checkBar, stateBar 영역을 포함하여 선택된 행을 표시한다.(empty 영역 제외)

> **DATA**  
> Value: "data"  
> indicator, checkBar, stateBar 영역을 제외하고 선택된 행을 표시한다.(empty 영역 제외)

> **FILL**  
> Value: "fill"  
> 모든 영역을 포함하여 선택된 행을 표시한다.


#### Examples   

<pre class="prettyprint">
gridView.setDisplayOptions({
  rowFocusVisible:true, 
  rowFocusBackground:"#340000ff",
  rowFocusMask: "row"
})
</pre>

---


#### API Links

* [DisplayOptions](/api/types/DisplayOptions/)


