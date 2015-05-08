---
layout: apipost
title: removeRows
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/removeRows/
---


#### Description

> rows에 지정된 데이타행들을 삭제한다.  
> [DataProviderOptions](/api/types/DataProviderOptions/)의 softDeleting이 true인 경우 실제로 삭제되지않고 rowState만 변경된다.  
> 이 경우 [onRowDeleted](/api/LocalDataProvider/onRowDeleted/)나 [onRowsDeleted](/api/LocalDataProvider/onRowsDeleted/)가 발생하지 않고 [onRowStateChanged](/api/LocalDataProvider/onRowStateChanged/)나 [onRowStatesChanged](/api/LocalDataProvider/onRowStatesChanged)가 발생한다.

#### Syntax

> function removeRows(rows, rowEvents)

#### Parameters

> **rows**  
> Type: Array of number  
> 삭제하려는 dataRow의 배열이다.

> **rowEvents**  
> Type: Boolean  
> Default: false  
> true인경우 삭제되는 행 별로 [onRowDeleted](/api/LocalDataProvider/onRowDeleted/)가 호출된다.  
> false인경우 삭제가 완료된 후 [onRowsDeleted](/api/LocalDataProvider/onRowsDeleted/)가 한번만 호출된다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.removeRows([0,1,2], false);
</pre>

