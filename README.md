# ITrainee HTML 2019 project

This repository is using Amazee's containers.

## Setup

### Clone the repository

```
git clone git@bitbucket.org:pronovix/itrainee-html-2019.git
```

### Requirements

* git
* docker

### Install and start pygmy (Linux and macOS only)

To install `pygmy`, run `gem install pygmy`. This is only needed if you don't already have `pygmy` installed.

Start pygmy: `pygmy up` 

## Usual commands

* `docker-compose run --rm cli sh`

  To run commands inside the container.
  
* `docker-compose up -d`

  Starts the containers.
  
* `docker-compose stop`

  Shuts down the containers (keeps the state).
  
* `docker-compose down`

  Destroys the containers (permanently deletes the state).

## Theming

### Sass compiler

#### Install

For the first time run `npm install` in the 'gulp' directory inside the
container. This installs the node modules needed from the 'package.json'
file.

#### Usage

Once you have installed the node modules, you can use the following
commands (run them from the 'gulp' directory inside the container):

* `npm run gulp` this will fire the default task, creating a minified
css.

* `npm run gulp watch`
this will watch for changes in the sass files, and crates a minified
css.
