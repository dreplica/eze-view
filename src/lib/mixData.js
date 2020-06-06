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
    console.log("hollup")
    while ([...set].length !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        set.add(randomIndex)
    }
    console.log("na the mi d here",set)
    return [...set].map((item)=>array[item]);
}