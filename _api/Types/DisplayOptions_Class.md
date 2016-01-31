---
layout: apipost
title: DisplayOptions
part: Types
typename: Config Classes
order: DisplayOptions
objectname: 
directiontype: 
permalink: /api/types/DisplayOptions/
---

#### Description

> 그리드 수준에서 관리되는 표시 정보들에 대한 설정 모델이다.

#### Properties

> **columnResizable**  
> Type: Boolean   
> Default: true      
> true면 사용자가 컬럼 헤더셀 우측을 마우스 드래깅해서 컬럼의 너비를 변경할 수 있다.  

> **columnMovable**    
> Type: Boolean     
> Default: true     
> true면 사용자가 컬럼 헤더셀을 마우스 드래깅해서 그룹 내에서 컬럼의 위치를 변경할 수 있다.    

> **parentChangable**    
> Type: Boolean     
> Default: false   

> **defaultColumnWidth**  
> Type: Number   
> Default: 120  
> 기본 컬럼 폭을 지정한다.  

> **fitStyle**  
> Type: [GridFitStyle](/api/types/GridFitStyle/)         
> Default: GridFitStyle.NONE   
> 그리드의 너비에 맞춰 컬럼들의 너비를 조정한다. [GridFitStyle](/api/types/GridFitStyle/)을 참조한다.   

> **rowResizable**   
> Type: Boolean   
> Default: false   
> true면 사용자가 첫 번째 행의 Indicator나 첫 번째 컬럼 셀의 아래쪽을 마우스 드래깅해서 행의 높이를 변경할 수 있다.    

> **defaultRowHeight**   
> Type: Number         
> Default: 0     
> @Deprecated rowHeight를 대신 사용할 것.  

> **rowHeight**   
> Type: Number         
> Default: 0     
> 0 이면 그리드의 폰트와 Padding 스타일들을 고려해서 적절한 값으로 행들의 높이를 찾는다. 0보다 큰 값이면 지정한 값이 행들의 높이가 된다.     

> **minRowHeight**   
> Type: Number         
> Default: 4     
> 최소 행 높이를 픽셀 단위로 지정한다.    

> **hscrollBar**  
> Type: Boolean   
> Default: true      
> true면 필요한 경우 수평 스크롤바를 표시한다.     

> **vscrollBar**  
> Type: Boolean   
> Default: true     
> true면 필요한 경우 수직 스크롤바를 표시한다.  

> **horzScrollStep**  
> Type: Number   
> Default: 8     
> 최소 수평 스크롤 크기를 픽셀 단위로 지정한다.       

> **emptyMessage**   
> Type: String  
> Default: "Load data..."     
> 그리드에 표시되는 컬럼이 하나도 없을 때 표시되는 문자열을 지정한다.   

> **heightMeasurer**   
> Type: String  
> Default: null  
> defaultRowHeight가 0일 때 행 높이를 결정하는 방법, null이면 데이터에 따라 자동으로 결정된다. "fixed", "simple"  

> **fitWhenResized**   
> Type: Boolean  
> Default: true  
> Grid 크기가 변경될 때 가로 Scroll 위치를 계산하여 변경  

> **liveScroll**   
> Type: Boolean  
> Default: true  
> false이면 스크롤이 끝날때 표시되고 true이면 스크롤되는중에도 표시된다.  

> **focusVisible**   
> Type: Boolean  
> Default: true  
> 포커스의 보임 여부를 지정한다.  

> **focusColor**   
> Type: String  
> Default: "0x555555"  
> 포커스의 색상을 지정한다.  

> **focusActiveColor**   
> Type: String  
> Default: NaN  
> 포커스가 활성화 되었을때 색상을 지정한다.  

> **rightClickable**   
> Type: Boolean  
> Default: true 
> 마우스 오른쪽 버튼 사용 가능 여부를 지정한다.  

> **editItemMerging**   
> Type: Boolean   
> Default: false   
> Merged Row Grouping 또는 Cell Merging상태에서 셀 편집시 편집중인 행의 분리 여부를 지정한다.  

> **showInnerFocus**   
> Type: Boolean  
> Default: true 
> Merged Cell에서 개별 cell 영역 표시 여부를 지정한다.    
