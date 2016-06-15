---
layout: apipost
title: FilterSelectorOptions
part: Types
typename: Classes
order: FilterSelectorOptions
objectname: 
directiontype: 
permalink: /api/types/FilterSelectorOptions/
tags:
  - FilterSelectorOptions
  - 필터셀렉터옵션 
  - 필터설정
---

#### Description

 컬럼 필터의 선택상자와 관련된 설정 모델이다.

#### Properties

> **minWidth**  
> Type: Number  
> Default: 0  
> 선택상자의 최소 넓이를 지정한다.  

> **maxWidth**  
> Type: Number  
> Default: 0  
> 선택상자의 최대 넓이를 지정한다.  

> **minHeight**  
> Type: Number  
> Default: 0  
> 선택상자의 최소 높이를 지정한다.  

> **maxHeight**  
> Type: Number  
> Default: 0  
> 선택상자의 최대 높이를 지정한다.  

> **styles**  
> Type: Style  
> 선택상자에 적용할 스타일을 지정한다.  
> FLASH Ver. 전용  

> **closeWhenClick**  
> Type: Boolean  
> Default: false  
> 필터를 선택하였을때 선택상자의 닫힘 여부를 지정한다.  

> **showAll**  
> Type: Boolean  
> Default: true  
> 모든 필터를 보여줄것인지를 지정한다.  
> FLASH Ver. 전용  

### Example  

<pre class="prettyprint">
gridView.setFilteringOptions({
    HandleVisibility: "visible",
    selector: {
        maxWidth: 100,
        maxHeight: 200,
        closeWhenClick: true
    }
})
</pre>

---

#### API Links

* [FilteringOptions](/api/types/FilteringOptions/)