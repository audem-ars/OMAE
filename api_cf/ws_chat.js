export default {
  fetch(request) {
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected WebSocket', { status: 426 });
    }
    const [client, server] = Object.values(new WebSocketPair());
    server.accept();
    server.addEventListener('message', (event) => { server.send(String(event.data || '')); });
    return new Response(null, { status: 101, webSocket: client });
  }
};