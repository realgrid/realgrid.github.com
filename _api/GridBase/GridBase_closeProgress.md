---
layout: apipost
title: closeProgress
part: Objects
objectname: GridBase
directiontype: Function
permalink: /api/GridBase/closeProgress/
---


#### Description

> 프로그래스 창을 닫습니다.

#### Syntax

> function closeProgress()

#### Parameters

> None

#### Return value

> None.

#### Example

<pre class="prettyprint">
	grdMain.showProgress();

	var startTime = new Date().getTime();
	$.ajax({
	    url: "/DemoData/TooLargeDataSet.csv?__time__=" + startTime,
	    success: function (data) {
	        dataProvider.fillCsvData(data, {});

	        var count = dataProvider.getRowCount();
	        var ellapse = (new Date().getTime() - startTime) / 1000;
	        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded. " + ellapse + " elapsed").show();
	        grdMain.setFocus();
	    },
	    error: function (xhr, status, error) {
	        $("#loadResult").css("color", "red").text("Load failed: " + error).show();
	        $("#btnLoad").removeAttr("disabled");
	    },
	    complete: function (data) {
	        grdMain.closeProgress();
	    },
	    xhr: function () {
	        var xhr = new window.XMLHttpRequest();
	        //Download progress
	        xhr.addEventListener("progress", function (evt) {
	            if (evt.lengthComputable) {
	                grdMain.setProgress(0, evt.total, evt.loaded);
	            }
	        }, false);
	        return xhr;
	    }
	});
</pre>

