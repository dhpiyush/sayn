(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    var request;
    $('#login').submit(function(event) {
      if(request) {
        request.abort();
      }

      $('#loader').attr('class', 'preloader-wrapper small active');

      var $form = $(this);
      var $inputs = $form.find('input');
      var serialized = $form.serialize();

      $inputs.prop('disabled', true);

      $.post('/login', serialized, function(data) {
          Materialize.toast(data.message, 4000);
          window.location = '/dashboard';
      })
      .fail(function(data) {
          Materialize.toast(data.responseJSON.message, 4000);
      })
      .always(function() {
        $inputs.prop('disabled', false);
        $('#loader').attr('class', 'preloader-wrapper small inactive');
      });

      event.preventDefault();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
