---
layout: apipost
title: DropDownCellEditor
part: Types
objectname: 
directiontype: 
permalink: /api/types/DropDownCellEditor/
---


> 드랍다운 에디터의 values 속성으로 지정된 목록 중 한 값을 선택한다.
> 또한, labels에 values 대신 드랍다운 리스트에 표시될 텍스트들을 지정할 수 있다. 

#### Properties


> **maxLength**
> Type: Number
> Default: 0
> 

> **textReadOnly**
> Type: boolean
> Default: false
> true이면 키보드로 입력이 안되고 선택만 가능하게 된다.

> **textCase**
> Type: String
> Default: [TextInputCase](/api/types/).DEFAULT
> 편집기에 입력되는 문자를 자동으로 대소문자로 변경한다. [TextInputCase](/api/types/)에 지정할 수 있는 값들이 선언되어 있다. [TextInputCase](/api/types/).DEFAULT로 지정하면 컬럼의 textInputCase에 지정한 값을 따르게 된다.

> **displayLabels**
> Type: boolean
> Default: true
>

> **values**
> Type: Array
> Default: []
> 

> **labels**
> Type: Array
> Default: []
>

> **dropDownCount**
> Type: Number
> Default: 8
> 속성에 표시될 목록의 수를 지정할 수 있다.

> **itemSortStyle**
> Type: [ItemSortStyle\|ItemSortStyle](/api/types/)
> Default: ItemSortStyle.NONE
> 

> **caseSensitive**
> Type: boolean
> Default: false
>

> **commitOnSelect**
> Type: boolean
> Default: true
>
