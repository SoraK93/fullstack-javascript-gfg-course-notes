# Callback Functions
A function that is passed as an argument to another function and is invoked or called by that function at a certain point in time.  
The main purpose of a callback function is to allow asynchronous processing or non-blocking behavior.  
Commonly used in event handling, such as when responding to use actions or performing operations that require significant time to complete.

> ![NOTE]  
> These types of function that can take other functions as argument are called higher-order functions.  
> Async programming is not possible without the concept of Callback Functions.

```
function outer(wrapper){
    console.log("Outer function is called");
    wrapper();
}
function callback(){
    console.log("function b is called");
}
outer(callback);
```

# Async Programming
It allows code to run asynchronously or non-blocking. It means while waiting for a code to execute, other code also run concurrently.

## How Asynchronous JavaScript works?
It is single-threaded meaning a single thread to execute instructions. By synchronous, it means that the js engine executes code line by line.  
JS engine only has a single call stack to execute code, and the ability of js to execute async tasks is provided by the browser where the JS engine executes JS code.

**Browser provides the ability to execute**:
- setTimeout() and setInterval()
- DOM-related methods
- console methods

## Event Loop
Event loop works by continuously processing a queue of events and executing any associated callbacks or functions. It is a mechanism that enables asynchronous programming.

## Callback Queue
When an asynchronous operation is performed, such as a timer set by setTimeout() or an HTTP request made by fetch(), the associated callback function is added to the callback queue.  
The event loop constantly monitors the callback queue and executes the callbacks in the order in which they were added, one at a time.  
> Callback queue is also known as task queue and we also have a queue named microTask queue. 
Promised-based callbacks are registered inside the microtask queue and have the highest priority and other type of callbacks are pushed to the task queue which has less priority.

# Callback hell
When code becomes desely nested and challenging to read due to the overuse of callbacks is referred to as *"callback hell"*.  
We call an API and depending upon the response we are calling another API and depending upon the result of previous API we are calling another API.  
**So this creates two problems**: -  
1. **Pyramid of Doom**: Our code is expanding in the horizontal direction instead of the vertical direction, this is considered bad practice and should be avoided. It makes the code difficult to read and debug.
2. **Inversion of Control**: The actual control of the callback function is given to the function it is passed as an argument and if that function is not called upon i.e. it remains in a ideal state our callback function will never be executed.
> ![NOTE]  
> In order to resolve these issues we use promises and the async-await style of async programming.