---
layout: apipost
title: UserControlLevel
part: Types
typename: Constants
order: UserControlLevel
objectname: 
directiontype: 
permalink: /pivotApi/types/UserControlLevel/
tags:
  - 필드고정
  - 행추가/제거
---

#### Description
컬럼/행/Value의 변경범위 지정

#### Members

> **FULL**   
> Value: "full"  
> 사용자가 컬럼/행/Value field를 추가하거나 제거할수 있다   

> **REORDER**  
> Value: "reorder"   
> 사용자가 컬럼/행/Value field의 순서만 변경할수 있다  

> **LOCKED**    
> Value: "locked"    
> 사용자가 컬럼/행/Value field를 조작할수 없다    

#### Examples   

<pre class="prettyprint">
pivot.setSetupOptions({
    rowControlLevel: "locked",
    columnControlLevel: "reorder",
    valueControlLevel: "full"
});
</pre>

---

