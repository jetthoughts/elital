'use client';

import React, { useState } from 'react';
import Button from '../shared/Button';
import ProcessPreview from './ProcessPreview';

const JOB_TEMPLATE = `Job Title: [Specific Role] Remote Contractor

About Us
[Brief company description, mission, and values]

Team Structure and Size
Our remote team consists of [number] members across [number] time zones. You'll be working directly with:
  * [Role 1]
  * [Role 2]
  * [Role 3]
Team size: [X] people

Role Overview
We're seeking a talented [role] to join our remote team. As a contractor, you'll be responsible for [key responsibilities].

Key Responsibilities
  * [Responsibility 1]
  * [Responsibility 2]
  * [Responsibility 3]

Required Skills and Experience
  * [Skill/Experience 1]
  * [Skill/Experience 2]
  * [Skill/Experience 3]

Nice-to-Have Skills
  * [Additional Skill 1]
  * [Additional Skill 2]

Compensation Range
$[X] - $[Y] per [hour/month/project], depending on experience and skills.

Contract Duration
[Specify duration, e.g., 3 months, 6 months, or ongoing]

Expected Work Schedule
  * hours per week
  * Core working hours: [specify time range and time zone]
  * Flexibility: [describe any flexible arrangements]

Tools and Equipment
  * We provide: [list of tools/software provided]
  * You'll need: [list of required equipment, e.g., reliable internet connection, personal computer]

Communication and Collaboration
  * Daily check-ins via [tool, e.g., Slack]
  * Weekly team meetings via [tool, e.g., Zoom]
  * Project management through [tool, e.g., Asana]

Success Metrics
Your performance will be evaluated based on:
  * [Metric 1, e.g., Project completion rate]
  * [Metric 2, e.g., Quality of deliverables]
  * [Metric 3, e.g., Adherence to deadlines]

Application Process
  * Submit your resume and portfolio
  * Complete a brief skills assessment
  * Participate in a video interview`;

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    email: '',
    description: JOB_TEMPLATE,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      // Show success message or redirect
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Details
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={20}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border font-mono"
          />
        </div>

        <Button type="submit" className="w-full">
          Get Your AI-Selected Candidates
        </Button>
      </form>

      <ProcessPreview />
    </div>
  );
}