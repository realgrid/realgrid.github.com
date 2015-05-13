---
layout: post
title:  그리드에서 마우스 휠(wheel)이 동작 하지 않습니다.
date:   2015-05-13 00:00:00
categories: faq
part: RealGridPlus
directiontype: 
---

# Q.

그리드에서 마우스 휠(wheel)이 동작 하지 않습니다.

---
***

# A.

Internet Explorer등의 브라우저에서 Grid의 Top이 0이 아닐때 그 값만큼 아래쪽에서 Flash자체 Mouse Wheel이벤트가 동작되지 않는 이슈가 있습니다.이 때 외부의 Wheel이벤트를 Flash로 전달해서 Wheel Event 이슈를 해결할 수 있습니다.

<pre class="prettyprint">
RealGrids.setExternalWheelEvents(grid, active, propagation);
</pre>

grid 
:	RealGrids.GridView나 RealGrids.TreeView를 정의한 변수.  

active 
:	True이면 외부 휠 이벤트 활성화, false이면 비활성화. (기본 true)  

propagation 
:	False이면 마우스가 해당 Grid에 위치할 때 휠 이벤트를 공유하지 않음. (기본 true)  