import {
  ArrowBigUpDash,
  ArrowDown,
  ArrowUpRight,
  Badge,
  BarChart,
  BarChart2,
  BriefcaseBusiness,
  Circle,
  Clock,
  Database,
  Eye,
  Flashlight,
  IndianRupee,
  IndianRupeeIcon,
  PieChart,
  Settings,
  Shield,
  Target,
  TrendingUp,
  User,
} from "lucide-react";
export const quickComparison = [
  {
    header: "SIP",
    title: "Money flows: INTO fund",
    text: "Fixed amount invested regularly. Best for salaried and others with predictable income building long-term wealth.",
  },
  {
    header: "SWP",
    title: "Money flows: OUT OF fund",
    text: "Fixed amount withdrawn regularly. Suits retirees or those needing a planned income from an accumulated corpus.",
  },
  {
    header: "STP",
    title: "Money flows: BETWEEN funds",
    text: "Transfers from one scheme to another over time. Useful for deploying a lump sum into equity gradually.",
    icon: <Settings />,
  },
];

export const SIP = [
  {
    tag: "SIP BASICS",
    title: "Understanding SIP in Mutual Funds: Meaning & Benefits",
    description:
      "Complete guide to SIP meaning, how it works, key benefits, and when to choose SIP over lump sum investing.",
    icon: <TrendingUp />,
  },
  {
    tag: "WEALTH BUILDING",
    title: "From Zero to Crores: How SIP Can Transform Your Financial Future",
    description:
      "Discover how starting a small SIP today can help you build significant wealth over time through the power of compounding.",
    icon: <ArrowUpRight />,
  },
  {
    tag: "GOAL PLANNING",
    title: "To Achieve Your All Financial Needs",
    description:
      "Learn how SIP in Equity Mutual Funds can help you achieve all your financial goals – from buying a bike to retirement planning.",
    icon: <Target />,
  },
];

export const SWP = [
  {
    tag: "SWP Guide",
    title: "SWP (Systematic Withdrawal Plan) - Complete Guide",
    description:
      "Comprehensive guide to SWP: how it works, benefits, tax implications, and how to use it for retirement income.",
    icon: <ArrowDown />,
  },
  {
    tag: "Retirement Income",
    title: "An Additional Source of Cash Flow is No Longer a Luxury",
    description:
      "Learn how SWP in Hybrid Mutual Funds can provide you with regular cash flow during retirement with tax efficiency.",
    icon: <IndianRupee />,
  },
  {
    tag: "Tax Efficiency",
    title: "SWP for Senior Citizens: Tax-Efficient Income",
    description:
      "Discover how senior citizens can use SWP to generate tax-efficient monthly income from their mutual fund investments.",
    icon: <IndianRupeeIcon />,
  },
];

export const STP = [
  {
    tag: "STP Strategy",
    title: "STP in Mutual Funds: Smart Way to Invest Lump Sum Gradually",
    description:
      "Learn how STP helps you deploy lump sum money gradually into equity with real-life stories and practical scenarios.",
    icon: <ArrowDown />,
  },
  {
    tag: "STP Guide",
    title: "Systematic Transfer Plan (STP) in Mutual Funds: Complete Guide",
    description:
      "Understand STP meaning, how it works, key benefits, different types, and when it makes sense to use STP.",
    icon: <IndianRupee />,
  },
];
