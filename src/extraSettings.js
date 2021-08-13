/**
 * 声明，本项目仅帮助大家学习技术及娱乐，切勿将修改后的网站大规模传播及商用，以避免侵权！
 */

// 추가 점수
let extraScore = 16807;

// 무적 모드
let wuDi = true;

// 첫 과일 수정
let firstFruit = 0
;
// 과일 순서 반전
let reverseLevelUp = false;

// 무작위로 생성되는 과일 범위 지정
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 기본 모드 0부터 , 반전 모드 6부터
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 기본 모드 5까지 , 반전 모드 11까지
let setFruits = {
  // 처음 시작 할때 과일 지정
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 4, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일 튕기는 정도 설정 , 1 이하의 소수
let fruitQTan = 0.3;

// 과일 떨어지는 속도 설정. 클 수록 늦게 떨어짐.
let fruitSlowDown = false;

// 과일 바꾸기 가능 여부
let clickChangeFruit = false;

// 광고 링크
let adLink = false;

// 웹 제목 수정
document.getElementsByTagName("title")[0].innerText = '메이플 팬게임 버그판';

// 팝업 열기 여부
let selectModal = false;

