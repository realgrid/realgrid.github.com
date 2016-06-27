---
layout: faqpost
title:  그리드 초기화후 초기화된 그리드가 트리인지 아닌지 판별 할 수 있나요.
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - treeview
    - gridview
    - 초기화
---

# Q.

초기화 완료시 TreeView 를 사용해서 초기화를 했는지, GridView를 통해서 초기화를 했는지 구별 할 수 있는 방법이 있나요?
  
---
***

# A.

그리드에서 지원하는 함수는 없습니다.   
javascript에서 지원하는 instanceof 연산자를 사용하여 확인 할 수 있습니다. 

<pre class="prettyprint">
//정의한 변수명이 gridView일 경우
if(gridView instanceof RealGridJS.GridView)
    alert("GridView");
else if(gridView instanceof RealGridJS.TreeView)
    alert("TreeView");
</pre>
