# Grand Prix History Web Application

## Overview

Grand Prix History is a web application inspired by P10, a Formula 1 fantasy league website. The primary idea of P10 was to allow users to predict which driver would not finish a race (DNF) or which driver would finish in P10. The original concept used the OpenF1 API, a comprehensive and free API that provides real-time Formula 1 data, including radio messages, driver and constructor standings, and more.

## Planning Phase

### Initial Research and Whiteboarding

Before diving into development, I spent several hours researching and planning the application. I set a one-week deadline to plan, develop, and deploy the web application. The planning process involved:

- Defining the routes and pages on a whiteboard.
- Testing new technologies to use in the project.

### Technology Stack

I chose to experiment with some technologies I hadn't used in previous projects:

- **Backend**: Python, to develop the API routes.
- **Frontend**: Jinja, for template rendering.

## Development Phase

### API Testing and Selection

During the planning stage, I tested the OpenF1 API to see if it could provide the required data. I quickly realized that displaying the information I wanted would be challenging with this API. Therefore, I decided to look for an alternative and found the HyperRace API on RapidAPI.com, which also offers real-time F1 data and was easier to work with.

### Backend Development

- **Technology**: Node.js
- **Tasks**:
  - Setting up the backend server.
  - Creating server endpoints and API routes.
  - Implementing functions to fetch data from the HyperRace API.

### Frontend Development

- **Technology**: React
- **Tasks**:
  - Setting up a React template for the frontend.
  - Developing components to display the fetched data.
  - Integrating the backend API with the frontend via an API client.
  - Incorporating various libraries to enhance the user interface.

### Rebuilding with New APIs

After recognizing the potential of the HyperRace API, I committed to using it fully in the project. This decision led to a rebuild of the application:

- **Backend**: Node.js server endpoints and API routes for fetching data.
- **Frontend**: React components for displaying data.

I also managed to incorporate the OpenF1 API to display driver details, complementing the data fetched from the HyperRace API.

### Frontend Libraries and Features

To create an engaging and interactive user interface, I used several frontend libraries:

- **Flowbite Carousel**: For the Grand Prix page and Iconic Cars page, I used the Flowbite Carousel library to create responsive and visually appealing carousels. This library allowed for easy customization and smooth transitions between images.
- **Material UI Progress Bar**: On the timeline feature, I used the Material UI Progress Bar to sync with audio playback. This provided a visual representation of the progress, enhancing the user experience by allowing users to see the timeline of events while listening to related audio content.

## Conclusion

The Grand Prix History web application was successfully developed and deployed within the set timeframe. This project involved:

- Initial planning and research.
- Testing and selecting appropriate APIs.
- Developing a robust backend and frontend using modern technologies.
- Integrating multiple data sources to provide comprehensive real-time F1 information.
- Enhancing the user interface with libraries like Flowbite Carousel and Material UI Progress Bar.

Through this project, I gained valuable experience with new technologies and API integration, resulting in a functional and informative web application for Formula 1 enthusiasts.
