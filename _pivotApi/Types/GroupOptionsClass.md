---
layout: apipost
title: GroupOptions
part: Types
typename: Classes
order: GroupOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/GroupOptions/
versions:
  - 1.0.2+
tags: 
  - GroupOptions
  - 그룹옵션
---

#### Description

 피벗 그리드의 그룹과 관련된 정보들에 대한 설정 모델이다.

#### Properties

> **columnExpand**  
> Type: Number  
> Default: -1      
> -1로 지정하면 컬럼이 모두 펼쳐진다.  
> 0으로 지정하면 모든 컬럼이 접혀진다.  
> 1 이상 지정하면 그 지정한 레벨만큼 펼쳐진다.  

> **rowExpand**  
> Type: Number  
> Default: -1      
> -1로 지정하면 행이 모두 펼쳐진다.  
> 0으로 지정하면 모든 행이 접혀진다.  
> 1 이상 지정하면 그 지정한 레벨만큼 펼쳐진다.  

#### Examples   

<pre class="prettyprint">
pivot.setOptions({
    group: {
        columnExpand: 0,
        rowExpand: -1 
    }
});

or

pivot.setGroupOptions({
    columnExpand: 0,
    rowExpand: -1 
});
</pre>

---

#### API Links

* [setGroupOptions](/pivotApi/RealPivot/setGroupOptions/)   
* [getGroupOptions](/pivotApi/RealPivot/getGroupOptions/)   


