const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Transactions Fraud Detection",
    description: "End-to-end fraud detection analysis using machine learning on financial transaction data. Includes Jupyter notebooks for EDA, feature engineering, and model building alongside Tableau visualizations and structured documentation with DVA-focused portfolio materials.",
    image: `${base}Fraud_detection.png`,
    tags: ["Python", "Jupyter", "Machine Learning", "Tableau"],
    github: "https://github.com/MananGilhotra/E_G14_TransactionsFraudDetection",
    live: "https://public.tableau.com/views/FraudDetectionAnalysis_17774583977700/TRANSACTIONRISKANALYSIS?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "SmartStay Analytics",
    description: "Interactive analytics dashboard built to examine revenue and pricing strategy for the hospitality industry. Features occupancy tracking, pricing insights, seasonal trends, and revenue performance analysis.",
    image: `${base}smart_stay.png`,
    tags: ["Data Analytics", "Tableau", "Hospitality"],
    github: "https://github.com/MAYANKSHARMA01010/SECTIONA_G5_SmartStay_Analytic",
    live: "https://public.tableau.com/views/D2_DATA/D2_DashboardRevenuePricingStrategy?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  }
]

export default projects
