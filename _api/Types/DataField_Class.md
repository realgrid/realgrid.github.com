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
> 그룹 헤더 타이틀, RowGrouping시 그룹 헤더의 타이틀에 기준필드의 헤더 값을 표시할 수 있다. [RowGrouping](http://demo.realgrid.com/RowGroup/RowGrouping/)참조

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

> **calculateExpression**   
> Type: string   
> Calculate Field로 사용할 경우 사용될 수식을 지정한다. values['필드명'], values[필드인덱스]로 참조한다.  

> **calculateCallback**   
> Type: function   
> Calculate Field로 사용할 경우 사용될 수식을 지정한다. 해당 필드에서 계산될 Function 을 지정한다.  

> **comparer**   
> Type: function   
> 값 비교시 사용될 Function 을 지정한다.    


#### Examples   

<pre class="prettyprint">
fields = [{
    "fieldName": "OrderID",
    "dataType": "number"
}, {
    "fieldName": "CustomerID",
    //텍스트 필드의 숫자들을 소팅시 숫자처럼 적용되게 처리.
    "comparer" : function(field, row1, row2) {
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
    }
}, {
    "fieldName": "EmployeeID"
}, {
    "fieldName": "OrderDate",
    "dataType": "datetime"
}, {
    "fieldName": "CompanyName"
}, {
    "fieldName": "ProductName"
}, {
    "fieldName": "Quantity",
    "dataType": "numeric"
}, {
    "fieldName": "UnitPrice",
    "dataType": "numeric"
}, {
    "fieldName": "Price",
    "dataType": "numeric",
    "calculateExpression": "values['Quantity'] * values['UnitPrice']"
}, {
    "fieldName": "Price2",
    "dataType": "numeric",
    "calculateCallback": function (dataRow, fieldName, fieldNames, values) {
        var quantity = values[fieldNames.indexOf("Quantity")];
        var unitprice = values[fieldNames.indexOf("UnitPrice")];
        if (isNaN(quantity) || isNaN(unitprice))
            return undefined;
        else
            return quantity >= 1000 ? Math.round(quantity * unitprice * 0.95) : quantity * unitprice;
    }
}];

dataProvider.setFields(fields);
</pre>

---

#### API Links

* [setFields](/api/DataProvider/setFields/) 

#### Demo Links

* [Data Type](http://demo.realgrid.com/DataManager/DataType/) 
* [Boolean Field](http://demo.realgrid.com/DataManager/BooleanField/) 
* [Datetime Field](http://demo.realgrid.com/DataManager/DatetimeField/) 
* [Subtypes](http://demo.realgrid.com/Demo/Subtypes)