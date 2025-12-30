import {
  ArrowLeftRight,
  Award,
  BookCheck,
  BriefcaseBusiness,
  Building,
  Building2,
  ChartColumnDecreasing,
  ChartPie,
  CreditCard,
  Database,
  Eye,
  Goal,
  IndianRupee,
  Network,
  NotepadTextDashed,
  Percent,
  Shell,
  Shield,
  ShoppingCart,
  Smartphone,
  StarHalf,
  StickyNote,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

export const data = [
  {
    image: "/AMC LOGO/aditya-birla-mf.png",
    companyName: "aditya-birla-mutual Fund",
  },
  { image: "/AMC LOGO/axis-mf.png", companyName: "axis-mutual Fund" },
  { image: "/AMC LOGO/bandhan-mf.png", companyName: "bandhan-mutual Fund" },
  {
    image: "/AMC LOGO/baroda-bnp-paribas-mf.png",
    companyName: "baroda-bnp-paribas Mutual Fund",
  },
  {
    image: "/AMC LOGO/canara-robeco-mf.png",
    companyName: "canara-robeco-mutual Fund",
  },
  { image: "/AMC LOGO/dsp-mf.png", companyName: "dsp-mutual Fund" },
  { image: "/AMC LOGO/edelweiss-mf.png", companyName: "edelweiss-mutual Fund" },
  {
    image: "/AMC LOGO/franklin-templeton-mf.png",
    companyName: "franklin-templeton Mutual Fund",
  },
  { image: "/AMC LOGO/hdfc-mf.png", companyName: "hdfc Mutual Fund" },
  { image: "/AMC LOGO/hsbc-mf.png", companyName: "hsbc-mutual Fund" },
  {
    image: "/AMC LOGO/icici-prudential-mf.png",
    companyName: "icici-prudential Mutual Fund",
  },
  { image: "/AMC LOGO/invesco-mf.png", companyName: "invesco-mutual Fund" },
  {
    image: "/AMC LOGO/jm-financial-mf.png",
    companyName: "jm-financial-mutual Fund",
  },
  { image: "/AMC LOGO/kotak-mf.png", companyName: "kotak Mutual Fund" },
  { image: "/AMC LOGO/lic-mf.png", companyName: "lic-mutual Fund" },
  {
    image: "/AMC LOGO/mahindra-manulife-mf.png",
    companyName: "mahindra-manulife Mutual Fund",
  },
  {
    image: "/AMC LOGO/mirae-asset-mf.png",
    companyName: "mirae-asset-mutual Fund",
  },
  { image: "/AMC LOGO/navi-mf.png", companyName: "navi-mutual Fund" },
  {
    image: "/AMC LOGO/nippon-india-mf.png",
    companyName: "nippon-india-mutual Fund",
  },
  {
    image: "/AMC LOGO/pgim-india-mf.png",
    companyName: "pgim-india-mutual Fund",
  },
  { image: "/AMC LOGO/ppfas-mf.png", companyName: "ppfas-mutual Fund" },
  { image: "/AMC LOGO/quant-mf.png", companyName: "quant-mutual Fund" },
  { image: "/AMC LOGO/quantum-mf.png", companyName: "quantum-mutual Fund" },
  { image: "/AMC LOGO/samco-mf.png", companyName: "samco-mutual Fund" },
  { image: "/AMC LOGO/sbi-mf.png", companyName: "sbi-mutual Fund" },
  { image: "/AMC LOGO/sundaram-mf.png", companyName: "sundaram-mutual Fund" },
  { image: "/AMC LOGO/tata-mf.png", companyName: "tata-mutual Fund" },
  { image: "/AMC LOGO/trust-mf.png", companyName: "trust-mutual Fund" },
  { image: "/AMC LOGO/union-mf.png", companyName: "union-mutual Fund" },
  { image: "/AMC LOGO/uti-mf.png", companyName: "uti-mutual Fund" },
  {
    image: "/AMC LOGO/whiteoak-capital-mf.jpg",
    companyName: "whiteoak-capital Mutual Fund",
  },
];

export const cards = [
  {
    tag: "Diversification",
    desc: "Spread your investment across multiple securities and asset classes to reduce risk and enhance returns.",
    icon: <Network />,
  },
  {
    tag: "Professional Management",
    desc: "Expert fund managers with years of experience make informed investment decisions on your behalf.",
    icon: <BriefcaseBusiness />,
  },
  {
    tag: "Liquidity",
    desc: "Easy entry and exit options with open-ended fund, allowing you to redeem your investment when needed.",
    icon: <ArrowLeftRight />,
  },
  {
    tag: "Transparency",
    desc: "Regular disclosures, daily NAV updates, and complete portfolio transparency as per SEBI regulations.",
    icon: <Eye />,
  },
  {
    tag: "Tax Benefits",
    desc: "ELSS fund offer tax deduction under Section 80C up to ₹1.5 lakh, with potential for wealth creation.",
    icon: <Percent />,
  },
  {
    tag: "Start with ₹500 SIP",
    desc: "Begin your investment journey with as little as ₹500 per month through Systematic Investment Plans.",
    icon: <IndianRupee />,
  },
];

export const card = [
  {
    tag: "AMFI Registered",
    desc: "Spread your investment across multiple securities and asset classes to reduce risk and enhance returns.",
    icon: <Award />,
  },
  {
    tag: "investxindia Business Partner",
    desc: "Authorized business partner of investxindia, one of India's leading wealth management firms with industry expertise.",
    icon: <Building />,
  },
  {
    tag: "30+ Years Experience",
    desc: "Three decades of experience in investment and financial guidance, serving clients across Gujarat and India.",
    icon: <Users />,
  },
  {
    tag: "Goal-based Planning",
    desc: "Personalized investment strategies aligned with your specific financial goals, risk profile, and time horizon.",
    icon: <Goal />,
  },
  {
    tag: "Zero Hidden Charges",
    desc: "Transparent fee structure with no hidden costs. We believe in building long-term relationships through trust.",
    icon: <BookCheck />,
  },
  {
    tag: "Regular Reviews",
    desc: "Ongoing portfolio monitoring and regular reviews in Gujarati, Hindi, and English to keep you informed.",
    icon: <StarHalf />,
  },
];

export const categories = [
  {
    tag: "Large Cap",
    desc: "Invests in India's top 100 companies by market capitalization. Lower risk with stable returns.",
    icon: <TrendingUp />,
    textReturn: "Typical Returns",
    return: "12-15% CAGR",
  },
  {
    tag: "Flexi Cap",
    desc: "Flexible allocation across large, mid, and small-cap stocks based on market opportunities.",
    icon: <ChartColumnDecreasing />,
    textReturn: "Typical Returns",
    return: "13-16% CAGR",
  },
  {
    tag: "Mid Cap",
    desc: "Focuses on companies ranked 101-250 by market cap. Higher growth potential with moderate risk.",
    icon: <ChartPie />,
    textReturn: "Typical Returns",
    return: "14-18% CAGR",
  },
  {
    tag: "Small Cap",
    desc: "Invests in companies beyond top 250. Highest growth potential with higher volatility.",
    icon: <Shell />,
    textReturn: "Typical Returns",
    return: "15-20% CAGR",
  },
  {
    tag: "ELSS (Tax Saving)",
    desc: "Equity Linked Saving Scheme with 3-year lock-in. Tax deduction under Section 80C up to ₹1.5 lakh.",
    icon: <Shield />,
    textReturn: "Typical Returns",
    return: "12-16% CAGR",
  },
  {
    tag: "Balanced Advantage/Hybrid",
    desc: "Dynamic allocation between equity and debt based on market valuations. Balanced risk-return profile.",
    icon: <Database />,
    textReturn: "Typical Returns",
    return: "10-13% CAGR",
  },
  {
    tag: "Debt/Liquid",
    desc: "Invests in fixed-income securities and money market instruments. Lower risk with stable returns.",
    icon: <Wallet />,
    textReturn: "Typical Returns",
    return: "6-8% CAGR",
  },
  {
    tag: "Index Fund",
    desc: "Passive fund tracking market indices like Nifty 50, Sensex. Low expense ratio with market-matching returns.",
    icon: <Network />,
    textReturn: "Typical Returns",
    return: "11-14% CAGR",
  },
];

export const goals = [
  {
    title: "Retirement corpus",
    tag1: "Best for 15+ yrs",
    tag2: "Risk: Moderate–High",
    tag3: "Tax: Long-term capital gains",
    label:
      "• Accumulation phase: Flexi Cap, Large & Mid Cap, Index / Multi-cap Fund",
    label1:
      "• Near retirement: Hybrid / Balanced Advantage, Short-duration Debt",
    label2:
      "Example: For a 35-year-old targeting ₹2 Cr in 25 years, a SIP in diversified equity fund plus a gradual shift to hybrid and debt 5–7 years before retirement.",
    button: "Plan retirement →",
    button1: "Retirement assessment",
  },
  {
    title: "Child education & marriage",
    tag1: "Best for 8–18 yrs",
    tag2: "Risk: Moderate–High",
    tag3: "Tax: ELSS / LTCG mix",
    label:
      "• Long horizon: Flexi Cap, Mid Cap, Child / Thematic education Fund",
    label1: "• Final 3–5 years: Gradual shift to Hybrid & Short-Term Debt",
    label2:
      "Example: For a 5-year-old targeting engineering in 2038, combine equity SIPs with Sukanya / PPF and de-risk the corpus 3–4 years before admission.",
    button: "Child education plan →",
    button1: "Goal calculator",
  },
  {
    title: "Tax saving & emergency corpus",
    tag1: "Best for 3–7 yrs",
    tag2: "Risk: Low–Moderate",
    tag3: "Tax: 80C + efficient withdrawals",
    label: "• Tax saving: ELSS fund for 80C along with PPF / NPS",
    label1: "• Emergency: Liquid / Money Market / Short Duration Debt Fund",
    label2:
      "Example: Combine an ELSS SIP of ₹5,000/month for tax saving with a 3–6 month emergency corpus parked in liquid and low-duration debt fund.",
    button: "Tax planning help →",
    button1: "Try SIP calculator",
  },
];

export const journey = [
  {
    title: "Tax saving & emergency corpus",
    tag: "Best for 3–7 yrs",

    label: "• Tax saving: ELSS fund for 80C along with PPF / NPS",
    label1: "• Emergency: Liquid / Money Market / Short Duration Debt Fund",
    label2: "• Review annually, increase SIPs as income grows.",
  },
  {
    title: "Business owner – using lump sum + STP for future SWP income",
    tag: "Age 45 · Property sale surplus",

    label: "• Park lump sum in liquid / debt fund first.",
    label1: "• STP gradually into equity / hybrid fund for growth.",
    label2: "• Later convert to SWP for retirement income.",
  },
  {
    title: "Tax saving & emergency corpus",
    tag: "Best for 3–7 yrs",

    label: "• Tax saving: ELSS fund for 80C along with PPF / NPS",
    label1: "• Emergency: Liquid / Money Market / Short Duration Debt Fund",
    label2: "• Coordinate with CA on NRI taxation and DTAA.",
  },
];

export const accountData = [
  {
    tag: "Simple",
    desc: "Your entire financial portfolio neatly organised at one place.",
    icon: <NotepadTextDashed />,
  },
  {
    tag: "100% Online",
    desc: "Experience industry leading paperless transaction features/solutions in one app. Any time, anywhere transaction.",
    icon: <Smartphone />,
  },
  {
    tag: "Dedicated Distributor",
    desc: "Dedicated mutual fund distributor (investxindia) to guide you in your investment journey.",
    icon: <Users />,
  },
  {
    tag: "Access to Wide Product Basket",
    desc: "Access to wide product basket under single roof.",
    icon: <ShoppingCart />,
  },
  {
    tag: "Multiple Payment Modes",
    desc: "Net banking, NEFT, RTGS, ACH - Mandate, UPI, etc.",
    icon: <CreditCard />,
  },
  {
    tag: "Ready MF Scheme Portfolios",
    desc: "Ready MF scheme portfolios to match diverse risk profiles and investment objectives.",
    icon: <StickyNote />,
  },
  {
    tag: "Multiple Transaction Modes",
    desc: "Mobile Application, Email, SMS and Call & Transact.",
    icon: <Building2 />,
  },
  {
    tag: "Multiple Banks Support",
    desc: "Flexibility to add Multiple Banks to a single account.",
    icon: <CreditCard />,
  },
];
