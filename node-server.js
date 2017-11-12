
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('port', (process.env.PORT || 5001));
app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res) {
  res.sendfile('./build/index.html');
});

// Expose Service
app.get('/api/blogPosts/:userId', function(req, res) {
  res.redirect(`http://localhost:5000/blogService/posts/${ req.params.userId }`);
  // res.redirect('https://mosi-service.herokuapp.com/studentService/')
});
// app.post('/api/blogPosts', function(req, res) {
//   var url = 'http://localhost:5000/studentService/';
//   	// var url = 'https://mosi-service.herokuapp.com/studentService/'
//     request.post({ url: url, json: true, body: req.body, method: 'POST' }, function(err, remoteResponse, remoteBody) {
//         if (err) { return console.log(err); res.status(500).end('Error'); }
//     });
// });
// app.post('/service/:id', function(req, res) {
//   // var url = 'http://localhost:5000/studentService/'+req.params.id;
//     var url = 'https://mosi-service.herokuapp.com/studentService/'+req.params.id;
//   	request.post({ url: url, json: true, body: req.body, method: 'POST' }, function(err, remoteResponse, remoteBody) {
//         if (err) { return console.log(err); res.status(500).end('Error'); }
//     });
// });
// app.delete('/service/:id', function(req, res) {
//   res.redirect('http://localhost:5000/studentService/'+req.params.id);
//   // res.redirect('https://mosi-service.herokuapp.com/studentService/'+req.params.id)
// });



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
