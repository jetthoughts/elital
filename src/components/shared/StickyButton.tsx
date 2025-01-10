import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyButton() {

  return (
    <button
      className="fixed bottom-8 right-8 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-emerald-600 transition shadow-lg z-50"
    >
      Post Your Project
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}