---
layout: faqpost
title:  특정셀만 Editable하는 방법
date:   2015-05-13 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - editable
    - cell
    - 셀
---

# Q.

특정셀만 Editable하는 방법

---
***

# A.

셀렉트 박스가 이동하기 직전 발생하는 grdMain.onCurrentChanging  이벤트함수를 사용하여 해당 셀 값을 비교해 전체 편집의 속성을 Editable 로 바꾸는 방법입니다.

<pre class="prettyprint">
grdMain.onCurrentChanging = function(grid, oldIndex, newIndex){
    var value = grid.getValue(newIndex.itemIndex, newIndex.fieldName);

    var editable = value == 111; 
    if(editable)
       grid.setEditOptions({editable : true});
    else
       grid.setEditOptions({editable : false});
}
</pre>

현재 current된 셀의 값이 "111"인 경우 전체 편집의 속성을 Editable로 바꾸고 아닌 경우는 편집불가로 변경합니다.
