$(function() {
  $('#botan').on('click', function() {
    var get_text = $('#inText').val();
    //console.log(get_text);

    var classText = $("#className").val();

    var Ischeck = $('#IsPtag').prop('checked');
    //console.log(Ischeck);
    if (Ischeck) {
      classText = '<p class=\'' + classText + '\'>\n';
      var set_text = classText + get_text.replace(/\n/g, '<br/>\n') + '\n</p>';
      $("#outText").val(set_text);
    } else {
      var set_text = get_text.replace(/\n/g, '<br/>\n');
      $("#outText").val(set_text);
    }

  });

  $('.bar').on({
    'mouseover': function() {
      $(this).text('Hi!');
    },
    'mouseout': function() {
      $(this).text('Bye!');
    }
  });

});
