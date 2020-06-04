export default function (data) {
    const copyData = JSON.parse(JSON.stringify(data))
    const length = copyData.phone.length;

    const array = Array.from({ length }, (val, ind) => ind)

    const divisorFirst = array.filter((val) => val % 5 === 0)
    const divisorSecond = array.filter((val) => val % 2 === 0)
    const divisorFinal = array.filter((val) => (val % 2 !== 0) && (val % 5 !== 0))

    const set = new Set([...divisorFirst, ...divisorSecond, ...divisorFinal])

    copyData.phone = [...set].map((phones) => data.phone[phones])
    return copyData;
}