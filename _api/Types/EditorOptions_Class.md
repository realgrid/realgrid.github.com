---
layout: apipost
title: EditorOptions
part: Types
typename: Classes
order: EditorOptions
objectname: 
directiontype: 
permalink: /api/types/EditorOptions/
jsonly: true
tags: 
  - EditorOptions
  - 에디터옵션
  - 달력수정
  - 요일수정
---

#### Description

> 그리드 수준에서 관리되는 에디터 정보들에 대한 설정 모델이다.  

#### Properties

> **yearDisplayFormat**  
> Type: String   
> Default: "{Y}년"      
> 달력 팝업에 표시되는 년의 표시형태를 지정한다. "년"에 대한 문구만 수정 가능하다.    
> ex) "{Y} Year"  

> **monthDisplayFormat**    
> Type: String     
> Default: "{M}월"     
> 달력 팝업에 표시되는 월의 표시형태를 지정한다. "월"에 대한 문구만 수정 가능하다.  
> month 속성이 지정되면 monthDisplayFormat 속성은 무시된다.  
> ex) "{M} Month"    

> **months**    
> Type: Array of String     
> Default: Null   
> 달력 팝업에 표시되는 월의 표시형태를 지정한다.   
> ex) ['Jan', 'Feb, 'Mar', 'Apr'....]    

> **weekDays**  
> Type: Array of String     
> Default: Null   
> 달력 팝업에 표시되는 요일의 표시형태를 지정한다.   
> ex) ['SUN', 'MON', 'TUE', 'WED'....]   

#### Examples   

<pre class="prettyprint">
    gridView.setEditorOptions({
        yearDisplayFormat:"{Y}년",   // "{Y} Year"
        //monthDisplayFormat:"{M}월",  // "{M} Month"  
        months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],  // ['Jan', 'Feb, 'Mar', 'Apr'....]   
        weekDays: ["일", "월", "화", "수", "목", "금", "토"] // ['SUN', 'MON', 'TUE', 'WED'....]  
    });
</pre>

#### See Also

> [DateCellEditor](/api/types/DateCellEditor/)
> [getEditorOptions](/api/GridBase/getEditorOptions/)   
> [setEditorOptions](/api/GridBase/setEditorOptions/)   
 