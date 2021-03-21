import express from 'express';
import * as bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(`${__dirname}/html/static`));


app.get('/html', ((req, res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'));
}));

app.get('/ejs', ((req, res) => {
  res.render('index');
}));

app.listen(3000, () => {
  console.log('🚀 Running at localhost:3000');
});
