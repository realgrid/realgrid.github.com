---
layout: apipost
title: CopyOptions
part: Types
typename: Classes
order: CopyOptions
objectname: 
directiontype: 
permalink: /api/types/CopyOptions/
tags:
  - 카피옵션
  - 복사옵션
  - CopyOptions
---

#### Description

 그리드의 내용을 클립보드로 복사할때 적용하는 옵션을 지정한다.  

#### Properties

> **enabled**  
> Type: Boolean  
> Default: true  
> false이면 복사가 되지 않는다.    

> **singleMode**  
> Type: Boolean  
> Default: false  
> true면 선택 영역과 상관없이 포커스를 갖는 셀 하나의 값만 클립보드로 복사한다.  

> **datetimeFormat**  
> Type: String  
> Default: null  
> 이 속성에 "yyyy-MM-dd" 같은 형식을 지정하면 지정한 형태로 복사가 된다.     

> **booleanFormat**  
> Type: String  
> Default: null  
> 이 값이 지정되면 datetime 필드의 값을 복사할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

> **lookupDisplay**  
> Type: Boolean  
> Default: false  
> true인 경우 label 값을 복사하고, false인 경우 value값을 복사한다.     

#### Examples   

<pre class="prettyprint">
gridView.setCopyOptions({
    singleMode: true,
    datetimeFormat: "yyyyMMdd",
    booleanFormat:"N;Y"
});
</pre>

---

#### API Links

* [setCopyOptions](/api/GridBase/setCopyOptions/)   
* [getCopyOptions](/api/GridBase/getCopyOptions/) 

#### Demo Links

* [Copy & Paste](http://demo.realgrid.com/Editing/CopyAndPaste/)  