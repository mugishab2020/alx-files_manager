const express = require('express');

import routes from './routes/index';
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.listen(port, function(){
    console.log(`Server listening on port ${port}`);
});

app.use('/', routes);

export default app;
