//importing libraries..!!
var express=require('express')
var socket=require('socket.io')

var app=express()
var server=app.listen(process.env.PORT || 4000,function(){
   console.log('listining to port 4000')
})

app.use(express.static('public'))

var io=socket(server)
io.on('connection',function(socket){
   console.log('made conndection sucesssfully...',socket.id)

   socket.on('chat',function(data){
      console.log(data)
      io.sockets.emit('chat',data)
   })

   socket.on('typing',function(data){
      console.log(data)
      socket.broadcast.emit('typing',data)
   })
})
