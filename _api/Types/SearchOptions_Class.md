---
layout: apipost
title: SearchOptions
part: Types
objectname: 
directiontype: 
permalink: /api/types/SearchOptions/
---


> 그리드에 현재 표시된 행들 중에서 특정한 행을 찾는 조건을 지정한다.
> 필터링 되었거나, 행 그룹핑된 경우 감춰진 행들은 찾지 않는다.

#### Properties

> **fields**
> Type: Array 
> Default: null    
> 검색할 필드 목록. 필드 인덱스나 필드 이름으로 지정할 수 있다. 필드 이름은 대소문자를 구분하지 않는다.

> **values**
> Type: Array 
> Default: null 
> fields에 지정한 각 필드에 해당하는 검색 조건값들을 순서에 맞게 배열로 지정한다. 

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
> Default: false    
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
