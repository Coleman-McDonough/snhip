"use client";
import React, { useState } from "react";
import HCaptcha from "react-hcaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    material_type: "",
    material_amount: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Form submission status
  const [errorMessage, setErrorMessage] = useState(""); // Error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setErrorMessage("");
    setSuccessMessage("");

    // Check if hCaptcha is completed
    if (!captchaToken) {
      setStatus("");
      setErrorMessage("Please complete the CAPTCHA.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("");
        setSuccessMessage(
          "Your message has been sent successfully! We'll get back to you ASAP.",
        );
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          material_type: "",
          material_amount: "",
          message: "",
        });
      } else {
        setStatus("");
        setErrorMessage(
          result.details || "An error occurred while sending the email.",
        );
      }
    } catch (error) {
      setStatus("");
      setErrorMessage(error.message || "An unknown error occurred.");
    }
  };

  return (
    <section id="contact" className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <div
              className="dark:bg-gray-dark rounded-lg bg-white p-8 text-black shadow-md"
              data-wow-delay=".15s"
            >
              <h2 className="dark:text-white mb-6 text-center text-2xl font-bold text-primary sm:text-3xl">
                Fill out this form and we will get back to you!
              </h2>
              <p className="mb-8 text-center text-base font-medium text-body-color">
                Please, send us your: name, email, phone number, and how we can
                help you. A member of our team will reach back out to you ASAP!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="dark:text-white mb-2 block text-sm font-medium text-dark"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="dark:bg-[#2C303B] dark:border-transparent dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="dark:text-white mb-2 block text-sm font-medium text-dark"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="dark:bg-[#2C303B] dark:border-transparent dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="dark:text-white mb-2 block text-sm font-medium text-dark"
                    >
                      Your Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="dark:bg-[#2C303B] dark:border-transparent dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="dark:text-white mb-2 block text-sm font-medium text-dark"
                  >
                    Additional Details/Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please enter any additional details or questions you may have"
                    className="dark:bg-[#2C303B] dark:border-transparent dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-black outline-none focus:border-primary"
                  ></textarea>
                </div>

                {/* hCaptcha Field */}
                <div className="mt-6 flex justify-center">
                  <HCaptcha
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                    onVerify={(token) => setCaptchaToken(token)}
                  />
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="dark:shadow-submit-dark w-full rounded-lg bg-primary px-6 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
                    disabled={status === "Sending..."}
                  >
                    {status === "Sending..." ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>

              {status && (
                <p className="mt-4 text-center text-sm font-medium">{status}</p>
              )}
              {successMessage && (
                <p className="mt-4 text-center text-sm font-medium text-green-600">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="mt-2 text-center text-sm font-medium text-red-600">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
