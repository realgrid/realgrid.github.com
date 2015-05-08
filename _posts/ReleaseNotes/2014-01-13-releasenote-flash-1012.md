---
layout: post
title: Released RealGrid Flash 1.0.12
date: 2014-01-13 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.0.12
---

1. CheckCellRenderer.editable 속성을 지정해서 편집기로 사용할 수 있도록 함.
2. 고정 row 갯수가 1보다 클 때 row resizing ui 에러 발생 해결.
3. DataProvider에 fields가 지정되지 않은 상태에서 setRowCount()를 호출하면 무시하도록 함.
4. GridView.getColumNames()에서 columnsOnly 매개변수 추가. true면 group들의 이름은 제외된 채로 리턴. 기본값은 false.
5. DataProvider에 getFields(), getFieldNames() 메쏘드 추가.