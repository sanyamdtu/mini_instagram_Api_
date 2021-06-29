# Mini Instagram Api

This is a simple instagram API which is able to do the following :
<ol>
 <li>You can create Stories with caption and submitting  1 or at max 2 images with the post request which will expire after 24 hours and it will be stored on the mongo DB atlas and the image will be uploaded to Cloudinary.</li>
 <li>On posting the GET request you can see the stories which are implemented using pagination and you can also see the data of comments.</li>
 <li>On using a POST request you can post comments on using different ids of the stories and it will be saved in the database.</li>
 <li>The Backend API has been deployed on Heroku server.</li>
</ol>

---

#### Heroku LINK:   https://miniinstagram.herokuapp.com

## Installation

nm install
 
## Usage

Clone this repository and do following :

Create a local .env file and type in your Cloudinary APi and mongoDb URL

API_KEY =  ***********<br>
API_SECRET = ***********<br>
CLOUD = ***********<br>
Mongo_url = *************************************************************<br>

Then open the terminal and run the command 
"node app"

## Documentation 
Use the pdf file for documentation given in repository
