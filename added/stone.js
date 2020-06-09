var month=Number(document.querySelector("#m").textContent);

const stoneName = document.querySelector('#stoneName')
const stoneText = document.querySelector('#stoneText')
const stoneImg = document.querySelector('#stoneImg')
const stoneNameText = {
    1 : 'Garget',
    2 : 'Amethyst',
    3 : 'Aquamarine',
    4 : 'Diamond',
    5 : 'Emerald',
    6 : 'Pearl',
    7 : 'Ruby',
    8 : 'Peridot',
    9 : 'Sapphire',
    10 : 'Opal',
    11 : 'Topaz',
    12 : 'Turquoise'
}
const stoneImgsrc = {
    1 : 'https://t1.daumcdn.net/cfile/blog/221C883F52B5564621',
    2 : 'https://t1.daumcdn.net/cfile/tistory/9968CD3C5E28648D0E',
    3 : 'https://t1.daumcdn.net/cfile/tistory/9902A54F5E3C3A5C2E',
    4 : 'https://imgnn.seoul.co.kr/img/upload/2019/04/03/SSI_20190403104934_V.jpg',
    5 : 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F231A2449553133B42E',
    6 : 'https://images-na.ssl-images-amazon.com/images/I/41jLg6lsU9L._UL1000_.jpg',
    7 : 'https://images-na.ssl-images-amazon.com/images/I/5113SWR-iAL._AC_SX522_.jpg',
    8 : 'https://lh3.googleusercontent.com/proxy/FtiJLEpFlW0WfYQvgVo5XewCtY76sLpIj7qgWNIkvynwHglrNvEn2deX3lemX7UssPxUxCr-jQquwDo4VNuhnaXmQ40onugXWlVam_p73APEv5ZVKWTiBv6gFLKhX1lxS91GGAK5N8tfVLjMYP85IRRkboJima99kVQ6FGAxSN7_EYXykp4oGAdJz2aznyMiMffD18UMT2x8B_VTeflxt5y0hy1RnujJlM0',
    9 : 'https://lh3.googleusercontent.com/proxy/yU1Rhvm1uyu03Yzz8mL3W4n_5S-5NYPMEku4BYBKQ6UF67A_urGHW1rEYVcnNisrLMKGgCspfSJJIOL5YGf607yggnWGwXL-7bMQh0CqpN2s1XxfS237joZIp54NkguRtVK24FW6uIZGQ_UMX3cZkv2dSNPAjW_NAKFx9XwxaMeivRL-e8xk0VZIJHW-Oykh_K4hlh7KMYaMDLaLJReAiT0THaRlniCtjlHYggDuo6Yg5jY',
    10 : 'https://mblogthumb-phinf.pstatic.net/20161001_221/cnxoals_1475301008109g5Vxm_JPEG/g6IyTz7.jpg?type=w800',
    11 : 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F24628A4058634CC432',
    12 : 'data:image/jpeg;base64,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'   
}
const stoneContent = {
    1 : '<b>1월 탄생석 - 가넷</b><br><br>의미 : <br><b>진실 우정 충성 불변 진리</b>',
    2 : '<b>2월 탄생석 - 자수정</b><br><br>의미 : <br><b>성실 평화 `하늘과 인간을 이어주는 보석`</b>',
    3 : '<b>3월 탄생석 - 아쿠아마린</b><br><br>의미 : <br><b>영원한 젊음과 행복, 총명</b>',
    4 : '<b>4월 탄생석 - 다이아몬드</b><br><br>의미 : <br><b>불멸 사랑 고귀</b>',
    5 : '<b>5월 탄생석 - 에메랄드</b><br><br>의미 : <br><b>행복 행운 정조 순결</b>',
    6 : '<b>6월 탄생석 - 진주</b><br><br>의미 : <br><b>순결 부귀 건강</b>',
    7 : '<b>7월 탄생석 - 루비</b><br><br>의미 : <br><b>사랑 평화 용기 정의</b>',
    8 : '<b>8월 탄생석 - 페리도트</b><br><br>의미 : <br><b>부부의 행복, 친구와의 화합</b>',
    9 : '<b>9월 탄생석 - 사파이어</b><br><br>의미 : <br><b>성실 진실 진리 불변</b>',
    10 : '<b>10월 탄생석 - 오팔</b><br><br>의미 : <br><b>희망 순결</b>',
    11 : '<b>11월 탄생석 - 토파즈</b><br><br>의미 : <br><b>건강 희망 우정 결백 우애</b>',    
    12 : '<b>12월 탄생석 - 터키석</b><br><br>의미 : <br><b>성공 승리 힘 지혜 사랑</b>'
}

stoneName.textContent = stoneNameText[month];
stoneImg.src = stoneImgsrc[month];
stoneText.innerHTML = stoneContent[month];
