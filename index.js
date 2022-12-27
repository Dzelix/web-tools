const w1 = new Worker(
  new URL('w1.js', import.meta.url),
  {type: 'module'}
);

const w2 = new Worker(
  new URL('w2.js', import.meta.url),
  {type: 'module'}
);

const channel = new MessageChannel();

w1.onmessage = e => {
  console.log(e.data);
}

w1.postMessage('from main thread w1', [channel.port1]);
w2.postMessage('from main thread w2', [channel.port2]);
