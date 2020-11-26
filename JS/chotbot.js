    $(document).ready(function() {
      $("#typing").hide();
      var n = "You:<br>";
      var o = $('#outputWindow');
      var i = $('#inputWindow');
      var s = $('#sendButton');
      var t = $('#typing');      
      var r = 0;
        var NewMsg;

      //arrays
      var msg = ['Hi,<br />How are you?<br/>','Nice to hear that!<br />', 'Anything else I can do for you?<br />', 'Great to chat with you! <br/>Good luck!<br />'];

      //fire send events
      $(s).click(function() {
          i.hide();
            s.hide();
      runAI();
      });
      $(i).keydown(function(e) {
      if (e.keyCode == 13) {
            runAI();
            i.hide();
            s.hide();
      }
      });

      function runAI() {
      if (i.val().length > 0) {

            
            o.html(o.html()+n+$("#inputWindow").val()+"<br><hr>" );      
            setTimeout(function(){ $("#typing").show();  }, 1000);            
            setTimeout(function(){
                
                if(msg[r] != undefined && msg[r] != ""){
                    NewMsg = msg[r];
                    if(NewMsg == undefined){
                       NewMsg = "Thank you, will come back in short";
                       }
                }
                else{
                    NewMsg = "Thank you, will come back in short";
                }; 
                o.html(o.html()+"Saleh:<br>"+NewMsg+"<hr>");
                $('body,html').animate({ scrollTop: $("body").height() }, 600);
                r = r + 1;
            }, 3000);
            setTimeout(function(){ $("#typing").hide();i.show();s.show();i.val(''); i.focus(); }, 3000);



      }
      }
      i.focus();
    });