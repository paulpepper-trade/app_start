
# Create a Python virtual environment.

    python3.10 -m venv --prompt=service_dash venv
    . venv/bin/activate
    pip install -r requirements.txt


# Create a .env file (copy from example.env)

    cp example.env .env


# Run Migrations

    python manage.py migrate


# Create a superuser

    python manage.py createsuperuser


# Run the Server

python manage.py runserver
