import React from 'react';
import PageHeader from '@/components/shared/PageHeader';

export default function Cookies() {
  return (
    <main>
      <PageHeader 
        title="Cookie Policy" 
        description="How we use cookies on our website"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-emerald max-w-none">
          <h2>Our Cookie Usage</h2>
          <p>
            We use cookies solely for analytics purposes to help us understand how visitors use our website. 
            This helps us improve our services and provide a better user experience.
          </p>

          <h2>Analytics Cookies</h2>
          <p>
            Our analytics cookies collect information about:
          </p>
          <ul>
            <li>How you found and navigate our website</li>
            <li>Which pages you visit and for how long</li>
            <li>General usage patterns and trends</li>
          </ul>

          <h2>Your Privacy</h2>
          <p>
            We do not use cookies for:
          </p>
          <ul>
            <li>Advertising or marketing purposes</li>
            <li>Tracking individual users</li>
            <li>Storing personal information</li>
            <li>Sharing data with third parties</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control or delete cookies through your browser settings at any time. Please note that 
            disabling analytics cookies will not affect your ability to use our website, but it will limit 
            our ability to improve our services based on user behavior.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this cookie policy as needed to reflect changes in our analytics practices 
            or legal requirements. We encourage you to periodically review this page for the latest 
            information about our cookie usage.
          </p>
        </div>
      </div>
    </main>
  );
}