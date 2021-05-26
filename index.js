const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-right-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');
const bottomRight = document.querySelector('.bottom-right-panel');

const getRandomPanel = () => {
    const panels = [
    topLeft,
    topRight,
    bottomRight,
    bottomLeft
    
    ];
return panels[parseInt(Math.random() * panels.length)];
};
const sequence = [ getRandomPanel()];
let sequenceToGuess = [...sequence];

const flash = panel => {
    return new Promise((resolve, reject) => {
        panel.className += 'active';
        setTimeout(() => {
            panel.className = panel.className.replace(
                'active',
                ''
            );
            setTimeout(() => {
            resolve();
            }, 250);
            }, 1000);
        });
    };
    let canClick = false; 

    const panelClicked = panelClicked =>  {
        if (!canClick) return;
        
        const expectedPanel = sequenceToGuess.shift();
        if(expectedPanel=== panelClicked){
            if (sequenceToGuess.length === 0){
                 //start new round
            }
        } else {
            alert('game over');
        }
    };

     const main = async () => {
            for (const panel of sequence){
                await flash(panel);
            }
        };

        main();