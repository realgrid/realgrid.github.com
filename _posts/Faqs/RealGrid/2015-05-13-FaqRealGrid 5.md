---
layout: faqpost
title:  그리드뷰와 트리뷰를 같이 사용이 가능한가요?
date:   2015-05-13 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - gridview
    - treeview
    - 그리드뷰
    - 트리뷰
---

# Q.

그리드뷰와 트리뷰를 같이 사용이 가능한가요?

---
***

# A.

구현하려는 그리드 갯수에 맞게 전역변수를 선언한 후 setupGrid나 setupTree를 여러번 호출한뒤 RealGrids.onload에서 id로 구분하여 그리드를 setup하면 됩니다.

<pre class="prettyprint">
var gridMain, gridProvider;
var treeMain, treeProvider;
setupGrid(“gridView”, “100%”, “100%”);
setupTree(“treeView”, “100%”, “100%”);
 
RealGrids.onload = function(id){
           if(id == “gridView”){
                     gridMain = new RealGrids.GridView(id);
                     gridProvider = new RealGrids.LocalDataProvider();
                     gridMain.setDataProvider(gridProvider);
 
                     Setup source…
           }else if(id == “treeView”){
                     treeMain = new RealGrids.TreeView(id);
                     treeProvider = new RealGrids.TreeDataProvider();
                     treeMain.setDataProvider(treeProvider);
 
                  	Setup source…
       	}
}
 
&lt;div id=”gridView”&gt;&lt;/div&gt;
&lt;div id=”treeView”&gt;&lt;/div&gt;
</pre>
