# Sketch.io
 
## Table of contents
* [Description](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Design](#design)

<a name="live-link"/>

## Live Link

https://optimum-project.herokuapp.com/

<a name="general-info"/>

## Description

Health & fitness app in which users analyze personalized data according to their logged fitness activity 

* Modeled custom database schema and REST API with Active Record, PostgreSQL, and Ruby on Rails
* Utilized DiceBear API to allow users to customize their avatars
* Authenticated users at login by encrypting identifying account information via BCrypt

<a name="technologies"/>

## Technologies

- Socket.io
- NodeJS (v16), and npm
- Heroku CLI
- DiceBear API (for creating avatar)
- ReactJS

<a name="setup"/>

## Setup

Start by **forking** the project template repository and then clone the project:

```console
$ git clone git@github.com:samlee1097/Samric.io.git
$ cd Samric.io
$ npm install && npm start --prefix server
$ npm install && npm start --prefix client
```

## Design

<a name="design"/>

### Data Structure

![image](https://user-images.githubusercontent.com/87099910/146803758-403c8613-5465-4614-b26b-b6554b1554a0.png)

### Component Hierarcy

![image](https://user-images.githubusercontent.com/87099910/153726455-590bb6cc-4e10-4e03-b4b3-8e7502dd20ca.png)


### User Stories

**MVP:**
User will be able to:
* Sign up by via username & password
* Login if the user already has an account
* Change a user’s avatar
* Sign out of their account
* See a “my profile” page with details/graphs from the inputs of all the logs created
* Create a log for an activity/weight with notes
* Delete their own posts once logged on
* Log the level of happiness and health ranking so users can see a calendar/graph with the info


**Stretch goals:**
* See a list of all the achievements a player completed on their profile page
* Have a player level system where each achievement is linked to a certain amount of experience
* Follow other users to see their logs displayed on their home 
