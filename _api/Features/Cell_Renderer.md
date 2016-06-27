---
layout: apipost
title: Cell Renderer
part: Features
objectname: 
directiontype: 
permalink: /api/features/Cell Renderer/
tags:
  - Renderer
  - barcode
  - signal
  - icon
  - image
  - bar
  - shape
  - spark
  - text
  - 렌더러
  - 랜더러
  - 바코드
  - 아이콘
  - 이미지
  - 바
  - 스파크
  - 쉐이프
  - 도형
  - 텍스트
---

#### Description

데이터셀들의 값을 그리드에 표시하는 것은 셀 렌더러가 담당한다. 셀렌더러는 기본적으로 컬럼에서 생성되는 스타일 정보를 이용해서 렌더링하지만, 스타일만으로 부족한 경우 렌더러 자체의 속성을 지정해서 사용한다. 각각의 데이터컬럼에 셀렌더러의 종류와 속성들을 지정한다. 리얼그리드는 아래와 같은 몇 가지의 기본 셀 렌더러를 제공한다.

* [ActualTargetBulletRenderer](/api/types/ActualTargetBulletRenderer) - 목표값을 수직바로 실행값을 수평바로 비교하여 표시합니다.   
* [ActualTargetTextRenderer](/api/types/ActualTargetTextRenderer) -  "실행값 / 목표값" 형식으로 표시합니다.  
* [BarCellRenderer](/api/types/BarCellRenderer) - 숫자형 컬럼 셀의 값을 막대 상자로 표시합니다.   
* [Code128CellRenderer](/api/types/Code128CellRenderer) - 데이터를 Code128 심볼 타입의 바코드로 표시합니다.   
* [Code39CellRenderer](/api/types/Code39CellRenderer) - 데이터를 Code39 심볼 타입의 바코드로 표시합니다.    
* [CheckCellRenderer](/api/types/CheckCellRenderer) - 셀의 값을 true/false 두 가지 상태로 표시합니다.    
* [IconCellRenderer](/api/types/IconCellRenderer) - 컬럼에 지정된 ImageList의 이미지들 중 스타일 값 iconIndex 위치의 이미지를 텍스트와 함께 표시합니다.   
* [ImageCellRenderer](/api/types/ImageCellRenderer) - 데이터 셀의 값을 이미지 url로 해석해서 그 이미지를 내려받고 표시합니다.    
* [ShapeCellRenderer](/api/types/ShapeCellRenderer) - 그리드에 포함되어 있는 몇 개의 shape 아이콘 중 하나를 텍스트와 같이 표시합니다.    
* [SignalBarCellRenderer](/api/types/SignalBarCellRenderer) - 데이터 셀 값을 신호 세기로 표시합니다.    
* [SparkColumnRenderer](/api/types/SparkColumnRenderer) - 일정 범위 내의 데이터 흐름을 컬럼 형태로 표시합니다.   
* [SparkLineRenderer](/api/types/SparkLineRenderer) - 일정 범위 내의 데이터 흐름을 라인 형태로 표시합니다.    
* [SparkWinLossRenderer](/api/types/SparkWinLossRenderer) - 일정 범위 내의 데이터 흐름을 윈로스 형태로 표시합니다.     
* [TextCellRenderer](/api/types/TextCellRenderer) - 셀에 표시할 값을 텍스트로 표시합니다.   

---

#### Demo Links

* [Renderer Demo](http://demo.realgrid.net/Demo/RendererConcept)     
* [Actual/Target Renderer](http://demo.realgrid.com/Demo/ActualTargetRenderer)     
* [Bar Cell Renderer](http://demo.realgrid.com/Demo/BarCellRenderer)     
* [Barcode Cell Renderer](http://demo.realgrid.com/Demo/BarcodeCellRenderer)     
* [Check Cell Renderer](http://demo.realgrid.com/Demo/CheckCellRenderer)     
* [Icon Cell Renderer](http://demo.realgrid.com/Demo/IconCellRenderer)     
* [Image Cell Renderer](http://demo.realgrid.com/Demo/ImageCellRenderer)     
* [Shape Cell Renderer](http://demo.realgrid.com/Demo/ShapeCellRenderer)    
* [Signal Cell Renderer](http://demo.realgrid.com/Demo/SignalCellRenderer)   
* [Spark Renderer](http://demo.realgrid.com/Demo/SparkLineRenderer)     

