---
layout: apipost
title: addLookupSource
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addLookupSource/
tags:
  - lookupData
  - dropDown
---


#### Description

> lookup tree에서 사용할 lookup source를 추가 등록한다.  
> 추가등록되는 lookup source가 기존것과 중복되는경우 overwrite된다.  
> ※ 기존id에 추가를 원하는 경우는 [fillLookupData](/api/GridBase/fillLookupData/)를 사용한다.  

#### Syntax

> function addLookupSource(source)  

#### Parameters

> **source**  
> Type: Object  
> LookupSource Object  



#### Return value

> None.  

#### Examples 

<pre class="prettyprint">
	var source = {
        "id": "empLookup",
        "levels": 2,
        "keys": [
            ["VINET", 5], ["VINET", 4], ["VINET", 3],
            ["CHOPS", 5], ["CHOPS", 4], ["CHOPS", 3],
            ["VICTE", 3], ["VICTE", 2],
            ["HANAR", 3], ["HANAR", 2],
            ["WELLI", 3], ["WELLI", 2]
        ],
        "values": [
            "VINET_5", "VINET_4", "VINET_3",
            "CHOPS_5", "CHOPS_4", "CHOPS_3",
            "VICTE_3", "VICTE_2",
            "HANAR_3", "HANAR_2",
            "WELLI_3", "WELLI_2"
        ]
	};
	
	gridView.addLookupSource(source);
	....

	/* field1(column1)의 값에 따라 column2의 dropDownList에 보여지는 값이 변경되도록 
	   column2의 lookupSourceId와 lookupKeyFields를 지정한다.. */

	gridView.setColumns([
	    { fieldName:"field1",
          name:"column1",
          values:["VINET","CHOPS","VICTE","HANAR","WELLI"],
          editor:{type:"dropDown"}
	    },{ fieldName:"field2",
	      name:"column2",
	      lookupSourceId:"empLookup",
	      lookupDislay:true,
	      lookupKeyFields:["field1","field2"],
	      editor:{ type:"dropDown"}
	    }
	    ....
	])
</pre>

#### See Also
> [clearLookupData](/api/GridBase/clearLookupData), [fillLookupData](/api/GridBase/fillLookupData), [removeLookupSource](/api/GridBase/removeLookupSource)  
> [Lookup Tree](http://demo.realgrid.com/Demo/LookupTree)