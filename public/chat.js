var socket=io.connect('https://chatwithjaveed.herokuapp.com')

var message=document.getElementById('message')
    handle=document.getElementById('handle')
    output=document.getElementById('output')
    btn=document.getElementById('send')
    feedback=document.getElementById('feedback')

btn.addEventListener('click',function(){
   feedback.innerHTML=''
   socket.emit('chat',{
      handle:handle.value,
      message:message.value
   });
   message.value=""
});
socket.on('chat',function(data){
   output.innerHTML+='<p><strong>'+data.handle+':</strong>'+data.message+'</p>'
})

message.addEventListener('keypress',function(){
   socket.emit('typing',handle.value)
})
socket.on('typing',function(data){
   feedback.innerHTML='<p><em>'+data+' is typying..'+'</em></p>'
})
