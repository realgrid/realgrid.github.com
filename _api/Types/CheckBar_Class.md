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

> CheckBar와 관련된 설정 모델이다. CheckBar는 행들의 Check 상태를 표시하는 수직 Bar다. 

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

#### Examples   

<pre class="prettyprint">
	var options = {
        checkableExpression: "state = 'c'"
        checkableOnly: true,
        exclusive: false,
        showAll: true,
        showGroup: true,
        visible: true,
        visibleOnly: false,
        width: 20
	}
	gridView.setCheckBar(options);
</pre>

#### Demo Links
#### See Also

#### See Also 

> [CheckBar](http://demo.realgrid.net/Demo/CheckBar)  

> [setCheckBar](/api/GridBase/setCheckBar)  
> [getCheckBar](/api/GridBase/getCheckBar)  
> [applyCheckables](/api/GridBase/applyCheckables)  
> [checkAll](/api/GridBase/checkAll)  
> [checkItem](/api/GridBase/checkItem)  
> [checkItems](/api/GridBase/checkItems)  
> [checkRow](/api/GridBase/checkRow)  
> [checkRows](/api/GridBase/checkRows)  
> [isAllChecked](/api/GridBase/isAllChecked)  
> [isCheckable](/api/GridBase/isCheckable)  
> [isCheckedItem](/api/GridBase/isCheckedItem)  
> [isCheckedRow](/api/GridBase/isCheckedRow)  
> [resetCheckables](/api/GridBase/resetCheckables)  
> [setAllCheck](/api/GridBase/setAllCheck)  
> [setCheckable](/api/GridBase/setCheckable)  
> [setCheckableExpression](/api/GridBase/setCheckableExpression)  











