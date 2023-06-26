Solution Overview:

To accomplish the given task, we will build a web application using Next.js, React.js, and Firebase as the backend. The application will have the following flow:

1.User Login:

We will enable login with Gmail using Firebase Authentication.
Users will be able to log in using their Gmail accounts, which will provide authentication credentials for further API calls and data storage.

2.Fetching Data from OpenAI API:

After the user is logged in, we will make a call to the OpenAI API using the appropriate API endpoint and parameters.
We will handle the authentication by including the necessary headers or credentials with the API request.
The response data from the API will be received asynchronously and displayed on the screen.

3.Displaying Data:

We will create a React component to render the fetched data on the screen.
The component will receive the data as props and display it in a suitable format, such as a table or a list.

4.Saving Data to Firebase:

We will add a button to save the fetched data to a Firebase database.
On button click, we will trigger a function that will use the Firebase SDK to store the data in a designated Firebase table (collection).
We will handle the authentication by ensuring that the user is logged in before allowing the data to be saved.

5.Showing Saved Data:

To show the saved data, we will retrieve it from the Firebase table and display it on the screen.
We will fetch the data using the Firebase SDK and render it in a React component similar to how the fetched data was displayed.

6.Assumptions:

1.You have a Firebase project set up with the necessary authentication configuration.
2.You have obtained the appropriate API key or access token for making requests to the OpenAI API.
3.The specific data to be fetched from the OpenAI API and the structure of the Firebase table are not defined, so 4.we will make those design decisions based on the requirements.
5.Basic knowledge of Next.js, React.js, and Firebase is assumed.
6.To get started with the implementation, you can follow these steps:
