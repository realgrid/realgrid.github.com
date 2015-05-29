---
layout: faqpost
title:  footer에 연산값을 넣는 방법이 있나요?
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

A컬럼의 값과 B컬럼 값의 합을 footer에 표시하고 싶습니다.
어떻게 해야 하나요?
  
---
***

# A.

Footer에 들어갈수 있는 수식은 [ExpressionConcept](http://demo.realgrid.net/Demo/ExpressionConcept) 을 참조하시기 바랍니다.
다른 컬럼에 있는 정보를 가져와서 Footer의 수식으로 사용할수는 없습니다.
특정컬럼의 Sum, Count, Avg등을 가져오는 API는 존재합니다.

<pre class="prettyprint">
var fieldAsum = grid.getSummary("fieldA","sum");
</pre>

특정 field의 footer에 계산된 값을 표시하려면

<pre class="prettyprint">
var calctext = Number(grid.getSummary("fieldA","sum") + grid.getSummary("fieldB","sum")).toLocaleString(); 

grid.setColumnProperty("fieldC","footer",{text:calctext});
</pre>

위의 내용을 함수로 만들어서 값이 변경되거나 또는 data의 건수가 변경되는경우 발생되는 event에서 호출될수 있도록 하시면 될것같습니다.