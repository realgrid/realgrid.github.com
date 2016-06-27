---
layout: apipost
title: ColumnHeaderItemLocation
part: Types
typename: Constants
order: ColumnHeaderItemLocation
objectname: 
directiontype: 
permalink: /api/types/ColumnHeaderItemLocation/
jsonly: true
tags: 
  - HeaderImageLocation
  - ImageLocation
  - HeaderCheckLocation
  - CheckLocation
  - 헤더이미지위치
  - 이미지위치
  - 헤더체크위치
  - 체크위치
---


#### Description

> 컬럼헤더에 이미지나 체크박스의 위치 유형을 정의합니다.   

#### Members

> **NONE**       
> Type: "none"      
> 이미지나 체크박스를 표시하지 않는다.   

> **LEFT**      
> Type: "left"       
> 이미지나 체크박스가 왼쪽에 위치한다.  

> **RIGHT**      
> Type: "right"       
> 이미지나 체크박스가 오른쪽에 위치한다.  

> **TOP**  
> Type: "top"   
> 이미지나 체크박스가 위에 위치한다.  

> **BOTTOM**  
> Type: "bottom"   
> 이미지나 체크박스가 아래에 위치한다.  

> **CENTER**  
> Type: "center"   
> 이미지나 체크박스가 가운데에 위치한다.  

### Example  

<pre class="prettyprint">
	var columns = [{
        "name": "Country",
        "fieldName": "Country",
        "width": "90",
        "tag": "grouping",
        "styles": {
            "textAlignment": "near"
        },
        "header": {
            "text": "Country",
            "imageLocation": "left",
            "imageUrl": "/img/common/realgridsmall.png"
   
        }    
    }, {
        "name": "OrderDate",
        "fieldName": "OrderDate",
        "width": "130",
        "styles": {
            "textAlignment": "center"
        },
        "header": {
            "text": "Order Date",
            "checkLocation": "left"
        }     
	}];
	
	gridView.setColumns(columns);
</pre>

#### See Also 

> [Column HeaderCheckbox](http://demo.realgrid.net/Demo/HeaderCheckbox) 참조  
> [Column HeaderImage](http://demo.realgrid.net/Demo/HeaderImage) 참조  

> [ColumnHeader](/api/types/ColumnHeader)   
