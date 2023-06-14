import StarsReview from "@/c/StarsReview";

export default function Review({ className }) {
	return (
		<div className="product-rating clearfix">
			{/* Product Rating */}
			<div className="ratings">
				{/* Reviews Summary */}
				<div
					data-bv-show="rating_summary"
					data-bv-productid="19A30031OEM"
					data-bv-seo="false"
					data-bv-ready="true">
					<div className="bv_main_container w-100" style={{ minWidth: "100%" }}>
						<button
							id="ratings-summary"
							className="bv_main_container_row_flex w-100 d-block border-0"
							role="link"
							type="button"
							aria-expanded="false">
							<span className="bv_offscreen_text">
								4.4 out of 5 stars. Read reviews for average rating value is 4.4
								of 5. Read 313 Reviews Same page link.
							</span>
							<StarsReview />
							<div className="bv_avgRating_component_container notranslate">
								4.4
							</div>
							<div className="bv_numReviews_component_container">
								<span className="bv_numReviews_delimeter notranslate">
									&nbsp;|&nbsp;
								</span>
								<div className="bv_numReviews_text">313 Reviews </div>
							</div>
						</button>
						<div className="bv_main_container_row_normal">
							<div className="bv_percentRecommend_component_container">
								86 out of 105 (82%) reviewers recommend this product
							</div>
						</div>
						<div className="bv_main_container_line_break" />
						<div className="bv_main_container_CTA_row">
							<div className="bv_main_container_row_flex">
								<div className="bv_button_component_container" style={{}}>
									<button
										aria-label="Write a Review (opens pop-up)"
										type="button"
										className="bv_button_buttonFull "
										id="WAR">
										Write a review
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Reviews Summary */}
			</div>
		</div>
	);
}
