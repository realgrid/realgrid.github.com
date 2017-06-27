---
layout: apipost
title: SignalBarCellRenderer
part: Types
typename: Cell Renderers
order: SignalBarCellRenderer
objectname: 
directiontype: 
permalink: /api/types/SignalBarCellRenderer/
tags:
    - 시그널셀랜더러렌더러
    - 세기 표시
    - 단계 표시
---


#### Description

 컬럼 스타일 figureState 값과 렌더러의 barCount 속성을 이용해 데이터 셀 값을 신호 세기로 표시한다. 정확한 값보다는 일정 단계의 상태를 표시하는데 사용돼야 한다. 

#### Properties

> **barCount**  
> Type: Number  
> Default: 4  
> 바의 개수를 지정한다.

> **showTooltip**  
> Type: boolean  
> Default: false  
> 셀 데이터 값을 툴팁으로 표시해준다.   

> **absoluteValue**  
> Type: Boolean   
> Default: false     
> 셀의 값을 절대값으로 사용할 것인지를 지정한다.  
> RealGridJS 1.1.24 부터 지원 한다. 

#### Examples   

<pre class="prettyprint">
var columns = [{
    "name": "Signal",
    "fieldName": "Signal",
    "type": "data",
    "width": "100",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Signal"
    },
    "renderer": {
	    "type": "signal",
	    "barCount": 10,
	    "absoluteValue": true
	},
    "styles" : {
        "figureState": "value"
    }
}]
gridView.setColumns(columns);
</pre>    

---

#### Demo Links

* [SignalCellRenderer](http://demo.realgrid.com/Renderer/SignalCellRenderer/){:target="_blank"}