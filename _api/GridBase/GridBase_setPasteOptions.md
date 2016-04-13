---
layout: apipost
title: setPasteOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setPasteOptions/
tags:
  - clipboard
  - paste
  - 붙여넣기
---


#### Description

> 그리드 붙여넣기 정보를 설정한다. [PasteOptions](/api/types/PasteOptions/)이 설정 모델이다.

#### Syntax

> function setPasteOptions(options)

#### Parameters

> **options**  
> Type: object  
> [PasteOptions](/api/types/PasteOptions/) 모델과 같은 설정 정보. [PasteOptions](/api/types/PasteOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.setPasteOptions({
        singleMode: false,
        enableAppend: false,
        ...
    });
</pre>

#### Demo Links
#### See Also

#### See Also
> [getPasteOptions](/api/GridBase/getPasteOptions), [getCopyCoptions](/api/GridBase/getCopyOptions), [setCopyOptions](/api/GridBase/setCopyOptions)  
> [Copy &amp; Paste Demo](http://demo.realgrid.com/Demo/CopyAndPaste)