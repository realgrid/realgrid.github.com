---
layout: apipost
title: MobileOptions
part: Types
typename: Classes
order: MobileOptions
objectname: 
directiontype: 
permalink: /api/types/MobileOptions/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - GridOptions
  - 그리드설정
  - MobileOptions
  - 모바일옵션
  - 모바일설정
---

#### Description

 모바일 환경에 대한 설정

#### Properties

> **longTapDuration**  
> Type: Number     
> Default: 500  
> 롱탭이 발생하기까지의 누르고 있는 시간을 지정한다.    

> **doubleTapInterval**  
> Type: Number  
> Default: 300    
> 더블탭이 발생하기까지의 탭간 시간을 지정한다. 

> **tapThreshold**  
> Type: Number        
> Default: 4     
> 탭간 동일 탭으로 인지하는 영역범위      

> **showTooltip**  
> Type: Boolean        
> Default: false           
> showTooltip이 true, header.showTooltip이 true이면 mobile에서도 column header를 tap하면 tooltip이 보여진다.  
> sortingOptions.enabled가 false이거나 column.sortable이 false인 경우에만 tooltip이 보여진다.              
> RealgridJS 1.1.33 부터 지원한다.  

### Example  

<pre class="prettyprint">
gridView.setMobileOptions({
    longTapDuration: 500,
    doubleTapInterval: 300,
    tapThreshold: 4
});
----------------------------
gridView.setHeader({
    showTooltip: true,
    tooltipEllipseTextOnly: true
});
gridView.setMobileOptions({ showTooltip: true });
gridView.setSortingOptions({ enabled: false });

gridView.setStyles({ header: { textWrap: "ellipse" } })
</pre>

---

#### API Links

* [setMobileOptions](/api/GridBase/setMobileOptions/)  
* [getMobileOptions](/api/GridBase/getMobileOptions/) 

