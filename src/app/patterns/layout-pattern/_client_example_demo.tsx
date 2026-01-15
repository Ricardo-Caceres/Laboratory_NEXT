'use client';

function TwoColumnLayout({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">{left}</div>
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">{right}</div>
    </div>
  );
}

function CardLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

export default function LayoutDemo() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="w-full max-w-5xl space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Layout Pattern</h2>
          <p className="text-gray-600">Reusable layout components</p>
        </div>

        {/* Two Column Demo */}
        <TwoColumnLayout
          left={<div className="font-semibold">Left Column</div>}
          right={<div className="font-semibold">Right Column</div>}
        />

        {/* Grid Demo */}
        <GridLayout>
          <CardLayout title="Card 1">Content for card 1</CardLayout>
          <CardLayout title="Card 2">Content for card 2</CardLayout>
          <CardLayout title="Card 3">Content for card 3</CardLayout>
        </GridLayout>

        <div className="text-center text-sm text-gray-600 bg-white p-4 rounded">
          💡 Layout components structure UI without knowing content
        </div>
      </div>
    </div>
  );
}
