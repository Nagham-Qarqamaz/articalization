# React News App

## Description

This is a React application that fetches and displays news from multiple sources, with advanced filtering and preference options. It is containerized using Docker for easy setup and deployment.

## Features

* Fetches news from different sources (The Guardian, New York Times, NewsAPI.org).
* Dockerized for consistent environment and easy deployment.

## Technologies Used

* React
* TypeScript
* Docker
* `.env` for environment variables

## Prerequisites

* Node.js and yarn installed (for local development)
* Docker installed

## Environment Variables

The application uses environment variables to store API keys. You need to create a `.env` file in the project root, copy .env.example;

**Note:** Replace the empty strings with your actual API keys.  You will need to obtain API keys from The Guardian, The New York Times, and NewsAPI.org.

## Getting Started

### Local Development

1.  Clone the repository:
    ```bash
    git clone [<repository_url>](https://github.com/Nagham-Qarqamaz/articalization.git)
    cd articalization
    ```
2.  Install dependencies:
    ```bash
    yarn install
    ```
3.  Create a `.env` file in the project root and add your API keys.
4.  Start the development server:
    ```bash
    yarn dev
    ```
    The app will be accessible at `http://localhost:<port>`.

### Docker Deployment

1.  Clone the repository:
    ```bash
    git clone [<repository_url>](https://github.com/Nagham-Qarqamaz/articalization.git)
    cd articalization
    ```
2.  Create a `.env` file in the project root and add your API keys.
3.  Build the Docker image:
    ```bash
    docker build -t articalization .
    ```
4.  Run the Docker container:

    ```bash
    docker run -p 8080:80 articalization
    ```
    The app will be accessible at `http://localhost:8080`.  You can change the port mapping (8080:80) if port 80 is already in use.

## Docker Image

* The Dockerfile uses a multi-stage build:
    * First stage (`build`):  Builds the React application.
    * Second stage:  Uses Nginx to serve the static files from the build.
* The image exposes port 80.

