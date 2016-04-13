---
layout: apipost
title: setOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setOptions/
tags:
  - Grid옵션
  - option
  - 그리드설정
---


#### Description

> 그리드 옵션 정보를 재설정합니다.
> 그리드 수준의 정보만을 반환하는 [getOptions](/api/GridBase/getOptions/)와 달리 이 메쏘드를 통해
> 하위 구성 요소 및 다른 실행 정보들을 동시에 재설정할 수 있습니다.

#### Syntax

> function setOptions(options)

#### Parameters

> **options**  
> Type: Object  
> 설정 정보  
> [summaryMode](/api/types/GridOptions/): String  
> [hideDeletedRows](/api/types/GridOptions/): boolean  
> [checkBar](/api/types/CheckBar/): Object  
> [copy](/api/types/CopyOptions/): Object  
> [display](/api/types/DisplayOptions/): Object  
> [edit](/api/types/EditOptions/): Object  
> [filtering](/api/types/FilteringOptions/): Object  
> [fixed](/api/types/FixedOptions/): Object  
> [grouping](/api/types/GroupingOptions/): Object  
> [header](/api/types/Header/): Object  
> [indeicator](/api/types/Indicator/): Object  
> [panel](/api/types/Panel/): Object  
> [paste](/api/types/PasteOptions/): Object  
> [rowGroup](/api/types/RowGroupOptions/): Object  
> [select](/api/types/SelectOptions/): Object  
> [sorting](/api/types/SortingOptions/): Object  
> [stateBar](/api/types/StateBar/): Object  

#### Return value

> None

#### Examples 

<pre class="prettyprint">
    var options =  {
        hideDeletedRows : true,
        panel: {
            visible: true
        },
        footer: {
            visible: true
        },
        checkBar: {
            visible: true
        },
        stateBar: {
            visible: true
        },
        edit: {
            enterToTab:true,
            insertable: true,
            appendable: true,
            updatable: true,
            deletable: true,
            deleteRowsConfirm: true,
            deleteRowsMessage: "삭제하시겠습니까 ?"		    
        },
        displayOptions:{
            columnWidth : 200
        }
    };
    gridView.setOptions(options);
</pre>

#### See Also
> [getOptions](/api/GridBase/getOptions)