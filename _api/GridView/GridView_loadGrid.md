---
layout: apipost
title: loadGrid
part: Objects
objectname: GridView
directiontype: Function
permalink: /api/GridView/loadGrid/
tags: 
  - 필드 정보
  - 컬럼 정보
  - 데이터
  - 한번에
  - 설정 방법
---


#### Description

> 그리드의 필드 및 컬럼 정보 등 모든 설정 정보 및 데이터를 한번에 설정한다.

#### Syntax

> function getPage()

#### Parameters

> Type: Objects  
> 필드 및 컬럼 정보 등 모든 설정 정보 및 데이터

#### Return value

> None.

#### Example

<pre class="prettyprint">
var data = 
	{
		"data": {
			"source": {
				"type": "csv",
				"url": "http://demo.realgrid.net/DemoData/booltest.csv?__time__=${tick}",
				"progress": true
			},
			"fields": [{
				"fieldName": "Case"
			}, {
				"fieldName": "Boolean0",
				"dataType": "bool",
				"boolFormat": "False,N,0:True,Y,1:0"
			}, {
				"fieldName": "BooleanCase0",
				"dataType": "bool",
				"boolFormat": "False,N,0:True,Y,1:1"
			}, {
				"fieldName": "Boolean1",
				"dataType": "bool",
				"boolFormat": "False,N,0:True,Y,1:0"
			}, {
				"fieldName": "Boolean2",
				"dataType": "bool",
				"boolFormat": "False,N,0:True,Y,1:0"
			}, {
				"fieldName": "BooleanCase2",
				"dataType": "bool",
				"boolFormat": "False,N,0:True,Y,1:1"
			}]
		},
		"columns": [{
			"name": "Case",
			"fieldName": "Case",
			"type": "data",
			"width": "200",
			"equalBlank": true,
			"header": {
				"text": "Case Name"
			}
		}, {
			"name": "FieldLoad",
			"fieldName": "Boolean0",
			"type": "data",
			"width": "100",
			"header": {
				"text": "Data Load"
			}
		}, {
			"name": "FieldLoadCase",
			"fieldName": "BooleanCase0",
			"type": "data",
			"width": "100",
			"header": {
				"text": "Data Load rCase-sensitive"
			}
		}, {
			"name": "RenderingTest",
			"fieldName": "Boolean1",
			"type": "data",
			"width": "120",
			"header": {
				"text": "Data Rendering"
			},
			"styles": {
				"boolFormat": "거짓:참"
			}
		}, {
			"name": "EditorTest",
			"fieldName": "Boolean2",
			"type": "data",
			"width": "100",
			"header": {
				"text": "Data Editing r(Yes or No)"
			},
			"editor": {
				"boolFormat": "No:Yes:0"
			}
		}, {
			"name": "EditorTestCase",
			"fieldName": "BooleanCase2",
			"type": "data",
			"width": "100",
			"header": {
				"text": "Data Editing rCase-sensitive r(Yes or No)"
			},
			"editor": {
				"boolFormat": "No:Yes:1"
			}
		}],
		"grid": {
			"display": {
			},
			"editing": {
			},
			"selection": {
				"style": "rows",
				"styles": {
					"background": "#11000000",
					"border": "#88000000,1"
				}
			},
			"fixed": {
			}
		},
		"header": {
			"minHeight": 50,
			"resizable": true,
			"styles": {
			}
		},
		"stateBar": {
			"visible": false
		},
		"footer": {
			"visible": true,
			"resizable": true
		},
		"checkBar": {
		}
	}
	
gridView.loadGrid(data);	
</pre>

