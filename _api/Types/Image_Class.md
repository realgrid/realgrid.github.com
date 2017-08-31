---
layout: apipost
title: Image
part: Types
typename: Classes
order: Image
objectname: 
directiontype: 
jsonly: true
versions:
  - JS 1.1.20+
permalink: /api/types/Image/
tags:
  - 이미지
  - image
---

#### Description

 이미지 버튼에서 사용되는 이미지 설정 모델이다. 

#### Properties

> **name**  
> Type: String  
> Default: null  
> 이미지 버튼의 이름을 지정한다.    

> **up**  
> Type: String  
> Default: null  
> 마우스 up 상태의 이미지 경로를 지정한다.    

> **hover**  
> Type: String  
> Default: null  
> 마우스 hover 상태의 이미지 경로를 지정한다.    

> **down**  
> Type: String  
> Default: null  
> 마우스 down 상태의 이미지 경로를 지정한다.    

> **width**  
> Type: Number   
> Default: 45  
> 이미지 버튼의 크기를 지정한다.     

#### Examples 

<pre class="prettyprint">
    var columns = [{
        "name": "EmployeeID",
        "fieldName": "EmployeeID",
        "type": "data",
        "width": "150",
        "button" : "image",
        "imageButtons": {
            "width": 45,  // 없으면 기본값
            "margin": 15,
            "imageGap": 20,
            "images": [{
                "name": "팝업버튼",
                "up": "/img/demo/popup_normal.png",
                "hover": "/img/demo/popup_hover.png",
                "down": "/img/demo/popup_click.png"
            }, {
                "name": "조회버튼",
                "up": "/img/demo/search_normal.png",
                "hover": "/img/demo/search_hover.png",
                "down": "/img/demo/search_click.png"           
            }]
        },
        "styles": {
            "textAlignment": "center"
        },
        "header": {
            "text": "Employee ID"
        }
    }];

    gridView.setColumns(columns);

    gridView.onImageButtonClicked =  function (grid, itemIndex, column, buttonIndex, name) {
	    alert("onImageButtonClicked: " + itemIndex + ", " + column.name+", " + buttonIndex + ", " + name);
	};
</pre>

#### API Links

* [DataColumn](/api/types/DataColumn)  
* [GridBase.onImageButtonClicked](/api/GridBase/onImageButtonClicked)
