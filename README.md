Sentiment Analysis Web App

This is a web application that allows users to input a text and get a prediction of whether the text is positive, negative, or neutral. The app is built using Flask as the backend and React as the frontend.

Installation
To install and run the app, follow these steps:

1. Clone the repository:
    git clone https://github.com/your-username/sentiment-analysis-web-app.git
2. cd back-end
3. Install the dependencies for the backend by running the following command:
    pip install -r requirements.txt
4. Install the dependencies for the frontend by running the following command in a separate terminal window:
    cd front-end
5. npm install
6. Start the backend by running the following command:
    flask --app app run
7. Start the frontend by running the following command in a separate terminal window:
    npm start
Open your web browser and go to http://localhost:3000/ to use the app.

Usage
To use the app, simply enter a text in the input area and click the "Predict" button. The app will make a prediction on whether the text is positive, negative, or neutral, and display the predicted sentiment and confidence score.

Configuration
To configure the frontend to point to correct backend URL and port, edit the config.py file in the front-end/src directory. 

Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome bug fixes, feature requests, and other contributions.

License
This project is licensed under the MIT License. See the LICENSE file for details.