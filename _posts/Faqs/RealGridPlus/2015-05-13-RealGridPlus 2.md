---
layout: post
title:  RealGrid가 표시되지 않는다. 팝업메뉴에 "동영상이 로드되지 않았습니다" 메세지 출력
date:   2015-05-13 00:00:00
categories: faq
part: RealGridPlus
directiontype: install
---

# Q.

RealGrid가 표시되지 않는다. flash context menu가 나오는데 realgrid menu는 나오지 않음, 팝업메뉴에 "동영상이 로드되지 않았습니다" 메세지 출력

---
***

# A.

realgridutils.js에서 setupGrid및 setupTree에서 
var swfUrl = "objects/RealGridWeb.swf"; 부분을 실 경로에 맞게 수정
