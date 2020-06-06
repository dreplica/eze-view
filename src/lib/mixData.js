export default function (data) {
    console.log("started")
    const copyData = JSON.parse(JSON.stringify(data))
    copyData.result = shuffle(copyData.result)
    console.log("ended",copyData)
    
    return copyData
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    const set = new Set()
    console.log("hollup")
    while ([...set].length !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        // currentIndex -= 1;
        set.add(randomIndex)
        // mix.push(randomIndex)
        // temporaryValue = array[currentIndex];
        // array[currentIndex] = array[randomIndex];
        // array[randomIndex] = temporaryValue;
    }
    // const d = new Set()
    console.log("na the mi d here",set)
    return [...set].map((item)=>array[item]);
}