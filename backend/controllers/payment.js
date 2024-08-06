import Razorpay from "razorpay";
import crypto from "crypto";
import Course from "../models/course.js";

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID,
  key_secret: RAZORPAY_KEY_SECRET,
});

export const create_order = async (req, res) => {
  const { amount, currency, receipt, courseId } = req.body;

  try {
    const options = {
      amount: amount * 100,
      currency,
      receipt,
      payment_capture: "1",
    };

    const order = await razorpay.orders.create(options);
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const verify_payment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    courseId,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      const course = await Course.findById(courseId);
      if (course) {
        course.payments = course.payments || [];
        course.payments.push(razorpay_payment_id);
        await course.save();
      }

      res.send({ success: true, message: "Payment verified successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.send({ success: false, message: "Payment verification failed" });
  }
};
