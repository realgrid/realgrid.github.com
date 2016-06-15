---
layout: apipost
title: ColumnHeader
part: Types
typename: Classes
order: ColumnHeader
objectname: 
directiontype: 
permalink: /api/types/ColumnHeader/
tags: 
  - ColumnHeader
  - Header
  - 컬럼헤더
  - 헤더
---

#### Description

 그리드 헤더 영역에 표시되는 컬럼 헤더에 대한 설정 정보를 관리한다.

#### Properties

> **text**  
> Type: String   
> Default: null      
> 컬럼 헤더에 표시될 문자열을 지정한다. 이 값이 null 이면 컬럼에 연결된 데이터필드 이름을 표시한다. 데이터필드가 연결되지 않았다면 컬럼의 이름을 표시한다.  

> **subText**  
> Type: String   
> Default: null      
> 컬럼 헤더에 표시될 보조 문자열을 지정한다.  

> **subTextGap**  
> Type: Number   
> Default: 1      
> 헤더 문자열과 보조 문자열과의 간격을 지정한다.    

> **SubTextLocation**  
> Type: [SubTextLocation](/api/types/subTextLocation)   
> Default: SubTextLocation.LOWER       
> 헤더 문자열을 기준으로 보조 문자열의 위치를 지정한다.    

> **itemOffset**  
> Type: Number   
> Default: 2      
> 이미지나 체크박스와 셀 경계와의 공백을 지정한다.    

> **itemGap**  
> Type: Number   
> Default: 2     
> 헤더 문자열과 이미지나 체크박스와의 간격을 지정한다.      

> **CheckLocation**  
> Type: [ColumnHeaderItemLocation](/api/types/ColumnHeaderItemLocation)   
> Default: ColumnHeaderItemLocation.NONE       
> 헤더 문자열을 기준으로 체크박스의 위치를 지정한다.      

> **imageLocation**  
> Type: [ColumnHeaderItemLocation](/api/types/ColumnHeaderItemLocation)   
> Default: ColumnHeaderItemLocation.NONE       
> 헤더 문자열을 기준으로 이미지의 위치를 지정한다.      

> **imageUrl**  
> Type: String     
> Default: Null       
> 컬럼 헤더에 표시될 이미지의 경로를 지정한다.  

> **checked**  
> Type: Boolean     
> Default: False       
> 컬럼 헤더에 체크 박스 표시시 체크 여부를 지정한다.  

> **styles**  
> Type: Object     
> Default: Null       
> 컬럼 헤더에 적용할 스타일을 지정한다.  

> **subStyles**  
> Type: Object     
> Default: Null       
> 보조 문자에 적용할 스타일을 지정한다.  

> **showTooltip**  
> Type: Boolean     
> Default: true       
> 툴팁 표시 여부를 지정한다.    

> **tooltip**  
> Type: String     
> Default: null    
> 표시할 툴팁 메시지를 지정한다.  

#### Examples   

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
    "name": "OrderID",    
    "fieldName": "OrderID",
    "width": "120",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Order ID",
        "subText": "주문번호",
        "subTextLocation": "right",
        "subTextGap": 4,
        "subStyles": { "foreground": "#ffff0000", "fontSize": 10 }
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
}, {
    "name": "Phone",
    "fieldName": "Phone",
    "width": "80",
    "styles": {
        "textAlignment": "near"
    },
    "header": {
        "text": "Phone"
    }        
}];

gridView.setColumns(columns);
</pre>

---

#### API Links

* [SubTextLocation](/api/types/subTextLocation)   
* [ColumnHeaderItemLocation](/api/types/ColumnHeaderItemLocation) 

#### Demo Links 

* [Column HeaderCheckbox](http://demo.realgrid.net/Demo/HeaderCheckbox) 
* [Column HeaderImage](http://demo.realgrid.net/Demo/HeaderImage)
* [Column HeaderSubText](http://demo.realgrid.net/Demo/HeaderSubText)