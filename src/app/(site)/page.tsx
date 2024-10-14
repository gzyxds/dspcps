import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {     // 元数据
	title: `初映Matrix_短视频cps_短剧分销平台_短剧分销cps_短剧推广授权`,  // 标题		
	description: `初映Matrix是为短视频创作者提供IP授权、短剧分发、游戏分发、短视频cps、短剧分销平台、短剧分销cps、短剧推广授权等多渠道多平台的变现项目`,  // 描述
	openGraph: {
		type: "website",   // 类型
		title: `初映Matrix_短视频cps_短剧分销平台_短剧分销cps_短剧推广授权`,   // 标题
		description: `初映Matrix是为短视频创作者提供IP授权、短剧分发、游戏分发、短视频cps、短剧分销平台、短剧分销cps、短剧推广授权等多渠道多平台的变现项目`,  // 描述
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",  // 图片	
	},
	twitter: {
		card: "summary_large_image",  // 卡片类型
		title: `初映Matrix_短视频cps_短剧分销平台_短剧分销cps_短剧推广授权`,  // 标题
		description: `初映Matrix是为短视频创作者提供IP授权、短剧分发、游戏分发、短视频cps、短剧分销平台、短剧分销cps、短剧推广授权等多渠道多平台的变现项目`,  // 描述
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",  // 图片	
	},
};

export default function HomePage() {
	return (
		<main>
			<Home />
		</main>
	);
}
