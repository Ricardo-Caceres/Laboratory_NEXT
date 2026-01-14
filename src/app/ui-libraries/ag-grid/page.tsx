import { LeftPanel } from '@/components/layout/LeftPanel';
import { RightPanel } from '@/components/layout/RightPanel';
import dynamic from 'next/dynamic';

const ClientExample = dynamic(() => import('./_client_example'));

export default function AGGridPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPanel
        title="AG Grid"
        description="**AG Grid** is a feature-rich data grid designed for major JavaScript frameworks. It provides enterprise-grade functionality for displaying and editing large datasets.

**Key Features:**
- **Virtual scrolling**: Handle millions of rows
- **Sorting & filtering**: Built-in capabilities
- **Editing**: Inline cell editing
- **Grouping & aggregation**: Organize data
- **Export**: Excel and CSV export

**Use Cases:**
- Financial applications
- Data analytics dashboards
- Enterprise applications
- Report builders"
        codeContent={[
          {
            filePath: 'components/DataGrid.tsx',
            content: `import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface Row {
  id: number;
  name: string;
  age: number;
  country: string;
}

export default function DataGrid() {
  const [rowData] = useState<Row[]>([
    { id: 1, name: 'John', age: 25, country: 'USA' },
    { id: 2, name: 'Jane', age: 30, country: 'UK' },
    { id: 3, name: 'Bob', age: 35, country: 'Canada' },
  ]);

  const columnDefs = [
    { field: 'id', sortable: true, filter: true },
    { field: 'name', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: 'agNumberColumnFilter' },
    { field: 'country', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
}`,
          },
        ]}
      />
      <RightPanel>
        <ClientExample />
      </RightPanel>
    </div>
  );
}
