import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Network, 
  Radio, 
  ChevronRight, 
  Star, 
  Info,
  ExternalLink,
  Target,
  Brain,
  Activity,
  Calendar,
  Trophy,
  User
} from 'lucide-react';

// --- Types ---
type View = 'apparatus' | 'concept' | 'edge';

// --- Data ---
const APPS = [
  { id: 'tactical', name: '战术分析仪', desc: '基于 AI 的比赛回放分析，提供热力图定位。', icon: Zap },
  { id: 'rules', name: '规则助手', desc: '针对 PPA/MLP 职业联赛的即时规则查询。', icon: Info },
  { id: 'drills', name: '训练生成器', desc: '根据技能差距定制个性化的专项练习序列。', icon: Target },
  { id: 'biomechanics', name: '形态 AI', desc: '基于摄像头的截击与切球姿态实时纠正。', icon: Activity },
];

const CONCEPTS = {
  技术层: [
    { name: 'Dink (切球)', detail: '在非截击区（NVZ）及其后方击出的软球，旨在保持低平并落在对手厨房区。' },
    { name: '3rd Shot Drop (第三分落点)', detail: '最关键的过度球，旨在让进攻方能够顺利推进至厨房区。' },
    { name: 'Volley (截击)', detail: '在网前直接在空中击球，以给对手制造压力。' },
  ],
  心智层: [
    { name: '专注力', detail: '在高度重复的拉锯战中保持注意力的能力。' },
    { name: '压力管理', detail: '在关键赛点控制皮质醇水平，保持冷静决策。' },
    { name: '博弈思维', detail: '分析对手模式并利用位置弱点的博弈能力。' },
  ],
  体能层: [
    { name: '爆发力', detail: '瞬间完成大跨步救球并立即恢复位置的能力。' },
    { name: '核心稳定', detail: '在失去重心或极端伸展时保持身体平衡的能力。' },
    { name: '反应速度', detail: '在网前“交火”过程中所需的手速与反应时。' },
  ],
};

const NEWS = [
  { title: "Ben Johns 统治 PPA 公开赛", meta: "职业系列赛", time: "2小时前" },
  { title: "CPC 巡回赛向西南赛区扩张", meta: "区域动态", time: "5小时前" },
  { title: "Anna Leigh Waters 的生物黑客训练法", meta: "精英训练", time: "1天前" },
];

const CALENDAR = [
  { date: "5月 20日", title: "全国大学生杯", level: "精英赛" },
  { date: "6月 12日", title: "东部预选赛", level: "混合组" },
  { date: "7月 05日", title: "校队邀请赛", level: "仅限受邀" },
];

const FEED = [
  { 
    id: 1, 
    title: "深度解析：2024 反向切球元战术", 
    desc: "顶级球员如何利用大角度斜线切球重塑厨房区动态。 ",
    difficulty: 4, 
    tag: "职业级",
    author: "实验室分析"
  },
  { 
    id: 2, 
    title: "大学生参赛指南：CPC 第三赛区", 
    desc: "针对学生运动员的报名阈值与校队要求完整拆解。 ",
    difficulty: 2, 
    tag: "报名开启",
    author: "内部情报"
  },
  { 
    id: 3, 
    title: "装备实验室：球拍核心密度测试", 
    desc: "测试 16mm 与 14mm 核心在校队级力量对抗中的表现。 ",
    difficulty: 3, 
    tag: "硬件评测",
    author: "技术实验室" 
  },
];

// --- Sub-components ---

const ApparatusView = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {APPS.map((app, i) => (
      <motion.div
        key={app.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="glass-card glass-card-hover p-6 rounded-2xl cursor-pointer group"
      >
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
          <app.icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-lg font-medium mb-2">{app.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {app.desc}
        </p>
        <div className="flex items-center text-xs font-mono text-white/40 group-hover:text-white/80 transition-colors">
          <span>初始化装置</span>
          <ChevronRight size={14} className="ml-1" />
        </div>
      </motion.div>
    ))}
  </div>
);

const ConceptView = () => {
  const [active, setActive] = useState<{name: string, detail: string} | null>(null);

  return (
    <div className="relative min-h-[600px] flex flex-col md:flex-row gap-12 items-start">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting Lines (Desktop Simulation) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block opacity-20">
            <svg className="w-full h-full">
                <line x1="16%" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="84%" y2="50%" stroke="white" strokeWidth="1" />
            </svg>
        </div>

        {Object.entries(CONCEPTS).map(([category, items], idx) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              {idx === 0 && <Target size={18} className="text-cyan-400" />}
              {idx === 1 && <Brain size={18} className="text-purple-400" />}
              {idx === 2 && <Activity size={18} className="text-orange-400" />}
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">{category}</h4>
            </div>
            
            <div className="space-y-3">
              {items.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 5 }}
                  onClick={() => setActive(item)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    active?.name === item.name 
                      ? 'bg-white/10 border-white/30 text-white shadow-lg' 
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full md:w-80 glass-card p-8 rounded-2xl border-l-2 border-l-white/30"
          >
            <h3 className="text-xl mb-4 text-white font-display">{active.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {active.detail}
            </p>
            <div className="p-4 bg-white/5 rounded-lg text-xs font-mono text-white/40">
              <div className="mb-2">实验室数据源:</div>
              VARSITY_GUIDE_2024.PDF
            </div>
            <button 
              onClick={() => setActive(null)}
              className="mt-8 text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest"
            >
              关闭详细情报
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const EdgeView = () => (
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Column */}
    <div className="w-full lg:w-72 space-y-8">
      <section>
        <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-4 px-2">PPA / CPC 核心情报</h4>
        <div className="space-y-4">
          {NEWS.map((news, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer">
              <span className="text-[10px] font-mono text-cyan-400 uppercase mb-1 block">{news.meta}</span>
              <h5 className="text-sm font-medium leading-snug mb-1 text-gray-200">{news.title}</h5>
              <span className="text-[10px] text-white/20">{news.time}</span>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Center Column */}
    <div className="flex-1 space-y-6">
      <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2 px-2">运行报告</h4>
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {FEED.map((post) => (
          <div key={post.id} className="break-inside-avoid glass-card p-6 rounded-2xl group cursor-pointer hover:border-white/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-white/80 uppercase tracking-tighter">
                {post.tag}
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className={i < post.difficulty ? "fill-white text-white" : "text-white/10"} />
                ))}
              </div>
            </div>
            <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{post.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.desc}</p>
            <div className="flex items-center gap-2 pt-4 border-t border-white/5">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                <User size={10} />
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase">{post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full lg:w-72 space-y-8">
      <section>
        <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-4 px-2">大学生联赛日程</h4>
        <div className="bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
          {CALENDAR.map((event, i) => (
            <div key={i} className="p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
              <div className="text-[10px] font-mono text-white/40 mb-1">{event.date}</div>
              <h5 className="text-sm font-medium mb-1">{event.title}</h5>
              <span className="text-[10px] text-white/20 uppercase tracking-tighter">{event.level}</span>
            </div>
          ))}
          <button className="w-full p-4 text-[10px] text-center text-white/30 hover:bg-white/10 hover:text-white transition-all uppercase tracking-widest font-mono">
            查看完整日程
          </button>
        </div>
      </section>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('apparatus');

  const navItems = [
    { id: 'apparatus', label: '核心装置', icon: Zap },
    { id: 'concept', label: '观念之网', icon: Network },
    { id: 'edge', label: '边缘行者', icon: Radio },
  ];

  return (
    <div className="min-h-screen bg-lab-black text-gray-300 font-sans antialiased selection:bg-white selection:text-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-lab-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 glass-card rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-white/20 blur-[2px] rounded-full" />
              <div className="w-2 h-2 bg-white rounded-full absolute" />
            </div>
            <div>
              <h1 className="text-sm font-display font-medium tracking-wide uppercase">Pickleball AI Lab</h1>
              <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">精密运动工程枢纽</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id as View)}
                className={`relative px-4 py-2 text-xs font-medium tracking-widest transition-all ${
                  view === item.id ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {item.label}
                {view === item.id && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
             <button className="text-[10px] font-mono text-white/30 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all">
                系统访问日志
             </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
        <motion.div
           key={view}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4, ease: "easeOut" }}
           className="space-y-12"
        >
          {/* Section Title */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-b border-white/5 pb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                 <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">System / Module / 0{view === 'apparatus' ? 1 : view === 'concept' ? 2 : 3}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                {view === 'apparatus' && "装置库"}
                {view === 'concept' && "观念图谱"}
                {view === 'edge' && "情报面板"}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {view === 'apparatus' && "专为提升职业表现与战术执行而设计的高精度 AI 驱动工具套件。"}
                {view === 'concept' && "对精英竞技所需的认知、技术与生理素养维度的交互式映射。"}
                {view === 'edge' && "对全球巡回赛、职业元战术演变以及大学生机遇的实时监测。"}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest hidden lg:flex">
              <span>状态: 正常运行</span>
              <div className="w-px h-8 bg-white/10" />
              <span>核心温度: 32°C</span>
            </div>
          </div>

          {/* Module Content */}
          <div className="pt-8">
            {view === 'apparatus' && <ApparatusView />}
            {view === 'concept' && <ConceptView />}
            {view === 'edge' && <EdgeView />}
          </div>
        </motion.div>
      </main>

      {/* Footer / Background Detail */}
      <footer className="h-40 relative overflow-hidden pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />
         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full text-[8px] font-mono text-white/10 uppercase tracking-[1em]">
            <span>实验验证 ID: 431B-1582</span>
            <span>设计架构: 反重力实验室</span>
         </div>
      </footer>
    </div>
  );
}
