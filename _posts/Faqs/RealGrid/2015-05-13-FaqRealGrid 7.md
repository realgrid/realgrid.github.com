---
layout: faqpost
title:  컬럼 별로 스타일을 적용하고 싶습니다.
date:   2015-05-13 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - 컬럼
    - 스타일
    - style
    - column
---

# Q.

컬럼 별로 스타일을 적용하고 싶습니다.

---
***

# A.

컬럼의 styles를 지정하여 컬럼 별로 스타일을 적용할 수 있습니다.


<pre class="prettyprint">
grid.setColumns([{
	fieldName : “col1”,
	styles : {
		background : “#33003300”
	}
}, {
	fieldName : “col2”,
	styles : {
		background : “#33000033”
	}
}]);
</pre>
