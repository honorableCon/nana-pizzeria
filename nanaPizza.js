import readlineSync from 'readline-sync';

let allIngredients = {}
const numberOfClient = parseInt(readlineSync.question(""));


function getClientChoices(){
    let like = readlineSync.question("").split(' ');
    let dislike = readlineSync.question("").split(' ');
    
    let likedIngredient = like.slice(1)
    let dislikedIngredient = dislike.slice(1)


    likedIngredient.forEach( i => {
        if(allIngredients.hasOwnProperty(i)){
            ++allIngredients[i].like
        }else{
            allIngredients[i] = {like : 1, dislike:0};
        }
    })

    dislikedIngredient.forEach( i => {
        if(allIngredients.hasOwnProperty(i)){
            ++allIngredients[i].dislike
        }
    })
}

for (let i = 0; i < numberOfClient; i++) {
    getClientChoices();
}

let finalCombo = []
for (const [ingredient, values] of Object.entries(allIngredients)) {
    if (values.like > values.dislike) {
        finalCombo.push(ingredient)
    }
}
console.log(finalCombo);

