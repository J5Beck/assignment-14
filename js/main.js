$(function(){

  $.ajax("photos.json",{

    success: function(data) {
      window.app = new App(data);
      // window.data = data;  //  Temp... one above for actual
    },

    error: function(xhr, error) {
      console.log("failed to load photos.json", error);
    }
  });
});
