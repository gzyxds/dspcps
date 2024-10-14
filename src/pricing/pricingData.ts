import { Price } from "@/types/priceItem";

export const pricingData: Price[] = [
  {
    stripePriceId: "price_1NXczHKHkNnLFPXY2YK3Xj8L",
    unit_amount: 0,
    nickname: "创作者",
    description:
      "适合初级分销商的基础等级。",
    subtitle: "初级分销",
    includes: [
      "直推一级佣金10%",
      "间推二级佣金5%",
      "无极差佣金",
      "无平级佣金",
      "基础功能开放",
    ],
    icon: `/images/pricing/pricing-icon-01.svg`,
  },
  {
    stripePriceId: "price_1NXd0bKHkNnLFPXYgXGHX7Yd",
    unit_amount: 0,
    nickname: "团长",
    description:
      "为成长中的分销商提供更多佣金和更大的发展空间。",
    subtitle: "中级分销",
    includes: [
      "直推一级佣金15%",
      "间推二级佣金10%",
      "邀请5人可升级",
      "自身收益达到50元可升级",
      "下级团队收益达到100元可升级",
    ],
    icon: `/images/pricing/pricing-icon-02.svg`,
    icon2: `/images/pricing/pricing-icon-02-2.svg`,
    active: true,
  },
  {
    stripePriceId: "price_1NXd1tKHkNnLFPXYlYfuIdZq",
    unit_amount: 0,
    nickname: "合伙人",
    description:
      "为高级分销商提供最高级别的佣金和全面的功能。",
    subtitle: "高级分销",
    includes: [
      "直推一级佣金30%",
      "间推二级佣金15%",
      "平级一级佣金5%",
      "平级二级佣金3%",
      "邀请20人可升级",
      "自身收益达到200元可升级",
      "下级团队收益达到500元可升级",
    ],
    icon: `/images/pricing/pricing-icon-03.svg`,
  },
];
