---
layout: apipost
title: exportToCsv
part: Objects
objectname: DataProvider
directiontype: Function
permalink: /api/DataProvider/exportToCsv/
jsonly: true
versions:
    - JS 1.1.27+
tags:
  - csv
  - export
---


#### Description

 지정한 설정에 따라 데이터를 CSV 문서로 내보낸다.
 dataProvider 수준에서 export 되는 것이기 때문에 컬럼그룹 및 로우그룹, 스타일등 gridView와 관련된 부분은 적용되지 않는다.   

#### Syntax

> function exportToCsv(options)  

#### Parameters

> **options**  
> Type: object  
> [DatProviderExportOptions](/api/types/DataProviderExportOptions/)과 같은 설정 모델로 지정한다.  

#### Return value

> None.

#### Examples 

<pre class="prettyprint">
dataProvider.exportToCsv({
    target: "local",
    fileName: "ExportSample.csv"
});
</pre>

---

#### API Links

* [DataProviderExportOptions](/api/types/DataProviderExportOptions/)