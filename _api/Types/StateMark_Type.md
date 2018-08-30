---
layout: apipost
title: StateMark
part: Types
typename: Constants
order: StateMark
objectname: 
directiontype: 
jsonly: true  
permalink: /api/types/StateMark/
tags:
  - 상태표시
---

#### Description

 StateBar의 state 표시 방법을 정의합니다.

#### Members

> **DEFAULT**   
> Value: "default"   
> 기본 표시, 각 상태값이 +, - 등 기호로 표시 됩니다.   

> **TEXT**  
> Value: "text"   
> 각 상태 값이 개발자가 지정한 값으로 표시 됩니다.             

> **NONE**  
> Value: "none"   
> 각 상태 값이 표시되지 않는다.  

> **IMAGE**  
> Value: "none"   
> 각 상태 값이 지정한 이미지로 표시된다.   
> RealGridJS 1.1.29부터 지원된다.   
           
#### Examples

<pre class="prettyprint">
gridView.setStateBar({
    mark: "text",
    stateTexts: {
        created: "C",
        updated: "U",
        deleted: "D",
        createAndDeleted: "X"
    }
});

gridView.setStateBar({
	mark:"image", 
	stateImages: {
		created: "./image/created.png", 
		updated: "./image/updated.png",
		deleted: "./image/deleted.png", 
		createAndDeleted: "./image/createAndDeleted.png"
	}
});

gridView.setIndicator({
	mark:"image", 
	stateImages:{
		focused:   "./image/focused.png",
		inserting: "./image/inserting.png", 
		updating:  "./image/updating.png", 
		appending: "./image/appending.png"
	}
});
</pre>

---

#### Demo Links

* [StateBar](http://demo.realgrid.com/GridComponent/StateBar/)  
* [setStateBar](/api/GridBase/setStateBar/)   
* [getStateBar](/api/GridBase/getStateBar/)              
