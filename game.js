// const init = () => {
//     let score = 0;
//     const words = ['바나나', '딸기', '자두', '히드라', '마린', '탱크'];
//     let wordBoxes = []
//     setInterval(() => {
//       const word = words[Math.round(Math.random() * (words.length - 1))];
//       const textnode = document.createElement('DIV');
//       textnode.textContent = word;
//       textnode.className = 'word-box';
//       textnode.style.left = Math.random() * 200 + 'px';
//       wordBoxes.push(textnode);
//       document.getElementById('map').appendChild(textnode);
//       setInterval(() => {
//         if(!textnode.style.top)
//           textnode.style.top = '10px';
//         else
//           textnode.style.top = (parseInt(textnode.style.top) + 10) + 'px';
//       }, 300);
//     }, 1000)

//     document.getElementById('form').addEventListener('submit', (e) => {
//       const answerInput = document.getElementById('answer');
      
//       e.preventDefault();
//       if(!wordBoxes.some((wordBox, i) => {
//         if(wordBox.textContent === answerInput.value) {
//           wordBoxes.splice(i, 1);
//           wordBox.remove();
//           score += 10;
//           document.getElementById('score').textContent = score;
//           return true;
//         }
//       })) {
//         score -= 5;
//         document.getElementById('score').textContent = score;
//       }

//       answerInput.value = '';
//       return false;
//     })
//     // createElement()
    
    
//   };
//   init();

const init = () => {

    let score = 0;
    const scoreBox = document.getElementById('score');
    const domElements = [];
    const rainDrop = () => {
        const wordString = "Out of the night that covers me Black as the pit from pole to pole I thank whatever gods may be For my unconquerable soul";
        const words = wordString.split(' ');
        const textNode = document.createElement('DIV');
        
        setInterval(() => {
            const domElement = document.createElement('div');
            
            // 0 1 2 3 4 5 6 7 ... 19
            const wordPosition = Math.round((words.length  - 1 ) * Math.random());
            domElement.textContent = words[wordPosition];
            domElement.className = 'word-box';
            domElement.style.top = '0px';
            domElement.style.left = (200 * Math.random()) + 'px';

            const wordDropBox = document.getElementById('map');
            wordDropBox.appendChild(domElement);

            domElements.push(domElement);

            setInterval(()=> {
                domElement.style.top = (parseInt(domElement.style.top) + 10) + 'px';
            }, 150);
        }, 1000);
    }

    const setUserInputHandler = () => {
        document.getElementById('form').addEventListener('submit', (e) => {
            e.preventDefault();

            const answerDom = document.getElementById('answer');
            
            for(let i = 0; i < domElements.length; i++) {
                const domElement = domElements[i];
                if(domElement.textContent === answerDom.value) {
                    domElement.remove();
                    domElements.splice(i,1);
                    score += 10;
                    document.getElementById('score').textContent = score;
                    break;
                }
            };
            
            answerDom.value = '';

            // return false;
        })
    }

    rainDrop();
    setUserInputHandler();
    
}


init();