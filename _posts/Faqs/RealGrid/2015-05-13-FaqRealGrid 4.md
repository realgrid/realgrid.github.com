---
layout: faqpost
title:  특정 컬럼만 Editable하는 방법
date:   2015-05-13 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - 컬럼
    - editable
---

# Q.

특정 컬럼만 Editable하는 방법

---
***

# A.

컬럼의 editable을 설정하여 해당 컬럼의 편집상태를 변경할 수 있습니다.  
editable이 false면 집할 수 없습니다.

<pre class="prettyprint">
grid.setColumns([
	name : "col1",
	fieldName : "col1",
	editable : false
]);
</pre>
