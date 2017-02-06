---
layout: apipost
title: DocumentTitle
part: Types
typename: Classes
order: DocumentTitle
objectname: 
directiontype: 
jsonly: true
permalink: /api/types/DocumentTitle/
versions:
  - JS 1.1.17+
tags: 
  - DocumentTitle
  - 엑셀 타이틀
---

#### Description

 엑셀 export 시 표시될 타이틀을 지정한다.  

#### Properties

> **message**  
> Type: String   
> Default: null      
> 제목을 설한다.  

> **styles**  
> Type: Object   
> Default:  null     
> 컬럼 데이터셀들에게 적용할 스타일들을 지정한다.     

> **visible**  
> Type: Boolean     
> Default: true      
> 엑셀 출력 여부를 지정한다. false 일 경우 엑셀에 표시되지 않는다.         

> **spaceTop**  
> Type: Number   
> Default: 0    
> 윗 여백(행)을 지정한다.       

> **spaceBottom**  
> Type: Number   
> Default: 0    
> 아래 여백(행)을 지정한다.       

> **height**  
> Type: Number   
> Default: -1    
> 타이틀의 전체 높이를 지정한다. 높이를 지정하지 않으면 1행으로 표시된다.        

### Example  

<pre class="prettyprint">
    gridView.exportGrid({
        type: "excel",
        target: "local",
        fileName: "gridExportSample.xlsx",
        compatibility: true,
        documentTitle: {
            message: "리얼그리드 제목1",
            visible: true,
            styles: {
                fontSize: 40,
                fontBold: true,
                textAlignment: "center",
                lineAlignment: "center",
                background: "#08f90000"
            },
            spaceTop: 1,
            spaceBottom: 0,
            height: 60
        },
        documentSubtitle: {
            message: "리얼그리드 소제목1\n리얼그리드 소제목2\n리얼그리드 소제목3\n리얼그리드 소제목4\n",
            visible: true,
            styles: {
                textAlignment: "near",
                background: "#08f90000"
            },
            height: 60
        },
        documentTail: {
            message: "리얼그리드 꼬릿말",
            visible: true,
            styles: {
                fontSize: 12,
                fontBold: true,
                textAlignment: "far",
                lineAlignment: "near",
                background: "#080000f1"
            }
        }
    });
</pre>

---

#### Demo Links

* [Excel Export - DocumentTitle](http://demo.realgrid.com/Excels/ExportDocumentTitle/)  

