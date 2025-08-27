1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   Answer: getElementById returns the element with the specified ID, getElementsByClassName returns a collection of elements with the specified class name, and querySelector returns the first element or a collection of elements that match the specified CSS selector, and querySelectorAll returns a collection of all elements that match the specified CSS selector.

2. How do you **create and insert a new element into the DOM**?

   Answer: Create a new element using the createElement() method and then insert it into the DOM using the appendChild() method.

3. What is **Event Bubbling** and how does it work?

   Answer: Event bubbling is a way that events are propagated through the DOM tree. When an event occurs on an element, it first triggers the event on that element, then on its parent element, and so on up the tree until it reaches the document root. This allows for the event to be handled by multiple elements at once.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Answer: Event delegation is a technique where events are handled by a parent element instead of individual child elements. This is useful because it allows for the event to be handled by a single element, even if the child elements are dynamically added to the DOM. This can improve performance and reduce the amount of code needed to handle events.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   Answer: preventDefault() method prevents the default action of an event from occurring, while stopPropagation() method stops the event from propagating through the DOM tree.
