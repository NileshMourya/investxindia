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
    companyName: "aditya-birla Mutual Fund",
  },
  { image: "/AMC LOGO/axis-mf.png", companyName: "axis Mutual Fund" },
  { image: "/AMC LOGO/bandhan-mf.png", companyName: "bandhan Mutual Fund" },
  {
    image: "/AMC LOGO/baroda-bnp-paribas-mf.png",
    companyName: "baroda-bnp-paribas Mutual Fund",
  },
  {
    image: "/AMC LOGO/canara-robeco-mf.png",
    companyName: "canara-robeco Mutual Fund",
  },
  { image: "/AMC LOGO/dsp-mf.png", companyName: "dsp Mutual Fund" },
  { image: "/AMC LOGO/edelweiss-mf.png", companyName: "edelweiss Mutual Fund" },
  {
    image: "/AMC LOGO/franklin-templeton-mf.png",
    companyName: "franklin-templeton Mutual Fund",
  },
  { image: "/AMC LOGO/hdfc-mf.png", companyName: "hdfc Mutual Fund" },
  { image: "/AMC LOGO/hsbc-mf.png", companyName: "hsbc Mutual Fund" },
  {
    image: "/AMC LOGO/icici-prudential-mf.png",
    companyName: "icici-prudential Mutual Fund",
  },
  { image: "/AMC LOGO/invesco-mf.png", companyName: "invesco Mutual Fund" },
  {
    image: "/AMC LOGO/jm-financial-mf.png",
    companyName: "jm-financial Mutual Fund",
  },
  { image: "/AMC LOGO/kotak-mf.png", companyName: "kotak Mutual Fund" },
  { image: "/AMC LOGO/lic-mf.png", companyName: "lic Mutual Fund" },
  {
    image: "/AMC LOGO/mahindra-manulife-mf.png",
    companyName: "mahindra-manulife Mutual Fund",
  },
  {
    image: "/AMC LOGO/mirae-asset-mf.png",
    companyName: "mirae-asset Mutual Fund",
  },
  { image: "/AMC LOGO/navi-mf.png", companyName: "navi Mutual Fund" },
  {
    image: "/AMC LOGO/nippon-india-mf.png",
    companyName: "nippon-india Mutual Fund",
  },
  {
    image: "/AMC LOGO/pgim-india-mf.png",
    companyName: "pgim-india Mutual Fund",
  },
  { image: "/AMC LOGO/ppfas-mf.png", companyName: "ppfas Mutual Fund" },
  { image: "/AMC LOGO/quant-mf.png", companyName: "quant Mutual Fund" },
  { image: "/AMC LOGO/quantum-mf.png", companyName: "quantum Mutual Fund" },
  { image: "/AMC LOGO/samco-mf.png", companyName: "samco Mutual Fund" },
  { image: "/AMC LOGO/sbi-mf.png", companyName: "sbi Mutual Fund" },
  { image: "/AMC LOGO/sundaram-mf.png", companyName: "sundaram Mutual Fund" },
  { image: "/AMC LOGO/tata-mf.png", companyName: "tata Mutual Fund" },
  { image: "/AMC LOGO/trust-mf.png", companyName: "trust Mutual Fund" },
  { image: "/AMC LOGO/union-mf.png", companyName: "union Mutual Fund" },
  { image: "/AMC LOGO/uti-mf.png", companyName: "uti Mutual Fund" },
  {
    image: "/AMC LOGO/whiteoak-capital-mf.jpg",
    companyName: "whiteoak-capital Mutual Fund",
  },
];

export const cards = [
  {
    tag: "Risk Diversification",
    desc: "Invest across a wide range of securities and asset classes to manage risk and improve long-term return potential.",
    icon: <Network />,
  },
  {
    tag: "Expert Fund Management",
    desc: "Your investments are managed by experienced professionals who research markets and make informed decisions for you.",
    icon: <BriefcaseBusiness />,
  },
  {
    tag: "High Liquidity",
    desc: "Enjoy flexibility with open-ended funds that allow you to invest or redeem easily whenever funds are required.",
    icon: <ArrowLeftRight />,
  },
  {
    tag: "Regulated Transparency",
    desc: "Access detailed portfolio disclosures, daily NAV updates, and reporting in line with SEBI regulations.",
    icon: <Eye />,
  },
  {
    tag: "Tax Efficiency",
    desc: "ELSS mutual funds provide tax deductions under Section 80C up to ₹1.5 lakh while supporting long-term growth.",
    icon: <Percent />,
  },
  {
    tag: "Affordable Investing",
    desc: "Start disciplined investing with SIPs beginning at just ₹500 per month, making wealth creation accessible to all.",
    icon: <IndianRupee />,
  },
];

export const card = [
  {
    tag: "AMFI Registered",
    desc: "Registered with AMFI and compliant with industry standards, ensuring ethical and regulated mutual fund distribution.",
    icon: <Award />,
  },
  {
    tag: "Authorized investxindia Partner",
    desc: "Official business partner of investxindia, a reputed wealth management platform trusted by investors across India.",
    icon: <Building />,
  },
  {
    tag: "30+ Years of Experience",
    desc: "Over three decades of experience in financial planning and investment guidance, serving clients nationwide.",
    icon: <Users />,
  },
  {
    tag: "Goal-Oriented Planning",
    desc: "Customized investment strategies designed around your goals, risk appetite, and investment time horizon.",
    icon: <Goal />,
  },
  {
    tag: "Complete Fee Transparency",
    desc: "No hidden charges or surprises. Our transparent approach focuses on trust and long-term client relationships.",
    icon: <BookCheck />,
  },
  {
    tag: "Ongoing Portfolio Reviews",
    desc: "Regular portfolio tracking and review discussions available in Gujarati, Hindi, and English for your convenience.",
    icon: <StarHalf />,
  },
];

export const categories = [
  {
    tag: "Large Cap Funds",
    desc: "Invest in India’s top 100 companies by market capitalization, offering relatively stable returns with lower volatility.",
    icon: <TrendingUp />,
    textReturn: "Indicative Returns",
    return: "12–15% CAGR",
  },
  {
    tag: "Flexi Cap Funds",
    desc: "Dynamically invest across large, mid, and small-cap stocks to capture opportunities across market cycles.",
    icon: <ChartColumnDecreasing />,
    textReturn: "Indicative Returns",
    return: "13–16% CAGR",
  },
  {
    tag: "Mid Cap Funds",
    desc: "Focus on emerging companies ranked roughly between 101–250 by market capitalization, offering higher growth potential with moderate risk.",
    icon: <ChartPie />,
    textReturn: "Indicative Returns",
    return: "14–18% CAGR",
  },
  {
    tag: "Small Cap Funds",
    desc: "Invest in smaller companies beyond the top 250, carrying higher volatility but strong long-term growth potential.",
    icon: <Shell />,
    textReturn: "Indicative Returns",
    return: "15–20% CAGR",
  },
  {
    tag: "ELSS (Tax-Saving Funds)",
    desc: "Equity-linked savings schemes with a mandatory 3-year lock-in, offering tax deductions under Section 80C up to ₹1.5 lakh.",
    icon: <Shield />,
    textReturn: "Indicative Returns",
    return: "12–16% CAGR",
  },
  {
    tag: "Balanced Advantage / Hybrid Funds",
    desc: "Use dynamic allocation between equity and debt based on market valuations to balance growth and stability.",
    icon: <Database />,
    textReturn: "Indicative Returns",
    return: "10–13% CAGR",
  },
  {
    tag: "Debt & Liquid Funds",
    desc: "Invest in bonds and money market instruments to provide capital protection, liquidity, and predictable returns.",
    icon: <Wallet />,
    textReturn: "Indicative Returns",
    return: "6–8% CAGR",
  },
  {
    tag: "Index Funds",
    desc: "Passive funds that track market indices such as Nifty 50 or Sensex, offering low-cost, market-linked returns.",
    icon: <Network />,
    textReturn: "Indicative Returns",
    return: "11–14% CAGR",
  },
];

export const goals = [
  {
    title: "Retirement Planning & Wealth Creation",
    tag1: "Ideal for 15+ year horizon",
    tag2: "Risk Level: Moderate to High",
    tag3: "Taxation: Long-term capital gains",
    label:
      "• Wealth accumulation phase: Flexi Cap, Large & Mid Cap, Index and Multi-cap Mutual Funds",
    label1:
      "• Pre-retirement phase: Gradual allocation to Hybrid / Balanced Advantage and Short-Duration Debt Funds",
    label2:
      "Example: A 35-year-old planning a ₹2 crore retirement corpus in 25 years can start SIPs in diversified equity funds and shift progressively to hybrid and debt funds 5–7 years before retirement.",
    button: "Plan your retirement →",
    button1: "Free retirement assessment",
  },
  {
    title: "Child Education & Marriage Planning",
    tag1: "Ideal for 8–18 year goals",
    tag2: "Risk Level: Moderate to High",
    tag3: "Taxation: ELSS + LTCG benefits",
    label:
      "• Long-term growth phase: Flexi Cap, Mid Cap, and Child Education / Thematic Mutual Funds",
    label1:
      "• Final phase (last 3–5 years): Systematic shift to Hybrid and Short-Term Debt Funds",
    label2:
      "Example: For a 5-year-old child planning higher education in 2038, equity SIPs can be combined with Sukanya Samriddhi or PPF, with gradual de-risking before college admission.",
    button: "Plan child’s future →",
    button1: "Goal planning calculator",
  },
  {
    title: "Tax Saving & Emergency Fund Planning",
    tag1: "Ideal for 3–7 year horizon",
    tag2: "Risk Level: Low to Moderate",
    tag3: "Taxation: Section 80C + efficient withdrawals",
    label:
      "• Tax saving investments: ELSS Mutual Funds along with PPF or NPS for Section 80C benefits",
    label1:
      "• Emergency fund allocation: Liquid Funds, Money Market Funds, and Short-Duration Debt Funds",
    label2:
      "Example: An ELSS SIP of ₹5,000 per month for tax saving combined with a 3–6 month emergency fund invested in liquid and low-duration debt funds.",
    button: "Tax planning support →",
    button1: "SIP calculator",
  },
];

export const journey = [
  {
    title: "Tax Saving & Emergency Fund Planning",
    tag: "Ideal for 3–7 year horizon",
    label:
      "• Tax-efficient investing through ELSS mutual funds under Section 80C, supported by PPF or NPS.",
    label1:
      "• Emergency fund allocation in Liquid, Money Market, or Short-Duration Debt Funds for easy access.",
    label2:
      "• Annual portfolio reviews with incremental SIP increases as income grows.",
  },
  {
    title: "Business Owner Strategy: Lump Sum, STP & Future SWP Income",
    tag: "Age 45 · Surplus from property sale",
    label:
      "• Temporarily park lump-sum proceeds in liquid or low-risk debt funds.",
    label1:
      "• Use Systematic Transfer Plan (STP) to gradually move funds into equity or hybrid funds for growth.",
    label2:
      "• Transition to a Systematic Withdrawal Plan (SWP) later to generate regular retirement income.",
  },
  {
    title: "NRI Tax Planning & Emergency Corpus",
    tag: "Ideal for 3–7 year horizon",
    label:
      "• Utilize ELSS funds, PPF, or NPS for tax-efficient long-term savings where applicable.",
    label1:
      "• Maintain emergency reserves in liquid and short-duration debt funds for liquidity.",
    label2:
      "• Align investments with CA guidance on NRI taxation rules and DTAA benefits.",
  },
];

export const accountData = [
  {
    tag: "Simple & Organized",
    desc: "View and manage your complete financial portfolio from a single, well-organized dashboard.",
    icon: <NotepadTextDashed />,
  },
  {
    tag: "Fully Online Experience",
    desc: "Enjoy a seamless, paperless investment journey with anytime, anywhere access through a secure digital platform.",
    icon: <Smartphone />,
  },
  {
    tag: "Dedicated Investment Support",
    desc: "Get personalized guidance from a dedicated mutual fund distributor (investxindia) throughout your investment journey.",
    icon: <Users />,
  },
  {
    tag: "Wide Product Access",
    desc: "Invest across a broad range of financial products conveniently available under one platform.",
    icon: <ShoppingCart />,
  },
  {
    tag: "Multiple Payment Options",
    desc: "Convenient payment modes including Net Banking, NEFT, RTGS, UPI, and ACH mandates.",
    icon: <CreditCard />,
  },
  {
    tag: "Curated Mutual Fund Portfolios",
    desc: "Pre-built mutual fund portfolios designed to suit different risk profiles and investment goals.",
    icon: <StickyNote />,
  },
  {
    tag: "Flexible Transaction Channels",
    desc: "Transact through mobile app, email, SMS, or assisted call-based support as per your convenience.",
    icon: <Building2 />,
  },
  {
    tag: "Multi-Bank Integration",
    desc: "Easily link and manage multiple bank accounts within a single investment account.",
    icon: <CreditCard />,
  },
];
