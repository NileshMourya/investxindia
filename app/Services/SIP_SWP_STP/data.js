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
    title: "Investment Flow: Into the Fund",
    text: "A fixed amount invested at regular intervals. Ideal for individuals with steady income aiming for long-term wealth creation.",
  },
  {
    header: "SWP",
    title: "Investment Flow: From the Fund",
    text: "A fixed amount withdrawn periodically. Suitable for retirees or investors seeking a structured income from their corpus.",
  },
  {
    header: "STP",
    title: "Investment Flow: Between Funds",
    text: "Systematic transfer of money from one scheme to another. Helps deploy lump-sum investments into equity in a phased manner.",
    icon: <Settings />,
  },
];

export const SIP = [
  {
    tag: "SIP FUNDAMENTALS",
    title: "SIP in Mutual Funds: Meaning, How It Works & Key Benefits",
    description:
      "A comprehensive guide explaining what SIP is, how it works, its advantages, and when to choose SIP over lump-sum investing.",
    icon: <TrendingUp />,
  },
  {
    tag: "LONG-TERM WEALTH",
    title: "From Small Investments to Long-Term Wealth with SIP",
    description:
      "Learn how disciplined SIP investing, even with modest amounts, can create substantial wealth through compounding over time.",
    icon: <ArrowUpRight />,
  },
  {
    tag: "GOAL-BASED INVESTING",
    title: "Achieving Life Goals Through Systematic Investment Planning",
    description:
      "Understand how equity SIPs help you plan for multiple financial goals—from short-term purchases to retirement.",
    icon: <Target />,
  },
];

export const SWP = [
  {
    tag: "SWP FUNDAMENTALS",
    title: "Systematic Withdrawal Plan (SWP): Complete Guide",
    description:
      "An in-depth guide explaining what SWP is, how it works, its benefits, tax treatment, and its role in retirement income planning.",
    icon: <ArrowDown />,
  },
  {
    tag: "RETIREMENT INCOME",
    title: "Creating a Reliable Source of Post-Retirement Cash Flow",
    description:
      "Understand how SWPs in hybrid mutual funds can deliver steady, tax-efficient income throughout retirement.",
    icon: <IndianRupee />,
  },
  {
    tag: "TAX-SMART INVESTING",
    title: "SWP for Senior Citizens: Generating Tax-Efficient Income",
    description:
      "Learn how senior citizens can use SWPs to receive regular monthly income while optimizing tax efficiency.",
    icon: <IndianRupeeIcon />,
  },
];

export const STP = [
  {
    tag: "STP STRATEGY",
    title: "STP in Mutual Funds: A Smarter Way to Invest Lump Sum Gradually",
    description:
      "Learn how Systematic Transfer Plans help phase lump-sum investments into equity through practical use cases and real-world scenarios.",
    icon: <ArrowDown />,
  },
  {
    tag: "STP FUNDAMENTALS",
    title: "Systematic Transfer Plan (STP): Meaning, Benefits, and Use Cases",
    description:
      "Understand what STP is, how it works, its advantages, available types, and when using STP makes strategic sense.",
    icon: <IndianRupee />,
  },
];
