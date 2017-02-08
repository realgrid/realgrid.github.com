---
layout: apipost
title: Expression
part: Features
objectname: 
directiontype: 
permalink: /api/features/Expression/
tags:
  - Expression
  - Operator
  - 표현식
  - 수식
  - 연산자
---

#### Description

리얼그리드는 동적 스타일 Criteria, 편집 Validation 등 여러 영역에서 사용되는 수식 모델을 제공한다. RealGrid Expression은 Pascal 언어의 수식 문법 일부를 기반으로 하고 Data를 다루는데 필요한 몇가지 연산자 등을 추가한다. 또, 리얼그리드는 실행 시간에 그리드가 관리하고 표시하고 있는 값들에 접근할 수 있는 몇 개의 내장 변수들을 자동으로 생성해서 Expression에서 사용할 수 있도록 한다.
사용자 코드를 최대한 억제하고 그리드 스타일이나 Expression으로 그리드를 표현하게 되면 재사용 가능한 UI가 가능해질 수 있다.

#### Syntax

<pre class="prettyprint">
Expression ::= SimpleExpression # (RelationalOperator SimpleExpression)
SimpleExpression ::= Term # (AddingOperator Term)
Term ::= Factor # (MultiplyingOperator Factor)
Factor ::= (Expression) \| Variable \| Unsigned Constant \| ConvertingOperator Factor \| UnaryOperator Factor
Unsigned Constant ::= Unsigned Number \| Charactor String \| null
</pre>

#### Operators

우선 순위가 높은 것들부터 표시한 연산자들입니다.

<pre class="prettyprint">
Converting Operator ::= str \| num \| bool
Unary Operator ::= not \| - \| + \| len
Multiplying Operator ::= * \| / \| div \| mod \| and
Adding Operator ::= + \| - \| or \| xor
Relational Operator ::= = \| <> \| < \| > \| <= \| >= \| is \| is not \| match \| not match \| imatch \| not imatch \| like \| not like \| ilike \| not ilike
</pre>

* 수식에서 연산자는 대소문자 구분없이 사용될 수 있다.
* str, num, bool는 각각 문자열, 숫자, Boolean 형으로 변환하는 연산자다.
* len은 피연산자를 문자열로 변화 후 그 길이를 리턴하는 연산자다.
* lenb는 피연산자를 euc-kr 완성형 문자열로 변경했을 때 그 문자열의 길이다. 데이터베이스나 엑셀 등의 lenb, lengthb에 해당한다.
* div 는 정수형 나누기다. "v1 div v2"가 actionscript "int(int(v1) / int(v2))"로 실행된다.
* and, or, xor 는 Boolean 연산자다.
* Equality 연산자는 ==가 아니라 = 이다.
* Not Equality 연산자는 !=가 아니라 <> 이다.
* 현재 is, is not 연산자의 피연산자는 empty, null, defined, nan 이다.
* match, imatch 는 정규식 연산자이다. 왼쪽 피연사자가 오른쪽 정규식에 match되는 부분이 하나라도 존재하면 true가 된다. imatch는 대소문자를 구분하지 않는 정규식 연산다다.
* like, ilike 는 SQL Like 연산자와 유사하다. ilike는 대소문자를 구분하지 않는다.

#### Runtimes

리얼그리드는 Expression이 실행되는 상황에 맞게 필요한 값을 리턴하는 변수들이 생성되는 실행 환경을 제공한다. 이 변수들의 이름은 대소문자를 구분하지 않는다.

##### Cell Validation

* value - 편집하는 셀의 값.
* base - 편집셀 데이터필드의 기준 필드 값.
* field - 편집셀 데이터필드의 필드 인덱스.
* row - 편집셀이 포함된 Item의 인덱스.
* datarow - 편집셀이 참조하는 데이터행의 인덱스.
* checked - 편집셀이 포함된 Item의 checked 상태. true/false 로 리턴.

##### Row Validation

* value[] - 편집 행의 각 필드 값을 value["field name"]나 value[fieldIndex]로 리턴.
* values[] - value[]와 동일.
* row -	편집 행 Item 인덱스.
* datarow - 편집 행이 데이터 행의 인덱스.
* checked - 편집 행이 check된 상태면 true를 리턴.

##### Colum Filter

* value - 현재 필터링 여부를 검사하는 데이터셀의 값.
* field- 데이터셀의 데이터필드 인덱스.

##### Column Summary

* count - 데이터행의 갯수.
* sum - 컬럼에 포함된 모든 데이터셀의 값들을 더한 값.
* max - 컬럼에 포함된 모든 데이터셀의 값들 중 가장 큰 값.
* min - 컬럼에 포함된 모든 데이터셀의 값들 중 가장 작은 값.
* avg - 컬럼에 포함된 모든 데이터셀의 값들의 평균.
* var - 컬럼에 포함된 모든 데이터셀의 값들의 분산.
* varp - 컬럼에 포함된 모든 데이터셀의 값들의 모집단 분산.
* stdev - 컬럼에 포함된 모든 데이터셀의 값들의 표준편차.
* stdevp - 컬럼에 포함된 모든 데이터셀의 값들의 모집단 표준편차.

var/varp/stdev/stdevp는 그리드 summaryMode가 SummaryMode.STATISTICS 일 때만 계산된다.

##### RowGroup Summary

* count- 그룹에 포함된 데이터행들의 갯수.
* sum -	컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값을 더한 값.
* max - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들 중 가장 큰 값.
* min - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들 중 가장 작은 값.
* avg - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들의 평균.
* var - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들의 분산.
* varp - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들의 모집단 분산.
* stdev - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들의 표준편차.
* stdevp - 컬럼 데이터셀들 중 그룹에 포함된 모든 셀의 값들의 모집단 표준편차.

##### Column Dynamic Styles

* value - 데이터셀의 값.
* value[] - 데이터행의 각 필드 값을 value["field name"]나 value[fieldIndex]로 리턴.
* values[] - 데이터행의 각 필드 값을 values["field name"]나 values[fieldIndex]로 리턴.
* base - 데이터셀이 참조하는 데이터필드의 기준 필드의 값.
* row - 데이터셀이 포함된 Item의 인덱스.
* field - 데이터셀이 참조하는 데이터필드의 인덱스.
* datarow - 데이터셀이 참조하는 데이터행의 인덱스.
* checked - 데이터셀이 포함된 Item의 checked 상태. true/false로 리턴.
* state - 데이터셀이 포함된 데이터 행의 상태. 'c':생성, 'u':수정, 'd':삭제, 'x':생성 후 삭제.

##### Row Dynamic Styles

* value[] - 표시 중인 행의 각 필드 값을 value["field name"]나 value[fieldIndex]로 리턴.
* values[] - 표시 중인 행의 각 필드 값을 values["field name"]나 values[fieldIndex]로 리턴.
* row - 표시 중인 행의 Item 인덱스.
* datarow - 표시 중인 행의 데이터행 인덱스.
* checked - 표시 중인 행의 checked 상태. true/false로 리턴.
* state - 표시 중인 행이 참조하는 데이터행의 상태. 'c':생성, 'u':수정, 'd':삭제, 'x':생성 후 삭제.

---

#### Demo Links

* [Edit Column Validation Demo](http://demo.realgrid.com/Validation/ColumnValidation/)   
* [Row Vaildations](http://demo.realgrid.com/Validation/RowValidation/)   
* [Row Grouping](http://demo.realgrid.com/RowGroup/RowGrouping/)   
* [Dynamic Styles on Columns](http://demo.realgrid.com/GridStyle/DynamicStylesonColumns/)  
* [Dynamic Styles on Rows](http://demo.realgrid.com/GridStyle/DynamicStylesonRows/)  
 


