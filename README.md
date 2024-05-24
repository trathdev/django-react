Create a database in postgresql and update the relevant config in backend/backend/settings.py

Install backend dependencies in /backend with
````
pip install requirements.txt
````

Install frontend dependencies in /frontend with
````
npm install
````

Run migrations and create a superuser in /backend
````
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
````

Add an entry to the db <br/>
Go to http://localhost:8000/admin/ <br/>
Log in using the superuser credentials you created earlier. <br/>
Find and click on "Messages" under the app name (myapp). This will take you to the list of messages. <br/>
Click the "Add Message" button and add a message <br/>
Click Save <br/>

To run the frontend in /frontend
````
npm run start
````

To run the backend in /backend
````
python manage.py runserver
````

You should now see the message you added