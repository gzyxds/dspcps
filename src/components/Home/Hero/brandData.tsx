/*
 * @Author: gzyxds 348310633@qq.com
 * @Date: 2024-10-15 14:50:41
 * @LastEditors: 枭格科技 348310633@qq.com
 * @LastEditTime: 2024-11-07 22:12:57
 * @FilePath: \dspcps\src\components\Home\Hero\brandData.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Brand = {
	id: number;
	name: string;
	link: string;
	image: JSX.Element;
};

const i = 1;

const brandData: Brand[] = [
	{
		id: 1 + i,
		name: "NextJSTemplates",
		link: "https://play.urlnet.cn",
		image: (
			<img src="/images/icon/dy.svg" alt="NextJSTemplates" width="101" height="28" />
		),
	},
	{
		id: 1 + i,
		name: "FormBold",
		link: "https://play.urlnet.cn",
		image: (
			<img src="/images/icon/快手.svg" alt="FormBold" width="153" height="28" />
		),
	},
	{
		id: 1 + i,
		name: "Lineicons",
		link: "https://play.urlnet.cn",
		image: (
			<img src="/images/icon/视频号.svg" alt="Lineicons" width="173" height="28" />
		),
	},
	{
		id: 1 + i,
		name: "Uideck",
		link: "https://play.urlnet.cn",
		image: (
			<img src="/images/icon/小红书.svg" alt="Uideck" width="119" height="28" />
		),
	},
	{
		id: 1 + i,
		name: "Graygrids",
		link: "https://play.urlnet.cn",
		image: (
			<img src="/images/icon/企业微信.svg" alt="Graygrids" width="134" height="28" />
		),
	},
	{
		id: 1 + i,
		name: "SaaSBold",
		link: "https://play.urlnet.cn",
		image: (
			<img src="/images/icon/tiktok.svg" alt="SaaSBold" width="154" height="28" />
		),
	},
];

export default brandData;
