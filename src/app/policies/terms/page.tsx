import { Metadata } from 'next'
import { PolicyLayout } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Salient AI-powered accounting software.',
}

export default function TermsOfService() {
  return (
    <PolicyLayout title="Terms of Service">
      <p className="lead">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <h2>Introduction</h2>
      <p>
        Welcome to Salient, an AI-powered accounting software service provided by Himalayas X LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and other online products and services (collectively, the "Service").
      </p>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
      </p>

      <h2>Account Registration and Security</h2>
      <p>
        To use certain features of the Service, you may be required to register for an account. When you register, you must provide accurate and complete information and keep this information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to or use of your account.
      </p>

      <h2>Service Description</h2>
      <p>
        Salient is an AI-powered accounting software that provides various features including but not limited to:
      </p>
      <ul>
        <li>Smart receipt scanning with OCR technology that automatically extracts and processes receipt data</li>
        <li>Automated transaction categorization using machine learning algorithms</li>
        <li>Financial insights and analytics with customizable dashboards and reports</li>
        <li>Automated financial reporting including profit & loss statements, balance sheets, and cash flow statements</li>
        <li>Bank account integration with secure connections to over 10,000 financial institutions</li>
        <li>Tax preparation assistance with deduction tracking and tax category mapping</li>
        <li>Cloud-based storage with secure backup of all financial documents</li>
        <li>Multi-platform access via web browsers and mobile applications</li>
      </ul>
      <p>
        The specific features available to you depend on the subscription plan you select. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with appropriate notice to users.
      </p>

      <h2>Subscription and Payment</h2>
      <p>
        We offer various subscription plans for the Service (Starter, Professional, and Enterprise). By selecting a subscription plan and providing payment information, you agree to pay the subscription fees according to your selected plan. All payments are non-refundable except as expressly stated in our Refund Policy.
      </p>
      <p>
        Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle. Your subscription will automatically renew at the end of each billing period unless you cancel it before the renewal date.
      </p>
      <p>
        We may change subscription fees at any time, but we will provide notice of any fee change at least 30 days in advance. If you do not agree with the fee change, you have the right to reject the change by canceling your subscription before the fee change takes effect.
      </p>
      <p>
        Payment can be made using major credit cards, debit cards, or other payment methods as specified on our website. All payment information is processed securely through our payment processors.
      </p>

      <h2>Service Delivery</h2>
      <p>
        Upon successful payment and account creation, you will receive:
      </p>
      <ol>
        <li>Immediate access to the Salient platform through our web application at app.salient.com</li>
        <li>Access to mobile applications available for iOS and Android devices through their respective app stores</li>
        <li>The ability to use all features included in your subscription plan as detailed in your purchase confirmation</li>
        <li>Regular software updates and improvements delivered automatically</li>
        <li>Customer support as specified in your subscription plan (email, chat, and/or phone support depending on your plan)</li>
        <li>Access to our knowledge base, tutorials, and documentation</li>
        <li>Secure cloud storage for your financial data and documents</li>
      </ol>
      <p>
        All features are delivered digitally through our web and mobile applications. No physical products will be shipped. Your subscription grants you a license to use the software for the duration of your subscription period. You will receive an email confirmation with your account details and instructions for accessing the platform immediately after your purchase is processed.
      </p>

      <h2>User Content</h2>
      <p>
        The Service allows you to upload, store, and process financial data and other content ("User Content"). You retain all rights to your User Content, and you are responsible for your User Content. By uploading User Content to the Service, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display your User Content solely for the purpose of providing the Service to you.
      </p>
      <p>
        You represent and warrant that:
      </p>
      <ul>
        <li>You own or have the necessary rights to your User Content and the right to grant the license described above</li>
        <li>Your User Content does not violate the privacy rights, publicity rights, copyright, contractual rights, or any other rights of any person or entity</li>
      </ul>

      <h2>Prohibited Conduct</h2>
      <p>
        You agree not to:
      </p>
      <ul>
        <li>Use the Service in any way that violates any applicable law or regulation</li>
        <li>Use the Service for any illegal or unauthorized purpose</li>
        <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
        <li>Attempt to gain unauthorized access to any part of the Service</li>
        <li>Use the Service to store or transmit malicious code or viruses</li>
        <li>Use automated means to access or use the Service without our express permission</li>
        <li>Reverse engineer, decompile, or disassemble any portion of the Service</li>
        <li>Use the Service to process sensitive personal data as defined by applicable privacy laws, unless expressly permitted by us</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are owned by Himalayas X LLC and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or transmit any of the material obtained through the Service, except as expressly permitted by these Terms.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
      </p>
      <p>
        WHILE OUR AI-POWERED FEATURES ARE DESIGNED TO ASSIST WITH ACCOUNTING TASKS, WE DO NOT GUARANTEE THE ACCURACY OF ANY AI-GENERATED CONTENT OR RECOMMENDATIONS. YOU ARE RESPONSIBLE FOR REVIEWING AND VERIFYING ALL FINANCIAL INFORMATION PROCESSED BY THE SERVICE.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        IN NO EVENT SHALL HIMALAYAS X LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
      </p>
      <p>
        IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE SERVICE DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Himalayas X LLC, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service; (ii) your violation of any term of these Terms; (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your User Content caused damage to a third party.
      </p>

      <h2>Termination</h2>
      <p>
        We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
      </p>
      <p>
        You may cancel your subscription at any time through your account settings or by contacting our customer support. Upon cancellation, you will continue to have access to the Service until the end of your current billing period, after which your access will be terminated.
      </p>
      <p>
        Following termination, we will retain your User Content for a reasonable period of time to allow you to export your data. After this period, we may delete your User Content without notice.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in Albany County, New York.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes at least 30 days before they become effective by posting the updated Terms on our website or through other communications. Your continued use of the Service after the changes become effective constitutes your acceptance of the new Terms.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
      </p>

      <h2>Entire Agreement</h2>
      <p>
        These Terms, together with our Privacy Policy and any other legal notices published by us on the Service, constitute the entire agreement between you and us concerning the Service.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p>
        Himalayas X LLC<br />
        418 Broadway, Ste 5184<br />
        Albany, NY 12207<br />
        Email: legal@himalayasx.com<br />
        Phone: (412) 301-7426
      </p>
    </PolicyLayout>
  )
}
