---
layout: apipost
title: RemoveButtonOptions
part: Types
typename: Classes
order: RemoveButtonOptions
objectname: 
directiontype: 
jsonly: true
versions:
    - JS 1.1.26+
permalink: /api/types/RemoveButtonOptions/
---

#### Description

 행 그룹핑시 그룹해제를 위한 Remove버튼 관련된 옵션 정보이다.

#### Properties

> **visible**     
> Type: Boolean   
> Default: false   
> 버튼의 표시 여부를 지정한다.   

> **size**   
> Type: Number      
> Default: 12    
> 버튼의 크기를 지정한다.     

> **color**   
> Type: string    
> Default: "#ff696969"    
> 버튼의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.   

> **hoveredColor**    
> Type: string    
> Default: "#ff696969"    
> 마우스가 호버되었을때 버튼의 색상을 지정한다. "#AARRGGBB" 형태의 색상코드이다.   

> **buttonGap**   
> Type: Number    
> Default: 4    
> text와 remove버튼의 간격을 변경한다. text의 길이가 긴경우에만 적용된다.      
> RealGridJS 1.1.27 부터 지원한다. 


#### Examples   

<pre class="prettyprint">
gridView.setGroupingOptions({
	removeButton: {
		visible: true,
		buttonGap: 10
    }
});
</pre>

---

#### API Links

* [setGroupingOptions](/api/GridBase/setGroupingOptions/)   
* [getGroupingOptions](/api/GridBase/getGroupingOptions/)  
