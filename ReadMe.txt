###Addis Software Test Project - MERN Stack###
# MERN Stack Software Test Project - Songs Management

## Project Overview

This project is a MERN (MongoDB, ExpressJS, ReactJS, NodeJS) full-stack application that allows you to manage information for songs. 
The backend provides RESTful API endpoints to perform operations on songs, while the frontend displays the song list and offers:
create, update, and delete functionality. Additionally, it displays statistics about the songs.

## Backend

### Technologies Used

- ExpressJS for handling HTTP requests.
- MongoDB for data storage.
- Mongoose to interact with MongoDB, model data, and create the schema.
- Docker for packaging the backend.

### Backend Setup

1. Clone the repository.
2. Navigate to the `backend` directory: `cd backend`.
3. Install dependencies: `npm install`.
4. Start the MongoDB Docker container: `docker-compose up -d`.
5. Start the backend server: `npm start`.

### Backend Endpoints

- Create a new song: `POST /songs/add`
- List all songs: `GET /songs/all`
- Update a song: `PUT /songs/update/:id`
- Delete a song: `DELETE /songs/delete/:id`
- Get overall statistics: `GET /songs/stats`

## Frontend

### Technologies Used

- Typescript for writing code.
- ReactJS for building the user interface.
- Redux Toolkit for state management.
- Axios for making API calls.
- Emotion and Styled System for styling the app.

### Frontend Setup

1. Navigate to the `frontend` directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Start the frontend application: `npm start`.

### Frontend Features

- View the list of songs.
- Create, update, and delete songs.
- Display statistics about songs, artists, albums, genres, and more.

### Bonus Features

- Implement a Searching functionality (e.g., filter by genre, title).

## deployment

- Frontend on "Vercel"
-Backend on "Render"

## Deveoped by
- Kirubel Jalleta
- Email: kirubelja@gmail.com