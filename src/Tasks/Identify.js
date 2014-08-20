L.esri.Tasks.Identify = L.Class.extend({

  between: function(start, end){
    this._params.time = ([start.valueOf(), end.valueOf()]).join(',');
    return this;
  },

  returnGeometry: function (returnGeometry) {
    this._params.returnGeometry = returnGeometry;
    return this;
  },

  token: function(token){
    this._params.token = token;
    return this;
  },

  _request: function(callback, context){
    if(this._service){
      this._service.get('identify', this._params, callback, context);
    } else {
      L.esri.get(this.url + 'identify', this._params, callback, context);
    }
  }

});