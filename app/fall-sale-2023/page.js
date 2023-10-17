"use client";

import SearchResults from "./SearchResults";
import HeroPromo from "../components/HeroPromo";

export default function Promotion({}) {
	return (
		<div id="main">
			<link
				rel="stylesheet"
				href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/search.css"
			/>

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
									<HeroPromo
										{...{
											content: {
												//saleTitle: "Troy-Bilt Fall Sale",
												title: "Troy-Bilt Fall Sale",
												subTitle:
													"Shop a wide selection of discounted products",
											},
											img: {
												src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/fall-sale-2023/31AS6KM2B66_Storm2425_env2.jpg",
												style: { objectFit: "cover", objectPosition: "middle" },
											},
										}}
									/>
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
