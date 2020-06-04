export default  function (data) {
    const { previous, next, result } =  data;

    const phone = result.reduce((acc, val) => {
        const phone = val.phone
        const image = val.image
        const sell = val.sale

        const distribution = getIndividualPhones(val.spec)
        distribution.forEach((item) => {
            item.phone = phone;
            item.image = image;
            item.sell = sell
        })
        acc.push([...distribution])
        return acc;
    },[])

    return {previous,next,phone}
}


const getIndividualPhones = (spec) => {
    return spec.reduce((acc, val) => {
        const memory = val.memory
        const locked = val.locked

        const priceKeys = Object.keys(val.price)

        const distirbute = priceKeys.map((item) => ({
            "price": val.price[item],
            memory: memory,
            locked: locked,
            condition:item

        }))
        acc.push({ ...distirbute })
        return acc;
    },[])
}