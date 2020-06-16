---
layout: apipost
title: setDataComparer
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/setDataComparer/
jsonly: true
versions:
  - JS 1.1.17+
---


#### Description

 특정 필드에 Javascript data comparer를 지정합니다.

#### Syntax

> function setDataComparer(field, comparer)

#### Parameters

> **field**  
> Type: number  
> 데이터필드 인덱스  

> **comparer**  
> Type: Function  
> 데이터 비교 함수  

#### Return value

> None.

#### Examples   

<pre class="prettyprint">
//텍스트 필드의 숫자들을 소팅시 숫자처럼 적용되게 처리.
dataProvider.setDataComparer("fieldName", function(field, row1, row2) {
    var val1 = dataProvider.getValue(row1,field);
    var val2 = dataProvider.getValue(row2,field);
    if (val1 === undefined || val1 === null) {
        return (val2 === undefined || val2 === null) ? 0 : -1;
    }
    if (val2 === undefined || val2 === null) {
        return 1;
    }
    try {
        var num1 = +val1;
        var num2 = +val2;
        if (isNaN(num1) || isNaN(num2)) {
            throw "error";
        }
        return num1 > num2 ? 1 : (num1 == num2 ? 0 : -1 );
    }
    catch (err) {
        return val1 > val2 ? 1 : (val1 == val2 ? 0 : -1 );
    }
})
</pre>
