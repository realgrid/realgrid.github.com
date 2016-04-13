---
layout: apipost
title: DataField
part: Types
typename: Classes
order: DataField
objectname: 
directiontype: 
permalink: /api/types/DataField/
tags: 
    - 필드
    - datafield
    - field
---


#### Properties

> **fieldName**      
> Type: string         
> 필드명  

> **dataType**       
> Type: [DataType](/api/types/DataType)   
> Default: DataType.TEXT   
> 자료형        

> **subtype**  
> Type: [SubDataType](/api/types/SubDataType)   
> 기본 자료형을 제한된 범위로 사용하기 위한 지시자  

> **subTypeEnabled**   
> Type: Boolean  
> DataField의 SubDataType기능의 사용여부를 지정한다.   

> **min** 또는 **minimum**  
> Type: number \| datetime  
> 최소 범위의 한계값   

> **max** 또는 **maximun**   
> Type: number \| datetime   
> 최대 범위의 한계값   

> **set**     
> Type: Array    
> 배열에 포함된 값이 아니면 undefined로 저장되게 한다. Boolean 자료형을 제외한 나머지 자료형에서 사용가능하다.    

> **length**  
> Type: Number   
> Default: 10   
> 데이터 길이   

> **baseField**   
> Type: string   
> 기준 필드의 이름, RowGrouping시    

> **header**     
> Type: string   
> 그룹 헤더 타이틀, RowGrouping시 그룹 헤더의 타이틀에 기준필드의 헤더 값을 표시할 수 있다. [RowGrouping](http://demo.realgrid.com/Demo/RowGrouping)참조

> **defaultValue**     
> Type: Object   
> 필드의 기본 데이터 값을 지정한다. 기본값을 지정하면 [GridView.beginInsertRow()](/api/GridView/beginInsertRow/), [GridView.beginAppendRow()](/api/GridView/beginAppendRow/)함수 호출시 지정된 기본값이 입력된 상태로 새로운 행이 추가된다.   

> **required**     
> Type: Boolean   
> 데이터 필수 여부를 지정한다.   

> **updatable**     
> Type: Boolean   
> 데이터의 변경 가능 여부를 지정한다.   

> **booleanFormat**     
> Type: string   
> Boolean형 데이터의 입력 방식을 지정한다.  

> **datetimeFormat**   
> Type: string   
> 날짜형 데이터의 입력 방식을 지정한다.   

> **amText**    
> Type: string   
> 오전 시간의 데이터 입력 방식을 지정한다.   

> **pmText**    
> Type: string   
> 오후 시간의 데이터 입력 방식을 지정한다.   

> **baseYear**   
> Type: string   
> 년도 값이 100보다 작을 경우 기준 년도. 기본값은 2000   

#### Examples   

<pre class="prettyprint">
    fields = [{
        "fieldName": "OrderID",
        "dataType": "text"
    }, {
        "fieldName": "OrderDate",
        "dataType": "datetime"
    }, {
        "fieldName": "UnitPrice",
        "dataType": "number"
    }];
 
    dataProvider.setFields(fields);
</pre>

#### Demo Links

> [Data Type](http://demo.realgrid.com/Demo/DataType) 참조  
> [Boolean Field](http://demo.realgrid.com/Demo/BooleanField) 참조  
> [Datetime Field](http://demo.realgrid.com/Demo/DatetimeField) 참조  
> [Subtypes](http://demo.realgrid.com/Demo/Subtypes) 참조  
 
> [setFields](/api/DataProvider/setFields/)   
