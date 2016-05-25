---
layout: apipost
title: Indicator
part: Types
typename: Classes
order: Indicator
objectname: 
directiontype: 
permalink: /api/types/Indicator/
tags:
  - 지시자
  - 인디케이터
---


#### Description

> 그리드 Indicator에 대한 설정 모델이다. Indicator는 행 번호를 표시하거나, 포커스 된 행의 위치 등을 표시한다.

#### Properties

> **displayValue**  
> Type: [IndicatorValue](/api/types/IndicatorValue)   
> Default: IndicatorValue.INDEX   
> 인디케이터 셀들에 표시할 내용을 지정한다. 아이템 index나 데이터 행 번호를 표시할 수 있다.   

> **minWidth**      
> Type: number    
> Default: 40    
> Indicator의 최소 너비를 픽셀 단위로 지정한다.   

> **maxWidth**    
> Type: number  
> Default: 0   
> Indicator의 최대 너비를 픽셀 단위로 지정한다  

> **width**        
> Type: number  
> Default: 0   
> Indicator의 너비를 픽셀 단위로 지정한다. 이 값이 0보다 크면 minWidth, maxWidth는 무시된다. 0이면 표시할 내용과 minWidth, maxWidth에 맞춰 너비가 자동 조정된다.   

> **selectable**       
> Type: boolean   
> Default: true   
> 선택가능 여부를 지정한다.  

> **visible**       
> Type: boolean   
> Default: true   
> true면 Indicator를 표시한다.   

> **zeroBase**       
> Type: boolean   
> Default: false   
> 인디케이터의 숫자가 0부터 시작할것인지의 여부를 지정한다.

> **indexOffset**       
> Type: Number  
> Default: 0  
> 인디케이터에 표시될 숫자와 아이템 index와의 간격을 지정한다. (인디케이터 숫자 = 아이템 index + indexOffset)  

> **rowOffset**       
> Type: Number  
> Default: 0  
> 인디케이터에 표시될 숫자와 데이터 행 번호와의 간격을 지정한다. (인디케이터 숫자 = 데이터 행 번호 + rowOffset)   

> **headText**       
> Type: String  
> Default: null  
> head 영역에 표시할 text를 지정한다.  
   
> **footText**       
> Type: String  
> Default: null  
> foot 영역에 표시할 text를 지정한다.  

> **headImageUrl**       
> Type: String  
> Default: null  
> head 영역에 표시할 이미지의 Url을 지정한다.  
   
> **footImageUrl**       
> Type: String  
> Default: null  
> foot 영역에 표시할 이미지의 Url을 지정한다.  


#### Examples

<pre class="prettyprint">
gridView.setIndicator({
	displayValue: "index",
	width: 50,
	selectable: true,
	visible: true,
	zeroBase: true,
	rowOffset: 0, 
	indexOffset: 0,
	headText: "head",
	footText: "foot",
	headImageUrl: "/img/common/dot_arrow2_top.gif",
	footImageUrl: "/img/common/dot_arrow2_bottom.gif"
})

</pre>

---

#### Demo Links

> [Indicator](http://demo.realgrid.com/Demo/Indicator){:target="_blank"} 참조


> [setIndicator](/api/GridBase/setIndicator/)   
> [getIndicator](/api/GridBase/getIndicator/)     
