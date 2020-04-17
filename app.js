const express = require ('express');
const mongoose = require ('mongoose');
const methodOverride = require ('method-override');
const bodyParser = require ('body-parser');
mongoose.connect('mongodb+srv://admin:admin123@cluster0-wghk9.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }).then(() =>{
    console.log("Connecté à la base de donnée");
});
const app=express();
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended:false}));
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');
const indexRoutes = require ('./routes/index');
app.use('/', indexRoutes);
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`));

