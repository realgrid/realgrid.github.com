---
layout: faqpost
title:  excel or csv 파일 불러오기가 안됩니다.
date:   2015-05-13 00:00:00
categories: faq
part: RealGrid
directiontype: 
---

# Q.

excel or csv 파일 불러오기가 안됩니다.  
데모페이지와 같이 ajax url에 엑셀로 저장한 파일을 서버에 올려서 불러오려고 하였으나 한글이 깨지면서 불러오기가 되지 않습니다.

---
***

# A.

그리드가 읽어들이는 encoding type은 UTF-8입니다. 엑셀에서 csv로 저장하였을 경우 해당 csv파일은 anci로 encoding되어 있습니다.  
때문에 엑셀에서 csv로 저장한 파일을 바로 데이타로 사용하였을 경우 데이타 이상현상이 나타나게 됩니다.

