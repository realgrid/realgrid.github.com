---
layout: apipost
title: ExportOptions
part: Types
typename: Classes
order: ExportOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/ExportOptions/
tags:
  - ExcelExportOptions
  - 엑셀옵션
  - 엑셀익스포트옵션   
---

#### Description

 화면에 표시되는 그리드를 엑셀 외부 문서로 내보기할 때 지정하는 설정 모델.

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

> **start**  
> Type: number    
> Default: 0  
> export를 시작할 행을 지정한다.    

> **count**  
> Type: number  
> Default: -1  
> export할 행 수를 지정한다. -1을 지정하면 모든 행이 export된다.    

> **showProgress**  
> Type: boolean  
> Default: false  
> Export시 프로그래스 바 표시 여부를 지정한다.     

> **progressMessage**  
> Type: string  
> Default: "Exporting..."  
> Export시 프로그래스 바에 표시될 메시지를 지정한다.    

> **applyCssStyles**  
> Type: boolean  
> Default: false  
> CSS Styles을 적용하여 Export할 것인지를 지정한다.   

> **done**  
> Type: function(){}  
> Default: null  
> 피벗그리드의 데이터 스트림 전송이 끝난 이후에 발생한다.    

### Example  

<pre class="prettyprint">
pivot.exportGrid({
    target: "local",
    fileName: "gridExportSample.xlsx"
});
</pre>

---

#### API Links

* [exportGrid](/api/GridBase/exportGrid/)

#### Demo Links

* [Export to Excel File](http://demo.realgrid.com/Excels/ExcelExport/) 