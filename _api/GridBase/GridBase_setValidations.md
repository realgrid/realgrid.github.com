---
layout: apipost
title: setValidations
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setValidations/
tags:
  - validation
  - 검증
  - 검사
  - commit
  - 편집
---


#### Description

 행(row) 수준의 편집 [EditValidation](/api/types/EditValidation/) 목록을 설정한다.

#### Syntax

> function setValidations(validations)

#### Parameters

> **options**  
> Type: Array of [EditValidation](/api/types/EditValidation/)  
> [EditValidation](/api/types/EditValidation/) 모델과 같은 설정 정보들의 배열.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
validations = [{
    criteria: "value['CustomerID'] is not empty",
    message: "CustomerID는 반드시 필요합니다.",
    mode: "always",
    level: "error"
}, {
    criteria: "(values['Quantity'] >= 100) and (values['UnitPrice'] >= 50)",
    message: "Quantity는 100보다 크고 UnitPrice는 50보다 커야합니다!",
    mode: "always",
    level: "error"
}, {
    criteria: "values['Quantity'] <= 200",
    message: "Quantity는 200보다 작아야 합니다",
    mode: "always",
    level: "warning"
}];

gridView.setValidations(validations);
</pre>

---

#### Demo Links

* [EditRowValidation Demo](http://demo.realgrid.com/Validation/RowValidation/)  
* [Expression](http://help.realgrid.com/api/features/Expression/)