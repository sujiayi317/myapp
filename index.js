const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


const logger = require('./middleware/logger')



// init middleware
app.use(logger);

// birds Routes
var birds = require('./birds');
app.use('/birds', birds)

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// square functions are exported
const square = require('./square');
console.log('The area of a square with a width of 4 is ' +  square.area(4));


app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // res.status(404).send('Sorry, we cannot find that!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use('/api/members', require('./routes/api/members'));

