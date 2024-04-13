# Vue.js Fetch API using CDN

This project demonstrates how to use Vue.js with the fetch API using the Content Delivery Network (CDN). Vue.js is a progressive JavaScript framework for building user interfaces, and the fetch API provides an interface for fetching resources asynchronously across the network.

## Prerequisites

Before you begin, ensure you have the following installed/setup:

- A modern web browser
- An internet connection (for fetching Vue.js and other dependencies via CDN)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:** 
    ```
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**
    ```
    cd <project-directory>
    ```

3. **Open `index.html` in your favorite code editor.**

4. **Start a local development server:** 
    - You can use tools like `Live Server` in Visual Studio Code or simply open `index.html` in your browser.

5. **Explore the Code:**
    - Check out `index.html` to see how Vue.js and the fetch API are integrated.
    - Explore `app.js` to understand how data is fetched and rendered using Vue.js.

6. **Make Changes:**
    - Feel free to modify the code to suit your needs.
    - Experiment with different API endpoints or data structures.

## Usage

This project provides a simple example of using Vue.js with the fetch API. You can use this as a template for building more complex applications that involve fetching and displaying data from external APIs.

## Installation via CDN

You can include Vue.js and its dependencies directly into your HTML file using Content Delivery Networks (CDNs). Here's how you can do it:

1. **Add Vue.js Script Tag:**

    Add the following script tag inside the `<head>` section of your HTML file to include Vue.js. Make sure to replace `@3` with the desired version (e.g., `@2` for Vue.js version 2):

    ```html
    <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
    ```

    This line fetches Vue.js from the [jsDelivr CDN](https://www.jsdelivr.com/). Replace `@3` with the desired version (e.g., `@2` for Vue.js version 2).

2. **Add Fetch Polyfill (Optional):**

    If you need to support older browsers that do not have native support for the fetch API, you can include a fetch polyfill. The polyfill provides support for making fetch requests in these browsers. Add the following script tag below the Vue.js script tag:

    ```html
    <script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3"></script>
    ```

    This line fetches the `whatwg-fetch` polyfill from jsDelivr.

3. **Include Your Custom Scripts:**

    After including Vue.js and any necessary polyfills, you can include your custom scripts. For example:

    ```html
    <script src="app.js"></script>
    ```

    Make sure to adjust the `src` attribute according to the path of your script file.

By including these script tags in your HTML file, you can start using Vue.js and the fetch API in your project without the need for additional package managers or build tools.


## Resources

- [Vue.js Documentation](https://vuejs.org/v2/guide/)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or find any issues, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENCE.md).

___
