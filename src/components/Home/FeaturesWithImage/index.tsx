import { FeatureWithImg } from "@/types/featureWithImg";
import featureItemData from "./featuresData";
import FeatureItem from "./FeatureItem";
import SectionHeader from "@/components/Common/SectionHeader";

const FeaturesWithImage = () => {
	return (
		<section className='overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5'>
			{/* <!-- section title --> */}
			<SectionHeader
				title={"专注 · 专业 · 专心"}
				description='以创新为发展之源，打造企业的核心竞争力'
			/>

			<div className='mx-auto w-full max-w-[1040px] px-4 sm:px-8 xl:px-0'>
				{featureItemData?.map((item: FeatureWithImg, key: number) => (
					<FeatureItem data={item} key={key} />
				))}
			</div>
		</section>
	);
};

export default FeaturesWithImage;
