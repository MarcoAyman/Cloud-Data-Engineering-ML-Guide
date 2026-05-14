import {
  Database,
  Server,
  Cloud,
  FileText,
  Activity,
  Cpu,
  BarChart,
  Shield,
  Search,
  Zap,
  Layers,
  Box,
  Share2,
  Settings,
  Lock,
  Eye,
  Video,
  HardDrive,
  Network,
  Code,
  Terminal,
  BrainCircuit,
  Bot,
  Globe,
  Workflow,
  MessageSquare,
  FileSearch,
  Mic,
} from "lucide-react";

export const gcpPipelineData = {
  networking: {
    title: "Networking & Content Delivery",
    description: "Cloud network foundation",
    items: [
      { name: "Google Cloud VPC", usage: "Global virtual network (Subnets, Routes, Firewalls)", icon: Network },
      { name: "Cloud Interconnect", usage: "Dedicated physical network connection to GCP", icon: Zap },
      { name: "Cloud DNS", usage: "Scalable, reliable, and managed authoritative DNS", icon: Globe },
      { name: "API Gateway", usage: "Develop, deploy, secure, and manage APIs", icon: Share2 },
      { name: "Cloud Load Balancing", usage: "Global, high-performance load balancing", icon: Layers },
      { name: "Cloud CDN", usage: "Low-latency content delivery network", icon: Cloud },
    ],
  },
  iac: {
    title: "Infrastructure as Code & Automation",
    description: "Automate deployments",
    items: [
      { name: "Terraform (GCP Provider)", usage: "Declarative infrastructure provisioning", icon: FileText },
      { name: "Cloud Deployment Manager", usage: "Infrastructure deployment service", icon: Code },
      { name: "Cloud Build", usage: "Serverless CI/CD platform", icon: Terminal },
      { name: "Workflows", usage: "Orchestrate microservices and APIs", icon: Workflow },
    ],
  },
  sources: {
    title: "Data Sources",
    description: "Where data originates",
    items: [
      { name: "Transactional (Cloud SQL/Spanner)", type: "Structured", icon: Database },
      { name: "IoT Core / Sensors", type: "Semi-structured", icon: Activity },
      { name: "Application Logs", type: "Unstructured", icon: FileText },
      { name: "Media (Video/Images)", type: "Unstructured", icon: Video },
    ],
  },
  ingestion: {
    title: "Ingestion",
    description: "Moving data into GCP",
    items: [
      { name: "Pub/Sub", usage: "Global real-time messaging and streaming", icon: Zap },
      { name: "Datastream", usage: "Serverless change data capture (CDC)", icon: Share2 },
      { name: "Storage Transfer Service", usage: "Transfer data from on-prem or other clouds", icon: HardDrive },
      { name: "Cloud Data Fusion", usage: "Fully managed, cloud-native data integration", icon: Database },
    ],
  },
  storage: {
    title: "Storage (Data Lake)",
    description: "Centralized repository",
    items: [
      { name: "Cloud Storage (GCS)", usage: "Scalable object storage for raw and curated data", icon: Cloud },
      { name: "BigLake", usage: "Unify data lakes and warehouses", icon: Shield },
      { name: "Dataplex", usage: "Intelligent data fabric for security and cataloging", icon: Layers },
    ],
  },
  processing: {
    title: "Processing & ETL",
    description: "Clean, transform, and prepare data",
    items: [
      { name: "Dataflow", usage: "Serverless stream and batch processing (Apache Beam)", icon: Settings },
      { name: "Dataproc", usage: "Managed Hadoop and Spark clusters", icon: Server },
      { name: "Cloud Functions / Run", usage: "Event-driven, serverless compute", icon: Cpu },
    ],
  },
  analytics: {
    title: "Analytics & Data Warehouse",
    description: "Query and analyze data",
    items: [
      { name: "BigQuery", usage: "Serverless, highly scalable enterprise data warehouse", icon: Database },
      { name: "Looker", usage: "Enterprise BI and embedded analytics", icon: Search },
    ],
  },
  machineLearning: {
    title: "Machine Learning & AI Services",
    description: "Predictive analytics and specialist AI",
    items: [
      { name: "Vertex AI", usage: "End-to-end ML platform: build, deploy, and scale", icon: Box },
      { name: "Cloud TPUs", usage: "Purpose-built ML accelerators for deep learning", icon: Cpu },
      { name: "Vision API", usage: "Image analysis and OCR", icon: Video },
      { name: "Document AI", usage: "Extract text and data from documents", icon: FileSearch },
      { name: "Speech-to-Text", usage: "Convert speech into text", icon: Mic },
    ],
  },
  genAi: {
    title: "Generative AI",
    description: "Foundation models and assistants",
    items: [
      { name: "Gemini API", usage: "Multimodal foundation models by Google", icon: BrainCircuit },
      { name: "Vertex AI Studio", usage: "Prototyping and customizing generative AI models", icon: Bot },
      { name: "Gemini for Google Cloud", usage: "AI-powered assistant for developers", icon: MessageSquare },
    ],
  },
  delivery: {
    title: "Delivery & Visualization",
    description: "Business intelligence and reporting",
    items: [
      { name: "Looker Studio", usage: "Interactive dashboards and data visualization", icon: BarChart },
    ],
  },
  security: {
    title: "Security & Monitoring",
    description: "Governance and observability",
    items: [
      { name: "Cloud Logging & Monitoring", usage: "Metrics, logs, and traces (Operations Suite)", icon: Activity },
      { name: "Cloud IAM", usage: "Fine-grained access control", icon: Lock },
      { name: "Cloud KMS", usage: "Encryption key management", icon: Shield },
      { name: "Sensitive Data Protection", usage: "Discover and protect sensitive data (DLP)", icon: Eye },
    ],
  },
};
