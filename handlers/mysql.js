var debug = require('debug')('tql:handlers:mysql');

var mysql = require('mysql');



var sql = module.exports = function(config) {
  this.mysql = mysql;
  this.client = mysql.createConnection(config);

};

sql.prototype.connect = function(cb) {
  debug('connecting to mysql');
  this.client.connect(function(err){
    debug('connected to mysql');
    if(err){
      console.log('mysql connection err',err);
      return false;
    }
    if (cb) cb();
  });
};

sql.prototype.query = function(query, params, cb, fail) {
  var self = this;

  if (!cb) {
    cb = params;
    params = null;
  }

  debug('querying');

  this.client.query(query,params,cb);
};
