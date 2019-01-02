---
layout: faqpost
title:  조회된 그리드 행수에 따라 그리드의 크기를 동적으로 변경할 수 있나요?
date:   2018-12-28 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/DynamicGridHeight/
directiontype: 
tags:
    - GridSize
    - 크기
    - 그리드크기
    - 그리드높이
    - Height    
---

# Q.

조회된 그리드 행수에 따라 그리드의 크기를 동적으로 변경할 수 있나요?

---

# A.

그리드 행수에 따라 그리드가 그려지고 있는 Div의 사이즈를 변경하고 gridView.resetSize()를 호출하여 그리드를 다시 그려주면 됩니다.    
그러나 리얼그리드는 canvas 기반이기에 각 브라우져별로 그릴 수 있는 최대크기에 제한이 있고, canvas의 크기가 커지면 커질 수록 성능에 문제가 있을 수 있습니다.    
그렇기에 한 화면에 표시할 수 있을 정도의 데이터인 경우에만 적용하기를 추천 합니다.   

<pre class="prettyprint">
var rowCount = gridView.getItemCount();                  //화면의 행 수   

var panelHeight = gridView.getPanel().height;            //panel의 높이
var headerHeight = gridView.getHeader().height;          //header의 높이 
var rowHeight = gridView.getDisplayOptions().rowHeight;  //행의 높이
var footerHeight = gridView.getFooter().height;          //footer의 높이

var totalHeight = headerHeight + footerHeight + panelHeight + (rowHeight * rowCount) + (gridView._gv._hscrollBar ? gridView._gv._hscrollBar.height() + 2 : 2);  

$("#realgrid").height(totalHeight);

gridView.resetSize();
</pre>
