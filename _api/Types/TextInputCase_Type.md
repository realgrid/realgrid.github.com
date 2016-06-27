---
layout: apipost
title: TextInputCase
part: Types
typename: Constants
order: TextInputCase
objectname: 
directiontype: 
permalink: /api/types/TextInputCase/
tags: 
  - 대소문자
  - 툴팁
---


#### Description

 에디터에 입력되는 값을 모두 대문자로, 소문자로, 입력하는대로 변환 설정
  
#### Properties

> **NORMAL**  
> Value: "normal"  
> 입력되는대로 표시한다.  

> **UPPER**  
> Value: "upper"  
> 모두 대문자로 표시한다.  

> **LOWER**  
> Value: "lower"  
> 모두 소문자로 표시한다.  

> **DEFAULT**   
> Value: "default"  
> editor가 이 값이면 컬럼의 textInputCase 값을 따른다.  

#### Examples

<pre class="prettyprint">
var column = gridView.columnByName("col1");
column.editor = {
    textCase: "upper"
};
gridView.setColumn(column)
</pre>

---

#### Demo Links

* [Editors](http://demo.realgrid.com/Demo/Editors)  
