---
layout: faqpost
title:  Uncaught ReferenceError Grids is not defined
date:   2015-08-14 00:00:00
categories: faq
part: RealGridJS
directiontype: 
tags:
    - error
    - realgridjs
    - grids
    - referenceerror
---

# Q.

설치하고 처음 실행 했는데 다음과 같은 스크립트 오류가 발생 했습니다.

<pre class="prettyprint">
    Uncaught ReferenceError: Grids is not defined
</pre>
  
---
***

# A.

### 원인
RealGridJS 실행에 필요한 스크립트파일의 참조 순서가 잘못되었을 경우 발생 할 수있는 오류 입니다.

### 해결 방법
RealGridJS 스크립트 파일의 참조 순서를 아래와 같이 dlgrids_eval.js 또는 dlgrids.js가 먼저 위치하도록 코드를 작성 합니다.

<pre class="prettyprint">
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/dlgrids_eval.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/script/realgridjs.js&quot;&gt;&lt;/script&gt;
</pre>
