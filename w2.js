console.log(321)

self.addEventListener('message', e => {
  console.log(e.data)

  const port = e.ports[0];

  port.onmessage = e => {
    console.log(e.data);
  }

  port.postMessage('to w2 from w1');
})
