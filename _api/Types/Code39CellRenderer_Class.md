---
layout: apipost
title: Code39CellRenderer
part: Types
typename: Cell Renderers
order: Code39CellRenderer
objectname: 
directiontype: 
permalink: /api/types/Code39CellRenderer/
tags:
  - barcode39
  - barcode
  - 바코드  
---

#### Description

 Code39 Barcode를 표시하는 렌더러이다.

#### properties

> None.

#### Examples   

<pre class="prettyprint">
	var columns = [{
        fieldName: "OrderID",
        width: "186",
        renderer: {
            type: "code128"
        },
        styles: { 
            "figureBackground": "#ff111111"
        },
        header: {
            "text": "Code128"
        }
	}]

	gridView.setColumns(columns);
</pre>

---

#### Demo Links 

* [Barcode Cell Renderer](http://demo.realgrid.net/Demo/BarcodeCellRenderer) 

