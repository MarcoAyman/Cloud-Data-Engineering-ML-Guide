# ☁️ AWS Data Engineering & ML Reference Architecture

An interactive, visual guide for AWS Data Engineering, Machine Learning, and Generative AI workflows. Built for aspiring and professional AWS Cloud Engineers to understand the modern data ecosystem on AWS.

![AWS Data Engineering](https://img.shields.io/badge/AWS-Data_Engineering-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

*   **Interactive Architecture Diagram**: A fully interactive, pan-and-zoomable node-based diagram built with React Flow (`@xyflow/react`).
*   **Comprehensive Service Mapping**: Visually categorizes and explains the usage of critical AWS services across the entire data lifecycle:
    *   🌐 **Networking & VPC**: VPC, Direct Connect, Route 53, API Gateway, CloudFront.
    *   ⚙️ **Infrastructure as Code (IaC)**: CloudFormation, CDK, SAM, Step Functions.
    *   📥 **Ingestion**: Kinesis, MSK, DMS, DataSync.
    *   🗄️ **Storage (Data Lake)**: S3, Lake Formation, Glue Data Catalog.
    *   🔄 **Processing & ETL**: Glue, EMR, Lambda.
    *   📊 **Analytics**: Redshift, Athena, OpenSearch.
    *   🧠 **Machine Learning**: SageMaker, Deep Learning AMIs, Trainium, Rekognition, Textract.
    *   ✨ **Generative AI**: Amazon Bedrock, Amazon Q Developer, QuickSight Generative-BI.
    *   🔒 **Security & Governance**: IAM, KMS, Macie, CloudWatch.

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
    git clone https://github.com/yourusername/aws-data-eng-ml-guide.git
    cd aws-data-eng-ml-guide
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

*   **Explore the Pipeline**: Click and drag to pan around the interactive React Flow canvas. Scroll to zoom in and out. Review the specific AWS services categorized by their role in a modern data architecture.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/aws-data-eng-ml-guide/issues).

## 📝 License

This project is licensed under the MIT License.
