---
layout: apipost
title: expandModel
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/expandModel/
tags:
  - model
  - expand
  - collapse
---


#### Description

 지정한 그룹아이템 모델을 확장한다. recursive를 true로 하면 그룹에 포함된 자손그룹들도 확장된다.   
 recursive와 force를 모두 true로 입력하면 이미 확장된 그룹아이템모델의 자손그룹을 확장한다.  

#### Syntax

> function expandModel(model, recursive, force)  

#### Parameters

> **model**  
> Type: Object  
> 확장하려는 그룹아이템 모델을 입력한다.  

> **recursive**  
> Type: boolean  
> Default: false  
> true로 입력하면 자손그룹들도 모두 확장된다.  

> **force**  
> Type: boolean  
> Default : false  
> true로 입력하면 이미 확장된 그룹아이템의 자손그룹들을 모두 확장한다.  

#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
var aModel = gridView.getModel(0); 
gridView.expandModel(aModel, true, true);
</pre>

---

#### API Links

* [getModel](/api/GridBase/getModel)
* [getParentModel](/api/GridBase/getParentModel)
* [collapseModel](/api/GridBase/expandModel)  

#### Demo Links

* [ItemMoelApi](http://demo.realgrid.com/Demo/ItemModelApi)