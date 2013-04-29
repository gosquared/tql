var TQL = require('../');

var fs = require('fs');

var should = require('should');

describe('TQL', function(){
  var tql = new TQL({}, fs.readFileSync(__dirname+'/schema.sql').toString());

  it('initialises', function(done){
    tql.should.be.an.instanceof(TQL);
    done();
  });

  it('creates the test database and table', function(done) {
    tql.create(function(err, rows) {
      should.not.exist(err);
      done();
    });
  });

  it('should be able to have data inserted', function(done) {
    tql.insert(
      'users',
      ['name','email'],
      [['Simon Tabor','me@simontabor.com']],
      function(err,rows) {
        should.not.exist(err);
        done();
      }
    );
  });

  it('can have multiple rows inserted at once', function(done) {
    tql.insert(
      'users',
      ['name','email'],
      [['Simon Tabor','me@simontabor.com'], ['GoSquared', 'support@gosquared.com']],
      function(err,rows) {
        should.not.exist(err);
        done();
      }
    );
  });



});
