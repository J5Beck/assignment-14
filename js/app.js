var App = (function(){

  function App(data) {
    this.data = data;
    this.$sidebar = $(".sidebar");
    this.$main = $(".main");
    this.showAlbums();
    this.showPhotos("All");
    this.addListeners();
  }
  App.prototype = {
    getAlbumNames: function() {
      return _.chain(this.data)
        .pluck("album")
        .uniq()
        .map(function(albumName){
          return {name: albumName}
        })
        .value();
    },
    showAlbums: function() {
      var albumData = this.getAlbumNames();
      this.photoAlbumList = new PhotoAlbumList(albumData);
      this.$sidebar.html( this.photoAlbumList.render() );
    },
    getAlbum: function(albumName) {
      if(albumName === "All") {
        return this.data;
      }
      return _.filter(this.data, function(photo){
        return photo.album === albumName;
      });
    },
    showPhotos: function(albumName) {
      var photoData = this.getAlbum(albumName);
      var cl = new PhotoList(photoData);
      this.currentAlbum = albumName;
      this.photoAlbumList.select(albumName);
      this.$main.html( cl.render() );
    },
    showFullPhoto: function(photoId) {
      var photoData = _.find(this.data, function(photo) {
        return photo.photo_id === photoId;
      });
      var photo = new PhotoFull(photoData);
      this.$main.html( photo.render() );
    },
    addListeners: function() {
      var app = this;

      // this.$content.on("click", ".album-cover", function(e){  //supposed to allow click on thumbox to show photos
      //   e.preventDefault();
      //   $clicked = $(e.currentTarget);
      //   var indAlbum = $clicked.data("");
      //   app.showAlbums(albumData);
      // });

      this.$sidebar.on("click", "li", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var albumName = $clicked.data("album-name");
        app.showPhotos(albumName);
      });

      this.$main.on("click", ".photo-preview a", function(e){
        e.preventDefault();
        $clicked = $(e.currentTarget);
        var photoId = $clicked.data("photo-id");
        app.showFullPhoto(photoId);
      });

      this.$main.on("click", ".photo-full a", function(e){
        e.preventDefault();
        app.showPhotos(app.currentAlbum);
      });
    }

  }

  return App;

})();
