---
layout: apipost
title: DataProviderExportOptions
part: Types
typename: Classes
order: DataProviderExportOptions
objectname: 
directiontype: 
permalink: /api/types/DataProviderExportOptions/
jsonly: true
versions:
    - JS 1.1.27+
tags:
  - CSVExportOptions
  - CSV옵션
  - CSV익스포트옵션   
---

#### Description

 화면에 표시되는 그리드를 데이터프로바이더 수준에서 엑셀 등의 외부 문서로 내보기할 때 지정하는 설정 모델.

#### Properties

> **target**  
> Type: string  
> Default: "remote"   
> 문서를 로컬에 직접 저장할 지 혹은, 서버를 경유해서 저장할 지를 지정한다. "remote"와 "local"을 지정할 수 있다.

> **url**   
> Type: string         
> Default: null   
> 그리드가 내보내는 문서 스트림을 전송 받은 후 다시 사용자 컴퓨터에 내려 주는 서버의 url.  

> **fileName**   
> Type: string         
> Default: null   
> export 시 저장될 파일 이름.  

> **datetimeFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 출력할 때 변환 형식으로 사용된다.   

> **datetimeCallback**   
> Type: function (dataRow, fieldName, value)   
> Default: undefined   
> datetime 필드 출력시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **booleanFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 출력할 때 변환 형식으로 사용된다.   

> **booleanCallback**   
> Type: function (dataRow, fieldName, value)   
> Default: undefined   
> boolean 필드 출력시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **numberFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 number 필드의 값을 출력할 때 변환 형식으로 사용된다.   

> **numberCallback**   
> Type: function (dataRow, fieldName, value)   
> Default: undefined   
> number 필드 출력시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **start**  
> Type: number    
> Default: 0  
> export를 시작할 행을 지정한다.   
> LocalDataProvider인 경우에만 적용된다.   

> **count**  
> Type: number  
> Default: -1  
> export할 행 수를 지정한다. -1을 지정하면 모든 행이 export된다.    
> LocalDataProvider인 경우에만 적용된다.   

> **lfText**  
> Type: string  
> Default: undefined  
> data에 lf(Line Feed)가 있는 경우 치환할 문자열을 지정한다.     

> **crText**  
> Type: string  
> Default: undefined  
> data에 cr(Carriage Return)가 있는 경우 치환할 문자열을 지정한다.    

> **seperator**  
> Type: string  
> Default: ','  
> 구분자를 지정한다.     

> **exportFields**  
> Type: array of string  
> Default: undefined  
> export할 필드를 지정한다. 지정하지 않은 경우 모든 필드가 export 된다.       

> **hideFields**  
> Type: array of string  
> Default: undefined  
> export시 제외할 필드를 지정한다. exportFields와 동시에 사용할 수 없다.  

> **includeFieldNames**  
> Type: boolean   
> Default: false    
> fieldName을 포함 여부를 지정한다.        

### Example  

<pre class="prettyprint">
dataProvider.exportToCsv({
    target: "local",
    fileName: "ExportSample.csv"
});
</pre>

---

#### API Links

* [exportToCsv](/api/DataProvider/exportToCsv/)
