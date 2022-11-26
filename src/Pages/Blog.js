import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <h2 className="text-3xl font-bold text-gray-500">Our Popular Blogs:</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-5">
                <div className="card card-compact w-96 bg-base-100 shadow-xl pt-5">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main types of state you need to properly manage in your React apps: these are Local state, Global state, Server state, URL state. Local (UI) state – Local state is data we manage in one or another component, Global (UI) state – Global state is data we manage across multiple components, Server state – Data that comes from an external server that must be integrated with our UI state, URL state – Data that exists on our URLs, including the pathname and query parameters.</p>                       
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl pt-5">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl pt-5">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                        <p>unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                        <p>For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl pt-5">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <p>The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                        <p>AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write.</p>
                        <p>
                            Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Blog;