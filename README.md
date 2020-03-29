# Book-Search

## Project Description 

A simple book-searching app created to test MERN interaction. Uses the Google Books API to allow users to search and save books of their choosing within MongoDB.

## Table of Contents 

1. [Installations & Dependencies](##Installations-And-Dependencies)

2. [Usage](##Usage) 

3. [Additional Contributors](##Additional-Contributors)

4. [Licensing](##License) 

5. [Testing](##Testing)

## Installations and Dependencies 

1. REACT - this application is run through React JS
2. React Router DOM - uses the React router to route between pages
3. AXIOS - For routing from server-side to client-side
4. Mongoose - The database for the application is built with MongoDB through Mongoose. As such, you will also need MongoDB installed to run locally
5. If-ENV - assists in running start script
6. Express - The server is run using Express through Node JS


## Usage 

> If used through the CLI, please remember to run "npm i" to install all necessary dependencies. The program can be started with "npm start" and will run on localhost:3000.

This application provides the user with a search bar to browse the entire available listing of books within the Google Books API. Upon entering a search term, the application will show the user a list of relevant books and provide supporting information regarding those books, such as an image, a description, and author(s), etc. The user can then also choose to "save" that book - which will save same book to MongoDB and to the Saved page - or choose to follow a link to Google Books own page for that book. Should the user wish to view their previously saved books, they may navigate to the Saved page via the top navigation bar. The Saved page will display a list of all books the user has previously chosen to "save" - and will show all previously-given supporting information. The user may then choose to visit the Google Books link for that book, similar to the Search page, or choose to remove the saved book altogether, which will delete the book from MongoDB and the page.

## Additional Contributors 

N/A

## License 

N/A

## Testing 

N/A
