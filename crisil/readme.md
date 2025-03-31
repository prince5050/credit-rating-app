`Testing API Endpoints`

1.Create Mortgage :

curl -X POST http://127.0.0.1:8000/api/mortgages/ \
     -H "Content-Type: application/json" \
     -d '{
         "credit_score": 750,
         "loan_amount": 100000,
         "property_value": 150000,
         "annual_income": 70000,
         "debt_amount": 20000,
         "loan_type": "fixed",
         "property_type": "single_family"
     }'

2. Retrieve All Mortgages

curl -X GET http://127.0.0.1:8000/api/mortgages/

3. Retrieve Single Mortgage

curl -X GET http://127.0.0.1:8000/api/mortgages/<id:int>/

4. Update Mortgage

curl -X PUT http://127.0.0.1:8000/api/mortgages/<id:int>/
     -H "Content-Type: application/json" \
     -d '{
         "credit_score": 760,
         "loan_amount": 120000,
         "property_value": 180000,
         "annual_income": 80000,
         "debt_amount": 25000,
         "loan_type": "adjustable",
         "property_type": "condo"
     }'

5. Delete Mortgage :

curl -X DELETE http://127.0.0.1:8000/api/mortgages/<id:int>


