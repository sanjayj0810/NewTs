# NewTs
# Recently Played Songs Store

A simple in-memory store for recently played songs that can accommodate N songs per user.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a basic implementation of an in-memory store to manage recently played songs for users. It allows you to store a list of song-user pairs and retrieve recently played songs based on the user. The store has a fixed capacity and can eliminate the least recently played songs when it becomes full.

## Features

- Store recently played songs per user.
- Retrieve the most recent songs for a given user.
- Limit the number of stored songs per user.
- Automatically remove least recently played songs when the store is full.

## Getting Started

1. Clone this repository:

   ```bash
https://github.com/sanjayj0810/NewTs

Navigate to the project directory:
cd recently-played-store

Install dependencies:
npm install

Usage:
Create an instance of RecentlyPlayedStore:
const RecentlyPlayedStore = require('./src/RecentlyPlayedStore');
const store = new RecentlyPlayedStore(3); 

Play songs and retrieve recent songs:
store.playSong('user1', 'song1');
store.playSong('user1', 'song2');

const recentSongs = store.getRecentSongs('user1');
console.log(recentSongs); // Output: ['song2', 'song1']

Contributing
Contributions are welcome! If you have suggestions or find any issues, feel free to open an issue or submit a pull request.



