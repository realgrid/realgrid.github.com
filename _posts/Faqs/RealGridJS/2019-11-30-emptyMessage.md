---
layout: faqpost
title:  조회된 것이 없는 경우 "조회된 내용이 없습니다." 메시지를 그리드에 표시할 수 있나요?
date:   2018-11-30 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/emptyMessage/
directiontype: 
tags:
    - emptyMessage
    - 조회된데이터가없음
    - styles
---

# Q.

조회된 내용이 없는 경우 "조회된 내용이 없습니다." 메시지를 그리드에 표시할 수 있나요?

---

# A.

네. 표시할 수 있습니다. 아래와 같이 스타일은 body.empty에서 설정하고 메시지는 displayOptions에서 설정하면 됩니다.   

<pre class="prettyprint">
gridView.setStyles({ 
	body: { 
		empty: { 
			background: "#20884488", 
			foreground: "#FFFF8888", 
			textAlignment: "center", 
			lineAlignment: "center", 
			fontSize: 20, 
			fontBold: true 
		} 
	} 
});

gridView.setDisplayOptions({
    showEmptyMessage: true,
    emptyMessage: "조회된 데이터가 없습니다."
})
</pre>
