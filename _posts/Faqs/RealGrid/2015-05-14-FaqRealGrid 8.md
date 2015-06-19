---
layout: faqpost
title:  컬럼 헤더에 스타일을 적용하고 싶습니다.
date:   2015-05-14 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - 컬럼
    - 헤더
    - 스타일
---

# Q.

컬럼 헤더에 스타일을 적용하고 싶습니다. 컬럼 별로 헤더의 스타일을 변경할 수 있나요?

---
***

# A.

컬럼의 header 속성에 styles를 지정하여 컬럼 별로 스타일을 적용할 수 있습니다.


<pre class="prettyprint">
grid.setColumns([{
	name : "col1",
	fieldName : "col1",
	header : {
		text : "컬럼1",
		styles : {
			background : "#33003300"
		}
	}
}, {
	name : "col2",
	fieldName : "col2",
	header : {
		text : "컬럼2",
		styles : {
			background : "#33003300"
		}
	}
}]);
</pre>
