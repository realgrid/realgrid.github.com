---
layout: apipost
title: ImageList
part: Types
typename: Constants
order: ImageList
objectname: 
directiontype: 
permalink: /api/types/ImageList/
tags:
  - 이미지리스트
---

#### Description

RealGrid내에서 사용할 이미지경로의 목록을 저장하기 위한 모델이다. 실제 이미지파일이 위치한 경로를 보관한다.

#### Properties

> **name**   
> Type: String             
> Default: null   
> 이름. 이미지리스트를 참조하는 곳에서 이 이름을 사용한다.               

> **rootUrl**   
> Type: String   
> Default: null   
> 이미지의 경로. images의 값들에 images값이 더해져서 최종 url을 만든다
 
> **images** 
> Type: Array of String            
> Default: null  
> rootUrl에 대한 상대 경로를 하나 이상의 이미지 경로를 Array로 지정한다.

