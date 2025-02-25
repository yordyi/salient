import { Metadata } from 'next'
import { PolicyLayout } from '@/components/PolicyLayout'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Salient AI-powered accounting software.',
}

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy">
      <p className="lead">
        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <h2>Overview</h2>
      <p>
        At Himalayas X LLC ("we," "our," or "us"), we strive to provide high-quality AI-powered accounting software and services. This Refund Policy outlines the terms and conditions for refunds related to your subscription to Salient.
      </p>
      <p>
        By subscribing to our Service, you agree to the terms of this Refund Policy. Please read this policy carefully before making any purchases.
      </p>

      <h2>Subscription Services</h2>
      <p>
        Salient is offered as a subscription-based service with different plans (Starter, Professional, and Enterprise) billed on a monthly or annual basis. When you subscribe to our Service, you agree to pay the subscription fees according to your selected plan and billing cycle.
      </p>
      <p>
        Each subscription plan includes specific features and capabilities as detailed on our pricing page. All subscription plans provide access to our core AI-powered accounting features, with higher-tier plans offering additional functionality, increased storage, and enhanced support options.
      </p>

      <h2>Free Trial</h2>
      <p>
        We may offer a free trial period for new users. During this trial period, you can explore the features of our Service without being charged. If you do not cancel your subscription before the end of the trial period, you will be automatically charged for the subscription plan you selected.
      </p>
      <p>
        No refund will be issued for the initial subscription charge after a free trial period.
      </p>

      <h2>Refund Eligibility</h2>
      <p>
        We offer refunds under the following circumstances:
      </p>

      <h3>14-Day Money-Back Guarantee for New Subscribers</h3>
      <p>
        If you are a new subscriber (excluding trial conversions), you may request a full refund within 14 days of your initial purchase if you are not satisfied with our Service. This money-back guarantee applies only to your first subscription purchase and is limited to one refund per customer.
      </p>
      <p>
        To request a refund under our 14-day money-back guarantee, you must contact our customer support team within the 14-day period and provide a reason for your dissatisfaction. We may ask for feedback to help us improve our service.
      </p>

      <h3>Service Unavailability</h3>
      <p>
        If our Service experiences significant downtime (more than 24 consecutive hours) or if critical features are unavailable for an extended period due to our technical issues, you may be eligible for a prorated refund for the affected period. Such refunds will be evaluated on a case-by-case basis.
      </p>
      <p>
        To request a refund for service unavailability, please document the specific dates and times when the service was unavailable and include this information in your refund request.
      </p>

      <h3>Billing Errors</h3>
      <p>
        If you believe you have been incorrectly charged or billed for services you did not receive, please contact our customer support team within 30 days of the charge. We will investigate the issue and process a refund if we confirm a billing error occurred.
      </p>
      <p>
        Please provide any relevant transaction IDs, invoice numbers, or other documentation that may help us identify and resolve the billing error.
      </p>

      <h2>Non-Refundable Situations</h2>
      <p>
        Refunds will not be issued in the following situations:
      </p>
      <ul>
        <li>After the 14-day money-back guarantee period has expired</li>
        <li>For partial months or unused portions of your subscription period</li>
        <li>If you have violated our Terms of Service</li>
        <li>For subscriptions that have been active for more than one billing cycle</li>
        <li>For any add-on services or features purchased separately from the main subscription</li>
        <li>If the service meets our advertised specifications but does not meet your expectations or requirements</li>
        <li>If issues arise from your own hardware, software, or internet connectivity</li>
        <li>For any customization or implementation services provided</li>
        <li>If you have received a discount or promotional pricing on your subscription</li>
      </ul>

      <h2>Cancellation Policy</h2>
      <p>
        You may cancel your subscription at any time through your account settings or by contacting our customer support. Upon cancellation:
      </p>
      <ul>
        <li>You will continue to have access to the Service until the end of your current billing period</li>
        <li>Your subscription will not renew for the next billing period</li>
        <li>No refunds will be provided for the current billing period unless you qualify under our refund eligibility criteria</li>
        <li>You will be responsible for any outstanding charges incurred before cancellation</li>
        <li>You will have the opportunity to export your data before your access is terminated</li>
      </ul>
      <p>
        To cancel your subscription, log in to your account, go to "Account Settings" {'>'}  "Subscription", and click on "Cancel Subscription". Alternatively, you can contact our customer support team for assistance.
      </p>

      <h2>How to Request a Refund</h2>
      <p>
        To request a refund, please contact our customer support team at support@himalayasx.com with the following information:
      </p>
      <ul>
        <li>Your full name and email address associated with your account</li>
        <li>Date of purchase</li>
        <li>Subscription plan</li>
        <li>Reason for requesting a refund</li>
        <li>Any relevant order or transaction IDs</li>
      </ul>
      <p>
        We will review your request and respond within 5 business days. If your refund request is approved, the refund will be processed to the original payment method used for the purchase. Depending on your payment provider, it may take 5-10 business days for the refund to appear in your account.
      </p>

      <h2>Service Delivery</h2>
      <p>
        Upon successful payment and account creation, you will receive immediate access to the Salient platform through our web application at app.salient.com and, if available, mobile applications for iOS and Android devices. All features included in your subscription plan will be accessible immediately. No physical products will be shipped.
      </p>
      <p>
        Your subscription includes:
      </p>
      <ul>
        <li>A license to use the Salient software for the duration of your subscription</li>
        <li>Access to all features included in your selected subscription plan</li>
        <li>Cloud storage for your financial data as specified in your plan</li>
        <li>Regular software updates and security patches</li>
        <li>Customer support according to your subscription level</li>
      </ul>
      <p>
        You will receive an email confirmation with your account details and instructions for accessing the platform immediately after your purchase is processed. If you experience any issues with accessing the Service after payment, please contact our customer support team immediately.
      </p>

      <h2>Chargebacks</h2>
      <p>
        We encourage you to contact our customer support team before initiating a chargeback with your payment provider. Unauthorized chargebacks are considered fraudulent and may result in termination of your account and additional legal action.
      </p>
      <p>
        If you believe an unauthorized charge has been made to your account, please contact us first to resolve the issue. We are committed to addressing any billing concerns promptly and fairly.
      </p>
      <p>
        In the event of a dispute, we maintain detailed records of all transactions, account activities, and service access logs, which may be used to resolve chargeback claims.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website. Your continued use of the Service after such changes constitutes your acceptance of the new Refund Policy.
      </p>
      <p>
        We will notify users of any material changes to this policy via email or through a notification on our website at least 30 days before the changes take effect.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Refund Policy or would like to request a refund, please contact us at:
      </p>
      <p>
        Himalayas X LLC<br />
        418 Broadway, Ste 5184<br />
        Albany, NY 12207<br />
        Email: support@himalayasx.com<br />
        Phone: (412) 301-7426
      </p>
    </PolicyLayout>
  )
}
