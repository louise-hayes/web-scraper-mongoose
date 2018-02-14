# web-scraper-mongoose

# npm packages
express
express-handlebars
mongoose
request
cheerio
axios
body-parser

#to start
Need to start mongod and mongo as per below DB section
DB is created from app if does not exist
npm start

#db:Name webscrapermongoose
Uses mongo db and mongoose
Startdb: run mongo demon in a terminal session/bash session: mongod
then in alternative terminal session run mongo 
You can also access via Robo 3T noSql DB GUI

#To Remove DB: from mongo bash session: 
use webscrapermongoose; 
db.dropDatabase();
DB is created auto on app start, from server.js command 
mongoose.connect("mongodb://localhost/webscrapermongoose");

#Collections:
Scrape: (scraped articles)
title
link

Article: (saved articles)
title
link
notes (array of note id's associalted with this article)

Note:
title
body

#Github repo:
https://github.com/louise-hayes/web-scraper-mongoose
#Heroku:
https://techscrapermongoose.herokuapp.com/

#what does the App do

It scrapes a tech site https://thehackernews.com/
It presents a list of articles to user, allows them to save specific articles, and allows notes to be added and edited for each saved article.

The info scraped:
- Headline - the title of the article
- URL - the url to the original article

#routes
/scrape - scrape tech site and save articles in scrape table
/scrapes - find all unsaved articles
/articles - read all articles
/notes/:id - find notes for that article
/articles/:id - view / edit an article
/notes/:noteid/:articleid - delete note from an article

#Unit Tests
To start :  npm test

#Helpful Links

MongoDB Documentation https://docs.mongodb.com/manual/
Mongoose Documentation http://mongoosejs.com/docs/api.html
Cheerio Documentation https://github.com/cheeriojs/cheerio




