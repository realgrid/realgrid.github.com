---
layout: apipost
title: onValidateColumn
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onValidateColumn/
---


#### Description

> Javascript를 통한 사용자 validation을 실행한다. 해당 컬럼 값에 문제가 있다면 검증 에러와 에러 메시지를 그리드에 리턴값으로 전달한다.

#### Syntax

> function onValidateColumn (grid, column, inserting, value)

#### Arguments

> *grid*
> Type: [GridView|GridView](/api/GridBase/)
> GridView 컨트롤

> *column*
> Type: object
> [DataColumn](/api/GridBase/) 모델과 같은 구조의 컬럼 object.

> *inserting*
> Type: boolean
> 열 추가 중이면 true. 열 수정 중이면 false.

> *value*
> Type: *
> 입력된 필드의 값.

#### Return

> Type: object
> errorLevel과 errorMesage 값을 포함하는 object를 그리드에 전달하면 검증에 실패한 것으로 판단한다.

#### Example

<pre class="prettyprint">
    grid.onValidateColumn =  function (grid, column, inserting, values) {
        var error = {};
        //validate Quantity
        if (column.name = "Quantity" &&  value < 100) {
            error.level = RealGrids.ValidationLevel.ERROR;
            error.message = "onValidateRow Event: if Quantity < 100, validation level 'ERROR!!'";
        }
        return error;
    }
</pre>

