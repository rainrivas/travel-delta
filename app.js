var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressSanitizer = require('express-sanitizer');

app.set('port', (process.env.PORT || 3000));

app.set("view engine", "ejs"); // used for rendering EJS files, helpful for partials (we can revisit this if we go with react and JSX)
app.use(express.static(__dirname + '/public')); // folder express will look for files in
// views is directory for all template files
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer()); // has to go after the body parser, this removes bad JS

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', (req, res) => {
    // commenting out the individual pieces to show case the full print
    // var currentLocationName = req.query.currentLocationName;
    // var newLocationName = req.query.newLocationName;

    var fullForm = JSON.stringify(req.query);
    res.render("search", { fullForm: fullForm }); // format of these vars we pass are ejsVarName: localFileVarName (ejs means what's on the ejs destination file)
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});