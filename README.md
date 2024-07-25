<div align="center">
    <a href="https://portfolio-v1-fv.netlify.app" target="_blank">
      <img src="/client/public/preview.webp" alt="Project Banner">
    </a>
  <h3 align="center">Portfolio v1</h3>
</div>

##  <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

##  <br /> <a name="introduction">✨ Introduction</a>

**[EN]** Portfolio website, built using React for dynamic UI components and Sanity as a headless CMS for flexible content management. The project also incorporates Framer Motion for smooth animations and Sass for maintainable styles. This portfolio demonstrates my skills in leveraging modern web technologies to create a dynamic and visually appealing online presence.

**[FR]** Portfolio réalisé avec React pour des composants UI dynamiques et Sanity comme CMS headless pour une gestion de contenu flexible. Le projet utilise également Framer Motion pour des animations fluides et Sass pour des styles maintenables. Ce portfolio illustre mes compétences dans l’utilisation des technologies web modernes pour créer une présence en ligne dynamique et visuellement attrayante.

##  <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- **React** is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes over time. React's component-based architecture allows developers to create reusable UI components, making development more efficient and the codebase easier to maintain. 

- **Framer Motion** is a React animation library designed for creating smooth, interactive animations and transitions. It simplifies complex animations with a straightforward API, supports gesture-based interactions, and offers physics-based animations for realistic motion effects.

- **Sanity** is a headless CMS (Content Management System) that provides a flexible and powerful content platform. It offers real-time collaboration, a customizable content studio, and robust APIs for integrating content into various applications. Sanity is designed to handle structured content and supports complex data models, making it ideal for modern web and mobile applications.

- **A "Headless CMS"** (Content Management System) is a back-end-only content management system that separates the content repository from the presentation layer. Unlike traditional CMS platforms, which are tightly coupled with the front end, a headless CMS provides content via APIs, allowing developers to deliver content across various platforms and devices. This decoupling offers greater flexibility and control over how content is presented, enabling seamless integration with different front-end technologies and ensuring a consistent user experience across multiple channels.

- **Sass** is a powerful CSS preprocessor that extends the capabilities of CSS with features like variables, nested rules, mixins, and functions. It helps developers write more maintainable and modular stylesheets, making complex styles easier to manage and reuse across projects. Sass files are compiled into standard CSS before deployment.

- **SCSS** is the syntax used by Sass that closely resembles traditional CSS. It supports all the features of CSS while adding the advanced capabilities of Sass, such as variables, nested rules, and mixins. SCSS files are also compiled into standard CSS, allowing for more dynamic and reusable styling.

- **react-icons** is a library that provides a collection of popular icon sets as React components. It allows developers to easily incorporate scalable vector icons into their React projects, supporting various icon libraries like Font Awesome, Material Icons, and more. The icons can be customized in terms of size, color, and other styling properties directly through props.


## <br/> <a name="features">📝 Features</a>

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

👉 **Dynamic UI Components**: Interactive and engaging user interface elements built with React.

👉 **Smooth Animations**: Engaging animations and transitions powered by Framer Motion.

👉 **Maintainable Styles**: Clean and organized styling with Sass.

👉 **Content Management**: Streamlined content updates and management using Sanity as a headless CMS.


## <br /> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

<br/>**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

Let's install the project dependencies, from your terminal, run:

```bash
# Navigate to the client directory
cd client

# Install the necessary dependencies for the client-side application
npm install
# or
yarn install

# Navigate back to the root directory
cd ..

# Navigate to the server directory
cd server

# Install the necessary dependencies for the server-side application
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named `.env` in the **client** folder of your project and add the following content:

```env
REACT_APP_SANITY_PROJECT_ID=
REACT_APP_SANITY_TOKEN=
```

Replace the placeholder values with your actual respective account credentials:

- [Sanity.io](https://www.sanity.io/manage )
- [Personal desk](https://jsm-portfolio.sanity.studio/desk) (Create your own)


<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
# Navigate to the client directory
cd client

# Start client
npm start
# or
yarn start

# Navigate back to the root directory
cd ..

# Navigate to the server directory
cd server

# Start server
npm start
# or
yarn start
```

- Client running on [`http://localhost:3000`](http://localhost:3000)
- Server running on [`http://localhost:3333`](http://localhost:3333)