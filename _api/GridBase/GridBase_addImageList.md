---
layout: apipost
title: addImageList
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/addImageList/
tags:
  - imageList
  - addImageList
  - iconRenderer
---


#### Description

> [ImageList](/api/types/ImageList)는 셀 렌더러나 트리뷰의 아이콘으로 사용될 이미지 url 목록이다. 이 목록을 그리드에 추가한다.  
> RealGridPlus 전용이며 RealGridJS의 경우 [registerImageList](/api/GridView/registerImageList/)를 참조한다.

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
    gridView.addImageList(imgList);
    ....
    gridView.setColumns([
        {
            fieldName:"fieldName",
            name:"columnName",
            imageList:"image1",
            renderer:{type:"icon"},
            styles:[
                {   iconIndex:0, 
                    iconLocation:"left"
                }
            ]
        }
    ])

</pre>
<pre class="prettyprint">
    gridView.addImageList({
        name: "images2",
        rootUrl: "http://www.aaa.com/images/",
        images: [
            "aaa.png",
            "bbb.png",
            ...
        ]
    });
</pre>

