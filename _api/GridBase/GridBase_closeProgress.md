---
layout: apipost
title: closeProgress
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/closeProgress/
tags:
  - progress
---


#### Description

> 프로그래스 창을 닫습니다.

#### Syntax

> function closeProgress()

#### Parameters

> None

#### Return value

> None.

##### Examples 

<pre class="prettyprint">
	gridView.showProgress();

	var startTime = new Date().getTime();
	$.ajax({
	    url: "/DemoData/TooLargeDataSet.csv?__time__=" + startTime,
	    success: function (data) {
	        dataProvider.fillCsvData(data, {});

	        var count = dataProvider.getRowCount();
	        var ellapse = (new Date().getTime() - startTime) / 1000;
	        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded. " + ellapse + " elapsed").show();
	        gridView.setFocus();
	    },
	    error: function (xhr, status, error) {
	        $("#loadResult").css("color", "red").text("Load failed: " + error).show();
	        $("#btnLoad").removeAttr("disabled");
	    },
	    complete: function (data) {
	        gridView.closeProgress();
	    },
	    xhr: function () {
	        var xhr = new window.XMLHttpRequest();
	        //Download progress
	        xhr.addEventListener("progress", function (evt) {
	            if (evt.lengthComputable) {
	                gridView.setProgress(0, evt.total, evt.loaded);
	            }
	        }, false);
	        return xhr;
	    }
	});
</pre>

#### Seel Also
> [showProgress](/api/GridBase/showProgress), [setProgress](/api/GridBase/setProgress)