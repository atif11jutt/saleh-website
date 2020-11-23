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

    
})