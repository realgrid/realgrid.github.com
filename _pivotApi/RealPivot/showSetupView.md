---
layout: apipost
title: showSetupView
part: Objects
objectname: showSetupView
directiontype: Function
permalink: /pivotApi/RealPivot/showSetupView/
tags:
  - 셋업 뷰
---


#### Description

 피벗 그리드의 설정 화면을 표시한다.  
 x와 y를 모두 지정하지 않으면 Container Element의 중앙에 배치된다.   

#### Syntax

> function showSetupView(x, y, parentElement)

#### Parameters

> **x**  
> Type: Integer   
> 설정화면이 표시될 X좌표, Pivot의 Container Element에서의 상대좌표계   

> **y**  
> Type: Integer   
> 설정화면이 표시될 X좌표, Pivot의 Container Element에서의 상대좌표계   

> **parentElement**    
> Type: HTMLDivElement    
> 설정화면이 attach될 Container Element    


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
pivot.showSetupView(10, 10);  // pivot Container의 왼쪽 상단에 표시
pivot.showSetupView(10, 10, document.body) // 
</pre>

---

