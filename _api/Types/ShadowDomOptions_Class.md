---
layout: apipost
title: ShadowDomOptions
part: Types
typename: Classes
order: PasteOptions
objectname: 
directiontype: 
permalink: /api/types/ShadowDomOptions/
jsonly: true
versions:
  - JS 1.1.24+
tags:
    - 웹접근성
    - 시각장애인지원
    - ShadowDom
---

#### Description

 웹 접근성 지원을 위해 그리드 구성 요소의 각 명칭을 지정한다.      
 ShadowDomOptions 정보를 가져오려면 [GridBase.getShadowDomOptions()](/api/GridBase/getShadowDomOptions/)함수를 사용한다.   
 ShadowDomOptions 값을 지정하려면 [GridBase.setShadowDomOptions()](/api/GridBase/setShadowDomOptions/)함수를 사용한다.

#### Properies

> **count**  
> Type: number  
> Default: 10  
> ShadowDom에 생성되는 행의 수이다.    

> **autoDrawing**  
> Type: boolean  
> Default: true  
> gridView에 추가/수정/삭제등 그리드가 변경되는 작업이 발생하면 ShadowDom을 다시 그린다.    

> **title**  
> Type: string    
> Default: "리얼그리드 테이블"  
> ShadowDom 테이블의 이름을 지정한다.   

> **description**  
> Type: string    
> Default: "${columns} 열로 이루어진 데이터 테이블입니다."   
> ShadowDom 테이블의 설명을 지정한다.  

> **indicatorTitle**  
> Type: string    
> Default: "순번"   
> indicator의 표시명을 지정한다.     

> **checkBarTitle**  
> Type: string    
> Default: "선택"   
> checkBar의 표시명을 지정한다.     

> **stateTitle**  
> Type: string    
> Default: "행 상태"   
> stateBar의 표시명을 지정한다.     

> **emptyMessage**  
> Type: string    
> Default: "데이터가 존재하지 않습니다."   
> 그리드에 데이터가 없을때 표시명을 지정한다.     

> **editButtonText**  
> Type: string    
> Default: "편집"   
> 편집버튼의 표시명을 지정한다.    

> **cellButtonText**  
> Type: object    
> Default: {action:"실행", popup:"팝업"}   
> 셀버튼의 표시명을 지정한다.     

> **stateTexts**  
> Type: object    
> Default: {created:"추가", updated:"수정", deleted:"삭제", createAndDeleted: "추가 후 삭제"}  
> 행 상태의 표시명을 지정한다.     

> **rowText**  
> Type: string    
> Default: "${index} 행"   
> 선택 행의 표시명을 지정한다.    

> **linkText**  
> Type: string    
> Default: "링크"   
> 링크의 표시명을 지정한다.    

> **summaryText**  
> Type: string    
> Default: "합계 행"   
> 풋터의 표시명을 지정한다.    

> **groupSummaryText**  
> Type: string    
> Default: "${groupText} 부분 합계 행"   
> 그룹 풋터의 표시명을 지정한다.    

> **aleadyEditMessage**  
> Type: string    
> Default: "${groupText} 부분 합계 행"   
> 그룹 풋터의 표시명을 지정한다.    

> **insertButtonText**  
> Type: string    
> Default: "행 삽입"   
> 행 삽입 버튼의 표시명을 지정한다.    

> **appendButtonText**  
> Type: string    
> Default: "행 추가"   
> 행 추가 버튼의 표시명을 지정한다.    

> **deleteButtonText**  
> Type: string    
> Default: "행 삭제"   
> 행 삭제 버튼의 표시명을 지정한다.    

> **editor**  
> Type: [ShadowDomEditorOptions](/api/types/ShadowDomEditorOptions/)    
> Default:    
> 편집기와 관련된 표시명을 지정한다.      

#### Examples

**테이블 명 바꾸기**

<pre class="prettyprint">
var options = gridView.getShadowDomOptions();
options.title = "인사조회 테이블";

gridView.setShadowDomOptions(options);
gridView.resetShadowDom();
</pre>

---

#### API Links

* [GridBase.getShadowDomOptions()](/api/GridBase/getShadowDomOptions/)
* [GridBase.setShadowDomOptions()](/api/GridBase/setShadowDomOptions/)

#### Demo Links
