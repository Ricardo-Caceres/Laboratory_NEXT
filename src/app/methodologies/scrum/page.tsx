import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function ScrumPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Scrum Framework"
        description="**Scrum** is an agile framework for managing complex projects through iterative development, collaboration, and continuous improvement.

**Scrum Roles:**
- **Product Owner**: Maximizes product value
- **Scrum Master**: Facilitates the process
- **Development Team**: Builds the product

**Scrum Events:**
- **Sprint**: 1-4 week iteration
- **Sprint Planning**: Plan the sprint work
- **Daily Scrum**: 15-min daily sync
- **Sprint Review**: Demo and feedback
- **Sprint Retrospective**: Continuous improvement

**Scrum Artifacts:**
- **Product Backlog**: Ordered list of features
- **Sprint Backlog**: Sprint work items
- **Increment**: Working product version

**Core Values:**
- Commitment, Focus, Openness
- Respect, Courage"
        codeContent={[
          {
            filePath: 'scrum/sprint-planning.md',
            content: `# Sprint Planning

## Purpose
Plan the work for the upcoming sprint.

## Attendees
- Product Owner
- Scrum Master
- Development Team

## Time Box
8 hours for a 4-week sprint (proportional for shorter sprints)

## Agenda

### Part 1: What can be delivered?
- Review Product Backlog
- Discuss Sprint Goal
- Select items for Sprint Backlog
- Team commits to Sprint Goal

### Part 2: How will the work get done?
- Break down items into tasks
- Estimate effort
- Identify dependencies
- Create Sprint Backlog

## Output
- Sprint Goal
- Sprint Backlog
- Team commitment`,
          },
          {
            filePath: 'scrum/daily-standup.md',
            content: `# Daily Scrum (Stand-up)

## Purpose
Synchronize activities and create a plan for the next 24 hours.

## Attendees
- Development Team (required)
- Scrum Master (optional)
- Product Owner (optional)

## Time Box
15 minutes maximum

## Format
Each team member answers:

1. **What did I do yesterday** that helped the team meet the Sprint Goal?

2. **What will I do today** to help the team meet the Sprint Goal?

3. **Do I see any impediment** that prevents me or the team from meeting the Sprint Goal?

## Best Practices
- Same time and place daily
- Stand up (keeps it short)
- Focus on progress toward Sprint Goal
- Identify blockers quickly
- Defer detailed discussions`,
          },
          {
            filePath: 'scrum/user-story.ts',
            content: `interface UserStory {
  id: string;
  title: string;
  asA: string;        // Role
  iWant: string;      // Feature
  soThat: string;     // Benefit
  acceptanceCriteria: string[];
  storyPoints: number;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Backlog' | 'In Progress' | 'Review' | 'Done';
}

// Example User Story
const story: UserStory = {
  id: 'US-101',
  title: 'User Login',
  asA: 'registered user',
  iWant: 'to log in to the application',
  soThat: 'I can access my personalized dashboard',
  acceptanceCriteria: [
    'User can enter email and password',
    'System validates credentials',
    'Successful login redirects to dashboard',
    'Failed login shows error message',
    'Password field is masked',
  ],
  storyPoints: 5,
  priority: 'High',
  status: 'In Progress',
};

// INVEST Criteria
// - Independent
// - Negotiable
// - Valuable
// - Estimable
// - Small
// - Testable`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}
