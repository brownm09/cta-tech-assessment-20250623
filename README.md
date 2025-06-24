# Hello, World! React App

This project is a simple React application created with Vite. It displays 'Hello, World!' on the main page.

## Setup

1. ```bash

npx create-vite@latest . --template react

```
2. ```bash
npm install
```

3. ```bash

npm run dev

```
4. ```bash
npm run build
```

5. Open your browser and visit the local address shown in the terminal (usually <http://localhost:5173>).

## Build for Production

To build the app for production:

```bash
npm run build
```

## Project Structure

- `src/` - Source code
- `public/` - Static assets
- `index.html` - Main HTML file

## Implementation Steps

1. Assess the problem.

The problem asks to create a UX. I need to make the following considerations:

- Identify the requirements: UI (text input and dropdown), function to consume the public API, response handler.

2. Choose a technology with which to solve the problem:

- I've chosen `React.js` because it is in vogue and assumed to be understood by reviewers.

3. Design a solution:

- I need to fetch data; given the problem statement, I can't necessarily (pre)fetch it on page load. Do I need to cache it? Probably not.
- Where do I split my code? The bundle for this UX isn't going to be very big, but if the app were to be extended, I'd need to consider it. For now, I'll split the code between `component` and `logic` for simplicity.

4. Consider extra requirements:

- Is this API rate-limited?
- Should I limit the number of times a user can submit a request to the API?
- How can I make the code more maintainable? Should I add linters or ask Copilot to assess the styling?
- I added a test.

5. Implementation

- I need:
  - a text element for the user to type the IP
  - a dropdown select for user to choose a field
  - a button to submit and display the response
- Maybe later:
  - error-handling?
  - instructions for the "user"
  - styles?
  - disable the button if the IP isn't formatted correctly?
  
---

*This project was generated using Vite and React.*
