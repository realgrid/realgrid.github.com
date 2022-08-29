---
layout: apipost
title: DataOptions
part: Types
typename: Classes
order: DataOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/DataOptions/
versions:
  - 1.0.9+
tags: 
  - DataOptions
---

#### Description

 피벗 그리드의 데이터 정보들에 대한 설정 모델이다.

#### Properties

> **trimOutputNumber**  
> Type: Boolean   
> Default: true      
> true로 설정하면 getCellValues 등과 같이 피벗 그리드의 값을 가져올때 실제 계산된 값이 아닌 표시된 값으로 가져온다.
    
> **defaultExpression**  
> type: ValueType  
> Default: `sum`  
> ValueField의 expression을 지정하지 않았을때 적용되는 ValueType이다.  

#### Examples   

<pre class="prettyprint">
pivot.setDataOptions({
      trimOutputNumber: false,
      defaultExpression: 'count'
});
</pre>

---

#### API Links

* [setDataOptions](/pivotApi/RealPivot/setDataOptions/)   
* [getDataOptions](/pivotApi/RealPivot/getDataOptions/)   


