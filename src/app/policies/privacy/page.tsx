import { Metadata } from 'next'
import { PolicyLayout } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Salient AI-powered accounting software.',
}

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="lead">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <h2>Introduction</h2>
      <p>
        Himalayas X LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered accounting software and related services (collectively, the "Service").
      </p>
      <p>
        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information that you provide directly to us, information we obtain automatically when you use the Service, and information from third-party sources, as described below. This information is essential for providing our AI-powered accounting services and ensuring the accuracy and reliability of our platform.
      </p>

      <h3>Information You Provide to Us</h3>
      <ul>
        <li>Account Information: When you register for an account, we collect your name, email address, password, business information, and other information necessary to create and maintain your account.</li>
        <li>Financial Information: To provide our accounting services, we collect financial data including transaction details, receipts, invoices, bank account information, and other accounting-related information.</li>
        <li>Communications: When you communicate with us, we collect information you provide in your communications, including support requests and feedback.</li>
      </ul>

      <h3>Information We Collect Automatically</h3>
      <ul>
        <li>Usage Information: We collect information about your interactions with the Service, such as the features you use, the actions you take, and the time, frequency, and duration of your activities.</li>
        <li>Device Information: We collect information about the device you use to access the Service, including hardware model, operating system, unique device identifiers, and mobile network information.</li>
        <li>Log Information: Our servers automatically record information when you use the Service, including your IP address, browser type, referring/exit pages, and timestamps.</li>
        <li>Cookies and Similar Technologies: We use cookies and similar technologies to collect information about your browsing behavior and preferences.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>Providing, maintaining, and improving the Service</li>
        <li>Processing and completing transactions</li>
        <li>Training and improving our AI algorithms to enhance the accuracy of receipt scanning, transaction categorization, and financial insights</li>
        <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
        <li>Responding to your comments, questions, and requests</li>
        <li>Monitoring and analyzing trends, usage, and activities in connection with the Service</li>
        <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
        <li>Personalizing and improving the Service and providing content or features that match user profiles or interests</li>
        <li>Facilitating contests, sweepstakes, and promotions and processing and delivering entries and rewards</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>
        We may share your information in the following circumstances:
      </p>
      <ul>
        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
        <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of us or others</li>
        <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
        <li>Between and among our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership</li>
        <li>With your consent or at your direction</li>
      </ul>
      <p>
        We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect the security of your personal data, including encryption, access controls, regular security assessments, and employee training on data protection. We follow industry best practices for securing financial data. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
      </p>

      <h2>Data Retention</h2>
      <p>
        We will retain your personal data only for as long as is necessary for the purposes set out in this privacy policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable tax/revenue laws), resolve disputes, and enforce our legal agreements and policies. For financial data, we typically retain information for at least seven years to comply with accounting and tax regulations.
      </p>

      <h2>Your Data Protection Rights</h2>
      <p>
        Depending on your location, you may have the following data protection rights:
      </p>
      <ul>
        <li>The right to access, update, or delete the information we have on you</li>
        <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
        <li>The right to object to our processing of your personal data</li>
        <li>The right of restriction - the right to request that we restrict the processing of your personal data</li>
        <li>The right to data portability - the right to receive a copy of your personal data in a structured, machine-readable format</li>
        <li>The right to withdraw consent at any time where we relied on your consent to process your personal data</li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at privacy@himalayasx.com.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our Service is not directed to children under the age of 18, and we do not knowingly collect personal data from children under 18. If we learn that we have collected personal data from a child under 18, we will take steps to delete such information as soon as possible.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this policy. You are advised to review this privacy policy periodically for any changes.
      </p>

      <h2>Service Delivery and Data Processing</h2>
      <p>
        When you subscribe to Salient, we process your data to deliver our AI-powered accounting services. This processing includes:
      </p>
      <ul>
        <li>Automated scanning and analysis of receipts, invoices, and financial documents</li>
        <li>AI-powered categorization of transactions</li>
        <li>Generation of financial reports and insights</li>
        <li>Secure storage of your financial data</li>
        <li>Integration with third-party financial services (with your permission)</li>
      </ul>
      <p>
        All data processing occurs on secure servers, and your financial information is protected with industry-standard encryption both in transit and at rest. Our AI models are trained on anonymized data to ensure privacy while maintaining accuracy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this privacy policy, please contact us at:
      </p>
      <p>
        Himalayas X LLC<br />
        418 Broadway, Ste 5184<br />
        Albany, NY 12207<br />
        Email: privacy@himalayasx.com<br />
        Phone: (412) 301-7426
      </p>
    </PolicyLayout>
  )
}
