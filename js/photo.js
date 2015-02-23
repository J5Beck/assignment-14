var PhotoPreview = (function(){

  var template = JST["photo-preview"];

  function PhotoPreview(data) {
    this.data = data;
  }

  PhotoPreview.prototype = {

    render: function() {
      return $( template(this.renderData()) );
    },

    renderData: function() {
      var defaultPhoto = "images/defaultimage.png";
      var data = _.clone(this.data);
      if (!data.photo) {
        data.photo = defaultPhoto;
      }
      return data;
    }

  }

  return PhotoPreview;

})();

var PhotoList = (function() {

  function PhotoList(data) {
    this.data = data;
  }

  PhotoList.prototype = {

    render: function() {
      var $el = $("<div />");
      _.each(this.data, function(photo) {
        var preview = new PhotoPreview(photo);
        $el.append( preview.render() );
      });
      return $el;
    }

  }

  return PhotoList;

})();

var PhotoFull = (function(){

  var template = JST["photo-full"];

  function PhotoFull(data) {
    this.data = data;
  }

  PhotoFull.prototype = {
    render: function() {
      return $( template(this.renderData()) );
    },

    renderData: function() {
      var defaultPhoto = "images/user-default.jpg";
      var data = _.clone(this.data);
      if (!data.photo) {
        data.photo = defaultPhoto;
      }
      return data;
    }
  }

  return PhotoFull;

})();
