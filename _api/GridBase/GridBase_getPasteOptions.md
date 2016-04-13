---
layout: apipost
title: getPasteOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getPasteOptions/
tags:
  - clipboard
  - copy
  - paste
---


#### Description

> 그리드에 붙여넣기를 할때 적용되는 설정을 가져온다.  

#### Syntax

> function getPasteOptions()  

#### Parameters

> none  

#### Return value

> Type: Object  
> [PasteOptions](/api/types/PasteOptions/)설정모델과 동일한 내용의 객체가 반환된다.  

#### Examples 

<pre class="prettyprint">
    var pasteOpt = gridView.getPasteOptions();
    if (pasteOpt) {
        JSON.stringify(pasteOpt);
    }
</pre>

#### Demo Links
> [setPasteOptions](/api/GridBase/setPasteOptions), [getCopyOptions](/api/GridBase/getCopyOptions), [setCopyOptions](/api/GridBase/setCopyOptions)