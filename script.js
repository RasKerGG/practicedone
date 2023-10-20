// const numberBlock = document.getElementById("numbers");
// const endPoint = 40;
// const speed = 5;
// var scores = {
//   score1: { score: 0,  end: 40 },
//   score2: { score: 0,  end: 30 },
//   score3: { score: 0,  end: 100 },
//   score4: { score: 0,  end: 120 }
// };

// window.addEventListener('scroll', function() {
//   const numberBlockPos = numberBlock.offsetTop,
//         winHeight = window.innerHeight;
//   let winScrollTop = window.scrollY,
//       scrollToElem = winScrollTop + winHeight,
//       anamatedNumbers = false;
  
//   if( (scrollToElem + 30 > numberBlockPos) && !anamatedNumbers) {
//     TweenMax.to(scores.score1, speed, {score: scores.score1.end, onUpdate: updateHandler, onUpdateParams: [1]});
//     TweenMax.to(scores.score2, speed, {score: scores.score2.end, onUpdate: updateHandler, onUpdateParams: [2]});
//     TweenMax.to(scores.score3, speed, {score: scores.score3.end, onUpdate: updateHandler, onUpdateParams: [3]});
//     TweenMax.to(scores.score4, speed, {score: scores.score4.end, onUpdate: updateHandler, onUpdateParams: [4]});
//   }
// });

// function updateHandler(index) {
//   let numberBlock = document.querySelector('.col[data-target="' + index  + '"] div');
//   numberBlock.innerHTML = scores[`score${index}`].score.toFixed(0);
// }