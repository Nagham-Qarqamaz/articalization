# Your React Application

This is a React application containerized with Docker.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Docker installed on your machine.
* Node.js and Yarn installed (if you need to make changes to the code).
* Git installed (if you are going to clone the repository).

### Installation

1.  **Clone the repository (if applicable):**

    ```bash
    git clone <repository_url>
    cd <your_project_directory>
    ```

    Replace `<repository_url>` with the URL of your Git repository and `<your_project_directory>` with the name of your project folder.

2.  **Build the Docker image:**

    ```bash
    docker build -t your-react-app .
    ```

    Replace `your-react-app` with your desired image name.

3.  **Run the Docker container:**

    ```bash
    docker run -p 3000:80 your-react-app
    ```

    This will start the container and map port 3000 on your host machine to port 80 in the container.

4.  **Access the application:**

    Open your web browser and navigate to `http://localhost:3000`.

### Development

If you need to make changes to the React application:

1.  **Install dependencies:**

    ```bash
    yarn install
    ```

2.  **Start the development server:**

    ```bash
    yarn start
    ```

3.  Make your changes to the React application.

4.  After making changes, rebuild the Docker image.

    ```bash
    docker build -t your-react-app .
    ```

5.  And restart the container.

    ```bash
    docker stop $(docker ps -aq --filter="name=your-react-app") && docker rm $(docker ps -aq --filter="name=your-react-app") && docker run -p 3000:80 your-react-app
    ```

    \* This command stops and removes any running containers with the name "your-react-app" and then starts a new one.

### Environment Variables

This application uses environment variables for API keys. You can provide these variables to the Docker container in a few ways:

**1. Using the `-e` flag:**

    ```bash
    docker run -p 3000:80 \
      -e VITE_GUARDIAN_API_KEY="your_guardian_api_key" \
      -e VITE_NYT_API_KEY="your_nyt_api_key" \
      -e VITE_NEWSAPI_KEY="your_newsapi_key" \
      your-react-app
    ```

    Replace `"your_guardian_api_key"`, `"your_nyt_api_key"`, and `"your_newsapi_key"` with your actual API keys.

**2. Using a `.env` file and Docker Compose:**

    Create a `.env` file in the same directory as your `docker-compose.yml` file:

    ```dotenv
    VITE_GUARDIAN_API_KEY=your_guardian_api_key
    VITE_NYT_API_KEY=your_nyt_api_key
    VITE_NEWSAPI_KEY=your_newsapi_key
    ```

    Then create your `docker-compose.yml` file:

    ```yaml
    version: "3.8"
    services:
      web:
        build: .
        ports:
          - "3000:80"
        environment:
          VITE_GUARDIAN_API_KEY: ${VITE_GUARDIAN_API_KEY}
          VITE_NYT_API_KEY: ${VITE_NYT_API_KEY}
          VITE_NEWSAPI_KEY: ${VITE_NEWSAPI_KEY}
    ```

    Then, run:

    ```bash
    docker-compose up --build
    ```

    **Important:** Do not commit your `.env` file containing sensitive API keys to your Git repository. Add it to your `.gitignore` file.

    ```gitignore
    node_modules
    build
    .env
    .DS_Store
    ```

### .dockerignore

A `.dockerignore` file is included to exclude unnecessary files from the Docker build, such as `node_modules` and `build` folders.

