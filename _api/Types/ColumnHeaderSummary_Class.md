---
layout: apipost
title: ColumnHeaderSummary
part: Types
typename: Classes
order: ColumnHeaderSummary
objectname: 
directiontype: 
jsonly: true
permalink: /api/types/ColumnHeaderSummary/
versions:
  - JS 1.1.17+
tags: 
  - ColumnHeaderSummary
  - HeaderSummary
  - Footer
  - 컬럼헤더써머리
  - 풋터
---

#### Description

 그리드 헤더 영역에 표시되는 Column Summary에 대한 설정 정보를 관리한다.

#### Properties

> **text**  
> Type: String   
> Default: null      
> expression이 설정되지 않은 경우 Summary에 표시될 문자열을 지정한다.  

> **styles**  
> Type: Object     
> Default: Null       
> Column Summary에 적용할 스타일을 지정한다.  

> **expression**  
> Type: Expression  
> Default: null    
> Column Summary에 표시될 [Expression](/api/features/Expression)을 지정한다.   

#### Examples   

<pre class="prettyprint">
    gridView.setColumns([{
        ...
    }, {
        "fieldName": "Quantity",
        },
        "header": {
            "text": "Quantity",
            "summary": {
                "styles": {
                    "textAlignment": "far",
                    "numberFormat": "#,##0",
                    "suffix": " $",
                    "font": "Arial,12"
                },
                "text": "합계",
                "expression": "sum"
            }
        }
    }, {
        ...
    }];
</pre>

---

#### API Links

* [Header](/api/types/Header/)  

#### Demo Links 

* [Column HeaderSummary](http://demo.realgrid.net/Demo/HeaderSummary)   
