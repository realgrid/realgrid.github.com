---
layout: apipost
title: searchData
part: Objects
objectname: LocalDataProvider
directiontype: Function
permalink: /api/LocalDataProvider/searchData/
jsonly: true
versions:
  - JS 1.1.25+
tags:
  - search
  - 찾기
---


#### Description

 지정한 필드들의 값에 해당하는 셀을 찾아 CellIndex를 반환한다.  

#### Syntax

> function searchData(options)

#### Parameters

> **options**  
> Type: object  
> [SearchOptions](/api/types/SearchOptions/) 모델로 지정한다.
> SearchOptions 속성중 select는 사용되지 않는다.  

#### Return value

> Type: DataIndex  
> 검색된 DataIndex.  
> {dataRow: 3, fieldIndex: 1, searchFieldIndex: 0, fieldName: "CustomerID"} 형태이다.   

#### Examples 

<pre class="prettyprint">
function searchHandler() {
    var value = $("#searchTxt").val();
    var fields = [ "RequestType", "ServiceCode" ];
    var startFieldIndex = fields.indexOf(gridView.getCurrent().fieldName) + 1;
    var options = {
        fields : fields,
        value : value,
        startIndex : gridView.getCurrent().dataRow,    
        startFieldIndex : startFieldIndex,
        wrap : true,
        caseSensitive : false,
        partialMatch : true
    };

    var index = dataProvider.searchData(options);
}
</pre>

---

#### API Links

* [searchCell](/api/GridBase/searchCell)
