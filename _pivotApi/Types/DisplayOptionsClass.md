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

> **showFocus**  
> Type: Boolean   
> Default: False      
> 피벗 그리드에 포커스 보임 여부를 지정한다.  
> 1.0.1부터 지원한다.      

<a name="showFocusGuide"></a>
> **showFocusGuide**  
> Type: Boolean   
> Default: False      
> true이면 현재 포커스를 기준으로 행, 열의 정보를 확인할 수 있게 가이드가 표시된다.    
> 1.0.3부터 지원한다.      

<a name="keepLabelSpace"></a>
> **keepLabelSpace**  
> Type: Boolean   
> Default: False      
> True이면 라벨에 공백이 있는 경우 trim하지 않고 유지한다.         
> 1.0.3부터 지원한다.      


#### Examples   

<pre class="prettyprint">
pivot.setOptions({
    display: {
        showProgress: true,
        showTooltip: true,
        tooltipDelay: 1000
    }
});

or

pivot.setDisplayOptions({
    showProgress: true,
    showTooltip: true,
    tooltipDelay: 1000
});
</pre>

---

#### API Links

* [setDisplayOptions](/pivotApi/RealPivot/setDisplayOptions/)   
* [getDisplayOptions](/pivotApi/RealPivot/getDisplayOptions/)   


