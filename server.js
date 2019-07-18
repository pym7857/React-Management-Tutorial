const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'http://placeimg.com/64/64/1',
          'name': '홍길동1',
          'birth': '19950319',
          'gender': 'M',
          'job': 'Univ.Student'
        },
        {
          'id': 2,
          'image': 'http://placeimg.com/64/64/2',
          'name': '홍길동2',
          'birth': '19950319',
          'gender': 'M',
          'job': 'Univ.Student'
        },
        {
          'id': 3,
          'image': 'http://placeimg.com/64/64/3',
          'name': '홍길동3',
          'birth': '19950319',
          'gender': 'M',
          'job': 'Univ.Student'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port:${port}`));