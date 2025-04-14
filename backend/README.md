# Echoa Backend API

This is the backend REST API for the Echoa web app, built with Node.js, Express, and PostgreSQL. It provides endpoints to retrieve, add, and update classic music album data.

## Installation & Setup

### Dependencies:
- Node.js
- Express
- pg (node-postgres)
- PostgreSQL

### Steps:

```bash
git clone https://github.com/yourusername/echoa.git
cd echoa/backend
npm install
npm start

## API Documentation

GET /api/v1/classics
Returns a list of albums. Supports optional filtering via query params.

POST /api/v1/classics
Adds a new album to the database.

PUT /api/v1/classics/:id
Updates an existing album's info.

## Sample Response

{
  "id": 1,
  "artist": "Radiohead",
  "album": "OK Computer",
  "year": 1997,
  "genre": "Alternative Rock"
}

## Database Setup

To create the classics table:

CREATE TABLE classics (
  id SERIAL PRIMARY KEY,
  artist TEXT NOT NULL,
  album TEXT NOT NULL,
  year INT,
  genre TEXT
);

## Authentication & Security

This project does not implement authentication, but secure API practices (such as input validation) are followed. Future versions may add JWT-based authentication.

## Deployment Guide

The backend is deployed using Render. Push to the main branch triggers automatic deployment.

git push origin main

## License & Contribution Guidelines

Licensed under the MIT License.

## To contribute:

Fork the repo

Open a pull request

