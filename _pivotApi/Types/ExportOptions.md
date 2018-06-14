---
layout: apipost
title: SummaryOptions
part: Types
typename: Classes
order: SummaryOptions
objectname: 
directiontype: 
permalink: /pivotApi/types/SummaryOptions/
tags: 
  - 익스포트
  - export
  - 옵션
---

#### Description

화면에 표시되는 요약영역과 관련된 옵션을 설정하는 모델이다.  

#### Properties

> **target**  
> Type: string, "local" | "remote"  
> Default: "local"    
> 문서를 로컬에 직접 저장할 지 (IE 9이하 버전은 불가), 서버를 경유해서 저장할 지를 지정한다. 

> **url**   
> Type: string         
> Default: null   
> 그리드가 내보내는 문서 스트림을 전송 받은 후 다시 사용자 컴퓨터에 내려 주는 서버의 url.  

> **fileName**   
> Type: string         
> Default: null   
> export 시 저장될 파일 이름.  

> **expandAll**  
> Type: Boolean  
> Default : true
> 접혀진 그룹 하위의 모든 셀을 출력할것인지의 여부 

> **datetimeFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 출력할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  
> JS Ver.만 지원  

> **booleanFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 datetime 필드의 값을 출력할 때 변환 형식으로 사용된다. 지정되지 않은 경우 데이터필드에 설정된 값을 사용한다.  
> JS Ver.만 지원  

> **numberFormat**  
> Type: string  
> Default: undefined  
> 이 값이 지정되면 number 필드의 값을 출력할 때 변환 형식으로 사용된다. 지정되지 않은 경우 column.styles에 설정된 값을 사용한다.  

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
> Default: true  
> css style을 출력 문서에 반영할 지의 여부  

### Example  

<pre class="prettyprint">
gridView.exportGrid({
    target: "local",
    fileName: "PivotExport.xlsx"
});
---


