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

<a name="blankFillValue"></a>
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

<a name="labelTextWidth"></a>
> **labelTextWidth**  
> Type: Number  
> 필드 헤더의 너비를 지정한다. 실제 width는 padding, border등을 감안해서 지정된 너비보다 조금 작게 표시된다.  
> 1.0.9부터 지원한다.

<a name="watchDisplayChange"></a>
> **watchDisplayChange**  
> Type: Boolean  
> Default: False  
> True이면 pivot컨테이너의 크기가 변경되었을때 자동으로 pivot의 크기를 변경한다  
> 1.0.9부터 지원한다.  

<a name="columnSizeCallback"></a>
> **columnSizeCallback**  
> Type: Function  
> Defalut: null  
> 컬럼 정보를 생성후 호출되는 콜백이다.  
> 컬럼별로 너비를 지정할때 사용한다.  
> return: number  
> 1.0.9부터 지원한다.  
> ****Arguments****  
>> **fields**  
>> Type: string[]  
>> 컬럼의 level에 따른 필드 이름 배열     
>>
>> **labels**  
>> Type: string[] | number[]  
>> 컬럼의 level에 따른 값 배열  
>>
>> **isSum**  
>> Type: Boolean  
>> 합계 여부  
>>
>> **vfield**  
>> Type: string  
>> valueField 이름  


#### Examples   

<pre class="prettyprint">
funtion sizeCallback(fields, labels, isSum, vField) {
    if (vField == "값1" && fields[0] === "년도" && labels[0] == "2022" && isSum) {
        return 0;
    }
}
pivot.setDisplayOptions({
    columnSizeCallback: sizeCallback
});
</pre>

---

#### API Links

* [setDisplayOptions](/pivotApi/RealPivot/setDisplayOptions/)   
* [getDisplayOptions](/pivotApi/RealPivot/getDisplayOptions/)   


