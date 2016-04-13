---
layout: apipost
title: Code128CellRenderer
part: Types
typename: Cell Renderers
order: Code128CellRenderer
objectname: 
directiontype: 
permalink: /api/types/Code128CellRenderer/
tags:
  - barcode128
  - barcode
  - 바코드  
---

#### Description

> Code128 Barcode를 표시하는 렌더러이다.  

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

#### See Also 

> [Barcode Cell Renderer](http://demo.realgrid.net/Demo/BarcodeCellRenderer) 참조  

