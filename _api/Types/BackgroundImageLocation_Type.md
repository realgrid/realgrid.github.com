---
layout: apipost
title: BackgroundImageLocation
part: Types
typename: Constants
order: BackgroundImageLocation
objectname: 
directiontype: 
permalink: /api/types/BackgroundImageLocation/
jsonly: true
versions:
  - JS 1.1.30+
tags:
  - BackgroundImageLocation
  - 이미지위치
---

#### Description

 배경 이미지의 위치를 지정하는 상수입니다.

#### Members

> **CENTER**  
> Value: "center"  
> 가운데    

> **LEFT**   
> Value: "left"   
> 왼쪽     

> **RIGHT**   
> Value: "right"   
> 오른쪽    

> **TOP**   
> Value: "top"   
> 상단    

> **BOTTOM**   
> Value: "bottom"   
> 하단    

> **LEFT_TOP**   
> Value: "leftTop"   
> 왼쪽상단    

> **LEFT_BOTTOM**   
> Value: "leftBottom"   
> 왼쪽하단    

> **RIGHT_TOP**   
> Value: "rightTop"   
> 오른쪽상단    

> **RIGHT_BOTTOM**   
> Value: "rightBottom"   
> 오른쪽하단      


#### Examples   

<pre class="prettyprint">
gridView.setOptions({
  backgroundImage:{
    imageUrl:"./image/realgrid.jpg", 
    alpha:0.2, 
    location:"center"
  }
});
</pre>

---

#### API Links

* [BackgroundImage](/api/types/BackgroundImage/)    
 