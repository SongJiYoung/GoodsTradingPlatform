const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// routes
server.use(
  jsonServer.rewriter({
    '/member/addMembers': '/addMembers',
    '/member/memberIdCheck': '/memberIdCheck',
    '/member/mailCheck?email=a%40gmail.com': '/mailCheck',
  }),
);

server.use(middlewares);

server.use('/memberIdCheck', function (req, res, next) {
  if (req.method === 'POST') {
    req.method = 'GET';
    res.send('success');
  }
});

server.use('/mailCheck', function (req, res, next) {
  res.send('1234');
});

server.use(router);
server.listen(8090, () => {
  console.log('JSON Server is running');
});
