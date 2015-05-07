---
layout: apipost
title: EditValidation
part: Types
objectname: 
directiontype: 
permalink: /api/types/EditValidation/
---


> 컬럼 단위 혹은, 행 단위 데이터 검증 조건과 방식을 지정한다.

#### Properties

> **name**
> Type: String 
> Default: null    
> 이름. 현재는 Validation 실패 시 message나 description이 설정되지 않을 때 메시지로 사용된다.

> **active**
> Type: Boolean 
> Default:  true
> 검증을 진행할 것인 지를 지정한다.  

> **mode**
> Type: [ValidationMode](/api/types/)
> Default: ValidationMode.ALWAYS 
> Insert 시, Update 시, 혹은 두 경우 모두 실행한다. [ValidationMode](/api/types/)를 참조한다. 

> **level**
> Type: [ValidationLevel](/api/types/) 
> Default: ValidationLevel.ERROR 
> 행 편집을 완료할 때, 이 값이 그리드 [EditOptions](/api/types/).commitLevel로 지정한 보다 심각한 수준인 경우이면 예외가 발생되고, 편집을 완료할 수 없게된다.

> **criteria**
> Type: String 
> Default: null    
> 검증식을 설정한다.    

> **message**
> Type: String 
> Default: null    
> 에러 메시지를 설정한다.     

> **description**
> Type: Text
> Default: null   
> 설명. 현재는 Validation 실패 시 message가 설정되지 않을 때 메시지로 사용된다.     

