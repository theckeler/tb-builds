"use client";

import SearchResults from "./SearchResults";

export default function Promotion({}) {
	return (
		<div id="main">
			<link
				rel="stylesheet"
				href="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/en_US/v1696935959775/css/search.css"
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

			<div className="pl-browse-1 pl-browse mt-3">
				<div className="cat-landing-1 cat-landing mb-0">
					<div className="hero-caro slick-initialized" style={{}}>
						<div className="slick-list">
							<div className="" style={{ opacity: 1 }}>
								<div
									className="hero "
									data-slick-index={0}
									aria-hidden="false"
									style={{
										position: "relative",
										left: 0,
										top: 0,
										zIndex: 999,
										opacity: 1,
									}}>
									<div
										className="hero-caro-container hero-content-right"
										style={{ minHeight: "450px", overflow: "hidden" }}>
										<picture>
											<source
												data-type="desktopimage"
												media="(min-width: 1025px)"
												srcSet="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw15a2738b/images/product-line-landing/Main-Carousel/PLLSNOW_StormTracker2690_desktop_1540x630.jpg"
											/>
											<source
												data-type="tabletimage"
												media="(min-width: 768px)"
												srcSet="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw0061b7b5/images/product-line-landing/Main-Carousel/PLLSNOW_StormTracker2690_mobile_805x540.jpg"
											/>
											<source
												data-type="mobileimage"
												media="(max-width: 767px)"
												srcSet="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw0061b7b5/images/product-line-landing/Main-Carousel/PLLSNOW_StormTracker2690_mobile_805x540.jpg"
											/>
											<img
												alt="Person snow blowing their driveway"
												className="w-100 h-100 position-absolute"
												data-type="defaultimage"
												style={{ objectFit: "cover" }}
												src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw15a2738b/images/product-line-landing/Main-Carousel/PLLSNOW_StormTracker2690_desktop_1540x630.jpg"
											/>
										</picture>
										<div
											className="text-block bg-primary"
											style={{ top: "0 !important", transform: "initial" }}>
											<div className="intro-block">
												<span className="label-1">2023 Winter Sale</span>
											</div>
											<div className="card-title">
												<p className="display-1">
													<span style={{ fontSize: 36 }}>
														$50 Select Snow Blowers
													</span>
												</p>
											</div>
											<div className="copy-block">
												<div className="hero-body">
													Valid October 19, 2023 – November 11, 2023
												</div>
											</div>
											{/* <div className="hero-cta">
												<a
													className="btn btn-secondary"
													href="https://www.troybilt.com/en_US/product-finder-snow-blowers-tb.html"
													tabIndex={0}>
													Start the Quiz
												</a>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SearchResults />

			<div className="container mt-4" style={{ fontSize: "12px" }}>
				<p>
					<strong>$50 off Troy-Bilt® Storm™ 2420 Two-Stage Snow Blower.</strong>
					<br />
					Offer valid 10/19/23 at 12.00 a.m. ET – 11/11/23 at 11:59 pm ET, at
					troybilt.com and select retail locations. Cannot be combined with any
					other discount or promotion. Discount does not apply to tax or
					shipping and handling. If you return the merchandise, the value of
					this promotion is not refunded or credited to your account. Does not
					apply to prior or future purchases. No cash value, except where
					prohibited. Promotion is subject to change. Other restrictions may
					apply.
				</p>
				<p>
					<strong>$50 off Troy-Bilt® Storm™ 2620 Two-Stage Snow Blower.</strong>
					<br />
					Offer valid 10/19/23 at 12.00 a.m. ET – 11/11/23 at 11:59 pm ET, at
					troybilt.com and select retail locations. Cannot be combined with any
					other discount or promotion. Discount does not apply to tax or
					shipping and handling. If you return the merchandise, the value of
					this promotion is not refunded or credited to your account. Does not
					apply to prior or future purchases. No cash value, except where
					prohibited. Promotion is subject to change. Other restrictions may
					apply.
				</p>
				<p>
					<strong>$50 off Troy-Bilt® Storm™ 2890 Two-Stage Snow Blower.</strong>
					<br />
					Offer valid 10/19/23 at 12.00 a.m. ET – 11/11/23 at 11:59 pm ET, at
					troybilt.com and select retail locations. Cannot be combined with any
					other discount or promotion. Discount does not apply to tax or
					shipping and handling. If you return the merchandise, the value of
					this promotion is not refunded or credited to your account. Does not
					apply to prior or future purchases. No cash value, except where
					prohibited. Promotion is subject to change. Other restrictions may
					apply.
				</p>
				<p>
					<strong>$50 off Troy-Bilt® Storm™ 3090 Two-Stage Snow Blower.</strong>
					<br />
					Offer valid 10/19/23 at 12.00 a.m. ET – 11/11/23 at 11:59 pm ET, at
					troybilt.com and select retail locations. Cannot be combined with any
					other discount or promotion. Discount does not apply to tax or
					shipping and handling. If you return the merchandise, the value of
					this promotion is not refunded or credited to your account. Does not
					apply to prior or future purchases. No cash value, except where
					prohibited. Promotion is subject to change. Other restrictions may
					apply.
				</p>
			</div>
		</div>
	);
}
