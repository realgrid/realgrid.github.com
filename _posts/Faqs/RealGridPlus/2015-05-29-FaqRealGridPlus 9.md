---
layout: faqpost
title:  DB에 값을 직접 가져온 JsonArray 객체를 직접 DataProvider에 저장하는 방법이 있을까요?
date:   2015-05-29 00:00:00
categories: faq
part: RealGridPlus
directiontype: 
---

# Q.

dataProvider.loadData를 사용하지 않고 직접 dataProvider에 값을 저장하는 방법이 궁금합니다.

---
***

# A.

서버에서 json을 가져오거나 또는 client에서 데이터를 가공해서 그리드에 보여주는 경우 [dataProvider.setJsonRows](/api/LocalDataProvider/setJsonRows) 또는 [dataProvider.setRows](/api/LocalDataProvider/setRows)를 이용해서 dataProvider에 저장할수 있습니다.

