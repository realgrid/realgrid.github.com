---
layout: apipost
title: MenuItem
part: Types
typename: Classes
order: MenuItem
objectname: 
directiontype: 
permalink: /api/types/MenuItem/
tags:
  - 메뉴항목
  - 메뉴아이템
---

#### Description

 메뉴항목을 지정하는 모델이다.


#### Properties

> **label**     
> Type: String             
> Default: null     
> 메뉴에 표시될 명칭                         

> **type**    
> Type: [MenuItemType](/api/types/MenuItemType)   
> Default: MenuItemType.NORMAL   
> 메뉴 항목의 형태                          

> **group**   
> Type: String  
> Default: undefined  
> 메뉴의 그룹, type이 radio일때 동일 그룹내에서 하나만 선택   

> **enabled**     
> Type: Boolean  
> Default: true  
> 사용 여부  

> **checked**   
> Type: Boolean  
> Default: false    
> type이 CHECK 또는 RADIO일때 기본 체크여부   

> **tag**    
> Type: Object  
> Default: null  
> 태그  

> **children**  
> Type: array of MenuItem  
> 2단계이상일때 하위 메뉴 항목 배열           
