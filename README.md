# **Articalization**  

## **Description**  
React News App is a web application that fetches and displays news from multiple sources, offering advanced filtering and user preferences. It is containerized with Docker for seamless setup and deployment.  

## Application Overview

To take a look at the application, please check out this video:

[![Watch the video](https://img.youtube.com/vi/9V-b1aAr0dQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=9V-b1aAr0dQ&ab_channel=NaghamQarqamaz)

## **Technologies Used**  
- React  
- TypeScript
- TailwindCSS
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

---

## **Upcoming Work and Features**

### 1. **Timezone and Date Filtering Issue:**

When filtering articles by date, I encountered issues where:
- Articles from after the start date were missing.
- Articles from after the end date were included.

This behavior depended on the user's timezone.

I tried updating date values to datetime and adjusting for the user's timezone, but some sources like The New York Times seemed to not support datetime filtering and only supported date-based filtering.

To address this, the app will now:
- Fetch all articles from `from-date - 1 day` to `to-date + 1 day`.
- Perform local filtering to ensure only the correct articles are displayed based on the user’s preferences.

### 2. **User Preferences:**

Currently, user preferences are stored in local storage. The next step will be to implement a login system, enabling preferences to be stored in a database.

**Planned Fix:**  
- Set up user authentication and integrate a backend to store and retrieve preferences from a database, making the preferences persistent across devices.

### 3. **Article Display Based on Preferences:**

Articles from preferred sources, authors, or categories appear frequently in search results. However, if users don’t interact with these articles enough, they continue to show up.

**Planned Fix:**  
- Implement a frequency-based algorithm to track which articles users engage with, and decrease the frequency of articles they haven’t interacted with in a while.
- If an article from a specific source or author doesn't get any interactions after multiple appearances, stop showing it in the results.

### 4. **Not Interested Feature:**

To improve the user experience, a "Not Interested" feature will be introduced, allowing users to remove similar articles from appearing in the future.

**Planned Fix:**  
- Add a "Not Interested" button to articles, allowing users to indicate when they don’t want to see similar content again.
- Store these preferences in the backend to adjust the content shown based on user feedback.
