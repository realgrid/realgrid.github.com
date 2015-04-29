---
layout: apipost
title: setOptions
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/setOptions/
---


#### Description

> DataProvider 동작에 관한 설정을 한다.

#### Syntax

> function setOptions(options)

#### Parameters

> *options*
> Type: object
> [DataProviderOptions](/api/DataProvider/)과 같은 내용의 설정 object. [DataProviderOptions](/api/DataProvider/) 중 변경하고자 하는 속성만 전달하면 된다.  

#### Return value

> None.

#### Example

<pre class="prettyprint">
    provider.setOptions({
        insertable: true,
        softDeleting: false,
        ...
    });
</pre>

