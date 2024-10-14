import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='relative z-1 mt-auto overflow-hidden bg-black py-17.5 lg:py-22.5 xl:py-27.5'>
			<div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
				{/* <!-- footer menu start --> */}
				<div className='flex flex-wrap gap-10 lg:justify-between xl:flex-nowrap xl:gap-20'>
					<div className='w-full max-w-[275px]'>
						<a href='index.html'>
							<Image
								src='/images/logo/logo-light.svg'
								alt='Logo'
								width={214}
								height={40}
							/>
						</a>
						<p className='mt-5 text-gray-5'>
							Copyright © 2015-2024 初映Matrix 版权所有    <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:underline">沪ICP备2023021508号-2</a>
						</p>

						<ul className='mt-11 flex items-center gap-2'>
							<li>
								<a
									href='#'
									aria-label='QQ Social Link'
									className='flex duration-200 ease-out hover:text-white'
								>
									<Image
										src='/images/features/qq.svg'
										alt='QQ'
										width={32}
										height={32}
									/>
								</a>
							</li>

							<li>
								<a
									href='#'
									aria-label='微信'
									className='flex duration-200 ease-out hover:text-white'
								>
									<Image
										src='/images/features/Wechat.svg'
										alt='Dev'
										width={32}
										height={32}
									/>
								</a>
							</li>

							<li>
								<a
									href='#'
									aria-label='tiktok'
									className='flex duration-200 ease-out hover:text-white'
								>
									<Image
										src='/images/features/douyin.svg'
										alt='tiktok'
										width={32}
										height={32}
									/>
								</a>
							</li>
						</ul>
					</div>

					<div className='flex w-full flex-col justify-between gap-10 sm:w-auto sm:flex-row xl:gap-20'>
						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								产品
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										功能
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										集成
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										价格与方案
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										更新日志
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								资源
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										我们的博客
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										热图
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										联盟计划
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										集成
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								产品
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										功能
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										集成
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										价格与方案
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										更新日志
									</a>
								</li>
							</ul>
						</div>

						<div className='w-full sm:w-auto'>
							<h2 className='mb-5 font-satoshi text-lg font-bold -tracking-[0.2px] text-white'>
								公司
							</h2>

							<ul className='flex flex-col gap-3'>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										关于我们
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										我们的故事
									</a>
								</li>
								<li>
									<a
										className='text-gray-5 duration-200 ease-out hover:text-white'
										href='#'
									>
										与我们合作
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- footer menu end --> */}
			</div>

			{/* <!-- bg shapes --> */}
			<div className='hidden sm:block'>
				<div className='absolute bottom-0 left-0 -z-1'>
					<Image
						src='/images/footer/footer-grid-01.svg'
						alt='grid'
						width={305}
						height={305}
					/>
				</div>
				<div className='absolute right-0 top-0 -z-1'>
					<Image
						src='/images/footer/footer-grid-02.svg'
						alt='grid'
						width={305}
						height={305}
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
