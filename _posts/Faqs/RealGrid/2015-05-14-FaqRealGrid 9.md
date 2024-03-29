---
layout: faqpost
title:  button의 이미지나 문자를 변경할 수 있나요?
date:   2015-05-14 00:00:00
categories: faq
part: RealGrid
directiontype: 
tags:
    - 버튼
    - button
    - 버튼 이미지
    - button image
---

# Q.

button의 이미지나 문자를 변경할 수 있나요?

현재는 ...문자로 버튼이 생성되는데 버튼 안에 문자나 버튼의 이미지를 변경하고 싶습니다.

---
***

# A.

현재 button의 속성를 변경하는 기능은 지원하고 있지 않습니다.
  
JS 버전의 경우 assets폴더에 button 이미지(*.png)파일을 변경하여 사용할 수 있습니다.

또는 image Renderer와 onDataCellClicked이벤트를 이용해서 셀에 이미지를 표현하여 구현할 수 있습니다.

<pre class="prettyprint">
grid.setColumns([
....
    {fieldName:"c1",name:"c1", sortable:false, width:120, renderer:{type:"image"}},
....
]);
// "c1" field의 data는 이미지 url입니다.
grid.onDataCellClicked = function (grid, index) {
    console.log(grid.getValue(index.itemIndex, index.fieldName));
    console.log(index);
};
// cell을 클릭했을때 발생하는 이벤트입니다.
</pre>

image Renderer를 이용하는 방법은 [http://demo.realgrid.com/Renderer/ImageCellRenderer/](http://demo.realgrid.com/Renderer/ImageCellRenderer/) 에 예제가 있습니다.
  
또는 icon과 link Renderer를 이용하는 방법은 [http://demo.realgrid.com/Renderer/LinkCellRenderer/](http://demo.realgrid.com/Renderer/LinkCellRenderer/) 을 참조하시기 바랍니다.

