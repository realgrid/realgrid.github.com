---
layout: apipost
title: setGridOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setGridOptions/
---


#### Description

> 그리드 옵션 정보를 재설정합니다.
> 그리드 수준의 정보만을 반환하는 [GridBase_getGridOptions|getGridOptions](/api/GridBase/)와 달리 이 메쏘드를 통해
> 하위 구성 요소 및 다른 실행 정보들을 동시에 재설정할 수 있습니다.

#### Syntax

> function setGridOptions(options)

#### Parameters

> *options*
> Type: Object
> 설정 정보

#### Return value

> None

#### Example

<pre class="prettyprint">
    var options =  {
            panel: {
                visible: true
            },
            footer: {
                visible: true
            },
            checkBar: {
                visible: true
            },
            statesBar: {
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
	    },
	};
    grid.setGridOptions(options);
</pre>




