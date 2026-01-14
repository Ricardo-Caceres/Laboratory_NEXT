import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';

export default function StorybookPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="Storybook"
        description="**Storybook** is a development environment for UI components. It allows you to browse a component library, view different states, and develop components interactively.

**Key Features:**
- **Component isolation**: Develop in isolation
- **Interactive documentation**: Living style guide
- **Visual testing**: Test component states
- **Addons**: Extend functionality
- **Multiple frameworks**: React, Vue, Angular, etc.

**Benefits:**
- Faster development
- Better documentation
- Easier testing
- Team collaboration"
        codeContent={[
          {
            filePath: '.storybook/main.ts',
            content: `import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
};

export default config;`,
          },
          {
            filePath: 'Button.stories.tsx',
            content: `import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary button',
  },
};`,
          },
        ]}
      />
      <RightPanel>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Storybook Component Library</h2>
          <div className="space-y-6">
            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">Button Component</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-2 opacity-70">Primary:</p>
                  <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-2 px-4 rounded">
                    Primary Button
                  </button>
                </div>
                <div>
                  <p className="text-sm mb-2 opacity-70">Secondary:</p>
                  <button className="bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white font-bold py-2 px-4 rounded">
                    Secondary Button
                  </button>
                </div>
                <div>
                  <p className="text-sm mb-2 opacity-70">Danger:</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Danger Button
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Storybook Commands:</h3>
              <div className="space-y-1 text-sm font-mono">
                <p>$ npx storybook init</p>
                <p>$ yarn storybook</p>
                <p>$ yarn build-storybook</p>
              </div>
            </div>
          </div>
        </div>
      </RightPanel>
    </div>
  );
}
