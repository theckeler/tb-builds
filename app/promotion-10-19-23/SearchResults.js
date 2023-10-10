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
						role="tabpanel"
						aria-expanded="true">
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
								<span className="item-count">10 Items</span>
								<div className="select-wrapper">
									<select
										id="sort-order"
										name="sort-order"
										className="custom-select"
										aria-label="Sort By:">
										<option
											className="popularity-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=Sort%20by%20Popularity&start=0&sz=6"
											data-id="popularity-sort">
											Sort By: Most Popular
										</option>
										<option
											className="price-high-low-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=Price%20(High%20to%20Low)&start=0&sz=6"
											data-id="price-high-low-sort">
											Sort By: Price (High to Low)
										</option>
										<option
											className="price-low-high-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=Price%20(Low%20to%20High)&start=0&sz=6"
											data-id="price-low-high-sort">
											Sort By: Price (Low to High)
										</option>
										<option
											className="name-sort"
											value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=name&start=0&sz=6"
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
										<div className="card  refinement-category refinement refinement-category">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Category Link"
													aria-expanded="false"
													aria-controls="Category Content"
													tabIndex={0}>
													Category
												</span>
											</div>
											<div
												className="card-body"
												id="Category Content"
												role="region"
												aria-labelledby="Category Link">
												<ul className="values content">
													<li>
														<a href="/en_US/snow-blowers">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span
																title="Refine by Category: Snow Blowers"
																className="">
																Snow Blowers
															</span>
														</a>
														<ul className="values content">
															<li>
																<a href="/en_US/snow-blowers">
																	<img
																		className="icon icon-checkbox-selected "
																		src="/on/demandware.static/Sites-troybilt-Site/-/default/dw8077e8d6/images/svg-icons/icon-checkbox-selected.svg"
																		alt=""
																	/>
																	<span
																		title="Currently Refined by Category: Two-Stage Snow Blowers"
																		className="selected">
																		Two-Stage Snow Blowers
																	</span>
																</a>
																<ul className="values content"></ul>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
										<div className="card   collapsible-xl refinement refinement-engine-power">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Engine Power Link"
													aria-expanded="false"
													aria-controls="Engine Power Content"
													tabIndex={0}>
													Engine Power
												</span>
											</div>
											<div
												className="card-body"
												id="Engine Power Content"
												role="region"
												aria-labelledby="Engine Power Link">
												<ul className="values content">
													<li
														title="Refine by Engine Power: 208cc"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=engine-displacement&prefv1=208cc"
															role="checkbox"
															id="null"
															className="engine-displacement"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																208cc
																<span className="count d-none">(4)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Engine Power: 243cc"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=engine-displacement&prefv1=243cc"
															role="checkbox"
															id="null"
															className="engine-displacement"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																243cc
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Engine Power: 272cc"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=engine-displacement&prefv1=272cc"
															role="checkbox"
															id="null"
															className="engine-displacement"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																272cc
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Engine Power: 357cc"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=engine-displacement&prefv1=357cc"
															role="checkbox"
															id="null"
															className="engine-displacement"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																357cc
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Engine Power: 420cc"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=engine-displacement&prefv1=420cc"
															role="checkbox"
															id="null"
															className="engine-displacement"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																420cc
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="card   collapsible-xl refinement refinement-clearing-width">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Clearing Width Link"
													aria-expanded="false"
													aria-controls="Clearing Width Content"
													tabIndex={0}>
													Clearing Width
												</span>
											</div>
											<div
												className="card-body"
												id="Clearing Width Content"
												role="region"
												aria-labelledby="Clearing Width Link">
												<ul className="values content">
													<li
														title='Refine by Clearing Width: 24"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=clearing-width&prefv1=24%22"
															role="checkbox"
															id="null"
															className="clearing-width"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																24"
																<span className="count d-none">(3)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Clearing Width: 26"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=clearing-width&prefv1=26%22"
															role="checkbox"
															id="null"
															className="clearing-width"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																26"
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Clearing Width: 28"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=clearing-width&prefv1=28%22"
															role="checkbox"
															id="null"
															className="clearing-width"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																28"
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Clearing Width: 30"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=clearing-width&prefv1=30%22"
															role="checkbox"
															id="null"
															className="clearing-width"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																30"
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Clearing Width: 34"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=clearing-width&prefv1=34%22"
															role="checkbox"
															id="null"
															className="clearing-width"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																34"
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="card   collapsible-xl refinement refinement-chute-material">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Chute Material Link"
													aria-expanded="false"
													aria-controls="Chute Material Content"
													tabIndex={0}>
													Chute Material
												</span>
											</div>
											<div
												className="card-body"
												id="Chute Material Content"
												role="region"
												aria-labelledby="Chute Material Link">
												<ul className="values content">
													<li
														title="Refine by Chute Material: Polymer"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=chute-material&prefv1=Polymer"
															role="checkbox"
															id="null"
															className="chute-material"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Polymer
																<span className="count d-none">(8)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Chute Material: Steel"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=chute-material&prefv1=Steel"
															role="checkbox"
															id="null"
															className="chute-material"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Steel
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="card   collapsible-xl refinement refinement-tire-size">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Tire Size Link"
													aria-expanded="false"
													aria-controls="Tire Size Content"
													tabIndex={0}>
													Tire Size
												</span>
											</div>
											<div
												className="card-body"
												id="Tire Size Content"
												role="region"
												aria-labelledby="Tire Size Link">
												<ul className="values content">
													<li
														title='Refine by Tire Size: 13" x 4"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=tire-size&prefv1=13%22%20x%204%22"
															role="checkbox"
															id="null"
															className="tire-size"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																13" x 4"
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Tire Size: 15" x 5"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=tire-size&prefv1=15%22%20x%205%22"
															role="checkbox"
															id="null"
															className="tire-size"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																15" x 5"
																<span className="count d-none">(3)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Tire Size: 16" x 4.8"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=tire-size&prefv1=16%22%20x%204.8%22"
															role="checkbox"
															id="null"
															className="tire-size"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																16" x 4.8"
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title='Refine by Tire Size: 16" x 6.5"'
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=tire-size&prefv1=16%22%20x%206.5%22"
															role="checkbox"
															id="null"
															className="tire-size"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																16" x 6.5"
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Tire Size: N/A"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=tire-size&prefv1=N%2FA"
															role="checkbox"
															id="null"
															className="tire-size"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																N/A
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="card   collapsible-xl refinement refinement-steering">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Steering Link"
													aria-expanded="false"
													aria-controls="Steering Content"
													tabIndex={0}>
													Steering
												</span>
											</div>
											<div
												className="card-body"
												id="Steering Content"
												role="region"
												aria-labelledby="Steering Link">
												<ul className="values content">
													<li
														title="Refine by Steering: N/A"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=steering-wheel-control&prefv1=N%2FA"
															role="checkbox"
															id="null"
															className="steering-wheel-control"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																N/A
																<span className="count d-none">(5)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Steering: Power Steering"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=steering-wheel-control&prefv1=Power%20Steering"
															role="checkbox"
															id="null"
															className="steering-wheel-control"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Power Steering
																<span className="count d-none">(1)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Steering: Touch N’ Turn™ trigger-controlled"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=steering-wheel-control&prefv1=Touch%20N%E2%80%99%20Turn%E2%84%A2%20trigger-controlled"
															role="checkbox"
															id="null"
															className="steering-wheel-control"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Touch N’ Turn™ trigger-controlled
																<span className="count d-none">(4)</span>
															</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="card   collapsible-xl refinement refinement-chute-pitch-control">
											<div className="card-header">
												<span
													className="refinement-name"
													id="Chute Pitch Control Link"
													aria-expanded="false"
													aria-controls="Chute Pitch Control Content"
													tabIndex={0}>
													Chute Pitch Control
												</span>
											</div>
											<div
												className="card-body"
												id="Chute Pitch Control Content"
												role="region"
												aria-labelledby="Chute Pitch Control Link">
												<ul className="values content">
													<li
														title="Refine by Chute Pitch Control: Just One Touch™ Electric"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=pitch-control&prefv1=Just%20One%20Touch%E2%84%A2%20Electric"
															role="checkbox"
															id="null"
															className="pitch-control"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Just One Touch™ Electric
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Chute Pitch Control: Manual"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=pitch-control&prefv1=Manual"
															role="checkbox"
															id="null"
															className="pitch-control"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Manual
																<span className="count d-none">(2)</span>
															</span>
														</a>
													</li>
													<li
														title="Refine by Chute Pitch Control: Remote Single-Lever"
														className="col-sm-4 col-md-12 ">
														<a
															href="/en_US/snow-blowers/two-stage-snow-blowers?prefn1=pitch-control&prefv1=Remote%20Single-Lever"
															role="checkbox"
															id="null"
															className="pitch-control"
															aria-checked="false">
															<img
																className="icon icon-checkbox-unselected "
																src="/on/demandware.static/Sites-troybilt-Site/-/default/dw26cedbb4/images/svg-icons/icon-checkbox-unselected.svg"
																alt=""
															/>
															<span className=" ">
																Remote Single-Lever
																<span className="count d-none">(6)</span>
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
											href="/en_US/snow-blowers/two-stage-snow-blowers">
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
											<div className="grid-tile" data-pid="31AH7FP4B66">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Storm Tracker™ 2890 Snow Blower"
													data-product-extended-name="Two-Stage"
													data-monetate-pid="31AH7FP4B66"
													data-monetate-producturl="https://www.troybilt.com/en_US/two-stage-snow-blowers/storm-tracker-2890-snow-blower/31AH7FP4B66.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/two-stage-snow-blowers/storm-tracker-2890-snow-blower/31AH7FP4B66.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd27d9b39/products/Equipment/Troy-Bilt_StormTracker2890_11.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd27d9b39/products/Equipment/Troy-Bilt_StormTracker2890_11.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd27d9b39/products/Equipment/Troy-Bilt_StormTracker2890_11.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd27d9b39/products/Equipment/Troy-Bilt_StormTracker2890_11.jpg?sw=315&sh=315&sm=fit"
																	alt="Storm Tracker™ 2890 Snow Blower"
																	title="Storm Tracker&trade; 2890 Snow Blower"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd27d9b39/products/Equipment/Troy-Bilt_StormTracker2890_11.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd27d9b39/products/Equipment/Troy-Bilt_StormTracker2890_11.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=31AH7FP4B66"
															data-full-detail-txt="View Full Details"
															title="Quickview Storm Tracker™ 2890 Snow Blower, Opens Dialog"
															aria-label="Quickview Storm Tracker™ 2890 Snow Blower, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/two-stage-snow-blowers/storm-tracker-2890-snow-blower/31AH7FP4B66.html?fitsOnModel=false"
																data-gtmdata='{"id":"31AH7FP4B66","name":"Storm Tracker™ 2890 Snow Blower","productType":"WholeGood"}'
																itemProp="url">
																Storm Tracker™ 2890 Snow Blower
															</a>
														</div>
														<div
															className="product-extended-name "
															itemProp="name">
															<span className="name">Two-Stage</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																31AH7FP4B66
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
																		content={1899.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$1,899.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="31AH7FP4B66"
																data-bv-redirect-url="/en_US/two-stage-snow-blowers/storm-tracker-2890-snow-blower/31AH7FP4B66.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="195b4c3b-8c2a-4b98-8713-745bd30fcc81"
																		href="/en_US/two-stage-snow-blowers/storm-tracker-2890-snow-blower/31AH7FP4B66.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.2 out of 5 stars. 49 reviews "
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
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_ZW5phmJR20") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_ZW5phmJR20") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_ZW5phmJR20"
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
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_cjErykLDWJ") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_cjErykLDWJ") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_cjErykLDWJ"
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
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_G1TI8wIZT8") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_G1TI8wIZT8") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_G1TI8wIZT8"
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
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_3O1zLyGBs6") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_3O1zLyGBs6") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_3O1zLyGBs6"
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
																								fill: 'url("#bv_inline_ratings_star_filled_4_24.49_6nTz5ojuz2") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_24.49_6nTz5ojuz2") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_24.49_6nTz5ojuz2"
																								x1="24.49%"
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
																				4.2
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={49}
																			/>
																			<div className="bv_text">(49)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	28 in. clearing width and a 20 in. intake
																	height powers through up to 12" of snow
																</li>
																<li>
																	SelecTrac™ drive allows for good handling in
																	hard-packed, icy snow or on gravel driveways
																</li>
																<li>
																	Heated hand grips help provide comfort in cold
																	weather
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
																		data-pid="31AH7FP4B66"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"31AH7FP4B66","name":"Storm Tracker™ 2890 Snow Blower","productType":"WholeGood"}'>
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
																	id="31AH7FP4B66"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="31AH7FP4B66">
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
											<div className="grid-tile" data-pid="31AS6KN2B23">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Storm™ 2420 Snow Blower"
													data-product-extended-name="Two-Stage"
													data-monetate-pid="31AS6KN2B23"
													data-monetate-producturl="https://www.troybilt.com/en_US/two-stage-snow-blowers/storm-2420-snow-blower/31AS6KN2B23.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/two-stage-snow-blowers/storm-2420-snow-blower/31AS6KN2B23.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw10415a49/products/Equipment/Troy-Bilt_Storm2420_16.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw10415a49/products/Equipment/Troy-Bilt_Storm2420_16.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw10415a49/products/Equipment/Troy-Bilt_Storm2420_16.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw10415a49/products/Equipment/Troy-Bilt_Storm2420_16.jpg?sw=315&sh=315&sm=fit"
																	alt="Storm™ 2420 Snow Blower"
																	title="Storm&trade; 2420 Snow Blower"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw10415a49/products/Equipment/Troy-Bilt_Storm2420_16.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw10415a49/products/Equipment/Troy-Bilt_Storm2420_16.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=31AS6KN2B23"
															data-full-detail-txt="View Full Details"
															title="Quickview Storm™ 2420 Snow Blower, Opens Dialog"
															aria-label="Quickview Storm™ 2420 Snow Blower, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/two-stage-snow-blowers/storm-2420-snow-blower/31AS6KN2B23.html?fitsOnModel=false"
																data-gtmdata='{"id":"31AS6KN2B23","name":"Storm™ 2420 Snow Blower","productType":"WholeGood"}'
																itemProp="url">
																Storm™ 2420 Snow Blower
															</a>
														</div>
														<div
															className="product-extended-name "
															itemProp="name">
															<span className="name">Two-Stage</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																31AS6KN2B23
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
																		content={999.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$999.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="31AS6KN2B23"
																data-bv-redirect-url="/en_US/two-stage-snow-blowers/storm-2420-snow-blower/31AS6KN2B23.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="25ee2727-daae-4469-97bd-5a95fb979596"
																		href="/en_US/two-stage-snow-blowers/storm-2420-snow-blower/31AS6KN2B23.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.5 out of 5 stars. 40 reviews "
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
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_VrKwTE0jW5") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_VrKwTE0jW5") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_VrKwTE0jW5"
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
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_vKJt69KUXd") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_vKJt69KUXd") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_vKJt69KUXd"
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
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_WIazZgpMa7") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_WIazZgpMa7") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_WIazZgpMa7"
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
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_G6AV4uDYZy") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_G6AV4uDYZy") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_G6AV4uDYZy"
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
																								fill: 'url("#bv_inline_ratings_star_filled_4_52.50_dL5Tbf1YyX") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_52.50_dL5Tbf1YyX") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_52.50_dL5Tbf1YyX"
																								x1="52.50%"
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
																				4.5
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={40}
																			/>
																			<div className="bv_text">(40)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	24" clearing width and 20" intake height is
																	designed to handle up to 12" of snowfall
																</li>
																<li>
																	Two-stage technology uses steel augers to
																	break up snow and a high-speed steel impeller
																	to propel it out of the chute
																</li>
																<li>
																	Make quick work of clearing snow with the
																	powerful serrated augers and an extended chute
																	designed to minimize snow blowback
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
																		data-pid="31AS6KN2B23"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"31AS6KN2B23","name":"Storm™ 2420 Snow Blower","productType":"WholeGood"}'>
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
																	id="31AS6KN2B23"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="31AS6KN2B23">
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
											<div className="grid-tile" data-pid="31AS6KM3B23">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Storm™ 2600 Snow Blower"
													data-product-extended-name="Two-Stage"
													data-monetate-pid="31AS6KM3B23"
													data-monetate-producturl="https://www.troybilt.com/en_US/two-stage-snow-blowers/storm-2600-snow-blower/31AS6KM3B23.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row">
															<div className="content-asset">
																{/* dwMarker="content" dwContentID="66fc2860e5c54a860cabdd23ec" */}
																<div
																	className="badge badge-primary"
																	style={{ textAlign: "right" }}>
																	<strong>Best Seller</strong>
																</div>
															</div>{" "}
															{/* End content-asset */}
														</div>
														<a href="/en_US/two-stage-snow-blowers/storm-2600-snow-blower/31AS6KM3B23.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw34c3c3f5/products/Equipment/Troy-Bilt_Storm2600_14.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw34c3c3f5/products/Equipment/Troy-Bilt_Storm2600_14.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw34c3c3f5/products/Equipment/Troy-Bilt_Storm2600_14.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw34c3c3f5/products/Equipment/Troy-Bilt_Storm2600_14.jpg?sw=315&sh=315&sm=fit"
																	alt="Storm™ 2600 Snow Blower"
																	title="Storm&trade; 2600 Snow Blower"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw34c3c3f5/products/Equipment/Troy-Bilt_Storm2600_14.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw34c3c3f5/products/Equipment/Troy-Bilt_Storm2600_14.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=31AS6KM3B23"
															data-full-detail-txt="View Full Details"
															title="Quickview Storm™ 2600 Snow Blower, Opens Dialog"
															aria-label="Quickview Storm™ 2600 Snow Blower, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/two-stage-snow-blowers/storm-2600-snow-blower/31AS6KM3B23.html?fitsOnModel=false"
																data-gtmdata='{"id":"31AS6KM3B23","name":"Storm™ 2600 Snow Blower","productType":"WholeGood"}'
																itemProp="url">
																Storm™ 2600 Snow Blower
															</a>
														</div>
														<div
															className="product-extended-name "
															itemProp="name">
															<span className="name">Two-Stage</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																31AS6KM3B23
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
																		content={1099.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$1,099.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="31AS6KM3B23"
																data-bv-redirect-url="/en_US/two-stage-snow-blowers/storm-2600-snow-blower/31AS6KM3B23.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="c7349a91-dada-48f2-a705-9c06b244e636"
																		href="/en_US/two-stage-snow-blowers/storm-2600-snow-blower/31AS6KM3B23.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.4 out of 5 stars. 27 reviews "
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
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_cV63Yyz1zh") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_cV63Yyz1zh") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_cV63Yyz1zh"
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
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_nAm5b0dhej") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_nAm5b0dhej") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_nAm5b0dhej"
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
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_qFPlJhypVd") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_qFPlJhypVd") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_qFPlJhypVd"
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
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_YtF7wyxoAo") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_YtF7wyxoAo") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_YtF7wyxoAo"
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
																								fill: 'url("#bv_inline_ratings_star_filled_4_40.74_bvGgsq13pF") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_40.74_bvGgsq13pF") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_40.74_bvGgsq13pF"
																								x1="40.74%"
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
																				4.4
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={27}
																			/>
																			<div className="bv_text">(27)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	26 in. clearing width and 20 in. intake height
																	powers through up to 12" of snow
																</li>
																<li>
																	Remote pitch control lever allows the operator
																	to change the height of snow discharge from
																	the dashboard
																</li>
																<li>
																	Just One Hand™ operation allows you to lock in
																	your speed and adjust chute controls without
																	disengaging the drive
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
																		data-pid="31AS6KM3B23"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"31AS6KM3B23","name":"Storm™ 2600 Snow Blower","productType":"WholeGood"}'>
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
																	id="31AS6KM3B23"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="31AS6KM3B23">
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
											<div className="grid-tile" data-pid="31AH8DR5B66">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Arctic Storm™ 3010 XP Snow Blower"
													data-product-extended-name="Two-Stage"
													data-monetate-pid="31AH8DR5B66"
													data-monetate-producturl="https://www.troybilt.com/en_US/two-stage-snow-blowers/arctic-storm-3010-xp-snow-blower/31AH8DR5B66.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row">
															<div className="content-asset">
																{/* dwMarker="content" dwContentID="67d0888f3b105e1fc77be015a9" */}
																<div className="image-badge">
																	<img
																		alt="top-rated"
																		src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw0480da0a/images/Product%20Badges/PromoFlag_TopRated_TB_75x25.png"
																		title=""
																	/>
																</div>
															</div>{" "}
															{/* End content-asset */}
														</div>
														<a href="/en_US/two-stage-snow-blowers/arctic-storm-3010-xp-snow-blower/31AH8DR5B66.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwabbb317d/products/Equipment/Troy-Bilt_ArcticStorm3010XP_1.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwabbb317d/products/Equipment/Troy-Bilt_ArcticStorm3010XP_1.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwabbb317d/products/Equipment/Troy-Bilt_ArcticStorm3010XP_1.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwabbb317d/products/Equipment/Troy-Bilt_ArcticStorm3010XP_1.jpg?sw=315&sh=315&sm=fit"
																	alt="Arctic Storm™ 3010 XP Snow Blower"
																	title="Arctic Storm&trade; 3010 XP Snow Blower"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwabbb317d/products/Equipment/Troy-Bilt_ArcticStorm3010XP_1.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwabbb317d/products/Equipment/Troy-Bilt_ArcticStorm3010XP_1.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=31AH8DR5B66"
															data-full-detail-txt="View Full Details"
															title="Quickview Arctic Storm™ 3010 XP Snow Blower, Opens Dialog"
															aria-label="Quickview Arctic Storm™ 3010 XP Snow Blower, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/two-stage-snow-blowers/arctic-storm-3010-xp-snow-blower/31AH8DR5B66.html?fitsOnModel=false"
																data-gtmdata='{"id":"31AH8DR5B66","name":"Arctic Storm™ 3010 XP Snow Blower","productType":"WholeGood"}'
																itemProp="url">
																Arctic Storm™ 3010 XP Snow Blower
															</a>
														</div>
														<div
															className="product-extended-name "
															itemProp="name">
															<span className="name">Two-Stage</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																31AH8DR5B66
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
																		content={2199.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$2,199.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="31AH8DR5B66"
																data-bv-redirect-url="/en_US/two-stage-snow-blowers/arctic-storm-3010-xp-snow-blower/31AH8DR5B66.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="0fe7961f-ff19-4413-88fe-2f2f6e2f4101"
																		href="/en_US/two-stage-snow-blowers/arctic-storm-3010-xp-snow-blower/31AH8DR5B66.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.6 out of 5 stars. 164 reviews "
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
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_r7q8dGQ96G") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_r7q8dGQ96G") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_r7q8dGQ96G"
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
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_jizZks5Zi4") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_jizZks5Zi4") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_jizZks5Zi4"
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
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_y7tRVB8B2R") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_y7tRVB8B2R") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_y7tRVB8B2R"
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
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_vlEXggd9t0") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_vlEXggd9t0") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_vlEXggd9t0"
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
																								fill: 'url("#bv_inline_ratings_star_filled_4_60.37_cLIzInmRIY") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_60.37_cLIzInmRIY") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_60.37_cLIzInmRIY"
																								x1="60.37%"
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
																				4.6
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={164}
																			/>
																			<div className="bv_text">(164)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	30 in. clearing width and a 23 in. intake
																	height designed to handle up to 18 in. of
																	snowfall
																</li>
																<li>
																	Rugged, hi-arc designed steel chute has
																	extended reach to minimize snow blowback on
																	the operator
																</li>
																<li>
																	Just One Touch™ electric 4-way chute control
																	allows you to change the direction of snow
																	discharge with just the push of a thumb
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
																		data-pid="31AH8DR5B66"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"31AH8DR5B66","name":"Arctic Storm™ 3010 XP Snow Blower","productType":"WholeGood"}'>
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
																	id="31AH8DR5B66"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="31AH8DR5B66">
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
											<div className="grid-tile" data-pid="31CM6CP3B66">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Storm™ 2620 Snow Blower"
													data-product-extended-name="Two-Stage"
													data-monetate-pid="31CM6CP3B66"
													data-monetate-producturl="https://www.troybilt.com/en_US/two-stage-snow-blowers/storm-2620-snow-blower/31CM6CP3B66.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/two-stage-snow-blowers/storm-2620-snow-blower/31CM6CP3B66.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5b8c6e6/products/Equipment/Troy-Bilt_Storm 2620_12.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5b8c6e6/products/Equipment/Troy-Bilt_Storm 2620_12.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5b8c6e6/products/Equipment/Troy-Bilt_Storm 2620_12.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5b8c6e6/products/Equipment/Troy-Bilt_Storm 2620_12.jpg?sw=315&sh=315&sm=fit"
																	alt="Storm™ 2620 Snow Blower"
																	title="Storm&trade; 2620 Snow Blower"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5b8c6e6/products/Equipment/Troy-Bilt_Storm 2620_12.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5b8c6e6/products/Equipment/Troy-Bilt_Storm 2620_12.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=31CM6CP3B66"
															data-full-detail-txt="View Full Details"
															title="Quickview Storm™ 2620 Snow Blower, Opens Dialog"
															aria-label="Quickview Storm™ 2620 Snow Blower, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/two-stage-snow-blowers/storm-2620-snow-blower/31CM6CP3B66.html?fitsOnModel=false"
																data-gtmdata='{"id":"31CM6CP3B66","name":"Storm™ 2620 Snow Blower","productType":"WholeGood"}'
																itemProp="url">
																Storm™ 2620 Snow Blower
															</a>
														</div>
														<div
															className="product-extended-name "
															itemProp="name">
															<span className="name">Two-Stage</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																31CM6CP3B66
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
																		content={1199.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$1,199.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="31CM6CP3B66"
																data-bv-redirect-url="/en_US/two-stage-snow-blowers/storm-2620-snow-blower/31CM6CP3B66.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="b3129f50-8edf-4617-af54-2d7ac76f217c"
																		href="/en_US/two-stage-snow-blowers/storm-2620-snow-blower/31CM6CP3B66.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.3 out of 5 stars. 10 reviews "
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
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_p6tpxPSXrC") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_p6tpxPSXrC") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_p6tpxPSXrC"
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
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_WLnbbICMGb") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_WLnbbICMGb") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_WLnbbICMGb"
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
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_H0DKBjeBQi") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_H0DKBjeBQi") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_H0DKBjeBQi"
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
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_CwOiGZiZRB") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_CwOiGZiZRB") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_CwOiGZiZRB"
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
																								fill: 'url("#bv_inline_ratings_star_filled_4_30.00_iSEXi1jIRo") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_30.00_iSEXi1jIRo") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_30.00_iSEXi1jIRo"
																								x1="30.00%"
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
																				4.3
																			</div>
																		</div>
																		<div
																			className="bv_numReviews_component_container"
																			aria-hidden="true">
																			<meta
																				itemProp="reviewCount"
																				content={10}
																			/>
																			<div className="bv_text">(10)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	26 in. clearing width and 20 in. intake height
																	powers through up to 12" of snow
																</li>
																<li>
																	In-dash LED headlight helps provide visibility
																	in low-light conditions
																</li>
																<li>
																	Delivers reliable power through a Troy-Bilt
																	243cc engine with push-button electric start
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
																		data-pid="31CM6CP3B66"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"31CM6CP3B66","name":"Storm™ 2620 Snow Blower","productType":"WholeGood"}'>
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
																	id="31CM6CP3B66"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="31CM6CP3B66">
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
											<div className="grid-tile" data-pid="31AH5DP5B66">
												<div
													className="product-tile"
													itemScope=""
													itemType="http://schema.org/Product"
													data-product-name="Storm™ 3090 Snow Blower"
													data-product-extended-name="Two-Stage"
													data-monetate-pid="31AH5DP5B66"
													data-monetate-producturl="https://www.troybilt.com/en_US/two-stage-snow-blowers/storm-3090-snow-blower/31AH5DP5B66.html">
													{/* dwMarker="product" dwContentID="null" */}
													<div className="image-container">
														<div className="badge-row"></div>
														<a href="/en_US/two-stage-snow-blowers/storm-3090-snow-blower/31AH5DP5B66.html?fitsOnModel=false">
															<picture>
																{/*[if IE 9]><video style="display: none;"><![endif]*/}
																<source
																	media="(min-width: 768px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c216c8/products/Equipment/Troy-Bilt_Storm3090_13.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(min-width: 480px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c216c8/products/Equipment/Troy-Bilt_Storm3090_13.jpg?sw=290&sh=290&sm=fit"
																/>
																<source
																	media="(max-width: 479px)"
																	srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c216c8/products/Equipment/Troy-Bilt_Storm3090_13.jpg?sw=315&sh=315&sm=fit"
																/>
																{/*[if IE 9]></video><![endif]*/}
																<img
																	className="tile-image"
																	src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c216c8/products/Equipment/Troy-Bilt_Storm3090_13.jpg?sw=315&sh=315&sm=fit"
																	alt="Storm™ 3090 Snow Blower"
																	title="Storm&trade; 3090 Snow Blower"
																	itemProp="image"
																	data-compare-desktop="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c216c8/products/Equipment/Troy-Bilt_Storm3090_13.jpg?sw=90&sh=90&sm=fit"
																	data-compare-mobile="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwa5c216c8/products/Equipment/Troy-Bilt_Storm3090_13.jpg?sw=145&sh=145&sm=fit"
																/>
															</picture>
														</a>
														<a
															className="quickview btn btn-secondary hidden-sm-down"
															href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=31AH5DP5B66"
															data-full-detail-txt="View Full Details"
															title="Quickview Storm™ 3090 Snow Blower, Opens Dialog"
															aria-label="Quickview Storm™ 3090 Snow Blower, Opens Dialog">
															Quickview
														</a>
													</div>
													<div className="tile-body tile-footer-xlg">
														<div className="pdp-link" itemProp="name">
															<a
																className="link"
																href="/en_US/two-stage-snow-blowers/storm-3090-snow-blower/31AH5DP5B66.html?fitsOnModel=false"
																data-gtmdata='{"id":"31AH5DP5B66","name":"Storm™ 3090 Snow Blower","productType":"WholeGood"}'
																itemProp="url">
																Storm™ 3090 Snow Blower
															</a>
														</div>
														<div
															className="product-extended-name "
															itemProp="name">
															<span className="name">Two-Stage</span>
														</div>
														<div className="product-number invisible d-none">
															Item#:
															<span className="product-id" itemProp="productID">
																31AH5DP5B66
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
																		content={1599.0}
																	/>
																	<span className="msrp-text d-none">
																		price.from
																	</span>
																	<span className="formatted-price">
																		$1,599.00
																	</span>
																	<span className="msrp-text d-none">
																		price.msrp
																	</span>
																</span>
															</span>
														</div>
														<div className="ratings">
															<div
																data-bv-show="inline_rating"
																data-bv-productid="31AH5DP5B66"
																data-bv-redirect-url="/en_US/two-stage-snow-blowers/storm-3090-snow-blower/31AH5DP5B66.html?fitsOnModel=false"
																data-bv-ready="true">
																<div>
																	<a
																		id="fd8624d8-82ec-4890-8594-43c4fab48366"
																		href="/en_US/two-stage-snow-blowers/storm-3090-snow-blower/31AH5DP5B66.html?fitsOnModel=false"
																		className="bv_main_container bv_hover"
																		aria-label="4.1 out of 5 stars. 47 reviews "
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
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_ppydjutrQa") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_0_99.99_ppydjutrQa") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_0_99.99_ppydjutrQa"
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
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_9rXkrIYSoe") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_1_99.99_9rXkrIYSoe") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_1_99.99_9rXkrIYSoe"
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
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_CzB9cXYSo8") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_2_99.99_CzB9cXYSo8") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_2_99.99_CzB9cXYSo8"
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
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_PTs81ISgzo") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_3_99.99_PTs81ISgzo") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_3_99.99_PTs81ISgzo"
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
																								fill: 'url("#bv_inline_ratings_star_filled_4_12.77_s8bCpzBc99") !important',
																							}}
																						/>
																						<path
																							d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																							style={{
																								fill: 'url("#bv_inline_ratings_star_filled_4_12.77_s8bCpzBc99") !important',
																							}}
																						/>
																						<defs>
																							<linearGradient
																								id="bv_inline_ratings_star_filled_4_12.77_s8bCpzBc99"
																								x1="12.77%"
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
																				content={47}
																			/>
																			<div className="bv_text">(47)</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
														<div className="tile-attributes" itemProp="name">
															<ul>
																<li>
																	30 in. clearing width and a 20 in. intake
																	height powers through up to 12" of snow
																</li>
																<li>
																	Powered by a Troy-Bilt 357cc OHV engine
																	equipped with push-button electric start
																</li>
																<li>
																	Heated hand grips help provide comfort in cold
																	weather
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
																		data-pid="31AH5DP5B66"
																		data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																		data-gtmdata='{"id":"31AH5DP5B66","name":"Storm™ 3090 Snow Blower","productType":"WholeGood"}'>
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
																	id="31AH5DP5B66"
																	className="custom-control-input"
																	defaultValue="true"
																/>
																<label
																	className="custom-control-label"
																	htmlFor="31AH5DP5B66">
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
											data-sort-options='{"options":[{"displayName":"Most Popular","id":"popularity-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=Sort%20by%20Popularity&start=0&sz=6"},{"displayName":"Price (High to Low)","id":"price-high-low-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=Price%20(High%20to%20Low)&start=0&sz=6"},{"displayName":"Price (Low to High)","id":"price-low-high-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=Price%20(Low%20to%20High)&start=0&sz=6"},{"displayName":"Sort by Name (A-Z)","id":"name-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&srule=name&start=0&sz=6"}],"ruleId":"ATS"}'
											data-page-size={6.0}
											data-page-number={0}>
											<div className="show-more">
												<div className="text-center">
													<button
														className="btn btn-primary col-12"
														data-url="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=two-stage&start=6&sz=6">
														Load More Products
													</button>
												</div>
											</div>
											<input
												type="hidden"
												className="permalink"
												defaultValue="https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers?https://www.troybilt.com/en_US/snow-blowers/two-stage-snow-blowers=undefined&start=0&sz=6"
											/>
											<input
												type="hidden"
												className="category-id"
												defaultValue="two-stage"
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
