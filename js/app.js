$(document).ready(function() {


 $('form').submit(function (evt) {
    evt.preventDefault();
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var tag = $("#search").val();
    var $submit = $("#submit");
    var $search = $("#search");
    $search.prop("disabled",true);
    $submit.attr("disabled",true).val("searching...");
    var flickrOptions = {
      tags: tag,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $submit.attr("disabled",false).val("Search");
      $search.prop("disabled",false);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready