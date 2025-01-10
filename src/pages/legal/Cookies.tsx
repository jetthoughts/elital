import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

export default function Cookies() {
  return (
    <main>
      <PageHeader 
        title="Cookie Policy" 
        description="How we use cookies and similar technologies"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-emerald max-w-none">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.
          </p>

          <h2>Types of Cookies We Use</h2>
          <h3>Essential Cookies</h3>
          <p>
            Required for basic website functionality:
          </p>
          <ul>
            <li>Authentication and security</li>
            <li>Account preferences</li>
            <li>Shopping cart functionality</li>
          </ul>

          <h3>Performance Cookies</h3>
          <p>
            Help us understand how visitors use our site:
          </p>
          <ul>
            <li>Analytics and statistics</li>
            <li>Error monitoring</li>
            <li>Performance optimization</li>
          </ul>

          <h3>Functionality Cookies</h3>
          <p>
            Enable enhanced features:
          </p>
          <ul>
            <li>Remembering preferences</li>
            <li>Customization options</li>
            <li>Language settings</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control cookies through:
          </p>
          <ul>
            <li>Browser settings</li>
            <li>Our cookie preferences center</li>
            <li>Third-party opt-out tools</li>
          </ul>
        </div>
      </div>
    </main>
  );
}