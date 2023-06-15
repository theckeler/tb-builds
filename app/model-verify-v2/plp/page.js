"use client";
import { useState } from "react";

import Fit from "./Fit";
import FitsProduct from "./FitsProduct";

export default function ModelVerifyV2PLP() {
	const [results, setResults] = useState(false);

	return (
		<div id="main">
			<link
				rel="stylesheet"
				href="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/en_US/v1686675957253/css/search.css"
			/>

			<div
				className="position-fixed p-1 p-lg-4 text-center text-white"
				style={{
					right: "0",
					top: "0",
					zIndex: "100001",
					backgroundColor: "green",
					maxWidth: "240px",
					fontSize: "0.8em",
				}}>
				<p className="mb-0" style={{ lineHeight: 1.2 }}>
					<strong>Note:</strong> This is only to toggle the stock & results
					only.
				</p>
				<div>
					<button
						className="w-100 mb-1"
						onClick={() => {
							setResults(!results);
						}}>
						Toggle Results
					</button>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="search-breadcrumb">
							<div className="row">
								<div className="col">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="/en_US/service-and-parts">Service &amp; Parts</a>
										</li>
										<li className="breadcrumb-item">
											<a href="/en_US/service-and-parts/shop-by-part-type">
												Shop By Part Type
											</a>
										</li>
										<li className="breadcrumb-item">
											<a href="/en_US/shop-by-part-type/blades">Blades</a>
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="search-banner">
				<h1 className="header h2 cat-page-title container">Blades</h1>
				<div className="seo-text container">
					<p>
						<img
							alt="troy-bilt-lawn-mower-blades"
							src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-sales-catalog/default/dw97e58d6b/Part%20Category%20Headers/parts_headers_blades.jpg"
							title="Genuine Troy-Bilt Lawn Mower Blades"
						/>
					</p>
					<br />
					<p>
						Troy-Bilt has the lawn mower blade you&apos;re looking for,
						including three-in-one blades, high-lift and mulching blades. Use
						our
						<a href="https://www.troybilt.com/en_US/service-and-parts#diagrams">
							Parts Diagram Tool
						</a>
						&nbsp;to look up the blade for your Troy-Bilt or our
						<a href="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Page-Show?cid=part-finder">
							Part Finder
						</a>
						&nbsp;to make sure you&apos;re getting the right blade for your
						machine.
					</p>
				</div>
			</div>
			<div className="container search-results" data-dynosite="false">
				<div className="row search-nav border-0"></div>
				<div className="row">
					<div className="tab-content col-12">
						<div
							className="tab-pane container active"
							id="product-search-results"
							role="tabpanel1"
							aria-describedby="product-search-results"
							aria-labelledby="product-search-results-link">
							<div className="row result-header">
								<div className="result-count col-12  "></div>
							</div>

							<Fit
								{...{ results, setResults }}
								className="d-md-none mt-4 border-bottom"
							/>

							<div className="row grid-header">
								<div className="col-6 col-lg-8">
									<button
										type="button"
										className="btn btn-filter filter-results col-12 d-md-none">
										Filter By
										<i>
											<img
												className="icon icon-filter "
												src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwcc0347ec/images/svg-icons/icon-filter.svg"
												alt=""
											/>
										</i>
									</button>
									<div className="filter-bar d-none d-md-inline-block"></div>
								</div>
								<div className="text-right col-6 col-lg-4">
									<span className="item-count">372 Items</span>
									<div className="select-wrapper">
										<select
											id="sort-order"
											name="sort-order"
											className="custom-select"
											aria-label="Sort By:">
											<option
												className="popularity-sort"
												value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=Sort%20by%20Popularity&start=0&sz=12"
												data-id="popularity-sort">
												Sort By: Most Popular
											</option>
											<option
												className="price-high-low-sort"
												value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=Price%20(High%20to%20Low)&start=0&sz=12"
												data-id="price-high-low-sort">
												Sort By: Price (High to Low)
											</option>
											<option
												className="price-low-high-sort"
												value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=Price%20(Low%20to%20High)&start=0&sz=12"
												data-id="price-low-high-sort">
												Sort By: Price (Low to High)
											</option>
											<option
												className="name-sort"
												value="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=name&start=0&sz=12"
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
														src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dw84da2762/images/svg-icons/icon-close.svg"
														alt="close"
													/>
												</span>
											</button>
										</div>
									</div>
									<div>
										<div className="refinements">
											<Fit {...{ results, setResults }} />

											<div className="card collapsible-xl refinement refinement-fits-on">
												<div className="card-header">
													<span
														className="refinement-name"
														id="Fits On Link"
														aria-expanded="false"
														aria-controls="Fits On Content"
														tabIndex={0}>
														Fits On
													</span>
												</div>
												<div
													className="card-body"
													id="Fits On Content"
													role="region"
													aria-labelledby="Fits On Link">
													<ul className="values content">
														<li
															title="Refine by Fits On: Chipper/Shredder (Vacuum)"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Chipper%2FShredder%20%28Vacuum%29"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Chipper/Shredder (Vacuum)
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Commercial Walk-Behind"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Commercial%20Walk-Behind"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Commercial Walk-Behind
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Handheld Brushcutter"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Handheld%20Brushcutter"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Handheld Brushcutter
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Handheld String Trimmer"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Handheld%20String%20Trimmer"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Handheld String Trimmer
																	<span className="count d-none">(4)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Lawn Edger"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Lawn%20Edger"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Lawn Edger
																	<span className="count d-none">(12)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Riding Mower"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Riding%20Mower"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Riding Mower
																	<span className="count d-none">(163)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Sickle Bar Mower"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Sickle%20Bar%20Mower"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Sickle Bar Mower
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Walk-Behind Mower"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Walk-Behind%20Mower"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Walk-Behind Mower
																	<span className="count d-none">(42)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Fits On: Zero-Turn"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=fits-on-machine-type&prefv1=Zero-Turn"
																role="checkbox"
																id="null"
																className="fits-on-machine-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Zero-Turn
																	<span className="count d-none">(19)</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="card   collapsible-xl refinement refinement-cutting-deck-width">
												<div className="card-header">
													<span
														className="refinement-name"
														id="Cutting Deck Width Link"
														aria-expanded="false"
														aria-controls="Cutting Deck Width Content"
														tabIndex={0}>
														Cutting Deck Width
													</span>
												</div>
												<div
													className="card-body"
													id="Cutting Deck Width Content"
													role="region"
													aria-labelledby="Cutting Deck Width Link">
													<ul className="values content">
														<li
															title="Refine by Cutting Deck Width: 19 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=19%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	19 in
																	<span className="count d-none">(3)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 20 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=20%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	20 in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 21 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=21%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21 in
																	<span className="count d-none">(17)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 22 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=22%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	22 in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 23 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=23%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	23 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 24 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=24%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	24 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 27 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=27%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	27 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 28 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=28%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	28 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 30 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=30%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	30 in
																	<span className="count d-none">(4)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 33 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=33%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	33 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 34 in and 50 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=34%20in%20and%2050%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	34 in and 50 in
																	<span className="count d-none">(3)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 36 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=36%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	36 in
																	<span className="count d-none">(3)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 38 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=38%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	38 in
																	<span className="count d-none">(10)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 40 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=40%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	40 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 42 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=42%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	42 in
																	<span className="count d-none">(41)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 42 in Timing"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=42%20in%20Timing"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	42 in Timing
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 44 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=44%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	44 in
																	<span className="count d-none">(5)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 46 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=46%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	46 in
																	<span className="count d-none">(33)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 46 in and 46 in Fabricated"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=46%20in%20and%2046%20in%20Fabricated"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	46 in and 46 in Fabricated
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 48 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=48%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	48 in
																	<span className="count d-none">(11)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 50 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=50%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	50 in
																	<span className="count d-none">(18)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 50-in 54-in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=50-in%2054-in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	50-in 54-in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 54 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=54%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	54 in
																	<span className="count d-none">(22)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 54 in and 54 in Fabricated"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=54%20in%20and%2054%20in%20Fabricated"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	54 in and 54 in Fabricated
																	<span className="count d-none">(5)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 60 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=60%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	60 in
																	<span className="count d-none">(11)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Cutting Deck Width: 72 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=cutting-deck-width&prefv1=72%20in"
																role="checkbox"
																id="null"
																className="cutting-deck-width"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	72 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="card   collapsible-xl refinement refinement-center-hole-pattern">
												<div className="card-header">
													<span
														className="refinement-name"
														id="Center Hole Pattern Link"
														aria-expanded="false"
														aria-controls="Center Hole Pattern Content"
														tabIndex={0}>
														Center Hole Pattern
													</span>
												</div>
												<div
													className="card-body"
													id="Center Hole Pattern Content"
													role="region"
													aria-labelledby="Center Hole Pattern Link">
													<ul className="values content">
														<li
															title="Refine by Center Hole Pattern: 3/4 x 9/16 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=3%2F4%20x%209%2F16%20in"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	3/4 x 9/16 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Center Hole Pattern: Bow Tie"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=Bow%20Tie"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Bow Tie
																	<span className="count d-none">(23)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Center Hole Pattern: FastAttach®"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=FastAttach%C2%AE"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	FastAttach®
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Center Hole Pattern: Round"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=Round"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Round
																	<span className="count d-none">(95)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Center Hole Pattern: S"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=S"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	S<span className="count d-none">(30)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Center Hole Pattern: Star"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=Star"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Star
																	<span className="count d-none">(80)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Center Hole Pattern: Universal"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=center-hole-pattern&prefv1=Universal"
																role="checkbox"
																id="null"
																className="center-hole-pattern"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Universal
																	<span className="count d-none">(4)</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="card   collapsible-xl refinement refinement-blade-length">
												<div className="card-header">
													<span
														className="refinement-name"
														id="Blade Length Link"
														aria-expanded="false"
														aria-controls="Blade Length Content"
														tabIndex={0}>
														Blade Length
													</span>
												</div>
												<div
													className="card-body"
													id="Blade Length Content"
													role="region"
													aria-labelledby="Blade Length Link">
													<ul className="values content">
														<li
															title="Refine by Blade Length: 1.62 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=1.62%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	1.62 in
																	<span className="count d-none">(3)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 10.19 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=10.19%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	10.19 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 10.97 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=10.97%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	10.97 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 12 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=12%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	12 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 14.2 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=14.2%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	14.2 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 14.88 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=14.88%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	14.88 in
																	<span className="count d-none">(7)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 15.12 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=15.12%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	15.12 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 15.19 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=15.19%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	15.19 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 15.82 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=15.82%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	15.82 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 15.94 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=15.94%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	15.94 in
																	<span className="count d-none">(3)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 16.28 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=16.28%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	16.28 in
																	<span className="count d-none">(7)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 16.5 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=16.5%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	16.5 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 16.75 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=16.75%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	16.75 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 16 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=16%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	16 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 17.27-in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=17.27-in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	17.27-in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 17.2 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=17.2%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	17.2 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 17.30 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=17.30%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	17.30 in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 17.75 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=17.75%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	17.75 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 17.90 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=17.90%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	17.90 in
																	<span className="count d-none">(9)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 17 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=17%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	17 in
																	<span className="count d-none">(7)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 18.23 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=18.23%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	18.23 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 18.50 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=18.50%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	18.50 in
																	<span className="count d-none">(11)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 18.5 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=18.5%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	18.5 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 18.61 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=18.61%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	18.61 in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 18.61-in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=18.61-in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	18.61-in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 18.67 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=18.67%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	18.67 in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 19.38 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=19.38%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	19.38 in
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 19.97 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=19.97%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	19.97 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 19 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=19%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	19 in
																	<span className="count d-none">(7)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 2.88 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=2.88%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	2.88 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 20.25 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=20.25%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	20.25 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 20.5 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=20.5%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	20.5 in
																	<span className="count d-none">(5)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 20.62 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=20.62%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	20.62 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 20 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=20%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	20 in
																	<span className="count d-none">(5)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 21.18 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21.18%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21.18 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 21.20 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21.20%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21.20 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title='Refine by Blade Length: 21.23"'
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21.23%22"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21.23&apos;&apos;
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 21.23 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21.23%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21.23 in
																	<span className="count d-none">(27)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 21.25 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21.25%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21.25 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 21.2 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21.2%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21.2 in
																	<span className="count d-none">(4)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 21 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=21%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	21 in
																	<span className="count d-none">(22)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 22.23 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=22.23%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	22.23 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 22.3 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=22.3%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	22.3 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 22 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=22%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	22 in
																	<span className="count d-none">(8)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 23.25 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=23.25%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	23.25 in
																	<span className="count d-none">(17)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 23.35 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=23.35%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	23.35 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 23 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=23%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	23 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 24 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=24%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	24 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 25 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=25%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	25 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 27.56 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=27.56%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	27.56 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 3.3 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=3.3%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	3.3 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 30 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=30%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	30 in
																	<span className="count d-none">(3)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 7.50 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=7.50%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	7.50 in
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 7.87 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=7.87%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	7.87 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 8.37 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=8.37%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	8.37 in
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Length: 9 in"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-length&prefv1=9%20in"
																role="checkbox"
																id="null"
																className="blade-length"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	9 in
																	<span className="count d-none">(5)</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="card   collapsible-xl refinement refinement-blade-category">
												<div className="card-header">
													<span
														className="refinement-name"
														id="Blade Category Link"
														aria-expanded="false"
														aria-controls="Blade Category Content"
														tabIndex={0}>
														Blade Category
													</span>
												</div>
												<div
													className="card-body"
													id="Blade Category Content"
													role="region"
													aria-labelledby="Blade Category Link">
													<ul className="values content">
														<li
															title="Refine by Blade Category: Diamond"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-category&prefv1=Diamond"
																role="checkbox"
																id="null"
																className="blade-category"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Diamond
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Category: Hard Coated"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-category&prefv1=Hard%20Coated"
																role="checkbox"
																id="null"
																className="blade-category"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Hard Coated
																	<span className="count d-none">(6)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Category: Premium"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-category&prefv1=Premium"
																role="checkbox"
																id="null"
																className="blade-category"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Premium
																	<span className="count d-none">(7)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Category: Sand"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-category&prefv1=Sand"
																role="checkbox"
																id="null"
																className="blade-category"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Sand
																	<span className="count d-none">(18)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Category: Standard"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-category&prefv1=Standard"
																role="checkbox"
																id="null"
																className="blade-category"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Standard
																	<span className="count d-none">(155)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Category: Xtreme®"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-category&prefv1=Xtreme%C2%AE"
																role="checkbox"
																id="null"
																className="blade-category"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Xtreme®
																	<span className="count d-none">(38)</span>
																</span>
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="card   collapsible-xl refinement refinement-blade-type">
												<div className="card-header">
													<span
														className="refinement-name"
														id="Blade Type Link"
														aria-expanded="false"
														aria-controls="Blade Type Content"
														tabIndex={0}>
														Blade Type
													</span>
												</div>
												<div
													className="card-body"
													id="Blade Type Content"
													role="region"
													aria-labelledby="Blade Type Link">
													<ul className="values content">
														<li
															title="Refine by Blade Type: 2-in-1"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=2-in-1"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	2-in-1
																	<span className="count d-none">(52)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: 3-in-1"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=3-in-1"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	3-in-1
																	<span className="count d-none">(32)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: 4-Tooth Brushcutter"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=4-Tooth%20Brushcutter"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	4-Tooth Brushcutter
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Chipper"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Chipper"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Chipper
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Dethatching"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Dethatching"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Dethatching
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Extra High Lift"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Extra%20High%20Lift"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Extra High Lift
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Flail"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Flail"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Flail
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: High Lift"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=High%20Lift"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	High Lift
																	<span className="count d-none">(36)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Line Cut-Off"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Line%20Cut-Off"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Line Cut-Off
																	<span className="count d-none">(4)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Low Lift"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Low%20Lift"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Low Lift
																	<span className="count d-none">(25)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Medium Lift"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Medium%20Lift"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Medium Lift
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Mulching"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Mulching"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Mulching
																	<span className="count d-none">(46)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Power Rake"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Power%20Rake"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Power Rake
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Shredder"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Shredder"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Shredder
																	<span className="count d-none">(2)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Standard"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Standard"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Standard
																	<span className="count d-none">(10)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Tri-Cut"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Tri-Cut"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Tri-Cut
																	<span className="count d-none">(1)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Ultra High-Lift"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Ultra%20High-Lift"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Ultra High-Lift
																	<span className="count d-none">(9)</span>
																</span>
															</a>
														</li>
														<li
															title="Refine by Blade Type: Xtreme"
															className="col-sm-4 col-md-12 ">
															<a
																href="/en_US/shop-by-part-type/blades?prefn1=blade-type&prefv1=Xtreme"
																role="checkbox"
																id="null"
																className="blade-type"
																aria-checked="false">
																<img
																	className="icon icon-checkbox-unselected "
																	src="https://www.troybilt.com/on/demandware.static/Sites-troybilt-Site/-/default/dwb727d5a6/images/svg-icons/icon-checkbox-unselected.svg"
																	alt=""
																/>
																<span className=" ">
																	Xtreme
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
												href="/en_US/shop-by-part-type/blades">
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
												<div className="grid-tile" data-pid="942-0741A">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="Mulching Blade for 21-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="942-0741A"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/mulching-blade-for-21-inch-cutting-decks/942-0741A.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/mulching-blade-for-21-inch-cutting-decks/942-0741A.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw894bd34c/products/942-0741A.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw894bd34c/products/942-0741A.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw894bd34c/products/942-0741A.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw894bd34c/products/942-0741A.jpg?sw=315&sh=315&sm=fit"
																		alt="Mulching Blade for 21-inch Cutting Decks"
																		title="Mulching Blade for 21-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=942-0741A"
																data-full-detail-txt="View Full Details"
																title="Quickview Mulching Blade for 21-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview Mulching Blade for 21-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/mulching-blade-for-21-inch-cutting-decks/942-0741A.html?fitsOnModel=false"
																	data-gtmdata='{"id":"942-0741A","name":"Mulching Blade for 21-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	Mulching Blade for 21-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	942-0741A
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="25.99">
																			$25.99
																		</span>
																	</span>
																</span>
															</div>

															<FitsProduct
																{...{ results, setResults }}
																fits={false}
															/>

															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="942-0741A"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"942-0741A","name":"Mulching Blade for 21-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={1}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="942-04308A">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="2-in-1 Blade for 42-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="942-04308A"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/2-in-1-blade-for-42-inch-cutting-decks/942-04308A.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/2-in-1-blade-for-42-inch-cutting-decks/942-04308A.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbd2c8a67/products/942-04308A.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbd2c8a67/products/942-04308A.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbd2c8a67/products/942-04308A.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbd2c8a67/products/942-04308A.jpg?sw=315&sh=315&sm=fit"
																		alt="2-in-1 Blade for 42-inch Cutting Decks"
																		title="2-in-1 Blade for 42-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=942-04308A"
																data-full-detail-txt="View Full Details"
																title="Quickview 2-in-1 Blade for 42-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 2-in-1 Blade for 42-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/2-in-1-blade-for-42-inch-cutting-decks/942-04308A.html?fitsOnModel=false"
																	data-gtmdata='{"id":"942-04308A","name":"2-in-1 Blade for 42-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	2-in-1 Blade for 42-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	942-04308A
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="27.50">
																			$27.50
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct {...{ results, setResults }} />
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="942-04308A"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"942-04308A","name":"2-in-1 Blade for 42-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={2}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="490-110-Y194">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="Ultra High-Lift Blade Set for 54-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="490-110-Y194"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/ultra-high-lift-blade-set-for-54-inch-cutting-decks/490-110-Y194.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/ultra-high-lift-blade-set-for-54-inch-cutting-decks/490-110-Y194.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd383e6f6/products/490-110-Y194_1.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd383e6f6/products/490-110-Y194_1.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd383e6f6/products/490-110-Y194_1.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd383e6f6/products/490-110-Y194_1.jpg?sw=315&sh=315&sm=fit"
																		alt="Ultra High-Lift Blade Set for 54-inch Cutting Decks"
																		title="Ultra High-Lift Blade Set for 54-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=490-110-Y194"
																data-full-detail-txt="View Full Details"
																title="Quickview Ultra High-Lift Blade Set for 54-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview Ultra High-Lift Blade Set for 54-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/ultra-high-lift-blade-set-for-54-inch-cutting-decks/490-110-Y194.html?fitsOnModel=false"
																	data-gtmdata='{"id":"490-110-Y194","name":"Ultra High-Lift Blade Set for 54-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	Ultra High-Lift Blade Set for 54-inch Cutting
																	Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	490-110-Y194
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="80.99">
																			$80.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct {...{ results, setResults }} />
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="490-110-Y194"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"490-110-Y194","name":"Ultra High-Lift Blade Set for 54-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={3}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="490-110-Y205">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="Xtreme® Blade Set for 54-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="490-110-Y205"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/xtreme-blade-set-for-54-inch-cutting-decks/490-110-Y205.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/xtreme-blade-set-for-54-inch-cutting-decks/490-110-Y205.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw5ed31bca/products/490-110-Y205_1.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw5ed31bca/products/490-110-Y205_1.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw5ed31bca/products/490-110-Y205_1.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw5ed31bca/products/490-110-Y205_1.jpg?sw=315&sh=315&sm=fit"
																		alt="Xtreme® Blade Set for 54-inch Cutting Decks"
																		title="Xtreme&reg; Blade Set for 54-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=490-110-Y205"
																data-full-detail-txt="View Full Details"
																title="Quickview Xtreme® Blade Set for 54-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview Xtreme® Blade Set for 54-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/xtreme-blade-set-for-54-inch-cutting-decks/490-110-Y205.html?fitsOnModel=false"
																	data-gtmdata='{"id":"490-110-Y205","name":"Xtreme® Blade Set for 54-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	Xtreme® Blade Set for 54-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	490-110-Y205
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="86.99">
																			$86.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct {...{ results, setResults }} />
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="490-110-Y205"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"490-110-Y205","name":"Xtreme® Blade Set for 54-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={4}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="490-110-M115">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="3-in-1 Blade Set for 42-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="490-110-M115"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/3-in-1-blade-set-for-42-inch-cutting-decks/490-110-M115.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/3-in-1-blade-set-for-42-inch-cutting-decks/490-110-M115.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd35f4f12/products/490-110-M115.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd35f4f12/products/490-110-M115.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd35f4f12/products/490-110-M115.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd35f4f12/products/490-110-M115.jpg?sw=315&sh=315&sm=fit"
																		alt="3-in-1 Blade Set for 42-inch Cutting Decks"
																		title="3-in-1 Blade Set for 42-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=490-110-M115"
																data-full-detail-txt="View Full Details"
																title="Quickview 3-in-1 Blade Set for 42-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 3-in-1 Blade Set for 42-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/3-in-1-blade-set-for-42-inch-cutting-decks/490-110-M115.html?fitsOnModel=false"
																	data-gtmdata='{"id":"490-110-M115","name":"3-in-1 Blade Set for 42-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	3-in-1 Blade Set for 42-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	490-110-M115
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="54.99">
																			$54.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct
																{...{ results, setResults }}
																fits={false}
															/>
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="490-110-M115"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"490-110-M115","name":"3-in-1 Blade Set for 42-inch Cutting Decks","productType":"PARTS"}'>
																			Add to Cart
																		</button>
																	</div>
																</div>
																<div className="row">
																	<div className="col-12 d-flex align-items-center justify-content-center">
																		<div className="availability-msg backorder">
																			Back Order
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={5}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="490-100-M086">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="2-in-1 Blade for 21-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="490-100-M086"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/2-in-1-blade-for-21-inch-cutting-decks/490-100-M086.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/2-in-1-blade-for-21-inch-cutting-decks/490-100-M086.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2f527e4f/products/490-100-M086.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2f527e4f/products/490-100-M086.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2f527e4f/products/490-100-M086.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2f527e4f/products/490-100-M086.jpg?sw=315&sh=315&sm=fit"
																		alt="2-in-1 Blade for 21-inch Cutting Decks"
																		title="2-in-1 Blade for 21-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=490-100-M086"
																data-full-detail-txt="View Full Details"
																title="Quickview 2-in-1 Blade for 21-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 2-in-1 Blade for 21-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/2-in-1-blade-for-21-inch-cutting-decks/490-100-M086.html?fitsOnModel=false"
																	data-gtmdata='{"id":"490-100-M086","name":"2-in-1 Blade for 21-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	2-in-1 Blade for 21-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	490-100-M086
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="27.99">
																			$27.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct {...{ results, setResults }} />
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="490-100-M086"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"490-100-M086","name":"2-in-1 Blade for 21-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={6}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="742P0741-X">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="Xtreme® Mulching Blade for 21-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="742P0741-X"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/xtreme-mulching-blade-for-21-inch-cutting-decks/742P0741-X.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/xtreme-mulching-blade-for-21-inch-cutting-decks/742P0741-X.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwac587f7d/products/942-0741-X.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwac587f7d/products/942-0741-X.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwac587f7d/products/942-0741-X.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwac587f7d/products/942-0741-X.jpg?sw=315&sh=315&sm=fit"
																		alt="Xtreme® Mulching Blade for 21-inch Cutting Decks"
																		title="Xtreme&reg; Mulching Blade for 21-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=742P0741-X"
																data-full-detail-txt="View Full Details"
																title="Quickview Xtreme® Mulching Blade for 21-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview Xtreme® Mulching Blade for 21-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/xtreme-mulching-blade-for-21-inch-cutting-decks/742P0741-X.html?fitsOnModel=false"
																	data-gtmdata='{"id":"742P0741-X","name":"Xtreme® Mulching Blade for 21-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	Xtreme® Mulching Blade for 21-inch Cutting
																	Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	742P0741-X
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="22.47">
																			$22.47
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct {...{ results, setResults }} />
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="742P0741-X"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"742P0741-X","name":"Xtreme® Mulching Blade for 21-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={7}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="942-0616A">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="3-in-1 Blade for 42-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="942-0616A"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/3-in-1-blade-for-42-inch-cutting-decks/942-0616A.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/3-in-1-blade-for-42-inch-cutting-decks/942-0616A.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8a601d6a/products/942-0616A.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8a601d6a/products/942-0616A.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8a601d6a/products/942-0616A.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8a601d6a/products/942-0616A.jpg?sw=315&sh=315&sm=fit"
																		alt="3-in-1 Blade for 42-inch Cutting Decks"
																		title="3-in-1 Blade for 42-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=942-0616A"
																data-full-detail-txt="View Full Details"
																title="Quickview 3-in-1 Blade for 42-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 3-in-1 Blade for 42-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/3-in-1-blade-for-42-inch-cutting-decks/942-0616A.html?fitsOnModel=false"
																	data-gtmdata='{"id":"942-0616A","name":"3-in-1 Blade for 42-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	3-in-1 Blade for 42-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	942-0616A
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="30.25">
																			$30.25
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct {...{ results, setResults }} />
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="942-0616A"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"942-0616A","name":"3-in-1 Blade for 42-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={8}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="490-110-M110">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="2-in-1 Blade Set for 46-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="490-110-M110"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/2-in-1-blade-set-for-46-inch-cutting-decks/490-110-M110.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/2-in-1-blade-set-for-46-inch-cutting-decks/490-110-M110.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw594f0cfc/products/490-110-M110.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw594f0cfc/products/490-110-M110.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw594f0cfc/products/490-110-M110.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw594f0cfc/products/490-110-M110.jpg?sw=315&sh=315&sm=fit"
																		alt="2-in-1 Blade Set for 46-inch Cutting Decks"
																		title="2-in-1 Blade Set for 46-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=490-110-M110"
																data-full-detail-txt="View Full Details"
																title="Quickview 2-in-1 Blade Set for 46-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 2-in-1 Blade Set for 46-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/2-in-1-blade-set-for-46-inch-cutting-decks/490-110-M110.html?fitsOnModel=false"
																	data-gtmdata='{"id":"490-110-M110","name":"2-in-1 Blade Set for 46-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	2-in-1 Blade Set for 46-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	490-110-M110
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="59.99">
																			$59.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct
																{...{ results, setResults }}
																fits={false}
															/>
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="490-110-M110"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"490-110-M110","name":"2-in-1 Blade Set for 46-inch Cutting Decks","productType":"PARTS"}'>
																			Add to Cart
																		</button>
																	</div>
																</div>
																<div className="row">
																	<div className="col-12 d-flex align-items-center justify-content-center">
																		<div className="availability-msg backorder">
																			Back Order
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={9}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="942-04385">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="3-in-1 Blade for 30-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="942-04385"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/3-in-1-blade-for-30-inch-cutting-decks/942-04385.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/3-in-1-blade-for-30-inch-cutting-decks/942-04385.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw85a38082/products/942-04385.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw85a38082/products/942-04385.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw85a38082/products/942-04385.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw85a38082/products/942-04385.jpg?sw=315&sh=315&sm=fit"
																		alt="3-in-1 Blade for 30-inch Cutting Decks"
																		title="3-in-1 Blade for 30-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=942-04385"
																data-full-detail-txt="View Full Details"
																title="Quickview 3-in-1 Blade for 30-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 3-in-1 Blade for 30-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/3-in-1-blade-for-30-inch-cutting-decks/942-04385.html?fitsOnModel=false"
																	data-gtmdata='{"id":"942-04385","name":"3-in-1 Blade for 30-inch Cutting Decks","productType":"ACCESSORY"}'
																	itemProp="url">
																	3-in-1 Blade for 30-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	942-04385
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="32.99">
																			$32.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct
																{...{ results, setResults }}
																fits={false}
															/>

															<div className="tile-attributes" itemProp="name">
																<ul></ul>
															</div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="942-04385"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"942-04385","name":"3-in-1 Blade for 30-inch Cutting Decks","productType":"ACCESSORY"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={10}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="490-110-0137">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="Xtreme® 2-in-1 Blade Set for 42-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="490-110-0137"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/xtreme-2-in-1-blade-set-for-42-inch-cutting-decks/490-110-0137.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/xtreme-2-in-1-blade-set-for-42-inch-cutting-decks/490-110-0137.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw901de1a3/products/490-110-0137.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw901de1a3/products/490-110-0137.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw901de1a3/products/490-110-0137.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw901de1a3/products/490-110-0137.jpg?sw=315&sh=315&sm=fit"
																		alt="Xtreme® 2-in-1 Blade Set for 42-inch Cutting Decks"
																		title="Xtreme&reg; 2-in-1 Blade Set for 42-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=490-110-0137"
																data-full-detail-txt="View Full Details"
																title="Quickview Xtreme® 2-in-1 Blade Set for 42-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview Xtreme® 2-in-1 Blade Set for 42-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/xtreme-2-in-1-blade-set-for-42-inch-cutting-decks/490-110-0137.html?fitsOnModel=false"
																	data-gtmdata='{"id":"490-110-0137","name":"Xtreme® 2-in-1 Blade Set for 42-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	Xtreme® 2-in-1 Blade Set for 42-inch Cutting
																	Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	490-110-0137
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="57.99">
																			$57.99
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct
																{...{ results, setResults }}
																fits={false}
															/>
															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="490-110-0137"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"490-110-0137","name":"Xtreme® 2-in-1 Blade Set for 42-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-sm-6 col-lg-4" data-index={11}>
												{/* CQuotient Activity Tracking (viewCategory-cquotient.js) */}
												<div className="grid-tile" data-pid="942-0641">
													<div
														className="product-tile"
														itemScope=""
														itemType="http://schema.org/Product"
														data-product-name="2-in-1 Blade for 21-inch Cutting Decks"
														data-product-extended-name=""
														data-monetate-pid="942-0641"
														data-monetate-producturl="https://www.troybilt.com/en_US/blades/2-in-1-blade-for-21-inch-cutting-decks/942-0641.html">
														{/* dwMarker="product" dwContentID="null" */}
														<div className="image-container">
															<div className="badge-row"></div>
															<a href="/en_US/blades/2-in-1-blade-for-21-inch-cutting-decks/942-0641.html?fitsOnModel=false">
																<picture>
																	{/*[if IE 9]><video style="display: none;"><![endif]*/}
																	<source
																		media="(min-width: 768px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbe165a5e/products/942-0641.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(min-width: 480px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbe165a5e/products/942-0641.jpg?sw=290&sh=290&sm=fit"
																	/>
																	<source
																		media="(max-width: 479px)"
																		srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbe165a5e/products/942-0641.jpg?sw=315&sh=315&sm=fit"
																	/>
																	{/*[if IE 9]></video><![endif]*/}
																	<img
																		className="tile-image"
																		src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbe165a5e/products/942-0641.jpg?sw=315&sh=315&sm=fit"
																		alt="2-in-1 Blade for 21-inch Cutting Decks"
																		title="2-in-1 Blade for 21-inch Cutting Decks"
																		itemProp="image"
																	/>
																</picture>
															</a>
															<a
																className="quickview btn btn-secondary hidden-sm-down"
																href="/on/demandware.store/Sites-troybilt-Site/en_US/Product-ShowQuickView?pid=942-0641"
																data-full-detail-txt="View Full Details"
																title="Quickview 2-in-1 Blade for 21-inch Cutting Decks, Opens Dialog"
																aria-label="Quickview 2-in-1 Blade for 21-inch Cutting Decks, Opens Dialog">
																Quickview
															</a>
														</div>
														<div className="tile-body tile-footer-lg">
															<div className="pdp-link" itemProp="name">
																<a
																	className="link"
																	href="/en_US/blades/2-in-1-blade-for-21-inch-cutting-decks/942-0641.html?fitsOnModel=false"
																	data-gtmdata='{"id":"942-0641","name":"2-in-1 Blade for 21-inch Cutting Decks","productType":"PARTS"}'
																	itemProp="url">
																	2-in-1 Blade for 21-inch Cutting Decks
																</a>
															</div>
															<div className="product-number">
																Item#:
																<span
																	className="product-id"
																	itemProp="productID">
																	942-0641
																</span>
															</div>
															<div
																className="price"
																itemProp="offers"
																itemScope=""
																itemType="http://schema.org/Offer">
																<span>
																	<meta
																		itemProp="priceCurrency"
																		content="USD"
																	/>
																	<span className="sales">
																		<span
																			className="value"
																			itemProp="price"
																			content="28.66">
																			$28.66
																		</span>
																	</span>
																</span>
															</div>
															<FitsProduct
																{...{ results, setResults }}
																fits={false}
															/>

															<div className="ratings"></div>
															<div
																className="callout"
																title="Free shipping on parts when your total purchase is over $45">
																Free Shipping on Parts Orders over $45.
															</div>
														</div>
														{/* END_dwmarker */}
														<div className="tile-body-footer">
															<div className="tile-atc col-12 mb-2">
																<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
																	<div className="col-12">
																		<button
																			className="add-to-cart-tile btn btn-secondary"
																			data-pid="942-0641"
																			data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																			data-gtmdata='{"id":"942-0641","name":"2-in-1 Blade for 21-inch Cutting Decks","productType":"PARTS"}'>
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
														</div>
													</div>
												</div>
											</div>
											<div
												className="col-12 grid-footer"
												data-sort-options='{"options":[{"displayName":"Most Popular","id":"popularity-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=Sort%20by%20Popularity&start=0&sz=12"},{"displayName":"Price (High to Low)","id":"price-high-low-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=Price%20(High%20to%20Low)&start=0&sz=12"},{"displayName":"Price (Low to High)","id":"price-low-high-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=Price%20(Low%20to%20High)&start=0&sz=12"},{"displayName":"Sort by Name (A-Z)","id":"name-sort","url":"https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&srule=name&start=0&sz=12"}],"ruleId":"ATS"}'
												data-page-size={12.0}
												data-page-number={0}>
												<div className="show-more">
													<div className="text-center">
														<button
															className="btn btn-primary col-12"
															data-url="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Search-UpdateGrid?cgid=parts-part-typ-blades&start=12&sz=12">
															Load More Products
														</button>
													</div>
												</div>
												<input
													type="hidden"
													className="permalink"
													defaultValue="https://www.troybilt.com/en_US/shop-by-part-type/blades?https://www.troybilt.com/en_US/shop-by-part-type/blades=undefined&start=0&sz=12"
												/>
												<input
													type="hidden"
													className="category-id"
													defaultValue="parts-part-typ-blades"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className="tab-pane container"
							id="content-search-results-pane"
							role="tabpanel2"
							aria-describedby="content-search-results-pane"
							aria-labelledby="content-search-results-pane-link">
							<div className="blog-search-results"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid compare-bar-wrapper">
				<div className="row">
					<div
						className="container compare-bar"
						data-max-slots={4.0}
						data-max-mobile-slots={2.0}
						data-min-products-msg="Please select at least two products to compare."
						data-remove-text="Remove">
						<form
							method="GET"
							className="compare-products-form"
							name="compare-products"
							action="/on/demandware.store/Sites-troybilt-Site/en_US/Compare-Show">
							<div className="row">
								<div className="col-12">
									<div className="compare-bar-title">
										Compare Products
										<span className="selected-products" />
										<div className="action d-lg-none">
											<button type="submit" className="compare btn btn-link">
												Compare Items
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-lg-9 col-xl-8">
									<div className="row product-slots no-gutters" />
								</div>
								<div className="col-12 col-lg-3 offset-xl-1 action d-none d-lg-block">
									<button type="submit" className="compare btn btn-primary">
										Compare Items
									</button>
									<a href="#" className="clear-all">
										Clear All
									</a>
								</div>
							</div>
							<input type="hidden" name="cgid" />
							<input type="hidden" name="backUrl" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
