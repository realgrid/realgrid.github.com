---
layout: tutopost
title: EUC-KR로 인코딩된 페이지에서 RealGridJS의 문제 해결 방안
date:   2016-06-24 11:13:31 +9:00 GMT
permalink: /tip/euc-kr-problem/
categories: Tutorial
course:
  - Tip
tags: 
  - RealGridJS
  - RealGrid
  - euc-kr
  - utf-8
  - encoding
  - 인코딩
---

### 해결 방법

RealGridJS 두군데에서 내부에 한글 리소스를 사용하고 있습니다.
아래 코드를 RealGrid 생성 이후에 호출해 주시면 한글이 깨지지 않고 정상적으로 보여집니다.

<pre class="pretty-print">
// 그룹헤더 타이틀 처리
gridView.setGroupingOptions({ prompt: "컬럼 헤더를 이 곳으로 끌어다 놓으면 그 컬럼으로 그룹핑합니다." });

// 달력 타이틀 처리
gridView.setEditorOptions({
       yearDisplayFormat: "{Y}년", 
       monthDisplayFormat:"{M}월", 
       weekDays: ["일", "월", "화", "수", "목", "금", "토"]
});

// 행 삭제 메시지 처리
gridView.setEditOptions({
    deleteRowsMessage: "현재 행을 삭제 하시겠습니까?"
});
</pre>


---
