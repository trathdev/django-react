Create a database in postgresql and update the relevant config in backend/backend/settings.py

Install backend dependencies in /backend with
````
pip install requirements.txt
````

Install frontend dependencies in /frontend with
````
npm install
````

Run migrations and create a superuser
````
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
````

Add an entry to the db
Go to http://localhost:8000/admin/
Log in using the superuser credentials you created earlier.
Find and click on "Messages" under the app name (myapp). This will take you to the list of messages.
Click the "Add Message" button and add a message
Click Save

To run the frontend in /frontend
````
npm run start
````

To run the backend in /backend
````
python manage.py runserver
````

You should now see the message you added