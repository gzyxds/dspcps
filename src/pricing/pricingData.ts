/*
 * @Author: gzyxds 348310633@qq.com
 * @Date: 2024-10-15 14:50:41
 * @LastEditors: gzyxds 348310633@qq.com
 * @LastEditTime: 2024-11-07 21:09:07
 * @FilePath: \dspcps\src\pricing\pricingData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Price } from "@/types/priceItem";

export const pricingData: Price[] = [
  {
    stripePriceId: "price_1NXczHKHkNnLFPXY2YK3Xj8L",
    unit_amount: 0,
    nickname: "创作者",
    description:
      "适合新手分销商的基础等级。",
    subtitle: "基础分销",
    includes: [
     "无级差分成",
      "无平级分成",
      "基础功能开放",
    ],
    icon: `/images/pricing/pricing-icon-01.svg`,
  },
  {
    stripePriceId: "price_1NXd0bKHkNnLFPXYgXGHX7Yd",
    unit_amount: 0,
    nickname: "团长",
    description:
      "为成长中的分销商提供更多权益和发展机会。",
    subtitle: "进阶分销",
    includes: [
      "邀请5人可晋升",
      "自身收益达到50元可晋升",
      "下级团队收益达到100元可晋升",
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
      "为资深分销商提供更多权益和功能。",
    subtitle: "资深分销",
    includes: [
      "邀请20人可晋升",
      "自身收益达到200元可晋升",
      "下级团队收益达到500元可晋升",
    ],
    icon: `/images/pricing/pricing-icon-03.svg`,
  },
];
