jQuery(function($){
    
    
    //books fetching
    
    
    
    $.ajax({
            method: 'GET',
            url: 'books.json'
        }).done(function (data) {
//            console.log(data.books)
        
            for(var i=0; i<data.books.length; i++){
                var booksHtml = `<div class="col-sm-3">
                    <img class="w-100 img-fluid" src="${data.books[i].thumbnail}">
                  <h3>${data.books[i].title}</h3>
                  <p>${data.books[i].subtitle}</p>
                </div>`;
                $("#books").append(booksHtml)
            }
            

        });
    
    
    /*
    
    $.ajax({
       url: 'books.json',
       dataType: 'json',
       success: function(data) {
           console.log(data)
           
           
           
//          var items = [];
//
//          $.each(data, function(key, val) {
//
//            items.push('<li id="' + key + '">' + val + '</li>');    
//
//          });
//
//          $('<ul/>', {
//             'class': 'interest-list',
//             html: items.join('')
//          }).appendTo('body');
           
           
           

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       },
        error: function(){
            console.log("error")
        }
    });
    
    */
    
})