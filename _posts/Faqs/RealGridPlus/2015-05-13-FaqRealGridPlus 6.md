---
layout: faqpost
title:  Chrome div display설정시 onload되는 문제
date:   2015-05-13 00:00:00
categories: faq
part: RealGridPlus
directiontype:
tags:
    - chrome
    - 크롬
    - display
    - onload 
---

# Q.

Chrome div display설정시 onload되는 문제

---
***

# A.

html element의 style.display로 설정시 dom이 재구성하게 되므로 grid는 다시 load하게 됩니다.  
저희 제품의 문제는 아니고 chrome에서 플래시 파일을 실행하였을때 나타나는 현상입니다.  

div 스타일에 위치값을 주어서 해당 tab버튼을 누를때마다 grid view를 담당하는 div 를 화면에 위치 이동하는 식으로 만드시면 다시 reload하지 않게 됩니다.  


<pre class="prettyprint">

-Html-

&lt;div class="tab_box"  style="margin-top: 20px;"&gt;
	&lt;ul  id="tabType1"&gt;
		&lt;li class="on"&gt;
			&lt;a href="#" id="atag1" class ="main_button" &gt;tab1&lt;/a&gt;
		&lt;/li&gt;
		&lt;li &gt;
			&lt;a href="#" id="atag2" class ="main_button" &gt;tab2&lt;/a&gt;
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;

&lt;div style="width:100%; position:relative;"&gt;
	&lt;div id="divGridTab1" style="position:absolute;left:0;top:0px;width: 100%;height: 0px;"&gt;
		&lt;div class="grid" id ="odDetail"  style="width:100%" &gt;&lt;/div&gt;
	&lt;/div&gt;
	&lt;!-- 좌표로 그리드화면 이동 --&gt;
&lt;div id="divGridTab2" style="position:absolute;left:-10000px;top:0px;" &gt;
		&lt;div class="grid" id = "pkDetail"  style="width:100%"&gt;&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div id="popGridParent1" class="grid" style="width:100%"&gt;&lt;/div&gt;
&lt;div id="popGridParent2" class="grid" style="width:100%"&gt;&lt;/div&gt;

-javascript-

$(document).ready(function() {
	$('#tabType1').find('a').on('click', function() {
		if ($(this).parent().hasClass("on"))
			return;
		$('#tabType1').find('.on').removeClass('on');
		$(this).parent().addClass('on');
		var ancId = $(this).attr("id");
		fn_searchTabData($(this).parent().index());
		fn_setGridVisible(ancId);
	});
});

function fn_setGridVisible(anchorId) {

	var oldGrid = currGrid;
	if (currTab != anchorId) {
		currGrid.css("z-index", 0);
	}
	if (anchorId == "atag1") {
		currGrid = $("#divGridTab1");
		currGrid.css("z-index", 10000);
		currGrid.width($("#popGridParent1").width());
		currGrid.height($("#popGridParent1").height());
		currGrid.offset($("#popGridParent1").offset());
	} else if (anchorId == "atag2") {
		currGrid = $("#divGridTab2");
		currGrid.css("z-index", 10000);
		currGrid.width($("#popGridParent2").width());
		currGrid.height($("#popGridParent2").height());
		currGrid.offset($("#popGridParent2").offset());
	}

	if (currTab != anchorId) {
		oldGrid.offset({
			left : -10000,
			top : 0
		});
		oldGrid.css("z-index", "");
	}
	currGrid.css("z-index", "");
	currTab = anchorId;
}
</pre>
