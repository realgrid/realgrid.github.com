---
layout: apipost
title: checkItems
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/checkItems/
tags:
  - check
  - checkItems
---


#### Description

 입력된 아이템배열에 해당하는 아이템을 체크하거나 해제한다.  

#### Syntax

> function checkItems(items, checked, checkEvent)  

#### Parameters

> **items**  
> Type: Array of Number  
> 아이템 Index배열을 입력한다.  

> **checked**  
> Type: Boolean  
> Default: true  
> true를 입력하면 items로 입력된 아이템배열에 해당하는 아이템을 체크한다. false로 입력하면 체크를 해제한다.  

> **checkEvent**  
> Type: Boolean  
> Default: true  
> onItemsChecked()의 발생 여부를 지정한다.  
> ver 1.1.20부터 지원된다.     


#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
    gridView.checkItems([0,1,2,3],true);    
</pre>

---

#### API Links

* [checkAll](/api/GridBase/checkAll)
* [checkItem](/api/GridBase/checkItem)
* [setCheckable](/api/GridBase/setCheckable)
* [setCheckableExpression](/api/GridBase/setCheckableExpression) 

#### Demo Links

* [CheckBar Demo](http://demo.realgrid.com/GridComponent/CheckBar/)