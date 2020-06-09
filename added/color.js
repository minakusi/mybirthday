var month=Number(document.querySelector("#m").textContent);

//<색깔>
//var month 변수에서 값을 받아와서 그 값대로 html 텍스트 변경, 해당 박스 안 색깔 변경, 배경 색깔 변경 
const pageBack=document.querySelector('body')
const boxBack=document.querySelector('#colorbox')
const boxContent=document.querySelector('#colorcontent')
const colName=document.querySelector('#colorname')

const colorfeature={
    'Caramel':'캐러멜은 논리적이고 확실한 발언권, 물질과 결단의 색입니다. 실체 없이 들떠 있던 12월이 끝난 후, 우리는 실용적이고 실제적인 1월을 만났습니다. 또한 땅의 색과도 같은 카라멜은 우리에게 안정감과 책임감을 느끼도록 도와줍니다. 이 색깔은 우리가 훈계와 끈기를 통해 우리의 목표, 혹은 더 큰 야망을 깊게 뿌리내리도록 격려합니다.',
    'Lilac':'영감과 상상력을 불러일으키는 이 색깔은 인간성과 친절함을 불러 일으킵니다.엷은 라일락 컬러는 우리의 정신적 이해력을 높일 뿐 아니라, 공동체의 한 사람으로서 우리의 친구들과 가족들을 이해할 수 있도록 도와 줍니다. 감정적으로 엉켜 있을 때 이 색깔을 사용하세요. 여러분이 문제를 분리하고 받아들이며, 이해하는 데 도움이 될 수 있습니다.',
    'Fair_Aqua':'몽환적이고 환상적인 이 색깔은 의식과 무의식의 세계 사이의 사람들, 또는 모호한 무언가를 인도하거나 현실로 끌어내는 데 도움이 됩니다. 바다의 신인 넵튠의 색깔이기도 한 페어 아쿠아는 신뢰와 명확함의 특성도 갖고 있습니다.',
    'Cayenne':'정열적이고 정력적인 이 색깔은 보이는 만큼이나 정열, 힘 그리고 용기를 상징합니다. 4월이 오면서 우리는 막 봄에 접어들었고, 모든 것들이 성장과 풍요로움에 대한 약속을 받았습니다. 이제 모든 것은 새롭고 흥미로운 것이 될 것이고, 새로운 시작과 행동 개시를 위한 시간이 충분합니다.',
    'Bird_Green':'활력이 넘쳐 보이는 이 색깔은, 안정성과 치유의 색깔입니다. 버드 그린은 마음을 열고 영혼을 다시 심습니다. 태양은 5월달에 황소자리를 통과하고, 에너지가 뻗어나가면서 비로소 푸르름은 선명한 녹색으로 변해 우리를 빛내 줍니다. 또한 버드 그린은 우리에게 힘과 물질의 균형을 제공하는 색깔이기도 합니다.',
    'Aspen_Gold':'에너지 넘치고 활력적인 이 색은 반짝임과 빛으로 가득찬 색입니다. 아스펜 골드는 우리의 영혼을 끌어올리고 우리 삶에 일조할 수 있는 능력을 가지고 있습니다. 6월 한 달 동안 커뮤니케이션의 행성인 수성이 당신과 함께합니다. 또한, 노란 빛의 색은 두뇌를 자극하고 지능과 정신력을 향상시키는 것으로 알려져 있습니다.',
    'Coral_Blush':'부드럽고 마음이 편해지는 색깔입니다. 또한 코랄 블러쉬는 사랑과 수용성을 고취시킵니다. 7월에 하늘을 지배하는 것은 달인데, 달이 정해진 단계와 순환을 거치듯이 자연스러운 색깔입니다. 이 색깔에 섞인 은색은 변화, 반사 그리고 수용성의 가치를 의미하고, 핑크색은 사랑과 부드러움을 상징합니다. 이 두 색은 변화의 시기에 사용할 수 있는 색과 감정적 치유에 사용될 수 있는 색입니다.',
    'Sun_Orange':'이것은 권력과 위대함을 나타내는 태양의 색깔입니다. 금빛으로 빛나는 태양은 영적이고 물질적인 부를 의미한다. 8월 한 달 동안 태양은 웅장함, 귀족적임을 상징하는 사자자리를 지나가게 됩니다. 이 색깔이 가진 빛은 어둠이 짙어지고 외부로부터 여러분 스스로를 보호할 필요가 있을 때 특히 도움이 될 것입니다. 또한 당신을 부유하게 할 물질적 풍요와 지위를 나타내기도 합니다.',
    'Bach_Blue':'바하블루는 아름다움, 순수함, 지혜로 보답하는 신성하고 매혹적인 색입니다. 9월에는 수성과 금성이 하늘을 지나가고 있습니다. 또한 9월은 우리의 생각이 넓어지고 아름다움에 대한 인식이 고조되고 있는 때입니다. 바하 블루는 우리의 생각을 폭넓은 범위로 증가시킵니다. 또한 긴장을 완화시키고 평온을 증진시키는데 도움이 될 수 있습니다.',
    'Cerulean':'세룰리안은 사랑, 아름다움, 그리고 균형을 의미합니다. 평화와 평온함을 구체화하고, 우리에게 좀더 단호한 행동을 취하도록 격려해 주는 색깔입니다. 10월을 관장하는 비너스는 사랑과 미를 의미합니다. 여러분의 아름다움을 향상시키거나 주변 환경을 정리하기에 좋은 달입니다.',
    'Claret_Red':'이 색은 깊이, 힘, 그리고 사랑을 자극하는 색깔입니다. 이 달에 태어난 사람들은 세속적인 것 너머 다른 사람들의 마음 속에 있는 것들을 볼 수 있습니다. 또한 이것은 다양한 시선을 보다 편안하게 통합해 주는 훌륭한 색입니다. 클라렛 레드는 여러분이 꿈과 감정을 형성함으로써 영감을 얻도록 도와 줍니다.',
    'Pagoda_Blue':'이 색은 지혜와 진실 그리고 낙관주의를 상징합니다. 차분하지만 청량한 파란빛은 이 색깔을 사용한 사람들을 신뢰할 수 있다고 믿게 만드는 힘이 있습니다. 또, 여행하거나 탐험하는 동안 사용할 수 있는 멋진 색이기도 하며, 다른 관점을 가진 사람들을 다루는 데 유용한 색깔입니다.'
}




if(month===1){
    pageBack.style.backgroundColor='#d9947c';
    boxBack.style.backgroundColor='#d9947c';
    colName.textContent='Caramel';
    boxContent.textContent=colorfeature['Caramel'];
}
else if(month===2){
    pageBack.style.backgroundColor='#bf9acb';
    boxBack.style.backgroundColor='#bf9acb';
    colName.textContent='Lilac';
    boxContent.textContent=colorfeature['Lilac'];
}
else if(month===3){
    pageBack.style.backgroundColor='#c1e9e3';
    boxBack.style.backgroundColor='#c1e9e3';
    colName.textContent='Fair_Aqua';
    boxContent.textContent=colorfeature['Fair_Aqua'];

}
else if(month===4){
    pageBack.style.backgroundColor='#dd4b55';
    boxBack.style.backgroundColor='#dd4b55';
    colName.textContent='Cayenne';
    boxContent.textContent=colorfeature['Cayenne'];

}
else if(month===5){
    pageBack.style.backgroundColor='#7cb268';
    boxBack.style.backgroundColor='#7cb268';
    colName.textContent='Bird_Green';
    boxContent.textContent=colorfeature['Bird_Green'];

}
else if(month===6){
    pageBack.style.backgroundColor='#fed762';
    boxBack.style.backgroundColor='#fed762';
    colName.textContent='Aspen_Gold';
    boxContent.textContent=colorfeature['Aspen_Gold'];

}
else if(month===7){
    pageBack.style.backgroundColor='#e8b8c2';
    boxBack.style.backgroundColor='#e8b8c2';
    colName.textContent='Coral_Blush';
    boxContent.textContent=colorfeature['Coral_Blush'];

}
else if(month===8){
    pageBack.style.backgroundColor='#f08042';
    boxBack.style.backgroundColor='#f08042';
    colName.textContent='Sun_Orange';
    boxContent.textContent=colorfeature['Sun_Orange'];

}
else if(month===9){
    pageBack.style.backgroundColor='#5367af';
    boxBack.style.backgroundColor='#5367af';
    colName.textContent='Bach_Blue';
    boxContent.textContent=colorfeature['Bach_Blue'];

}
else if(month===10){
    pageBack.style.backgroundColor='#9bb8d4';
    boxBack.style.backgroundColor='#9bb8d4';
    colName.textContent='Cerulean';
    boxContent.textContent=colorfeature['Cerulean'];

}
else if(month===11){
    pageBack.style.backgroundColor='#bf4c66';
    boxBack.style.backgroundColor='#bf4c66';
    colName.textContent='Claret_Red';
    boxContent.textContent=colorfeature['Claret_Red'];

}
else if(month===12){
    pageBack.style.backgroundColor='#228090';
    boxBack.style.backgroundColor='#228090';
    colName.textContent='Pagoda_Blue';
    boxContent.textContent=colorfeature['Pagoda_Blue'];

}