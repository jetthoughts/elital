import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

export default function Terms() {
  return (
    <main>
      <PageHeader 
        title="Terms of Service" 
        description="Our terms and conditions"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-emerald max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Elital's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2>2. User Accounts</h2>
          <p>
            You must maintain accurate, complete, and up-to-date account information. You are responsible for maintaining the security of your account and password.
          </p>

          <h2>3. Service Terms</h2>
          <p>
            Our platform connects clients with pre-vetted freelance professionals. We:
          </p>
          <ul>
            <li>Verify freelancer credentials and experience</li>
            <li>Facilitate communication between parties</li>
            <li>Process payments securely</li>
            <li>Provide dispute resolution assistance</li>
          </ul>

          <h2>4. Fees and Payments</h2>
          <p>
            All fees are clearly displayed before engagement. Payment terms include:
          </p>
          <ul>
            <li>Secure payment processing</li>
            <li>Clear fee structure</li>
            <li>Refund policies for eligible cases</li>
            <li>Payment protection guarantees</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            Users retain their intellectual property rights. However, you grant us permission to:
          </p>
          <ul>
            <li>Display your content on our platform</li>
            <li>Use feedback for service improvement</li>
            <li>Promote success stories (with permission)</li>
          </ul>

          <h2>6. Dispute Resolution</h2>
          <p>
            Any disputes will be resolved through:
          </p>
          <ul>
            <li>Direct communication between parties</li>
            <li>Platform mediation services</li>
            <li>Binding arbitration if necessary</li>
          </ul>
        </div>
      </div>
    </main>
  );
}