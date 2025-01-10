import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

export default function Security() {
  return (
    <main>
      <PageHeader 
        title="Security" 
        description="How we protect your data"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-emerald max-w-none">
          <h2>Our Security Commitment</h2>
          <p>
            We prioritize the security of your data and maintain strict protocols to protect your information.
          </p>

          <h2>Infrastructure Security</h2>
          <p>
            Our platform is built with enterprise-grade security:
          </p>
          <ul>
            <li>SOC 2 Type II certified infrastructure</li>
            <li>24/7 monitoring and threat detection</li>
            <li>Regular security audits and penetration testing</li>
            <li>Automated backup systems</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We implement multiple layers of data protection:
          </p>
          <ul>
            <li>End-to-end encryption for sensitive data</li>
            <li>Secure data storage and transmission</li>
            <li>Regular vulnerability assessments</li>
            <li>Strict access controls</li>
          </ul>

          <h2>Compliance</h2>
          <p>
            We maintain compliance with major security standards:
          </p>
          <ul>
            <li>GDPR compliance for EU data</li>
            <li>CCPA compliance for California residents</li>
            <li>PCI DSS compliance for payments</li>
            <li>Industry-specific regulations</li>
          </ul>

          <h2>Security Best Practices</h2>
          <p>
            We recommend users follow these security practices:
          </p>
          <ul>
            <li>Use strong, unique passwords</li>
            <li>Enable two-factor authentication</li>
            <li>Regularly review account activity</li>
            <li>Report suspicious behavior</li>
          </ul>
        </div>
      </div>
    </main>
  );
}