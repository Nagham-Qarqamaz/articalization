# **React News App**  

## **Description**  
React News App is a web application that fetches and displays news from multiple sources, offering advanced filtering and user preferences. It is containerized with Docker for seamless setup and deployment.  

## **Technologies Used**  
- React  
- TypeScript
- Tailwind
- Redux
- Docker  

## **Prerequisites**  
Ensure you have the following installed before setting up the project:  
- [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) (for local development)  
- [Docker](https://www.docker.com/) (for containerized deployment)  

## **Environment Variables**  
The application stores API keys in environment variables. To set them up:  

1. Create a `.env` file in the project root.  
2. Copy the contents of `.env.example` into it.  
3. Replace the empty strings with your actual API keys.  

**Note:** You need to obtain API keys from The Guardian, The New York Times, and NewsAPI.org.  

## **Getting Started**  

### **Local Development**  

1. Clone the repository:  
    ```bash
    git clone https://github.com/Nagham-Qarqamaz/articalization.git
    cd articalization
    ```
2. Install dependencies:  
    ```bash
    yarn install
    ```
3. Set up environment variables by creating a `.env` file in the project root and adding your API keys.  
4. Start the development server:  
    ```bash
    yarn dev
    ```
5. The app will be accessible at `http://localhost:<port>`.  

### **Docker Deployment**  

1. Clone the repository:  
    ```bash
    git clone https://github.com/Nagham-Qarqamaz/articalization.git
    cd articalization
    ```
2. Create a `.env` file in the project root and add your API keys.  
3. Build the Docker image:  
    ```bash
    docker build -t articalization .
    ```
4. Run the Docker container:  
    ```bash
    docker run -p 8080:80 articalization
    ```
5. The app will be accessible at `http://localhost:8080`. You can modify the port mapping (`8080:80`) if port 80 is already in use.  

## **Docker Image Details**  
The `Dockerfile` follows a multi-stage build process:  
1. **Build Stage:** Compiles the React application.  
2. **Production Stage:** Uses Nginx to serve the static files efficiently.  

The final image exposes port `80`.  

