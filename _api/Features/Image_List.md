---
layout: apipost
title: Image List
part: Features
objectname: 
directiontype: 
permalink: /api/features/Image List/
tags:
  - ImageList
  - 이미지
  - 이미지리스트
---

#### Description

그리드의 [Cell Renderer](/api/features/Cell Renderer/) 등이 렌더링할 때 사용되는 관련된 아이콘 이미지들을 [ImageList](/api/types/ImageList/) 객체에 지정하고, 각 이미지를 실제 url 대신 리스트 내의 인덱스로 참조할 수 있다. 예를 들어 아이콘 셀렌더러는 컬럼에 지정한 **ImageList의 이름** 과 스타일의 **iconIndex** 에 지정된 이미지 인덱스를 이용해 해당 이미지를 셀에 렌더링한다.

<pre class="prettyprint">
//RealGridJS(HTML5)
var imgs = new RealGridJS.ImageList("images1","http://" + location.host + "/img/demo/smallflag/");
imgs.addUrls([
    "ar.png",
    "at.png",
    "be.png",
    ...
]);

grid.registerImageList(imgs);

or 

//RealGrid+(flash)   
var imgs = new RealGrids.ImageList("images1");
imgs.rootUrl = "http://" + location.host + "/img/demo/smallflag/";
imgs.images = [
   "ar.png",
   "at.png",
   "be.png",
   ...
];
grid.addImageList(imgs);

//적용방법
var columns = [{
   name: "col1",
   imageList: "images1"
   renderer: {
      type: "icon"
   }
   styles: {
      iconIndex: 2
   }
}];
</pre>

물론, iconIndex 값은 동적 스타일을 이용해 셀 값에 따라 다르게 지정할 수 있다.

#### Demo Links
#### See Also

#### See Also
> [Icon Cell Renderer](http://demo.realgrid.com/Demo/IconCellRenderer)  

> [ImageList](/api/types/ImageList)   
> [addImageList](/api/GridBase/addImageList)  
> [registerImageList](/api/GridView/registerImageList)  
