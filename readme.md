# LSBlocker
```js
const lsBlocker = require('lsblocker');
const express = require('express');
const app = express();

app.use(lsBlocker({
  text: 'Forbidden', // optional
  status: 403, // optional
  file: __dirname + '/lsblocked.html' // optional
}));

app.use((req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT);
```