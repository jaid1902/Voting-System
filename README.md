# Online Voting System

## Description

A secure platform for voting. This system allows any user to visit the dashboard containing the election poll. When a user attempts to log in, they must already be registered. If not registered, they can register first and then be automatically redirected to the login page. After logging in, users can vote for their candidate. Based on user login and permissions (admin or non-admin), the relevant pages will be visible. A user can only vote once, and every page is protected using middleware.

## Features

- Secure voting platform.
- User registration and login.
- Role-based access (admin and non-admin).
- One-time voting per user.
- Protected routes and pages.
- Real-time updates (MongoDB Atlas).

## Application Link

You can access the live application [here](https://online-voting-system-two.vercel.app/).

## Technologies Used

- Next.js
- CSS
- JavaScript
- MongoDB (MongoDB Atlas)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/online-voting-system.git
   cd online-voting-system
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode, use:

```bash
npm run dev
```
