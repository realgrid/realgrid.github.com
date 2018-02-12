---
layout: apipost
title: RowGroupOptions
part: Types
typename: Classes
order: RowGroupOptions
objectname: 
directiontype: 
permalink: /api/types/RowGroupOptions/
tags:
  - 로우그룹
  - 설정
---


#### Description

 Row Grouping과 관련된 영역들의 표시 방법 등에 대한 설정 모델이다.

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

> **footerStatement**  
> Type: String  
> Default: null  
> 행 그룹핑시 그룹핑된 컬럼 풋터의 텍스트를 지정한다.   

> **footerCellMerge**  
> Type: Boolean  
> Default: false  
> 행 그룹핑시 그룹핑된 컬럼 풋터의 머지 여부를 지정한다.  

> **sorting**  
> Type: Boolean  
> Default: true  
> false로 설정하면 rowGroup시 자동으로 정렬되지 않고 그리드에 표시된 데이터의 순서대로 RowGroupinge된다.    

> **levels**  
> Type: array of object   
> Default: null     
> RowGroup 헤더나 풋터, 바의 레벨별 스타일을 지정한다. 정의되지 않은 레벨이 있는 경우 마지막 레벨 스타일로 표시한다.     
> 가능한 스타일 속성은 아래와 같다.  
> headerStyles  
> footerStyles  
> barStyles  
> headerBarStyles  
> footerBarStyles     

> **headerCallback**  
> Type: function  
> Default: null  
> rowGroup.header 영역에 headerCallback 반환된 값을 표시한다.  
> 레벨별로 값을 다르게 설정할 수 있다.


### Example  

<pre class="prettyprint">
gridView.setRowGroup({
    summaryMode: "aggregate",

    footerStatement: "행 그룹핑된 컬럼의 풋터입니다.",
    footerCellMerge: true,
	levels:[  
	   {  
		  footerStyles:{  
			 background:"#FF008800",
			 foreground:"#FFFFFFFF",
			 fontBold:true
		  },
		  footerBarStyles:{  
			 background:"#FF008800"
		  },
		  barStyles:{  
			 background:"#FF008800"
		  }
	   },
	   {  
		  footerStyles:{  
			 background:"#FF00CC00"
		  },
		  footerBarStyles:{  
			 background:"#FF00CC00"
		  },
		  barStyles:{  
			 background:"#FF00CC00"
		  }
	   },
	   {  
		  footerStyles:{  
			 background:"#FF00FF00"
		  },
		  footerBarStyles:{  
			 background:"#FF00FF00"
		  },
		  barStyles:{  
			 background:"#FF00FF00"
		  }
	   },
	   {  
		  footerStyles:{  
			 background:"#4400FF00"
		  },
		  footerBarStyles:{  
			 background:"#4400FF00"
		  },
		  barStyles:{  
			 background:"#4400FF00"
		  }
	   }
	]	
});

//headerCallback 적용
gridView.setRowGroup({
    headerStatement: null,
    headerCallback:function(groupModel){
        var summary1, summary2, ratio;
        if (groupModel && groupModel.type=="group") {
            summary1 = grdMain.getGroupSummary(groupModel, "field2");
            summary2 = grdMain.getGroupSummary(groupModel, "field3");
            ratio = summary2.sum / summary1.sum * 100;
        }
        return ratio;
    }
    //그룹 레벨별 값 설정 
    //return groupModel.level
})

</pre>

---

#### API Links

* [setRowGroup](/api/GridBase/setRowGroup/)  
* [getRowGroup](/api/GridBase/getRowGroup/)  

#### Demo Links

* [Row Grouping](http://demo.realgrid.com/RowGroup/RowGrouping/)