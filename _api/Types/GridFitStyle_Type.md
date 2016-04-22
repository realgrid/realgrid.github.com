---
layout: apipost
title: GridFitStyle
part: Types
typename: Constants
order: GridFitStyle
objectname: 
directiontype: 
permalink: /api/types/GridFitStyle/
tags: 
  - FitStyle
  - 핏스타일
  - 그리드크기 
---


#### Description

> 컬럼들의 표시 너비를 그리드 너비에 맞게 조정해서 수평 스크롤이 필요없게 하거나, 그리드에 채운 상태로 표시하는 방식을 지정하는 상수다.  
  
#### Members

> **NONE**  
> Value: "none"  
> 조정하지 않고 컬럼 너비대로 표시한다.  

> **EVEN**  
> Value: "even"  
> 표시할 컬럼들의 전체 너비가 그리드 너비보다 작은 경우 남는 크기를 각 컬럼에 고르게 분배한다. 
> 표시할 컬럼들의 전체 너비가 그리드 너비보다 큰 경우에는 크기 변동이 없다.   

> **EVEN_FILL**  
> Value: "evenFill"  
> 항상 컬럼의 width를 이용해 그리드 너비에 맞게 컬럼 비율에 맞춰 늘리거나 축소한다.   

> **FILL**   
> Value: "fill"  
> 컬럼의 width와 fillWidth를 이용해 채운다. fillWidth가 전혀 선택되지 않았다면 "even"과 동일하다.            

### Example  

<pre class="prettyprint">
	gridView.setDisplayOptions({
        fitStyle: "evenFill"
    });
</pre>

#### Demo Links

> [GridFitting](http://demo.realgrid.com/Demo/GridFitting) 참조  

> [DisplayOptions](/api/types/DisplayOptions/)
> [setDisplayOptions](/api/GridBase/setDisplayOptions/)  
> [getDisplayOptions](/api/GridBase/getDisplayOptions/)  


