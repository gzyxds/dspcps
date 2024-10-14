"use client";
import React, { useState } from "react";
import faqData from "./faqData";
import FaqItem from "./FaqItem";
import SectionHeader from "@/components/Common/SectionHeader";

// FAQ组件：显示常见问题解答部分
const FAQ = () => {
	// 状态：当前激活的FAQ项目
	const [activeFaq, setActiveFaq] = useState<number | string>(1);

	// 处理FAQ项目的切换
	const handleFaqToggle = (id: number | string) => {
		activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
	};

	return (
		// FAQ部分的主容器
		<section className='overflow-hidden bg-gray-1 py-17.5 dark:bg-black lg:py-22.5 xl:py-27.5'>
			{/* 部分标题 */}
			<SectionHeader
				title={"常见问题"}
				description='我们收集了用户最常问的问题，希望能为您提供快速、准确的解答。如果您有其他疑问，欢迎随时联系我们的客户服务团队。'
			/>

			{/* FAQ内容容器 */}
			<div className='mx-auto w-full max-w-[662px] px-4 sm:px-8 xl:px-0'>
				<div className='flex flex-col gap-4 '>
					{/* FAQ项目列表 */}
					{faqData?.map((faq, key) => (
						<FaqItem
							key={key}
							faq={faq}
							handleFaqToggle={handleFaqToggle}
							activeFaq={activeFaq}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQ;
