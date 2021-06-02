const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const members = require('./Members');

const logger = require('./middleware/logger')

// get all members: test with Postman
app.get('/api/members', (req, res) => {
  res.json(members);
});

// get a single member
app.get('/api/members/:id', (req, res) => {
  // res.send(req.params.id);

  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
  

})

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



