---
layout: apipost
title: FixedOptions
part: Types
typename: Classes
order: FixedOptions
objectname: 
directiontype: 
permalink: /api/types/FixedOptions/
tags: 
  - 행고정
  - 열고정 
  - FixedOptions
---

#### Description

 그리드의 고정 행 및 컬럼 영역에 대한 설정 모델이다. 그리드 위쪽에 하나 이상의 행을 수직 스크롤링에서 제외 시킬 수 있다. 또한, 하나 이상의 최상위 컬럼을 수평 스크롤에서 제외 시킬 수 있다.

#### Properties

> **colCount**           
> Type: number  
> Default: 0   
> 고정 컬럼의 개수를 최상위 컬럼 단위로 지정한다. 고정 컬럼은 그리드의 왼쪽에 지정된다. 

> **rightColCount**           
> Type: number  
> Default: 0   
> 고정 컬럼의 개수를 최상위 컬럼 단위로 지정한다. 고정 컬럼은 그리드의 오른쪽에 지정된다. 

> **rowCount**           
> Type: number  
> Default: 0    
> 고정 행의 개수를 지정한다. 고정 행은 그리드 위쪽에 지정된다. 

> **exceptFromFiltering**  
> Type: boolean  
> Default: true   
> true면 고정 행들이 참조하고 있는 데이터 행들을 필터링에서 제외 시킨다.    

> **exceptFromSorting**      
> Type: boolean     
> Default: true     
> true면 고정 행들이 참조하고 있는 데이터 행을 정렬에서 제외 시킨다.     

> **editable**             
> Type: boolean  
> Default: true   
> false면 다른 속성들과 상관 없이 열고정된 컬럼을 수정 할 수 없다.   

> **rowEditable**             
> Type: boolean  
> Default: true   
> false면 다른 속성들과 상관 없이 행고정된 행을 수정 할 수 없다.  

> **resizable**            
> Type: boolean   
> Default: false  
> false면 다른 속성들과 상관 없이 사용자가 컬럼의 너비를 변경할 수 없다. 

> **movable**            
> Type: boolean   
> Default: false  
> false면 다른 속성들과 상관 없이 사용자가 고정 컬럼의 위치를 변경할 수 없다. 최상위 컬럼에만 해당된다. 고정 컬럼 그룹에 포함된 컬럼들은 그룹 내에서 이동 가능하다.   

> **colBarWidth**          
> Type: number    
> Default: 3      
> 수직 고정 Bar의 너비를 픽셀 단위로 지정한다.   

> **rowBarHeight**         
> Type: number    
> Default: 3      
> 수평 고정 Bar의 높이를 픽셀 단위로 지정한다.   

> **ignoreColumnStyles**   
> Type: boolean   
> Default: true   
> true면 고정 컬럼의 스타일들을 무시하고 고정 영역 스타일만으로 셀들을 렌더링한다.   

> **ignoreDynamicStyles**  
> Type: boolean   
> Default: false  
> true면 고정 컬럼 셀들에 대한 모든 동적 스타일들을 무시한다.   

#### Examples 

<pre class="prettyprint">
gridView.setFixedOptions({
    rowCount: 2,
    colCount: 2
});
</pre>

---

#### API Links

* [setFixedOptions](/api/GridBase/setFixedOptions/)
* [getFixedOptions](/api/GridBase/getFixedOptions/)

#### Demo Links

* [Fixed Columns Demo](http://demo.realgrid.net/Demo/ColumnFixing)   
* [Fixed Rows Demo](http://demo.realgrid.net/Demo/FixedRows)