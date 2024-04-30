const express = require('express');
const indexRoute = require('./routes/index');

const PORT = 1245;
const app = express();

app.use('/', indexRoute);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
module.exports = app;
