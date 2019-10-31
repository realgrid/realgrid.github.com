---
layout: apipost
title: Header
part: Types
typename: Classes
order: Header
objectname: 
directiontype: 
permalink: /api/types/Header/
tags:
  - 헤더
---


#### Description

 헤더 영역의 설정 모델이다. 헤더는 컬럼 및 컬럼그룹들의 헤더와 Indicator, StateBar, CheckBar 등의 Head 영역들로 구성된다.

#### Properties

> **height**    
> Type: number    
> Default: 0  
> 헤더의 높이를 픽셀 단위로 지정한다. 0이면 자동으로 계산된다. 0보다 큰 값이면 이 값과 minHeight에 지정한 값 중 큰 값으로 지정된다.  

> **minHeight**  
> Type: number  
> Default: 23  
> 헤더의 최소 높이를 지정한다.  

> **resizable**  
> Type: boolean   
> Default: false  
> 사용자가 헤더 왼쪽 셀의 아래쪽을 마우스 드래깅해서 헤더의 높이를 변경하게 할 수 있도록 할 것인 지를 지정한다.  

> **visible**  
> Type: boolean   
> Default: true     
> true면 Header를 표시한다.  

> **filterable**  
> Type: boolean   
> Default: true     
> 필터링 가능 여부를 지정한다.  

> **sortable**  
> Type: boolean   
> Default: true     
> 소트 가능여부를 지정한다.  

> **subTextGap**  
> Type: number     
> Default: 1       
> Text와 SubText와의 간격을 설정한다.    

> **subTextLocation**  
> Type: string   
> Default: "lower"       
> SubText의 위치를 지정한다. [subTextLocation](/api/types/subTextLocation/)가 설정모델이다.         

> **imageList**  
> Type: string     
> Default: null       
> 헤더에 표시할 이미지 목록을 지정한다.  

> **itemOffset**  
> Type: number     
> Default: 1       
> 헤더 테두리와 체크박스나 이미지간의 간격을 설정한다.      

> **itemGap**  
> Type: boolean     
> Default: true       
> Text와 체크박스나 이미지간의 간격을 설정한다.   

> **styles**  
> Type: object|string     
> Default: null       
> 헤더의 스타일을 지정한다.  

> **subStyles**  
> Type: object|string     
> Default: null       
> SubText의 스타일을 지정한다.  

> **showTooltip**  
> Type: boolean     
> Default: false       
> 툴팁 표시 여부를 지정한다.    
> RealgridJS 1.1.16 부터 지원한다.  

> **heightFill**  
> Type: [HeaderHeightFill](/api/types/HeaderHeightFill/)       
> Default: HeaderHeightFill.Default       
> 헤더의 높이를 지정한다.   

> **summary**  
> Type: boolean     
> Default: false       
> summary 표시 여부를 지정한다.       

> **tooltipEllipseTextOnly**  
> Type: boolean     
> Default: false       
> true이면 툴팁이 textWrap: "ellipse"가 적용된 상태인 경우에만 표시된다.        
> RealgridJS 1.1.34 부터 지원한다.  

#### Examples 

<pre class="prettyprint">
    gridView.setHeader({
        height: 200,
        heightFill: "fixed",
        showTooltip: true,
        tooltipEllipseTextOnly: true
    });

    gridView.setStyles({ header: { textWrap: "ellipse" } });
</pre>

