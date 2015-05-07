---
layout: apipost
title: LineCellEditor
part: Types
objectname: 
directiontype: 
permalink: /api/types/LineCellEditor/
---


> 한 줄 입력을 받을 수 있는 텍스트 편집기다. 컬럼에 특별히 지정하지 않으면 이 편집기가 사용된다.


#### Properties

> **maxLength**
> Type: Number
> Default: 0
> 사용자가 입력할 수 있는 문자의 최대 개수. 0으로 지정하면 제한이 없다.


> **textCase**
> Type: String
> Default: [TextInputCase](/api/types/).DEFAULT
> 편집기에 입력되는 문자를 자동으로 대소문자로 변경한다. [TextInputCase](/api/types/)에 지정할 수 있는 값들이 선언되어 있다. [TextInputCase](/api/types/).DEFAULT로 지정하면 컬럼의 textInputCase에 지정한 값을 따르게 된다.
