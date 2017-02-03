---
layout: apipost
title: LineCellEditor
part: Types
typename: Cell Editors
order: LineCellEditor
objectname: 
directiontype: 
permalink: /api/types/LineCellEditor/
tags:
  - 라인텍스트편집기
---


#### Description

 한 줄 입력을 받을 수 있는 텍스트 편집기다. RealGrid의 기본편집기 이므로 컬럼에 `editor`속성을 지정하지 않으면 LineCellEditor가 사용된다.


#### Properties

> **maxLength**  
> Type: Number  
> Default: 0  
> 사용자가 입력할 수 있는 문자의 최대 개수. 0으로 지정하면 제한이 없다.  

> **textCase**  
> Type: String  
> Default: [TextInputCase](/api/types/TextInputCase).DEFAULT  
> 편집기에 입력되는 문자를 자동으로 대소문자로 변경한다. [TextInputCase](/api/types/TextInputCase)에 지정할 수 있는 값들이 선언되어 있다. [TextInputCase](/api/types/TextInputCase).DEFAULT로 지정하면 컬럼의 textInputCase에 지정한 값을 따르게 된다.  

> **mask**  
> Type: [Mask](/api/types/Mask)     
> Default: null  
> 입력 마스크를 지정한다.  
> JS ver 1.1.22부터 지원된다. 

#### Examples   

<pre class="prettyprint">
var columns = [{
  fieldName: "fieldName",
  name: "name",
  editor {
    type: "text",
    mask: "9999-99-99",
    displayRegExp..
    displayReplace...
  }
}, { 
  fieldName: "date", 
  name: "date", 
  editor:{
    type: "date", 
    mask:{
      editMask: "9999-99-99",  
      includedFormat: true,
      overWrite: true 
    }, 
    datetimeFormat:"yyyy-MM-dd" 
  }, 
  styles:{
    datetimeFormat:"yyyy-MM-dd"
  }
}];

gridView.setColumns(columns);
</pre>  