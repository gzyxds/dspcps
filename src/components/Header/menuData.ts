/*
 * @Author: gzyxds 348310633@qq.com
 * @Date: 2024-10-15 14:50:41
 * @LastEditors: gzyxds 348310633@qq.com
 * @LastEditTime: 2024-11-07 21:30:01
 * @FilePath: \dspcps\src\components\Header\menuData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Menu } from "@/types/menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "首页",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "功能",
    newTab: false,
    path: "#features",
  },
  {
    id: 2,
    title: "体系",
    newTab: false,
    path: "#pricing",
  },
  {
    id: 3,
    title: "博客",
    newTab: false,
    path: "#blog",
  },
  {
    id: 4,
    title: "新手必看",
    newTab: false,
    submenu: [
      {
        id: 4.1,
        title: "快速入门",
        newTab: false,
        path: "/quick-start",
      },
      {
        id: 4.2,
        title: "常见问题",
        newTab: false,
        path: "/faq",
      },
      {
        id: 4.3,
        title: "使用教程",
        newTab: false,
        path: "/tutorials",
      }
    ]
  },
  {
    id: 5,
    title: "立即申请↗",
    newTab: true,
    path: "https://play.urlnet.cn/",
  },
];