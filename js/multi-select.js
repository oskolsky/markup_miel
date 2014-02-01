$(function() {

  var 
      $select = $('.form_select-multiple'),
      $option = $select.find('.form_select-multiple_a');

  $option.click(function(e) {

    var 
        group = $(this).attr('data-group'),
        value = $(this).attr('data-value');

    if (!e.ctrlKey) {
      // Reset
      $select.find('.form_select-multiple_a[data-group="' + group + '"]').removeClass('form_select-multiple_a__current');
      $select.find('.form_select-multiple_a[data-group="' + group + '"]').find('input[type="hidden"]').attr('value', '');
    }

    if ($(this).hasClass('form_select-multiple_a__current')) {
      // Set
      $(this).removeClass('form_select-multiple_a__current');
      $(this).find('input[type="hidden"]').attr('value', '');
    } else {
      // Set
      $(this).addClass('form_select-multiple_a__current');
      $(this).find('input[type="hidden"]').attr('value', value);
    }

    return false;

  });

  // Global reset
  $('input[type="reset"]').click(function() {
    $select.find('.form_select-multiple_a').removeClass('form_select-multiple_a__current');
    $select.find('.form_select-multiple_a').find('input[type="hidden"]').attr('value', '');
  });

});