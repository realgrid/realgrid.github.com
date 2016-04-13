---
layout: apipost
title: getGroupSummary
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/getGroupSummary/
---


#### Description

> 지정한 그룹아이템 모델의 합계 정보를 리턴한다. "number"형 필드에 대해서만 의미있는 값을 리턴한다. 현재 TreeView에서는 지원하지 않습니다.  

#### Syntax

> function getGroupSummary (model, field, statistical)  

#### Parameters

> **model**  
> Type: object  
> ItemModel Object  

> **field**  
> Type: number \| stirng  
> field Index 이거나 field Name.  

> **statistical**  
> Type: boolean  
> Default: false  
> [SummaryMode](/api/types/SummaryMode/)를 statistical로 할 경우 true, aggregate으로 할 경우 false로 한다.  


#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    var idx = gridView.getCurrent();
    var aModel = gridView.getModel(idx.itemIndex);
    if (aModel) {
        if (aModel.type != "group") {
            aModel = gridView.getParentModel(aModel);
        }
    }

    if (aModel && aModel.type=="group") {
        var summary = gridView.getGroupSummary(aModel, "numField");
        if (summary) {
            console.log(JSON.stringify(summary));
        }
    }
</pre>

#### See Also
> [Column Footer](http://demo.realgrid.com/Demo/ColumnFooter)