import dayjs from "dayjs";

const capsuledata1 = [
  {
    id: 1,
    text: "2024년에는 뭐하지",
  },
  {
    id: 2,
    text: "2025년에도 행복",
  },
  {
    id: 3,
    text: "배고프다",
  },
];

const capsuledata2 = [
  {
    id: 1,
    text: "2025년에는 뭐하지",
  },
  {
    id: 2,
    text: "2099년에도 행복",
  },
  {
    id: 3,
    text: "안녕하세요",
  },
  {
    id: 4,
    text: "오늘 저녁 뭐먹지",
  },
];

const capsuledata3 = [
  {
    id: 1,
    text: "hello",
  },
  {
    id: 2,
    text: "everyone",
  },
  {
    id: 3,
    text: "safckljvzcjafls",
  },
  {
    id: 4,
    text: "어렵다 ..",
  },
  {
    id: 5,
    text: "파이팅",
  },
];

const leftdays = () => {
  const today = dayjs();
  const endOfYear = dayjs().endOf("year");
  const daysLeft = endOfYear.diff(today, "day");
  if (daysLeft === 0) {
    return "DAY";
  } else {
    return daysLeft;
  }
}; // 오늘부터 2024년 12월 31일까지의 남은 날짜 계산기. 디데이가 되면 <D-DAY>로 표시함

export { capsuledata1, capsuledata2, capsuledata3, leftdays };
