# 💸 Loan Risk AI Module

A machine learning–powered module that predicts whether a loan applicant is **High Risk** or **Low Risk**, based on financial and demographic inputs. Useful for automating decision-making in loan approval systems.

---

## 🧠 Model Overview

* **Algorithm:** Logistic Regression
* **Accuracy:** \~79.5% on test data
* **Dataset:** Real-world loan application data (Kaggle)
* **Preprocessing:** `StandardScaler` normalization

---

## 📁 Project Structure

| File               | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| `train_model.py`   | Trains the logistic regression model and saves it as `loan_model.pkl`  |
| `predict.py`       | Loads saved model and scaler, takes user input, and returns prediction |
| `loan_dataset.csv` | Training dataset used to train model                                   |
| `loan_model.pkl`   | Trained ML model (saved using `joblib`)                                |
| `scaler.pkl`       | Fitted scaler used during training                                     |
| `requirements.txt` | Python dependencies list                                               |

---

## ⚙️ Installation

1. **Clone the repo** and move into the project folder:

   ```bash
   git clone https://github.com/Aye238/Web.git
   cd loan-risk-ai-module/
   ```

2. *(Optional)* Create and activate a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

   If `requirements.txt` is missing:

   ```bash
   pip install pandas scikit-learn joblib
   ```

---

## 🏗️ Train the Model

To train from scratch:

```bash
python3 train_model.py
```

This will:

* Train a Logistic Regression model
* Save the model to `loan_model.pkl`
* Save the StandardScaler as `scaler.pkl`

---

## 🔍 Predict Loan Risk (Manual CLI)

Use `predict.py` with the following 8 input arguments:

```bash
python3 predict.py <applicant_income> <coapplicant_income> <loan_amount> <credit_history> <gender> <married> <self_employed> <property_area>
```

### ✅ Example

```bash
python3 predict.py 5000 120 360 1 1 1 0 0
```

### ✅ Output

```json
{"score": 0.86, "label": "High Risk"}
```

---

## 🧮 Input Feature Reference

| Feature              | Type    | Expected Value(s)                   |
| -------------------- | ------- | ----------------------------------- |
| `applicant_income`   | Integer | e.g. 5000                           |
| `coapplicant_income` | Integer | e.g. 120                            |
| `loan_amount`        | Integer | In thousands (e.g. 360 = 360,000)   |
| `credit_history`     | Binary  | `1` = Yes, `0` = No                 |
| `gender`             | Binary  | `1` = Male, `0` = Female            |
| `married`            | Binary  | `1` = Married, `0` = Single         |
| `self_employed`      | Binary  | `1` = Yes, `0` = No                 |
| `property_area`      | Binary  | `1` = Urban/Semi-Urban, `0` = Rural |

---

## 🧪 Test Samples

```bash
python3 predict.py 3000 180 360 0 0 0 1 1
# → {"score": 0.02, "label": "Low Risk"}

python3 predict.py 9500 80 360 1 1 1 0 0
# → {"score": 0.89, "label": "High Risk"}
```

---

## 🔗 Integration Ideas

This module can be integrated into any backend (e.g., Node.js) by:

* Using `subprocess` or `child_process` to run `predict.py` from the server
* Rewriting the logic inside a Python API
* Returning JSON prediction to your frontend form submission