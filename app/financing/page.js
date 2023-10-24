"use client";

import HeroPromo from "@/components/HeroPromo";

export default function Promotion({}) {
	return (
		<div id="main">
			<link
				rel="stylesheet"
				href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/search.css"
			/>
			{/* <div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="search-breadcrumb">
							<div className="row">
								<div className="col">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="/en_US/search?cgid=discounted-equipment">Sale</a>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className="" style={{ opacity: 1 }}>
				<div
					className="hero pb-0"
					data-slick-index={0}
					aria-hidden="false"
					style={{
						position: "relative",
						left: 0,
						top: 0,
						zIndex: 999,
						opacity: 1,
					}}>
					<HeroPromo
						style={{ backgroundColor: "#d2d3d5" }}
						{...{
							content: {
								catTitle: "FINANCING",
								title: "Financing available for online purchases.<sup>*</sup>",
								copy: "The Troy-Bilt credit card allows you to shop for new Troy-Bilt equipment, parts and accessories with Special Financing<sup>*</sup>",
								details: `<sup>*</sup>Restrictions apply. <a data-target="#financing-modal" data-toggle="modal" href="#" style="color:white" title="Click for details" tabindex="0">Click here</a> for details.`,
							},
							img: {
								src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/financing/tb-cc.png",
								className: "h-100",
								style: { objectFit: "contain", width: "auto !important" },
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
