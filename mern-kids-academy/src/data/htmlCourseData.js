export const htmlCourseData = {
    // MODULE 1: HTML Foundations
    "html.1.1": {
        title: "What is HTML?",
        explanation: `
            <h3>The Skeleton of the Web</h3>
            <p><strong>HTML</strong> (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.</p>
            <p>It defines the <strong>structure</strong> of your web page. If a website were a house, HTML would be the bricks and beams.</p>
            <p>HTML consists of a series of <strong>Elements</strong>, which you use to enclose different parts of the content to make it appear or act a certain way.</p>
        `,
        example: `<!-- This is a simple HTML element -->
<p>Hello World!</p>
<button>Click Me</button>`,
        exercises: {
            beginner: "Write a button element with the text 'Start'.",
            intermediate: "Create a paragraph that says 'I am learning HTML'.",
            challenge: "Write a comment explaining what HTML stands for."
        },
        quiz: {
            question: "What is the primary function of HTML?",
            options: ["To style the page", "To make the page interactive", "To define the structure of the page", "To store data in a database"],
            answer: 2
        }
    },
    "html.1.2": {
        title: "How websites work",
        explanation: `
            <h3>Browser vs Server</h3>
            <p>When you visit a website, your computer (the <strong>Client</strong>) sends a request to another computer (the <strong>Server</strong>) where the website lives.</p>
            <p>The Server sends back an <strong>HTML file</strong> (and other assets). Your <strong>Browser</strong> (like Chrome or Safari) reads this HTML code and paints the visual page you see.</p>
        `,
        example: `<!-- The Server sends this code -->
<h1>Welcome!</h1>
<p>This page was served to you.</p>`,
        exercises: {
            beginner: "Who sends the request to view a website?",
            intermediate: "What software reads HTML and displays it?",
            challenge: "Explain the relationship between the Browser and the Server in one sentence."
        },
        quiz: {
            question: "Which software interprets HTML code?",
            options: ["The Server", "The Database", "The Browser", "The Editor"],
            answer: 2
        }
    },
    "html.1.3": {
        title: "Basic Structure",
        explanation: `
            <h3>The Essential Tags</h3>
            <p>Every HTML document starts with a specific structure.</p>
            <ul>
                <li><code>&lt;!DOCTYPE html&gt;</code>: Tells the browser this is an HTML5 document.</li>
                <li><code>&lt;html&gt;</code>: The root element that wraps all content.</li>
            </ul>
        `,
        example: `<!DOCTYPE html>
<html>
  <!-- All your code goes here -->
</html>`,
        exercises: {
            beginner: "Type the doctype declaration.",
            intermediate: "Create an html tag that wraps a 'Hello' message.",
            challenge: "Write the complete outer shell of an HTML document (doctype + html)."
        },
        quiz: {
            question: "What is the very first line of a modern HTML document?",
            options: ["<html>", "<head>", "<!DOCTYPE html>", "<body>"],
            answer: 2
        }
    },
    "html.1.4": {
        title: "Head, Title & Body",
        explanation: `
            <h3>Head vs Body</h3>
            <p>Inside the <code>&lt;html&gt;</code> tag, there are two main sections:</p>
            <ol>
                <li><code>&lt;head&gt;</code>: Contains <strong>metadata</strong> (info about the page) and the <code>&lt;title&gt;</code> (shown in the browser tab). This creates NO visible content on the page itself.</li>
                <li><code>&lt;body&gt;</code>: Contains <strong>everything you see</strong> on the screen (text, images, buttons).</li>
            </ol>
        `,
        example: `<html>
  <head>
    <title>My Cool Page</title>
  </head>
  <body>
    <h1>I am visible!</h1>
  </body>
</html>`,
        exercises: {
            beginner: "Add a title tag with your name.",
            intermediate: "Create a simple page with a title and a body message.",
            challenge: "Write a full HTML structure where the tab says 'Home' and the page says 'Welcome'."
        },
        quiz: {
            question: "Which tag contains the visible content of the webpage?",
            options: ["<head>", "<title>", "<meta>", "<body>"],
            answer: 3
        }
    },

    // MODULE 2: Text & Formatting
    "html.2.1": {
        title: "Headings (h1-h6)",
        explanation: `
            <h3>The Heading Hierarchy</h3>
            <p>HTML provides 6 levels of headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.</p>
            <ul>
                <li><code>&lt;h1&gt;</code> is the most important (Main Title). Use only one per page.</li>
                <li><code>&lt;h2&gt;</code> is a section title.</li>
                <li><code>&lt;h6&gt;</code> is the smallest.</li>
            </ul>
        `,
        example: `<h1>My Blog</h1>
<h2>Latest Posts</h2>
<h3>Post Title</h3>`,
        exercises: {
            beginner: "Create an h1 tag with your favorite food.",
            intermediate: "Create a nested structure with h1, h2, and h3.",
            challenge: "Create a structured article outline using h1 for title, h2 for chapters."
        },
        quiz: {
            question: "Which heading is the largest?",
            options: ["<h6>", "<h3>", "<h1>", "<heading>"],
            answer: 2
        }
    },
    "html.2.2": {
        title: "Paragraphs & Breaks",
        explanation: `
            <h3>Text Blocks</h3>
            <p><code>&lt;p&gt;</code> defines a paragraph. It automatically adds spacing before and after.</p>
            <p><code>&lt;br&gt;</code> inserts a single line break (like hitting Enter).</p>
            <p><code>&lt;hr&gt;</code> creates a thematic break (horizontal line).</p>
        `,
        example: `<p>First paragraph.</p>
<hr>
<p>Second paragraph.<br>New line inside.</p>`,
        exercises: {
            beginner: "Write two paragraphs separated by an hr.",
            intermediate: "Write a poem using <br> for line breaks.",
            challenge: "Create a signature block with Name, <br> Title, <br> Company."
        },
        quiz: {
            question: "Does the <br> tag need a closing tag (</br>)?",
            options: ["Yes", "No", "Only in headings", "Sometimes"],
            answer: 1
        }
    },
    "html.2.3": {
        title: "Bold & Italic",
        explanation: `
            <h3>Emphasis</h3>
            <p>To make text stand out:</p>
            <ul>
                <li><code>&lt;b&gt;</code> or <code>&lt;strong&gt;</code>: Makes text <strong>bold</strong>. 'Strong' implies importance.</li>
                <li><code>&lt;i&gt;</code> or <code>&lt;em&gt;</code>: Makes text <em>italic</em>. 'Em' implies stress.</li>
            </ul>
        `,
        example: `<p>This is <strong>very important</strong>.</p>
<p>That is a <em>beautiful</em> painting.</p>`,
        exercises: {
            beginner: "Make your name bold.",
            intermediate: "Write a sentence with one bold word and one italic word.",
            challenge: "Nest them! make a word both bold AND italic."
        },
        quiz: {
            question: "Which tag is semantically correct for important text?",
            options: ["<b>", "<bold>", "<strong>", "<big>"],
            answer: 2
        }
    },
    "html.2.4": {
        title: "Underline & Highlights",
        explanation: `
            <h3>More Formatting</h3>
            <p>Sometimes you need more styles:</p>
            <ul>
                <li><code>&lt;u&gt;</code>: <u>Underlines</u> text. use carefully (can look like links).</li>
                <li><code>&lt;mark&gt;</code>: <mark>Highlights</mark> text (usually yellow background).</li>
            </ul>
        `,
        example: `<p>Please <u>sign here</u>.</p>
<p>Don't forget to <mark>save your work</mark>.</p>`,
        exercises: {
            beginner: "Highlight the word 'Winner'.",
            intermediate: "Underline a book title.",
            challenge: "Create a sentence using bold, italic, and highlight."
        },
        quiz: {
            question: "What does the <mark> tag do?",
            options: ["Bolds text", "Underlines text", "Highlights text", "Deletes text"],
            answer: 2
        }
    },

    // MODULE 3: Structure & Layout
    "html.3.1": {
        title: "Div & Span",
        explanation: `
            <h3>The Generic Containers</h3>
            <p>When no semantic tag fits, we use general containers:</p>
            <p><code>&lt;div&gt;</code>: A <strong>Block</strong> element. It takes up the full width and starts a new line. Good for grouping large sections.</p>
            <p><code>&lt;span&gt;</code>: An <strong>Inline</strong> element. It sits inside a line of text. Good for styling specific words.</p>
        `,
        example: `<div style="background: #eee; padding: 10px;">
  <p>I am in a box.</p>
</div>
<p>I like <span style="color: blue">blue</span> cars.</p>`,
        exercises: {
            beginner: "Create a div with two paragraphs inside.",
            intermediate: "Use a span to color a single word red.",
            challenge: "Create a 'card' layout using a div container with an h2 and p inside."
        },
        quiz: {
            question: "Which element is block-level?",
            options: ["<span>", "<a>", "<div>", "<b>"],
            answer: 2
        }
    },
    "html.3.2": {
        title: "Header, Nav, Main, Footer",
        explanation: `
            <h3>Semantic Structure (Page Level)</h3>
            <p>These tags give meaning to the main parts of your webpage:</p>
            <ul>
                <li><code>&lt;header&gt;</code>: Top area (Logo, main title).</li>
                <li><code>&lt;nav&gt;</code>: Navigation links (Menu).</li>
                <li><code>&lt;main&gt;</code>: The unique content of the page.</li>
                <li><code>&lt;footer&gt;</code>: Bottom area (Copyright, contacts).</li>
            </ul>
        `,
        example: `<body>
  <header><h1>My Site</h1></header>
  <nav><a href="#">Home</a></nav>
  <main><p>Welcome...</p></main>
  <footer>© 2024</footer>
</body>`,
        exercises: {
            beginner: "Create a footer with your name.",
            intermediate: "Create a header with a website title.",
            challenge: "Build a standard page layout using all 4 semantic tags."
        },
        quiz: {
            question: "Where would the copyright notice go?",
            options: ["<header>", "<main>", "<nav>", "<footer>"],
            answer: 3
        }
    },
    "html.3.3": {
        title: "Section, Article, Aside",
        explanation: `
            <h3>Semantic Structure (Content Level)</h3>
            <ul>
                <li><code>&lt;section&gt;</code>: A thematic grouping of content (e.g., 'Reviews', 'Features').</li>
                <li><code>&lt;article&gt;</code>: Independent content that makes sense on its own (Blog post, News item).</li>
                <li><code>&lt;aside&gt;</code>: Content related to the main content but separates (Sidebar, Author bio).</li>
            </ul>
        `,
        example: `<article>
  <h2>News Story</h2>
  <p>Something happened today...</p>
</article>
<aside>
  <p>Ad: Buy this!</p>
</aside>`,
        exercises: {
            beginner: "Create a section with a title.",
            intermediate: "Create an article tag representing a news story.",
            challenge: "Create a layout with a Main Article and a sidebar Aside."
        },
        quiz: {
            question: "Which tag is best for a blog post?",
            options: ["<section>", "<article>", "<div>", "<aside>"],
            answer: 1
        }
    },

    // MODULE 4: Links & Media
    "html.4.1": {
        title: "Links (Anchor Tags)",
        explanation: `
            <h3>The Anchor Tag</h3>
            <p><code>&lt;a&gt;</code> creates a hyperlink to another page.</p>
            <p>Attributes:</p>
            <ul>
                <li><code>href</code>: The destination URL (Required).</li>
                <li><code>target="_blank"</code>: Opens link in a new tab.</li>
            </ul>
        `,
        example: `<a href="https://google.com">Google</a>
<br>
<a href="https://youtube.com" target="_blank">YouTube (New Tab)</a>`,
        exercises: {
            beginner: "Create a link to 'https://example.com'.",
            intermediate: "Create a link that opens in a new tab.",
            challenge: "Create a list of links to your 3 favorite sites."
        },
        quiz: {
            question: "Which attribute holds the URL?",
            options: ["src", "link", "url", "href"],
            answer: 3
        }
    },
    "html.4.2": {
        title: "Images",
        explanation: `
            <h3>Displaying Images</h3>
            <p><code>&lt;img&gt;</code> embeds a picture. It is <strong>void</strong> (no closing tag).</p>
            <p>Attributes:</p>
            <ul>
                <li><code>src</code>: The path/URL to the image file.</li>
                <li><code>alt</code>: Alternative text description (Accessibility).</li>
            </ul>
        `,
        example: `<img src="https://placedog.net/500" alt="A cute dog">`,
        exercises: {
            beginner: "Embed an image with a src.",
            intermediate: "Add an 'alt' text to your image.",
            challenge: "Make the image clickable (wrap it in an <a> tag)."
        },
        quiz: {
            question: "Why use the 'alt' attribute?",
            options: ["For SEO and Screen Readers", "To make it load faster", "To style the border", "To link it"],
            answer: 0
        }
    },
    "html.4.3": {
        title: "Audio & Video",
        explanation: `
            <h3>Multimedia Tags</h3>
            <p>HTML5 allows you to play audio and video natively.</p>
            <ul>
                <li><code>&lt;video&gt;</code>: Plays movies. Supports <code>width</code>, <code>height</code>, <code>controls</code>.</li>
                <li><code>&lt;audio&gt;</code>: Plays sound. Supports <code>controls</code>.</li>
            </ul>
        `,
        example: `<video src="movie.mp4" width="300" controls></video>
<br>
<audio src="song.mp3" controls></audio>`,
        exercises: {
            beginner: "Create an audio player with controls.",
            intermediate: "Create a video player with specific width.",
            challenge: "Create a 'Media Gallery' with 1 video and 1 audio track."
        },
        quiz: {
            question: "Which attribute adds the play/pause buttons?",
            options: ["play", "autoplay", "controls", "buttons"],
            answer: 2
        }
    },

    // MODULE 5: Lists
    "html.5.1": {
        title: "Unordered Lists",
        explanation: `
            <h3>Bullet Points</h3>
            <p>Use <code>&lt;ul&gt;</code> when the order doesn't matter (like a grocery list).</p>
            <p>Items are wrapped in <code>&lt;li&gt;</code> (List Item).</p>
        `,
        example: `<ul>
  <li>Milk</li>
  <li>Bread</li>
</ul>`,
        exercises: {
            beginner: "Create a list of 3 fruits.",
            intermediate: "Create a navigation menu using a ul.",
            challenge: "Create a list where each item is a link."
        },
        quiz: {
            question: "What symbol does a <ul> typically show?",
            options: ["Numbers", "Letters", "Bullets", "Roman Numerals"],
            answer: 2
        }
    },
    "html.5.2": {
        title: "Ordered Lists",
        explanation: `
            <h3>Numbered Lists</h3>
            <p>Use <code>&lt;ol&gt;</code> when the order DOES matter (like a recipe or ranking).</p>
            <p>The browser automatically counts for you (1, 2, 3...).</p>
        `,
        example: `<ol>
  <li>Preheat oven</li>
  <li>Mix ingredients</li>
</ol>`,
        exercises: {
            beginner: "Create a Top 3 Movies list.",
            intermediate: "Write instructions for making a sandwich.",
            challenge: "Use an ordered list to rank your favorite video games."
        },
        quiz: {
            question: "Which tag creates a numbered list?",
            options: ["<ul>", "<nl>", "<ol>", "<list>"],
            answer: 2
        }
    },
    "html.5.3": {
        title: "Nested Lists",
        explanation: `
            <h3>Lists in Lists</h3>
            <p>You can put a list <em>inside</em> another list item to create sub-lists (indented).</p>
        `,
        example: `<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>`,
        exercises: {
            beginner: "Create a list with one sub-item.",
            intermediate: "Create a 'Categorized' list (e.g., Animals -> Dogs/Cats).",
            challenge: "Create a deep 3-level nested list."
        },
        quiz: {
            question: "Where do you place the nested <ul>?",
            options: ["Inside the <li>", "After the <li>", "Before the <li>", "Outside the list"],
            answer: 0
        }
    },

    // MODULE 6: Tables
    "html.6.1": {
        title: "Table Basics",
        explanation: `
            <h3>Rows and Data</h3>
            <p>Tables display data in a grid.</p>
            <ul>
                <li><code>&lt;table&gt;</code>: The container.</li>
                <li><code>&lt;tr&gt;</code>: <strong>Table Row</strong> (horizontal).</li>
                <li><code>&lt;td&gt;</code>: <strong>Table Data</strong> (a cell).</li>
            </ul>
        `,
        example: `<table border="1">
  <tr>
    <td>A1</td>
    <td>B1</td>
  </tr>
  <tr>
    <td>A2</td>
    <td>B2</td>
  </tr>
</table>`,
        exercises: {
            beginner: "Create a table with 1 row and 2 cells.",
            intermediate: "Create a 2x2 table.",
            challenge: "Create a table listing 3 friends and their ages."
        },
        quiz: {
            question: "What defines a row in a table?",
            options: ["<td>", "<row>", "<th>", "<tr>"],
            answer: 3
        }
    },
    "html.6.2": {
        title: "Headers & Structure",
        explanation: `
            <h3>Advanced Tables</h3>
            <p>Use <code>&lt;th&gt;</code> for header cells (bold).</p>
            <p>Group content with:</p>
            <ul>
                <li><code>&lt;thead&gt;</code>: Header rows.</li>
                <li><code>&lt;tbody&gt;</code>: Main data rows.</li>
                <li><code>&lt;tfoot&gt;</code>: Footer rows (totals).</li>
            </ul>
        `,
        example: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>100</td>
    </tr>
  </tbody>
</table>`,
        exercises: {
            beginner: "Add a header row with <th> cells.",
            intermediate: "Use thead and tbody to structure your table.",
            challenge: "Create a full Report Card table with headers, classes, and grades."
        },
        quiz: {
            question: "Which tag is used for header cells?",
            options: ["<td header>", "<th>", "<head>", "<tr>"],
            answer: 1
        }
    },

    // MODULE 7: Forms
    "html.7.1": {
        title: "The Form Container",
        explanation: `
            <h3>Asking for Data</h3>
            <p><code>&lt;form&gt;</code> is the wrapper for all interactive controls (inputs).</p>
            <p>Important attributes:</p>
            <ul>
                <li><code>action</code>: Where data is sent.</li>
                <li><code>method</code>: How data is sent (GET/POST).</li>
            </ul>
        `,
        example: `<form action="/submit" method="POST">
  <!-- Inputs go here -->
</form>`,
        exercises: {
            beginner: "Create a form tag.",
            intermediate: "Create a form for 'login' that typically uses POST.",
            challenge: "Create a form with both an action and method attribute."
        },
        quiz: {
            question: "Which tag wraps all input fields?",
            options: ["<input>", "<form>", "<div>", "<submit>"],
            answer: 1
        }
    },
    "html.7.2": {
        title: "Basic Inputs",
        explanation: `
            <h3>Text Inputs</h3>
            <p>Use the <code>&lt;input&gt;</code> tag (self-closing).</p>
            <ul>
                <li><code>type="text"</code>: Basic text box.</li>
                <li><code>type="password"</code>: Hides text (dots).</li>
                <li><code>type="email"</code>: Validates emails.</li>
                <li><code>type="number"</code>: Only numbers.</li>
            </ul>
            <p>Always use a <code>&lt;label&gt;</code>!</p>
        `,
        example: `<label>Name: <input type="text"></label>
<br>
<label>Age: <input type="number"></label>`,
        exercises: {
            beginner: "Create a name input.",
            intermediate: "Create a password input with a label.",
            challenge: "Create a Signup form (Name, Email, Age, Password)."
        },
        quiz: {
            question: "Which input type hides characters?",
            options: ["text", "hidden", "password", "secure"],
            answer: 2
        }
    },
    "html.7.3": {
        title: "Selection Controls",
        explanation: `
            <h3>User Choices</h3>
            <ul>
                <li><code>&lt;input type="checkbox"&gt;</code>: Select multiple options.</li>
                <li><code>&lt;input type="radio"&gt;</code>: Select ONE option (must share <code>name</code>).</li>
                <li><code>&lt;select&gt;</code> & <code>&lt;option&gt;</code>: Dropdown menu.</li>
            </ul>
        `,
        example: `<label><input type="checkbox"> I agree</label>
<br>
<select>
  <option>Monday</option>
  <option>Tuesday</option>
</select>`,
        exercises: {
            beginner: "Create a checkbox.",
            intermediate: "Create a dropdown with 3 options.",
            challenge: "Create a Radio Button group for Gender (Male/Female/Other)."
        },
        quiz: {
            question: "Which control creates a dropdown menu?",
            options: ["<dropdown>", "<select>", "<option>", "<list>"],
            answer: 1
        }
    },
    "html.7.4": {
        title: "Buttons & Textarea",
        explanation: `
            <h3>Submitting & Text blocks</h3>
            <p><code>&lt;textarea&gt;</code>: A multi-line text box (for comments/messages).</p>
            <p><code>&lt;button&gt;</code>: Clickable button. <code>type="submit"</code> submits the form.</p>
        `,
        example: `<textarea rows="4">Type message...</textarea>
<br>
<button>Send Message</button>`,
        exercises: {
            beginner: "Create a Submit button.",
            intermediate: "Create a textarea for comments.",
            challenge: "Build a 'Contact Us' form with Name, Email, Message (textarea) and Send button."
        },
        quiz: {
            question: "Which tag is best for a long message?",
            options: ["<input type='text'>", "<textarea>", "<p>", "<text>"],
            answer: 1
        }
    },

    // MODULE 8: Attributes & Advanced
    "html.8.1": {
        title: "IDs & Classes",
        explanation: `
            <h3>Targeting Elements</h3>
            <p><code>id</code>: A <strong>unique</strong> identifier for ONE element.</p>
            <p><code>class</code>: A reusable identifier for <strong>many</strong> elements.</p>
            <p>These are crucial for CSS (styling) and JS (interactivity).</p>
        `,
        example: `<h1 id="main-title">Logo</h1>
<p class="text-red">Error 1</p>
<p class="text-red">Error 2</p>`,
        exercises: {
            beginner: "Give an element a unique ID.",
            intermediate: "Create two items with the same class.",
            challenge: "Create a varied list where some items share a class and the container has an ID."
        },
        quiz: {
            question: "Can two elements share the same ID?",
            options: ["Yes", "No", "Only images", "Only divs"],
            answer: 1
        }
    },
    "html.8.2": {
        title: "Paths & Attributes",
        explanation: `
            <h3>Src vs Href</h3>
            <p>It's easy to confuse these!</p>
            <ul>
                <li><code>src</code> (Source): Embeds resources (Images, Scripts, Iframes). "Bring it here."</li>
                <li><code>href</code> (Hypertext Reference): Links to resources (Anchors, CSS). "Go there."</li>
            </ul>
        `,
        example: `<img src="pic.jpg"> <!-- Embed -->
<a href="page.html">Link</a> <!-- Link -->`,
        exercises: {
            beginner: "Write an image tag (using src).",
            intermediate: "Write a link tag (using href).",
            challenge: "Write a comment explaining the difference."
        },
        quiz: {
            question: "Which attribute does an anchor (<a>) tag use?",
            options: ["src", "source", "link", "href"],
            answer: 3
        }
    },
    "html.8.3": {
        title: "Iframes",
        explanation: `
            <h3>Websites inside Websites</h3>
            <p>The <code>&lt;iframe&gt;</code> tag allows you to embed another HTML page inside the current one.</p>
            <p>It is commonly used for embedding maps (Google Maps) or videos (YouTube).</p>
            <p>Attributes: <code>src</code>, <code>width</code>, <code>height</code>.</p>
        `,
        example: `<iframe src="https://example.com" width="400" height="300"></iframe>`,
        exercises: {
            beginner: "Create an iframe pointing to 'https://example.com'.",
            intermediate: "Set a specific width and height for your iframe.",
            challenge: "Embed a YouTube video using an iframe (use 'https://www.youtube.com/embed/...')."
        },
        quiz: {
            question: "What is an iframe used for?",
            options: ["Playing music", "Embedding another page", "Creating a frame border", "Linking pages"],
            answer: 1
        }
    },
    "html.8.4": {
        title: "Meta Tags",
        explanation: `
            <h3>Invisible Metadata</h3>
            <p>In the <code>&lt;head&gt;</code>, meta tags provide info to the browser.</p>
            <ul>
                <li><code>&lt;meta charset="UTF-8"&gt;</code>: Ensures all characters display correctly.</li>
                <li><code>&lt;link rel="icon" href="..."&gt;</code>: Sets the Favicon (tab icon).</li>
            </ul>
        `,
        example: `<head>
  <meta charset="UTF-8">
  <link rel="icon" href="favicon.ico">
</head>`,
        exercises: {
            beginner: "Write the charset meta tag.",
            intermediate: "Add a link tag for a favicon.",
            challenge: "Write a complete head section with title, charset, and favicon."
        },
        quiz: {
            question: "Which tag sets the browser tab icon?",
            options: ["<icon>", "<meta>", "<link>", "<img>"],
            answer: 2
        }
    }
};
