---
layout: apipost
title: RestoreMode
part: Features
objectname: 
directiontype: 
permalink: /api/features/RestoreMode/
---


> dataProvider의 복원 모드를 지정합니다. 
> 변경된 값은 restoreUpdatedRows() 함수로 복원 시킬 수 있습니다.

#### Members

> *NONE* 
> Value: "none" 
> 기본값. 복원 모드를 사용하지 않습니다. 

> *EXPLICIT*
> Value: "explicit" 
> 명시적으로 restoreUpdatedRows()를 사용했을 경우에만 RowState와 값이 변경됩니다.                             

> *AUTO*  
> Value: "auto"  
> 값을 수정 후, 원래 값으로 다시 수정했을 경우 RowState가 원래 값으로 복원됩니다. restoreUpdatedRows()도 사용할 수 있습니다.
