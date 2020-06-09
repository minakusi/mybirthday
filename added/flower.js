var month=Number(document.querySelector("#m").textContent);

const flowerName = document.querySelector('#flowerName')
const flowerText = document.querySelector('#flowerText')
const flowerImg = document.querySelector('#flowerImg')
const flowerNameText = {
    1 : '수선화',
    2 : '물망초',
    3 : '데이지',
    4 : '금잔화',
    5 : '민들레',
    6 : '장미',
    7 : '라벤더',
    8 : '토끼풀',
    9 : '에리카',
    10 : '국화',
    11 : '초롱꽃',
    12 : '세이지'
}
const flowerImgsrc = {
    1 : 'https://previews.123rf.com/images/miradrozdowski/miradrozdowski1203/miradrozdowski120300272/12706247-%EC%88%98%EC%84%A0%ED%99%94-%EA%BD%83%EB%8B%A4%EB%B0%9C.jpg',
    2 : 'https://media.istockphoto.com/photos/forgetmenot-flowers-picture-id490695169',
    3 : 'https://previews.123rf.com/images/heikerau/heikerau1402/heikerau140200029/26016996-%EB%8D%B0%EC%9D%B4%EC%A7%80-%EA%BD%83%EB%8B%A4%EB%B0%9C.jpg',
    4 : 'https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2018/01/%EA%B8%88%EC%9E%94%ED%99%948.jpg',
    5 : 'https://cdn.pixabay.com/photo/2015/05/10/16/41/dandelion-761104_960_720.jpg',
    6 : 'https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    7 : 'https://images-na.ssl-images-amazon.com/images/I/51-MnkKe6fL._AC_SX425_.jpg',
    8 : 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F995C253359A6D13916',
    9 : 'https://cdn.pixabay.com/photo/2018/09/13/18/12/heide-3675425_960_720.jpg',
    10 : 'https://cdn.pixabay.com/photo/2020/02/16/15/00/chrysanthemum-4853789_960_720.jpg',
    11 : 'https://www.treeinfo.net/data/file/ti_gallery/thumb-877941103_49edaa93_DSCF0046_400x300.jpg',
    12 : 'https://cdn1.evitamins.com/images/blog/large/sage.jpg'   
}
const flowerContent = {
    1 : '<b>1월 탄생화 - 수선화</b><br><br>꽃말 : <b>신비 자존심 고결</b>',
    2 : '<b>2월 탄생화 - 물망초</b><br><br>꽃말 : <b>진실한 사랑, 나를 잊지 말아요</b>',
    3 : '<b>3월 탄생화 - 데이지</b><br><br>꽃말 : <b>평화, 순진, 미인</b>',
    4 : '<b>4월 탄생화 - 금잔화</b><br><br>꽃말 : <b>이별의 슬픔</b>',
    5 : '<b>5월 탄생화 - 민들레</b><br><br>꽃말 : <b>사랑의 신탁, 불사신</b>',
    6 : '<b>6월 탄생화 - 장미</b><br><br>꽃말 : <b>열렬한 사랑, 질투, 순결</b>',
    7 : '<b>7월 탄생화 - 라벤더</b><br><br>꽃말 : <b>정절, 풍부한 향기, 대답해주세요</b>',
    8 : '<b>8월 탄생화 - 토끼풀</b><br><br>꽃말 : <b>행운, 희망이 이루어짐</b>',
    9 : '<b>9월 탄생화 - 에리카</b><br><br>꽃말 : <b>고독, 쓸쓸함</b>',
    10 : '<b>10월 탄생화 - 국화</b><br><br>꽃말 : <b>청결, 정조, 순결</b>',
    11 : '<b>11월 탄생화 - 초롱꽃</b><br><br>꽃말 : <b>인도, 침묵</b>',    
    12 : '<b>12월 탄생화 - 세이지</b><br><br>꽃말 : <b>가정의 덕</b>'
}

flowerName.textContent = flowerNameText[month];
flowerImg.src = flowerImgsrc[month];
flowerText.innerHTML = flowerContent[month];
