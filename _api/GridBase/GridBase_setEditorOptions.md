---
layout: apipost
title: setEditorOptions
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/setEditorOptions/
---


#### Description

> 에디터 표시 정보를 설정한다. [EditorOptions](/api/types/EditorOptions/)이 설정 모델이다.  
> date 에디터의 표시형태를 변경하는 경우 달력 팝업이 최초 실행(생성)되기 전에 먼저 설정되어야 한다.  
> (한번 실행되고난 후 중간에 변경할 수 없음)  

#### Syntax

> function setEditorOptions(options)

#### Parameters

> **options**  
> Type: object  
> [EditorOptions](/api/types/EditorOptions/) 모델과 같은 설정 정보. [EditorOptions](/api/types/EditorOptions/) 중 변경하고자 하는 속성만 전달하면 된다.    

#### Return value

> None.

#### Example

<pre class="prettyprint">
    grid.setEditorOptions({
        yearDisplayFormat: "{Y}년",                                                // "{Y} Year"
        monthDisplayFormat: "{M}월",                                               // "{M} Month"  
        months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],  // ['Jan', 'Feb, 'Mar', 'Apr'....]   
        weekDays: ["일", "월", "화", "수", "목", "금", "토"]                          ['SUN', 'MON', 'TUE', 'WED'....]  
    });
</pre>

