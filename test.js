// MIT License

'use strict';

const assert = require('assert');
const so = require('./index');


assert.deepEqual(
	so.union([1, 2, 2], [2, 3]), 
	[1, 2, 3]
);

assert.deepEqual(
	so.intersection([1, 1, 2], [2, 2, 3]), 
	[2]
);

assert.deepEqual(
	so.difference([1, 1, 2], [2, 3, 3]), 
	[1, 3]
);


assert.strictEqual(
	so.equals([1, 1, 2], [1, 2, 2]),
	true
);

assert.strictEqual(
	so.equals([1, 1, 2], [1, 2, 3]),
	false
);
