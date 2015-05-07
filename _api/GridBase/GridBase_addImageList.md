---
layout: apipost
title: addImageList
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addImageList/
---


#### Description

> [ImageList](/api/GridBase/)는 셀 렌더러나 트리뷰의 아이콘으로 사용될 이미지 url 목록이다. 이 목록을 그리드에 추가한다.

#### Syntax

> function addImageList(imageList)

#### Parameters

> **imageList**
> Type: object
> 이미지리스트의 이름과 이미지 url 목록을 포함한다. 

#### Return value

> None.

#### Example

<pre class="prettyprint">
    var imgList = new RealGrids.ImageList("images1");
    imgList .rootUrl = "http://" + location.host + "/imgs/";
    imgList .images = [
        "ar.png",
        "at.png",
        ...
    ];
    grid.addImageList(imgList);
</pre>
<pre class="prettyprint">
    grid.addImageList({
        name: "images2",
        rootUrl: "http://www.aaa.com/images/",
        images: [
            "aaa.png",
            "bbb.png",
            ...
        ]
    });
</pre>

