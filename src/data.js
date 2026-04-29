const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Transactions Fraud Detection",
    description: "End-to-end fraud detection analysis using machine learning on financial transaction data. Includes Jupyter notebooks for EDA, feature engineering, and model building alongside Tableau visualizations and structured documentation with DVA-focused portfolio materials.",
    image: `${base}Fraud_detection.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/MananGilhotra/E_G14_TransactionsFraudDetection",
    live: "https://public.tableau.com/views/FraudDetectionAnalysis_17774583977700/TRANSACTIONRISKANALYSIS?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  }
]

export default projects
