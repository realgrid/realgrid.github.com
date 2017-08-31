---
layout: apipost
title: DisplayOptions
part: Types
typename: Classes
order: DisplayOptions
objectname: 
directiontype: 
permalink: /api/types/DisplayOptions/
tags: 
  - DisplayOptions
  - 디스플레이옵션
  - 화면옵션
  - 행높이 조절
  - 행높이 변경
  - 컬럼리사이징
---

#### Description

 그리드 수준에서 관리되는 표시 정보들에 대한 설정 모델이다.

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

> **horizLiveScroll**   
> Type: Boolean  
> Default: true  
> false이면 횡 스크롤이 끝날때 표시되고 true이면 횡 스크롤 되는 중에도 표시된다.  
> RealGridJS만 지원  

> **horzScrollStep**  
> Type: Number   
> Default: 8     
> 최소 수평 스크롤 크기를 픽셀 단위로 지정한다.       
> RealGridJS만 지원  

> **showEmptyMessage**   
> Type: Boolean  
> Default: false  
> 데이터가 없을 경우 그리드에 메시지 표시 여부를 지정한다.    
> RealGridJS만 ver 1.1.22부터 지원된다.  

> **emptyMessage**   
> Type: String  
> Default: "Load data..."     
> 그리드에 표시되는 내용이 한건도 없을 때 표시되는 문자열을 지정한다.   

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
> false이면 종 스크롤이 끝날때 표시되고 true이면 종 스크롤 되는 중에도 표시된다.  

> **focusVisible**   
> Type: Boolean  
> Default: true  
> 포커스의 보임 여부를 지정한다.  

> **focusColor**   
> Type: String  
> Default: "#555555"  
> 포커스의 색상을 지정한다.  
> RealGridJS인 경우 ver 1.1.20부터 지원된다.

> **focusBackground**   
> Type: String  
> Default:   
> 포커스의 배경 색상을 지정한다.  
> RealGridJS만 ver 1.1.22부터 지원된다.

> **focusActiveColor**   
> Type: String  
> Default: NaN  
> 포커스가 활성화 되었을때 색상을 지정한다.  
> RealGridJS인 경우 ver 1.1.20부터 지원된다.

> **focusActiveColor**   
> Type: String   
> Default: NaN   
> 포커스가 활성화 되었을때 색상을 지정한다.   
> RealGridJS인 경우 ver 1.1.20부터 지원된다.  

> **innerFocusColor**    
> Type: String   
> Default: NaN   
> 머지 셀의 내부 포커스 색상을 지정한다.   
> RealGridJS만 ver 1.1.20부터 지원된다.  

> **focusBorderWidth**    
> Type: String   
> Default: NaN   
> 포커스의 경계선 굵기를 지정한다.   
> RealGridJS만 ver 1.1.20부터 지원된다.  

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
> RealGridJS만 지원

> **rowChangeDelay**   
> Type: number  
> Default: 0   
> onCurrentRowChanged()를 지연시켜 발생시키길 원할때 지정한다. 단위는 밀리초(ms)이다.      
> RealGridJS만 지원

> **toastZIndex**   
> Type: number   
> Default: 3000  
> 표시되는 토스트 창의 zIndex를 지정한다.    

> **hintDuration**   
> Type: number   
> Default: 0  
> tooltip을 지연시켜 발생시키길 원할때 지정한다. 단위는 밀리초(ms)이다.   
> RealGridJS만 ver 1.1.21부터 지원된다.    

> **eachRowResizable**   
> Type: boolean   
> Default: false    
> true로 설정하면 행 높이를 개별로 조절할 수 있다.       
> RealGridJS만 ver 1.1.21부터 지원된다.   

> **rowFocusVisible**   
> Type: Boolean  
> Default: true  
> 행 포커스의 보임 여부를 지정한다.  
> RealGridJS만 ver 1.1.22부터 지원된다.

> **rowFocusBackground**   
> Type: String  
> Default:   
> 행 포커스의 배경 색상을 지정한다.  
> RealGridJS만 ver 1.1.22부터 지원된다.

> **emptyShowTooltip**   
> Type: Boolean  
> Default: false  
> true로 지정하면 데이터가 없는 경우에도 [onShowTooltip()](http://help.realgrid.com/api/GridBase/onShowTooltip/) 이 발생한다.    
> RealGridJS만 ver 1.1.24부터 지원된다.

> **rowHoverMask**   
> Type: [RowHoverMaskObject](/api/types/RowHoverMask/)  
> Default:   
> 마우스 호버링시 그리드의 행 선택 영역 표시를 보여준다.    
> RealGridJS만 ver 1.1.24부터 지원된다.

> **rowFocusMask**   
> Type: [RowFocusMaskObject](/api/types/RowFocusMask/)  
> Default:   
> 행 및 셀 선택시 그리드의 행 선택 영역 표시를 보여준다.    
> RealGridJS만 ver 1.1.25부터 지원된다.

> **useCssStyleProgress**  
> Type: Boolean     
> Default: false   
> 프로그래스바에 CSS Style을 적용할 것인지의 여부를 지정한다.       

#### Examples   

<pre class="prettyprint">
&lt;style&gt;
  .rg-progress {
    background-color: rgba(0, 111, 245, 0.05);
      border: 1px solid #ddd;
  }
  .rg-progress-bar {
    background : linear-gradient(#aaa, #ccc);
    border : 1px solid #333;
  }
  .rg-progress-progress {
    background : linear-gradient(#fff, #ddd);
    border-right : 1px solid #333;
  }
  .rg-progress-message {
    font-size : 11px;
    font-family : Tahoma;
    font-weight : bold;
  }
&lt;/style&gt;

gridView.setDisplayOptions({
    columnResizable: true,
    columnMovable: true,
    rowHeight: 40,    
    rowHoverMask: {
    	visible: true,
    	hoverMask: "row",
    	styles: {
    		background:"#30c0c0c0"
    	}
    },
    useCssStyleProgress: true
});
</pre>

---

#### API Links

* [setDisplayOptions](/api/GridBase/setDisplayOptions/)   
* [getDisplayOptions](/api/GridBase/getDisplayOptions/)   
