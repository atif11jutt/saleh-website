jQuery(function($){
    
    
    
    var buttonHtml = `<div class="toggleWrapper">
  <input type="checkbox" class="dn" id="dn"/>
  <label for="dn" class="toggle">
    <span class="toggle__handler">
      <span class="crater crater--1"></span>
      <span class="crater crater--2"></span>
    </span>
    <span class="star star--1"></span>
    <span class="star star--2"></span>
    <span class="star star--3"></span>
    <span class="star star--4"></span>
  </label>
</div>`
    $("body").append(buttonHtml)
    
  
  $('.dn').click(function(){
    if($("body").hasClass("dark")){
      lightMode();
    }else{
      darkMode();
    }
    console.log(mode)
  });
  
  let mode;
  mode = localStorage.getItem('mode');
  console.log(mode)
  
  if (mode == 'dark'){
      darkMode();
      $('.dn').prop('checked', true);
  }else{
    lightMode();
  }
  
  function darkMode() {
    $("body").addClass("dark");
    $(".navbar").addClass("navbar-dark").removeClass("navbar-light");
    localStorage.setItem('mode', 'dark');
  }

    function lightMode() {
      $("body").removeClass("dark");
        $(".navbar").removeClass("navbar-dark").addClass("navbar-light");
      localStorage.setItem('mode', 'light');
    }

    
    
    
    // login modal
    
    $("#login_form").submit(function(e){
        e.preventDefault();
        var user = $("#username").val();
        localStorage.setItem("user",user);
        location.reload()
    })
    if(localStorage.getItem('user')){
        $("#nav_login_2").html(localStorage.getItem('user')).show();
        $("#nav_login_1").hide();
        $("#username").val(localStorage.getItem('user'))
    }
    
    $("#Redeem").click(function(e){
        e.preventDefault();
        alert("Kindly enter a valid promo code");
    })
    
    $("#deliverForm").submit(function(e){
        e.preventDefault();
        alert("Thanks for the order, We'll come back to you shortly!");
        $("#deliverForm")[0].reset();
        $("#emptyCart").show();
        $("#cartList").hide();
        $("#promoCart").hide();
        $("#cartItems").html("0");
    })
    
    
})