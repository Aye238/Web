import sys
import joblib
import json
import numpy as np
import pandas as pd

model = joblib.load("loan_model.pkl")
scaler = joblib.load("scaler.pkl")

columns = ['ApplicantIncome', 'LoanAmount', 'Loan_Amount_Term', 'Credit_History',
           'Gender', 'Married', 'Education', 'Self_Employed']

try:
    input_data = list(map(float, sys.argv[1:]))
    if len(input_data) != 8:
        raise ValueError("Expected 8 input features")
except:
    print(json.dumps({"error": "Invalid input format"}))
    sys.exit(1)

df_input = pd.DataFrame([input_data], columns=columns)

scaled_input = scaler.transform(df_input)

risk_score = model.predict_proba(scaled_input)[0][1]

if risk_score <= 0.3:
    label = "Low Risk"
elif risk_score <= 0.6:
    label = "Medium Risk"
else:
    label = "High Risk"

result = {
    "score": round(risk_score, 2),
    "label": label
}
print(json.dumps(result))
