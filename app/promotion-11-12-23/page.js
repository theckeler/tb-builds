"use client";

// import Button from "@/components/Button";
import SearchResults from "./SearchResults";
import ResponsiveImage from "../../components/ResponsiveImage";
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

			<div className="pl-browse-1 pl-browse mt-3">
				<div className="cat-landing-1 cat-landing mb-0">
					<div className="hero-caro slick-initialized" style={{}}>
						<div className="slick-list">
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
										{...{
											content: {
												catTitle: "Winter Sale",
												title: "Limited Time Offers:",
												subTitle:
													"Save $100 on the Storm 2420<sup>*</sup><br />Save $50 on Other Select Models<sup>**</sup>",
												copy: "Also available at select retailer locations, such as Menards<sup>®</sup>, Do It Best<sup>®</sup>, True Value<sup>®</sup>, United Hardware<sup>®</sup>, Blain’s Farm and Fleet<sup>®</sup>, Northern Tool<sup>®</sup>, and Orgill<sup>®</sup> stores",
											},
											img: {
												src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/promotion-10-19-23/31CM6CP3B66_Storm2620_env.jpg",
												className: "h-100 w-100",
												style: { objectFit: "cover", objectPosition: "top" },
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
						<sup>*</sup>$100.00 off full retail price of Troy-Bilt® Storm™2420
						Two-Stage Snow Blower.
					</strong>{" "}
					Offer valid 11/12/23 – 12/2/23 at select retail locations and on
					shipments in the US 48 contiguous states on troybilt.com. Cannot be
					combined with any other discount or promotion. Discount does not apply
					to tax or shipping and handling. If you return the merchandise, the
					value of this promotion is not refunded or credited to your account.
					Does not apply to prior or future purchases. No cash value, except
					where prohibited. Promotion is subject to change. Other restrictions
					may apply.
				</p>
				<p>
					<strong>
						<sup>**</sup>$50.00 off full retail price of Troy-Bilt® Storm™ 2620
						Two-Stage Snow Blower, Troy-Bilt® Storm™ 2890 Two-Stage Snow Blower
						and Troy-Bilt® Storm™ 3090 Two-Stage Snow Blower.
					</strong>{" "}
					Offer valid 11/12/23 – 11/30/23 at select retail locations and on
					shipments in the US 48 contiguous states on troybilt.com. Cannot be
					combined with any other discount or promotion. Discount does not apply
					to tax or shipping and handling. If you return the merchandise, the
					value of this promotion is not refunded or credited to your account.
					Does not apply to prior or future purchases. No cash value, except
					where prohibited. Promotion is subject to change. Other restrictions
					may apply.
				</p>
			</div>
		</div>
	);
}
