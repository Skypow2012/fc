var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.send('<h1>Welcome Realtime Server</h1>');
});

let sockets = [];

let activeUserCount = 0;

io.on('connection', function(socket){
    console.log('a user connected');
    sockets.push(socket);
    activeUserCount++;
    io.emit("u", {
        auc: activeUserCount
    });
    socket.on("disconnect", function() {
        activeUserCount--;
        io.emit("u", {
            auc: activeUserCount
        });
        console.log("a user go out");
    });

    socket.on("m", function(obj) {
        console.log(obj); // 动作
        io.emit("m", obj);
    });
    socket.on("w", function(obj) {
        console.log('w', obj); // 微信
        io.emit("w", obj);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
