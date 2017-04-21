---
layout: apipost
title: EdgeMark
part: Types
typename: Constants
order: EdgeMark
objectname: 
directiontype: 
jsonly: true
versions:
  - JS 1.1.23+
permalink: /api/types/EdgeMark/
---

#### Description

그리드 스타일 중 figureName의 값을 지정하는 상수다. 
figureName에 값을 지정하면 해당 위치에 엣지마크가 표시된다.  
figureSize는 픽셀값과 %값 형태로 지정할 수 있다.  

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
        "figureSize": "7"
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
