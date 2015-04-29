---
layout: apipost
title: setRowCount
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setRowCount/
---


#### Description

> 데이터행의 개수를 매개변수로 지정한 새로운 개수로 맞춘다. 기존 개수보다 적게 지정하면 기존 행에서 남는 부분을 삭제한다. 
>기존 행 개수보다 큰 경우에는 필요한 만큼의 빈 데이터 행들을 추가합니다. 
>새로 추가된 행들은 DataProvider 내에 자리만 존재할 뿐 각 필드의 값이 할당되지는 않은 상태로 존재한다.
>이런 행들에 대해 [LocalDataProvider hasData|hasdata](/api/LocalDataProvider/)(row) 함수가 false를 리턴한다.
>하지만, 기본값을 매개변수로 지정한 경우 그 값들로 채운다.
>*fillFieldDefaults*가 true이면 각 [DataField](/api/LocalDataProvider/)의 defaultValue로 값을 초기화하고,
>*defaultValues*에 값이 설정되면 이 값들로 새로운 행의 값들을 초기화 한다. 
>이 함수를 통해 행의 개수가 변경되는 경우 추가/삭제 이벤트는 발생하지 않고 [LocalDataProvider onRowCountChanged|onRowCountChanged](/api/LocalDataProvider/) 이벤트만 발생한다.

#### Syntax

> function setRowCount(newCount, fillFieldDefaults, defaultValues, rowState)

#### Parameters

> *newCount*
> Type: number
> 새로운 행의 개수. 

> *fillFieldDefaults*
> Type: boolean
> true면 [DataField](/api/LocalDataProvider/).defaultValue로 새로 추가되는 행들의 값을 초기화한다.
> 지정하지 않으면 false이다.

> *defaultValues*
> Type: Array
> null이 아닌 배열을 지정하면 이 값들로 새로 추가되는 행들의 값을 초기화 한다.
> 지정하지 않으면 null이다.

> rowState
> Type: [RowState|RowState](/api/LocalDataProvider/)
> 새로 추가되는 행들의 rowState이다. 지정하지 않으면 "none"이다.

#### Return value

> None.

#### Example

<pre class="prettyprint">
    dataProvider.setRowCount(100, false, null,"none");
</pre>

