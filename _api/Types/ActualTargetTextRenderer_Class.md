---
layout: apipost
title: ActualTargetTextRenderer
part: Types
typename: Cell Renderers
order: ActualTargetTextRenderer
objectname: 
directiontype: 
permalink: /api/types/ActualTargetTextRenderer/
tags:
    - 렌더러랜더러
---

#### Description

각각 두 개의 데이터 필드에 저장된 목표값(혹은 기대값)과 실행값을 비교하여 표시하는 시리즈 렌더러이다. 
ActualTarget text renderer 는 "실행값 / 목표값" 형식으로 표시한다.

#### Properties

> **separator**  
> Type: String  
> Default: /  
> 실행값과 목표값의 구분자를 지정한다.  

> **actualForeground**  
> Type: String  
> Default: null  
> 실행값의 색을 지정한다.  

> **actualFont**  
> Type: String  
> Default: null  
> 실행값의 글꼴을 지정한다.  

> **targetForeground**  
> Type: String  
> Default: null  
> 목표값의 색을 지정한다.  

> **targetFont**  
> Type: String  
> Default: null  
> 목표값의 글꼴을 지정한다.  


#### Examples   

<pre class="prettyprint">
	var fields = [{
	    fieldName: "target",
	    dataType: "number"
	}, {
	    fieldName: "actual",
	    dataType: "number"
	}];
	dataProvider.setFields(fields);
	
	var columns = [{
	    name: "colText",
        type: "series",
        fieldNames: "target,actual",
        fillHeight: 100,
        renderer: {
            type: "actualTargetText",
            actualFont: "Arial,30,bold",
            actualForeground: "#ff888888",
            dynamicStyles: [{
                criteria: "value[1] / value[0] >= 1.0",
                styles: "actualForeground=#ffff0000"
            }]
        },
        header: { text: "Text" }
	}]
	gridView.setColumns(columns);
</pre>

---

#### Demo Links

* [Actual / Target Renderer](http://demo.realgrid.com/Demo/ActualTargetRenderer) 참조  