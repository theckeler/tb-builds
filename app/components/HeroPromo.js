import ResponsiveImage from "../components/ResponsiveImage";

export default function HeroPromo({ content, img }) {
	return (
		<div className="hero-caro-container hero-content-right">
			<div
				className="position-relative"
				style={{ minHeight: "550px", overflow: "hidden" }}>
				<ResponsiveImage
					src={img.src}
					className="w-100 h-100 position-absolute"
					style={{ ...img.style }}
					alt=""
					hero
					id="promo-hero"
				/>
			</div>
			<div
				className="text-block bg-primary"
				style={{ top: "0 !important", transform: "initial" }}>
				<div className="intro-block">
					<span className="label-1">{content.saleTitle}</span>
				</div>
				<div className="card-title">
					<p
						className="display-1"
						style={{
							fontSize: 36,
							lineHeight: "1.05",
							textTransform: "uppercase",
						}}>
						<span dangerouslySetInnerHTML={{ __html: content.title }} />
					</p>
				</div>
				<div className="copy-block">
					<div
						className="hero-body"
						style={{ fontSize: 22, lineHeight: "1.05" }}
						dangerouslySetInnerHTML={{ __html: content.subTitle }}
					/>
					<div className="hero-body">
						<p
							className="font-weight-normal"
							dangerouslySetInnerHTML={{ __html: content.copy }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
