console.log('Module work');

async function start() {
   return await Promise.resolve('asinc working')
}

start().then(console.log())