# TQL

It's like SQL, but for tests. Pronounced as tickle.

## Installation
```bash
$ npm install --save tql
```
## Usage

```javascript
var fs = require('fs');
var TQL = require('tql');

var tql = new TQL({}, fs.readFileSync(__dirname+'/schema.sql').toString());

tql.create(function(err) {
  // the schema has now been created!

  // now, lets insert some data
  tql.insert(
  	'users', // table name (that you've just created)
  	['name','email'], // field list
  	[['Simon Tabor', 'me@simontabor.com'], ['GoSquared', 'support@gosquared.com']],
  	function(err) {
  		// all done
  	}
  );
});

```


Check out the tests for more examples etc etc

## Tests

Simple...

```bash
$ make test
```


## License

MIT. See LICENSE.
