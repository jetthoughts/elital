import React from 'react';

const ComparisonTable = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">How We Compare</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="p-4 text-left">Features</th>
                <th className="p-4 text-center bg-emerald-50 font-semibold text-emerald-600">
                  Elital
                </th>
                <th className="p-4 text-center">Toptal</th>
                <th className="p-4 text-center">Arc</th>
                <th className="p-4 text-center">Turing</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                {
                  feature: 'Business Model',
                  us: 'Discovery platform',
                  toptal: 'Hiring platform',
                  arc: 'Hiring platform',
                  turing: 'Hiring platform',
                },
                {
                  feature: 'Database Size',
                  us: '15,000+',
                  toptal: '10,000+',
                  arc: '5,000+',
                  turing: '5,000+',
                },
                {
                  feature: 'Profile Verification',
                  us: 'By top companies',
                  toptal: 'Internal',
                  arc: 'Internal',
                  turing: 'Internal',
                },
                {
                  feature: 'Contact Process',
                  us: 'Direct',
                  toptal: 'Platform managed',
                  arc: 'Platform managed',
                  turing: 'Platform managed',
                },
                {
                  feature: 'Platform Fee',
                  us: 'free (save 20%)',
                  toptal: 'fee included',
                  arc: 'fee included',
                  turing: 'fee included',
                },
                {
                  feature: 'Hourly Rates',
                  us: '$30-150/hr',
                  toptal: '~ $60-200/hr',
                  arc: '~ $50-180/hr',
                  turing: '~ $40-160/hr',
                },
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-center bg-emerald-50 text-emerald-700 font-medium">{row.us}</td>
                  <td className="p-4 text-center text-gray-600">{row.toptal}</td>
                  <td className="p-4 text-center text-gray-600">{row.arc}</td>
                  <td className="p-4 text-center text-gray-600">{row.turing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
