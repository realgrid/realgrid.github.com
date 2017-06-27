---
layout: apipost
title: ShadowDomEditorOptions
part: Types
typename: Classes
order: ShadowDomEditorOptions
objectname: 
directiontype: 
permalink: /api/types/ShadowDomEditorOptions/
jsonly: true
versions:
  - JS 1.1.24+
tags:
    - 웹접근성
    - 시각장애인지원
    - ShadowDom
---

#### Description

 웹 접근성 지원을 위해 편집기와 관련된 각 명칭을 지정한다.      

#### Properies

> **yearText**  
> Type: string    
> Default: "년도"  
> 년도의 표시명을 지정한다.     

> **monthText**  
> Type: string    
> Default: "월"  
> 월의 표시명을 지정한다.     

> **dayText**  
> Type: string    
> Default: "일자"  
> 일자의 표시명을 지정한다.     

> **ampmText**  
> Type: string    
> Default: "오전/오후"  
> 오전/오후의 표시명을 지정한다.  

> **amText**  
> Type: string    
> Default: "오전"  
> 오전의 표시명을 지정한다.    

> **pmText**  
> Type: string    
> Default: "오후"  
> 오후의 표시명을 지정한다.    

> **hourText**  
> Type: string    
> Default: "시"  
> 시의 표시명을 지정한다.     

> **minuteText**  
> Type: string    
> Default: "분"  
> 분의 표시명을 지정한다.     

> **secondText**  
> Type: string    
> Default: "초"  
> 초의 표시명을 지정한다.     

> **validationMessage**  
> Type: string    
> Default: "잘못된 입력입니다."  
> 키 입력시 잘못된 입력에 대한 표시명을 지정한다.     

#### Examples

**입력 에러 표시명 바꾸기**

<pre class="prettyprint">
var options = gridView.getShadowDomOptions();
options.editor["validationMessage"] = "잘못 입력하셨습니다. 입력 취소후 다시 시도해주세요.";

gridView.setShadowDomOptions(options);
gridView.resetShadowDom();
</pre>

---

#### API Links

* [GridBase.getShadowDomOptions()](/api/GridBase/getShadowDomOptions/)
* [GridBase.getShadowDomOptions()](/api/GridBase/getShadowDomOptions/)

#### Demo Links
