---
layout: apipost
title: EdgeMark
part: Types
typename: Constants
order: EdgeMark
objectname: 
directiontype: 
versions:
  - JS 1.1.23+
permalink: /api/types/EdgeMark/
---

#### Description

그리드 스타일 중 figureName의 값을 지정하는 상수다. 

#### Members

> **LEFT_TOP**   
> Value: "leftTop"   
> Edge Mark를 왼쪽 상단에 표시한다.    

> **LEFT_BOTTOM**  
> Value: "leftBottom"  
> Edge Mark를 왼쪽 하단에 표시한다.    

> **RIGHT_TOP**   
> Value: "rightTop"   
> Edge Mark를 오른쪽 상단에 표시한다.    

> **RIGHT_BOTTOM**  
> Value: "rightBottom"  
> Edge Mark를 오른쪽 하단에 표시한다.    

#### Examples   

<pre class="prettyprint">
var columns = [{
    "name": "OrderID",
    "fieldName": "OrderID",
    "type": "data",
    "width": "90",
    "styles": {
        "textAlignment": "near",
        "figureName": "rightTop", 
        "figureBackground": "#FF0000FF", 
        "figureSize": "100%"
    },
    "header": {
        "text": "Order"
    }
}, {
    "name": "CustomerID",
    "fieldName": "CustomerID",
    "type": "data",
    "width": "130",
    "styles": {
        "textAlignment": "center",
        "figureName": "leftBottom", 
        "figureBackground": "#FF0000FF", 
        "figureSize": "100%"
    },
    "header": {
        "text": "Customer ID"
    }
}];

gridView.setColumns(columns);
</pre>

---

#### Demo Links

* [Style Properties](http://demo.realgrid.com/GridStyle/StyleProperties/) 참조  
