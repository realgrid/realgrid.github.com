---
layout: faqpost
title:  RowGroup Header에 그룹핑된 필드가 아닌 다른 필드의 값을 표시할 수 있나요?  
date:   2018-08-08 00:00:00
categories: faq
part: RealGridJS
permalink: /faq/RowGroupHeader/
directiontype: 
tags:
    - 행그룹
    - 행그룹핑
    - rowgrouping
    - row grouping
    - 그룹헤더
    - groupHeader 
---

# Q.

RowGroup Header에 그룹핑된 필드가 아닌 다른 필드의 값을 표시할 수 있나요?  

---

# A.

기본적으로 행 그룹핑시 표시되는 그룹 헤더에는 아래에 정해진 표현식만 사용할 수 있습니다.

headerStatement 속성
* groupField
* fieldHeader
* groupColumn
* columnHeader
* columnFooter
* groupValue
* rowCount
* sum, max, min, avg

사용예: ${groupValue}

문의 주신 내용은 headerStatement를 사용해서 처리할 수는 없고 headerCallback()을 사용하여 처리할 수 있습니다.

<pre class="prettyprint">
gridView.setRowGroup({
   headerStatement: null,
   headerCallback:function(groupModel, grid){
       var dataProvider = grid.getDataSource();
       return dataProvider.getValue(groupModel.firstItem.dataRow, "헤더에표시하고싶은필드명");
   }    
})
</pre>	

	
--------------------------------------------------------------------------------

**참조**
* [행 그룹핑 데모](http://demo.realgrid.com/RowGroup/RowGrouping/){:target="_blank"}
* [RowGroupOptions](/api/types/RowGroupOptions/){:target="_blank"}
