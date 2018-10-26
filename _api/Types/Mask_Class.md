---
layout: apipost
title: Mask
part: Types
typename: Classes
order: Mask
objectname: 
directiontype: 
jsonly: true
permalink: /api/types/Mask/
versions:
  - JS 1.1.22+
tags: 
  - Mask
  - 마스크
---

#### Description

 텍스트와 날짜 필드에 마스크를 적용할 수 있다.(숫자 필드는 editFormat 사용)
 mask에 적용된 형식은 편집기에만 표시된다.  
 따라서 텍스트 필드의 경우 Cell에 display하기 위해서는 displayRegExp등을 이용해서 적절히 가공해야 한다.  
 날짜 필드의 경우 editMask, editor.datetimeFormat, styles.datetimeFormat의 형식을 일치시켜야 하며 includedFormat:true를 이용해서 구분자까지 그대로 셀로 전달이 되어야 날짜 데이터가 정상적으로 처리된다.    

 dropDown, multiLine, multiCheck, number 에디터 등에서는 동작하지 않는다.  

#### Properties

> **editMask**  
> Type: String   
> Default: null     
> "0000-00-00"등 표시되는 형식을 지정한다.   
> 기본적으로 제공하는 형식은 아래와 같다.   
> "9": new RegExp("[0-9 ]")  
> "0": new RegExp("[0-9]")  
> "a": new RegExp("[A-Za-z]")  
> "*": new RegExp("[A-Za-z0-9]")  

> **includedFormat**  
> Type: Boolean  
> Default: false    
> 편집기에 표시된 내용이 그대로 셀값으로 전달된다.  

> **placeHolder**  
> Type: String  
> Default: null    
> "yyyy-MM-dd"와 같이 편집기에 표시되는 형식을 지정한다. 입력될 문자와 동일해서는 안된다.   

> **definitions**  
> Type: Object   
> Default:  null     
> 기본적으로 제공되는 "9", "0", "a", "*"외에 개발자가 추가로 정의하고 싶은 경우 사용한다.  
> ex) definitions: {"h":"[a-h]"}     //"h"는 a~h까지 입력 가능하다.  

> **invalidFormatMessage**  
> Type: String   
> Default: "잘못된 입력 유형입니다."     
> 잘못된 형식이 입력되었을때 표시할 메시지를 지정한다.  

> **showInvalidFormatMessage**  
> Type: Boolean  
> Default: true    
> 잘못된 형식이 입력되었을때 메시지 표시 유무를 지정한다.    

> **overWrite**  
> Type: Boolean  
> Default: false    
> 입력시 기존 문자를 덮어쓰기 할 것인지의 여부를 지정한다.      

> **allowEmpty**  
> Type: Boolean  
> Default: false    
> mask가 0로 설정된 경우 빈값 ""의 허용여부를 지정한다. ex) "0000-00-00" 지정시 "" 지정 가능.   
> RealGridJS 1.1.26 부터 지원한다.          

<a name="restrictNull"></a>
> **restrictNull**  
> Type: Boolean  
> Default: false    
> true로 설정하면 중간부터 입력되지 않는다.   
> RealGridJS 1.1.30 부터 지원한다.          


#### Examples   

<pre class="prettyprint">
var columns = [{
    fieldName: "fieldName",
    name: "name",
    editor: {
        type: "text",
        mask: "9999-99-99"
    },
    displayRegExp..
    displayReplace...
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

