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

> 그리드의 내용을 클립보드로 복사할때 적용하는 옵션을 지정한다.  

#### Properties

> **singleMode**  
> Type: Boolean  
> Default: false  
> true면 선택 영역과 상관없이 포커스를 갖는 셀 하나의 값만 클립보드로 복사한다.  

> **datetimeFormat**  
> Type: String  
> Default: null  
> 이 값이 지정되면 datetime 필드의 값을 복사할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

> **booleanFormat**  
> Type: String  
> Default: null  
> 이 값이 지정되면 datetime 필드의 값을 복사할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

### Example  

<pre class="prettyprint">
    gridView.setCopyOptions({
        singleMode: true,
        datetimeFormat: "yyyyMMdd",
        booleanFormat:"N;Y"
    });
</pre>

#### See Also

> [Copy & Paste](http://demo.realgrid.net/Demo/CopyAndPaste) 참조

> [setCopyOptions](/api/GridBase/setCopyOptions/)   
> [getCopyOptions](/api/GridBase/getCopyOptions/)   
