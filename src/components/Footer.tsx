import React from 'react';
import Link from 'next/link';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'How it Works', path: '/how-it-works' },
      { label: 'Success Stories', path: '/success-stories' },
      { label: 'Pricing', path: '/pricing' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Blog', path: '/blog' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/legal/privacy' },
      { label: 'Terms of Service', path: '/legal/terms' },
      { label: 'Cookie Policy', path: '/legal/cookies' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path} 
                      className="hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Elital. All rights reserved.</p>
          <p className="text-sm">
            Provided by{' '}
            <a 
              href="https://www.jetthoughts.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition"
            >
              JetThoughts
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}