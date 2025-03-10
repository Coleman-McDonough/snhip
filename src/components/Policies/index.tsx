import React from "react";

export const PrivacyPolicy = () => {
  return (
    <div className="mx-auto mt-48 max-w-3xl  p-6 text-black">
      <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>
      <p>Effective Date: 3/10/2025</p>
      <p>
        {`This Privacy Policy describes how Southern New Hampshire Industrial Park
        ("we," "our," or "us") collects, uses, and protects the personal
        information of users who make payments through our website.`}
      </p>
      <h2 className="mt-4 text-xl font-semibold">1. Information We Collect</h2>
      <ul className="list-disc pl-5">
        <li>Name</li>
        <li>Contact information (email, phone number, billing address)</li>
        <li>
          Payment details (credit card information, bank details, transaction
          history)
        </li>
      </ul>
      <h2 className="mt-4 text-xl font-semibold">
        2. How We Use Your Information
      </h2>
      <p>We use the collected information to:</p>
      <ul className="list-disc pl-5">
        <li>Process payments for products and services</li>
        <li>Verify transactions and prevent fraud</li>
        <li>Provide customer support</li>
        <li>Comply with legal obligations</li>
      </ul>
      <h2 className="mt-4 text-xl font-semibold">3. Sharing of Information</h2>
      <p>
        We do not sell or rent your personal information. However, we may share
        it with:
      </p>
      <ul className="list-disc pl-5">
        <li>QuickBooks (Intuit) and other payment processors</li>
        <li>Law enforcement if required by law</li>
        <li>Service providers assisting in business operations</li>
      </ul>
      <h2 className="mt-4 text-xl font-semibold">4. Contact Information</h2>
      <p>
        Southern New Hampshire Industrial Park <br />
        PO Box 532, Plaistow, NH 03865 <br />
        Email: colemanpmcdonough@gmail.com <br />
        Phone: 603-399-5029
      </p>
    </div>
  );
};

export const EULA = () => {
  return (
    <div className="mx-auto mt-48 max-w-3xl p-6 text-black">
      <h1 className="mb-4 text-2xl font-bold">
        End User License Agreement (EULA)
      </h1>
      <p>Effective Date: 3/10/2025</p>
      <p>
        {`This End User License Agreement ("Agreement") is a legal agreement between you ("User")
        and Southern New Hampshire Industrial Park ("Company") for the use of our online payment
        system.`}
      </p>
      <h2 className="mt-4 text-xl font-semibold">
        1. Use of the Payment System
      </h2>
      <p>
        Users may make payments for material purchases and rental units through
        our website. By submitting payment, you represent that the information
        provided is accurate.
      </p>
      <h2 className="mt-4 text-xl font-semibold">2. Payment Processing</h2>
      <p>
        All payments are processed through QuickBooks (Intuit) or another secure
        payment processor.
      </p>
      <h2 className="mt-4 text-xl font-semibold">
        3. Refund and Dispute Policy
      </h2>
      <ul className="list-disc pl-5">
        <li>
          Payments for delivered materials are final unless otherwise stated.
        </li>
        <li>
          Rental payments are subject to the terms of the rental agreement.
        </li>
        <li>Disputes must be reported within 7 days.</li>
      </ul>
      <h2 className="mt-4 text-xl font-semibold">4. Contact Information</h2>
      <p>
        Southern New Hampshire Industrial Park <br />
        PO Box 532, Plaistow, NH 03865 <br />
        Email: colemanpmcdonough@gmail.com <br />
        Phone: 603-399-5029
      </p>
    </div>
  );
};
