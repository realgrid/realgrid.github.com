---
layout: apipost
title: Footer
part: Types
typename: Classes
order: Footer
objectname: 
directiontype: 
permalink: /api/types/Footer/
tags:
  - Footer
  - 풋터
  - 푸터 
---

#### Description

 푸터 영역과 관련된 설정 모델이다. 푸터는 컬럼 및 컬럼그룹들의 푸터와 Indicator, StateBar, CheckBar 등의 Foot 영역들로 구성된다.

#### Properties

> **height**  
> Type: number  
> Default: 0  
> Footer의 높이를 픽셀 단위로 지정한다. 0이면 자동으로 계산된다. 0보다 큰 값이면 이 값과 minHeight에 지정한 값 중 큰 값으로 지정된다.

> **minHeight**  
> Type: number  
> Default: 23  
> Footer의 최소 높이를 지정한다.  

> **resizable**  
> Type: boolean   
> Default: false  
> 사용자가 Footer 왼쪽 셀의 위쪽을 마우스 드래깅해서 헤더의 높이를 변경하게 할 수 있도록 할 것인 지를 지정한다.

> **visible**  
> Type: boolean   
> Default: true     
> true면 Footer를 표시한다.  

> **mergeCells**  
> Type: array of string   
> Default: null     
> 머지시켜 보여줄 풋터 셀들을 나열한다. 첫번째 지정된 컬럼이 기준 컬럼이다. 
> ex> 아래 example에서 "Col2" 컬럼이 다른 자리로 이동되면 "Col1", "Col2"이 머지된다.
> RealGridJS 1.1.16 부터 지원 한다.

> **count**  
> Type: number   
> Default: 1     
> 지정한 수 만큼 footer가 생깁니다.  
> RealGridJS 1.1.21 부터 지원 한다.  

> **styles**  
> Type: array of object   
> Default: null     
> 풋터에 적용될 스타일을 지정한다. 멀티 풋터의 경우 [{}, {}, {}] 의 형태로 지정한다.    
> RealGridJS 1.1.24 부터 지원 한다.  


### Example  

<pre class="prettyprint">
gridView.setFooter({
    resizable: false,
    visible: true,
    mergeCells: ["Col1", "Col2", "Col3"]
    //mergeCells: [["Col1", "Col2", "Col3"], ["Col6", "Col7"]] //이런 형태도 가능하다.
    ...
});
</pre>

---

#### API Links

* [setFooter](/api/GridBase/setFooter/)  
* [getFooter](/api/GridBase/getFooter/)  
