# mini_instagram_Api_
# Foobar

This is a simple instagram API which is able to do the following 
1)   You can create Stories with caption and submitting  1 or at max 2 images with the post request which will expire after 24 hours and it will be stored on the mongo DB atlas and the image will be uploaded to Cloudinary.

2)  On posting the GET request you can see the stories which are implemented using pagination and you can also see the data of comments.

3)  On using a POST request you can post comments on using different ids of the stories and it will be saved in the database.

4)  The Backend API has been deployed on Heroku server.

Heroku LINK:   https://miniinstagram.herokuapp.com

## Installation

nm install
 
## Usage

clone this repository and do following :

Create a local .env file and type in your Cloudinary APi and mongoDb URL

API_KEY=  ***********
API_SECRET= ********
CLOUD=********
Mongo_url= *************************************************************

then open the terminal and run the command 
"node app"

## documentation 
use this doc file for documentation  :- https://drive.google.com/file/d/1WP419mtq61iRt7PtEPzWdRisI_c7LdaE/view?usp=sharing
