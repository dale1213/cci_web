import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  Globe2,
  Handshake,
  Landmark,
  Megaphone,
  PieChart,
  ShieldCheck,
  TrendingUp,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/paths";

const leadership = [
  {
    role: "CCI President",
    zhRole: "主席",
    name: "王博远 Bob",
    description: "Lead club strategy, cross-department coordination, and long-term development.",
    icon: ShieldCheck
  },
  {
    role: "Executive Committee",
    zhRole: "执委秘书处",
    name: "任诗嘉 Jenny | 梁钰 Sherry",
    description: "Coordinate resources, operations, major events, and internal community building.",
    icon: CalendarDays
  },
  {
    role: "Senior Advisory Board",
    zhRole: "高级顾问团",
    name: "Industry mentors & alumni",
    description: "Provide professional guidance across primary markets, public equities, and career growth.",
    icon: UsersRound
  }
];

const departments = [
  {
    code: "ECSA",
    zh: "执行委员会与秘书处",
    name: "Executive Committee and Secretarial Administration",
    leads: "任诗嘉 Jenny | 梁钰 Sherry",
    description:
      "CCI 的核心枢纽，负责社团资源统筹、对外大型活动策划落地、内部学习交流、团建活动和社群运营。",
    highlights: ["大型校级及市级活动策划", "金融知识工作坊", "内部团建与社群运营"],
    icon: CalendarDays
  },
  {
    code: "IBPE",
    zh: "投资银行与私募股权部",
    name: "Investment Banking and Private Equity Department",
    leads: "顾博文 Richard | 李鸿铭 Leo",
    description:
      "提供财务分析与建模训练，增强成员对行业、公司和一级市场复杂金融交易的理解。",
    highlights: ["CCI Demo Day", "Financial Technical Workshop", "一级路演深度汇报"],
    icon: Landmark
  },
  {
    code: "MREI",
    zh: "宏观研究与权益投资部",
    name: "Macro Research and Equity Investment Department",
    leads: "侯卓 Zhuo | 冯天睿 Iris",
    description:
      "提升成员在金融市场、股票分析、策略制定与风险管理方面的能力，培养国际金融趋势理解与投资决策能力。",
    highlights: ["CCI 股票虚拟盘", "行研与推票", "宏观 101 与每日市场新闻"],
    icon: TrendingUp
  },
  {
    code: "CDD",
    zh: "求职发展部",
    name: "Career Development Department",
    leads: "傅英杰 Gavin | 张语诺 Helen",
    description:
      "为成员提供职业发展支持，连接金融、科技、咨询企业资源，强化求职能力和行业人际网络。",
    highlights: ["CCI 城市行", "Resume / Interview Workshop", "企业招聘与宣讲会"],
    icon: BriefcaseBusiness
  },
  {
    code: "BDD",
    zh: "公关合作部",
    name: "Business Development Department",
    leads: "李青辰 Clover | 冯家明 Kelvin",
    description:
      "负责外部资源拓展、赞助谈判、校友及行业专家关系维护，提升社团外部影响力。",
    highlights: ["CCI 校友会", "嘉宾分享会", "合作与赞助谈判"],
    icon: Handshake
  },
  {
    code: "DMD",
    zh: "新媒体与传媒部",
    name: "Digital Media Department",
    leads: "王一鸣 Amelia",
    description:
      "负责 CCI 网站、微信公众号、社交媒体和宣传物料，打造社团品牌与内容传播体系。",
    highlights: ["CCI 网站与 Newsletter", "微信公众号运营", "社交媒体与视觉物料制作"],
    icon: Megaphone
  },
  {
    code: "TISM",
    zh: "技术创新与系统管理部",
    name: "Technology Innovation and Systems Management",
    leads: "周天乐 Ethan | 刘婧琦 Janesy",
    description:
      "负责外部合作系统对接、技术平台开发、AI 与数据分析工具建设，推动技术与金融结合。",
    highlights: ["智能平台开发", "跨部门系统集成", "AI 与数据驱动工具"],
    icon: Code2
  },
  {
    code: "MMFB",
    zh: "会员管理及财务预算部",
    name: "Member Management and Financial Budget",
    leads: "徐菁夷 Joey | 刘俊逸 Rocky",
    description:
      "管理成员招募与流动、校友会对接、财务预算、报账结算和社团管理系统优化。",
    highlights: ["成员管理与校友会对接", "财务管理与报账结算", "长期财务规划"],
    icon: Database
  }
];

const stats = [
  { value: "2022", label: "Officially Registered", zh: "哥大官方认证注册成立", icon: ShieldCheck },
  { value: "300+", label: "Current Members", zh: "横跨本硕博三十余专业", icon: UsersRound },
  { value: "3,000+", label: "Alumni & Partners", zh: "校友、嘉宾、专家、合作伙伴", icon: Globe2 },
  { value: "8", label: "Core Departments", zh: "覆盖研究、职业、技术与运营", icon: BarChart3 }
];

export default function DepartmentsPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src={assetPath("/assets/columbia_big_picture.png")}
            alt="Columbia campus architecture"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-columbia">
            Departments 部门
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
            CCI Departments
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            Columbia CCI Investment Club was officially registered at Columbia University in
            July 2022. The club provides a professional platform for financial market learning,
            investment practice, networking, and career development.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            哥大 CCI 投资社为对金融市场及投资感兴趣的同学提供信息交流与学习平台，帮助成员分享经验、实践金融知识、拓展社交人脉并规划职业发展。
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-10 max-w-7xl px-5 sm:px-8">
        <div className="relative z-10 grid gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-xl bg-paper p-5">
              <stat.icon className="h-6 w-6 text-columbia" />
              <p className="mt-3 font-display text-3xl font-semibold text-navy">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-columbia">{stat.label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{stat.zh}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {leadership.map((leader) => (
            <article key={leader.role} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-skywash text-columbia">
                  <leader.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-bold text-columbia">
                    {leader.role} <span className="text-slate-400">{leader.zhRole}</span>
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-navy">{leader.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{leader.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-columbia">
              Department Structure
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
              Explore Our Teams <span className="font-sans text-xl">部门介绍</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            内容整理自 CCI 2024 秋季招新介绍，覆盖社团执行、投资研究、职业发展、外联传播、技术和会员财务管理。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {departments.map((department) => (
            <article
              key={department.code}
              className="group flex min-h-[25rem] flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-card"
            >
              <department.icon className="h-9 w-9 text-columbia" />
              <p className="mt-5 text-lg font-bold text-columbia">{department.code}</p>
              <p className="text-xs font-semibold text-slate-500">{department.zh}</p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-6 text-navy">
                {department.name}
              </h3>
              <p className="mt-3 text-xs font-semibold text-columbia">Leads: {department.leads}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{department.description}</p>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-slate-500">
                {department.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-xl border border-line bg-white px-4 py-2 text-sm font-semibold text-columbia transition group-hover:border-accent/30 group-hover:bg-skywash"
              >
                View Team <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-skywash to-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">Why Join CCI?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              在 CCI，你将与志同道合的伙伴一起学习投资理念、洞悉市场动态，并在真实项目、工作坊、企业参访、嘉宾分享和社团运营中获得成长。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["投资研究与股票推介", "投行建模与一级市场路演", "职业发展与企业宣讲", "技术、媒体与社团运营"].map((item) => (
              <div key={item} className="rounded-xl border border-line bg-white p-4 text-sm font-semibold text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
