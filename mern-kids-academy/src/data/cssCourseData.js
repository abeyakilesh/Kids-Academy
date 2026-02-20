export const cssCourseData = {
    // MODULE 1: Foundations
    "css.1.1": {
        title: "What is CSS?",
        explanation: `
            <h3>The Skin of the Web</h3>
            <p><strong>CSS</strong> (Cascading Style Sheets) controls how HTML looks.</p>
            <p>While HTML is the <strong>Structure</strong> (Skeleton), CSS is the <strong>Presentation</strong> (Skin, Clothes, Makeup).</p>
            <p>It allows you to change colors, fonts, layouts, and spacing.</p>
        `,
        example: `/* Selects all paragraph tags */
p {
  color: red;
  font-size: 20px;
}`,
        exercises: {
            beginner: "What currently unseen tag would you use to change the background color?",
            intermediate: "Write a CSS rule to make all H1 tags blue.",
            challenge: "Explain why we separate Content (HTML) from Presentation (CSS)."
        },
        quiz: {
            question: "What does CSS stand for?",
            options: ["Creative Style Sheets", "Computer Style Systems", "Cascading Style Sheets", "Colorful Style Sheets"],
            answer: 2
        }
    },
    "css.1.2": {
        title: "Selectors",
        explanation: `
            <h3>Targeting Elements</h3>
            <p>To style something, you must first select it.</p>
            <ul>
                <li><strong>Tag Selector</strong>: <code>p { }</code> (All paragraphs)</li>
                <li><strong>Class Selector</strong>: <code>.button { }</code> (All elements with class="button")</li>
                <li><strong>ID Selector</strong>: <code>#header { }</code> (The one element with id="header")</li>
            </ul>
        `,
        example: `/* Tag */
h1 { color: blue; }

/* Class (Starts with dot) */
.highlight { background: yellow; }

/* ID (Starts with hash) */
#main { padding: 20px; }`,
        exercises: {
            beginner: "Select all 'div' tags and make them red.",
            intermediate: "Select the class 'card' and give it a black background.",
            challenge: "Select the ID 'navbar' and set its height to 50px."
        },
        quiz: {
            question: "Which symbol prefixes a Class selector?",
            options: ["# (Hash)", ". (Dot)", ": (Colon)", "@ (At)"],
            answer: 1
        }
    },
    "css.1.3": {
        title: "The Cascade",
        explanation: `
            <h3>Who Wins?</h3>
            <p>CSS stands for <strong>Cascading</strong> Style Sheets. This means rules "cascade" down, and the most specific rule wins.</p>
            <p><strong>Specificity Order (Weakest to Strongest):</strong></p>
            <ol>
                <li>Tag Selector (p)</li>
                <li>Class Selector (.text)</li>
                <li>ID Selector (#name)</li>
                <li>Inline Style (style="...")</li>
            </ol>
        `,
        example: `/* This will be ignored because ID is stronger */
p { color: red; }

/* This wins! */
#my-text { color: blue; }`,
        exercises: {
            beginner: "If a tag selector says Red and a class says Blue, what color is it?",
            intermediate: "Write a rule that would override a class selector.",
            challenge: "Explain Specificity as a point system."
        },
        quiz: {
            question: "Which selector is the most specific (strongest)?",
            options: ["Class (.box)", "Tag (div)", "ID (#box)", "Universal (*)"],
            answer: 2
        }
    },

    // MODULE 2: Colors & Backgrounds
    "css.2.1": {
        title: "Colors",
        explanation: `
            <h3>Painting the Page</h3>
            <p>You can define colors in 3 main ways:</p>
            <ul>
                <li><strong>Names</strong>: <code>red</code>, <code>blue</code>, <code>gold</code></li>
                <li><strong>Hex Codes</strong>: <code>#ff0000</code> (Red), <code>#000000</code> (Black)</li>
                <li><strong>RGB</strong>: <code>rgb(255, 0, 0)</code> (Red, Green, Blue values)</li>
            </ul>
        `,
        example: `h1 { color: tomato; }
p { color: #333333; }
div { background-color: rgb(50, 100, 200); }`,
        exercises: {
            beginner: "Set a text color using a name.",
            intermediate: "Set a background color using a Hex code.",
            challenge: "Use RGB to create a shade of purple."
        },
        quiz: {
            question: "What is the Hex code for Black?",
            options: ["#FFFFFF", "#000000", "#111111", "#BBBBBB"],
            answer: 1
        }
    },
    "css.2.2": {
        title: "Backgrounds",
        explanation: `
            <h3>Behind the Content</h3>
            <p>The <code>background</code> property does more than just color.</p>
            <ul>
                <li><code>background-image: url('pic.jpg');</code></li>
                <li><code>background-size: cover;</code> (Fills the area)</li>
                <li><code>background-repeat: no-repeat;</code> (Once)</li>
            </ul>
        `,
        example: `div {
  background-color: #f0f0f0;
  background-image: url('pattern.png');
  background-size: cover;
}`,
        exercises: {
            beginner: "Set a background color to lightgray.",
            intermediate: "Add a background image from a URL.",
            challenge: "Make a background image cover the entire div without repeating."
        },
        quiz: {
            question: "How do you stop a background image from tiling?",
            options: ["background-tile: none", "background-repeat: no-repeat", "background-stop: true", "display: single"],
            answer: 1
        }
    },
    "css.2.3": {
        title: "Gradients",
        explanation: `
            <h3>Smooth Transitions</h3>
            <p>CSS can create images using math! Gradients fade from one color to another.</p>
            <p><code>linear-gradient(direction, color1, color2)</code></p>
        `,
        example: `div {
  background: linear-gradient(to right, red, blue);
}
.sky {
  background: linear-gradient(to bottom, #87CEEB, #FFFFFF);
}`,
        exercises: {
            beginner: "Create a gradient from red to yellow.",
            intermediate: "Create a gradient that goes from top to bottom.",
            challenge: "Create a diagonal gradient with 3 colors."
        },
        quiz: {
            question: "Which function creates a color fade?",
            options: ["color-fade()", "gradient()", "linear-gradient()", "mix-colors()"],
            answer: 2
        }
    },

    // MODULE 3: Typography
    "css.3.1": {
        title: "Fonts & Families",
        explanation: `
            <h3>Choosing Typefaces</h3>
            <p><code>font-family</code> dictates the style of text.</p>
            <p>Always perform a "fallback": Start with the font you want, end with a generic category.</p>
            <ul>
                <li><code>serif</code>: With feet (Times New Roman)</li>
                <li><code>sans-serif</code>: Without feet (Arial, Roboto)</li>
                <li><code>monospace</code>: Code style (Courier)</li>
            </ul>
        `,
        example: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}`,
        exercises: {
            beginner: "Set the font to Arial.",
            intermediate: "Set the font to 'Courier New', falling back to monospace.",
            challenge: "Import a Google Font (conceptually) and apply it."
        },
        quiz: {
            question: "Which generic font family looks hand-written?",
            options: ["serif", "sans-serif", "cursive", "monospace"],
            answer: 2
        }
    },
    "css.3.2": {
        title: "Size & Weight",
        explanation: `
            <h3>Text Dimensions</h3>
            <p><code>font-size</code>: How big? (px, rem, em)</p>
            <p><code>font-weight</code>: How thick? (normal, bold, 100-900)</p>
            <p><em>Pro Tip: Use <code>rem</code> for accessible sizing!</em></p>
        `,
        example: `h1 {
  font-size: 2.5rem; /* 2.5x base size */
  font-weight: 700; /* Bold */
}`,
        exercises: {
            beginner: "Set font size to 20px.",
            intermediate: "Set font weight to bold.",
            challenge: "Use 'rem' units to size a heading."
        },
        quiz: {
            question: "What numeric value represents 'Bold'?",
            options: ["400", "500", "700", "300"],
            answer: 2
        }
    },
    "css.3.3": {
        title: "Alignment & Spacing",
        explanation: `
            <h3>Typesetting</h3>
            <ul>
                <li><code>text-align</code>: left, center, right, justify.</li>
                <li><code>line-height</code>: Spacing between lines (1.5 is good for reading).</li>
                <li><code>letter-spacing</code>: Spacing between characters.</li>
            </ul>
        `,
        example: `p {
  text-align: center;
  line-height: 1.6;
  letter-spacing: 0.5px;
}`,
        exercises: {
            beginner: "Center align a paragraph.",
            intermediate: "Increase the line height for better readability.",
            challenge: "Create a 'spaced out' title using letter-spacing."
        },
        quiz: {
            question: "Which property controls vertical space between lines?",
            options: ["word-spacing", "line-height", "margin-top", "padding-bottom"],
            answer: 1
        }
    },

    // MODULE 4: Box Model
    "css.4.1": {
        title: "Margin, Border, Padding",
        explanation: `
            <h3>The Box Model</h3>
            <p>Every element in HTML is a box. It has 4 layers (from inside out):</p>
            <ol>
                <li><strong>Content</strong>: The text/image.</li>
                <li><strong>Padding</strong>: Space <em>inside</em> the border (clears space around content).</li>
                <li><strong>Border</strong>: The line around the padding.</li>
                <li><strong>Margin</strong>: Space <em>outside</em> the border (pushes other elements away).</li>
            </ol>
        `,
        example: `div {
  padding: 20px; /* Inside space */
  border: 5px solid black; /* The Edge */
  margin: 50px; /* Outside space */
}`,
        exercises: {
            beginner: "Add 10px of padding to a div.",
            intermediate: "Add a red border to a div.",
            challenge: "Center a block element horizontally using margin: auto."
        },
        quiz: {
            question: "Which property creates space OUTSIDE the border?",
            options: ["padding", "spacing", "margin", "gutter"],
            answer: 2
        }
    },
    "css.4.2": {
        title: "Box Sizing",
        explanation: `
            <h3>The Math Trap</h3>
            <p>By default, if you set <code>width: 100px</code> and <code>padding: 20px</code>, the actual size is 140px! (100 + 20 + 20).</p>
            <p><code>box-sizing: border-box;</code> fixes this. It forces padding to reduce content size so the total stays 100px.</p>
        `,
        example: `* {
  box-sizing: border-box; /* The magic fix */
}
.box {
  width: 200px;
  padding: 20px;
  /* Actual width remains 200px */
}`,
        exercises: {
            beginner: "Set box-sizing to border-box on a div.",
            intermediate: "Apply the box-sizing fix to ALL elements (* selector).",
            challenge: "Calculate the total width of a content-box div with width 100 and padding 10."
        },
        quiz: {
            question: "Which value makes width include padding and border?",
            options: ["content-box", "border-box", "padding-box", "auto-box"],
            answer: 1
        }
    },
    "css.4.3": {
        title: "Display Properties",
        explanation: `
            <h3>Block vs Inline</h3>
            <ul>
                <li><code>block</code>: Takes full width, starts new line (div, p, h1).</li>
                <li><code>inline</code>: Takes only needed width, stays on line (span, a, b).</li>
                <li><code>inline-block</code>: Inline flow, but allows width/height setting.</li>
                <li><code>none</code>: Hides element completely (removes from document).</li>
            </ul>
        `,
        example: `span {
  display: block; /* Makes span act like a div */
}
div {
  display: none; /* Invisible */
}`,
        exercises: {
            beginner: "Hide an element.",
            intermediate: "Turn a span into a block element.",
            challenge: "Create a navigation layout using inline-block list items."
        },
        quiz: {
            question: "Which display value removes the element from the page layout entirely?",
            options: ["hidden", "invisible", "none", "opacity:0"],
            answer: 2
        }
    },

    // MODULE 5: Modern Layout
    "css.5.1": {
        title: "Flexbox Basics",
        explanation: `
            <h3>Flexible Layouts</h3>
            <p>Flexbox is a 1D layout system (Row or Column).</p>
            <p>Step 1: <code>display: flex;</code> on the <strong>Parent</strong>.</p>
            <p>Step 2: Control children with <code>justify-content</code> and <code>align-items</code>.</p>
        `,
        example: `.container {
  display: flex;
  flex-direction: row; /* Default */
}`,
        exercises: {
            beginner: "Turn a div into a flex container.",
            intermediate: "Change flex-direction to column.",
            challenge: "Explain the difference between Main Axis and Cross Axis."
        },
        quiz: {
            question: "Which property activates Flexbox?",
            options: ["position: flex", "display: flex", "layout: flex", "flex: true"],
            answer: 1
        }
    },
    "css.5.2": {
        title: "Flex Alignment",
        explanation: `
            <h3>Centering Things</h3>
            <ul>
                <li><code>justify-content</code>: Aligns along Main Axis (Row = Horizontal). Options: center, space-between, flex-end.</li>
                <li><code>align-items</code>: Aligns along Cross Axis (Row = Vertical). Options: center, stretch.</li>
            </ul>
        `,
        example: `.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}`,
        exercises: {
            beginner: "Center items horizontally.",
            intermediate: "Space items out evenly.",
            challenge: "Perfectly center a text box inside a larger box."
        },
        quiz: {
            question: "Which property pushes flex items apart to the edges?",
            options: ["text-align: justify", "justify-content: space-between", "margin: auto", "gap: auto"],
            answer: 1
        }
    },
    "css.5.3": {
        title: "CSS Grid",
        explanation: `
            <h3>2D Layouts</h3>
            <p>Grid handles both rows and columns simultaneously.</p>
            <p>Define grid tracks on the parent:</p>
            <p><code>grid-template-columns: 1fr 1fr 1fr;</code> (3 equal columns).</p>
        `,
        example: `.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr; /* Sidebar + Main */
  gap: 20px;
}`,
        exercises: {
            beginner: "Create a grid with 2 equal columns.",
            intermediate: "Create a grid with a fixed sidebar and flexible content.",
            challenge: "Create a photo gallery layout using grid."
        },
        quiz: {
            question: "What unit represents 'fraction of available space' in Grid?",
            options: ["%", "px", "fr", "rem"],
            answer: 2
        }
    },

    // MODULE 6: Responsive Design
    "css.6.1": {
        title: "Media Queries",
        explanation: `
            <h3>Adapting to Screens</h3>
            <p>Media queries allow you to apply CSS only when specific conditions are met (e.g., screen width is small).</p>
            <p><code>@media (max-width: 600px) { ... }</code></p>
        `,
        example: `body { background: white; }

/* On phones, make background dark */
@media (max-width: 600px) {
  body { background: black; color: white; }
}`,
        exercises: {
            beginner: "Write a query for screens smaller than 500px.",
            intermediate: "Change font size on mobile devices.",
            challenge: "Hide a sidebar when on mobile."
        },
        quiz: {
            question: "What is the syntax to start a media query?",
            options: ["#media", ".media", "@media", "!media"],
            answer: 2
        }
    },
    "css.6.2": {
        title: "Relative Units",
        explanation: `
            <h3>Flexible Sizing</h3>
            <p>Avoid fixed <code>px</code> for layouts. Use relative units:</p>
            <ul>
                <li><code>%</code>: Percent of parent.</li>
                <li><code>vw / vh</code>: Percent of Viewport (Screen) Width/Height.</li>
                <li><code>rem</code>: Relative to root font size.</li>
            </ul>
        `,
        example: `.hero {
  height: 100vh; /* Full screen height */
  width: 50%; /* Half parent width */
}`,
        exercises: {
            beginner: "Make a div 50% width of its parent.",
            intermediate: "Make a section take up the full screen height.",
            challenge: "Create a fluid typography scale using vw."
        },
        quiz: {
            question: "Which unit means '1% of the screen height'?",
            options: ["%", "rem", "vh", "ph"],
            answer: 2
        }
    },

    // MODULE 7: Effects
    "css.7.1": {
        title: "Positioning",
        explanation: `
            <h3>breaking the Flow</h3>
            <ul>
                <li><code>static</code>: Default.</li>
                <li><code>relative</code>: Offset from normal position.</li>
                <li><code>absolute</code>: Removed from flow, positioned relative to nearest positioned ancestor.</li>
                <li><code>fixed</code>: Stuck to the screen (Navbar).</li>
            </ul>
        `,
        example: `.sticky-nav {
  position: fixed;
  top: 0;
  width: 100%;
}`,
        exercises: {
            beginner: "Make an element fixed to the top.",
            intermediate: "Position an icon absolutely inside a relative container.",
            challenge: "Create a 'Go to Top' button fixed in the bottom right."
        },
        quiz: {
            question: "Which position stays in the same place when you scroll?",
            options: ["absolute", "relative", "fixed", "static"],
            answer: 2
        }
    },
    "css.7.2": {
        title: "Shadows & Radius",
        explanation: `
            <h3>Polish & Depth</h3>
            <p><code>border-radius</code>: Rounds corners. (50% = Circle).</p>
            <p><code>box-shadow</code>: Adds depth. (x-offset y-offset blur color).</p>
        `,
        example: `.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`,
        exercises: {
            beginner: "Round the corners of a button.",
            intermediate: "Turn a square div into a circle.",
            challenge: "Create a 'hover card' effect with a soft shadow."
        },
        quiz: {
            question: "How do you make a perfect circle from a square?",
            options: ["border-round: true", "border-radius: 50%", "circle: true", "shape: circle"],
            answer: 1
        }
    },
    "css.7.3": {
        title: "Z-Index",
        explanation: `
            <h3>Layers</h3>
            <p><code>z-index</code> controls the vertical stacking order. Higher numbers are 'closer' to you.</p>
            <p><strong>Note:</strong> Only works on elements with <code>position</code> (relative, absolute, fixed).</p>
        `,
        example: `.modal {
  z-index: 100; /* On top */
}
.background {
  z-index: 0; /* Behind */
}`,
        exercises: {
            beginner: "Make one div appear on top of another.",
            intermediate: "Fix a z-index bug where a menu is hidden.",
            challenge: "Create a stacked card deck effect."
        },
        quiz: {
            question: "If z-index is not working, what did you forget?",
            options: ["background-color", "width", "position", "display"],
            answer: 2
        }
    },

    // MODULE 8: Animations & Variables
    "css.8.1": {
        title: "Transitions",
        explanation: `
            <h3>Smooth Changes</h3>
            <p><code>transition</code> allows you to change property values smoothly (e.g., on hover).</p>
            <p>Syntax: <code>property duration timing-function</code>.</p>
        `,
        example: `.btn {
  background: blue;
  transition: background 0.3s ease;
}
.btn:hover {
  background: darkblue;
}`,
        exercises: {
            beginner: "Make a button change color slowly on hover.",
            intermediate: "Transition both background and transform (scale) properties.",
            challenge: "Create a smooth slide-out menu effect."
        },
        quiz: {
            question: "Which pseudo-class is commonly used to trigger transitions?",
            options: [":active", ":hover", ":focus", "All of the above"],
            answer: 3
        }
    },
    "css.8.2": {
        title: "Keyframes",
        explanation: `
            <h3>Complex Animation</h3>
            <p><code>@keyframes</code> define steps for an animation.</p>
            <p><code>animation</code> property applies it.</p>
        `,
        example: `@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}
.box {
  animation: slide 2s infinite;
}`,
        exercises: {
            beginner: "Create a simple fade-in animation.",
            intermediate: "Make a box spin 360 degrees.",
            challenge: "Create a bouncing ball animation."
        },
        quiz: {
            question: "Which rule defines the animation steps?",
            options: ["@animation", "@keyframe", "@keyframes", "@steps"],
            answer: 2
        }
    },
    "css.8.3": {
        title: "CSS Variables",
        explanation: `
            <h3>Custom Properties</h3>
            <p>Store values in variables to reuse them. Great for theming.</p>
            <p>Define: <code>--main-color: red;</code></p>
            <p>Use: <code>var(--main-color)</code></p>
        `,
        example: `:root {
  --brand: #ff0055;
}
h1 { color: var(--brand); }
button { background: var(--brand); }`,
        exercises: {
            beginner: "Define a variable for a color.",
            intermediate: "Use a variable for spacing (padding/margin).",
            challenge: "Create a Light/Dark mode switch concept using variables."
        },
        quiz: {
            question: "How do you access a CSS variable?",
            options: ["$name", "var(--name)", "variable(name)", "--name"],
            answer: 1
        }
    }
};
