"use client";

export default function SearchResults({}) {
	return (
		<div className="container search-results">
			<div className="d-md-none">
				<wainclude url="/on/demandware.store/Sites-troybilt-Site/en_US/Dealer-ShowSelectedDealer?region=PLP"></wainclude>
			</div>
			<div className="row">
				<div className="tab-content col-12">
					<div
						className="tab-pane container active"
						id="product-search-results"
						role="tabpanel">
						<div className="row result-header">
							<div className="result-count col-12 "></div>
						</div>
						<div className="row grid-header">
							<div className="col-6 col-lg-8">
								<button
									type="button"
									className="btn btn-filter filter-results col-12 d-md-none">
									Filter By
									<i>
										<img
											className="icon icon-filter "
											src="/on/demandware.static/Sites-troybilt-Site/-/default/dwaaada764/images/svg-icons/icon-filter.svg"
											alt=""
										/>
									</i>
								</button>
								<div className="filter-bar d-none d-md-inline-block"></div>
							</div>
							<div className="col-6 col-lg-4 text-right">
								<span className="item-count">23 Items</span>
								<div className="select-wrapper">
									<select
										id="sort-order"
										name="sort-order"
										className="custom-select"
										aria-label="Sort By:">
										<option
											className="popularity-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=Sort%20by%20Popularity&start=0&sz=6"
											data-id="popularity-sort">
											Sort By: Most Popular
										</option>
										<option
											className="price-high-low-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=Price%20(High%20to%20Low)&start=0&sz=6"
											data-id="price-high-low-sort">
											Sort By: Price (High to Low)
										</option>
										<option
											className="price-low-high-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=Price%20(Low%20to%20High)&start=0&sz=6"
											data-id="price-low-high-sort">
											Sort By: Price (Low to High)
										</option>
										<option
											className="name-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=name&start=0&sz=6"
											data-id="name-sort">
											Sort By: Sort by Name (A-Z)
										</option>
									</select>
									<span className="selector" />
								</div>
							</div>
							<div className="filter-bar mobile d-md-none col-12"></div>
						</div>
						<div className="row">
							<div
								className="refinement-bar col-md-3"
								style={{ display: "none" }}>
								<div className="filter-header">
									<div className="header-bar d-md-none clearfix">
										<div className="pull-left d-md-none">
											<h3>Filter By</h3>
										</div>
										<button className="pull-right close">
											<span aria-hidden="true">
												<img
													className="icon icon-close "
													src="/on/demandware.static/Sites-troybilt-Site/-/default/dw55056f8e/images/svg-icons/icon-close.svg"
													alt="close"
												/>
											</span>
										</button>
									</div>
								</div>
								<div>
									<div className="refinements">
										<div className="card   collapsible-xl refinement refinement-equipment-type">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Equipment Type Link"
													aria-expanded="false"
													aria-controls="Equipment Type Content"
													tabIndex={0}>
													Equipment Type
												</span>
											</div>
											<div
												className="card-body"
												id="Equipment Type Content"
												role="region"
												aria-labelledby="Equipment Type Link">
												<ul className="values content">
													<li
														title="Refine by Equipment Type: Chainsaw"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Chainsaw"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Chainsaw
																<span className="count d-none">(7)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Chipper Shredder Vacuum"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Chipper%20Shredder%20Vacuum"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Chipper Shredder Vacuum
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Garden Tiller"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Garden%20Tiller"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Garden Tiller
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: JumpStart Accessory"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=JumpStart%20Accessory"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																JumpStart Accessory
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Lawn / Driveway Edger"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Lawn%20%2F%20Driveway%20Edger"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Lawn / Driveway Edger
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Push Lawn Mower"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Push%20Lawn%20Mower"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Push Lawn Mower
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Reel Lawn Mower"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Reel%20Lawn%20Mower"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Reel Lawn Mower
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Self-Propelled Lawn Mower"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Self-Propelled%20Lawn%20Mower"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Self-Propelled Lawn Mower
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: Snow Blower"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=Snow%20Blower"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Snow Blower
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: String Trimmer"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=String%20Trimmer"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																String Trimmer
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: String Trimmer - Brush Cutter"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=String%20Trimmer%20-%20Brush%20Cutter"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																String Trimmer - Brush Cutter
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Equipment Type: String Trimmer Mower"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/search?cgid=discounted-equipment&prefn1=equipment-type&prefv1=String%20Trimmer%20Mower"
															role="checkbox"
															id="null"
															className="equipment-type"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																String Trimmer Mower
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="secondary-bar pb-0 col-10 offset-1 d-md-none mb-0">
										<span className="apply btn btn-block btn-secondary mb-sm-1">
											Apply
										</span>
									</div>
									<div className="secondary-bar col-10 offset-1 offset-md-0 col-md-12">
										<a
											className="reset btn btn-outline-secondary btn-block"
											href="/en_US/search?cgid=discounted-equipment">
											Reset Filters
										</a>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-9">
								<div className="container">
									<div
										className="row product-grid"
										itemType="http://schema.org/SomeProducts"
										itemID="#product">
										<div className="col-12 col-sm-6 col-lg-4" data-index={0}>
											{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
											<div className="grid-tile" data-pid="24A-060FB66">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="CSV060B Chipper Shredder Vacuum"
													data-product-extended-name=""
													data-monetate-pid="24A-060FB66"
													data-monetate-producturl="https://www.troybilt.com/en_US/chipper-shredder-vacs/csv060b-chipper-shredder-vacuum/24A-060FB66.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/chipper-shredder-vacs/csv060b-chipper-shredder-vacuum/24A-060FB66.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw02fb39cc/products/Equipment/Troy-Bilt_CSV060B_4.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw02fb39cc/products/Equipment/Troy-Bilt_CSV060B_4.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw02fb39cc/products/Equipment/Troy-Bilt_CSV060B_4.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw02fb39cc/products/Equipment/Troy-Bilt_CSV060B_4.jpg?sw=315&sh=315&sm=fit"
																	alt="CSV060B Chipper Shredder Vacuum"
																	title="CSV060B Chipper Shredder Vacuum"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw02fb39cc/products/Equipment/Troy-Bilt_CSV060B_4.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw02fb39cc/products/Equipment/Troy-Bilt_CSV060B_4.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=24A-060FB66"
															data-full-detail-txt="View Full Details"
															title="Quickview CSV060B Chipper Shredder Vacuum, Opens Dialog"
															aria-label="Quickview CSV060B Chipper Shredder Vacuum, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/chipper-shredder-vacs/csv060b-chipper-shredder-vacuum/24A-060FB66.html?fitsOnModel=false"
																data-gtmdata='{"id":"24A-060FB66","name":"CSV060B Chipper Shredder Vacuum","productType":"WholeGood"}'
																itemProp="url">
																CSV060B Chipper Shredder Vacuum
															</a>
														</div>
														<div
															className="product-extended-name invisible d-none"
															itemProp="name">
															<span className="name">null</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																24A-060FB66
															</span>
														</div>
														<div
															className="price"
															itemProp="offers"
															itemScope=""
															itemType="http://schema.org/Offer">
															<span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="sales">
																	<span
																		className="value"
																		itemProp="price"
																		content={699.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$699.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="strike-through list">
																	<span
																		className="value"
																		itemProp="price"
																		content={799.0}>
																		$799.00
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="24A-060FB66"
																data-bv-redirect-url="/en_US/chipper-shredder-vacs/csv060b-chipper-shredder-vacuum/24A-060FB66.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="0164bb15-bbd6-4d9e-a5c1-a8e3458ab704"
																		href="/en_US/chipper-shredder-vacs/csv060b-chipper-shredder-vacuum/24A-060FB66.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="3.9 out of 5 stars. 121 reviews "
																		itemProp="aggregateRating"
																		itemScope=""
																		itemType="https://schema.org/AggregateRating">
																		<div
																			className="bv_stars_component_container"
																			aria-hidden="true">
																			<div className="bv_stars_button_container">
																				<span
																					className="bv_stars_svg_no_wrap"
																					aria-hidden="true">
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_Yumwjq1iJS") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_Yumwjq1iJS") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_Yumwjq1iJS"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_hepHTw2sAQ") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_hepHTw2sAQ") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_hepHTw2sAQ"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_XCC5v6DZ2R") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_XCC5v6DZ2R") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_XCC5v6DZ2R"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_86.78_Yk8Ag6Ca27") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_86.78_Yk8Ag6Ca27") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_86.78_Yk8Ag6Ca27"
																								x1="86.78%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_0.00_G5QNfZqo5w") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_0.00_G5QNfZqo5w") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_0.00_G5QNfZqo5w"
																								x1="0.00%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																				</span>
																			</div>
																		</div>
																		<div
																			className="bv_averageRating_component_container"
																			aria-hidden="true">
																			<div
																				className="bv_text"
																				itemProp="ratingValue">
																				3.9
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={121}
																			/>
																			<div className="bv_text">(121)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	Powered by a&nbsp;163cc Briggs &amp;
																	Stratton&nbsp;725EXi series engine featuring
																	ReadyStart® technology
																</li>
																<li>
																	Turn Eight bags of yard debris into one with
																	8:1 reduction ratio
																</li>
																<li>
																	Dedicated chipper chute accepts branches up to
																	1.5&quot; in diameter
																</li>
															</ul>
														</div>
													</div>
													{/* END_dwmarker */}
													<div className="tile-body-footer">
														<div className="tile-atc col-12 mb-2">
															<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																<div className="col-12">
																	<button
																		className="add-to-cart-tile btn btn-secondary"
																		data-pid="24A-060FB66"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"24A-060FB66","name":"CSV060B Chipper Shredder Vacuum","productType":"WholeGood"}'>
																		Add to Cart
																	</button>
																</div>
															</div>
															<div className="row">
																<div className="col-12 d-flex align-items-center justify-content-center">
																	<div className="availability-msg instock">
																		In Stock
																	</div>
																</div>
															</div>
														</div>
														<div className="compare col-12">
															<div className="custom-control custom-checkbox">
																<input
																	type="checkbox"
																	id="24A-060FB66"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="24A-060FB66">
																	Compare
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-lg-4" data-index={1}>
											{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
											<div className="grid-tile" data-pid="24A-070FB66">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="CSV070B Self-Propelled Chipper Shredder Vacuum"
													data-product-extended-name=""
													data-monetate-pid="24A-070FB66"
													data-monetate-producturl="https://www.troybilt.com/en_US/chipper-shredder-vacs/csv070b-self-propelled-chipper-shredder-vacuum/24A-070FB66.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/chipper-shredder-vacs/csv070b-self-propelled-chipper-shredder-vacuum/24A-070FB66.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg?sw=315&sh=315&sm=fit"
																	alt="CSV070B Self-Propelled Chipper Shredder Vacuum"
																	title="CSV070B Self-Propelled Chipper Shredder Vacuum"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe732a9dd/products/Equipment/Troy-Bilt_CSV070B_3.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=24A-070FB66"
															data-full-detail-txt="View Full Details"
															title="Quickview CSV070B Self-Propelled Chipper Shredder Vacuum, Opens Dialog"
															aria-label="Quickview CSV070B Self-Propelled Chipper Shredder Vacuum, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/chipper-shredder-vacs/csv070b-self-propelled-chipper-shredder-vacuum/24A-070FB66.html?fitsOnModel=false"
																data-gtmdata='{"id":"24A-070FB66","name":"CSV070B Self-Propelled Chipper Shredder Vacuum","productType":"WholeGood"}'
																itemProp="url">
																CSV070B Self-Propelled Chipper Shredder Vacuum
															</a>
														</div>
														<div
															className="product-extended-name invisible d-none"
															itemProp="name">
															<span className="name">null</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																24A-070FB66
															</span>
														</div>
														<div
															className="price"
															itemProp="offers"
															itemScope=""
															itemType="http://schema.org/Offer">
															<span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="sales">
																	<span
																		className="value"
																		itemProp="price"
																		content={799.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$799.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="strike-through list">
																	<span
																		className="value"
																		itemProp="price"
																		content={899.0}>
																		$899.00
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="24A-070FB66"
																data-bv-redirect-url="/en_US/chipper-shredder-vacs/csv070b-self-propelled-chipper-shredder-vacuum/24A-070FB66.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="fed0a63e-60e2-43b9-ad04-a47012e5bab8"
																		href="/en_US/chipper-shredder-vacs/csv070b-self-propelled-chipper-shredder-vacuum/24A-070FB66.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="3.9 out of 5 stars. 77 reviews "
																		itemProp="aggregateRating"
																		itemScope=""
																		itemType="https://schema.org/AggregateRating">
																		<div
																			className="bv_stars_component_container"
																			aria-hidden="true">
																			<div className="bv_stars_button_container">
																				<span
																					className="bv_stars_svg_no_wrap"
																					aria-hidden="true">
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_2wCZjqkDox") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_2wCZjqkDox") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_2wCZjqkDox"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_7XbgJUo1Id") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_7XbgJUo1Id") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_7XbgJUo1Id"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_8NVMXzAA6C") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_8NVMXzAA6C") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_8NVMXzAA6C"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_90.91_jz6in6ufgZ") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_90.91_jz6in6ufgZ") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_90.91_jz6in6ufgZ"
																								x1="90.91%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_0.00_grlj8huTKL") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_0.00_grlj8huTKL") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_0.00_grlj8huTKL"
																								x1="0.00%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																				</span>
																			</div>
																		</div>
																		<div
																			className="bv_averageRating_component_container"
																			aria-hidden="true">
																			<div
																				className="bv_text"
																				itemProp="ratingValue">
																				3.9
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={77}
																			/>
																			<div className="bv_text">(77)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	Easy maneuverability with self-propelled drive
																	system, featuring high and low speed options
																</li>
																<li>
																	Turn 8 bags of yard debris into 1 with 8:1
																	reduction ratio
																</li>
																<li>
																	Powered by a&nbsp;163cc Briggs &amp; Stratton®
																	engine featuring ReadyStart® technology
																</li>
															</ul>
														</div>
													</div>
													{/* END_dwmarker */}
													<div className="tile-body-footer">
														<div className="tile-atc col-12 mb-2">
															<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																<div className="col-12">
																	<button
																		className="add-to-cart-tile btn btn-secondary"
																		data-pid="24A-070FB66"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"24A-070FB66","name":"CSV070B Self-Propelled Chipper Shredder Vacuum","productType":"WholeGood"}'>
																		Add to Cart
																	</button>
																</div>
															</div>
															<div className="row">
																<div className="col-12 d-flex align-items-center justify-content-center">
																	<div className="availability-msg instock">
																		In Stock
																	</div>
																</div>
															</div>
														</div>
														<div className="compare col-12">
															<div className="custom-control custom-checkbox">
																<input
																	type="checkbox"
																	id="24A-070FB66"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="24A-070FB66">
																	Compare
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-lg-4" data-index={2}>
											{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
											<div className="grid-tile" data-pid="21AB45M8766">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Mustang Dual-Direction Garden Tiller"
													data-product-extended-name=""
													data-monetate-pid="21AB45M8766"
													data-monetate-producturl="https://www.troybilt.com/en_US/tillers/mustang-dual-direction-garden-tiller/21AB45M8766.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/tillers/mustang-dual-direction-garden-tiller/21AB45M8766.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwef3fc269/products/Equipment/Troy-Bilt_Mustang_Tiller_2000x2000_1.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwef3fc269/products/Equipment/Troy-Bilt_Mustang_Tiller_2000x2000_1.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwef3fc269/products/Equipment/Troy-Bilt_Mustang_Tiller_2000x2000_1.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwef3fc269/products/Equipment/Troy-Bilt_Mustang_Tiller_2000x2000_1.jpg?sw=315&sh=315&sm=fit"
																	alt="Mustang Dual-Direction Garden Tiller"
																	title="Mustang Dual-Direction Garden Tiller"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwef3fc269/products/Equipment/Troy-Bilt_Mustang_Tiller_2000x2000_1.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwef3fc269/products/Equipment/Troy-Bilt_Mustang_Tiller_2000x2000_1.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=21AB45M8766"
															data-full-detail-txt="View Full Details"
															title="Quickview Mustang Dual-Direction Garden Tiller, Opens Dialog"
															aria-label="Quickview Mustang Dual-Direction Garden Tiller, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/tillers/mustang-dual-direction-garden-tiller/21AB45M8766.html?fitsOnModel=false"
																data-gtmdata='{"id":"21AB45M8766","name":"Mustang Dual-Direction Garden Tiller","productType":"WholeGood"}'
																itemProp="url">
																Mustang Dual-Direction Garden Tiller
															</a>
														</div>
														<div
															className="product-extended-name invisible d-none"
															itemProp="name">
															<span className="name">null</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																21AB45M8766
															</span>
														</div>
														<div
															className="price"
															itemProp="offers"
															itemScope=""
															itemType="http://schema.org/Offer">
															<span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="sales">
																	<span
																		className="value"
																		itemProp="price"
																		content={899.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$899.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="strike-through list">
																	<span
																		className="value"
																		itemProp="price"
																		content={1199.0}>
																		$1,199.00
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="21AB45M8766"
																data-bv-redirect-url="/en_US/tillers/mustang-dual-direction-garden-tiller/21AB45M8766.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="f516d8bf-ebc3-40be-b210-86e31b37f879"
																		href="/en_US/tillers/mustang-dual-direction-garden-tiller/21AB45M8766.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="3.5 out of 5 stars. 56 reviews "
																		itemProp="aggregateRating"
																		itemScope=""
																		itemType="https://schema.org/AggregateRating">
																		<div
																			className="bv_stars_component_container"
																			aria-hidden="true">
																			<div className="bv_stars_button_container">
																				<span
																					className="bv_stars_svg_no_wrap"
																					aria-hidden="true">
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_rOp8Y21lQ4") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_rOp8Y21lQ4") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_rOp8Y21lQ4"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_26F1r5P5oI") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_26F1r5P5oI") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_26F1r5P5oI"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_GB7iPuwn21") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_GB7iPuwn21") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_GB7iPuwn21"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_51.79_oI3kC7onqW") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_51.79_oI3kC7onqW") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_51.79_oI3kC7onqW"
																								x1="51.79%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_0.00_UlclLzEKIq") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_0.00_UlclLzEKIq") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_0.00_UlclLzEKIq"
																								x1="0.00%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																				</span>
																			</div>
																		</div>
																		<div
																			className="bv_averageRating_component_container"
																			aria-hidden="true">
																			<div
																				className="bv_text"
																				itemProp="ratingValue">
																				3.5
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={56}
																			/>
																			<div className="bv_text">(56)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	Dual direction tines allow you to switch
																	between counter-rotating and forward rotating
																	tine direction
																</li>
																<li>
																	A 208cc OHV Troy-Bilt engine gives you plenty
																	of power
																</li>
																<li>
																	Just One Hand™ operation allows the tiller to
																	be guided with literally one hand
																</li>
															</ul>
														</div>
													</div>
													{/* END_dwmarker */}
													<div className="tile-body-footer">
														<div className="tile-atc col-12 mb-2">
															<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																<div className="col-12">
																	<button
																		className="add-to-cart-tile btn btn-secondary"
																		data-pid="21AB45M8766"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"21AB45M8766","name":"Mustang Dual-Direction Garden Tiller","productType":"WholeGood"}'>
																		Add to Cart
																	</button>
																</div>
															</div>
															<div className="row">
																<div className="col-12 d-flex align-items-center justify-content-center">
																	<div className="availability-msg instock">
																		In Stock
																	</div>
																</div>
															</div>
														</div>
														<div className="compare col-12">
															<div className="custom-control custom-checkbox">
																<input
																	type="checkbox"
																	id="21AB45M8766"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="21AB45M8766">
																	Compare
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-lg-4" data-index={3}>
											{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
											<div className="grid-tile" data-pid="21D-65M8766">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Super Bronco CRT Garden Tiller"
													data-product-extended-name=""
													data-monetate-pid="21D-65M8766"
													data-monetate-producturl="https://www.troybilt.com/en_US/sale/super-bronco-crt-garden-tiller/21D-65M8766.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/sale/super-bronco-crt-garden-tiller/21D-65M8766.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg?sw=315&sh=315&sm=fit"
																	alt="Super Bronco CRT Garden Tiller"
																	title="Super Bronco CRT Garden Tiller"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw853c35dc/products/Equipment/Troy-Bilt_SuperBroncoCRT_2000x2000_10.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=21D-65M8766"
															data-full-detail-txt="View Full Details"
															title="Quickview Super Bronco CRT Garden Tiller, Opens Dialog"
															aria-label="Quickview Super Bronco CRT Garden Tiller, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/sale/super-bronco-crt-garden-tiller/21D-65M8766.html?fitsOnModel=false"
																data-gtmdata='{"id":"21D-65M8766","name":"Super Bronco CRT Garden Tiller","productType":"WholeGood"}'
																itemProp="url">
																Super Bronco CRT Garden Tiller
															</a>
														</div>
														<div
															className="product-extended-name invisible d-none"
															itemProp="name">
															<span className="name">null</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																21D-65M8766
															</span>
														</div>
														<div
															className="price"
															itemProp="offers"
															itemScope=""
															itemType="http://schema.org/Offer">
															<span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="sales">
																	<span
																		className="value"
																		itemProp="price"
																		content={749.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$749.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="strike-through list">
																	<span
																		className="value"
																		itemProp="price"
																		content={999.0}>
																		$999.00
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="21D-65M8766"
																data-bv-redirect-url="/en_US/sale/super-bronco-crt-garden-tiller/21D-65M8766.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="99807d33-838c-4f66-9f5b-f8231b3ba848"
																		href="/en_US/sale/super-bronco-crt-garden-tiller/21D-65M8766.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.1 out of 5 stars. 264 reviews "
																		itemProp="aggregateRating"
																		itemScope=""
																		itemType="https://schema.org/AggregateRating">
																		<div
																			className="bv_stars_component_container"
																			aria-hidden="true">
																			<div className="bv_stars_button_container">
																				<span
																					className="bv_stars_svg_no_wrap"
																					aria-hidden="true">
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_xONq8cXm1S") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_xONq8cXm1S") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_xONq8cXm1S"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_nm96ayZlX4") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_nm96ayZlX4") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_nm96ayZlX4"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_TTxTEdHRrc") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_TTxTEdHRrc") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_TTxTEdHRrc"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_tO6vNBOyFM") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_tO6vNBOyFM") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_tO6vNBOyFM"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_13.26_2U4Va7AhSZ") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_13.26_2U4Va7AhSZ") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_13.26_2U4Va7AhSZ"
																								x1="13.26%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																				</span>
																			</div>
																		</div>
																		<div
																			className="bv_averageRating_component_container"
																			aria-hidden="true">
																			<div
																				className="bv_text"
																				itemProp="ratingValue">
																				4.1
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={264}
																			/>
																			<div className="bv_text">(264)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	Power reverse and 13&quot; ag tires are
																	designed for flexible handling around rocks
																	and other obstacles.
																</li>
																<li>
																	A 208cc OHV Troy-Bilt engine gives you plenty
																	of power to turn over large amounts of soil
																	and is protected by a front bumper.
																</li>
																<li>
																	16&quot; tilling width makes the Super Bronco™
																	CRT ideal for medium-to-large-size gardens.
																</li>
															</ul>
														</div>
													</div>
													{/* END_dwmarker */}
													<div className="tile-body-footer">
														<div className="tile-atc col-12 mb-2">
															<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																<div className="col-12">
																	<button
																		className="add-to-cart-tile btn btn-secondary"
																		data-pid="21D-65M8766"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"21D-65M8766","name":"Super Bronco CRT Garden Tiller","productType":"WholeGood"}'>
																		Add to Cart
																	</button>
																</div>
															</div>
															<div className="row">
																<div className="col-12 d-flex align-items-center justify-content-center">
																	<div className="availability-msg instock">
																		In Stock
																	</div>
																</div>
															</div>
														</div>
														<div className="compare col-12">
															<div className="custom-control custom-checkbox">
																<input
																	type="checkbox"
																	id="21D-65M8766"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="21D-65M8766">
																	Compare
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-lg-4" data-index={4}>
											{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
											<div className="grid-tile" data-pid="41AY428H766">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name='TB4218H XP 18" Gas Chainsaw'
													data-product-extended-name=""
													data-monetate-pid="41AY428H766"
													data-monetate-producturl="https://www.troybilt.com/en_US/chainsaws/tb4218h-xp-18inch-gas-chainsaw/41AY428H766.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row">
															<div className="content-asset">
																{/* dwMarker="content" dwContentID="6e0a04d927d3aafcbbba519609" */}
																<div
																	className="badge badge-secondary"
																	style={{ textAlign: "right" }}>
																	<strong>New</strong>
																</div>
															</div> 
															{/* End content-asset */}
														</div>
														<a href="/en_US/chainsaws/tb4218h-xp-18inch-gas-chainsaw/41AY428H766.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa83241ec/products/Equipment/Troy-Bilt_TB4218HXP_2000x2000_8.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa83241ec/products/Equipment/Troy-Bilt_TB4218HXP_2000x2000_8.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa83241ec/products/Equipment/Troy-Bilt_TB4218HXP_2000x2000_8.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa83241ec/products/Equipment/Troy-Bilt_TB4218HXP_2000x2000_8.jpg?sw=315&sh=315&sm=fit"
																	alt='TB4218H XP 18" Gas Chainsaw'
																	title='TB4218H XP 18" Gas Chainsaw'
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa83241ec/products/Equipment/Troy-Bilt_TB4218HXP_2000x2000_8.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa83241ec/products/Equipment/Troy-Bilt_TB4218HXP_2000x2000_8.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=41AY428H766"
															data-full-detail-txt="View Full Details"
															title='Quickview TB4218H XP 18" Gas Chainsaw, Opens Dialog'
															aria-label='Quickview TB4218H XP 18" Gas Chainsaw, Opens Dialog'>
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/chainsaws/tb4218h-xp-18inch-gas-chainsaw/41AY428H766.html?fitsOnModel=false"
																data-gtmdata='{"id":"41AY428H766","name":"TB4218H XP 18\" Gas Chainsaw","productType":"WholeGood"}'
																itemProp="url">
																TB4218H XP 18&quot; Gas Chainsaw
															</a>
														</div>
														<div
															className="product-extended-name invisible d-none"
															itemProp="name">
															<span className="name">null</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																41AY428H766
															</span>
														</div>
														<div
															className="price"
															itemProp="offers"
															itemScope=""
															itemType="http://schema.org/Offer">
															<span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="sales">
																	<span
																		className="value"
																		itemProp="price"
																		content={159.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$159.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="strike-through list">
																	<span
																		className="value"
																		itemProp="price"
																		content={209.0}>
																		$209.00
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="41AY428H766"
																data-bv-redirect-url="/en_US/chainsaws/tb4218h-xp-18inch-gas-chainsaw/41AY428H766.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="c96871b8-7af3-4320-b3e6-e110144660d4"
																		href="/en_US/chainsaws/tb4218h-xp-18inch-gas-chainsaw/41AY428H766.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="5.0 out of 5 stars. 4 reviews "
																		itemProp="aggregateRating"
																		itemScope=""
																		itemType="https://schema.org/AggregateRating">
																		<div
																			className="bv_stars_component_container"
																			aria-hidden="true">
																			<div className="bv_stars_button_container">
																				<span
																					className="bv_stars_svg_no_wrap"
																					aria-hidden="true">
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_neTSpmNAJY") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_neTSpmNAJY") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_neTSpmNAJY"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_cIXROjvVV7") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_cIXROjvVV7") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_cIXROjvVV7"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_PTFpghc9dU") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_PTFpghc9dU") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_PTFpghc9dU"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_QxklxYdXxp") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_QxklxYdXxp") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_QxklxYdXxp"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_99.99_uFfRKMoXro") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_99.99_uFfRKMoXro") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_99.99_uFfRKMoXro"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																				</span>
																			</div>
																		</div>
																		<div
																			className="bv_averageRating_component_container"
																			aria-hidden="true">
																			<div
																				className="bv_text"
																				itemProp="ratingValue">
																				5.0
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={4}
																			/>
																			<div className="bv_text">(4)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	Includes an extra chain for convenient
																	replacement when needed
																</li>
																<li>42cc, full crank 2-cycle engine</li>
																<li>
																	SpringAssist™ technology for easy pull starts
																</li>
															</ul>
														</div>
													</div>
													{/* END_dwmarker */}
													<div className="tile-body-footer">
														<div className="tile-atc col-12 mb-2">
															<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																<div className="col-12">
																	<button
																		className="add-to-cart-tile btn btn-secondary"
																		data-pid="41AY428H766"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"41AY428H766","name":"TB4218H XP 18\" Gas Chainsaw","productType":"WholeGood"}'>
																		Add to Cart
																	</button>
																</div>
															</div>
															<div className="row">
																<div className="col-12 d-flex align-items-center justify-content-center">
																	<div className="availability-msg instock">
																		In Stock
																	</div>
																</div>
															</div>
														</div>
														<div className="compare col-12">
															<div className="custom-control custom-checkbox">
																<input
																	type="checkbox"
																	id="41AY428H766"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="41AY428H766">
																	Compare
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-lg-4" data-index={5}>
											{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
											<div className="grid-tile" data-pid="41AY426H766">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name='TB4216H XP 16" Gas Chainsaw'
													data-product-extended-name=""
													data-monetate-pid="41AY426H766"
													data-monetate-producturl="https://www.troybilt.com/en_US/chainsaws/tb4216h-xp-16inch-gas-chainsaw/41AY426H766.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row">
															<div className="content-asset">
																{/* dwMarker="content" dwContentID="6e0a04d927d3aafcbbba519609" */}
																<div
																	className="badge badge-secondary"
																	style={{ textAlign: "right" }}>
																	<strong>New</strong>
																</div>
															</div> 
															{/* End content-asset */}
														</div>
														<a href="/en_US/chainsaws/tb4216h-xp-16inch-gas-chainsaw/41AY426H766.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc13d27a9/products/Equipment/Troy-Bilt_TB4216HXP_2000x2000_4.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc13d27a9/products/Equipment/Troy-Bilt_TB4216HXP_2000x2000_4.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc13d27a9/products/Equipment/Troy-Bilt_TB4216HXP_2000x2000_4.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc13d27a9/products/Equipment/Troy-Bilt_TB4216HXP_2000x2000_4.jpg?sw=315&sh=315&sm=fit"
																	alt='TB4216H XP 16" Gas Chainsaw'
																	title='TB4216H XP 16" Gas Chainsaw'
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc13d27a9/products/Equipment/Troy-Bilt_TB4216HXP_2000x2000_4.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwc13d27a9/products/Equipment/Troy-Bilt_TB4216HXP_2000x2000_4.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=41AY426H766"
															data-full-detail-txt="View Full Details"
															title='Quickview TB4216H XP 16" Gas Chainsaw, Opens Dialog'
															aria-label='Quickview TB4216H XP 16" Gas Chainsaw, Opens Dialog'>
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/chainsaws/tb4216h-xp-16inch-gas-chainsaw/41AY426H766.html?fitsOnModel=false"
																data-gtmdata='{"id":"41AY426H766","name":"TB4216H XP 16\" Gas Chainsaw","productType":"WholeGood"}'
																itemProp="url">
																TB4216H XP 16&quot; Gas Chainsaw
															</a>
														</div>
														<div
															className="product-extended-name invisible d-none"
															itemProp="name">
															<span className="name">null</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																41AY426H766
															</span>
														</div>
														<div
															className="price"
															itemProp="offers"
															itemScope=""
															itemType="http://schema.org/Offer">
															<span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="sales">
																	<span
																		className="value"
																		itemProp="price"
																		content={139.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$139.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
																<meta itemProp="priceCurrency" content="USD" />
																<span className="strike-through list">
																	<span
																		className="value"
																		itemProp="price"
																		content={189.0}>
																		$189.00
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="41AY426H766"
																data-bv-redirect-url="/en_US/chainsaws/tb4216h-xp-16inch-gas-chainsaw/41AY426H766.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="fda0675d-1e47-4339-a400-11c43e48fe50"
																		href="/en_US/chainsaws/tb4216h-xp-16inch-gas-chainsaw/41AY426H766.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="5.0 out of 5 stars. 7 reviews "
																		itemProp="aggregateRating"
																		itemScope=""
																		itemType="https://schema.org/AggregateRating">
																		<div
																			className="bv_stars_component_container"
																			aria-hidden="true">
																			<div className="bv_stars_button_container">
																				<span
																					className="bv_stars_svg_no_wrap"
																					aria-hidden="true">
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_4kughPSaUD") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_4kughPSaUD") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_4kughPSaUD"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_0LJHgdTDNy") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_0LJHgdTDNy") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_0LJHgdTDNy"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_zTYrUBVsuo") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_zTYrUBVsuo") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_zTYrUBVsuo"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_iYxHtcvT2v") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_iYxHtcvT2v") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_iYxHtcvT2v"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																					<svg
																						focusable="false"
																						xmlns="http://www.w3.org/2000/svg"
																						width="20px"
																						height="20px"
																						viewBox="0 0 25 25"
																						style={{
																							width: "20px !important",
																							height: "20px !important",
																						}}>
																						<polygon
																							points=""
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_99.99_HHXkx7BVvL") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_99.99_HHXkx7BVvL") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_99.99_HHXkx7BVvL"
																								x1="99.99%"
																								y1="0%"
																								x2="100%"
																								y2="0%">
																								<stop
																									offset="0%"
																									style={{
																										stopColor: "rgb(204, 0, 0)",
																										stopOpacity: 1,
																									}}
																								/>
																								<stop
																									offset="1%"
																									style={{
																										stopColor:
																											"rgb(204, 204, 204)",
																										stopOpacity: 1,
																									}}
																								/>
																							</linearGradient>
																						</defs>
																					</svg>
																				</span>
																			</div>
																		</div>
																		<div
																			className="bv_averageRating_component_container"
																			aria-hidden="true">
																			<div
																				className="bv_text"
																				itemProp="ratingValue">
																				5.0
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={7}
																			/>
																			<div className="bv_text">(7)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	Includes an extra chain for convenient
																	replacement when needed
																</li>
																<li>42cc, full crank 2-cycle engine</li>
																<li>
																	SpringAssist™ technology for easy pull starts
																</li>
															</ul>
														</div>
													</div>
													{/* END_dwmarker */}
													<div className="tile-body-footer">
														<div className="tile-atc col-12 mb-2">
															<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																<div className="col-12">
																	<button
																		className="add-to-cart-tile btn btn-secondary"
																		data-pid="41AY426H766"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"41AY426H766","name":"TB4216H XP 16\" Gas Chainsaw","productType":"WholeGood"}'>
																		Add to Cart
																	</button>
																</div>
															</div>
															<div className="row">
																<div className="col-12 d-flex align-items-center justify-content-center">
																	<div className="availability-msg instock">
																		In Stock
																	</div>
																</div>
															</div>
														</div>
														<div className="compare col-12">
															<div className="custom-control custom-checkbox">
																<input
																	type="checkbox"
																	id="41AY426H766"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="41AY426H766">
																	Compare
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col-12 grid-footer"
											data-sort-options='{"options":[{"displayName":"Most Popular","id":"popularity-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=Sort%20by%20Popularity&start=0&sz=6"},{"displayName":"Price (High to Low)","id":"price-high-low-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=Price%20(High%20to%20Low)&start=0&sz=6"},{"displayName":"Price (Low to High)","id":"price-low-high-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=Price%20(Low%20to%20High)&start=0&sz=6"},{"displayName":"Sort by Name (A-Z)","id":"name-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&srule=name&start=0&sz=6"}],"ruleId":"Position"}'
											data-page-size={6.0}
											data-page-number={0}>
											<div className="show-more">
												<div className="text-center">
													<button
														className="btn btn-primary col-12"
														data-url="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=discounted-equipment&start=6&sz=6">
														Load More Products
													</button>
												</div>
											</div>
											<input
												type="hidden"
												className="permalink"
												defaultValue="https://www.troybilt.com/en_US/search?cgid=discounted-equipment&start=0&sz=6"
											/>
											<input
												type="hidden"
												className="category-id"
												defaultValue="discounted-equipment"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
