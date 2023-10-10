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

			<div className="pl-browse-1 pl-browse mt-2">
				<div className="cat-landing-1 cat-landing">
					<div
						className="hero-caro slick-initialized slick-slider slick-dotted"
						id="slider0">
						<div className="slick-list draggable">
							<div className="slick-track" style={{ opacity: 1 }}>
								<div
									className="hero slick-slide slick-current slick-active"
									data-slick-index={0}
									aria-hidden="false"
									style={{
										position: "relative",
										left: 0,
										top: 0,
										zIndex: 999,
										opacity: 1,
									}}
									role="tabpanel"
									id="slick-slide00"
									aria-describedby="slick-slide-control00"
									tabIndex={0}>
									<div className="hero-caro-container hero-content-right">
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
												className="img-fluid"
												data-type="defaultimage"
												src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw15a2738b/images/product-line-landing/Main-Carousel/PLLSNOW_StormTracker2690_desktop_1540x630.jpg"
											/>
										</picture>
										<div className="text-block bg-primary">
											<div className="intro-block">
												<span className="label-1">Winter Sale - Maybe?</span>
											</div>
											<div className="card-title">
												<p className="display-1">
													<span style={{ fontSize: 36 }}>
														$xx to $xx off blah blah products, come n get em now
													</span>
												</p>
											</div>
											<div className="copy-block">
												<div className="hero-body">
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Donec malesuada mauris iaculis, vehicula dolor
													quis, aliquam arcu. Aliquam accumsan, est et volutpat
													egestas, dui felis tincidunt est, in finibus neque
													turpis non lectus.
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
		</div>
	);
}
