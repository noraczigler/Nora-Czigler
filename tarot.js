function getRandomNumber(num){
    return Math.floor(Math.random() * num)
}

const dailyTarot = {
    yourSign: ['sun', 'moon', 'devil', 'star', 'death', 'chariot', 'magician', 'fool'],
    cardFacing: ['upright', 'reversed'],
    cardMeaning: ['joy and success', 'addiction and playfullness', 'freedom and release', 'negativity and depression', 'innocence and new beginning', 'change and metamorphosis', 'fear of change and stagnation']

} 

let yourDailyTarot = []

for(let prop in dailyTarot) {
    let optionIdx = getRandomNumber(dailyTarot[prop].length)
switch(prop){
    case 'yourSign':
        yourDailyTarot.push(`Your sign is ${dailyTarot[prop][optionIdx]}.`)
        break;

    case 'cardFacing':
        yourDailyTarot.push(`The facing of your card is ${dailyTarot[prop][optionIdx]}.`)   
         break;
    case 'cardMeaning': 
    yourDailyTarot.push(`The meaning of your card is ${dailyTarot[prop][optionIdx]}.`)
    break;     
}
}

function formatTarot(tarot) {
    const formatted = yourDailyTarot.join('\n')
    console.log(formatted)
}

formatTarot(yourDailyTarot)



  