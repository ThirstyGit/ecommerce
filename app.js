// Built in apps.
const express = require('express');
const path = require('path');
const app = express();

// Setting up app
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Setting static
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.set('view engine', 'ejs');


const shops = [
   {name: "M&M Meat shops", src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcms.ipressroom.com.s3.amazonaws.com%2F149%2Ffiles%2F20132%2FGE-LED-Retail-Lighting-M%26M-Meat-Shops.jpg&f=1&nofb=1", rating: 2.4},
   {name: "P-Mobile Plus ", src: "https://blog.ipleaders.in/wp-content/uploads/2017/05/BV-Acharya.jpg", rating: 3.5},
   {name: "Super Malt", src: "http://myenglandtravel.com/images/Types-of-shops-in-Britain-1.jpg", rating: 4.5},
   {name: "Rainbow", src: "http://www.rochdalevillage.com/sites/default/files/styles/apartment_image/public/Rainbow%20Shops.JPG?itok=NbjKNQI7", rating: 3.2},
   {name: "GF Trumper", src: "https://static.businessinsider.com/image/521ffa226bb3f75b42e58acb/image.jpg", rating: 4.1},
   {name: "House of Cashmere", src: "https://s21271.pcdn.co/wp-content/uploads/2014/02/dsc06765.jpg?w=633", rating: 4.0},
   // {name: "", src: "", rating: },
]

const recentShops = [
   {name: "Amader shop"},
   {name: "Super Malt"},
   {name: "Great shop"},
   {name: "Graphics world"},
   // {name: ""},
]

const bookmarkedShops = [
   {name: "Bahi Bhai shop"},
   {name: "Amader shop"},
   {name: "Our Shop BD"},
   // {name: ""},
]



app.get('/', (req, res) => {
   res.render(path.join(__dirname +  '/views/index.ejs'), {shops, recentShops, bookmarkedShops});
});

app.get('/about', function(req, res) {
   res.render(path.join(__dirname +  '/about.ejs'))
})


const port = process.env.PORT || 3000;

app.listen(port);








