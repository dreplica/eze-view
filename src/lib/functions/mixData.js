export default function (data) {
    const copyData = JSON.parse(JSON.stringify(data))
    copyData.result = shuffle(copyData.result)
    
    return copyData
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    const set = new Set()
    while ([...set].length !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        set.add(randomIndex)
    }
    return [...set].map((item)=>array[item]);
}