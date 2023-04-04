# App Start

Clone this skeleton GDS style application to get started. The project includes all the great foundational features to be found in https://github.com/uktrade/tamato/, including:

GDS styling setup.
GDS Crispy forms.
Nunjucks integration with a transformer to Jinja2 templating.
Webpack build integration.


## Create a Python virtual environment.

    python3.10 -m venv --prompt=service_dash venv
    . venv/bin/activate
    pip install -r requirements.txt


## Create a .env file (copy from example.env)

    cp example.env .env


## Run Migrations

    python manage.py migrate


## Create a superuser

    python manage.py createsuperuser


## Build the fontend

    npm run build

Or to watch and automatically build when files are changed:

    npm run dev


## Run the server

    python manage.py runserver


## Developing this project

After pip installing the project's requirements, install pre-commit's git hooks:

    pre-commit install
