# Sketch.io
 
## Table of contents
* [Description](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Design](#design)

<a name="live-link"/>

## Live Link

https://sketch-io.vercel.app/

<a name="general-info"/>

## Description

Live multiplayer drawing and chat app where users can join private rooms, interact with other users, and explore their creativity 

* Utilized DiceBear API to allow users to customize their avatars
* Integrated Canvas API as a means for drawing graphics via React, JavaScript, and the HTML canvas element.
* Utilized Redux & Socket.io as a bidirectional & low-latency communication tool to interact with other users


<a name="technologies"/>

## Technologies

- Socket.io
- NodeJS
- JavaScript
- Redux
- Heroku CLI
- DiceBear API (for creating avatar)
- ReactJS

<a name="setup"/>

## Setup

Start by **forking** the project template repository and then clone the project:

```console
$ git clone git@github.com:samlee1097/Sketch.io.git
$ cd Samric.io
$ npm install && npm start --prefix server
$ npm install && npm start --prefix client
```

## Design

<a name="design"/>

### Data Structure

![image](https://user-images.githubusercontent.com/87099910/154176789-13a72a4e-0126-4805-a536-cde738b98cef.png)

### Component Hierarcy

![image](https://user-images.githubusercontent.com/87099910/153726455-590bb6cc-4e10-4e03-b4b3-8e7502dd20ca.png)


### User Stories

**MVP:**
User will be able to:
* Join a specific room with username & room ID
* Customize avatar before joining
* Draw on a canvas with different tools/colors
* Share canvas with others through the chat
* Share live text and messages with others in the room

**Stretch goals:**
* Have a game where users guess a word to get points
* Allow users to automatically join public rooms without a room code
