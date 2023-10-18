"use client";

import ProductTile from "@/app/components/product";
import jsonData from "./data.json";

export default function SearchResults({}) {
	return (
		<div className="container search-results">
			<link
				rel="stylesheet"
				href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/promotion-10-19-23/style.css"
			/>
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
																24&quot;
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
																26&quot;
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
																28&quot;
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
																30&quot;
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
																34&quot;
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
																13&quot; x 4&quot;
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
																15&quot; x 5&quot;
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
																16&quot; x 4.8&quot;
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
																16&quot; x 6.5&quot;
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
										
											{jsonData.products.map(function (block, i) {
												return <ProductTile block={block} key={i} />;
											})}
									
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
