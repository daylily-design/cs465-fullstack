# cs465-fullstack

<img src="/fullstack1.png">
<img src="/fullstack2.png">

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
--
Express HTML was seen as a multi-page application (MPA), Angular.js was seen as a single page application (SPA), and JavaScript was used in both the front- and back-end appearance and operations. The SPA reduced the need for different tabs and HTML-based URLs and preloaded the JavaScript code to improve overall response times. Examples of the use of JavaScript include routing, visible components like the trip cards, and endpoiint services like UPDATE and GET.

Why did the backend use a NoSQL MongoDB database?
--
A NoSQL MongoDB database allows for unstructured or semi-structured data to be added, stored, edited, retrieved, and deleted. Although each field in a trip object is required to be filled out, this is useful for scenarios in which not all trip details are known right away. MongoDB also supports higher scalability, which is useful for a growing company that needs to handle increasing numbers of users and their trips.

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
--
JSON is a mode of data transportation while JavaScript is a programming language that makes webpages dynamic. JSON formatting stores data in the form of objects (i.e., trip data within whole trip objects in the database) while JavaScript is responsible for the user's ability to click "Edit Trip", input new information, and see the new information reflected after ending the edit.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
--
The application was overhauled from an Express HTML MPA to an Angular.js SPA to improve response times and usability for mobile users. Reusable UI components can reduce the workload of creating and arranging new components to fit information in or take information out upon delete, especially if existing pages already use grid layouts with rigid weights and cells to align information. They reduce the risk of messing up an existing layout because they're meant to be dynamically added and deleted.

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
--
The methods for request and retrival refer to the underlying code that determines what "get" or "delete" actually <em>do</em> to items in a database and on display. Endpoints are the URLs that communicate these requests/retrievals to the server. Security is a broad topic, but it showed up here in the form of using username + password logins to prevent non-users from deleting or editing information.

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
--
This course gave me exposure to working with MEAN stack web development. It also showed me how Express HTML and Angular.js web applications look and behave differently. This exposure will help me expand my skillset to other stacks, like the MERN stack that uses React, to be a job candidate with modern, sought-out skills. 

