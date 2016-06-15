---
layout: apipost
title: mouseToIndex
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/mouseToIndex/
tags:
  - mouse
  - position
---


#### Description

 (x, y) 좌표에 해당하는 셀의 위치 정보를 가져온다.  

#### Syntax

> function mouseToIndex(x, y)  

#### Parameters

> **x**  
> Type: number  
> x 좌표.  


> **y**  
> Type: number  
> y 좌표.  

#### Return value

> [CellIndex](/api/types/CellIndex/) 값.  

#### Examples 

<pre class="prettyprint">
var gridLoaded = false;

function gridSetup() {
	.....
	gridLoaded = true;
}
....

$(document).mousemove(function (ev) {
    if (gridLoaded) {
        var offset = $("#gridView").offset();
        if (ev.pageX >= offset.left && ev.pageX < offset.left + $("#gridView").width() &&
            ev.pageY >= offset.top && ev.pageY < offset.top + $("#gridView").height()) {
            var x = ev.pageX - offset.left;
            var y = ev.pageY - offset.top;
            var idx = gridView.mouseToIndex(x, y);
            console.log("mouseToIndex(" + x + "," + y + ")=" + JSON.stringify(idx));
        } else {
           //
        }
    }
});
</pre>

