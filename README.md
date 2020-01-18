# WC-Tic-Tac-Toe

This is an adoptation of the tutorial: [Intro to React](https://reactjs.org/tutorial/tutorial.html#overview), put up by the React team to show how it works. However, here we are instead using the web platform itself to accomplish everything the React tutorial presents as a reason to use React: passing data down, lifting state up, time travel, etc. 

From the tutorial itself:

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

And from developer.mozilla.org:

> Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

By their very nature, web components are composable. And they offer true encapsulation through the shadow DOM. You can make component properties observable so that when their values change, the component updates automatically. Since the browser is responsible for the update, this will happen far faster than any JavaScript library can do.

Because web components are based on standards supports by all currently shipping browsers, you can be sure any web components you create will work as expect indefinitely. You do not have to worry about features being deprecated and labeled "unsafe" or "dangerous" like libraries often do. In fact, because web components are part of the browser, you can use them with any other frontend library.


This project illustrates another advantage of web components: no need to build. Everything runs live in the browser. This is accomplished through ES modules.

To ease the definition of web components, I've used [Lit-Element](https://lit-element.polymer-project.org) from the Polymer Project. Lit-Element is a tiny library that provides convenience methods to simplify the definition of custom elements. 

If you're new to web components and would like to know how to get started creating and using them, a good place to go is [Open-WC](https://open-wc.org). They provide a number of useful guides for setup, development, testing and publishing. 
