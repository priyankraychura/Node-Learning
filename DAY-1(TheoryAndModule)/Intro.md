Sure, here's your text converted into Markdown format:

---

# Introduction to Node.js

## What is Node.js?
Node.js is a cross-platform, open-source JavaScript runtime environment that allows you to run JavaScript code outside the browser. It’s built on Chrome's V8 JavaScript engine, which compiles JavaScript directly into machine code, enabling high performance. Node.js allows developers to use JavaScript for server-side scripting, making it possible to create full-stack applications using a single programming language.

**Founder:** Ryan Dahl  
**Initial Release:** 2009

## What is a Server?
A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. Servers respond to requests from clients, such as serving web pages, providing data, or executing tasks.

## What is Cross-Platform?
Cross-platform refers to software that can run on multiple operating systems, like Windows, macOS, and Linux, without needing to be rewritten for each platform.

## Server-Side Scripting
Server-side scripting involves writing code that runs on the server rather than the client's browser. This allows for dynamic, customized responses to user requests, such as fetching data from a database and rendering it on a web page.

## Alternatives to Node.js:
- PHP
- Java
- Ruby
- Python

## Uses of Node.js:
- Real-time applications (e.g., chat applications, online gaming)
- Data streaming
- Wireless connectivity
- System monitoring dashboards
- Chatbots
- RESTful APIs

## Installing Node.js:
To install Node.js, visit the official Node.js website and download the installer for your operating system (Windows, macOS, Linux). Follow the on-screen instructions to complete the installation.

## REPL (Read-Eval-Print Loop)
REPL is an interactive shell that comes with Node.js and runs in the terminal. It allows you to execute JavaScript code line by line.

- **Read:** Reads user input and parses it into a JavaScript data structure, storing it in memory.
- **Eval:** Evaluates the data structure.
- **Print:** Prints the result of the evaluation.
- **Loop:** Repeats the above commands until the user exits the REPL (by pressing Ctrl+C twice or Ctrl+D).

## Global Objects in Node.js
Node.js provides several global objects, accessible anywhere in your application without requiring additional imports.

- `__filename`: The absolute path of the file currently being executed.
- `__dirname`: The absolute path of the directory containing the file currently being executed.

## Node.js Modules
### Types of Modules in Node.js:
- **Core Modules:** These are built into Node.js and do not require installation. They can be loaded using the `require` function.

#### Examples of Core Modules:
- `http`: Used to create an HTTP server.
- `fs`: Provides methods to work with the file system.
- `path`: Contains utilities for working with file and directory paths.
- `querystring`: Helps parse and format URL query strings.
- `url`: Provides utilities for URL resolution and parsing.

- **Local Modules:** These are user-defined modules created within the Node.js application. They encapsulate specific functionality and can be organized in separate files or directories.

#### Example of a Local Module:
```javascript
const welcome = {
    sayHello: () => {
        console.log("Hello, team!");
    },
    currTime: new Date().toLocaleDateString(),
    companyName: "Red And White"
};

module.exports = welcome;
```
Use `require` to import and use the module's properties.

- **Third-Party Modules:** These are modules available online via npm (Node Package Manager). They can be installed in a project or globally.

#### Examples of Third-Party Modules:
- `mongoose`: For interacting with MongoDB.
- `multer`: For handling file uploads.
- `passport`: For authentication.
- `cookie-parser`: For parsing cookies.

## Creating a Server Using the HTTP Module
Here’s how you can create a basic server using Node.js’s `http` module:
```javascript
const http = require('http');
const fs = require('fs');
const port = 1322;

const handleRequest = (req, res) => {
    let filename = '';
    switch (req.url) {
        case '/':
            filename = './index.html';
            break;
        default:
            filename = './error.html';
            break;
    }
    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result);
        }
    });
};

const server = http.createServer(handleRequest);

server.listen(port, (err) => {
    if (err) {
        console.log("Server not found");
    } else {
        console.log("Server started on port => " + port);
    }
});
```

## Express.js
### What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building a server and handling HTTP requests and responses.

### MVC Framework:
- **M (Model):** Manages data and business logic.
- **V (View):** Presents data to the user (UI).
- **C (Controller):** Handles input and interacts with the model to update the view.

### EJS (Embedded JavaScript):
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. It’s often used with Express.js to render dynamic web pages.

### Installation of Express.js and EJS:
```bash
npm install express
npm install ejs
```

### Installing Nodemon:
Nodemon is a tool that automatically restarts your Node.js application when file changes are detected, saving you the trouble of manually stopping and restarting the server.

```json
"scripts": {
  "start": "nodemon index.js"
}
```

To render HTML files using Express.js, store your EJS files in a `views` directory and use the `.ejs` extension.

---

I hope this helps! If you have any more questions or need further assistance, feel free to ask.