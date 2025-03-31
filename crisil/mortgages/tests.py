from django.test import TestCase
from .models import Mortgage


# Create your tests here.

class MortgageTestCase(TestCase):
    def test_credit_rating_calculation(self):
        mortgage = Mortgage.objects.create(
            credit_score=720, loan_amount=150000, property_value=200000,
            annual_income=60000, debt_amount=20000, loan_type="fixed",
            property_type="single_family"
        )
        self.assertEqual(mortgage.determine_credit_rating(), "AAA")
