---
layout: apipost
title: onImageButtonClicked
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onImageButtonClicked/
jsonly: true
versions:
  - JS 1.1.20+
tags:
  - event
  - buttonClick
  - imageButton
---


#### Description

 사용자가 데이터셀 내부의 action 버튼을 클릭했을 때 호출된다.  

#### Syntax

> function onImageButtonClicked (grid, itemIndex, column, buttonIndex, name)  

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: Number  
> 데이터셀이 포함된 아이템의 인덱스.  

> **column**  
> Type: Object  
> 데이터셀에 연결된 컬럼. [DataColumn](/api/types/DataColumn/)과 같은 구조의 object.  

> **buttonIndex**  
> Type: Number  
> 이미지 버튼의 순서.  

> **name**  
> Type: String  
> 이미지 버튼의 이름  

#### Return

> None.  

#### Examples 

<pre class="prettyprint">
gridView.setColumns([
    {
    	"fieldName": "EmployeeID",
		"button" : "image",
		"imageButtons": {
		    "width": 16,  // 없으면 기본값
		    "height": 13,  // 없으면 기본값
		    "images": [{
		        "name": "button1",
		        "up": "assets/calendar_up.png",
		        "hover": "assets/calendar_hover.png",
		        "down": "assets/calendar_down.png"
		    }, {
		        "name": "button2",
		        "up": "assets/ellipsis_up.png",
		        "hover": "assets/ellipsis_hover.png",
		        "down": "assets/ellipsis_down.png"
		    }]
		},

    },
    {fieldName:"fldname2", name:"colName2", button:"action"},
    ....
]);

gridView.onImageButtonClicked =  function (grid, itemIndex, column, buttonIndex, name) {
    alert("onImageButtonClicked: " + itemIndex + ", " + column.name+", " + buttonIndex + ", " + name);
};
</pre>

