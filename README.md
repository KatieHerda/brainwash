# BRAINWASH

## Introduction
Over the last few years, while working through the pandemic, we’ve been spending a lot more time at home and people have turned to social media to stay connected with others to fill that extra time.

As we know, many of the popular social media platforms, like Instagram and TikTok, have been proven to be quite detrimental to our mental health, so we wanted to create a platform which would foster a healthier online community where people can connect with others in a social context, all while consuming more positive content.

Users come to Brainwash to learn new skills, improve existing passions, and share their own knowledge through various media types with an online community of other passionate lifelong learners - Think master class meets instagram & youtube.

Brainwash is our submission for the final project for the lighthouse labs web development bootcamp. Over an enjoyable 10 days, the creators: Russell Engebretson, Sophie Oliver and Katie Herda, worked together to build out an MVP of the platform, expanding on knowledge learned in the bootcamp, to add functionality that would allow users to create and consume content, and communicate with other Brainwashers.

### Live Server
We have launched our app live using Heroku, and it can be accessed at [Brainwash](https://brainwash-ify-ology.herokuapp.com/).

### Repository
This is the front end repository for our app, if you would like to view the backend API click [Brainwash-API](https://github.com/KatieHerda/brainwash-api).
 

We built the front end using React, with React router to navigate between pages and allow for a multi-page feel which our founders preferred.

With the short 10 day timeline for producing the platform, we wanted to go with a simple sleek layout and style for the UI, so we implemented Material UI components as they come pre-built with some attractive features.

Additionally we integrated Autho0 using oAuth 2.0 to allow for user authentication and social logins, without having to deal with security issues associated with handling user data properly... let's offload that to companies who have this well sorted out ;).

## Project Layout
This application was laid out following some best practices while using React. In the src directory you will find a [component directory](https://github.com/KatieHerda/brainwash/tree/main/src/components) which houses all of our react components which are fed to the App.js file located in the root of the src directory.

Running the Repo locally for development
create a .env file with a single component in it

```
PORT=3002
```

This is to avoid conflicts with the rails backend API running on port 3000, React's default.

run the following commands in your terminal:
```
npm install
npm start
```
The server should start on localhost port 3002.

## Final Product

<img alt="home page" width="550" src="https://github.com/KatieHerda/brainwash/blob/main/docs/index.png?raw=true"> <img/>

<img alt="liked posts" width="550" src="https://github.com/KatieHerda/brainwash/blob/main/docs/liked.png?raw=true"> <img/>

<img alt="profile page" width="550" src="https://github.com/KatieHerda/brainwash/blob/main/docs/profile.png?raw=true"> <img/>

<img alt="create new post" width="550" src="https://github.com/KatieHerda/brainwash/blob/main/docs/create.png?raw=true"> <img/>
