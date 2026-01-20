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
    desc: "通过用户行为、运营反馈与数据等，拆解真实动机，避免“看似正确但无人使用”的方案。"
  },
  {
    num: "02",
    title: "结构沉淀，支撑长期体验",
    desc: "将一次性方案抽象为通用结构与能力模块，使体验可以被持续复用、扩展与优化。"
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
    bg: "ETF交易存在较高的认知门槛，新手往往会存在“看懂概念”却不敢实际交易的情况。本项目通过搭建零风险模拟环境，让用户在试错中建立信心。",
    badSolution: "以结果指标为导向，通过曝光与奖励驱动用户完成既定的行为路径。",
    goodSolution: "以前置体验为切入点，通过模拟试错与机制设计，自然引导用户培养交易习惯。",
    mechanisms: [
      "还原真实：覆盖行情、下单、撤单等完整链路，实时模拟市场行情；",
      "长效激励机制：在时间维度设置周榜与总榜，在地域维度引入分行榜单奖励，推动用户长期参与；",
      "嵌入式投教：围绕实时市场资讯，提供决策参考并展示相关基金产品。"
    ],
    results: [
      { label: "累计参赛用户", value: "12w+" },
      { label: "占开户用户比", value: "50%" },
      { label: "卡户转化", value: "5000+" }
    ],
    h5Url: "https://mp.weixin.qq.com/s/sEQerIhlQa2dSPw7oKdC8w",
    h5Img: "https://pub-82355f44706248d19932b146a7c892b2.r2.dev/lulupicture.dpdns.org/4.png"
  },
  {
    id: "project-2",
    title: "好游快爆App-壕争夺",
    bg: "平台虚拟货币消耗场景不足，造成高活跃用户无法消耗资产，以节日促活、商店兑换为主的运营方式难以支撑长期活跃。",
    badSolution: "节日兑换/限时商城，固定价格换奖品。",
    goodSolution: "通过玩法化重构虚拟货币体系，引入竞争与不确定性来替代固定兑换，促进用户的可持续参与。",
    mechanisms: [
      "高价值奖励驱动：每期配置高价值实物奖励或稀缺游戏道具，刺激用户参与。",
      "阶段化赛程结构：赛程拆分为「待开启 / 争夺中 / 已结束 / 奖励公示」，以此降低用户的理解与参与门槛。",
      "竞拍式参与机制：以最低参与门槛 + 可追加投入为核心规则，叠加榜单反馈，持续放大竞争的动态博弈。"
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
    bg: "游戏福利的领取入口分散且领取状态无明确区分，导致用户福利可获得但理解成本较高。",
    badSolution: "集中露出各类入口，用限时/稀缺刺激点击。",
    goodSolution: "优先解决用户对福利的理解问题，将福利从一次性结果拆解为可感知、可参与的获取过程。",
    mechanisms: [
      "预约里程碑结构化呈现：清晰标注福利详情与解锁条件，当前阶段高亮展示，降低用户对进度与收益的理解成本。",
      "普发礼包模块独立：设置首发礼包模块独立展示，强化用户“第一步可获得性”的确定感。",
      "福利状态显性化：不同模块根据模块内容增加状态展示，帮助用户快速判断，提高决策效率。"
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
    desc: "以分层参与机制承载不同用户活跃度需求，并形成长期可复用的活动结构。",
    data: "累计访问27w+，分享42w+，参与度提升10%。",
    link: "https://huodong3.i3839.com/n/hykb/seventh_year/index.php?imm=0"
  },
  {
    tag: "内容型产品",
    title: "好游快爆App-2023年度报告",
    desc: "以「奇幻旅程」为叙事主线，将全年数据拆解为多个“国度”模块，用游戏化结构增强年度回顾的沉浸感与记忆点。",
    data: "PV 30w+，分享占比70%。",
    link: "https://huodong3.3839.com/n/hykb/2023pandian/index.php?imm=1"
  },
  {
    tag: "IP体系",
    title: "好游快爆App-商店店长/店小二IP",
    desc: "构建平台拟人化IP，承载活动引导与福利提示。在降低规则理解成本的同时，提供稳定角色载体。",
    data: "累积获得62w+平台粉丝",
    link: "https://shop.i3839.com/?imm=1"
  },
  {
    tag: "政企协作",
    title: "象屿集团-大嶝小镇消费券",
    desc: "从时间节奏与场景匹配入手，将优惠券的方法嵌入整体活动中。",
    data: "累积发放60w消费券。",
    link: "https://mp.weixin.qq.com/s/P6Zv8tWYa71bja4oSDAGoA"
  }
];

export const COLLECTION: CollectionSystem[] = [
  {
    title: "ETF 大赛-赛事型产品体系",
    thinking: "以赛事为核心单元，拆分主赛机制、配套子活动、榜单体系与激励规则，形成标准化模板。",
    links: [
      { title: "西部证券｜ETF 夏季赛", url: "https://m.jiniutech.com/qs/xbzq/etfGame/index.html?id=bACtFgpK" },
      { title: "西部证券｜ETF 秋季赛", url: "https://shareh5.west95582.com/public/west-auth/index.html#/etf/entry2025" },
      { title: "信达集团｜多赛道实盘竞赛（ETF侧）", url: "https://m.jiniutech.com/qs/xdzq/ETF2025/index.html?id=VVAdhn1m&etfChannel=zq&shareLink=1" }
    ]
  },
  {
    title: "企微获客-路径型获客产品体系",
    thinking: "不把“加企微”作为独立动作，而是嵌入用户正在完成的任务中，让转化发生在流程中。",
    links: [
      { title: "华福证券｜企微迎新礼，答题领红包", url: "https://jcsc.hfzq.com.cn/h5/bees-v3/index.html?id=QVJxsRtH" },
      { title: "浙商证券｜浙礼一企，欢喜迎新", url: "https://jiniu.stocke.com.cn/h5/jqw-v2/index.html?id=PsbXZEw2#/" }
    ]
  },
  {
    title: "游园会-场景化活动产品体系",
    thinking: "产品思路：将活动设计为可探索的沉浸式场景结构，用地图串联各个子玩法，提高用户关键节点的停留和参与。",
    links: [
      { title: "湘财证券｜智富嘉年华·湘遇 818", url: "https://wap.xcsc.com.cn/activity/cms/xiangcai8182025/index.html?id=QTsPgM5z#/" },
      { title: "好游快爆App｜《冲呀！饼干人：王国》探秘香草王国", url: "https://huodong3.i3839.com/n/hykb/bgr/index.php?imm=0" }
    ]
  },
  {
    title: "投教活动-内容型产品体系",
    thinking: "将复杂知识拆成低门槛任务，并给予明确反馈，帮助用户持续参与。",
    links: [
      { title: "国新证券｜财商进阶·徽章寻宝", url: "https://m.jiniutech.com/qs/gxzq/csjj2025/index.html?id=rLukMRTK" },
      { title: "福建省｜防范非法金融答题活动", url: "https://m.jiniutech.com/hd/bees-wxAuth3/index.html?id=rFpz86mg&inviteCode=null&code=001LyEkl2Y0L0h4NtTnl22HHoQ0LyEkg&state=1" }
    ]
  }
];
