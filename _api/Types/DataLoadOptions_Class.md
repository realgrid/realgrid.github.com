---
layout: apipost
title: DataLoadOptions
part: Types
typename: Config Classes
order: DataLoadOptions
objectname: 
directiontype: 
permalink: /api/types/DataLoadOptions/
---

#### Description

> 데이터 로드에 관련된 옵션 값을 정의합니다. 

#### Properties

> **type**         
> Type: String    
> Default: "json"   
> 전달받을 데이터의 포맷, "json" or "xml" or "csv"    

> **url**          
> Type: String    
> 데이터를 요청할 url 주소         

> **method**       
> Type: String    
> Default: "get"    
> 파라메터를 전달하는 방법, "get" or "post"         

> **params**       
> Type: Object    
> Request로 전달할 parameter set   

> **progress**  
> Type: Boolean   
> Default: true     
> 데이터 받는중 진행상태 표시 여부  

> **rows**         
> Type: String    
> Default: "row"    
> 데이터 중에서 row element나 array 요소의 이름.  

> **rootArray**         
> Type: Boolean   
> Default: true    
> 데이터 소스의 최상위가 Array인지의 여부.  

> **count**   
> Type: Number  
> Default: -1  
> 그리드에 불러올 행의 갯수. -1 일 경우 모든 행을 불러온다.  

> **fillMode**  
> Type: String ("set" \| "append" \| "insert" \| "update")  
> Default: "set"  
> Data provider에 행을 채우는 방법  
> set : 0행부터 데이터 행 개수만큼 채움 (기존의 데이터는 무시)  
> append : 현재 존재하는 마지막 행의 뒤로 데이터 추가  
> insert : fillPos위치에 데이터 삽입  
> update : fillPos위치부터 기존 데이터를 대체. 추가할 데이터는 남아있는데 이미 마지막행일 경우는 append와 같이 뒤로 추가한다   

> **fillPos**  
> Type: Number  
> Default: 0  
> fillMode가 in  sert거나 update일때 시작되는 행  

> **filters**  
> Type: Array of Expression   
> 적용할 필터들  

> **filterMode**  
> Type: [DataFilterMode](/api/types/DataFilterMode)  
> 필터의 동작 모드를 지정한다.  

> **header**  
> Type:   

> **clientPolicy**  
> Type: [LoadPolicyType](/api/types/DataFilterMode)  
> Default: ERROR  
> 데이터 로드 정책을 결정한다.  

> **start**  
> Type: Number  
> Default: 0  
> Type이 csv일때만 사용가능, 데이터에서 해더등을 제외한 실제 데이터 시작 line(0부터 시작)  

> **quoted**  
> Type: Boolean  
> Default: false  
> Type이 csv일때만 사용가능, 각 셀의 데이터가 double-quotation mark(")로 감싸여져 있는지의 여부  

> **delimiter**  
> Type: String  
> Default: ","  
> Type이 csv일때만 사용가능, 구분자를 지정한다.  

> **parent**  
> Type: Number  
> TreeProvider만 사용가능, parent row id  

> **tree**  
> Type: String  
> TreeProvider만 사용가능, tree field  

> **children**   
> Type: String  
> TreeProvider만 사용가능, children field  

> **icon**  
> Type: String  
> TreeProvider만 사용가능, icon field  

> "parent**  
> Type: Number  
> TreeProvider만 사용가능, Parent Row Id를 지정한다.  

> **sorting**  
> Type: Boolean  
> TreeProvider만 사용가능, 소트가 필요할 경우 true를 지정한다.  

