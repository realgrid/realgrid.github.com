---
layout: faqpost
title:  더블클릭시 자동으로 발생하는 onDataCellClicked 이벤트를 발생 안하게 할 수 없나요?  
date:   2018-07-20 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/MultiLanguage/
directiontype: 
tags:
    - 클릭
    - 더블클릭
    - click
    - dblclick
    - doubleclick  
---

# Q.

더블클릭시 자동으로 발생하는 onDataCellClicked 이벤트를 발생 안하게 할 수 없나요?  

---

# A.

리얼그리드의 클릭, 더블클릭 이벤트는 브라우져에서 반환되는 이벤트를 그대로 받아서 사용하기 때문에 더블클릭일때 클릭이벤트를 미발생시키는 것은 불가능합니다.  

원하시는 내용은 약간의 편법을 사용해서 처리가능 합니다.  

<pre class="prettyprint">
var clickState = null;  //전역변수로 설정

gridView.onDataCellClicked = function (grid, index) {
    clearTimeout(clickState);

    clickState = setTimeout(function () {
        console.log("클릭");
    }, 200);
};

gridView.onDataCellDblClicked = function (grid, index) {
    clearTimeout(clickState);

    console.log("더블 클릭");
};

function ClearClickState() {
    clearTimeout(clickState);
    clickState = null;
}
</pre>	

	
--------------------------------------------------------------------------------

**참조**
* [onDataCellClicked](/api/types/onDataCellClicked/){:target="_blank"}
* [onDataCellDblClicked](/api/types/onDataCellDblClicked/){:target="_blank"}
