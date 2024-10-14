"use client";
import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { pricingData } from "@/pricing/pricingData";
import PriceItem from "./PriceItem";


const Pricing = () => {

  return (
    <section
      id="pricing"
      className="overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5"
    >
      {/* <!-- section title --> */}
      <SectionHeader
        title={"分销等级体系"}
        description="我们提供多层次的分销等级体系，满足不同阶段分销商的需求。从创作者到合伙人，每个等级都有独特的佣金结构和升级机会，助您在分销事业中不断成长。"
      />

      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {pricingData &&
            pricingData.map((price, key) => (
              <PriceItem
                plan={price}
                key={key}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
