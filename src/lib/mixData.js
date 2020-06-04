export default function (data) {
    const length = data.phone.length;

    const array = Array.from({ length }, (val, ind) => ind)

    const divisorFirst = array.filter((val) => val % 5 === 0)
    const divisorSecond = array.filter((val) => val % 2 === 0)
    const divisorFinal = array.filter((val) => (val % 2 !== 0) && (val % 5 !== 0))

    const set = new Set([...divisorFirst, ...divisorSecond, ...divisorFinal])

    return [...set].map((phones) => data.phone[phones])
}