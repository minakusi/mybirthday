var month=Number(document.querySelector("#m").textContent);
var day = Number(document.querySelector('#d').textContent);


const starName = document.querySelector('#starName')
const starText = document.querySelector('#starText')
const starImg = document.querySelector('#starImg')

const feature = {
    '염소' : '<b>12.22 ~ 1.19</b> <br><br> <b>* 최종목표는 지도자 * </b> <br> 숨은 의지, 디테일한 것들의 완벽, 불완전에 대한 두려움',
    '물병' : '<b>1.20 ~ 2.18 <br></b> <br> <b>* 정치적인 유토피안 *</b> <br> 진보, 평등, 그러나 은밀한 정치성향',
    '물고기' : '<b>2.19 ~ 3.20</b> <br><br> <b>* 중독된 몽상가 *</b> <br> 스폰지 같은 받아들임, 관조와 중독의 아이러니',
    '양' : '<b>3.21 ~ 4.19</b> <br><br> <b>* 날아다니는 현실주의자 *</b> <br> 왕성한 활동, 목표를 향한 고집, 자기방식',
    '황소' : '<b>4.20 ~ 5.20 <br></b><br> <b>* 알고보면 유물론자 *</b> <br> 감각, 느리지만 완전히, 완전히 믿기까지의 어려움',
    '쌍둥이' : '<b>5.21 ~ 6.21</b><br> <br> <b>* 지적인 분열 *</b> <br> 멀티태스킹, 모순된 요소, 끊임없는 인식',
    '게' : '<b>6.22 ~ 7.22</b> <br><br> <b>* 숨겨진 감수성 *</b> <br> 같은 위치에서 돌봐줌, 소극적 인내, 섬세한 정신',
    '사자' : '<b>7.23 ~ 8.22</b> <br> <br> <b>* 주목의 대상 *</b> <br> 드러냄, 드러남, 열정을 자랑함',
    '처녀' : '<b>8.23 ~ 9.23</b> <br><br> <b>* 섬세한 완벽주의자 *</b> <br>외곬, 완벽지향, 꼼꼼함의 대가',
    '천칭' : '<b>9.24 ~ 10.22</b> <br><br> <b>* 묘한 사교가 * </b><br> 평등한 애정/우정, 팔방미인, 극단적인 것들에 대한 두려움',
    '전갈' : '<b>10.23 ~ 11.22</b> <br><br> <b>* 미션 임파서블 *</b> <br> 직관, 통찰, 그리고 비밀스런 내적에너지',
    '사수' : '<b>11.23 ~ 12.24</b> <br><br> <b>* 스트레이트 낙천가 *</b> <br> 남한테 신경끔, 자기페이스, 자유로운 여행'
}

const imgSrc = {
    '염소' : '/added/starcapri.png',
    '물병' : '/added/staraqua.png',
    '물고기' : '/added/starpisces.png',
    '양' : '/added/starsheep.png',
    '황소' : '/added/starcow.png',
    '쌍둥이' : '/added/stargem.png',
    '게' : '/added/starcanc.png',
    '사자' : '/added/starleo.png',
    '처녀' : '/added/starvirgo.png',
    '천칭' : '/added/starlibra.png',
    '전갈' : '/added/starscol.png',
    '사수' : '/added/starsagi.png',
}


function star(name){
    starName.textContent = name+'자리';
    starText.innerHTML = feature[name];
    starImg.src = imgSrc[name];
}





if(month == 1 && day >= 20){star('물병');}
else if(month == 2 && day <= 18){star('물병');}

else if(month == 2 && day >= 19){star('물고기');}
else if(month == 3 && day <= 20){star('물고기');}

else if(month == 3 && day >= 21){star('양');}
else if(month == 4 && day <= 19){star('양');}

else if(month == 4 && day >= 20){star('황소');}
else if(month == 5 && day <= 20){star('황소');}

else if(month == 5 && day >= 21){star('쌍둥이');}
else if(month == 6 && day <= 21){star('쌍둥이');}

else if(month == 6 && day >= 22){star('게');}
else if(month == 7 && day <= 22){star('게');}

else if(month == 7 && day >= 23){star('사자');}
else if(month == 8 && day <= 22){star('사자');}

else if(month == 8 && day >= 23){star('처녀');}
else if(month == 9 && day <= 23){star('처녀');}

else if(month == 9 && day >= 24){star('천칭');}
else if(month == 10 && day <= 22){star('천칭');}

else if(month == 10 && day >= 23){star('전갈');}
else if(month == 11 && day <= 22){star('전갈');}

else if(month == 11 && day >= 23){star('사수');}
else if(month == 12 && day <= 24){star('사수');}

else if(month == 12 && day >= 25){star('염소');}
else{star('염소');}