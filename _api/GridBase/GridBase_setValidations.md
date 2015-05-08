---
layout: apipost
title: setValidations
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setValidations/
---


#### Description

> 행(row) 수준의 편집 [EditValidation](/api/types/EditValidation/) 목록을 설정한다.

#### Syntax

> function setValidations(validations)

#### Parameters

> **options**  
> Type: Array of [EditValidation](/api/types/EditValidation/)  
> [EditValidation](/api/types/EditValidation/) 모델과 같은 설정 정보들의 배열.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setValidations([{
        criteria: "value > 100",
        message: "Quantity는 100보다 커야 합니다!",
        mode: "always",
        level: "error"
    }, {
    ]);
</pre>

