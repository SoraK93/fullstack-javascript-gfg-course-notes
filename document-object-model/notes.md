# What is Document Object Model (DOM)?
DOM enables our javascript files to read/ update HTML files (structure, content, style).

HTML file is represented in a *tree-like format* where each element of the HTML represents a tree node. This representation allow programming language like JavaScript to interact in a structured way.

## Creation of DOM and Webpage Rendering
> HTML Loading --> HTML Parsing --> DOM Tree Creation

**HTML Loading and HTML Parsing**: Browser loads HTML and parse the file based on HTML formatting, creating the DOM  
**CSS Loading and CSS Parsing**: Browser loads and parses CSS file, creating a CSS Object Model (CSSOM)  
**Rendering Tree Creation**: DOM and CSSOM are combined at this stage, representing all the content and style
**Layout and Painting**: Rendered tree is now used to calculate and determine the layout, position and size of the element. Finally painting the element on to the webpage.

## Structure of DOM
DOM starts from \<HTML> element as its root, which branches out to its child.  
---> \<head>, \<body>, and ...  
These nodes will then further create more branches and leaf nodes, forming a [tree structure](https://media.geeksforgeeks.org/wp-content/uploads/20221107113914/DOM.jpg).

## Properties of DOM
- **Window Object**: Its a object that is automatically created by the browser, it stay at the top of the hierarchy, and it can access all the properties and methods of the browser.
- **Document Object** - When HTML document is loaded, it creates a document object inside window object. The document object has various properties which refers to other object allowing access to modification and accessing of document.
- **Form Object** - represent form tag
- **Link Object** - represent link tag
- **Anchor Object** - represent anchor tag

## Methods for manipulating DOM
Some of the methods used for manipulating DOM using various methods:
- **Searching for Elements**: Methods like `document.getElementById()`, `document.getElementByClassName()` and `document.querySelector()` enables element selection  
- **Modifying Elements**: Using `innerHTML`, `setAttribute()`, `style` helps modifying selected element.
- **Event Handling**: Adding event listeners to DOM helps with user interaction.

## Event Listener
The event listener basically waits for a specific event to occur.  
The `addEventListener()` is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired.

## Event Bubbling
It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captired and handled by the innermost element and then propagated to outer elements.

**Syntax**:
```
element.addEventListener(event, listener, useCapture);
```  
**Parameters**:  
- **event**: using keywords like "click", "input", "focus", "keyup", "keydown" and more, to listen for specific events.
- **listener(handler function)**: When the above event happens this function will trigger .
- **useCapture**: Controls event propagation, where "true" denotes capturing-phase and "false" denotes bubbling-phase.

## Event Delegation

