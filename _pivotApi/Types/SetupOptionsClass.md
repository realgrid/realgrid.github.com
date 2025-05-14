---
layout: apipost
title: SetupOptions
part: Types
typename: Classes
order: SetupOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/SetupOptions/
versions:
  - 1.0.9+
tags: 
  - SetupOptions
  - 설정옵션
---

#### Description

설정 화면에 표시되는 기본값을 기정한다.  

#### Properties

> **defaultExpression**  
> Type: [ValueType](/pivotApi/types/ValueType/)      
> Default: `sum`       
> 필드가 값 필드로 최초 지정될때 표시되는 `expression`의 기본값을 지정한다.    
> 1.0.9부터 지원한다.     

> **filterOperation**  
> Type: [FilterOperation](/pivotApi/types/FilterOperation/)   
> Default: `and`       
> FilterOperation의 초기값을 지정한다.
> 사용자가 변경을 하면 변경된 값이 유지된다.    
> 1.0.9부터 지원한다.     

> **positon**    
> Type: [SetupPosition](/pivotApi/types/SetupPosition/)    
> Default: `modal`    
> 설정창이 표시될 위치를 지정한다.    
> 1.0.11부터 지원한다.

> **itemGap**    
> Type: number    
> Default: `3`    
> setupPosition이 `left`또는 `right`일때 설정창과 pivot간의 간격을 지정한다.    
> 1.0.12부터 지원한다.

> **showResetAllButton**    
> Type: boolean    
> Default: `false`    
> 설정창에 전체 초기화 버튼을 표시한다.    
> 1.0.14부터 지원한다.    

> **showResetButtons**    
> Type: boolean    
> Default: `false`    
> 설정창에 field 초기화 버튼을 표시한다.    
> 1.0.14부터 지원한다.

#### Examples   

<pre class="prettyprint">
pivot.setSetupOptions({
    defaultExpression: "max",
    filterOperation: "or"
})
</pre>

---

#### API Links

* [getSetupOptions](/pivotApi/RealPivot/getSetupOptions/)   
* [setSetupOptions](/pivotApi/RealPivot/setSetupOptions/)   

