---
layout: apipost
title: RowGroupOptions
part: Types
typename: Config Classes
order: RowGroupOptions
objectname: 
directiontype: 
permalink: /api/types/RowGroupOptions/
---


#### Description

> Row Grouping과 관련된 영역들의 표시 방법 등에 대한 설정 모델이다.

#### Properties

> **expandedAdornments**    
> Type: [RowGroupAdornments](/api/types/RowGroupAdornments)     
> Default: RowGroupAdornments.BOTH     
> Row group이 펼쳐진 상태일 때, 그룹 header, footer의 표시 여부를 지정한다.     

> **collapsedAdornments**    
> Type: [RowGroupAdornments](/api/types/RowGroupAdornments)     
> Default: RowGroupAdornments.HEADER       
> Row group이 펼쳐지지 않은 상태일 때, 그룹 header, footer의 표시 여부를 지정한다.     

> **summaryMode**    
> Type: [SummaryMode](/api/types/SummaryMode)    
> Default: SummaryMode.AGGREGATE    
> 각 행 그룹의 합계를 구하는 방식이다. [SummaryMode](/api/types/SummaryMode)를 참조한다.   

> **cellDisplay**    
> Type: [RowGroupCellDisplay](/api/types/RowGroupCellDisplay)    
> Default: RowGroupCellDisplay.MERGE    

> **headerStatement**    
> Type: String  
> Default: "${groupField}: ${groupValue} - ${rowCount} rows"  
> RowGroup 헤더에 표시할 문자열 format을 지정한다.  

> **levelIndent**  
> Type: Number    
> Default: 20  
> 그룹레벨간 들여쓰기 여백을 지정한다.  

> **mergeExpander**  
> Type: Boolean   
> Default: true  
> expander 표시여부를 지정한다.  

> **mergeMode**  
> Type: Boolean  
> Default: false  
> 행 그룹핑시 그룹핑된 컬럼의 merge 표현 여부를 지정한다.  

#### See Also

> [Row Grouping](http://demo.realgrid.net/Demo/RowGrouping)
