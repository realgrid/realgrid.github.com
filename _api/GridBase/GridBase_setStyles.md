---
layout: apipost
title: setStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setStyles/
tags:
  - style
  - 스타일
  - 색상변경
  - 모양변경
---


#### Description

> 그리드 기본 스타일 및 구성 요소들의 스타일을 필요한 만큼 한꺼번에 지정한다.

#### Syntax

> function setStyles(styles)

#### Parameters

> **styles**  
> Type: object  
> 계층적 구조로 구성되는 스타일 데이터.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setStyles({
        body:{
            dynamicStyles:[
                {   criteria:"row mod 2 = 0",
                    styles:{
                        background:"#FFFEFFBB"
                    }
                }
            ]
        },
        header: { "fontSize": "12", "fontFamily": "맑은 고딕", "fontBold": "true"},
        selection: {
            background: "#11000000",
            border: "#88000000,1"
        },
        checkBar: {
            figureBackground: "#ff555555",
            head: {
                figureBackground: "#ff555555"
            }
        },
        ...
    });
</pre>

#### Demo Links
> [getStyles](/api/GridBase/getStyles)  
> [Styles Overview](http://demo.realgrid.com/Demo/StylesConcept)