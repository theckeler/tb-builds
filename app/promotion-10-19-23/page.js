"use client";

import Button from "@/components/Button";
import SearchResults from "./SearchResults";
import ResponsiveImage from "../components/ResponsiveImage";

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

			<div className="pl-browse-1 pl-browse mt-3">
				<div className="cat-landing-1 cat-landing mb-0">
					<div className="hero-caro slick-initialized pb-0 mb-0" style={{}}>
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
									<div className="hero-caro-container hero-content-right">
										<div
											className="position-relative"
											style={{ minHeight: "450px", overflow: "hidden" }}>
											<ResponsiveImage
												src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/promotion-10-19-23/31CM6CP3B66_Storm2620_env.jpg"
												className="w-100 h-100 position-absolute"
												style={{ objectFit: "cover" }}
												alt=""
												hero
												id="promo-hero"
											/>
										</div>
										<div
											className="text-block bg-primary"
											style={{ top: "0 !important", transform: "initial" }}>
											<div className="intro-block">
												<span className="label-1">Fall Sale</span>
											</div>
											<div className="card-title">
												<p
													className="display-1"
													style={{ fontSize: 36, lineHeight: "1.05" }}>
													<span>
														Save $50 on select snow blowers<sup>*</sup>
													</span>
												</p>
											</div>
											<div className="copy-block">
												<div
													className="hero-body"
													style={{ fontSize: 22, lineHeight: "1.05" }}>
													Limited time offer
												</div>
												<div className="hero-body">
													<p className="font-weight-normal">
														Also available at select retailer locations, such as
														Menards<sup>®</sup>, Do It Best<sup>®</sup>, True
														Value<sup>®</sup>, United Hardware<sup>®</sup>,
														Blain’s Farm and Fleet<sup>®</sup>, Northern Tool
														<sup>®</sup>, and Orgill<sup>®</sup> stores
													</p>

													{/* <Button
														copy="Find a Store"
														className="bg-secondary text-white"
														url="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Stores-FindService"
													/> */}
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
					<strong>
						<sup>*</sup>$50.00 off full retail price of Troy-Bilt® Storm™ 2420
						Two-Stage Snow Blower, Troy-Bilt® Storm™ 2620 Two-Stage Snow Blower,
						Troy-Bilt® Storm™ 2890 Two-Stage Snow Blower and Troy-Bilt® Storm™
						3090 Two-Stage Snow Blower.
					</strong>
					<br />
					Offer valid 10/19/23 – 11/11/23 at select retail locations and on
					shipments in the US 48 contiguous states on troybilt.com. Cannot be
					combined with any other discount or promotion. Discount does not apply
					to tax or shipping and handling. If you return the merchandise, the
					value of this promotion is not refunded or credited to your account.
					Does not apply to prior or future purchases. No cash value, except
					where prohibited. Promotion is subject to change. Other restrictions
					may apply.
				</p>
				{/* <p>
					<strong>
						$50.00 off full retail price of Troy-Bilt® Storm™ 2620 Two-Stage
						Snow Blower, Troy-Bilt® Storm™ 2890 Two-Stage Snow Blower and
						Troy-Bilt® Storm™ 3090 Two-Stage Snow Blower.
					</strong>
					<br />
					Offer valid 10/19/23 – 11/30/23, at troybilt.com and select retail
					locations. Cannot be combined with any other discount or promotion.
					Discount does not apply to tax or shipping and handling. If you return
					the merchandise, the value of this promotion is not refunded or
					credited to your account. Does not apply to prior or future purchases.
					No cash value, except where prohibited. Promotion is subject to
					change. Other restrictions may apply.
				</p> */}
			</div>
		</div>
	);
}
