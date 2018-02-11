# web-scraper-mongoose

# npm packages
express
express-handlebars
mongoose
request
cheerio
body-parser

#to start
run npm start

#db 
Uses mongo db via mongoose
to start db run mongo demon: mongod
then in alternative terminal session run mongo or access via Robo 3T noSql DB GUI

#Github repo:
https://github.com/louise-hayes/web-scraper-mongoose
#Heroku:

#what does the App do

It scrapes a stock finance site yahoo.com/finance
It present this info to user, allows them to edit, and saves their comment for all other users to see

The info scraped:
- Headline - the title of the article
- Summary - a short summary of the article
- URL - the url to the original article

#Unit Tests
To start :  npm test


#aims of app (this section to be removed after golive)
- Users should also be able to leave comments on the articles displayed and revisit them later. 
- The comments should be saved to the database as well and associated with their articles. 
- Users should also be able to delete comments left on articles. 
- All stored comments should be visible to every user.
- Go back to Saturday's activities if you need a refresher on how to partner one model with another.
- Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; we don't want duplicates. 
- Don't just clear out your database and populate it with scraped articles whenever a user accesses your site. 
- If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

#Helpful Links

MongoDB Documentation https://docs.mongodb.com/manual/
Mongoose Documentation http://mongoosejs.com/docs/api.html
Cheerio Documentation https://github.com/cheeriojs/cheerio




