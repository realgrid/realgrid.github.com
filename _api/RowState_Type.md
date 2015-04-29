---
layout: apipost
title: RowState
part: Types
objectname: 
directiontype: 
permalink: /api/types/RowState/
---


> DataProvider 각 행의 변경 상태를 나타내는 상수 값이다.

#### Members

> *NONE*
> Value: "none"
> 로드된 후 변경이 없는 상태.

> *CREATED*
> Type: "created"
> 새로 추가된 행의 상태.

> *UPDATED*
> Type: "updated"
> 로드된 후 하나 이상의 필드 값이 변경된 상태. CREATE인 행은 값이 변경 되어도 UPDATED로 변경되지 않는다.

> *DELETED*
> Value: "deleted"
> 삭제된 행의 상태. DataProvider의 softDeleting이 true면 사용자가 삭제를 요청할 때 실제 삭제하지 않고 상태만 이 값으로 변경한다.

> *CREATE_AND_DELETED*
> Type: "createAndDeleted"
> 새로 추가된 후에 다시 삭제된 행의 상태.

#### Description

> loadData나 setRows로 처음 데이터가 로드되면 각 행은 NONE상태를 갖는다.
> 상태가 CREATED인 행은 수정이 되어도 UPDATED로 변경되지 않는다.

