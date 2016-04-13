---
layout: apipost
title: setCopyOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setCopyOptions/
tags:
  - clipboard
  - 복사
  - 붙여넣기
  - copy
---


#### Description

> Copy 정보를 설정한다. [CopyOptions](/api/types/CopyOptions/)가 설정 모델이다.

#### Syntax

> function setCopyOptions(options)

#### Parameters

> **options**  
> Type: object  
> [CopyOptions](/api/types/CopyOptions/) 모델과 같은 설정 정보. [CopyOptions](/api/types/CopyOptions/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setCopyOptions({
        singleMode:true,
        datetimeFormat:"yyyyMMdd"
    });
</pre>

#### Demo Links
> [Copy&amp;Paste](/http://demo.realgrid.com/Demo/CopyAndPaste)  
> [getCopyOptions](/api/GridBase/getCopyOptions), [setPasteOptions](/api/GridBase/setPasteOptions), [getPasteOptions](/api/GridBase/getPasteOptions), 