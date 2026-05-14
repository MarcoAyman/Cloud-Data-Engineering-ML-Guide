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
  Fingerprint
} from "lucide-react";

export const awsPipelineData = {
  networking: {
    title: "Networking & Content Delivery",
    description: "Cloud network foundation",
    items: [
      { name: "Amazon VPC", usage: "Isolated private network (Subnets, Route Tables, IGW)", icon: Network },
      { name: "AWS Direct Connect", usage: "Dedicated physical network connection to AWS", icon: Zap },
      { name: "Amazon Route 53", usage: "Scalable DNS and domain registration", icon: Globe },
      { name: "Amazon API Gateway", usage: "Create, publish, and secure APIs at any scale", icon: Share2 },
      { name: "Elastic Load Balancing", usage: "Distribute incoming traffic (ALB, NLB, GLB)", icon: Layers },
      { name: "Amazon CloudFront", usage: "Global Content Delivery Network (CDN)", icon: Cloud },
      { name: "AWS Transit Gateway", usage: "Central hub to connect VPCs and on-premises", icon: Network },
    ],
  },
  iac: {
    title: "Infrastructure as Code & Automation",
    description: "Automate deployments",
    items: [
      { name: "AWS CloudFormation", usage: "Declarative infrastructure provisioning via JSON/YAML", icon: FileText },
      { name: "AWS CDK", usage: "Define infrastructure using code (TypeScript, Python, Java)", icon: Code },
      { name: "AWS SAM", usage: "Framework specifically for serverless applications", icon: Terminal },
      { name: "AWS Step Functions", usage: "Visual workflow orchestration for pipelines", icon: Workflow },
      { name: "AWS CodePipeline", usage: "Continuous integration and continuous delivery (CI/CD)", icon: Settings },
    ],
  },
  sources: {
    title: "Data Sources",
    description: "Where data originates",
    items: [
      { name: "Transactional (ERP/CRM)", type: "Structured", icon: Database },
      { name: "IoT Sensors", type: "Semi-structured", icon: Activity },
      { name: "Application Logs", type: "Unstructured", icon: FileText },
      { name: "Media (Video/Images)", type: "Unstructured", icon: Video },
    ],
  },
  ingestion: {
    title: "Ingestion",
    description: "Moving data into AWS",
    items: [
      {
        name: "Amazon Kinesis",
        usage: "Real-time streaming data (IoT, logs)",
        icon: Zap,
      },
      {
        name: "Amazon MSK",
        usage: "Managed Apache Kafka for high-throughput streaming",
        icon: Share2,
      },
      {
        name: "AWS DMS",
        usage: "Migrate relational databases to AWS",
        icon: Database,
      },
      {
        name: "AWS DataSync",
        usage: "Transfer large files from on-premises",
        icon: HardDrive,
      },
    ],
  },
  storage: {
    title: "Storage (Data Lake)",
    description: "Centralized repository",
    items: [
      {
        name: "Amazon S3",
        usage: "Scalable object storage for raw, transformed, and curated data",
        icon: Cloud,
      },
      {
        name: "AWS Lake Formation",
        usage: "Secure, catalog, and manage the S3 data lake",
        icon: Shield,
      },
      {
        name: "AWS Glue Data Catalog",
        usage: "Central metadata repository",
        icon: Layers,
      },
    ],
  },
  processing: {
    title: "Processing & ETL",
    description: "Clean, transform, and prepare data",
    items: [
      {
        name: "AWS Glue",
        usage: "Serverless ETL and data integration",
        icon: Settings,
      },
      {
        name: "Amazon EMR",
        usage: "Big data frameworks (Spark, Hadoop) for massive datasets",
        icon: Server,
      },
      {
        name: "AWS Lambda",
        usage: "Event-driven, serverless compute for real-time processing",
        icon: Cpu,
      },
    ],
  },
  analytics: {
    title: "Analytics & Data Warehouse",
    description: "Query and analyze data",
    items: [
      {
        name: "Amazon Redshift",
        usage: "Fast, scalable data warehouse for complex SQL analytics",
        icon: Database,
      },
      {
        name: "Amazon Athena",
        usage: "Serverless interactive SQL queries directly on S3",
        icon: Search,
      },
      {
        name: "Amazon OpenSearch",
        usage: "Log analytics, full-text search, and dashboards",
        icon: Eye,
      },
    ],
  },
  machineLearning: {
    title: "Machine Learning & AI Services",
    description: "Predictive analytics and specialist AI",
    items: [
      { name: "Amazon SageMaker", usage: "End-to-end managed ML: build, train, tune, and deploy", icon: Box },
      { name: "AWS Deep Learning AMIs", usage: "Pre-configured environments for DL frameworks", icon: Cpu },
      { name: "AWS Trainium & Inferentia", usage: "Purpose-built ML accelerators for cost-efficiency", icon: Zap },
      { name: "Amazon Rekognition", usage: "Image and video analysis (faces, labels, moderation)", icon: Video },
      { name: "Amazon Textract", usage: "Extract text and data from documents (forms, invoices)", icon: FileSearch },
      { name: "Amazon Transcribe", usage: "Convert speech to text and extract insights", icon: Mic },
      { name: "Amazon Fraud Detector", usage: "Detect online fraud with prebuilt ML", icon: Fingerprint },
    ],
  },
  genAi: {
    title: "Generative AI",
    description: "Foundation models and assistants",
    items: [
      { name: "Amazon Bedrock", usage: "Access third-party foundation models via a single API", icon: BrainCircuit },
      { name: "Amazon Q Developer", usage: "AI assistant that analyzes code and comments in IDE", icon: Bot },
      { name: "QuickSight Generative-BI", usage: "Natural-language insight generation", icon: MessageSquare },
    ],
  },
  delivery: {
    title: "Delivery & Visualization",
    description: "Business intelligence and reporting",
    items: [
      {
        name: "Amazon QuickSight",
        usage: "Interactive dashboards, BI, and generative insights",
        icon: BarChart,
      },
    ],
  },
  security: {
    title: "Security & Monitoring",
    description: "Governance and observability",
    items: [
      {
        name: "Amazon CloudWatch",
        usage: "Metrics, logs, and alarms",
        icon: Activity,
      },
      { name: "AWS IAM", usage: "Fine-grained access control", icon: Lock },
      { name: "AWS KMS", usage: "Encryption key management", icon: Shield },
      { name: "Amazon Macie", usage: "Discover and protect sensitive data (PII)", icon: Eye },
    ],
  },
};
