import Image from "next/image";
import Link from "next/link";
const CallToAction = () => {
  return (
    <section className="relative z-1 overflow-hidden bg-primary py-17.5 lg:py-22.5 xl:py-25">
      <div className="mx-auto w-full max-w-[585px] px-4 text-center sm:px-8 xl:px-0">
        <h2 className="mb-5 font-satoshi text-3xl font-bold -tracking-[1.6px] text-white lg:text-heading-4 xl:text-heading-2">
          立即体验我们的产品
        </h2>

        <p className="text-gray-2">
          我们的产品将为您带来前所未有的体验。创新的设计和强大的功能，让您的工作效率倍增。无论您是个人用户还是企业客户，都能在这里找到适合自己的解决方案。
        </p>

        <Link
          href="#"
          className="mt-7.5 inline-flex rounded-full bg-white px-7 py-3 font-satoshi font-medium -tracking-[0.2px] text-black hover:bg-opacity-90"
        >
          免费试用
        </Link>
      </div>

      {/* <!-- bg shapes --> */}
      <div className="hidden sm:block">
        <div className="absolute bottom-0 left-0 -z-1">
          <Image
            src="/images/cta/cta-grid-01.svg"
            alt="网格"
            width={376}
            height={376}
          />
        </div>
        <div className="absolute right-0 top-0 -z-1">
          <Image
            src="/images/cta/cta-grid-02.svg"
            alt="网格"
            width={376}
            height={376}
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-1">
          <Image
            src="/images/cta/cta-shape-01.svg"
            alt="形状"
            width={1010}
            height={404}
          />
        </div>
        <div className="absolute bottom-0 right-0 -z-1">
          <Image
            src="/images/cta/cta-shape-02.svg"
            alt="形状"
            width={935}
            height={404}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
