---
layout: apipost
title: Image List
part: Fectures
objectname: 
directiontype: 
permalink: /api/fectures/Image List/
---


그리드의 [Cell Renderer](/api/fectures/) 등이 렌더링할 때 사용되는 관련된 아이콘 이미지들을 [ImageList](/api/fectures/) 객체에 지정하고, 각 이미지를 실제 url 대신 리스트 내의 인덱스로 참조할 수 있다. 예를 들어 아이콘 셀렌더러는 컬럼에 지정한 *ImageList의 이름* 과 스타일의 *iconIndex* 에 지정된 이미지 인덱스를 이용해 해당 이미지를 셀에 렌더링한다.

<pre>
var imgs = new RealGrids.ImageList("images1");
imgs.rootUrl = "http://" + location.host + "/img/demo/smallflag/";
imgs.images = [
   "ar.png",
   "at.png",
   "be.png",
   ...
];
grid.addImageList(imgs);

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

#### See Also
> [ImageList](/api/fectures/), [addImageList](/api/fectures/)
