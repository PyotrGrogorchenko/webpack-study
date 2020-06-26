async function start() {
    return await Promise.resolve('async is working')    
}

start().then(console.log)

const unused = 42;

class Util {
    static id = Date.now()
}

console.log('Util Id:', Util.id)

import('lodash').then( () => {
    // eslint-disable-next-line no-undef
    console.log('lodash', _.random(0, 42, true))
})