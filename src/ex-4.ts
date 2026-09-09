// Explain the exact execution order of the following code and justify it based on the event loop, execution phases, microtasks, and macrotasks.

console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

process.nextTick(() => console.log('4'));

setImmediate(() => console.log('5'));

console.log('6');