import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

export default function Privacy() {
  return (
    <main>
      <PageHeader 
        title="Privacy Policy" 
        description="Learn how we collect, use, and protect your personal information."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-emerald max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including when you:
          </p>
          <ul>
            <li>Create an account or profile</li>
            <li>Submit project requirements</li>
            <li>Contact freelancers</li>
            <li>Use our messaging system</li>
            <li>Make payments through our platform</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Match you with relevant freelancers</li>
            <li>Process payments and transactions</li>
            <li>Send you updates and marketing communications</li>
            <li>Prevent fraud and ensure platform security</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We share your information only:
          </p>
          <ul>
            <li>With freelancers you choose to work with</li>
            <li>With service providers who assist our operations</li>
            <li>When required by law or to protect rights</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information, including:
          </p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage and transmission</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Export your data</li>
          </ul>
        </div>
      </div>
    </main>
  );
}