import React, { useState,  } from 'react';
import { Table } from 'antd';
type DataRow = {
  year: string;
  totalJobs: number;
  averageSalary: number;
  jobTitle?: string; // Optional property for detailed view
  count?: number; // Optional property for detailed view
};

interface DataTableProps {
  data: DataRow[];
}

const MainTable: React.FC<DataTableProps> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const columns = [
    { 
      title: 'Year', 
      dataIndex: 'year', 
      key: 'year', 
      sorter: (a:DataRow, b:DataRow) => a.year.localeCompare(b.year), // Enable sorting by year
      onClick: (e: React.MouseEvent<HTMLDivElement>, record: DataRow) => setSelectedYear(record.year) // Handle row click
    },
    { title: 'Total Jobs', dataIndex: 'totalJobs', key: 'totalJobs', sorter: (a: DataRow, b:DataRow) => a.totalJobs - b.totalJobs },
    { title: 'Average Salary', dataIndex: 'averageSalary', key: 'averageSalary', sorter: (a: DataRow, b: DataRow) => a.averageSalary - b.averageSalary },
  ];

  // Filter data based on the selected year
  const filteredData = data.filter(row =>!selectedYear || row.year === selectedYear);

  return (
    <>
      <Table columns={columns} dataSource={filteredData} />
      {selectedYear && (
        <div style={{ marginTop: '20px' }}>
          <h3>Details for {selectedYear}</h3>
          <Table
            columns={[
              { title: 'Job Title', dataIndex: 'jobTitle', key: 'jobTitle' },
              { title: 'Count', dataIndex: 'count', key: 'count' },
            ]}
            dataSource={data.filter(row => row.year === selectedYear)}
          />
        </div>
      )}
    </>
  );
};

export default MainTable;
