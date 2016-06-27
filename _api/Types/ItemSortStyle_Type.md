---
layout: apipost
title: ItemSortStyle
part: Types
typename: Constants
order: ItemSortStyle
objectname: 
directiontype: 
permalink: /api/types/ItemSortStyle/
tags:
  - 소트스타일 아이템정렬
  - 드롭다운DropDown
---

#### Description

 DropDown내 Item의 정렬 순서를 정의한다.

#### Members

> **NONE**  
> Values: "none"  
> 정렬하지 않는다.  

> **ASCENDING**  
> Value: "ascending"  
> 순방향 정렬  

> **DESCENDING**  
> Value: "descending"  
> 역방향 정렬

#### Examples

<pre class="prettyprint">
var columns = [{
    name: "col1",
    fieldName: "field1",
    width: "150",
    sortable: false,
    editor: {
        type: "dropDown",
        dropDownCount: 4,
        domainOnly: true,
        itemSortStyle:"none", // 드롭다운 리스트 정렬 방법
        values: ["a", "b", "c", "d"],
        labels: ["A", "B", "C", "D"]
    },
    header: {
        text: "DropDown"
    }
}];

gridView.setColumns(columns);
</pre>