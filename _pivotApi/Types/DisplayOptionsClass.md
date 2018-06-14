---
layout: apipost
title: DisplayOptions
part: Types
typename: Classes
order: DisplayOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/DisplayOptions/
tags: 
  - DisplayOptions
  - 디스플레이옵션
  - 화면옵션
---

#### Description

 피벗 그리드의 표시에 관련된 정보들에 대한 설정 모델이다.

#### Properties

> **columnHeight**  
> Type: Number   
> Default: 20      
> 컬럼의 높이를 지정한다.    

> **RowHeight**  
> Type: Number   
> Default: 20      
> 행의 높이를 지정한다.    

> **columnWidth**  
> Type: Number   
> Default: 60      
> 최하위 컬럼의 너비를 지정한다.    

> **rowLabelWidth**  
> Type: Number   
> Default: 80       
> 최하위 행의 너비를 지정한다.    

> **rowGroupWidth**  
> Type: Number   
> Default: 70       
> 행 그룹의 너비를 지정한다.    

> **showTooltip**  
> Type: Boolean   
> Default: false      
> 툴팁의 표시 여부를 지정한다.    

> **showLabelTooltip**  
> Type: Boolean   
> Default: false       
> 라벨영역에서의 툴팁 표시 여부를 지정한다.    

> **tooltipDelay**  
> Type: Number    
> Default: 200      
> 툴팁이 표시되기까지의 대기시간을 지정한다.    

> **blankFillValue**  
> Type: Number   
> Default: 0      
> 값이 없는 영역에 채울 값을 지정한다. 기본 값을 채우지 않으려면 null로 설정한다.    

> **showProgress**  
> Type: Boolean   
> Default: false       
> 피벗 구현시 진행바 표시 여부를 지정한다.     

> **notReadyMessage**  
> Type: String    
> Default: RealPivotMessages.notReadyText      
> 피벗 그리드 객체만 생성되었을때의 메시지를 지정한다.    

> **emptyMessage**  
> Type: String   
> Default: RealPivotMessages.emptyDataText      
> 피벗 설정이 완료된 이후 데이터가 로드되지 않았을때 표시할 메시지를 지정한다.    


#### Examples   

<pre class="prettyprint">
pivot.setOptions({        
    display: {
        showProgress: true,
        showTooltip: true,
        tooltipDelay: 1000
    }       
});	
</pre>

---


