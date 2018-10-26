---
layout: apipost
title: BackgroundImage
part: Types
typename: Classes
order: BackgroundImage
objectname: 
directiontype: 
permalink: /api/types/BackgroundImage/
jsonly: true
versions:
  - JS 1.1.30+
tags: 
  - BackgroundImage
  - 배경
  - 이미지 
  - image
---

#### Description

 그리드 배경이미지에 대한 설정 모델이다.  

#### Properties

> **imageUrl**  
> Type: String   
> Default: null      
> 배경이미지의 경로를 지정한다.      
> ex) "{Y} Year"  

> **alpha**    
> Type: Number 
> Default: 0.4         
> 배경이미지의 alpha값을 지정한다.      

> **location**    
> Type: [BackgroundImageLocation](/api/types/BackgroundImageLocation/)     
> Default: BackgroundImageLocation.CENTER   
> 그리드내에 표시되는 배경이미지의 위치를 지정한다.    

> **padding**    
> Type: Number     
> Default: 0   
> 배경이미지의 padding 값을 설정한다.  

> **paddingTop**    
> Type: Number     
> Default: 0   
> 배경이미지의 paddingTop 값을 설정한다.  

> **paddingBottom**    
> Type: Number     
> Default: 0   
> 배경이미지의 paddingBottom 값을 설정한다.  

> **paddingLeft**    
> Type: Number     
> Default: 0   
> 배경이미지의 paddingLeft 값을 설정한다.  

> **paddingRight**    
> Type: Number     
> Default: 0   
> 배경이미지의 paddingRight 값을 설정한다.  

#### Examples   

<pre class="prettyprint">
  gridView.setOptions({
    backgroundImage:{
      imageUrl:"./image/realgrid.jpg", 
      alpha:0.2, 
      location:"center", 
      padding:2
    }
  })
</pre>


---

#### API Links

* [GridOptions](/api/types/GridOptions/)
 