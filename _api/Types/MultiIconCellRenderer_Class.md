---
layout: apipost
title: MultiIconCellRenderer
part: Types
typename: Cell Renderers
order: MultiIconCellRenderer
objectname: 
directiontype: 
permalink: /api/types/MultiIconCellRenderer/
jsonly: true
versions:
  - JS 1.1.28+
tags:
  - 아이콘셀렌더러
  - 랜더러
  - 멀티아이콘셀렌더러
---


#### Description

 여러개 이미지 아이콘과 텍스트를 같이 표시한다.   

#### Properties

> **icons**   
> Type: Array of String    
> Default: null     
> 표시할 아이콘들의 경로를 지정한다.     

> **renderCallback**  
> Type: function (grid, index, value) { return [] }   
> Default: null     
> 표시할 아이콘들을 개발자 코드에 의해 결정하려 할때 사용한다.  
> `icons`속성이 존재하는 경우 renderCallback은 실행되지 않는다.    

> **showTooltip**  
> Type: Boolean   
> Default: false     
> 셀 데이터 값을 툴팁으로 표시해준다.   

> **textVisible**  
> Type: Boolean   
> Default: true     
> 셀 데이터 값 표시 여부를 지정한다.    

> **minWidth**  
> Type: Number   
> Default: 0      
> 아이콘 하나의 최소 너비를 지정한다.         

#### Examples 

<pre class="prettyprint">
//정적으로 표시하는 경우
gridView.setColumns([{
    "name": "CompanyName",
    "fieldName": "CompanyName",
    "width": "200",
    "renderer": {
        "type": "multiIcon",
        "showTooltip": true,
        "textVisible": true,
        "minWidth": 30,
        "icons": ['/img/demo/smallflag/ar.png', '/img/demo/smallflag/fr.png']
    },
    "styles": {
        "textAlignment": "center", //near, center, far
        "iconLocation": "top",     //top, bottom, center, left, right
        "iconAlignment": "near",   //near, center, far  상중하
        "iconOffset": 5            //셀라인과의 여백
    },
    "header": {
        "text": "Company Name"
    }
}]);   

//동적으로 표시하는 경우
gridView.setColumns([{
	"name": "EmployeeID",
	"fieldName": "EmployeeID",
	"width": "100",
	"renderer": {
	    "type": "multiIcon",
	    "showTooltip": true,
	    "textVisible": true,
	    "minWidth": 0,
	    "renderCallback": function (grid, index, value) {		      
	        var ret = [];
	        if (value == "1") {
	            ret.push('/img/demo/smallflag/ar.png');
	        } else if (value == "2") {
	            ret.push('/img/demo/smallflag/ar.png');
	            ret.push('/img/demo/smallflag/fr.png');
	        } else if (value == "3") {
	            ret.push('/img/demo/smallflag/ar.png');
	            ret.push('/img/demo/smallflag/fr.png');
	            ret.push('/img/demo/smallflag/de.png');
	        }

	        return ret;
	    },
	},
	"styles": {
	    "textAlignment": "near",
	    "iconLocation": "left",
	    "iconAlignment": "center",
	},
	"header": {
	    "text": "Employee ID"
	}
}]); 
</pre>

---

#### Demo Links

* [IconCellRenderer](http://demo.realgrid.com/Renderer/IconCellRenderer/){:target="_blank"}