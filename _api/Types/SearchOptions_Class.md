---
layout: apipost
title: SearchOptions
part: Types
typename: Classes
order: SearchOptions
objectname: 
directiontype: 
permalink: /api/types/SearchOptions/
tags:
    - 검색옵션
    - 찾기
---


#### Description

 그리드에 현재 표시된 행들 중에서 특정한 행을 찾는 조건을 지정한다.    
필터링 되었거나, 행 그룹핑된 경우 감춰진 행들은 찾지 않는다.

#### Properties

> **fields**    
> Type: Array     
> Default: null        
> 검색할 필드 목록. 필드 인덱스나 필드 이름으로 지정할 수 있다. 필드 이름은 대소문자를 구분하지 않는다.  

> **startFieldIndex**     
> Type: Number           
> Default: 0     
> fields Array에서 검색을 시작할 필드의 인덱스를 지정한다.  
> var fields = ["a", "b", "c", "d"];   var startFieldIndex = 2  인 경우 "c" 필드부터 검색을 시작한다.        

> **values**    
> Type: Array     
> Default: null     
> fields에 지정한 각 필드에 해당하는 검색 조건값들을 순서에 맞게 배열로 지정한다.  
> searchItem()에서만 사용한다.  
 
> **value**    
> Type: String     
> Default: null     
> fields에 지정한 각 필드에 해당하는 검색 조건값들을 순서에 맞게 배열로 지정한다.  
> searchCell()에서만 사용한다.

> **startIndex**     
> Type: Number           
> Default: 0     
> 몇 번째 행 부터 검색할 것인 지를 지정한다.         

> **wrap**     
> Type: Boolean     
> Default: true     
> 마지막 행까지 해당하는 행이 없으면 첫 행부터 다시 검색할 것인 지를 지정한다.   

> **select**     
> Type: Boolean           
> Default: true        
> true로 지정하면 검색된 행이 있을 때 그 행을 선택하고, 현재 표시된 범위 밖이면 표시되도록 스크롤한다.    

> **caseSensitive**    
> Type: Boolean     
> Default: false        
> true면 대소문자를 구분해서 검색한다.         

> **partialMatch**    
> Type: Boolean     
> Default: false       
> true면 지정한 텍스트가 포함되기만 하면 일치하는 것으로 판단한다.    

> **allFields**    
> Type: Boolean    
> Default: true    
> false이면 지정된 fields중 일치하는 field가 있으면 검색으로 종료한다.

> **parentId**    
> Type: Number    
> Default:     
> TreeDataProvider.searchData(), TreeDataProvider.searchDataRow()에서만 사용된다. 
> RealGridJS 1.1.25부터 지원한다.  

> **columns**    
> Type: Array of String    
> Default: Null    
> 여기에 지정된 순서대로 검색을 수행한다.  
> columns 속성 사용시 fields 속성은 사용하지 않는다.     
> RealGridJS 1.1.26부터 지원한다.     

> **dataComparer**    
> Type: function (dataRow, fieldIndex, v1, v2) {}
> 검색시 비교 조건을 Custom하게 설정할 수 있다.        
> RealGridJS 1.1.35부터 지원한다.     

<pre class="prettyprint">
gridView.searchItem({
    fields:["field1","field2"], 
    values:["values1","values2"], 
    allFields:true, 
    dataComparer: function (dataRow, fieldIndex, v1, v2) {
        // v1: values에 입력한 text
        // v2: cell의 value
        if (v1 && v2) {
            return String(v2).indexOf(String(v1)) >= 0;
        }  else  {
            return v1 == v2
        }
    }
});
</pre>

---

#### Demo Links

* [SearchItem](http://demo.realgrid.com/DataManager/SearchItem/){:target="_blank"}
