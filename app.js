const config = require('./config-filters.json')
const filters = require('./filters')
const { steps } = config

Object.values(filters).forEach((filter, index) => {
    if (typeof filter !== 'function') {
        throw new Error(`filter ${Object.keys(filters)[index]} is not a function`)
    }
    console.log(`filter '${Object.keys(filters)[index]}' available`)
})

if (!steps && typeof params === "object") {
    throw new Error(`invalid config file`)
}

let order = []

for (const [key, value] of Object.entries(steps)) {
    if (!value.filter) {
        throw new Error(`invalid filter attribute at step ${key}`)
    }
    if (!value.params && typeof params === "array") {
        throw new Error(`invalid params attribute params at step ${key}`)
    }
    // console.log(`Executing filter ${value.filter}`)
    if (value.next) {
        order.push(value.next)
    } else {
        order.push(key)
    }
}

let chain = filters[steps[1].filter](...steps[1].params);
console.log(chain)
// order.forEach((number) => {
//     chain = chain().filters[steps[number].filter](...steps[number].params)
//     console.log(chain)
// })

