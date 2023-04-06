const images = ["0.jpg", "1.jpg", "2.jpg"];
// 이미지가 저장된 파일명을 배열에 추가한다.
const chosenImage = images[Math.floor(Math.random() * images.length)];
/* Math.random으로 랜덤한 숫자가 나오게끔 하고, images.length를 곱함으로써 배열의 최대길이까지 랜덤한 숫자가 나올수 있게 했다.
Math.floor은 랜덤으로 나온 수를 내림 함으로써 소수를 제외한 수가 나오게 된다.*/
const bgImage = document.createElement("img");
// createElement로 다양한 Element를 생성할 수 있고, img라는 Element를 생성했다.
bgImage.src = `img/${chosenImage}`;
// img라는 폴더 안에 있는 이미지 경로를 HTML body에 추가한다.
document.body.appendChild(bgImage);
// appendChild는 body에 맨마지막에 나타낸다는 뜻이고, prepend를 사용하면 맨앞에 나타낼 수 있다.