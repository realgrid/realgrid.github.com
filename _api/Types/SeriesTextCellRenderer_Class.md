---
layout: apipost
title: SeriesTextCellRenderer
part: Types
typename: Cell Renderers
order: SeriesTextCellRenderer
objectname: 
directiontype: 
permalink: /api/types/SeriesTextCellRenderer/
jsonly: true
versions:
    - JS 1.1.26+
tags: 
  - 시리즈텍스트편집랜더러
---

#### Description

 Series Text 셀 렌더러는 series 컬럼에서 사용되는 셀 렌더러이다.

#### Properties

> **valueSeparator**  
> Type: String  
> Default: ","  
> 표시되는 값들의 구분자를 지정한다.     

#### Examples

<pre class="prettyprint">
var columns = [{
    "name": "colSeries",
    "type": "series", //타입 설정
    "fieldNames": "2000,2002,2004,2006,2008,2010", //컬럼에 표시할 필드들
    "renderer": {
        type:"seriesText", 
        valueSeparator:"~"
    },
    "width": 120,
    "header": { "text": "Series" },
    "styles": {
        "background": "#0800ff00",
        "textAlignment": "near"
    }
}]
</pre>

---


