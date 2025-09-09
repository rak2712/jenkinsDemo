from flask import Flask, render_template, request, jsonify
import razorpay
import hmac
import hashlib

app = Flask(__name__)

razorpay_client = razorpay.Client(auth=("YOUR_KEY_ID", "YOUR_KEY_SECRET"))

@app.route('/create_order', methods=['POST'])
def create_order():
    data = request.get_json()
    amount = data['amount']  # in paise
    order = razorpay_client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": 1
    })
    return jsonify(order)

@app.route('/verify_payment', methods=['POST'])
def verify_payment():
    data = request.get_json()
    generated_signature = hmac.new(
        b"YOUR_KEY_SECRET",
        f"{data['razorpay_order_id']}|{data['razorpay_payment_id']}".encode(),
        hashlib.sha256
    ).hexdigest()

    if generated_signature == data['razorpay_signature']:
        return jsonify({"status": "success"})
    else:
        return jsonify({"status": "failed"}), 400

if __name__ == '__main__':
    app.run(debug=True)
