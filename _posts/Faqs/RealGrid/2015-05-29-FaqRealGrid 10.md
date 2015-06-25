---
layout: faqpost
title:  div에 스타일 사이즈를 100%로 설정하였는데 사이즈가 정상적으로 나오지 않습니다.
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - 스타일
---

# Q.

스타일로 적용한데로 화면에 꽉차게 나오지 않는데 왜 그런건가요?

---
***

# A.

%는 상대적인 값인데.. DIV의 Height값에 %를 적용하면 기준으로 삼을 상위 태그의 Height값이 없기 때문에 적용이 되지 않는것입니다.
최상위 태그인 &lt;html&gt;에 기준으로 삼을 height 값을 설정함으로써 해결할 수 있습니다.

<pre class="prettyprint">
&lt;style type="text/css"&gt;
html, body {
	width: 100%; height: 100%;
}
&lt;/style&gt;

&lt;body &gt;
	&lt;div style="height: 100%; width: 100%"&gt;
		&lt;div id="grdMain"&gt;&lt;/div&gt;
	&lt;/div&gt;
&lt;/body&gt;
</pre>;
