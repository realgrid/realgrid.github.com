---
layout: apipost
title: IconCellRenderer
part: Types
typename: Cell Renderers
order: IconCellRenderer
objectname: 
directiontype: 
permalink: /api/types/IconCellRenderer/
tags:
  - 아이콘셀렌더러
  - 랜더러
---


#### Description

 컬럼의 ImageList와 iconIndex 스타일 등으로 지정하는 이미지 아이콘과 텍스트를 같이 표시한다.
 1.1.28부터 imageList를 사용하는 것이 아닌 url을 직접 지정하여 표시할 수도 있다.    

#### Properties

> **showTooltip**  
> Type: Boolean   
> Default: false     
> 셀 데이터 값을 툴팁으로 표시해준다.   

> **textVisible**  
> Type: Boolean   
> Default: true     
> 셀 데이터 값 표시 여부를 지정한다.    

#### Examples 

<pre class="prettyprint">
//styles에서 사용방법
gridView.setColumns([{
	fieldName: "fieldName",
	name: "colName",
    renderer: {
        type: "icon",
    },
	styles: {
		iconIndex: "value[url필드명]"   //url필드에 각 행마다 필요한 아이콘 이미지 경로가 들어있다. 
	}
}]);     

//dynamicStyles에서 사용방법
gridView.setColumns([{
	fieldName: "fieldName",
	name: "colName",
    renderer: {
        type: "icon",
    },
	dynamicStyles: function(grid, index, value) {
		if (value) {
			return {
				iconIndex: "/img/demo/smallflag/ar.png",
				background: "#ff00ff"
			};
		}
	}
}]);   

//같이 사용
gridView.setColumns([{
    "name": "OrderID",
    "fieldName": "OrderID",
    "width": "80",
    "renderer": {
        "type": "icon",
        "textVisible": false
    },
    "styles": {
        "iconLocation": "center",
        "iconIndex": "value[url필드명1]",
        "textAlignment": "center"
    },
    "dynamicStyles": function(grid, index, value) {
        if ((index.dataRow % 2) == 0) {
            return {
                "iconIndex": "value[url필드명2]",
                "iconLocation": "near",
                "background": "#ff00ffff"
            };
        }
    },   
	"header": {
	    "text": "ID"
	}
}]);
</pre>

---

#### Demo Links

* [IconCellRenderer](http://demo.realgrid.com/Renderer/IconCellRenderer/){:target="_blank"}