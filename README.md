# ☁️ Cloud Data Engineering & ML Guide (AWS & GCP)

A comprehensive, interactive, dual-cloud reference architecture guide for Data Engineering, Machine Learning, and Generative AI workflows. Built for aspiring and professional Cloud Engineers to understand, navigate, and compare the modern data ecosystems on **Amazon Web Services (AWS)** and **Google Cloud Platform (GCP)**.

![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

*   **Dual-Cloud Interactive Architectures**: Side-by-side, fully interactive, pan-and-zoomable node-based diagrams for both AWS and GCP, built with React Flow (`@xyflow/react`).
*   **Comprehensive Service Mapping & Comparison**: Visually categorizes and explains the usage of critical cloud services across the entire data lifecycle, allowing for easy mental mapping between cloud providers:
    *   🌐 **Networking & Content Delivery**: Amazon VPC & Route 53 vs. Google Cloud VPC & Cloud DNS.
    *   ⚙️ **Infrastructure as Code (IaC)**: AWS CloudFormation & CDK vs. Terraform (GCP Provider) & Deployment Manager.
    *   📥 **Ingestion**: Amazon Kinesis & MSK vs. Google Cloud Pub/Sub & Datastream.
    *   🗄️ **Storage (Data Lake)**: Amazon S3 & Lake Formation vs. Cloud Storage (GCS) & Dataplex.
    *   🔄 **Processing & ETL**: AWS Glue & EMR vs. Google Cloud Dataflow & Dataproc.
    *   📊 **Analytics**: Amazon Redshift & Athena vs. Google BigQuery & Looker.
    *   🧠 **Machine Learning**: Amazon SageMaker & Deep Learning AMIs vs. Vertex AI & Cloud TPUs.
    *   ✨ **Generative AI**: Amazon Bedrock & Q Developer vs. Gemini API & Vertex AI Studio.
    *   🔒 **Security & Governance**: AWS IAM & Macie vs. Cloud IAM & Sensitive Data Protection (DLP).
*   **Premium UI/UX Design**: Features a highly polished, modern interface with dynamic gradient backgrounds, layered drop shadows, and responsive hover animations that bring the architectures to life.

## 🛠️ Tech Stack

*   **Frontend**: React 19, TypeScript, Vite
*   **Styling**: Tailwind CSS v4, Lucide React (Icons)
*   **Diagramming**: React Flow (`@xyflow/react`)

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/cloud-data-eng-ml-guide.git
    cd cloud-data-eng-ml-guide
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Navigate to `http://localhost:3000` in your browser.

## 💡 Usage

*   **Explore the Pipelines**: Scroll through the vertically stacked architectural views. You can click and drag to pan around each interactive canvas, and scroll to zoom in and out.
*   **Compare Ecosystems**: Review the specific services categorized by their role in a modern data architecture. The identical pipeline layouts make it easy to translate concepts (like "What is the GCP equivalent of AWS Glue?").

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/cloud-data-eng-ml-guide/issues).

## 📝 License

This project is licensed under the MIT License.
