---
layout: apipost
title: DynamicStyle
part: Types
typename: Classes
order: DynamicStyle
objectname: 
directiontype: 
permalink: /api/types/DynamicStyle/
tags:
  - DynamicStyle
  - 다아나믹스타일
  - 동적스타일
---

#### Description

> 동적 스타일을 적용할 조건과 표현식을 지정한다.

#### Properties

> **criteria**  
> Type: String   
> Default: null      
> 조건식을 설정한다.      

> **styles**  
> Type: Object  
> 스타일을 설정한다.      

#### Examples   

<pre class="prettyprint">
     gridView.setStyles({
         body:{
             dynamicStyles:[{
                 criteria:"(row mod 2) = 0",
                 styles:{
                     background:"#FFC9DAF8"
                 }
             }, {
                 criteria:"(row mod 2) = 1", 
                 styles:{
                     background:"#FF073763",
                     foreground:"#FFFFFFFF"
                 }
             }]
         }
     });
</pre>

#### Demo Links
#### See Also

#### See Also

> [Dynamic Styles on Columns](http://demo.realgrid.com/Demo/DynamicStylesColumn) 참조    
> [Dynamic Styles on Rows](http://demo.realgrid.com/Demo/DynamicStylesRow) 참조   
> [짝수, 홀수 행의 스타일을 다르게 표현하기](http://help.realgrid.com/tutorial/c3/) 참조  
 
