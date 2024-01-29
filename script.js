function generateRandomNumbers (num) {
    return Math.floor(Math.random() * num)
}

const collectiveDeeds = {
    todaysDeed: ['compliment someone on their personal style', 'buy someone a coffe', 'take their dog out for a walk', 'check in on an old person', 'volunteer to do some gardening for them'],
    theirResponse: ['and smiles', 'and send your a discount code', 'and offers to do the same for you', 'and shares your kindness on social media', 'and takes a selfie with you'],
    myReward: ['beer', 'chocolate', 'afternoon nap', 'indulgent massage', 'book a holiday']
}

let personalDeeds = []

for (let prop in collectiveDeeds) {
    let optionIDx = generateRandomNumbers(collectiveDeeds[prop].length)
    switch (prop) {
        case 'todaysDeed':
            personalDeeds.push(`Make someone feel good and ${collectiveDeeds[prop][optionIDx]}.`)
            break
        case 'theirResponse': 
            personalDeeds.push(`They say thank you, ${collectiveDeeds[prop][optionIDx]}.`)
            break
        case 'myReward':
            personalDeeds.push(`It makes me feel good, so I reward myself with a ${collectiveDeeds[prop][optionIDx]}.`) 
            break
        default:
            personalDeeds.push('There is not enough info')    
    }
}

function formatDeeds (deeds) {
    const formatted = personalDeeds.join('\n')
    console.log(formatted)
}

formatDeeds(personalDeeds);