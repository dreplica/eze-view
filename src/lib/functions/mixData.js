export default function (data) {
    console.log("started")
    const copyData = JSON.parse(JSON.stringify(data))
    copyData.result = shuffle(copyData.result)
    console.log("ended",copyData)
    
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