---
layout: apipost
title: StateBar
part: Types
typename: Classes
order: StateBar
objectname: 
directiontype: 
permalink: /api/types/StateBar/
tags:
    - 상태바
---


#### Description

 StateBar와 관련된 설정 모델이다. StateBar는 행들의 상태를 표시하는 수직 Bar다. 

#### Properties

> **width**  
> Type: number  
> Default: 20  
> StatusBar의 너비를 픽셀 단위로 지정한다. 최소 너비는 1 픽셀이다.

> **visible**  
> Type: boolean   
> Default: true     
> true면 StateBar를 표시한다.

> **mark**  
> Type: [StateMark](/api/types/StateMark/)     
> Default: StateMark.DEFAULT     
> StateBar에 표시되는 state의 표시 형태를 지정한다. "default"인 경우 아이콘으로 표시되며 "text" 인 경우 stateTexts에서 지정한 값들이 표시된다.  

> **stateTexts**  
> Type: objects   
> Default: null     
> StateBar에 표시될 상태 텍스트들을 지정한다.

> **headText**       
> Type: String  
> Default: null  
> head 영역에 표시할 text를 지정한다.  
   
> **footText**       
> Type: String  
> Default: null  
> foot 영역에 표시할 text를 지정한다.  

> **headImageUrl**       
> Type: String  
> Default: null  
> head 영역에 표시할 이미지의 Url을 지정한다.  
   
> **footImageUrl**       
> Type: String  
> Default: null  
> foot 영역에 표시할 이미지의 Url을 지정한다.  

#### Examples

<pre class="prettyprint">
gridView.setStateBar({
    width: 20,
    visible: true,
    mark: "text",
    stateTexts: {
        created: "C",
        updated: "U",
        deleted: "D",
        createAndDeleted: "X"
    },
	headText: "head",
	footText: "foot",
	headImageUrl: "/img/common/dot_arrow2_top.gif",
	footImageUrl: "/img/common/dot_arrow2_bottom.gif"
});
</pre>

---

#### API Links

* [setStateBar](/api/GridBase/setStateBar/)   
* [getStateBar](/api/GridBase/getStateBar/) 

#### Demo Links

* [StateBar](http://demo.realgrid.com/GridComponent/StateBar/) 
