---
layout: apipost
title: registerImageList
part: Objects
objectname: GridView
directiontype: Function
jsonly: true
permalink: /api/GridView/registerImageList/
---


#### Description

> [ImageList](/api/types/ImageList)는 셀 렌더러나 트리뷰의 아이콘으로 사용될 이미지 url 목록이다. 이 목록을 그리드에 추가한다.  

#### Syntax

> function registerImageList(imageList)  

#### Parameters

> **imageList**  
> Type: object  
> 이미지리스트의 이름과 이미지 url 목록을 포함한다.   

#### Return value

> None.  

#### Example

<pre class="prettyprint">
    var imgs = new RealGridJS.ImageList("images1","http://" + location.host + "/img/demo/smallflag/");
    imgs.addUrls([
        "ar.png",
        "at.png",
        "be.png",
        "se.png",
        "ch.png",
        "gb.png",
        "us.png",
        "ve.png"
    ]);

    grid.registerImageList(imgs);
</pre>


