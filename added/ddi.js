var year=Number(document.querySelector('#y').textContent);


//1. 그림 바꾸고
//2. 설명? 바꾸기
const ddiPic=document.querySelector('#twimg')
const ddiName=document.querySelector('#twname')
const ddiContent=document.querySelector('#twcontent')
const picture={
    'mouse':'/added/mouse.png',
    'cow':'/added/cow.png',
    'tiger':'/added/tiger.png',
    'rabbit':'/added/rabbit.png',
    'dragon':'/added/dragon.png',
    'snake':'/added/snake.png',
    'horse':'/added/horse.png',
    'sheep':'/added/sheep.png',
    'monkey':'/added/monkey.png',
    'pig':'/added/pig.png',
    'chicken':'/added/chicken.png',
    'dog':'/added/dog.png'
} 
const twfeature={
    'mouse':'쥐띠는 근면검소하고 자신보다 상대방을 더 배려하는 성품을 지녔어요. 외면적으로는 부드럽고 유연해 보이지만 일단 결심한 일은 집념있게 해결하며 바쁠수록 더 즐겁고 신나게 일하는 특성을 지녔어요.',
    'cow':'소띠는 어떤 역경과 힘든 일도 물러남 없이 꿋꿋하게 해쳐나가는 타입이에요. 외면적으로는 우둔해 보인다 해도 내면으로는 강한 카리스마와 이성적인 판단을 할 수 있는 능력을 가지고 있어요.',
    'tiger':'범띠는 낙천적이고 적극적인 성격으로 언제나 밝게 살아가는 타입이에요. 또 산중의 왕으로 불리듯 다른 사람에게 구속받거나 통제받는 것을 극도로 싫어하는 특징을 지녔어요.',
    'rabbit':'토끼띠는 상냥하고 대인관계에서도 대립보다는 타협을 좋아하는 성품을 지녔어요. 자신이 만들어 놓은 길만 다니는 토끼의 습성 때문에 토끼띠인 사람도 한가지 일에 빠지면 다른 일을 생각하지 못하는 편이에요.',
    'dragon':'용띠는 자존심이 강하고 어떤 일이든 지기 싫어하는 성품을 지녔어요. 하지만 내면은 어린이와 같은 순수함과 따뜻한 마음을 지니고 있어요. 용이 상상 속의 동물인 것처럼 용띠인 사람도 상상력과 창조력이 뛰어나요.',
    'snake':'뱀띠는 상황판단력이 빠르며 논리적인 성격이에요. 단, 너무 현실적이고 자기중심적이여서 주변사람들의 충고를 귀담아 듣지 않는 탓으로 난감한 처지에 빠지기도 해요. 숲속을 조용히 기어다니는 뱀의 습성처럼 뱀띠인 사람도 자신에 관한 일은 잘 표현하지 않아요.',
    'horse':'말띠는 계획을 실행하는 힘과 시간개념이 뛰어나기 때문에 주어진 일은 철두철미하게 해내는 강한의지력을 가지고 있으며 솔선수범하는 성품을 지녔어요. 옛부터 말이 국가적 행사에 많이 쓰여왔기 때문에 말띠인 사람도 대의를 중요하게 여겨요.',
    'sheep':'양띠는 온순하고 순박한 성격이지만 한번 마음먹은 일은 절대로 포기하지 않는 고집이 있어요. 다만 자존심이 강하고 드러나는 일을 싫어하는 편이에요.',
    'monkey':'원숭이띠는 창의력과 위급한 상황에서 순간적인 판단력이 뛰어난 타입이에요. 짖궂을 만큼 쾌활한 원숭이처럼 원숭이띠인 사람도 주변사람들을 웃기고 울리는 재주를 가지고 있어서 어디서나 분위기 메이커로 환영 받아요.',
    'pig':'돼지띠는 정직하고 단순하면서도 믿음을 주는 성품이에요. 차분하며 한 곳에만 머무르는 성격이지만 건강에는 그리 좋지 않은 상황이에요.',
    'chicken':'닭띠는 이해심과 명석한 판단력을 가지고 있으며 우수한 학업성과를 올릴 수 있는 타입이에요. 닭이 새벽에 알리는 동물이기에 닭띠인 사람은 자신을 희생해서라도 타인을 위해 베푸는 성격이에요.',
    'dog':'개띠는 현대사람들이 살아가는 데 필요한 성격을 가장 많이 가지고 있어요. 창조성도 있고 맡은 임무도 포기하지 않고 끝까지 수행하는 집념을 가진 타입이에요. 개가 주인에 대한 충성심이 강한 것처럼 개띠인 사람도 한번 맺은 관계는 끝까지 이어 가요.'
}


if(year%12===4){
    ddiPic.src=picture['mouse'];
    ddiName.textContent='Mouse';
    ddiContent.textContent=twfeature['mouse'];
}
else if(year%12===5){
    ddiPic.src=picture['cow'];
    ddiName.textContent='Cow';
    ddiContent.textContent=twfeature['cow'];
}
else if(year%12===6){
    ddiPic.src=picture['tiger'];
    ddiName.textContent='Tiger';
    ddiContent.textContent=twfeature['tiger'];
}
else if(year%12===7){
    ddiPic.src=picture['rabbit'];
    ddiName.textContent='Rabbit';
    ddiContent.textContent=twfeature['rabbit'];
}
else if(year%12===8){
    ddiPic.src=picture['dragon'];
    ddiName.textContent='Dragon';
    ddiContent.textContent=twfeature['dragon'];
}
else if(year%12===9){
    ddiPic.src=picture['snake'];
    ddiName.textContent='Snake';
    ddiContent.textContent=twfeature['snake'];
}
else if(year%12===10){
    ddiPic.src=picture['horse'];
    ddiName.textContent='Horse';
    ddiContent.textContent=twfeature['horse'];
}
else if(year%12===11){
    ddiPic.src=picture['sheep'];
    ddiName.textContent='Sheep';
    ddiContent.textContent=twfeature['sheep'];
}
else if(year%12===0){
    ddiPic.src=picture['monkey'];
    ddiName.textContent='Monkey';
    ddiContent.textContent=twfeature['monkey'];
}
else if(year%12===1){
    ddiPic.src=picture['chicken'];
    ddiName.textContent='Chicken';
    ddiContent.textContent=twfeature['chicken'];
}
else if(year%12===2){
    ddiPic.src=picture['dog'];
    ddiName.textContent='Dog';
    ddiContent.textContent=twfeature['dog'];
}
else if(year%12===3){
    ddiPic.src=picture['pig'];
    ddiName.textContent='Pig';
    ddiContent.textContent=twfeature['pig'];
}
