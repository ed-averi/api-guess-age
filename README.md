Operation to get a random number | [Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

```js
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1

```

Also [Javascript Random](https://www.w3schools.com/js/js_random.asp)

```js
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
```

In order to have the api to respond to a name and give the requested information through Postman. Make a get request as follows:

```bash
http://localhost:1234/api/names?name=julio
```
<br>

Output
```js
{
    "name": "julio",
    "age": "12",
    "days": "4380"
}
```

In order to get the Name via GET Method I Used query using string '?' operator [Sooruce](http://expressjs.com/en/api.html#req.query)

[Stackoverlow](https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js)

```js

/*
General Approach : Passing variables as query string using '?' operator
For Example refer below code where I am expecting Id as a query parameter
link could be like : http://myhost.com/items?id=23

*/
var express = require('express');
var app = express();
app.get("/items", function(req, res) {
    var id = req.query.id;
    //further operations to perform
});
app.listen(3000);

```