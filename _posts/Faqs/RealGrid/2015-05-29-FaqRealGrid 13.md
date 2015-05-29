---
layout: faqpost
title:  그리드에서 자동으로 컬럼 크기 조절 가능한지요?
date:   2015-05-29 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

제목 셀과 셀 사이에 더블클릭하면 넓이가 조절되는 것과 같이  
그리드에서 자동으로 셀 크기를 조정 하는 방법을 알고 싶습니다.

---
***

# A.

그리드내에서 자동으로 셀 크기를 조절하는 옵션은 없습니다.  
셀 크기조정이 의외로 많은 시간을 소모하는 경우가 많기 때문에 자동으로 크기를 조절해 주지는 않습니다.  
대신 셀 크기를 조절할수 있는 api를 제공하고 있습니다.  
[grid.fitColumnWidth()](/api/GridBase/fitColumnWidth) api를 사용하면 셀 크기를 Data의 크기에 맞춰서 변경할수 있습니다.  

<pre class="prettyprint">
grid.fitColumnWidth(column, maxWidth, minWidth, visibleOnly)
</pre>

column
: 셀 크기를 변경하려는 컬럼을 입력합니다. 전체를 하는 경우 null을 입력합니다.  

maxWidth
: 최대 넓이를 지정합니다 0을 입력하면 data의 길이에 따라 변경됩니다.  

minWidth
: 최소 넓이를 지정합니다. 0을 입력하면 data의 길이에 따라 변경됩니다.  

visibleOnly
: 현재 화면에 보이는 행만을 대상으로 넓이를 변경합니다.  