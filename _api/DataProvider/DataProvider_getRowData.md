---
layout: apipost
title: getRowData
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/getRowData/
deprecated: true
---


#### Description

 지정한 데이터행의 값들을 JSON 객체로 가져온다.  
 deprecated 대상입니다.   
 [getJsonRow](/api/LocalDataProvider/getJsonRow/)를 사용하세요.  


#### Syntax

> function getRowData(row)

#### Parameters

> **row**  
> Type: number  
> 행 번호  

#### Return value

> Type: object.  
> JSON 객체로 만들어진 데이터행의 값.  

#### Examples 

<pre class="prettyprint">
    var row = provider.getRowData(19);
</pre>


