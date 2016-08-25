---
layout: apipost
title: GridExportOptions
part: Types
typename: Classes
order: GridExportOptions
objectname: 
directiontype: 
permalink: /api/types/GridExportOptions/
tags:
  - ExcelExportOptions
  - 엑셀옵션
  - 엑셀익스포트옵션   
---

#### Description

 화면에 표시되는 그리드를 엑셀 등의 외부 문서로 내보기할 때 지정하는 설정 모델.

#### Properties

> **type**  
> Type: string  
> Default: "excel"  
> 내보내기 문서 타입.   

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

> **linear**   
> Type: boolean         
> Default: false   
> 컬럼 그룹을 해제하고 export 할 것인지의 여부.  

> **allItems**  
> Type: Boolean  
> 감춰진 모든 행을 출력할것인지의 여부 

> **indicator**   
> Type: string   
> Default: "default"   
> 그리드 [Indicator](/api/types/Indicator/) 영역을 문서에 포함할 것인 지를 지정한다. "default"이면 현재 그리드에 표시된 상태를 따르고, "visible"이면 무조건 포함하고, "hidden"이면 무조건 포함시키지 않는다.   

> **header**   
> Type: string   
> Default: "default" 
> 그리드 [Header](/api/types/Header/) 영역을 문서에 포함할 것인 지를 지정한다. "default"이면 현재 그리드에 표시된 상태를 따르고, "visible"이면 무조건 포함하고, "hidden"이면 무조건 포함시키지 않는다.   

> **footer**   
> Type: string   
> Default: "default"   
> 그리드 [Footer](/api/types/Footer/) 영역을 문서에 포함할 것인 지를 지정한다. "default"이면 현재 그리드에 표시된 상태를 따르고, "visible"이면 무조건 포함하고, "hidden"이면 무조건 포함시키지 않는다.

> **indenting**   
> Type: boolean   
> Default: true   
> 행 그룹핑된 자료를 export 시 들여쓰기 여부를 지정한다.

> **showConfirm**  
> Type:Boolean  
> Default: true  
> 메세지 상자를 표시한다.  

> **confirmMessage**  
> Type: string  
> Default: "Excel 문서로 저장하시겠습니까?"
> 메세지 상자에 표시될 문자열을 입력한다.  

> **confirmTitle**  
> Type: string  
> Default: "Excel 저장"
> 메세지 상자에 표시될 Title을 입력한다.  

> **lookupDisplay**  
> Type: boolean  
> column의 lookupDisplay 값을 표시된 값으로의 저장 여부  

> **datetimeFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 출력할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

> **booleanFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 출력할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  

> **datetimeCallback**   
> Type: function (index, column, value)   
> Default: undefined   
> datetime 필드 출력시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **booleanCallback**   
> Type: function (index, column, value)   
> Default: undefined   
> boolean 필드 출력시 수행될 콜백함수를 지정한다. 원하는 형태로 지정 가능하다.   

> **nullDateText**  
> Type: string  
> Default: ""  
> DateTime 필드의 값이 null 일때 표현되는 값을 지정한다. 

> **numberFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 number 필드의 값을 출력할 때 변환 형식으로 사용된다. 지정되지 않은 경우 column.styles에 설정된 값을 사용한다.  

> **compatibility**  
> Type: boolean  
> Default: false  
> excel 2007 호환 여부를 지정한다.  

> **showLevelOutLine**  
> Type: boolean      
> Default: true  
> row grouping 된 자료를 export시 엑셀 왼쪽에 위치한 그룹간 묶음선 표시여부를 지정한다.

> **documentTitle**  
> Type: number    
> Default: 0  
> export를 시작할 행을 지정한다.    

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

> **applyDynamicStyles**  
> Type: boolean  
> Default: false  
> DynamicStyles을 적용하여 Export할 것인지를 지정한다.     

### Example  

<pre class="prettyprint">
gridView.exportGrid({
    type: "excel",
    target: "local",
    fileName: "gridExportSample.xlsx",
    indicator: "default",
    header: "visible",
    footer: "hidden"
});
</pre>

---

#### API Links

* [exportGrid](/api/GridBase/exportGrid/)

#### Demo Links

* [Export to Excel File](http://demo.realgrid.com/Demo/ExportToExcel) 