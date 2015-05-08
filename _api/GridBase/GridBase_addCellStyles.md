---
layout: apipost
title: addCellStyles
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addCellStyles/
---


#### Description

> 복수개의 셀 스타일 정보를 미리 추가한다.  
> DataProvider의 각 행 및 필드 단위로 미리 지정된 스타일을 javascript를 통해 지정할 수 있도록 합니다.  

#### Syntax

> function addCellStyles(cellStyles, overwrite)  

#### Parameters

> **cellStyles**  
> Type: Object  
> 계층적 구조로 구성되는 셀 스타일 데이터  

> **overwrite**  
> Type: Boolean  
> Default: false  
> true로 지정하면 기존에 중복된 id가 있을 경우 해당하는 스타일을 제거하고 새로 추가한다  

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    grid.addCellStyles([{
        "id": "style1",
        "foreground": "#ffffffff",
        "background": "#ff333333",
        "fontSize": 14,
        "fontBold": true,
        "editable": false
    }, {
        "id": "style11",
        "foreground": "#ffffff00",
        "background": "#ff111111",
        "fontSize": 16,
        "fontBold": true,
        "readOnly": false
    }, {
        "id": "style2",
        "background": "#110000ff",
        "foreground": "#ff000088",
        "fontSize": 13,
        "fontBold": true,
        "textAlignment": "center"
    }, {
        "id": "styleNew",
        "background": "#33ffff00"
    }]);
</pre>

