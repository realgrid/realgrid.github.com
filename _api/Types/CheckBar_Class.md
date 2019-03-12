---
layout: apipost
title: CheckBar
part: Types
typename: Classes
order: CheckBar
objectname: 
directiontype: 
permalink: /api/types/CheckBar/
tags:
  - CheckCell 
  - Checkbox
  - Check
  - 체크셀
  - 체크박스
  - 체크표시
---

#### Description

 CheckBar와 관련된 설정 모델이다. CheckBar는 행들의 Check 상태를 표시하는 수직 Bar다. 
 RealGridJS 1.1.27 부터 체크바 영역에서 체크를 한 후 shift 키를 누른 상태에서 이전이나 이후 행을 클릭하면 일괄 체크를 할 수 있다.    

#### Properties

> **width**  
> Type: number  
> Default: 20  
> CheckBar의 너비를 픽셀 단위로 지정한다. 최소 너비는 1 픽셀이다.  

> **showAll**  
> Type: boolean  
> Default: true  
> checkBar.head 에 "v" 표시 여부를 지정한다.  

> **showGroup**  
> Type: boolean  
> Default: true  
> 행 그룹핑시 그룹 헤더 영역에 체크박스 표시 여부를 지정한다.  

> **visibleOnly**  
> Type: boolean  
> Default: false    
> checkBar.head를 클릭하여 전체 선택시 보이는 행만 체크할 것인지의 여부를 지정한다.  

> **checkableOnly**  
> Type: boolean   
> Default: true     
> 체크 가능한 행만 체크할 수 있는지의 여부를 지정한다. (checkableExpression에서 체크 가능 여부를 지정할 수 있다.) 

> **visible**  
> Type: boolean   
> Default: true    
> CheckBar를 그리드에 표시할 것인지의 여부를 지정한다.   

> **exclusive**  
> Type: boolean   
> Default: false    
> 한 행만 체크 가능할지의 여부를 지정한다.  

> **checkableExpression**  
> Type: string  
> Default:  
> 체크 가능 여부의 수식을 지정한다.  

> **headText**       
> Type: String  
> Default: null  
> head 영역에 표시할 text를 지정한다.  
> text를 표시하려면 showAll을 false로 지정해야 한다.   
   
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

> **done**       
> Type: function(){}   
> Default: null  
> 데이터 stream 전송이 끝난 후 발생하는 콜백함수 이다. 전송이 끝난 후 후처리가 필요한 경우 여기에서 실행한다.    
> RealGridJS 1.1.18 부터 지원한다.

> **stateStyles**       
> Type: Object  
> Default: null  
> 행 상태에 따른 스타일을 지정한다.  
> RealGridJS 1.1.23 부터 지원한다.


> **dynamicStyles**  
> Type: Array of [DynamicStyle](/api/types/DynamicStyle)   
> Default:  null     
> 셀들에게 적용할 동적 스타일들을 지정한다.       
> RealGridJS 1.1.26 부터 지원한다.  

> **checkImageUrl**       
> Type: String  
> Default: null  
> 체크 이미지 경로를 지정한다.  
> RealGridJS 1.1.28 부터 지원한다.  

> **unCheckImageUrl**       
> Type: String  
> Default: null  
> 체크해제 이미지 경로를 지정한다.  
> RealGridJS 1.1.28 부터 지원한다.  

> **radioImageUrl**       
> Type: String  
> Default: null  
> 라디오 체크 이미지 경로를 지정한다. exclusive: true인경우에만 사용된다.    
> RealGridJS 1.1.28 부터 지원한다.  

> **headCheckImageUrl**       
> Type: String  
> Default: null  
> showAll이 true인 경우 head영역에 표시되는 체크 이미지 경로를 지정한다.  
> RealGridJS 1.1.28 부터 지원한다.  

> **headUnCheckImageUrl**       
> Type: String  
> Default: null  
> showAll이 true인 경우 head영역에 표시되는 체크해제 이미지 경로를 지정한다.  
> RealGridJS 1.1.28 부터 지원한다.  

> **drawCheckBox**       
> Type: Boolean  
> Default: null  
> checkbox의 외곽라인을 여부를 지정한다.     
> RealGridJS 1.1.28 부터 지원한다.  

> **syncHeadCheck**       
> Type: Boolean    
> Default: false    
> true인 경우 데이터 영역의 전체 item 체크 상태가 CheckBar Head의 체크 상태가 연동된다.    
> ex) 데이터행의 모든 item이 체크되면 Head영역에도 자동으로 체크가 됨         
> RealGridJS 1.1.31 부터 지원한다.  

#### Examples   

<pre class="prettyprint">
//ex1
var options = {
  checkableExpression: "state = 'c'"
  checkableOnly: true,
  exclusive: false,
  showAll: true,
  showGroup: true,
  visible: true,
  visibleOnly: false,
  width: 20,
  headText: "head",
  footText: "foot",
  headImageUrl: "/img/common/dot_arrow2_top.gif",
  footImageUrl: "/img/common/dot_arrow2_bottom.gif",
  dynamicStyles:[{
    criteria: "not checkable", 
    styles: {background:"#FFFFEEFF"}
  }]
}
gridView.setCheckBar(options);

//ex2
var options = {
  mark:"text",
  styles: {font: "나눔고딕코딩"},
  stateStyles: { 
    updated: {
      background: "#FF00FF00", 
      font: "나눔고딕코딩"
    },
    created: {
      background: "#44FF22FF", 
      figureBackground: "#88888888", 
      font: "굴림체"
    },
    deleted: {
      background: "#44000000", 
      foreground: "#FF88FF88", 
      font: "바탕체"
    },
    createAndDeleted: {
      background: "#44FFFF00", 
      foreground: "#FF88FF88", 
      font: "바탕체"
    }
}

gridView.setCheckBar(options);

//styles
gridView.setStyles({
  checkBar:{
    line:'#fffff000',                     //checkbox의 외곽라인색상
    figureBackground:'#ffff0ff0',         //check mark의 색상
    figureInactiveBackground:'#11333333', //checkable이 false일때 checkbox의 배경색
    figureSize:14
  }
});

</pre>

---

#### API Links

* [setCheckBar](/api/GridBase/setCheckBar)  
* [getCheckBar](/api/GridBase/getCheckBar)  
* [applyCheckables](/api/GridBase/applyCheckables)  
* [checkAll](/api/GridBase/checkAll)  
* [checkItem](/api/GridBase/checkItem)  
* [checkItems](/api/GridBase/checkItems)  
* [checkRow](/api/GridBase/checkRow)  
* [checkRows](/api/GridBase/checkRows)  
* [isAllChecked](/api/GridBase/isAllChecked)  
* [isCheckable](/api/GridBase/isCheckable)  
* [isCheckedItem](/api/GridBase/isCheckedItem)  
* [isCheckedRow](/api/GridBase/isCheckedRow)  
* [resetCheckables](/api/GridBase/resetCheckables)  
* [setAllCheck](/api/GridBase/setAllCheck)  
* [setCheckable](/api/GridBase/setCheckable)  
* [setCheckableExpression](/api/GridBase/setCheckableExpression)  

#### Demo Links 

* [CheckBar](http://demo.realgrid.com/GridComponent/CheckBar/)  



