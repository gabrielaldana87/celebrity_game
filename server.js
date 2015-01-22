var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var items = [];

app.get('/', function(req, res) {
  // items will be empty the first time
  // this method is called
  var celebrity =
  { "results": {
    "profession": "monarch",
    "known_for": ["having a wife that eats cake", "Bourbon","taking public baths"],
    "gender": "male",
    "first letter of first name": "X",
    "extra hint": "L'etat c'est PAS moi!"
  }
}
  res.json(celebrity);
});

app.get('/:guess',function(req,res)
{
  var safe = encodeURI(req.params.guess);
  if (safe==="Louis%20XIV")
    {
    res.send({correct:"NICE JOB!"});
    }

  if(safe!=="Louis%20XIV")
    {
    res.send({incorrect:"Nope!"});
    }
})

// app.post('/add', function(req, res) {
//   // note that we're using req.body.item
//   // rather than req.params.item or
//   // req.query.item
//   items.push(new person(req.body.first, req.body.last, req.body.email));
//   res.render('movieposter.ejs', { items: items });
//   console.log(items);
// })

app.listen(3000);

console.log('listening on port 3000!');
