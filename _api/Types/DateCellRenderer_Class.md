---
layout: apipost
title: DateCellRenderer
part: Types
typename: Cell Renderers
order: DateCellRenderer
objectname: 
directiontype: 
permalink: /api/types/DateCellRenderer/
---

#### Description

> 날짜를 입력할때 사용하는 에디터이다. 달력 팝업를 표시해서 날짜를 선택할 수 있다.  
RealGridJS V1.0.12 버전 부터는 달력 팝업에 표시되는 달력의 년, 월이나 요일의 표시 문구를 GridBase.setEditorOptions()(문서추가예정)을 통해 개발자가 원하는 대로 바꿀 수 있다. (ex 월, 화, 수... -> Mon, Tue, Wed...) 

#### Properties

> **textReadOnly**  
> Type: Boolean  
> Default: false  
> true이면 키보드로 입력이 안되고 선택만 가능하게 된다.  

> **yearNavigation**  
> Type: Boolean  
> Default: false  
> 달력 팝업에 년도이동버튼이 표시된다.    

> **commitOnSelect**  
> Type: Boolean  
> Default: true   
> 선택하였을때 commit 여부를 지정한다.  

> **editFormat**  
> Type: String   
> Default: null   
> 에디터에 직접 입력할때의 포맷을 지정한다.  