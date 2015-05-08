---
layout: apipost
title: endUpdate
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/endUpdate/
---


#### Description

> [DataProvider beginUpdate()](/api/DataProvider/beginUpdate/)를 호출하면 endUpdate()가 호출될 때까지 DataProvider에 변경이 이루어질 때마다 관련 이벤트들이 발생하지 않고, endUpdate() 내에서 갱신 요구 이벤트가 한 번 발생하게 된다.. 예를 들어 [LocalDataProvider addRow](/api/LocalDataProvider/addRow/), [DataProvider updateRow](/api/DataProvider/updateRow)등을 연속해서 많이 호출한다거나, [LocalDataProvider addRows\|addRows](/api/LocalDataProvider/addRows/), [LocalDataProvider updateRows](/api/LocalDataProvider/updateRows/)등으로 수백건 이상의 많은 행을 전달할 때, beginUpdate()와 endUpdate()로 감싸서 호출하면 개별 행 처리에 대한 이벤트가 발생하지 않게된다. beginUpdate/endUpdate는 중첩될 수 있는데 쌍으로 개수를 맞춰야 한다. 가장 바깥의 endUpdate()가 호출될 때 갱신 요구 이벤트가 그리드 등에 전달된다.

#### Syntax

> function endUpdate(reset)

#### Parameters

> **reset**  
> Type: boolean  
> true로 지정하면 이 Provider에 연결된 그리드 등에 갱신 요구를 전달한다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.beginUpdate();
    try {
        for (var i = 0; i < 1000; i++) {
           var values = getValues();
           provider.addRow(values);
        }
    } finally {
        provider.endUpdate();
    }
</pre>

