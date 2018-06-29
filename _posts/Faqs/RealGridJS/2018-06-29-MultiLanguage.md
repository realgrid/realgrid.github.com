---
layout: faqpost
title:  RealGridJS 다국어 환경인 경우 설정은 어떻게 하나요?  
date:   2018-06-29 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/MultiLanguage/
directiontype: 
tags:
    - 다국어  
---

# Q.

RealGridJS 다국어 환경인 경우 설정은 어떻게 하나요?  

---

# A.

아래의 한글로 설정된 부분만 각 지역의 언어로 교체하시면 됩니다.

<pre class="prettyprint">
gridView.setGroupingOptions({ 
	prompt: "컬럼 헤더를 이 곳으로 끌어다 놓으면 그 컬럼으로 그룹핑합니다." 
});

gridView.setEditorOptions({
	yearDisplayFormat: "{Y}년",
	monthDisplayFormat:"{M}월",
	weekDays: ["일", "월", "화", "수", "목", "금", "토"]
});
</pre>	

	
--------------------------------------------------------------------------------

**참조**
* [DisplayOptions](http://help.realgrid.com/api/types/DisplayOptions/){:target="_blank"}
* [EditorOptions](http://help.realgrid.com/api/types/EditorOptions/){:target="_blank"}
