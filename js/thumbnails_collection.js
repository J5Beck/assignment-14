var AlbumsCollection = (function() {
 
 var template = JST("albums_collection");

  function AlbumsCollection(data) {
    this.data = data;
  }

  AlbumsCollection.prototylpe = {

    render: function() {
      var $el = $( template() );
      var $ul = $el.find("ul");
      _.each(this.data, function(album) {
        var thumbnail = new AlbumThumbnail(album);
        $ul.append
      })

    }
  };

return AlbumsCollection;

})