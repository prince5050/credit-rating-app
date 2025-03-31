from django.db import models


class Mortgage(models.Model):
    CREDIT_SCORE_CHOICES = [(i, i) for i in range(300, 851)]

    credit_score = models.IntegerField(choices=CREDIT_SCORE_CHOICES)
    loan_amount = models.FloatField()
    property_value = models.FloatField()
    annual_income = models.FloatField()
    debt_amount = models.FloatField()
    loan_type = models.CharField(max_length=10, choices=[("fixed", "Fixed"), ("adjustable", "Adjustable")])
    property_type = models.CharField(max_length=20, choices=[("single_family", "Single Family"), ("condo", "Condo")])
    created_at = models.DateTimeField(auto_now_add=True)

    def calculate_risk_score(self):
        """Calculate risk score based on business logic"""
        risk_score = 0

        # Loan-to-Value (LTV) Ratio
        ltv = self.loan_amount / self.property_value
        if ltv > 0.9:
            risk_score += 2
        elif ltv > 0.8:
            risk_score += 1

        # Debt-to-Income (DTI) Ratio
        dti = self.debt_amount / self.annual_income
        if dti > 0.5:
            risk_score += 2
        elif dti > 0.4:
            risk_score += 1

        # Credit Score
        if self.credit_score >= 700:
            risk_score -= 1
        elif self.credit_score < 650:
            risk_score += 1

        # Loan Type
        if self.loan_type == "adjustable":
            risk_score += 1
        else:
            risk_score -= 1

        # Property Type
        if self.property_type == "condo":
            risk_score += 1

        return risk_score

    def determine_credit_rating(self):
        """Determine credit rating based on risk score"""
        risk_score = self.calculate_risk_score()
        if risk_score <= 2:
            return "AAA"
        elif risk_score <= 5:
            return "BBB"
        else:
            return "C"

    def __str__(self):
        return f"Mortgage {self.id} - Rating: {self.determine_credit_rating()}"