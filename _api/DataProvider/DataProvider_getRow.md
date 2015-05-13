---
layout: apipost
title: getRow
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getRow/
deprecated: true
---


#### Description

> 지정한 데이터행의 값들을 JSON 객체로 가져온다.  
> deprecated 대상입니다.   
> 대신 [getJsonRow](/api/DataProvider/getJsonRow/)를 사용하세요. 


#### Syntax

> function getRow(row)

#### Parameters

> **row**  
> Type: number  
> 행 번호  

#### Return value

> Type: object.  
> JSON 객체로 만들어진 데이터행의 값.  

#### Example

<pre class="prettyprint">
    var row = provider.getRow(19);
</pre>


