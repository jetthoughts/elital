import React from 'react';
import { Check, X } from 'lucide-react';

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
                <th className="p-4 text-center bg-indigo-50 font-semibold text-indigo-600">Our Platform</th>
                <th className="p-4 text-center">Toptal</th>
                <th className="p-4 text-center">Arc</th>
                <th className="p-4 text-center">Turing</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                { feature: "Time to Hire", us: "2 weeks", toptal: "3 weeks", arc: "4 weeks", turing: "4+ weeks" },
                { feature: "Talent Quality", us: <Check className="mx-auto text-green-500" />, toptal: <Check className="mx-auto text-green-500" />, arc: <Check className="mx-auto text-green-500" />, turing: <X className="mx-auto text-red-500" /> },
                { feature: "Risk-Free Trial", us: <Check className="mx-auto text-green-500" />, toptal: <X className="mx-auto text-red-500" />, arc: <X className="mx-auto text-red-500" />, turing: <Check className="mx-auto text-green-500" /> },
                { feature: "Dedicated Support", us: <Check className="mx-auto text-green-500" />, toptal: <Check className="mx-auto text-green-500" />, arc: <X className="mx-auto text-red-500" />, turing: <X className="mx-auto text-red-500" /> }
              ].map((row, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-center bg-indigo-50">{row.us}</td>
                  <td className="p-4 text-center">{row.toptal}</td>
                  <td className="p-4 text-center">{row.arc}</td>
                  <td className="p-4 text-center">{row.turing}</td>
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