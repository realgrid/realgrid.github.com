---
layout: apipost
title: subTextLocation
part: Types
typename: Constants
order: subTextLocation
objectname: 
directiontype: 
jsonly: true
permalink: /api/types/subTextLocation/
tags:
    - 서브텍스트위치
---


#### Description

 컬럼헤더에 서브텍스트의 위치 유형을 정의합니다. 값이 undefined 이면 Header에서 지정한 값을 사용합니다.  

#### Members

> **DEFAULT**       
> Type: "default"      
>   

> **NONE**      
> Type: "none"       
> 서브텍스트를 표시하지 않는다.    

> **LEFT**      
> Type: "left"       
> 왼쪽에 위치한다.     

> **RIGHT**  
> Type: "right"   
> 오른쪽에 위치한다.  

> **UPPER**  
> Type: "upper"   
> 위에 위치한다.  

> **LOWER**  
> Type: "lower"   
> 아래에 위치한다.  

#### Examples

<pre class="prettyprint">
var columns = [{
    "name": "OrderDate",
    "fieldName": "OrderDate",
    "width": "130",
    "styles": {
        "textAlignment": "center"
    },
    "header": {
        "text": "Country",
        "subText": "나라",
        "subTextGap": 4,
        "subTextLocation": "left",
        "subStyles": {"foreground": "#ffff0000"}
    }
}
.....
</pre>

---

#### Demo Links

* [HeaderSubText](http://demo.realgrid.com/HeaderAndFooter/HeaderSubText/) 