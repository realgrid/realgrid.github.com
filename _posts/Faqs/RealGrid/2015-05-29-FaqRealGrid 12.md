---
layout: faqpost
title:  그리드 cell에 풍선말(툴팁) 기능이 있나요? 
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

그리드 각 cell 영역마다 풍선말(툴팁)을 보여주는 기능이 있는지 알고 싶습니다.

---
***

# A.

RealGridPlus 버전의 경우 column의 renderer에 showTooltip을 true로 지정하면 툴팁기능을 사용할 수 있습니다.

<pre class="prettyprint">
grid.setColumns([{
    fieldName : “col”,
    renderer : {
        showTooltip : true
    }
}];
</pre>
