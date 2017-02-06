---
layout: apipost
title: StateMark
part: Types
typename: Constants
order: StateMark
objectname: 
directiontype: 
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
</pre>

---

#### Demo Links

* [StateBar](http://demo.realgrid.com/GridComponent/StateBar/)  
* [setStateBar](/api/GridBase/setStateBar/)   
* [getStateBar](/api/GridBase/getStateBar/)              
