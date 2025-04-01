`RMBS Credit Rating System`
This project is a Full-Stack application that calculates the credit rating of Residential Mortgage-Backed Securities (RMBS) based on various mortgage attributes such as credit score, loan amount, property value, debt-to-income ratio, and more. 
It includes a frontend for mortgage data input, a backend for rating calculation, and a Postgresql database for data storage.

Project Overview
As a credit rating agency that assesses the creditworthiness of residential mortgage-backed securities (RMBS), this system helps calculate the credit rating based on business rules that evaluate the risks of each mortgage. The frontend allows users to input mortgage data, the backend calculates the credit rating, and the database stores the data.

Technology Stack
Frontend: Angular 17 (with Reactive Forms, HTTP Client)

Backend: Django with Python

Database: PostgreSQL (via Django ORM)

Frontend Setup
Clone the repository:

git clone (https://github.com/prince5050/credit-rating-app.git)
cd credit_rating/frontend

Install the dependencies:
npm install

Run the Angular development server:
ng serve

The frontend should now be accessible at http://localhost:4200/.


Backend Setup :

Set up a Python virtual environment (optional but recommended):

python3 -m venv venv
source venv/bin/activate # On Windows use `venv\Scripts\activate`

Install the backend dependencies:
pip install -r requirements.txt


Apply database migrations (if using Django ORM):

python manage.py migrate


Run the backend server:
python manage.py runserver
The backend should now be accessible at http://localhost:8000/.


