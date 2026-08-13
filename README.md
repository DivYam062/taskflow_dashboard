# TaskFlow Dashboard

A responsive Task Management Dashboard built with React, React Router DOM, Axios, and Plain CSS. The application supports CRUD operations, routing, API integration, and responsive UI design.

## Features

* View tasks from API
* Add new tasks
* Update task completion status
* Delete tasks
* View task details
* Loading, error, and empty states
* Responsive design for mobile, tablet, and desktop
* Local state management for CRUD operations with mock API handling

## Tech Stack

* React
* React Router DOM
* JavaScript (ES6+)
* Plain CSS
* Axios
* JSONPlaceholder API

## Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

Clone the repository using Git:

```bash
git clone <your-github-repository-url>
```

Example:

```bash
git clone https://github.com/your-username/taskflow-dashboard.git
```

Navigate into the project folder:

```bash
cd taskflow-dashboard
```

---

### 2. Install Dependencies

Install all required packages:

```bash
npm install
```

---

### 3. Start the Development Server

Run the application:

```bash
npm start
```

OR

```bash
npm run dev
```

The application will start on:

```bash
http://localhost:3000
```

Open the above URL in your browser to view the application.

---

## API Information

This project uses JSONPlaceholder as a mock API.

Base URL:

```
https://jsonplaceholder.typicode.com
```

Endpoints used:

```
GET    /todos?_limit=10
GET    /todos/{id}
POST   /todos
PATCH  /todos/{id}
DELETE /todos/{id}
```

Note:
JSONPlaceholder does not permanently store POST, PATCH, and DELETE changes. The application updates the local React state to reflect CRUD operations.

## Project Structure

```
src
│
├── api
│   └── taskService.js
│
├── components
│   ├── Header
│   ├── TaskItem
│   ├── Loader
│   └── Error
│
├── context
│   ├── TaskContext.js
│   ├── TaskProvider.jsx
│   └── useTaskContext.js
│
├── hooks
│   ├── useTasks.js
│   └── useTask.js
│
├── pages
│   ├── Dashboard
│   └── TaskDetails
│
├── routes
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx
```

## Available Scripts

### Start development server

```bash
npm start
```

OR

```bash
npm run dev
```

### Checks the codebase for linting issues and coding standard violations. 

```bash
npm run lint
```

### Build production version

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```
