var mysql = require('mysql');
var config = require('./config/config');
var mysql = require('./handlers/mysql');
var debug = require('debug')('tql:main');

var TQL = function(conf, schema) {
  var self = this;

  var c = config;

  // shallow merge for now
  for (var i in conf) {
    c[i] = conf[i];
  }

  self.schema = schema;
  self.config = c;

  self.mysql = new mysql(self.config.mysql);
  // self.create();

};

TQL.prototype.create = function(cb) {
  var self = this;

  debug('creating database/tables');
  self.mysql.query(self.schema, function(err, rows) {
    debug('created database/tables');
    if (cb) cb(err,rows);
  });
};

TQL.prototype.insert = function(table, keys, data, cb) {
  var self = this;

  var query = 'INSERT INTO '+table+' ('+keys.map(self.mysql.mysql.escapeId).join(',')+') VALUES ';
  for (var i = 0; i < data.length; i++) {
    query += '('+data[i].map(self.mysql.mysql.escape).join(',')+')';
    if (i < data.length -1) query += ',';
  }
  self.mysql.query(query, function(err,rows) {
    if (cb) cb(err,rows);
  });
};



module.exports = TQL;
