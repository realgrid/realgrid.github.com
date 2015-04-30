---
layout: post
title: Released RealGrid Flash 1.1.13
date: 2015-03-13 15:47:54 +9:00 GMT
category: releasenote
product: flash
version: 1.1.13
---

* **EditOptions.forceInsert** 속성이 추가되었습니다. 기본값은 `false`로 기존과는 다르게 행 삽입후 편집없이 다른 행을 선택하면, 추가한 행이 취소됩니다. 기존과 같이 행 삽입후 편집없이 행 이동시 `commit`이 되도록 하려면 `forceInsert`를 `true`로 설정하셔야 합니다.
* Toast View를 표시하고 감추는 기능의 **showToast(), hideToast()**함수가 추가되었습니다.
* 현재 정렬된 컬럼를 알 수 있는 **GridBase.getSortedFields()**함수와 **GridBase.onSortingChanged** 콜백이 추가되었습니다.
* 다른 많은 것들이 개선되고 추가됐습니다. 보다 자세한 업데이트 사항은 Update Log를 참조 하십시오.
