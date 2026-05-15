import {
  BarChart3,
  Building2,
  CalendarDays,
  Home,
  Landmark,
  Network,
  UsersRound
} from "lucide-react";

export const navItems = [
  { label: "Overview", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Departments", href: "/departments" }
];

export const highlights = [
  {
    title: "Spring Events",
    description: "Workshops, speaker series, and competitions",
    icon: CalendarDays
  },
  {
    title: "Networking & Recruiting",
    description: "Career development, firm connections, and networking",
    icon: Network
  },
  {
    title: "Investment Learning",
    description: "Market insights, research series, and macro views",
    icon: BarChart3
  }
];

export const mainCards = [
  {
    title: "Overview",
    zhTitle: "概览",
    description: "CCI简介、精选内容与最新动态",
    href: "/",
    icon: Home
  },
  {
    title: "Events",
    zhTitle: "活动",
    description: "讲座、比赛、论坛与社交活动",
    href: "/events",
    icon: CalendarDays
  },
  {
    title: "Departments",
    zhTitle: "部门",
    description: "组织架构、部门介绍与团队分工",
    href: "/departments",
    icon: Landmark
  }
];

export const latestUpdates = [
  {
    date: "2025/11/18",
    title: "走进房地产私募信贷 - CCI x iCross专场讲座"
  },
  {
    date: "2025/11/21",
    title: "纽约金融与科技跨界青年精英 - Happy Hour交流之夜"
  },
  {
    date: "2025/12/03",
    title: "【CCI投资课堂】利率债投资策略"
  },
  {
    date: "2026/01/24",
    title: "【CCI访谈录第三期】从战略咨询到硅谷的机会放大器"
  },
  {
    date: "2026/03/30",
    title: "【CCI访谈录第五期】对话Argo Venture Partners合伙人"
  },
  {
    date: "2026/05/13",
    title: "WHITE NIGHT｜曼哈顿毕业季限定精选社交晚宴"
  }
];

export const bottomFeatures = [
  {
    title: "Club Overview",
    description: "Learn about our mission, vision, and community.",
    icon: Building2
  },
  {
    title: "Featured Events",
    description: "Discover upcoming events, speakers, and competitions.",
    icon: CalendarDays
  },
  {
    title: "Department Structure",
    description: "Explore our departments and team organization.",
    icon: UsersRound
  }
];

export const departments = [
  {
    name: "Investment Learning",
    subtitle: "Research, markets, and member education",
    description: "Hosts market briefings, investing workshops, and cross-asset learning sessions for members."
  },
  {
    name: "Events & Partnerships",
    subtitle: "Speakers, forums, and external collaborations",
    description: "Coordinates speaker series, recruiting events, competitions, and partnerships across finance and technology."
  },
  {
    name: "Community & Operations",
    subtitle: "Member experience and club operations",
    description: "Supports onboarding, internal communication, event logistics, and the CCI member experience."
  }
];
