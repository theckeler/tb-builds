import ResponsiveImage from "./ResponsiveImage";

export default function HeroPromo({ content, img, style }) {
	return (
		<div className="hero-caro-container hero-content-right" style={style}>
			<div
				className="position-relative"
				style={{ minHeight: "550px", overflow: "hidden" }}>
				<ResponsiveImage
					src={img.src}
					className={`position-absolute ${img.className}`}
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
					<span className="label-1">{content.catTitle}</span>
				</div>
				<div className="card-title">
					<p
						className="display-1"
						style={{
							fontSize: 36,
							lineHeight: "1.05",
							//	textTransform: "uppercase",
						}}>
						<span dangerouslySetInnerHTML={{ __html: content.title }} />
					</p>
				</div>
				<div className="copy-block">
					{content.subTitle && (
						<p
							className="hero-body"
							style={{ fontSize: 22, lineHeight: "1.05" }}
							dangerouslySetInnerHTML={{ __html: content.subTitle }}
						/>
					)}
					{content.copy && (
						<p
							className="hero-body font-weight-normal"
							dangerouslySetInnerHTML={{ __html: content.copy }}
						/>
					)}
					{content.details && (
						<p
							className="hero-body font-weight-normal mb-0"
							dangerouslySetInnerHTML={{ __html: content.details }}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
