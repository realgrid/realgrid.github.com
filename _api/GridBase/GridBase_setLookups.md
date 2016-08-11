---
layout: apipost
title: setLookups
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setLookups/
tags:
  - lookup
  - 계층
  - lookupData
---


#### Description

 lookup tree에서 사용할 lookup source들을 등록한다.  
 추가등록되는 lookup source가 기존것과 중복되는경우 overwrite된다.  
 ※ 기존id에 추가를 원하는 경우는 [fillLookupData](/api/GridBase/fillLookupData)()를 사용한다.  

#### Syntax

> function setLookups(sources)

#### Parameters

> **source**  
> Type: Array of Object  
> LookupSource 정보 배열  


#### Return value

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.setFields([
    { fieldName:"field1"},
    { fieldName:"field2"},
    { fieldName:"text1"},
    { fieldName:"text2"},
    ....
]);

gridView.setColumns([
    { fieldName:"field1", name:"field1", lookupDisplay:true, lookupSourceId:"field1Data", lookupKeyFields:["field1"], editor:{type:"dropDown"}},
    { fieldName:"field2", name:"field2", lookupDisplay:true, lookupSourceId:"field2Data", lookupKeyFields:["field1","field2"], editor:{type:"dropDown"}},
    { fieldName:"text1", name:"text1"},
    { fieldName:"text2", name:"text2"}
    ....
]);
/* field1의 셀을 수정하였을때 field2의 dropDown Editor의 목록이 변경되도록 컬럼 구성 */
....

gridView.setLookups([
    { id:"field1Data",
      levels:1,
      ordered: true,
      keys:["data1","data2","data3"],
      values:["데이타1","데이타2","데이타3",],
    },
    { id:"field2Data",
      levels:2,
      ordered: true,
      keys: [
        ["data1","data1_code1"],
        ["data1","data1_code2"],
        ["data1","data1_code3"],
        ["data1","data1_code4"],
        ["data2","data2_code1"],
        ["data2","data2_code2"],
        ["data3","data3_code3"],
        ["data3","data3_code4"]
      ],
      values:[
        ["데이타1_코드1"],
        ["데이타1_코드2"],
        ["데이타1_코드3"],
        ["데이타1_코드4"],
        ["데이타2_코드1"],
        ["데이타2_코드2"],
        ["데이타3_코드1"],
        ["데이타3_코드2"]
      ],
     }
]);
/* field1에서 data1을 선택하면 field2의 dropDown Editor에는 data1의 하위코드들만 보여진다. */
</pre>

---

#### API Links

* [addLookupSource](/api/GridBase/addLookupSource/)
* [clearLookupData](/api/GridBase/clearLookupData/)
* [existsLookupData](/api/GridBase/existsLookupData/)
* [removeLookupSource](/api/GridBase/removeLookupSource/)
* [fillLookupData](/api/GridBase/fillLookupData/)

#### Demo Links

* [Lookup Tree](http://demo.realgrid.com/Demo/LookupTree) 