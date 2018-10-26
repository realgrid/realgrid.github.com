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

> **useCssStyle**  
> Type: Boolean     
> Default: false       
> CSS 적용여부를 지정한다.  
> JS Ver. 전용     

> **showSearchInput**  
> Type: Boolean     
> Default: true       
> 필터 검색창 보임여부를 지정한다.     
> RealGridJS 1.1.29 이상 지원한다.  

> **showButtons**  
> Type: Boolean  
> Default: true      
> 확인, 취소 버튼의 표시여부를 지정한다.     
> RealGridJS 1.1.29 이상 지원한다.  

> **acceptText**  
> Type: String  
> Default: "확인"    
> 확인 버튼에 표시되는 문구를 지정한다.    
> RealGridJS 1.1.29 이상 지원한다.  

> **cancelText**  
> Type: String  
> Default: "취소"    
> 취소 버튼에 표시되는 문구를 지정한다.    
> RealGridJS 1.1.29 이상 지원한다.  

<a name="userFilterAddCallback"></a>
> **userFilterAddCallback**  
> Type: function(grid, column, text) {}   
> Default:     
> 사용자가 필터검색창에 입력한 내용을 필터로 등록하려 할때 사용한다. null을 return하면 추가하지 않는다.  
> Ctrl+Enter Key로 등록 요청한다.        
> RealGridJS 1.1.30 이상 지원한다.  



### Example  

<pre class="prettyprint">
gridView.setFilteringOptions({
	HandleVisibility: "visible",
	selector: {
		maxWidth: 100,
		maxHeight: 200,
		closeWhenClick: true,
		showSearchInput: true,
		userFilterAddCallback: function(grid, column, text) {
			return {
				text : text,
				criteria: "value like '"+text+"%'",
				active:true,
			}
		}
    }
})
</pre>

---

#### API Links

* [FilteringOptions](/api/types/FilteringOptions/)