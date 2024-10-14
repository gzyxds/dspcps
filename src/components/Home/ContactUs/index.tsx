import React from 'react';

interface ProcessStep {
  title: string;
  subtitle: string;
}

const processSteps: ProcessStep[] = [
  { title: "注册账号", subtitle: "REGISTER AN ACCOUNT" },
  { title: "登入授权", subtitle: "LOGIN AUTHORIZATION" },
  { title: "发布创作", subtitle: "PUBLISH CREATION" },
  { title: "获取收益", subtitle: "EARN INCOME" },
  { title: "佣金结算", subtitle: "COMMISSION SETTLEMENT" },
];

export default function EntryProcess() {
  return (
    <section className="relative z-10 overflow-hidden bg-[linear-gradient(90deg,#F7E8F3_0%,#E0E0FC_100%)] py-17.5 dark:bg-gradient-to-t dark:from-gray-dark dark:to-gray-dark lg:py-[100px]">
      <div className="container mx-auto w-full max-w-[1170px]">
        <div className="text-center mb-12">
          <h2 className="mb-4 font-satoshi text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-heading-2">
            剧分钱入驻流程
          </h2>
          <p className="text-xl text-body dark:text-gray-4">
            ENTRY PROCESS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-dark dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-body dark:text-gray-4">
                {step.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}