var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<h1>Welcome Realtime Server</h1>');
});

let sockets = [];

io.on('connection', function(socket){
    console.log('a user connected');
    sockets.push(socket);

    socket.on("disconnect", function() {
        console.log("a user go out");
    });

    socket.on("m", function(obj) {
        console.log(obj)
        io.emit("m", obj);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});