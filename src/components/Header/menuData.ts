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
    title: "定价",
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
    title: "立即购买 ↗",
    newTab: true,
    path: "/tutorials",
  },
];