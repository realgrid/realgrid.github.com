---
layout: tutopost
title: 호환성보기가 설정된 브라우져에서 리얼그리드 표시 문제  
date:   2016-08-26 11:13:31 +9:00 GMT
categories: Tutorial
course:
  - Tip
tags: 
  - RealGridJS
  - RealGrid
  - 호환성 보기
  - Compatibility View
---
   
### 해결 방법

호환성 보기가 설정된 Internet Explorer 브라우져에서는 리얼그리드가 표시되지 않을 수 있습니다.   
이 경우 웹 페이지에 아래의 메타태그를 추가하여 항상 최신 모드로 동작하게끔 설정하면 됩니다.  

<pre class="pretty-print">

&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;

</pre>


---
