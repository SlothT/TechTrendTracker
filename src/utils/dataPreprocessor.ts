// utils/dataPreprocessor.ts
export function preprocessData(dataset: Record<string, any[]>): any[] {
    const years = Object.keys(dataset); // Get all years
    const aggregatedData: any[] = [];
  
    // Iterate over each year
    years.forEach(year => {
      const jobsInYear = dataset[year];
      const totalJobs = jobsInYear.length;
      const totalSalary = jobsInYear.reduce((sum, job) => sum + job.salary_in_usd, 0);
      const averageSalary = totalSalary / totalJobs;
  
      // Push the aggregated data for this year
      aggregatedData.push({
        year,
        totalJobs,
        averageSalary,
      });
    });
  
    return aggregatedData;
  }
  