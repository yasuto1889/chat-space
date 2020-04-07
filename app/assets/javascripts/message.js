$(function(){
  function buildHTML(message){
  
    if ( message.image ) {
  
      //data-idが反映されるようにしている
  
        var html =
  
        `<div class="message" data-message-id=${message.id}>
          <div class="content_chat">
            <div class="content_chat__name">
              ${message.user_name}
            </div>
            <div class="content_chat__time">
              ${message.created_at}
            </div>
          </div>
          <div class="content_message"">
            ${message.content}
          </div>
            <img src=${message.image} >
        </div>`
          return html;
  
      } else {
  
        //同様にdata-idが反映されるようにしている
  
        var html =
        `<div class="message" data-message-id=${message.id}>
         <div class="content_chat">
            <div class="content_chat__name">
              ${message.user_name} 
                </div>
              <div class="content_chat__time">
              ${message.created_at}
                </div>
              </div>
            <div class="content_message">
            <p class="content_message">
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
        alert("通信に失敗しました");
      })
      .always(function(){
        $('.submit_btn').removeAttr('disabled');
      })
    })
  
      //省略
        var reloadMessages = function() {
          //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得 
          var last_message_id = $('.message:last').data("message-id");
          
          $.ajax({ 
            //ルーティングで設定した通りのURLを指定
            url: "api/messages",
            //ルーティングで設定した通りhttpメソッドをgetに指定
            type: 'get',
            dataType: 'json',
            //dataオプションでリクエストに値を含める
            data: {id: last_message_id}
          })
          .done(function(content_messages) {
            if (content_messages.length !== 0) {
            //追加するHTMLの入れ物を作る
            var insertHTML = '';
            //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
            $.each(content_messages, function(i, message) {
              insertHTML += buildHTML(message)
            });
            //メッセージが入ったHTMLに、入れ物ごと追加
            $('.content_messages').append(insertHTML);
            $('.content_messages').animate({ scrollTop: $('.content_messages')[0].scrollHeight});
          }
          })
          .fail(function() {
            alert('error');
          });
  
        };
        if (document.location.href.match(/\/groups\/\d+\/messages/)) {
          setInterval(reloadMessages, 7000);
        }
      });
      
