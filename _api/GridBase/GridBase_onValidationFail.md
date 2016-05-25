---
layout: apipost
title: onValidationFail
part: Objects
objectname: GridBase
directiontype: Callback
permalink: /api/GridBase/onValidationFail/
tags:
  - event
  - validate
  - 검증실패
  - 검사실패
---


#### Description

> validation 실패시 발생한다. 콜백함수에서 별도의 에러 처리가 가능하고, err 객체를 return 하면 자체 Validation 메세지가 표시되고 그 외의 경우 표시되지 않는다.    

#### Syntax

> function onValidationFail (grid, itemIndex, column, err) 

#### Arguments

> **grid**  
> Type: [GridBase](/api/GridBase/)  
> GridBase 컨트롤  

> **itemIndex**  
> Type: number  
> 검증하는 행의 아이템 인덱스  

> **column**  
> Type: object  
> [DataColumn](/api/types/DataColumn/) 모델과 같은 구조의 컬럼 object.  

> **err**  
> Type: [ValidationResult](/api/types/ValidationResult/)  
> 검증 결과  


#### Return

> Type: [ValidationResult](/api/types/ValidationResult/)    
> errorLevel과 errorMessage 값을 포함하는 object를 그리드에 전달하면 검증에 실패한 것으로 판단한다.  
> 아무 결과도 return 하지 않으면 검증 실패 메시지는 표시되지 않는다.  

#### Examples 

<pre class="prettyprint">
    gridView.onValidationFail = function (grid, itemIndex, column, err) {
        console.log("onValidationFail:" + itemIndex + "," + JSON.stringify(column) + "," + JSON.stringify(err));

        if (column.name != "Quantity") {
            return err;
        }
    }
</pre>

