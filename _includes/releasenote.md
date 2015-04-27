### RealGrid Flash 1.1.24 Released (2015.04.16)
* 정렬시 선택된 행을 유지할 수 있는 **SortingOptions.keepFocusedRow** 속성이 추가되었습니다. Column Sorting 페이지 참고.
* Row Grouping기준컬럼이 변경되는 경우 발생하는 *onGroupingChanged* 콜백 및 *isGrouped, isMergedGrouped, getGroupFields, getGroupFieldNames*함수등이 추가되었습니다. Row Grouping 페이지 참고.
* tab/enter 키로 마지막 셀을 벗어날 때 commit이나 다음 행으로 이동에 관련된 EditOptions.crossWhenExitLast,EditOptions.commitWhenExitLast 속성이 추가되었습니다. Editors 페이지를 참조.
* 다른 많은 것들이 개선되고 추가됐습니다. 보다 자세한 업데이트 사항은 Update Log를 참조 하십시오.

### RealGrid Flash 1.1.23 Released (2015.03.13)
* EditOptions.forceInsert 속성이 추가되었습니다. 기본값은 false로 기존과는 다르게 행 삽입후 편집없이 다른 행을 선택하면, 추가한 행이 취소됩니다.  
	기존과 같이 행 삽입후 편집없이 행 이동시 commit이 되도록 하려면 forceInsert를 true로 설정하셔야 합니다.
* Toast View를 표시하고 감추는 기능의 showToast(), hideToast()함수가 추가되었습니다.
* 현재 정렬된 컬럼를 알 수 있는 GridBase.getSortedFields()함수와 GridBase.onSortingChanged 콜백이 추가되었습니다.
* 다른 많은 것들이 개선되고 추가됐습니다. 보다 자세한 업데이트 사항은 Update Log를 참조 하십시오.