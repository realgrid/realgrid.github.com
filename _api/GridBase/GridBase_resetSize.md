---
layout: apipost
title: resetSize
part: Objects
objectname: GridBase
directiontype: Function
jsonly: true
permalink: /api/GridBase/resetSize/
tags:
  - resetSize
  - 크기변경
  - gridSize
  - view
  - size
---


#### Description	

 그리드가 올라갈 element의 크기가 결정되기 전에 그리드가 생성되거나 element의 style.display속성이 none이어서 그리드의 크기가 0인경우   
 그리드 상위 DIV 영역의 크기를 변경했는데 그리드의 크기가 변경되지 않을때 사용한다.  


#### Syntax

> function resetSize(callback)

#### Parameters

> **callback**  
> Type: function()    
> 그리드 크기가 재설정된(그리기가 완료된 후) 이후 실행할 함수를 지정한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
gridView.resetSize(function(){"다시 그리기가 완료되었습니다."};    
</pre>

