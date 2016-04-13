---
layout: apipost
title: cancel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/cancel/
tags:
  - cancel
  - 편집취소
---


#### Description

> 현재 편집 중인 행의 편집을 취소한다. 편집 중이 아니라면 아무 일도 하지 않는다. 편집을 완료할 때는 [commit()](/api/GridBase/commit)을 호출한다.

#### Syntax

> function cancel()

#### Parameters

> None.

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    gridView.cancel();
</pre>

#### Demo Links
> [commit](/api/GridBase/commit), [cancelEditor](/api/GridBase/cancelEditor)