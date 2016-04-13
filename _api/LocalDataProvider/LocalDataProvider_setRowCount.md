---
layout: apipost
title: setRowCount
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/setRowCount/
tags:
  - 데이터행의 개수
  - onRowCountChanged
  - 필요행 만큼의 행 추가
  - 지정한 값으로 채우기
---


#### Description

> 데이터행의 개수를 매개변수로 지정한 새로운 개수로 맞춘다. 기존 개수보다 적게 지정하면 기존 행에서 남는 부분을 삭제한다.  
> 기존 행 개수보다 큰 경우에는 필요한 만큼의 행들을 추가한다.  
> 새로 추가된 행들은 DataProvider 내에 자리만 존재할 뿐 각 필드의 값이 할당되지는 않은 상태로 존재한다.  
> 이런 행들에 대해 [hasData](/api/LocalDataProvider/hasData/)(row) 함수가 false를 리턴한다.  
> 하지만, 기본값을 지정한 경우 그 값들로 채울 수 있다.  
> defaultValues에 기본값을 지정한 경우 신규 행을 지정된 값으로 채우고, fillFieldDefaults기 true이면 각 [DataField](/api/types/DataField)의 defaultValue로 값을 채우게 된다.  
>이 함수를 통해 행의 개수가 변경되는 경우 추가/삭제 이벤트는 발생하지 않고 [onRowCountChanged](/api/LocalDataProvider/onRowCountChanged) 이벤트만 발생한다.

#### Syntax

> function setRowCount(newCount, fillFieldDefaults, defaultValues, rowState)

#### Parameters

> **newCount**  
> Type: number  
> 행의 개수. 

> **fillFieldDefaults**  
> Type: boolean  
> Default: false  
> true면 [DataField](/api/types/DataField/).defaultValue로 새로 추가되는 행들의 값을 초기화한다.

> **defaultValues**  
> Type: Array  
> Default: null  
> null이 아닌 배열을 지정하면 이 값들로 새로 추가되는 행들의 값을 초기화 한다.  

> **rowState**  
> Type: [RowState](/api/types/RowState)  
> Default: "none"   
> 새로 추가되는 행들의 rowState이다.


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
    dataProvider.setRowCount(100, false, null,"none");
</pre>

