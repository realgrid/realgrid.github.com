---
layout: apipost
title: CopyOptions
part: Types
typename: Classes
order: CopyOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/CopyOptions/
versions:
  - 1.0.1+
tags: 
  - CopyOptions
  - 카피옵션
  - 복사옵션
---

#### Description

 피벗 그리드의 복사와 관련된 정보들에 대한 설정 모델이다.

#### Properties

> **copyDisplayText**  
> Type: Boolean   
> Default: false      
> true로 지정하면 실제값이 아니라 표시값을 복사한다.        
    


#### Examples   

<pre class="prettyprint">
pivot.setOptions({
    copy: {
        copyDisplayText: true
    }
});

or

pivot.setCopyOptions({
    copyDisplayText: true
});
</pre>

---

#### API Links

* [setCopyOptions](/pivotApi/RealPivot/setCopyOptions/)   
* [getCopyOptions](/pivotApi/RealPivot/getCopyOptions/)   


