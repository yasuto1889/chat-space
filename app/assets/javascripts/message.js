$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message">
         <div class="content_chat">
           <div class="content_chat__name">
             ${message.user_name}
           </div>
           <div class="content_chat__time">
             ${message.created_at}
           </div>
         </div>
         <div class="content_message">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message">
         <div class="content_chat">
           <div class="content_chat__name">
             ${message.user_name}
           </div>
           <div class="content_chat__time">
             ${message.created_at}
           </div>
         </div>
         <div class="content_message">
           
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }

 $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.content_messages').append(html);
    $('.content_messages').animate({ scrollTop: $('.content_messages')[0].scrollHeight});
    $('form')[0].reset();
    
  })
  .fail(function(data){
    
  })
  .always(function(){
    $('.submit_btn').removeAttr('disabled');
    
   })
})
});