---
layout: apipost
title: checkRowStates
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/checkRowStates/
---


#### Description

> 행 추가/수정/삭제 등으로 상태가 변경될 때 상태 변경을 기록할 것인 지를 지정한다. false면 softDeleting도 무시된다.

#### Syntax

> function checkRowStates(check)

#### Parameters

> *check*
> Type: boolean
> true면 상태를 기록한다.
> default: false

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.checkRowStates();
</pre>

