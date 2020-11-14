$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var modal = this.hash;
  
        $("html, body").animate({
          scrollTop: $(modal).offset().top
        }, 800, function(){
          window.location.hash = modal;
        });
      }
    });
  })