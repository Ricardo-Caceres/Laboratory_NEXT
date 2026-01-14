/**
 * Stakeholder Management Module
 * Learn how to work with stakeholders across different business units
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stakeholder Management | Laboratory',
  description: 'Learn how to effectively work with stakeholders across various business units',
};

export default function StakeholdersPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Stakeholder Management</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          As a Tech Lead or Senior Developer, you'll work with stakeholders from different
          business units. Understanding their needs, communicating effectively, and managing
          expectations is crucial for project success.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Types of Stakeholders</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Executive Leadership</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>C-Level (CEO, CTO, CIO):</strong> Focus on ROI, strategic alignment, risk</li>
              <li><strong>VPs/Directors:</strong> Department goals, budgets, timelines</li>
              <li><strong>Communication style:</strong> High-level, business impact, metrics</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Product & Business</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Product Managers:</strong> Feature priorities, user stories, roadmap</li>
              <li><strong>Business Analysts:</strong> Requirements, data analysis, documentation</li>
              <li><strong>Communication style:</strong> User-focused, feature-driven, metrics</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Design & UX</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>UX Designers:</strong> User experience, interactions, flows</li>
              <li><strong>UI Designers:</strong> Visual design, brand consistency, accessibility</li>
              <li><strong>Communication style:</strong> Visual, user-centric, design systems</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Engineering & IT</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>DevOps/SRE:</strong> Infrastructure, deployments, monitoring</li>
              <li><strong>Security:</strong> Compliance, vulnerabilities, best practices</li>
              <li><strong>QA:</strong> Testing, quality standards, bug tracking</li>
              <li><strong>Communication style:</strong> Technical, detailed, specific</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Sales & Marketing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Sales:</strong> Customer needs, demos, competitive features</li>
              <li><strong>Marketing:</strong> Campaigns, analytics, customer engagement</li>
              <li><strong>Communication style:</strong> Customer impact, value proposition</li>
            </ul>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">End Users</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Internal users:</strong> Employees using internal tools</li>
              <li><strong>External users:</strong> Customers, clients, partners</li>
              <li><strong>Communication style:</strong> Simple, benefit-focused, empathetic</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Effective Communication Strategies</h2>
        
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// STAR Framework for Communication
S - Situation: Set the context
T - Task: Explain what needs to be done
A - Action: Describe your approach
R - Result: Show the expected outcome

// Example:
"We noticed (S) page load times increased 40%.
We need to (T) improve performance to maintain user engagement.
We'll implement (A) code splitting and lazy loading.
This should reduce (R) load time to under 2 seconds."

// For Executives: Focus on Business Value
"This optimization will reduce bounce rate by 15%,
potentially increasing revenue by $50k/month."

// For Developers: Focus on Technical Details
"We'll use React.lazy() and Suspense to implement
route-based code splitting, reducing initial bundle size."

// For Product: Focus on User Impact
"Users will see the app load 50% faster,
improving overall experience and satisfaction."`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Managing Expectations</h2>
        
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// The Triangle of Constraints
// Fast, Good, Cheap - Pick Two

interface ProjectConstraints {
  scope: string[];
  timeline: string;
  resources: string[];
  quality: string;
}

// Setting Realistic Expectations
const setExpectations = (request: ProjectConstraints) => {
  // Be honest about limitations
  if (request.timeline === 'urgent' && request.scope.length > 5) {
    return {
      recommendation: 'Reduce scope or extend timeline',
      tradeoffs: 'Quality will suffer if we rush',
      alternatives: 'MVP approach with phased rollout'
    };
  }
  
  // Provide options
  return {
    optionA: 'Full scope, 3 months, high quality',
    optionB: 'MVP scope, 1 month, good quality',
    optionC: 'Full scope, 1 month, compromised quality'
  };
};

// Under-promise, Over-deliver
const estimateWork = (task: string) => {
  const actualEstimate = 5; // days
  const buffer = 2; // days for unknowns
  return {
    commitment: actualEstimate + buffer,
    internal: actualEstimate
  };
};`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Handling Conflicts</h2>
        
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// Conflict Resolution Framework

class StakeholderConflict {
  // 1. Listen actively
  understand(concern: string) {
    return {
      paraphrase: "So you're concerned about...",
      validate: "I understand why this is important",
      empathize: "I would feel the same way"
    };
  }
  
  // 2. Find common ground
  findAlignment() {
    return {
      sharedGoal: "We both want the project to succeed",
      commonGround: "Quality and speed are important to both of us",
      objective: "Let's focus on the best outcome for users"
    };
  }
  
  // 3. Present data, not opinions
  supportWithEvidence(claim: string) {
    return {
      metrics: "Analytics show 60% of users...",
      benchmarks: "Industry standard is...",
      research: "Studies indicate that...",
      examples: "Similar companies have..."
    };
  }
  
  // 4. Offer solutions, not problems
  proposeSolution(issue: string) {
    return {
      options: ["Option A with pros/cons", "Option B with pros/cons"],
      recommendation: "Based on data, I recommend...",
      compromise: "We could meet in the middle by..."
    };
  }
}

// Example: Handling Rush Requests
const handleUrgentRequest = () => {
  // Don't say: "That's impossible"
  // Say: "To meet that deadline, we'd need to..."
  
  return {
    acknowledge: "I understand the urgency",
    reality: "Current timeline is X due to Y",
    options: [
      "Reduce scope to core features",
      "Add 2 more developers",
      "Accept technical debt (with consequences)"
    ],
    recommendation: "I suggest MVP approach because..."
  };
};`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Regular Communication Patterns</h2>
        
        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Daily Standups (Team)</h3>
            <p>Quick sync: What you did, what you're doing, blockers</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Weekly Status Updates (Management)</h3>
            <p>Progress metrics, risks, upcoming milestones, help needed</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Sprint Reviews (Product/Business)</h3>
            <p>Demo completed work, gather feedback, align on priorities</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Quarterly Business Reviews (Executives)</h3>
            <p>Strategic alignment, OKRs, roadmap, resource needs</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Ad-hoc Communications (All)</h3>
            <p>Blockers, urgent issues, quick questions, celebrations</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Building Trust & Credibility</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Deliver consistently:</strong> Meet commitments, communicate early if you can't</li>
          <li><strong>Be transparent:</strong> Share both good and bad news promptly</li>
          <li><strong>Own mistakes:</strong> Admit errors, explain what happened, how you'll fix it</li>
          <li><strong>Show initiative:</strong> Anticipate needs, propose solutions proactively</li>
          <li><strong>Respect time:</strong> Be punctual, prepared, and concise</li>
          <li><strong>Follow through:</strong> Do what you say you'll do</li>
          <li><strong>Document decisions:</strong> Keep records of agreements and rationales</li>
          <li><strong>Give credit:</strong> Acknowledge team contributions publicly</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Influencing Without Authority</h2>
        
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code>{`// Techniques for Technical Leaders

// 1. Build relationships first
const buildRelationship = () => {
  return {
    understand: "Learn their goals and challenges",
    help: "Offer assistance without expecting return",
    connect: "Find common interests and values",
    trust: "Be reliable and authentic"
  };
};

// 2. Frame in their language
const framingExamples = {
  forExecutive: "This reduces operational costs by 30%",
  forProduct: "This enables the #1 requested feature",
  forSales: "This gives us competitive advantage",
  forEngineering: "This reduces technical debt and maintenance"
};

// 3. Use social proof
const persuade = (proposal: string) => {
  return {
    authority: "Industry leaders like Google use this",
    popularity: "70% of Fortune 500 companies...",
    similarity: "Companies like ours have succeeded with...",
    evidence: "Studies show this approach results in..."
  };
};

// 4. Make it easy to say yes
const easyWin = () => {
  return {
    lowRisk: "Start with small pilot project",
    reversible: "We can revert if it doesn't work",
    supported: "I'll handle implementation and training",
    proven: "Similar project succeeded last quarter"
  };
};`}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Adapt communication style to your audience</li>
            <li>Focus on business value for executives, technical details for engineers</li>
            <li>Listen more than you talk</li>
            <li>Be honest about constraints and trade-offs</li>
            <li>Document everything important</li>
            <li>Build relationships before you need them</li>
            <li>Always come with solutions, not just problems</li>
            <li>Manage expectations proactively</li>
            <li>Celebrate wins and share credit</li>
            <li>Learn the business, not just the technology</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
