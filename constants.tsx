
import React from 'react';
import { Project, QuickProject, CollectionSystem } from './types';

export const PRIMARY_PINK = '#FF8EB2';
export const SECONDARY_PINK = '#FFF0F5';
export const ACCENT_YELLOW = '#FFD93D';
export const ACCENT_BLUE = '#6BCB77';
export const TEXT_MAIN = '#333333';
export const TEXT_SUB = '#666666';

export const METHODS = [
  {
    num: "01",
    title: "先理解人，再定义需求",
    desc: "通过用户行为、反馈与数据，拆解真实动机。避免“看似正确但无人使用”的方案。"
  },
  {
    num: "02",
    title: "先做复杂，再做简单",
    desc: "在复杂业务与规则中反复试错，最终沉淀为用户可理解、可持续的体验。"
  },
  {
    num: "03",
    title: "数据验证，而非直觉坚持",
    desc: "关注转化、留存、活跃等核心指标，通过数据推动产品迭代与取舍。"
  }
];

export const CORE_PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "招商银行App-ETF模拟投资大赛",
    bg: "ETF交易存在较高的认知门槛，新手往往会存在“看懂概念”却不敢实际交易的情况。本项目通过零风险模拟环境，让用户在试错中建立信心。",
    badSolution: "以拉新为目标，强曝光+奖励刺激，集中输出投教内容。",
    goodSolution: "不直接追求转化，先解决“敢不敢动手”。搭建允许犯错的场景，用“比赛”替代“教学”。",
    mechanisms: [
      "还原真实：覆盖行情、下单、撤单、结算完整链路。",
      "分阶段赛事：拆解目标，降低一次性理解成本。",
      "嵌入式投教：在“要做决定”的节点提示，而非事前灌输。"
    ],
    results: [
      { label: "累计参赛用户", value: "12w+" },
      { label: "占开户用户比", value: "50%" },
      { label: "卡户转化", value: "5000+" }
    ],
    h5Url: "https://mp.weixin.qq.com/s/sEQerIhlQa2dSPw7oKdC8w",
    h5Img: "https://i.ibb.co/pB4sJVvh/2-1x.png"
  },
  {
    id: "project-2",
    title: "好游快爆App-壕争夺",
    bg: "平台内虚拟货币长期积压，高活跃用户资产无法消耗。且传统节日兑换活动只能短期刺激，无法解决问题。",
    badSolution: "节日兑换/限时商城，固定价格换奖品。",
    goodSolution: "把“消耗”变成“玩法”，引入不确定性+竞争感，用「争夺」替代「兑换」。",
    mechanisms: [
      "竞拍制模型：投入爆米花 ≠ 立即获得，而是参与“概率+排名”竞争。",
      "倒计时+追加：支持多次投入，形成动态博弈节奏。"
    ],
    results: [
      { label: "单期参与用户", value: "15W+" },
      { label: "用户留存", value: "50%+" },
      { label: "活动分享率", value: "80%" }
    ],
    h5Url: "https://huodong3.3839.com/n/hykb/jingpai2/index.php?comm_id=99&imm=0",
    h5Img: "https://i.ibb.co/4gDtLsqq/Frame-1000006464-1x.png"
  },
  {
    id: "project-3",
    title: "好游快爆App-福利聚合页重构",
    bg: "福利入口分散（预约/下载/首发等），用户“能领但看不懂”，导致高频用户福利堆积。",
    badSolution: "集中露出各类入口，用限时/稀缺刺激点击。",
    goodSolution: "先解决“用户是否知道自己在拿什么”。把福利从“结果”拆成“过程”。",
    mechanisms: [
      "预约里程碑样式：明确来源与条件，当前阶段高亮，减少理解负担。",
      "首发礼包独立模块：不与其他混排，只解决新用户“第一步确定性”。",
      "状态区分：新增“进行中”与“已结束”福利活动状态。"
    ],
    results: [],
    h5Url: "https://www.3839.com/a/105882.htm?from=hykb",
    h5Img: "https://i.ibb.co/WNhnJsPR/20260115042509-239-1.jpg"
  }
];

export const QUICK_PROJECTS: QuickProject[] = [
  {
    tag: "平台级活动",
    title: "好游快爆 App - 7周年庆",
    desc: "搭建多层级参与机制，覆盖老用户回馈与社区共振。支撑高并发，建立可复用骨架。",
    data: "累计访问27w+，分享42w+，参与度提升10%。",
    link: "https://huodong3.i3839.com/n/hykb/seventh_year/index.php?imm=0"
  },
  {
    tag: "内容型产品",
    title: "好游快爆 App - 2023年度报告",
    desc: "将全年数据转译为可阅读内容，强化情感连接。数据产品情绪化表达。",
    data: "PV 30w+，分享占比70%。",
    link: "https://huodong3.3839.com/n/hykb/2023pandian/index.php?imm=1"
  },
  {
    tag: "IP体系",
    title: "好游快爆App-商店店长/店小二IP",
    desc: "构建平台拟人化IP，承载活动引导与福利提示。降低规则理解成本，提供稳定角色载体。",
    data: "累积获得62w+平台粉丝",
    link: "https://shop.i3839.com/?imm=1"
  },
  {
    tag: "政企协作",
    title: "象屿集团-大嶝小镇消费券",
    desc: "设计面向真实消费场域的优惠券机制。平衡用户体验与核销风控。",
    data: "累积发放60w消费券。",
    link: "https://mp.weixin.qq.com/s/P6Zv8tWYa71bja4oSDAGoA"
  }
];

export const COLLECTION: CollectionSystem[] = [
  {
    title: "ETF 大赛-赛事型产品体系",
    thinking: "将赛事拆解为“主赛+子活动+榜单+激励”，抽象化复用模板，以子活动来延长周期。",
    links: [
      { title: "西部证券｜ETF 夏季赛", url: "https://m.jiniutech.com/qs/xbzq/etfGame/index.html?id=bACtFgpK" },
      { title: "西部证券｜ETF 秋季赛", url: "https://shareh5.west95582.com/public/west-auth/index.html#/etf/entry2025" },
      { title: "信达集团｜多赛道实盘竞赛（ETF侧）", url: "https://m.jiniutech.com/qs/xdzq/ETF2025/index.html?id=VVAdhn1m&etfChannel=zq&shareLink=1" }
    ]
  },
  {
    title: "企微获客-低摩擦增长产品体系",
    thinking: "把“加企微”设计为任务流的一步（答题+领红包），而非强引导，降低决策阻力。",
    links: [
      { title: "华福证券｜企微迎新礼，答题领红包", url: "https://jcsc.hfzq.com.cn/h5/bees-v3/index.html?id=QVJxsRtH" },
      { title: "浙商证券｜浙礼一企，欢喜迎新", url: "https://jiniu.stocke.com.cn/h5/jqw-v2/index.html?id=PsbXZEw2#/" }
    ]
  },
  {
    title: "投教活动-内容型产品体系",
    thinking: "将高门槛知识拆解为“轻任务+即反馈”，利用徽章、抽奖增强正反馈。",
    links: [
      { title: "国新证券｜财商进阶·徽章寻宝", url: "https://m.jiniutech.com/qs/gxzq/csjj2025/index.html?id=rLukMRTK" },
      { title: "福建省｜防范非法金融答题活动", url: "https://m.jiniutech.com/hd/bees-wxAuth3/index.html?id=rFpz86mg&inviteCode=null&code=001LyEkl2Y0L0h4NtTnl22HHoQ0LyEkg&state=1" }
    ]
  }
];
