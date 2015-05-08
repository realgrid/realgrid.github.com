---
layout: post
title: Released RealGrid Flash 1.1.8
date: 2014-06-12 00:00:00 +9:00 GMT
category: "Release Notes"
product: flash
version: 1.1.8
---

1. **renderer** 스타일 속성 추가. 이 속성을 이용해서 한 컬럼에 둘 이상의 셀renderer를 지정할 수 있도록 함. [Renderer with Styles](http://demo.realgrid.com/Demo/RendererWithStyles) 페이지 참조.
2. TreeView 엑셀 내보내기 개선. [Export - TreeView](http://demo.realgrid.com/Demo/ExcelTreeView) 페이지 참조.
3. 날짜 편집기의 datatimeFormat에 "**yyyyMMdd**"와 같이 구분자 없는 연속 포맷을 지정할 수 있도록 개선. [Data Type](http://demo.realgrid.com/Demo/DataType) 페이지 참조.
4. 그리드의 **setCellStyleRows**을 이용해서 [DataCellStyle](http://demo.realgrid.com/Demo/DataCellStyleRows)을 일괄 적용할 수 있도록 함.
5. 그리드의 setCellStyle/setCellStyles의 dataRow에 -1을 지정하면 추가 중인 행의 셀들에 반영되도록 함.
6. 그리드의 editOptions.**enterToNextRow** 속성 추가. true로 지정하면 enter 키 입력 시 다음 행으로 이동. [Data Type](http://demo.realgrid.com/Demo/Editors) 페이지 참조.
7. 스타일 속성 지정 시 속성 이름을 잘못 지정한 경우 에러 대신 무시하도록 개선.
8. 병합된 셀이 포함된 행을 편집할 때 병합셀들을 구분해서 표시하도록 개선.
9. 한 줄짜리 텍스트를 표시하는 셀에서 좌우 padding이 반영되지 않는 문제 개선. (* 개선 전처럼 padding 없이 표시하기를 원하는 경우 컬럼 styles에 paddingLeft, paddingRight를 0으로 지정해야 함).
10. Footer 셀의 텍스트가 셀 너비보다 긴 경우 좌우 셀로 넘치는 문제 개선.
11. 컬럼그룹핑과 관련된 Copy/Paste 문제 개선.

