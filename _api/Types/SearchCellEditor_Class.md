---
layout: apipost
title: SearchCellEditor
part: Types
typename: Cell Editors
order: SearchCellEditor
objectname: 
directiontype: 
permalink: /api/types/SearchCellEditor/
---


#### Description

> 드롭다운 에디터에서 검색이 필요할때 사용하는 편집기이다. 

#### Properties

> **searchLength**    
> Type: Number    
> Default: 1    
> 검색 시작에 필요한 최소 글자 수를 지정한다.     

> **searchDelay**    
> Type: Number    
> Default: 1000    
> 마지막 키 입력이 완료된 후 검색이 시작될때까지의 시간을 지정한다. 단위는 밀리초(millisecond)이다.

> **dropDownCount**    
> Type: Number    
> Default: 8    
> 표시될 목록의 수를 지정한다.    

> **useCtrlEnterKey**    
> Type: boolean    
> Default: False     
> Version Type: JS Only     
> searchLength, searchDelay와 관계없이 Ctrl+Enter 키 입력으로 즉시 onEditSearch이벤트 발생  

> **useEnterKey**    
> Type: boolean    
> Default: False        
> Version Type: JS Only     
> searchLength, searchDelay와 관계없이 Enter 키 입력으로 즉시 onEditSearch이벤트 발생, 목록이 비어 있는 경우만 동작  

