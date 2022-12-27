console.log(123)

self.addEventListener('message', e => {
  console.log(e.data)

  const port = e.ports[0];

  port.onmessage = e => {
    console.log(e.data);

    self.postMessage('to main thread');
  }

  port.postMessage('to w1 from w2');
})
