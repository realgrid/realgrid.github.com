---
layout: apipost
title: GridExportOptions
part: Types
objectname: 
directiontype: 
permalink: /api/types/GridExportOptions/
---


> 화면에 표시되는 그리드를 엑셀 등의 외부 문서로 내보기할 때 지정하는 설정 모델.

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

> **indicator** 
> Type: string 
> Default: "default" 
> 그리드 [Indicator](/api/types/) 영역을 문서에 포함할 것인 지를 지정한다. "default"이면 현재 그리드에 표시된 상태를 따르고, "visible"이면 무조건 포함하고, "hidden"이면 무조건 포함시키지 않는다.   

> **header** 
> Type: string 
> Default: "default" 
> 그리드 [Header](/api/types/) 영역을 문서에 포함할 것인 지를 지정한다. "default"이면 현재 그리드에 표시된 상태를 따르고, "visible"이면 무조건 포함하고, "hidden"이면 무조건 포함시키지 않는다.   

> **footer** 
> Type: string 
> Default: "default" 
> 그리드 [Footer](/api/types/) 영역을 문서에 포함할 것인 지를 지정한다. "default"이면 현재 그리드에 표시된 상태를 따르고, "visible"이면 무조건 포함하고, "hidden"이면 무조건 포함시키지 않는다.

> **showConfirm**
> Type:Boolean
> Default: true
> 메세지 상자를 표시한다.

> **confirmMessage**
> Type: string
> 메세지 상자에 표시될 문자열을 입력한다.

> **confirmTitle**
> Type: string
> 메세지 상자에 표시될 Title을 입력한다.

> **lookupDisplay**
> Type: Boolean
> column의 lookupDisplay 값을 표시된 값으로의 저장 여부

> **allItems**
> Type: Boolean
> 감춰진 모든 행을 출력할것인지의 여
