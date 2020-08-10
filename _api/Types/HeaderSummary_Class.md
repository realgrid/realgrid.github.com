---
layout: apipost
title: HeaderSummary
part: Types
typename: Classes
order: HeaderSummary
objectname: 
directiontype: 
jsonly: true
permalink: /api/types/HeaderSummary/
versions:
  - JS 1.1.17+
tags: 
  - HeaderSummary
  - Footer
  - 컬럼헤더써머리
  - 풋터
---

#### Description

 그리드 헤더 영역에 표시되는 HeaderSummary에 대한 설정 정보를 관리한다.

#### Properties

> **height**  
> Type: number  
> Default: 0  
> HeaderSummary의 높이를 픽셀 단위로 지정한다. 0이면 자동으로 계산된다. 0보다 큰 값이면 이 값과 minHeight에 지정한 값 중 큰 값으로 지정된다.

> **minHeight**  
> Type: number  
> Default: 23  
> HeaderSummary의 최소 높이를 지정한다.  

> **resizable**  
> Type: boolean   
> Default: false  
> 사용자가 HeaderSummary 왼쪽 셀의 위쪽을 마우스 드래깅해서 헤더의 높이를 변경하게 할 수 있도록 할 것인 지를 지정한다.

> **visible**  
> Type: boolean   
> Default: true     
> true면 HeaderSummary를 표시한다.  

> **mergeCells**  
> Type: array of string   
> Default: null     
> 머지시켜 보여줄 풋터 셀들을 나열한다. 첫번째 지정된 컬럼이 기준 컬럼이다. 
> ex> 아래 example에서 "Col2" 컬럼이 다른 자리로 이동되면 "Col1", "Col2"이 머지된다.
> RealGridJS 1.1.16 부터 지원 한다. 

> **styles**  
> Type: array of object   
> Default: null     
> HeaderSummary에 적용될 스타일을 지정한다.    
> RealGridJS 1.1.24 부터 지원 한다.   

> **count**  
> Type: number  
> Default: 1     
> 지정한 수만큼 Header Summary가 생성된다.   
> RealGridJS 1.1.35 부터 지원 한다. 

#### Examples   

<pre class="prettyprint">
gridView.setHeader({
  summary:{
    visible:true,
    height: 23,
    mergeCells:["col1","col2"]
  }
})

gridView.setHeader({
  summary:{
    visible:true, 
    count:3, 
    height:60,
    styles:[{
        background:"#ffffff00"
    },{
        background:"#ff00ffff"
    },{
        background:"#ff11ff55"
    }]
  }
})
</pre>

---

#### API Links

* [Header](/api/types/Header/)  

#### Demo Links 

* [Column HeaderSummary](http://demo.realgrid.com/HeaderAndFooter/HeaderSummary/)   
