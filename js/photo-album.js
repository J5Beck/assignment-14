var PhotoAlbum = (function(){

  var template = JST["photo-album"];

  function PhotoAlbum(data) {
    this.data = data;
  }

  PhotoAlbum.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  }

  return PhotoAlbum;

})();

var PhotoAlbumList = (function(){

  function PhotoAlbumList(data) {
    this.data = data;
    this.$el = $("<ul />");
  }

  PhotoAlbumList.prototype = {
    select: function(albumName) {
      this.$el.find("li").removeClass("active");
      this.$el
        .find("li[data-album-name='"+ albumName +"']")
        .addClass("active");
    },

    render: function() {
      var $el = this.$el;

      var album = new PhotoAlbum({name: "All"});
      $el.append( album.render() );

      _.each(this.data, function(albumData){

        var album = new PhotoAlbum(albumData);
        $el.append( album.render() );

      });

      return $el;
    }
  }

  return PhotoAlbumList;

})();



