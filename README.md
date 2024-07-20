# issues-tracker

A modern, full stack, search engine friendly issue tracker built with Next.js, typescript and a whole other list of plugins and programs.

Next.js is a framework for building fast & search-engine friendly applications.

## How it works:

Node.js runtime will execute javascript code in the back-end. The front-end code gets bundled and sent for execution on the web browser.

This node.js runtime allows the react components to render on the server, and send its content to the web-browser. This is known as <b>server-side rendering</b>. This makes our applications faster and search engine friendly.

### Additional Notes

Back when using react with react-router and axios to fetch data, the client will have a brief period where it is blank before the data gets populated from the server. This is due to the client first receiving the components to render, and then make another request to fetch the api request data from the server to render to the client.

This problem is solved with Nextjs due to the server making the request first, getting the data, bundling the data and then send to the client.
