import Hero from "./hero/Hero";
import StatsCards from "./hero/StatsCards";

import UploadZone from "./upload/UploadZone";
import ProcessingPipeline from "./upload/ProcessingPipeline";

import DocumentsTable from "./documents/DocumentsTable";
import MissingDocuments from "./documents/MissingDocuments";

import FinancialIntelligence from "./analysis/FinancialIntelligence";
import ReadinessScore from "./analysis/ReadinessScore";
import ValidationMetrics from "./analysis/ValidationMetrics";

export default function UploadPage() {
  return (
    <div className="space-y-8">

      {/* Hero */}
      <Hero />

      {/* KPI Cards */}
      <StatsCards />

      {/* Upload */}
      <UploadZone />

      {/* Pipeline */}
      <ProcessingPipeline />

      {/* Documents */}
      <DocumentsTable />

      {/* Missing Docs */}
      <MissingDocuments />

      {/* Bottom Analytics */}
      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <FinancialIntelligence />
        </div>

        <div className="space-y-6">
          <ReadinessScore />
          <ValidationMetrics />
        </div>

      </div>

    </div>
  );
}