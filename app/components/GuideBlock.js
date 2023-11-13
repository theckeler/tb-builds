import ResponsiveImage from "@/components/ResponsiveImage";

export default function GuideBlock({ block }) {
	return (
		<a
			href="https://www.troybilt.com/en_US/single-stage-snow-blowers/squall-123r-snow-blower/31P-2M5G723.html"
			className="no-underline hover:no-underline hover:pointer p-2 flex flex-col h-full">
			<p className="text-center p-2 mb-0 bg-black text-white">
				{block.heading}
			</p>

			<div className="relative bg-white p-2">
				<img src={block.img.src} alt="" id="" className="w-full h-auto" />
			</div>

			<p className="text-xl mt-2">{block.title}</p>
			<p className="">{block.price}</p>
			<p className="">{block.copy}</p>
			<div className="mt-auto">
				<button className="btn bg-primary w-full text-white mt-2">
					{block.button.title}
				</button>
			</div>
		</a>
	);
}
