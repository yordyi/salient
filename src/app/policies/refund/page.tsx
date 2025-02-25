import { PolicyLayout } from '@/components/PolicyLayout'

export const metadata = {
  title: 'Refund Policy',
  description: 'Refund Policy for Salient AI Accounting Platform',
}

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund Policy">
      <p className="lead">
        Last updated: February 25, 2025
      </p>

      <h2>Introduction</h2>
      <p>
        This Refund Policy outlines the terms and conditions for refunds related to subscriptions and services provided by Himalayas X LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) through the Salient AI Accounting Platform. We strive to provide high-quality services and ensure customer satisfaction. This policy is designed to be fair and transparent regarding refund eligibility, process, and timeframes.
      </p>

      <h2>Subscription Refund Eligibility</h2>
      <p>
        We offer refunds under the following circumstances:
      </p>

      <h3>14-Day Money-Back Guarantee</h3>
      <p>
        For new customers, we offer a 14-day money-back guarantee from the date of initial subscription purchase. If you are not satisfied with our service within the first 14 days after your initial payment, you may request a full refund of your subscription fee.
      </p>
      <p>
        To be eligible for the 14-day money-back guarantee:
      </p>
      <ul>
        <li>You must request the refund within 14 days of your initial subscription purchase</li>
        <li>Your account must be in good standing</li>
        <li>You must provide a reason for your dissatisfaction to help us improve our service</li>
      </ul>

      <h3>Service Unavailability</h3>
      <p>
        If our service experiences significant downtime or technical issues that substantially impair your ability to use the platform for more than 24 consecutive hours, you may be eligible for a prorated refund for the affected period. This does not apply to scheduled maintenance periods that have been announced in advance.
      </p>

      <h3>Billing Errors</h3>
      <p>
        If you have been incorrectly charged or billed for services you did not receive, you are eligible for a refund of the incorrect amount charged.
      </p>

      <h2>Non-Refundable Situations</h2>
      <p>
        Refunds are generally not provided in the following situations:
      </p>
      <ul>
        <li>After the 14-day money-back guarantee period has expired</li>
        <li>For partial months or unused portions of your subscription period after the initial 14 days</li>
        <li>If you have violated our Terms of Service</li>
        <li>For any add-on services or one-time purchases once the service has been delivered</li>
        <li>If the service was used substantially during the refund request period</li>
        <li>For Enterprise plans with custom contracts (these are governed by the specific terms in your contract)</li>
      </ul>

      <h2>What You Will Receive</h2>
      <p>
        When your refund request is approved, you will receive:
      </p>
      <ul>
        <li>A full refund of your subscription payment (for eligible requests within the 14-day period)</li>
        <li>A prorated refund based on the duration of service unavailability (for service disruption claims)</li>
        <li>A refund of the exact amount incorrectly charged (for billing error claims)</li>
      </ul>
      <p>
        All refunds will be issued to the original payment method used for the purchase. If the original payment method is no longer available, we will work with you to find an alternative refund method.
      </p>

      <h2>Refund Process</h2>
      <p>
        To request a refund:
      </p>
      <ol>
        <li>Contact our customer support team at support@himalayasx.com with the subject line &quot;Refund Request&quot;</li>
        <li>Include your account email address, the date of purchase, and the reason for your refund request</li>
        <li>For service unavailability claims, please provide details about the dates and times when the service was unavailable</li>
        <li>For billing error claims, please provide documentation of the incorrect charge</li>
      </ol>
      <p>
        Our team will review your request and respond within 2 business days. If your refund request is approved, we will process the refund within 5-10 business days, depending on your payment provider&apos;s policies.
      </p>

      <h2>Refund Timeframe</h2>
      <p>
        Once a refund is approved:
      </p>
      <ul>
        <li>Credit card refunds typically appear on your statement within 5-10 business days</li>
        <li>Bank transfers may take 7-14 business days to process</li>
        <li>Other payment methods may vary in processing time</li>
      </ul>
      <p>
        Please note that while we process refunds promptly on our end, the actual time it takes for the refund to appear in your account depends on your financial institution or payment provider.
      </p>

      <h2>Free Trial Conversions</h2>
      <p>
        If you signed up for a free trial and did not cancel before the trial period ended:
      </p>
      <ul>
        <li>You will be charged for the subscription plan you selected during registration</li>
        <li>The 14-day money-back guarantee period begins from the date of your first payment, not from the start of your free trial</li>
        <li>It is your responsibility to cancel your subscription before the free trial ends if you do not wish to continue with a paid subscription</li>
      </ul>

      <h2>Subscription Cancellations</h2>
      <p>
        Cancelling your subscription is different from requesting a refund:
      </p>
      <ul>
        <li>You may cancel your subscription at any time through your account settings or by contacting customer support</li>
        <li>Cancellation will stop future billing but will not automatically generate a refund for previous charges</li>
        <li>After cancellation, you will continue to have access to the service until the end of your current billing period</li>
      </ul>
      <p>
        To cancel your subscription, log in to your account, go to &quot;Subscription Settings,&quot; and select &quot;Cancel Subscription.&quot; Alternatively, you can email support@himalayasx.com with your cancellation request.
      </p>

      <h2>Special Circumstances</h2>
      <p>
        We understand that special circumstances may arise. If you have a unique situation not covered by this policy, please contact our customer support team. We will review these requests on a case-by-case basis.
      </p>
      <p>
        For Enterprise customers with custom contracts, please refer to the specific terms in your service agreement regarding refunds and cancellations.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy periodically for any updates.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about our Refund Policy or would like to request a refund, please contact us at:
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
