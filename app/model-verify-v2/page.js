"use client";
import { useState, useEffect } from "react";
import ModelVerifyBlock from "./ModelVerify";

export default function ModelVerifyV2() {
	const [fit, setFit] = useState(false);
	const [inStockCheck, setInStockCheck] = useState(true);

	return (
		<div
			className="container-fluid product-detail product-wrapper"
			data-pid="19A30031OEM"
			itemScope=""
			itemType="http://schema.org/Product">
			<link
				rel="stylesheet"
				href="https://display.ugc.bazaarvoice.com/static/TroyBilt/main_site/167/20314/en_US/stylesheets/screen.css"
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
				<p className="mb-0 ">
					<strong>Note:</strong> This is only to toggle the stock & results
					only.
				</p>
				<div>
					<button
						className="w-100 mb-1"
						onClick={() => {
							setInStockCheck(!inStockCheck);
						}}>
						Toggle In-Stock/Backordered
					</button>
				</div>
				<div className="d-flex flex-column">
					Fit:
					<button
						className="w-100 mb-1"
						onClick={() => {
							setFit(false);
						}}>
						Toggle Default
					</button>
					<button
						className="w-100 mb-1"
						onClick={() => {
							setFit("not");
						}}>
						Toggle Not Fits
					</button>
					<button
						onClick={() => {
							setFit("fits");
						}}>
						Toggle Fits
					</button>
				</div>
			</div>

			<div className="product-info container no-container-gutters-lg-down">
				<div className="row">
					<div className="col-12">
						<div className="product-breadcrumb">
							<div className="row">
								<div className="col">
									<ol className="breadcrumb">
										<li className="breadcrumb-item">
											<a href="/en_US/attachments">Attachments</a>
										</li>
										<li className="breadcrumb-item">
											<a href="/en_US/lawn-mower-attachments">
												Lawn Mower Attachments
											</a>
										</li>
									</ol>
								</div>
							</div>
						</div>
						{/* Product Name */}
						<div className="row">
							<div className="d-sm-none col-12 mt-2">
								<div className="product-name-block has-badge">
									<h1 className="product-name" itemProp="name">
										Riding Mower Bagger for 42 in. and 46 in. Decks
									</h1>
									<div className="product-number ">
										Item#:
										<span className="product-id" itemProp="productID">
											19A30031OEM
										</span>
									</div>
								</div>
								<div className="badge-row">
									<div className="content-asset">
										{/* dwMarker="content" dwContentID="66fc2860e5c54a860cabdd23ec" */}
										<div
											className="badge badge-primary"
											style={{ textAlign: "right" }}>
											<strong>Best Seller</strong>
										</div>
									</div>
									{/* End content-asset */}
								</div>
								{/* Applicable Promotions */}
								<div className="promotions"></div>
								{/* Prices */}
								<div className="prices">
									<div className="price">
										<span>
											<meta itemProp="priceCurrency" content="USD" />
											<span className="sales">
												<span
													className="value"
													itemProp="price"
													content="419.99">
													$419.99
												</span>
											</span>
										</span>
									</div>
								</div>
								{/* Review Rating */}
								<div className="product-rating clearfix">
									{/* Product Rating */}
									<div className="ratings">
										{/* Reviews Summary */}
										<div
											data-bv-show="rating_summary"
											data-bv-productid="19A30031OEM"
											data-bv-ready="true">
											<div className="bv_main_container">
												<meta itemProp="bestRating" content={5} />
												<span
													itemProp="itemReviewed"
													itemScope="true"
													itemType="https://schema.org/IndividualProduct"
													className="bv_microdata_hidden">
													<span itemProp="name">
														Riding Mower Bagger for 42 in. and 46 in. Decks
													</span>
												</span>
												<style
													dangerouslySetInnerHTML={{
														__html:
															'/* == START CLEANSLATE == */\n/*!\n* This includes a subset of CleanSlate.\n*\n* ***IMPORTANT*** The only modifications to this code should be adding,\n* removing or namespacing rules.\n*\n* CleanSlate\n*   github.com/premasagar/cleanslate\n*\n*    An extreme CSS reset stylesheet, for normalising the styling of a container element and its children.\n*\n*    by Premasagar Rose\n*        dharmafly.com\n*\n*    license\n*        opensource.org/licenses/mit-license.php\n*\n*    v0.10.1\n*/\n[data-bv-show="rating_summary"] a,\n[data-bv-show="rating_summary"] span,\n[data-bv-show="rating_summary"] div,\n[data-bv-show="rating_summary"] svg,\n[data-bv-show="rating_summary"] path,\n[data-bv-show="rating_summary"] polygon,\n[data-bv-show="rating_summary"] button {\n  background-attachment: scroll !important;\n  background-color: transparent !important;\n  background-image: none !important; /* This rule affects the use of pngfix JavaScript http://dillerdesign.com/experiment/DD_BelatedPNG for IE6, which is used to force the browser to recognise alpha-transparent PNGs files that replace the IE6 lack of PNG transparency. (The rule overrides the VML image that is used to replace the given CSS background-image). If you don\'t know what that means, then you probably haven\'t used the pngfix script, and this comment may be ignored :) */\n  background-position: 0 0 !important;\n  background-repeat: repeat !important;\n  border-color: black !important;\n  border-color: currentColor !important; /* `border-color` should match font color. Modern browsers (incl. IE9) allow the use of "currentColor" to match the current font \'color\' value <http://www.w3.org/TR/css3-color/#currentcolor>. For older browsers, a default of \'black\' is given before this rule. Guideline to support older browsers: if you haven\'t already declared a border-color for an element, be sure to do so, e.g. when you first declare the border-width. */\n  border-radius: 0 !important;\n  border-style: none !important;\n  border-width: medium !important;\n  bottom: auto !important;\n  clear: none !important;\n  clip: auto !important;\n  color: inherit !important;\n  counter-increment: none !important;\n  counter-reset: none !important;\n  cursor: auto !important;\n  direction: inherit !important;\n  display: inline !important;\n  float: none !important;\n  font-family: inherit !important; /* As with other inherit values, this needs to be set on the root container element */\n  font-size: inherit !important;\n  font-style: inherit !important;\n  font-variant: normal !important;\n  font-weight: inherit !important;\n  height: auto !important;\n  left: auto !important;\n  letter-spacing: normal !important;\n  line-height: inherit !important;\n  list-style-type: inherit !important; /* Could set list-style-type to none */\n  list-style-position: outside !important;\n  list-style-image: none !important;\n  margin: 0 !important;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  opacity: 1;\n  outline: invert none medium !important;\n  overflow: visible !important;\n  padding: 0 !important;\n  position: static !important;\n  quotes: "" "" !important;\n  right: auto !important;\n  table-layout: auto !important;\n  text-align: inherit !important;\n  text-decoration: inherit !important;\n  text-indent: 0 !important;\n  text-transform: none !important;\n  top: auto !important;\n  unicode-bidi: normal !important;\n  vertical-align: baseline !important;\n  visibility: inherit !important;\n  white-space: normal !important;\n  width: auto !important;\n  word-spacing: normal !important;\n  z-index: auto !important;\n\n  /* CSS3 */\n  /* Including all prefixes according to http://caniuse.com/ */\n  /* CSS Animations don\'t cascade, so don\'t require resetting */\n  -webkit-background-origin: padding-box !important;\n  background-origin: padding-box !important;\n  -webkit-background-clip: border-box !important;\n  background-clip: border-box !important;\n  -webkit-background-size: auto !important;\n  -moz-background-size: auto !important;\n  background-size: auto !important;\n  -webkit-border-image: none !important;\n  -moz-border-image: none !important;\n  -o-border-image: none !important;\n  border-image: none !important;\n  -webkit-border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n  border-radius: 0 !important;\n  -webkit-box-sizing: content-box !important;\n  -moz-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  -webkit-column-count: auto !important;\n  -moz-column-count: auto !important;\n  column-count: auto !important;\n  -webkit-column-gap: normal !important;\n  -moz-column-gap: normal !important;\n  column-gap: normal !important;\n  -webkit-column-rule: medium none black !important;\n  -moz-column-rule: medium none black !important;\n  column-rule: medium none black !important;\n  -webkit-column-span: 1 !important;\n  -moz-column-span: 1 !important; /* doesn\'t exist yet but probably will */\n  column-span: 1 !important;\n  -webkit-column-width: auto !important;\n  -moz-column-width: auto !important;\n  column-width: auto !important;\n  font-feature-settings: normal !important;\n  overflow-x: visible !important;\n  overflow-y: visible !important;\n  -webkit-hyphens: manual !important;\n  -moz-hyphens: manual !important;\n  hyphens: manual !important;\n  -webkit-perspective: none !important;\n  -moz-perspective: none !important;\n  -ms-perspective: none !important;\n  -o-perspective: none !important;\n  perspective: none !important;\n  -webkit-perspective-origin: 50% 50% !important;\n  -moz-perspective-origin: 50% 50% !important;\n  -ms-perspective-origin: 50% 50% !important;\n  -o-perspective-origin: 50% 50% !important;\n  perspective-origin: 50% 50% !important;\n  -webkit-backface-visibility: visible !important;\n  -moz-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  -o-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  text-shadow: none !important;\n  -webkit-transition: all 0s ease 0s !important;\n  transition: all 0s ease 0s !important;\n  -webkit-transform: none !important;\n  -moz-transform: none !important;\n  -ms-transform: none !important;\n  -o-transform: none !important;\n  transform: none !important;\n  -webkit-transform-origin: 50% 50% !important;\n  -moz-transform-origin: 50% 50% !important;\n  -ms-transform-origin: 50% 50% !important;\n  -o-transform-origin: 50% 50% !important;\n  transform-origin: 50% 50% !important;\n  -webkit-transform-style: flat !important;\n  -moz-transform-style: flat !important;\n  -ms-transform-style: flat !important;\n  -o-transform-style: flat !important;\n  transform-style: flat !important;\n  word-break: normal !important;\n}\n\n/* Necessary because cursor: auto breaks our hover styling */\n[data-bv-show="rating_summary"] svg,\n[data-bv-show="rating_summary"] polygon {\n  cursor: inherit !important;\n}\n\n[data-bv-show="rating_summary"] div {\n  display: block !important;\n}\n\n[data-bv-show="rating_summary"] a {\n  color: blue !important;\n  text-decoration: underline !important;\n}\n\n[data-bv-show="rating_summary"] a:visited {\n  color: #529 !important;\n}\n\n[data-bv-show="rating_summary"] a, [data-bv-show="rating_summary"] a * {\n  cursor: pointer !important;\n}\n\n[data-bv-show="rating_summary"] path,\n[data-bv-show="rating_summary"] polygon {\n  fill: currentColor !important;\n}\n\n/* == ROOT CONTAINER ELEMENT == */\n/* This contains default values for child elements to inherit  */\n[data-bv-show="rating_summary"] {\n  font-size: medium !important;\n  line-height: 1 !important;\n  direction: ltr !important;\n  text-align: left !important; /* for IE, Opera */\n  text-align: start !important; /* recommended W3C Spec */\n  color: black !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  text-decoration: none !important;\n  list-style-type: disc !important;\n}\n\n/* == END CLEANSLATE == */\n[data-bv-show="rating_summary"] .bv_main_container {\n  display: inline-flex !important;\n  flex-wrap: wrap !important;\n  background-color: transparent !important;\n  margin-bottom: 0px !important;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n  margin-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  border-bottom-style: none !important;\n  border-bottom-color: transparent !important;\n  border-bottom-width: 0px !important;\n  border-left-style: none !important;\n  border-left-color: transparent !important;\n  border-left-width: 0px !important;\n  border-right-style: none !important;\n  border-right-color: transparent !important;\n  border-right-width: 0px !important;\n  border-top-style: none !important;\n  border-top-color: transparent !important;\n  border-top-width: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_row_flex {\n  display: inline-flex !important;\n  align-items: center !important;\n  padding-right: 1em !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_row_normal {\n  width: 100% !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_CTA_row {\n  display: inline-flex !important;\n  padding-top: 0.5em !important;\n  width: 100% !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_line_break {\n  margin-top: 0.5em !important;\n  width: 100% !important;\n  max-width: 19.5em !important;\n  border-bottom: 1px solid #CECECE !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_microdata_hidden {\n  display: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_avgRating_component_container {\n  display: flex !important;\n  align-items: center !important;\n  padding-right: 0.1em !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_avgRating_component_container:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_avgRating_component_container:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_component_container {\n  display: flex !important;\n  align-items: center !important;\n  white-space: nowrap !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_delimeter {\n  padding-right: 0.1em !important;\n  color: #ccc !important;\n  font-size: 13px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_text {\n  white-space: nowrap !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_text:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_text:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_percentRecommend_component_container {\n  padding-top: 0.5em !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_incentivized_component_container {\n  padding-top: 0.5em !important;\n  padding-bottom: 0.3em !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container {\n  padding-top: 0.5em !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container > a,\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container button {\n  padding: 0 !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container > a:hover,\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container button:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container > a:visited,\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container button:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_ms_focusable > a:focus,\n[data-bv-show="rating_summary"] .bv_main_container .bv_ms_focusable button:focus {\n  border: 1px solid blue !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container {\n  display: flex !important;\n  align-items: center !important;\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  padding-right: 1em !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container span {\n  display: inherit !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container svg:not(:last-child) {\n  padding-right: 1px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container:hover {\n  cursor: pointer !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonFull {\n  padding: 0.5em 1em 0.5em 1em !important;\n  align-self: center !important;\n  border: none !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%) !important;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;\n  color: #FFFFFF !important;\n  font-size: 13px !important;\n  background-color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  border-bottom-style: none !important;\n  border-bottom-color: transparent !important;\n  border-bottom-width: 0px !important;\n  border-left-style: none !important;\n  border-left-color: transparent !important;\n  border-left-width: 0px !important;\n  border-right-style: none !important;\n  border-right-color: transparent !important;\n  border-right-width: 0px !important;\n  border-top-style: none !important;\n  border-top-color: transparent !important;\n  border-top-width: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonFull:hover {\n  cursor: pointer !important;\n  background-image: none !important;\n  box-shadow: none !important;\n  background-color: #CC0000 !important;\n  color: #FFFFFF !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  font-size: 13px !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonMinimalist {\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonMinimalist:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonMinimalist:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_ms_focusable:focus {\n  border: 1px solid blue !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_offscreen_text {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  clip: rect(1px 1px 1px 1px) !important;\n  padding: 0 !important;\n  border: 0 !important;\n}\ndiv.bv_modal_component_container[data-bv-modal] {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  position: absolute !important;\n  z-index: 1000 !important;\n  background-color: #ffffff !important;\n}\ndiv.bv_modal_component_container[data-bv-modal] .bv_modal_outer_content:before {\n  content: \'\';\n  display: inline-flex !important;\n  position: absolute !important;\n  left: 45% !important;\n  top: -5px !important;\n  width: 10px !important;\n  height: 10px !important;\n  border-right: 1px solid black !important;\n  border-bottom: 1px solid black !important;\n  transform: rotate(-135deg) !important;\n  background-color: #ffffff !important;\n}\ndiv.bv_modal_component_container[data-bv-modal] .bv_modal_outer_content {\n  margin: 0 auto !important;\n  display: inline-flex !important;\n  flex-wrap: wrap !important;\n  padding: 2em !important;\n  border: 1px solid black !important;\n  max-width: 270px !important;\n}\n.bv_histogram_component_container {\n  min-width: 200px !important;\n}\n.bv_histogram_row_prefix {\n  display: table-cell !important;\n  vertical-align: middle !important;\n  white-space: nowrap !important;\n}\n.bv_histogram_row_container {\n  min-width: 200px !important;\n  height: 25px !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  display: table-row !important;\n  cursor: pointer !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n.bv_histogram_row_container:hover {\n  background-color: #F7F7F7 !important;\n}\n.bv_histogram_row_bar_empty {\n  border-radius: 2px !important;\n  height: 10px !important;\n  display: block !important;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0) 100%) !important;\n  background-color: #ccc !important;\n  background-color: #CCCCCC !important;\n}\n.bv_histogram_row_bar_filled {\n  border-radius: 2px !important;\n  height: 10px !important;\n  display: block !important;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0) 100%) !important;\n  background-color: #CC0000 !important;\n}\n.bv_histogram_row_full_bar {\n  display: table-cell !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  width: 100% !important;\n  vertical-align: middle !important;\n}\n.bv_histogram_row_rating {\n  display: table-cell !important;\n  vertical-align: middle !important;\n  text-align: center !important;\n}\n.bv_histogram_row_star {\n  display: table-cell !important;\n  vertical-align: middle !important;\n}\n.bv_button_buttonFull {\n  padding: 0.5em 1em 0.5em 1em !important;\n  align-self: center !important;\n  border: none !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%) !important;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;\n  color: #FFFFFF !important;\n  font-size: 13px !important;\n  background-color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  border-bottom-style: none !important;\n  border-bottom-color: transparent !important;\n  border-bottom-width: 0px !important;\n  border-left-style: none !important;\n  border-left-color: transparent !important;\n  border-left-width: 0px !important;\n  border-right-style: none !important;\n  border-right-color: transparent !important;\n  border-right-width: 0px !important;\n  border-top-style: none !important;\n  border-top-color: transparent !important;\n  border-top-width: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n.bv_button_buttonFull:hover {\n  cursor: pointer !important;\n  background-image: none !important;\n  box-shadow: none !important;\n  background-color: #CC0000 !important;\n  color: #FFFFFF !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  font-size: 13px !important;\n  text-decoration: none !important;\n}\n.bv_button_buttonMinimalist {\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n.bv_button_buttonMinimalist:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n.bv_button_buttonMinimalist:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n.bv_ms_focusable:focus {\n  border: 1px solid blue !important;\n}\n.bv_offscreen_text {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  clip: rect(1px 1px 1px 1px) !important;\n  padding: 0 !important;\n  border: 0 !important;\n}\n.bv_ms_focusable:focus {\n  border: 1px solid blue !important;\n}\n\n',
													}}
												/>
												<button
													id="ratings-summary"
													className="bv_main_container_row_flex"
													role="link"
													type="button"
													aria-expanded="false">
													<span className="bv_offscreen_text">
														4.4 out of 5 stars. Read reviews for average rating
														value is 4.4 of 5. Read 313 Reviews Same page link.
													</span>
													<div className="bv_stars_component_container">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20px"
															height="20px"
															viewBox="0 0 25 25"
															focusable="false"
															style={{
																width: "20px !important",
																height: "20px !important",
															}}>
															<polygon
																points=""
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_0_99.99_19A30031OEM") !important',
																}}
															/>
															<path
																d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_0_99.99_19A30031OEM") !important',
																}}
															/>
															<defs>
																<linearGradient
																	id="bv_rating_summary_star_filled_1_0_99.99_19A30031OEM"
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
																			stopColor: "rgb(204, 204, 204)",
																			stopOpacity: 1,
																		}}
																	/>
																</linearGradient>
															</defs>
														</svg>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20px"
															height="20px"
															viewBox="0 0 25 25"
															focusable="false"
															style={{
																width: "20px !important",
																height: "20px !important",
															}}>
															<polygon
																points=""
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_1_99.99_19A30031OEM") !important',
																}}
															/>
															<path
																d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_1_99.99_19A30031OEM") !important',
																}}
															/>
															<defs>
																<linearGradient
																	id="bv_rating_summary_star_filled_1_1_99.99_19A30031OEM"
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
																			stopColor: "rgb(204, 204, 204)",
																			stopOpacity: 1,
																		}}
																	/>
																</linearGradient>
															</defs>
														</svg>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20px"
															height="20px"
															viewBox="0 0 25 25"
															focusable="false"
															style={{
																width: "20px !important",
																height: "20px !important",
															}}>
															<polygon
																points=""
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_2_99.99_19A30031OEM") !important',
																}}
															/>
															<path
																d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_2_99.99_19A30031OEM") !important',
																}}
															/>
															<defs>
																<linearGradient
																	id="bv_rating_summary_star_filled_1_2_99.99_19A30031OEM"
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
																			stopColor: "rgb(204, 204, 204)",
																			stopOpacity: 1,
																		}}
																	/>
																</linearGradient>
															</defs>
														</svg>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20px"
															height="20px"
															viewBox="0 0 25 25"
															focusable="false"
															style={{
																width: "20px !important",
																height: "20px !important",
															}}>
															<polygon
																points=""
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_3_99.99_19A30031OEM") !important',
																}}
															/>
															<path
																d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_3_99.99_19A30031OEM") !important',
																}}
															/>
															<defs>
																<linearGradient
																	id="bv_rating_summary_star_filled_1_3_99.99_19A30031OEM"
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
																			stopColor: "rgb(204, 204, 204)",
																			stopOpacity: 1,
																		}}
																	/>
																</linearGradient>
															</defs>
														</svg>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="20px"
															height="20px"
															viewBox="0 0 25 25"
															focusable="false"
															style={{
																width: "20px !important",
																height: "20px !important",
															}}>
															<polygon
																points=""
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_4_41.85_19A30031OEM") !important',
																}}
															/>
															<path
																d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																style={{
																	fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_1_4_41.85_19A30031OEM") !important',
																}}
															/>
															<defs>
																<linearGradient
																	id="bv_rating_summary_star_filled_1_4_41.85_19A30031OEM"
																	x1="41.85%"
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
																			stopColor: "rgb(204, 204, 204)",
																			stopOpacity: 1,
																		}}
																	/>
																</linearGradient>
															</defs>
														</svg>
													</div>
													<div
														itemProp="ratingValue"
														className="bv_avgRating_component_container notranslate">
														4.4
													</div>
													<div className="bv_numReviews_component_container">
														<meta itemProp="reviewCount" content={313} />
														<span className="bv_numReviews_delimeter notranslate">
															&nbsp;|&nbsp;
														</span>
														<div className="bv_numReviews_text">
															313 Reviews
														</div>
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
														<div
															className="bv_button_component_container"
															style={{}}>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="product-info container no-container-gutters-lg-down mt-4">
				<div className="row">
					{/* Product Images Carousel */}
					<div className="primary-images col-12 col-sm-7 order-sm-1 col-lg-8">
						<div className="d-none d-sm-block badge-container">
							<div className="badge-row">
								<div className="content-asset">
									{/* dwMarker="content" dwContentID="66fc2860e5c54a860cabdd23ec" */}
									<div
										className="badge badge-primary"
										style={{ textAlign: "right" }}>
										<strong>Best Seller</strong>
									</div>
								</div>
								{/* End content-asset */}
							</div>
						</div>
						<div
							id="pdpCarousel-19A30031OEM"
							className="pdp-carousel 19A30031OEM slick-initialized slick-slider slick-dotted"
							data-product-id="19A30031OEM"
							role="listbox">
							<div className="slick-list">
								<div
									className="slick-track"
									style={{
										opacity: 1,
										width: 12750,
										transform: "translate3d(-750px, 0px, 0px)",
									}}>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-1}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-current slick-active"
										data-slick-index={0}
										aria-hidden="false"
										role="tabpanel"
										id="slick-slide00"
										aria-describedby="slick-slide-control00"
										tabIndex={0}
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=1000&sh=1000&sm=fit"
											style={{ position: "relative", overflow: "hidden" }}>
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
											<img
												role="presentation"
												alt=""
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=1000&sh=1000&sm=fit"
												className="zoomImg"
												style={{
													position: "absolute",
													top: "-67.4101px",
													left: "-108.672px",
													opacity: 0,
													width: 1000,
													height: 1000,
													border: "none",
													maxWidth: "none",
													maxHeight: "none",
												}}
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={1}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide01"
										aria-describedby="slick-slide-control01"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={2}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide02"
										aria-describedby="slick-slide-control02"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={3}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide03"
										aria-describedby="slick-slide-control03"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={4}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide04"
										aria-describedby="slick-slide-control04"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={5}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide05"
										aria-describedby="slick-slide-control05"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={6}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide06"
										aria-describedby="slick-slide-control06"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={7}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide07"
										aria-describedby="slick-slide-control07"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={8}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={9}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={10}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={11}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={12}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={13}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={14}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={15}
										id=""
										aria-hidden="true"
										style={{ width: 750, height: 740 }}>
										<span
											className="slide-link zoom-hires"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=1000&sh=1000&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=740&sh=740&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div
							id="sliderControls-19A30031OEM"
							className="pdp-slider-controls slider-controls controls-center">
							<span className="slide-prev slick-arrow" style={{}} />
							<div className="slide-dots">
								<ul className="slick-dots" role="tablist" style={{}}>
									<li className="slick-active">
										<button
											type="button"
											role="tab"
											id="slick-slide-control00"
											aria-labelled-by="slick-slide-control00"
											aria-controls="slick-slide00"
											aria-label="Slide 1 of 8"
											aria-selected="true"
											tabIndex={0}>
											1
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control01"
											aria-labelled-by="slick-slide-control01"
											aria-controls="slick-slide01"
											aria-label="Slide 2 of 8">
											2
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control02"
											aria-labelled-by="slick-slide-control02"
											aria-controls="slick-slide02"
											aria-label="Slide 3 of 8">
											3
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control03"
											aria-labelled-by="slick-slide-control03"
											aria-controls="slick-slide03"
											aria-label="Slide 4 of 8">
											4
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control04"
											aria-labelled-by="slick-slide-control04"
											aria-controls="slick-slide04"
											aria-label="Slide 5 of 8">
											5
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control05"
											aria-labelled-by="slick-slide-control05"
											aria-controls="slick-slide05"
											aria-label="Slide 6 of 8">
											6
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control06"
											aria-labelled-by="slick-slide-control06"
											aria-controls="slick-slide06"
											aria-label="Slide 7 of 8">
											7
										</button>
									</li>
									<li>
										<button
											type="button"
											role="tab"
											id="slick-slide-control07"
											aria-labelled-by="slick-slide-control07"
											aria-controls="slick-slide07"
											aria-label="Slide 8 of 8">
											8
										</button>
									</li>
								</ul>
							</div>
							<span className="slide-next slick-arrow" style={{}} />
						</div>
						<div
							id="pdpCarouselNav-19A30031OEM"
							className="pdp-carousel-nav hidden-xs-down slick-initialized slick-slider slick-vertical"
							data-product-id="19A30031OEM">
							<button
								className="slick-prev slick-arrow"
								aria-label="Previous"
								type="button"
								style={{}}>
								Previous
							</button>
							<div className="slick-list draggable" style={{ height: 450 }}>
								<div
									className="slick-track"
									style={{
										opacity: 1,
										height: 1650,
										transform: "translate3d(0px, -450px, 0px)",
									}}>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-6}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-5}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-4}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-3}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-2}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={-1}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-current slick-active"
										data-slick-index={0}
										aria-hidden="false"
										tabIndex={0}
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-active"
										data-slick-index={1}
										aria-hidden="false"
										tabIndex={0}
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-active"
										data-slick-index={2}
										aria-hidden="false"
										tabIndex={0}
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-active"
										data-slick-index={3}
										aria-hidden="false"
										tabIndex={0}
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-active"
										data-slick-index={4}
										aria-hidden="false"
										tabIndex={0}
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-active"
										data-slick-index={5}
										aria-hidden="false"
										tabIndex={0}
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={6}
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide"
										data-slick-index={7}
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={8}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwede3d406/products/Attachments_Accessories/19A30031OEM_1.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={9}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd11d887c/products/Attachments_Accessories/19A30031OEM_2.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={10}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwd8b8f185/products/Attachments_Accessories/19A30031OEM_3.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={11}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw4a9f5ccf/products/Attachments_Accessories/19A30031OEM_4.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={12}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48b57285/products/Attachments_Accessories/19A30031OEM_5.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={13}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2173deaa/products/Attachments_Accessories/19A30031OEM_6.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={14}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe463b2b5/products/Attachments_Accessories/19A30031OEM_7.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
									<div
										className="slide slick-slide slick-cloned"
										data-slick-index={15}
										id=""
										aria-hidden="true"
										style={{ width: 70, height: 70 }}>
										<span
											className="slide-link zoom-disabled"
											data-src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=70&sh=70&sm=fit">
											<img
												src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfbf0c586/products/Attachments_Accessories/19A30031OEM.jpg?sw=70&sh=70&sm=fit"
												className="slide-img"
												alt="Riding Mower Bagger for 42 in. and 46 in. Decks"
											/>
										</span>
									</div>
								</div>
							</div>
							<button
								className="slick-next slick-arrow"
								aria-label="Next"
								type="button"
								style={{}}>
								Next
							</button>
						</div>
					</div>
					<div className="col-12 col-sm-5 col-lg-4 order-sm-0">
						<div className="hidden-xs-down">
							{/* Product Name */}
							<div className="h1 product-name">
								Riding Mower Bagger for 42 in. and 46 in. Decks
							</div>
							<div className="product-number ">
								Item#:
								<span className="product-id" itemProp="productID">
									19A30031OEM
								</span>
							</div>
							{/* Applicable Promotions */}
							<div className="promotions"></div>
							{/* Prices */}
							<div className="prices">
								<div
									className="price"
									itemProp="offers"
									itemScope=""
									itemType="http://schema.org/Offer">
									<span>
										<meta itemProp="priceCurrency" content="USD" />
										<span className="sales">
											<span className="value" itemProp="price" content="419.99">
												$419.99
											</span>
										</span>
									</span>
								</div>
							</div>

							{/* Review Rating */}
							<div className="product-rating clearfix">
								{/* Product Rating */}
								<div className="ratings">
									{/* Reviews Summary */}
									<div
										data-bv-show="rating_summary"
										data-bv-productid="19A30031OEM"
										data-bv-seo="false"
										data-bv-ready="true">
										<div className="bv_main_container">
											<style
												dangerouslySetInnerHTML={{
													__html:
														'/* == START CLEANSLATE == */\n/*!\n* This includes a subset of CleanSlate.\n*\n* ***IMPORTANT*** The only modifications to this code should be adding,\n* removing or namespacing rules.\n*\n* CleanSlate\n*   github.com/premasagar/cleanslate\n*\n*    An extreme CSS reset stylesheet, for normalising the styling of a container element and its children.\n*\n*    by Premasagar Rose\n*        dharmafly.com\n*\n*    license\n*        opensource.org/licenses/mit-license.php\n*\n*    v0.10.1\n*/\n[data-bv-show="rating_summary"] a,\n[data-bv-show="rating_summary"] span,\n[data-bv-show="rating_summary"] div,\n[data-bv-show="rating_summary"] svg,\n[data-bv-show="rating_summary"] path,\n[data-bv-show="rating_summary"] polygon,\n[data-bv-show="rating_summary"] button {\n  background-attachment: scroll !important;\n  background-color: transparent !important;\n  background-image: none !important; /* This rule affects the use of pngfix JavaScript http://dillerdesign.com/experiment/DD_BelatedPNG for IE6, which is used to force the browser to recognise alpha-transparent PNGs files that replace the IE6 lack of PNG transparency. (The rule overrides the VML image that is used to replace the given CSS background-image). If you don\'t know what that means, then you probably haven\'t used the pngfix script, and this comment may be ignored :) */\n  background-position: 0 0 !important;\n  background-repeat: repeat !important;\n  border-color: black !important;\n  border-color: currentColor !important; /* `border-color` should match font color. Modern browsers (incl. IE9) allow the use of "currentColor" to match the current font \'color\' value <http://www.w3.org/TR/css3-color/#currentcolor>. For older browsers, a default of \'black\' is given before this rule. Guideline to support older browsers: if you haven\'t already declared a border-color for an element, be sure to do so, e.g. when you first declare the border-width. */\n  border-radius: 0 !important;\n  border-style: none !important;\n  border-width: medium !important;\n  bottom: auto !important;\n  clear: none !important;\n  clip: auto !important;\n  color: inherit !important;\n  counter-increment: none !important;\n  counter-reset: none !important;\n  cursor: auto !important;\n  direction: inherit !important;\n  display: inline !important;\n  float: none !important;\n  font-family: inherit !important; /* As with other inherit values, this needs to be set on the root container element */\n  font-size: inherit !important;\n  font-style: inherit !important;\n  font-variant: normal !important;\n  font-weight: inherit !important;\n  height: auto !important;\n  left: auto !important;\n  letter-spacing: normal !important;\n  line-height: inherit !important;\n  list-style-type: inherit !important; /* Could set list-style-type to none */\n  list-style-position: outside !important;\n  list-style-image: none !important;\n  margin: 0 !important;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  opacity: 1;\n  outline: invert none medium !important;\n  overflow: visible !important;\n  padding: 0 !important;\n  position: static !important;\n  quotes: "" "" !important;\n  right: auto !important;\n  table-layout: auto !important;\n  text-align: inherit !important;\n  text-decoration: inherit !important;\n  text-indent: 0 !important;\n  text-transform: none !important;\n  top: auto !important;\n  unicode-bidi: normal !important;\n  vertical-align: baseline !important;\n  visibility: inherit !important;\n  white-space: normal !important;\n  width: auto !important;\n  word-spacing: normal !important;\n  z-index: auto !important;\n\n  /* CSS3 */\n  /* Including all prefixes according to http://caniuse.com/ */\n  /* CSS Animations don\'t cascade, so don\'t require resetting */\n  -webkit-background-origin: padding-box !important;\n  background-origin: padding-box !important;\n  -webkit-background-clip: border-box !important;\n  background-clip: border-box !important;\n  -webkit-background-size: auto !important;\n  -moz-background-size: auto !important;\n  background-size: auto !important;\n  -webkit-border-image: none !important;\n  -moz-border-image: none !important;\n  -o-border-image: none !important;\n  border-image: none !important;\n  -webkit-border-radius: 0 !important;\n  -moz-border-radius: 0 !important;\n  border-radius: 0 !important;\n  -webkit-box-sizing: content-box !important;\n  -moz-box-sizing: content-box !important;\n  box-sizing: content-box !important;\n  -webkit-column-count: auto !important;\n  -moz-column-count: auto !important;\n  column-count: auto !important;\n  -webkit-column-gap: normal !important;\n  -moz-column-gap: normal !important;\n  column-gap: normal !important;\n  -webkit-column-rule: medium none black !important;\n  -moz-column-rule: medium none black !important;\n  column-rule: medium none black !important;\n  -webkit-column-span: 1 !important;\n  -moz-column-span: 1 !important; /* doesn\'t exist yet but probably will */\n  column-span: 1 !important;\n  -webkit-column-width: auto !important;\n  -moz-column-width: auto !important;\n  column-width: auto !important;\n  font-feature-settings: normal !important;\n  overflow-x: visible !important;\n  overflow-y: visible !important;\n  -webkit-hyphens: manual !important;\n  -moz-hyphens: manual !important;\n  hyphens: manual !important;\n  -webkit-perspective: none !important;\n  -moz-perspective: none !important;\n  -ms-perspective: none !important;\n  -o-perspective: none !important;\n  perspective: none !important;\n  -webkit-perspective-origin: 50% 50% !important;\n  -moz-perspective-origin: 50% 50% !important;\n  -ms-perspective-origin: 50% 50% !important;\n  -o-perspective-origin: 50% 50% !important;\n  perspective-origin: 50% 50% !important;\n  -webkit-backface-visibility: visible !important;\n  -moz-backface-visibility: visible !important;\n  -ms-backface-visibility: visible !important;\n  -o-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  text-shadow: none !important;\n  -webkit-transition: all 0s ease 0s !important;\n  transition: all 0s ease 0s !important;\n  -webkit-transform: none !important;\n  -moz-transform: none !important;\n  -ms-transform: none !important;\n  -o-transform: none !important;\n  transform: none !important;\n  -webkit-transform-origin: 50% 50% !important;\n  -moz-transform-origin: 50% 50% !important;\n  -ms-transform-origin: 50% 50% !important;\n  -o-transform-origin: 50% 50% !important;\n  transform-origin: 50% 50% !important;\n  -webkit-transform-style: flat !important;\n  -moz-transform-style: flat !important;\n  -ms-transform-style: flat !important;\n  -o-transform-style: flat !important;\n  transform-style: flat !important;\n  word-break: normal !important;\n}\n\n/* Necessary because cursor: auto breaks our hover styling */\n[data-bv-show="rating_summary"] svg,\n[data-bv-show="rating_summary"] polygon {\n  cursor: inherit !important;\n}\n\n[data-bv-show="rating_summary"] div {\n  display: block !important;\n}\n\n[data-bv-show="rating_summary"] a {\n  color: blue !important;\n  text-decoration: underline !important;\n}\n\n[data-bv-show="rating_summary"] a:visited {\n  color: #529 !important;\n}\n\n[data-bv-show="rating_summary"] a, [data-bv-show="rating_summary"] a * {\n  cursor: pointer !important;\n}\n\n[data-bv-show="rating_summary"] path,\n[data-bv-show="rating_summary"] polygon {\n  fill: currentColor !important;\n}\n\n/* == ROOT CONTAINER ELEMENT == */\n/* This contains default values for child elements to inherit  */\n[data-bv-show="rating_summary"] {\n  font-size: medium !important;\n  line-height: 1 !important;\n  direction: ltr !important;\n  text-align: left !important; /* for IE, Opera */\n  text-align: start !important; /* recommended W3C Spec */\n  color: black !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  text-decoration: none !important;\n  list-style-type: disc !important;\n}\n\n/* == END CLEANSLATE == */\n[data-bv-show="rating_summary"] .bv_main_container {\n  display: inline-flex !important;\n  flex-wrap: wrap !important;\n  background-color: transparent !important;\n  margin-bottom: 0px !important;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n  margin-top: 0px !important;\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  padding-top: 0px !important;\n  border-bottom-style: none !important;\n  border-bottom-color: transparent !important;\n  border-bottom-width: 0px !important;\n  border-left-style: none !important;\n  border-left-color: transparent !important;\n  border-left-width: 0px !important;\n  border-right-style: none !important;\n  border-right-color: transparent !important;\n  border-right-width: 0px !important;\n  border-top-style: none !important;\n  border-top-color: transparent !important;\n  border-top-width: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_row_flex {\n  display: inline-flex !important;\n  align-items: center !important;\n  padding-right: 1em !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_row_normal {\n  width: 100% !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_CTA_row {\n  display: inline-flex !important;\n  padding-top: 0.5em !important;\n  width: 100% !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_main_container_line_break {\n  margin-top: 0.5em !important;\n  width: 100% !important;\n  max-width: 19.5em !important;\n  border-bottom: 1px solid #CECECE !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_microdata_hidden {\n  display: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_avgRating_component_container {\n  display: flex !important;\n  align-items: center !important;\n  padding-right: 0.1em !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_avgRating_component_container:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_avgRating_component_container:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_component_container {\n  display: flex !important;\n  align-items: center !important;\n  white-space: nowrap !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_delimeter {\n  padding-right: 0.1em !important;\n  color: #ccc !important;\n  font-size: 13px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_text {\n  white-space: nowrap !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_text:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_numReviews_text:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_percentRecommend_component_container {\n  padding-top: 0.5em !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_incentivized_component_container {\n  padding-top: 0.5em !important;\n  padding-bottom: 0.3em !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container {\n  padding-top: 0.5em !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container > a,\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container button {\n  padding: 0 !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container > a:hover,\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container button:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container > a:visited,\n[data-bv-show="rating_summary"] .bv_main_container .bv_questionsAndAnswers_component_container button:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_ms_focusable > a:focus,\n[data-bv-show="rating_summary"] .bv_main_container .bv_ms_focusable button:focus {\n  border: 1px solid blue !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container {\n  display: flex !important;\n  align-items: center !important;\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  padding-right: 1em !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container span {\n  display: inherit !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container svg:not(:last-child) {\n  padding-right: 1px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_stars_component_container:hover {\n  cursor: pointer !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonFull {\n  padding: 0.5em 1em 0.5em 1em !important;\n  align-self: center !important;\n  border: none !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%) !important;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;\n  color: #FFFFFF !important;\n  font-size: 13px !important;\n  background-color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  border-bottom-style: none !important;\n  border-bottom-color: transparent !important;\n  border-bottom-width: 0px !important;\n  border-left-style: none !important;\n  border-left-color: transparent !important;\n  border-left-width: 0px !important;\n  border-right-style: none !important;\n  border-right-color: transparent !important;\n  border-right-width: 0px !important;\n  border-top-style: none !important;\n  border-top-color: transparent !important;\n  border-top-width: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonFull:hover {\n  cursor: pointer !important;\n  background-image: none !important;\n  box-shadow: none !important;\n  background-color: #CC0000 !important;\n  color: #FFFFFF !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  font-size: 13px !important;\n  text-decoration: none !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonMinimalist {\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonMinimalist:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_button_buttonMinimalist:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_ms_focusable:focus {\n  border: 1px solid blue !important;\n}\n[data-bv-show="rating_summary"] .bv_main_container .bv_offscreen_text {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  clip: rect(1px 1px 1px 1px) !important;\n  padding: 0 !important;\n  border: 0 !important;\n}\ndiv.bv_modal_component_container[data-bv-modal] {\n  display: flex !important;\n  flex-wrap: wrap !important;\n  position: absolute !important;\n  z-index: 1000 !important;\n  background-color: #ffffff !important;\n}\ndiv.bv_modal_component_container[data-bv-modal] .bv_modal_outer_content:before {\n  content: \'\';\n  display: inline-flex !important;\n  position: absolute !important;\n  left: 45% !important;\n  top: -5px !important;\n  width: 10px !important;\n  height: 10px !important;\n  border-right: 1px solid black !important;\n  border-bottom: 1px solid black !important;\n  transform: rotate(-135deg) !important;\n  background-color: #ffffff !important;\n}\ndiv.bv_modal_component_container[data-bv-modal] .bv_modal_outer_content {\n  margin: 0 auto !important;\n  display: inline-flex !important;\n  flex-wrap: wrap !important;\n  padding: 2em !important;\n  border: 1px solid black !important;\n  max-width: 270px !important;\n}\n.bv_histogram_component_container {\n  min-width: 200px !important;\n}\n.bv_histogram_row_prefix {\n  display: table-cell !important;\n  vertical-align: middle !important;\n  white-space: nowrap !important;\n}\n.bv_histogram_row_container {\n  min-width: 200px !important;\n  height: 25px !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  display: table-row !important;\n  cursor: pointer !important;\n  color: #333 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n}\n.bv_histogram_row_container:hover {\n  background-color: #F7F7F7 !important;\n}\n.bv_histogram_row_bar_empty {\n  border-radius: 2px !important;\n  height: 10px !important;\n  display: block !important;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0) 100%) !important;\n  background-color: #ccc !important;\n  background-color: #CCCCCC !important;\n}\n.bv_histogram_row_bar_filled {\n  border-radius: 2px !important;\n  height: 10px !important;\n  display: block !important;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0) 100%) !important;\n  background-color: #CC0000 !important;\n}\n.bv_histogram_row_full_bar {\n  display: table-cell !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  width: 100% !important;\n  vertical-align: middle !important;\n}\n.bv_histogram_row_rating {\n  display: table-cell !important;\n  vertical-align: middle !important;\n  text-align: center !important;\n}\n.bv_histogram_row_star {\n  display: table-cell !important;\n  vertical-align: middle !important;\n}\n.bv_button_buttonFull {\n  padding: 0.5em 1em 0.5em 1em !important;\n  align-self: center !important;\n  border: none !important;\n  text-align: center !important;\n  text-decoration: none !important;\n  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%) !important;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;\n  color: #FFFFFF !important;\n  font-size: 13px !important;\n  background-color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  text-decoration: none !important;\n  border-bottom-style: none !important;\n  border-bottom-color: transparent !important;\n  border-bottom-width: 0px !important;\n  border-left-style: none !important;\n  border-left-color: transparent !important;\n  border-left-width: 0px !important;\n  border-right-style: none !important;\n  border-right-color: transparent !important;\n  border-right-width: 0px !important;\n  border-top-style: none !important;\n  border-top-color: transparent !important;\n  border-top-width: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n.bv_button_buttonFull:hover {\n  cursor: pointer !important;\n  background-image: none !important;\n  box-shadow: none !important;\n  background-color: #CC0000 !important;\n  color: #FFFFFF !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: bold !important;\n  font-style: normal !important;\n  font-size: 13px !important;\n  text-decoration: none !important;\n}\n.bv_button_buttonMinimalist {\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n.bv_button_buttonMinimalist:hover {\n  cursor: pointer !important;\n  color: #CC0000 !important;\n  font-size: 13px !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n.bv_button_buttonMinimalist:visited {\n  color: #CC0000 !important;\n  font-family: Arial, Helvetica, sans-serif !important;\n  text-transform: none !important;\n  font-weight: normal !important;\n  font-style: normal !important;\n  text-decoration: underline !important;\n}\n.bv_ms_focusable:focus {\n  border: 1px solid blue !important;\n}\n.bv_offscreen_text {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n  clip: rect(1px 1px 1px 1px) !important;\n  padding: 0 !important;\n  border: 0 !important;\n}\n.bv_ms_focusable:focus {\n  border: 1px solid blue !important;\n}\n\n',
												}}
											/>
											<button
												id="ratings-summary"
												className="bv_main_container_row_flex"
												role="link"
												type="button"
												aria-expanded="false">
												<span className="bv_offscreen_text">
													4.4 out of 5 stars. Read reviews for average rating
													value is 4.4 of 5. Read 313 Reviews Same page link.
												</span>
												<div className="bv_stars_component_container">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20px"
														height="20px"
														viewBox="0 0 25 25"
														focusable="false"
														style={{
															width: "20px !important",
															height: "20px !important",
														}}>
														<polygon
															points=""
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_0_99.99_19A30031OEM") !important',
															}}
														/>
														<path
															d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_0_99.99_19A30031OEM") !important',
															}}
														/>
														<defs>
															<linearGradient
																id="bv_rating_summary_star_filled_2_0_99.99_19A30031OEM"
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
																		stopColor: "rgb(204, 204, 204)",
																		stopOpacity: 1,
																	}}
																/>
															</linearGradient>
														</defs>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20px"
														height="20px"
														viewBox="0 0 25 25"
														focusable="false"
														style={{
															width: "20px !important",
															height: "20px !important",
														}}>
														<polygon
															points=""
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_1_99.99_19A30031OEM") !important',
															}}
														/>
														<path
															d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_1_99.99_19A30031OEM") !important',
															}}
														/>
														<defs>
															<linearGradient
																id="bv_rating_summary_star_filled_2_1_99.99_19A30031OEM"
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
																		stopColor: "rgb(204, 204, 204)",
																		stopOpacity: 1,
																	}}
																/>
															</linearGradient>
														</defs>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20px"
														height="20px"
														viewBox="0 0 25 25"
														focusable="false"
														style={{
															width: "20px !important",
															height: "20px !important",
														}}>
														<polygon
															points=""
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_2_99.99_19A30031OEM") !important',
															}}
														/>
														<path
															d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_2_99.99_19A30031OEM") !important',
															}}
														/>
														<defs>
															<linearGradient
																id="bv_rating_summary_star_filled_2_2_99.99_19A30031OEM"
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
																		stopColor: "rgb(204, 204, 204)",
																		stopOpacity: 1,
																	}}
																/>
															</linearGradient>
														</defs>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20px"
														height="20px"
														viewBox="0 0 25 25"
														focusable="false"
														style={{
															width: "20px !important",
															height: "20px !important",
														}}>
														<polygon
															points=""
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_3_99.99_19A30031OEM") !important',
															}}
														/>
														<path
															d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_3_99.99_19A30031OEM") !important',
															}}
														/>
														<defs>
															<linearGradient
																id="bv_rating_summary_star_filled_2_3_99.99_19A30031OEM"
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
																		stopColor: "rgb(204, 204, 204)",
																		stopOpacity: 1,
																	}}
																/>
															</linearGradient>
														</defs>
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="20px"
														height="20px"
														viewBox="0 0 25 25"
														focusable="false"
														style={{
															width: "20px !important",
															height: "20px !important",
														}}>
														<polygon
															points=""
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_4_41.85_19A30031OEM") !important',
															}}
														/>
														<path
															d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
															style={{
																fill: 'url("https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false#bv_rating_summary_star_filled_2_4_41.85_19A30031OEM") !important',
															}}
														/>
														<defs>
															<linearGradient
																id="bv_rating_summary_star_filled_2_4_41.85_19A30031OEM"
																x1="41.85%"
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
																		stopColor: "rgb(204, 204, 204)",
																		stopOpacity: 1,
																	}}
																/>
															</linearGradient>
														</defs>
													</svg>
												</div>
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
													<div
														className="bv_button_component_container"
														style={{}}>
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
						</div>
						<div className="finance-estimation-container">
							<hr />
							<span className="finance-border-text">Or</span>
							<div className="td-estimation w-100">
								<style
									dangerouslySetInnerHTML={{
										__html:
											"\n\n.disclosure  {\n\nfont-size: 10px;\nline-height: 12px;\n\n}\n\n.disclosure-mo {\n\nfont-size: 1.25rem !important;\n\n}\n\n.sales {\n\nfont-size: 1.25rem !important;\n\n}\n\n.list {\n\nfont-size: 1.25rem !important;\n\n}\n\n",
									}}
								/>
								<div className="disclosure-mo">
									<strong>
										$70/mo No interest if paid in full within 6 months
										<sup>1</sup>
									</strong>
									<p className="disclosure">
										Interest will be charged from the purchase date if the
										purchase balance is not paid in full at the end of the
										promotional period. Advertised minimum payment is greater
										than required minimum payment.
									</p>
								</div>
								<div>
									<a
										href="javascript:void(0)"
										data-url="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/FinancingApplication-Disclosure"
										data-title="Details & Disclosures"
										className="td-payment-details">
										See details
									</a>
								</div>
							</div>
							<div className="cc-container">
								<img
									src="/on/demandware.static/Sites-troybilt-Site/-/default/dw34490efe/images/cc-td-card.jpg"
									alt=""
								/>
							</div>
						</div>
						<hr />

						{/*
---------------------------- 
Financing & ModelVerifyBlock
---------------------------- 
*/}
						{/* <Financing /> */}
						{/* <hr class="" /> */}
						<ModelVerifyBlock {...{ fit, inStockCheck }} />
						{/*
---------------------------- 
Financing & ModelVerifyBlock
---------------------------- 
*/}
						<hr />

						<div className="row justify-content-center">
							<div className="col-12">
								<div className="product-description">
									<div className="long-description" itemProp="description">
										<p>
											Bagging helps to foster lawn growth by preventing thatch
											from building up. Using a bagger helps control lawn
											disease naturally, encourages new grass growth, and acts
											as a natural crab grass and weed control. It can help
											increase curb appeal of your lawn. When you bag your grass
											clippings, you create a crisp appearance and a highly
											manicured professional finish, with defined striping, no
											grass clumps left behind, and grass less likely to spread
											to vegetable gardens or flower beds. Bagging your
											clippings is a huge time saver. It’s faster than raking
											and you won’t have to mow as often as mulching.
										</p>
										<p>
											Fits most Troy-Bilt and Cub Cadet, Yard Machines, Bolens,
											Huskee and Craftsman riding mowers with a 42- or 46-inch
											Cutting Deck (2010 - )
										</p>
										<ul>
											<li>Flex tubing to prevent&nbsp;clogging</li>
											<li>
												Integrated top-hinged hood, for easier removal of bags
											</li>
											<li>Sight window lets you know when the bags are full</li>
										</ul>
									</div>
								</div>
							</div>
							{/* Options and Quantity */}
							<div className="col-12">
								<div className="prices-add-to-cart-actions ">
									<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
										<div className="simple-quantity invisible d-none">
											<div className="quantity-form">
												<label className="d-none" htmlFor="quantity">
													Quantity
												</label>
												<label className="minus">
													<input type="button" name="minus" defaultValue="-" />
													<img
														className="icon icon-qty-minus "
														src="/on/demandware.static/Sites-troybilt-Site/-/default/dwf037794f/images/svg-icons/icon-qty-minus.svg"
														alt="decrease quantity"
													/>
												</label>
												<input
													id="quantity"
													type="text"
													name="quantity-input"
													className="quantity-input quantity-select form-control"
													defaultValue={1}
													min={1}
													max={99}
													data-url="/on/demandware.store/Sites-troybilt-Site/en_US/Product-Variation?pid=19A30031OEM"
												/>
												<label className="plus">
													<input type="button" name="plus" defaultValue="+" />
													<img
														className="icon icon-qty-plus "
														src="/on/demandware.static/Sites-troybilt-Site/-/default/dw995661a3/images/svg-icons/icon-qty-plus.svg"
														alt="increase quantity"
													/>
												</label>
											</div>
										</div>
										{/* Cart and [Optionally] Apple Pay */}
										<div className="col-12">
											<input
												type="hidden"
												className="add-to-cart-url"
												defaultValue="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
											/>
											<button
												className="add-to-cart btn btn-secondary"
												data-pid="19A30031OEM"
												data-gtmdata='{"id":"19A30031OEM","name":"Riding Mower Bagger for 42 in. and 46 in. Decks","productType":"ACCESSORY"}'>
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 dealer-direct-msg"></div>
							{/* Part Replaces List */}
							<div className="col-12 part-replaces mt-1">
								<span className="part-replaces-text font-weight-bold">
									This part replaces:
								</span>
								<ul className="part-replaces-list list-unstyled">
									<li>19A30003000</li>
									<li>19A30003799</li>
									<li>19A30003OEM</li>
								</ul>
							</div>
							<div className="col-12">
								<hr />
							</div>
							<div className="col-12 product-links">
								<div className="find-dealer-container">
									<a
										href="https://www.troybilt.com/on/demandware.store/Sites-troybilt-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=&pc=&pid=19A30031OEM"
										className="find-dealer">
										Where To Buy
									</a>
								</div>
								<div className="row">
									<div className="col-12 pdp-modal-content"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Availability */}
			<div
				className="d-none invisible availability product-availability"
				data-ready-to-order="true"
				data-price-available="true"
				data-available="true"
				data-buyable="null"
				data-request-demo="null"></div>
			<div className="pdp-feature-cards"></div>
			<div className="description-and-detail ">
				<div className="container no-container-gutters-sm-down">
					<div className="row">
						<div className="col-12 col-md-8 offset-md-2 text-center">
							<h2 className="pdp-section-heading">Specs &amp; Pledge</h2>
						</div>
					</div>
					<div className="row sticky-nav-container">
						<div className="col-3 d-none d-md-block sticky-nav">
							<ul className="nav nav-tabs pdp-specs-nav">
								<li className="nav-item">
									<a
										className="nav-link icon specs"
										tabIndex={0}
										href="#specs-table-specs-chore"
										data-toggle="collapse"
										data-target="#specsCollapse-19A30031OEM"
										aria-controls="specsCollapse-19A30031OEM"
										aria-expanded="true">
										Specification
									</a>
									<ul>
										<li className="attribute-name">
											<a href="#specs-table-specs-chore" tabIndex={-1}>
												Specifications
											</a>
										</li>
										<li className="attribute-name">
											<a href="#specs-table-specs-blade" tabIndex={-1}>
												Blade Specifications
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<a
										className="nav-link icon pledge"
										data-toggle="collapse"
										data-target="#pledgeCollapse-19A30031OEM"
										aria-controls="pledgeCollapse-19A30031OEM">
										The Right Part Pledge
									</a>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-9">
							<div
								id="pdpAccordion-19A30031OEM"
								className="pdp-specs-accordion accordion-default">
								<div className="card">
									<div className="card-header" id="#heading-specs-19A30031OEM">
										<h5 className="mb-0">
											<a
												href="#"
												className="btn btn-link icon specs"
												data-toggle="collapse"
												data-target="#specsCollapse-19A30031OEM"
												aria-expanded="true"
												aria-controls="specsCollapse-19A30031OEM">
												Specs
											</a>
										</h5>
									</div>
									<div
										id="specsCollapse-19A30031OEM"
										className="collapse show"
										aria-labelledby="heading-specs-19A30031OEM"
										data-parent="#pdpAccordion-19A30031OEM">
										<div className="card-body">
											<div className="row">
												<div className="col-12 col-md-4 col-lg-3 spec-col">
													<h6
														tabIndex={0}
														id="specs-table-specs-chore"
														className="attribute-name">
														Specifications
													</h6>
												</div>
												<div className="col-12 col-md-8 col-lg-9 value content specs-content">
													<ul>
														<li className="attribute-values" tabIndex={0}>
															<span>Series</span>
															Bagger
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-12 col-md-4 col-lg-3 spec-col">
													<h6
														tabIndex={0}
														id="specs-table-specs-blade"
														className="attribute-name">
														Blade Specifications
													</h6>
												</div>
												<div className="col-12 col-md-8 col-lg-9 value content specs-content">
													<ul>
														<li className="attribute-values" tabIndex={0}>
															<span>Deck Cutting Width</span>
															42 in, 46 in
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-header" id="#heading-pledge-19A30031OEM">
										<h5 className="mb-0">
											<a
												href="#"
												className="btn btn-link icon collapsed pledge"
												data-toggle="collapse"
												data-target="#pledgeCollapse-19A30031OEM"
												aria-expanded="false"
												aria-controls="pledgeCollapse-19A30031OEM">
												The Right Part Pledge
											</a>
										</h5>
									</div>
									<div
										id="pledgeCollapse-19A30031OEM"
										className="collapse "
										aria-labelledby="heading-pledge-19A30031OEM"
										data-parent="#pdpAccordion-19A30031OEM">
										<div className="card-body asset-body">
											<div className="content-asset">
												{/* dwMarker="content" dwContentID="0b4fd0bbc24f1f501dc082a32a" */}
												<style
													type="text/css"
													dangerouslySetInnerHTML={{
														__html:
															".pdp-section-heading {\n\t\n\tdisplay: none;\n\t\n\t}\n",
													}}
												/>
												<div className="row">
													<div className="col-md-12 shop with confidence">
														<div className="text-center">
															<img
																src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw30498bfe/Service%20and%20Parts/right-part-pledge-logo.jpg"
																height={200}
																width={200}
															/>
															<h2>Shop with Confidence</h2>
															<p>
																Avoid frustration when buying parts,
																attachments, and accessories with the Troy-Bilt
																Right Part Pledge. If you purchase the wrong
																part from Troy-Bilt or a Troy-Bilt authorized
																online reseller, Troy-Bilt, or your Troy-Bilt
																authorized online reseller will work with you to
																identify the correct part for your equipment and
																initiate a free exchange. See
																<a href="https://www.troybilt.com/en_US/shipping-returns-policy-tb.html">
																	full terms and conditions
																</a>
																.
															</p>
															&nbsp;
															<div className="row">
																<div className="col-md-4">
																	<img
																		alt=""
																		src="Icons/HomePageIcons-blackWred_FastFreeShipping_125x125.png?version=1,576,243,732,000"
																	/>
																	<h3>
																		<img
																			alt=""
																			src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw72921f00/images/Icons/HomePageIcons-blackWred_FastFreeShipping_125x125.png"
																			title=""
																		/>
																	</h3>
																	<h3>Fast, Free Shipping</h3>
																	<p>
																		Parts orders over $50 ship free.*All orders
																		placed before 5 pm ship next day. Standard
																		shipping averages 3 business days for
																		delivery. Expedited shipping is available.
																	</p>
																	<p>
																		*Some exclusions apply.
																		<a href="https://www.troybilt.com/en_US/shipping-returns-policy-tb.html">
																			Read full shipping policy.
																		</a>
																	</p>
																</div>
																<div className="col-md-4">
																	<img
																		alt=""
																		src='https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/en_US/v1686589540276/Icons/HomePageIcons-blackWred_HassleFreeReturns_125x125.png"'
																	/>
																	<h3>
																		<img
																			alt=""
																			src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw82a83ce4/images/Icons/HomePageIcons-blackWred_HassleFreeReturns_125x125.png"
																			title=""
																		/>
																	</h3>
																	<h3>Hassle Free Returns</h3>
																	<p>
																		We&quot;ll make sure you get the right part.
																		Enjoy 90-day returns for unused parts and we
																		won&quot;t penalize you for ordering the
																		wrong part when you follow our return
																		policy.*
																	</p>
																	<p>
																		*Some exclusions apply.
																		<a href="https://www.troybilt.com/en_US/shipping-returns-policy-tb.html">
																			Read full returns policy.
																		</a>
																	</p>
																</div>
																<div className="col-md-4">
																	<img
																		alt=""
																		src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/en_US/v1686589540276/Icons/HomePageIcons-blackWyellow_LiveChat_125x125.png"
																	/>
																	<h3>
																		<img
																			alt=""
																			src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dw88b6cda6/images/Icons/HomePageIcons-blackWred_LiveChat_125x125.png"
																			title=""
																		/>
																	</h3>
																	<h3>Chat with Experts</h3>
																	<p>
																		Our outdoor power equipment experts are just
																		one click away through Live Chat. Available
																		Mon-Fri 9am - 7pm EDT.
																	</p>
																	<p>
																		<span style={{ fontSize: 8 }} />
																	</p>
																	<p>
																		<span style={{ fontSize: 8 }} />
																	</p>
																	<p>Phone support also available:</p>
																	<p>1-800-828-5500</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* End content-asset */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pdp-gallery"></div>
			<div className="reviews-section">
				<div className="container">
					<div className="row reviews ">
						<h2 className="col-12 text-center">Product Reviews</h2>
						{/* Reviews */}
						<div className="col-12 value content">
							<div
								data-bv-show="reviews"
								data-bv-productid="19A30031OEM"
								data-bv-ready="true">
								<div id="BVRRSearchContainer">
									<div className="bv-cleanslate bv-cv2-cleanslate">
										<div
											data-bv-v="contentSearch:1"
											className="bv-shared bv-core-container-167">
											{/*[if lt IE 7]> <div class="bv-compat bvie6 bvie-lt8 bvie"> <![endif]*/}
											{/*[if IE 7]> <div class="bv-compat bvie7 bvie-lt8 bvie"> <![endif]*/}
											{/*[if IE 8]> <div class="bv-compat bvie8 bvie"> <![endif]*/}
											{/*[if IE 9]> <div class="bv-compat bvie9 bvie"> <![endif]*/}
											{/*[if gt IE 9]> <!*/}
											<div className="bv-compat">
												{/*<![endif]*/}
												<div className="bv-content-search">
													<div className="bv-masthead">
														<div className="bv-masthead-product bv-summary-bar">
															<div className="bv-secondary-summary">
																<dl className="bv-stars-container">
																	<dt className="bv-rating-ratio">
																		<button
																			className="bv-rating-stars-container bv-focusable"
																			role="link"
																			title="Read 313 Reviews">
																			<span
																				className="bv-rating-stars bv-rating-stars-off"
																				aria-hidden="true">
																				★★★★★
																			</span>
																			<span
																				className="bv-rating-stars-on bv-rating-stars bv-width-from-rating-stats-88"
																				aria-hidden="true">
																				★★★★★
																			</span>
																			<span className="bv-off-screen">
																				4.4 out of 5 stars. Read reviews for
																				Riding Mower Bagger for 42 in. and 46
																				in. Decks
																			</span>
																		</button>
																	</dt>
																	<dd className="bv-rating-ratio-number">
																		<span className="bv-rating">
																			<span aria-hidden="true">4.4</span>
																		</span>
																	</dd>
																	<dd className="bv-rating-ratio-count">
																		<a
																			href="#"
																			className="bv-rating-label bv-text-link bv-focusable">
																			313 Reviews
																			<span className="bv-off-screen">
																				This action will navigate to reviews.
																			</span>
																		</a>
																	</dd>
																</dl>
																<div className="bv-percent-recommend-container">
																	86 out of 105 (82%) reviewers recommend this
																	product
																</div>
															</div>
														</div>
														<div
															data-bv-v="searchBar:2"
															className="bv-searchbar"
															role="search"
															aria-label="Search topics and reviews search region">
															<div className="bv-masthead-search bv-submission">
																<div className="bv-fieldsets">
																	<div className="bv-expand-filter-button-offset-off">
																		<label
																			htmlFor="bv-text-field-search-contentSearch1"
																			className="bv-off-screen">
																			Search topics and reviews
																		</label>
																		<span
																			className="bv-search-control-icon"
																			aria-hidden="true">
																			ϙ
																		</span>
																		<input
																			id="bv-text-field-search-contentSearch1"
																			className="bv-text bv-focusable bv-search-text"
																			type="text"
																			name="bv-search"
																			placeholder="Search topics and reviews"
																			aria-labelledby="bv-search-contentSearch1"
																		/>
																		<span
																			className="bv-off-screen"
																			id="bv-search-contentSearch1"
																			tabIndex={-1}>
																			Search topics and reviews
																		</span>
																		<button className="bv-focusable bv-search-clear-icon bv-hidden">
																			<span aria-hidden="true"> ✘ </span>
																			<span className="bv-off-screen">
																				Clear Search field
																			</span>
																		</button>
																		<button
																			type="button"
																			className="bv-content-btn bv-content-search-btn bv-focusable"
																			tabIndex={-1}
																			aria-disabled="true"
																			disabled="">
																			<span
																				className="bv-search-control-icon"
																				aria-hidden="true">
																				ϙ
																			</span>
																			<span className="bv-off-screen">
																				Search
																			</span>
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div id="BVRRContainer">
									<div className="bv-cleanslate bv-cv2-cleanslate">
										<div
											data-bv-v="contentList:1"
											className="bv-shared bv-core-container-167"
											data-product-id="19A30031OEM">
											{/*[if lt IE 7]> <div class="bv-compat bvie6 bvie-lt8 bvie"> <![endif]*/}
											{/*[if IE 7]> <div class="bv-compat bvie7 bvie-lt8 bvie"> <![endif]*/}
											{/*[if IE 8]> <div class="bv-compat bv-scroll-spy bvie8 bvie"> <![endif]*/}
											{/*[if IE 9]> <div class="bv-compat bv-scroll-spy bvie9 bvie"> <![endif]*/}
											{/*[if gt IE 9]> <!*/}
											<div
												className="bv-compat bv-scroll-spy"
												data-bv-target="review">
												{/*<![endif]*/}
												<meta name="bvDateModified" content="2023-06-12" />
												<div className="bv-content-list-container">
													<div className="bv-header">
														<div className="bv-action-bar">
															<h2
																className="bv-action-bar-header bv-focusable"
																tabIndex={-1}>
																Reviews
															</h2>
															<div className="bv-write-review-container bv-write-container">
																<button
																	type="button"
																	className="bv-write-review bv-focusable bv-submission-button">
																	Write a review
																	<span className="bv-off-screen">
																		. This action will open a modal dialog.
																	</span>
																</button>
															</div>
														</div>
														<div className="bv-inline-form-container" />
														<div className="bv-section-summary">
															<div
																className="bv-section-summary-table bv-table-full-width"
																role="presentation">
																<div className="bv-section-summary-inline bv-flex-container-responsive">
																	<div
																		data-bv-v="inlineHistogram:9"
																		className="bv-inline-histogram bv-section-summary-block">
																		<div className="bv-inline-histogram-ratings">
																			<div className="bv-inline-histogram-header">
																				<h3 className="bv-content-title">
																					Rating Snapshot
																				</h3>
																			</div>
																			<p className="bv-histogram-filter-helper">
																				Select a row below to filter reviews.
																			</p>
																			<div className="bv-flex-container-column">
																				<div className="bv-inline-histogram-ratings-star-container bv-flex-container">
																					<div
																						className="bv-inline-histogram-ratings-star"
																						data-bv-histogram-rating-value={5}
																						aria-hidden="true">
																						5
																						<span
																							className="bv-glyph"
																							aria-hidden="true">
																							★
																						</span>
																						<span className="bv-off-screen">
																							stars
																						</span>
																					</div>
																					<div
																						className="bv-inline-histogram-ratings-bar"
																						data-bv-histogram-rating-value={5}
																						role="presentation"
																						data-bv-histogram-rating-count={
																							226
																						}>
																						<span className="bv-content-secondary-ratings-container">
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-72" />
																						</span>
																					</div>
																					<div className="bv-inline-histogram-ratings-score">
																						<span aria-hidden="true">226</span>
																						<button
																							type="button"
																							id="bv-inline-histogram-ratings-star-label-5"
																							className="bv-focusable bv-off-screen"
																							aria-disabled="false"
																							aria-pressed="false">
																							<span className="bv-off-screen">
																								226 reviews with 5 stars.
																							</span>
																							Select to filter reviews with 5
																							stars.
																						</button>
																					</div>
																				</div>
																				<div className="bv-inline-histogram-ratings-star-container bv-flex-container">
																					<div
																						className="bv-inline-histogram-ratings-star"
																						data-bv-histogram-rating-value={4}
																						aria-hidden="true">
																						4
																						<span
																							className="bv-glyph"
																							aria-hidden="true">
																							★
																						</span>
																						<span className="bv-off-screen">
																							stars
																						</span>
																					</div>
																					<div
																						className="bv-inline-histogram-ratings-bar"
																						data-bv-histogram-rating-value={4}
																						role="presentation"
																						data-bv-histogram-rating-count={44}>
																						<span className="bv-content-secondary-ratings-container">
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-14" />
																						</span>
																					</div>
																					<div className="bv-inline-histogram-ratings-score">
																						<span aria-hidden="true">44</span>
																						<button
																							type="button"
																							id="bv-inline-histogram-ratings-star-label-4"
																							className="bv-focusable bv-off-screen"
																							aria-disabled="false"
																							aria-pressed="false">
																							<span className="bv-off-screen">
																								44 reviews with 4 stars.
																							</span>
																							Select to filter reviews with 4
																							stars.
																						</button>
																					</div>
																				</div>
																				<div className="bv-inline-histogram-ratings-star-container bv-flex-container">
																					<div
																						className="bv-inline-histogram-ratings-star"
																						data-bv-histogram-rating-value={3}
																						aria-hidden="true">
																						3
																						<span
																							className="bv-glyph"
																							aria-hidden="true">
																							★
																						</span>
																						<span className="bv-off-screen">
																							stars
																						</span>
																					</div>
																					<div
																						className="bv-inline-histogram-ratings-bar"
																						data-bv-histogram-rating-value={3}
																						role="presentation"
																						data-bv-histogram-rating-count={16}>
																						<span className="bv-content-secondary-ratings-container">
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-5" />
																						</span>
																					</div>
																					<div className="bv-inline-histogram-ratings-score">
																						<span aria-hidden="true">16</span>
																						<button
																							type="button"
																							id="bv-inline-histogram-ratings-star-label-3"
																							className="bv-focusable bv-off-screen"
																							aria-disabled="false"
																							aria-pressed="false">
																							<span className="bv-off-screen">
																								16 reviews with 3 stars.
																							</span>
																							Select to filter reviews with 3
																							stars.
																						</button>
																					</div>
																				</div>
																				<div className="bv-inline-histogram-ratings-star-container bv-flex-container">
																					<div
																						className="bv-inline-histogram-ratings-star"
																						data-bv-histogram-rating-value={2}
																						aria-hidden="true">
																						2
																						<span
																							className="bv-glyph"
																							aria-hidden="true">
																							★
																						</span>
																						<span className="bv-off-screen">
																							stars
																						</span>
																					</div>
																					<div
																						className="bv-inline-histogram-ratings-bar"
																						data-bv-histogram-rating-value={2}
																						role="presentation"
																						data-bv-histogram-rating-count={2}>
																						<span className="bv-content-secondary-ratings-container">
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-1" />
																						</span>
																					</div>
																					<div className="bv-inline-histogram-ratings-score">
																						<span aria-hidden="true">2</span>
																						<button
																							type="button"
																							id="bv-inline-histogram-ratings-star-label-2"
																							className="bv-focusable bv-off-screen"
																							aria-disabled="false"
																							aria-pressed="false">
																							<span className="bv-off-screen">
																								2 reviews with 2 stars.
																							</span>
																							Select to filter reviews with 2
																							stars.
																						</button>
																					</div>
																				</div>
																				<div className="bv-inline-histogram-ratings-star-container bv-flex-container">
																					<div
																						className="bv-inline-histogram-ratings-star"
																						data-bv-histogram-rating-value={1}
																						aria-hidden="true">
																						1
																						<span
																							className="bv-glyph"
																							aria-hidden="true">
																							★
																						</span>
																						<span className="bv-off-screen">
																							stars
																						</span>
																					</div>
																					<div
																						className="bv-inline-histogram-ratings-bar"
																						data-bv-histogram-rating-value={1}
																						role="presentation"
																						data-bv-histogram-rating-count={25}>
																						<span className="bv-content-secondary-ratings-container">
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-8" />
																						</span>
																					</div>
																					<div className="bv-inline-histogram-ratings-score">
																						<span aria-hidden="true">25</span>
																						<button
																							type="button"
																							id="bv-inline-histogram-ratings-star-label-1"
																							className="bv-focusable bv-off-screen"
																							aria-disabled="false"
																							aria-pressed="false">
																							<span className="bv-off-screen">
																								25 reviews with 1 star.
																							</span>
																							Select to filter reviews with 1
																							star.
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div
																		data-bv-v="secondaryRatingSummary:10"
																		className="bv-secondary-rating-summary bv-section-summary-block">
																		<div className="bv-secondary-rating-summary-header">
																			<h3 className="bv-content-title">
																				Average Customer Ratings
																			</h3>
																		</div>
																		<div
																			className="bv-secondary-rating-summary-list bv-table"
																			role="presentation">
																			<div className="bv-secondary-rating-summary-stars bv-table-row">
																				<div
																					className="bv-secondary-rating-summary-id bv-td bv-table-cell"
																					aria-hidden="true">
																					Overall
																				</div>
																				<span className="bv-table-cell">
																					<span className="bv-rating-stars-container">
																						<span
																							className="bv-rating-stars bv-rating-stars-off"
																							aria-hidden="true">
																							★★★★★
																						</span>
																						<span
																							className="bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-88"
																							aria-hidden="true">
																							★★★★★
																						</span>
																					</span>
																				</span>
																				<span
																					className="bv-secondary-rating-summary-rating bv-table-cell"
																					aria-hidden="true">
																					4.4
																				</span>
																				<span className="bv-off-screen">
																					Overall, average rating value is 4.4
																					of 5.&nbsp;
																				</span>
																			</div>
																			<div className="bv-secondary-rating-summary-bars-container bv-table-row">
																				<div
																					className="bv-secondary-rating-summary-id bv-td bv-table-cell"
																					aria-hidden="true">
																					Rugged Performance
																				</div>
																				<span className="bv-secondary-rating-summary-container bv-table-cell">
																					<ul
																						className="bv-secondary-rating-summary-bars"
																						role="presentation">
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-value bv-width-from-rating-stats-82"
																							role="presentation"
																						/>
																					</ul>
																				</span>
																				<span
																					className="bv-secondary-rating-summary-rating bv-table-cell"
																					aria-hidden="true">
																					4.1
																				</span>
																				<span className="bv-off-screen">
																					Rugged Performance, average rating
																					value is 4.1 of 5.&nbsp;
																				</span>
																			</div>
																			<div className="bv-secondary-rating-summary-bars-container bv-table-row">
																				<div
																					className="bv-secondary-rating-summary-id bv-td bv-table-cell"
																					aria-hidden="true">
																					Reliably Consistent
																				</div>
																				<span className="bv-secondary-rating-summary-container bv-table-cell">
																					<ul
																						className="bv-secondary-rating-summary-bars"
																						role="presentation">
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-value bv-width-from-rating-stats-80"
																							role="presentation"
																						/>
																					</ul>
																				</span>
																				<span
																					className="bv-secondary-rating-summary-rating bv-table-cell"
																					aria-hidden="true">
																					4.0
																				</span>
																				<span className="bv-off-screen">
																					Reliably Consistent, average rating
																					value is 4 of 5.&nbsp;
																				</span>
																			</div>
																			<div className="bv-secondary-rating-summary-bars-container bv-table-row">
																				<div
																					className="bv-secondary-rating-summary-id bv-td bv-table-cell"
																					aria-hidden="true">
																					Durable Construction
																				</div>
																				<span className="bv-secondary-rating-summary-container bv-table-cell">
																					<ul
																						className="bv-secondary-rating-summary-bars"
																						role="presentation">
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-value bv-width-from-rating-stats-78"
																							role="presentation"
																						/>
																					</ul>
																				</span>
																				<span
																					className="bv-secondary-rating-summary-rating bv-table-cell"
																					aria-hidden="true">
																					3.9
																				</span>
																				<span className="bv-off-screen">
																					Durable Construction, average rating
																					value is 3.9 of 5.&nbsp;
																				</span>
																			</div>
																			<div className="bv-secondary-rating-summary-bars-container bv-table-row">
																				<div
																					className="bv-secondary-rating-summary-id bv-td bv-table-cell"
																					aria-hidden="true">
																					Great Value
																				</div>
																				<span className="bv-secondary-rating-summary-container bv-table-cell">
																					<ul
																						className="bv-secondary-rating-summary-bars"
																						role="presentation">
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-bar bv-width-from-rating-stats-20"
																							role="presentation"
																						/>
																						<li
																							className="bv-secondary-rating-summary-value bv-width-from-rating-stats-78"
																							role="presentation"
																						/>
																					</ul>
																				</span>
																				<span
																					className="bv-secondary-rating-summary-rating bv-table-cell"
																					aria-hidden="true">
																					3.9
																				</span>
																				<span className="bv-off-screen">
																					Great Value, average rating value is
																					3.9 of 5.&nbsp;
																				</span>
																			</div>
																		</div>
																	</div>
																</div>
																<div
																	data-bv-v="headToHead:8"
																	className="bv-head-to-head bv-head-to-head-list bv-flex-container-responsive">
																	<div className="bv-head-to-head-item">
																		<div
																			data-bv-v="contentItem:53"
																			className="bv-content-item bv-section-summary-block bv-content-top-review bv-content-review"
																			data-content-id="Reviews-155476679">
																			<h3 className="bv-content-title">
																				Most Helpful Favorable Review
																			</h3>
																			<div className="bv-content-item-avatar-offset bv-content-item-avatar-offset-off">
																				<div className="bv-content-container">
																					<div className="bv-content-core ">
																						<div className="bv-content-header">
																							<div className="bv-content-data-summary">
																								<div className="bv-content-header-meta">
																									<span className="bv-content-rating bv-rating-ratio">
																										<span className="bv-rating-stars-container">
																											<abbr
																												title="5 out of 5 stars."
																												className="bv-rating bv-rating-stars bv-rating-stars-off"
																												aria-hidden="true">
																												★★★★★
																											</abbr>
																											<abbr
																												title="5 out of 5 stars."
																												className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																												aria-hidden="true">
																												★★★★★
																											</abbr>
																											<span className="bv-off-screen">
																												5 out of 5 stars.
																											</span>
																										</span>
																									</span>
																									<div className="bv-content-meta-wrapper">
																										<div
																											className="bv-content-meta"
																											role="presentation">
																											<div className="bv-content-reference-data bv-content-author-name">
																												<button
																													type="button"
																													className="bv-author bv-fullprofile-popup-target bv-focusable"
																													aria-label="See trvrlon profile.">
																													<h3>trvrlon</h3>
																												</button>
																												<div
																													className="bv-content-datetime"
																													role="presentation">
																													<span
																														className="bv-content-datetime-dot"
																														aria-hidden="true">
																														·
																													</span>
																													<span className="bv-content-datetime-stamp">
																														3 years ago &nbsp;
																													</span>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="bv-content-title-container">
																									<h3 className="bv-content-title">
																										<span className="bv-off-screen">
																											Review by trvrlon. Written
																											3 years ago. 5 out of 5
																											stars.
																										</span>
																										Love my 42&quot;&quot;
																										Bagger
																									</h3>
																								</div>
																							</div>
																						</div>
																						<div className="bv-content-details-offset-off">
																							<div className="bv-content-summary">
																								<div className="bv-content-summary-body">
																									<div className="bv-content-summary-body-text">
																										<p>
																											I love this product. It
																											does exactly what I needed
																											it to do. I have no issues
																											with the lid. I have b…
																											<a
																												className="bv-text-link bv-show-more-link bv-focusable"
																												href="https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false&bvroute=Review%2F155476679#start=0">
																												Show Full Review
																												<span className="bv-off-screen">
																													This action will open
																													a modal dialog.
																												</span>
																											</a>
																										</p>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-actions-container bv-active-feedback">
																					<div
																						data-bv-v="feedback:56"
																						className="bv-feedback-container">
																						<div>
																							29 of 36 people found this helpful
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<a
																			className="bv-head-to-head-see-more-positive bv-focusable"
																			href="https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false&bvroute=Reviews%2FshowHelpfulPositive#start=0">
																			See more 4 and 5 star reviews
																		</a>
																	</div>
																	<div className="bv-head-to-head-item">
																		<div
																			data-bv-v="contentItem:58"
																			className="bv-content-item bv-section-summary-block bv-content-top-review bv-content-review"
																			data-content-id="Reviews-143276933">
																			<h3 className="bv-content-title">
																				Most Helpful Critical Review
																			</h3>
																			<div className="bv-content-item-avatar-offset bv-content-item-avatar-offset-off">
																				<div className="bv-content-container">
																					<div className="bv-content-core ">
																						<div className="bv-content-header">
																							<div className="bv-content-data-summary">
																								<div className="bv-content-header-meta">
																									<span className="bv-content-rating bv-rating-ratio">
																										<span className="bv-rating-stars-container">
																											<abbr
																												title="1 out of 5 stars."
																												className="bv-rating bv-rating-stars bv-rating-stars-off"
																												aria-hidden="true">
																												★★★★★
																											</abbr>
																											<abbr
																												title="1 out of 5 stars."
																												className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-20"
																												aria-hidden="true">
																												★★★★★
																											</abbr>
																											<span className="bv-off-screen">
																												1 out of 5 stars.
																											</span>
																										</span>
																									</span>
																									<div className="bv-content-meta-wrapper">
																										<div
																											className="bv-content-meta"
																											role="presentation">
																											<div className="bv-content-reference-data bv-content-author-name">
																												<button
																													type="button"
																													className="bv-author bv-fullprofile-popup-target bv-focusable"
																													aria-label="See GyJim profile.">
																													<h3>GyJim</h3>
																												</button>
																												<div
																													className="bv-content-datetime"
																													role="presentation">
																													<span
																														className="bv-content-datetime-dot"
																														aria-hidden="true">
																														·
																													</span>
																													<span className="bv-content-datetime-stamp">
																														3 years ago &nbsp;
																													</span>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="bv-content-title-container">
																									<h3 className="bv-content-title">
																										<span className="bv-off-screen">
																											Review by GyJim. Written 3
																											years ago. 1 out of 5
																											stars.
																										</span>
																										Waste of money
																									</h3>
																								</div>
																							</div>
																						</div>
																						<div className="bv-content-details-offset-off">
																							<div className="bv-content-summary">
																								<div className="bv-content-summary-body">
																									<div className="bv-content-summary-body-text">
																										<p>
																											I purchased this bagger
																											when I got my new TroyBilt
																											Bronco. The bagger lid is
																											made of thin plastic a…
																											<a
																												className="bv-text-link bv-show-more-link bv-focusable"
																												href="https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false&bvroute=Review%2F143276933#start=0">
																												Show Full Review
																												<span className="bv-off-screen">
																													This action will open
																													a modal dialog.
																												</span>
																											</a>
																										</p>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-actions-container bv-active-feedback">
																					<div
																						data-bv-v="feedback:61"
																						className="bv-feedback-container">
																						<div>
																							89 of 98 people found this helpful
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<a
																			className="bv-head-to-head-see-more-critical bv-focusable"
																			href="https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false&bvroute=Reviews%2FshowHelpfulCritical#start=0">
																			See more 1, 2, and 3 star reviews
																		</a>
																	</div>
																</div>
															</div>
														</div>
														<div className="bv-control-bar bv-control-bar-filter-offset">
															<div
																data-bv-v="ugcCount:7"
																className="bv-control-bar-count">
																<div
																	id="bv-content-pagination-pages-reviewContentList1-7"
																	className="bv-content-pagination-pages-current">
																	<span
																		role="alert"
																		aria-live="assertive"
																		aria-atomic="true">
																		1–8 of 313 Reviews &nbsp;
																	</span>
																</div>
															</div>
															<div
																data-bv-v="contentSort:1"
																className="bv-control-bar-sort">
																<div className="bv-dropdown">
																	<div className="bv-dropdown-target">
																		<span
																			id="bv-dropdown-select-reviews"
																			className="bv-dropdown-label"
																			aria-hidden="true">
																			Sort by:
																		</span>
																		<button
																			type="button"
																			role="listbox"
																			id="bv-dropdown-sort-by-reviews"
																			className="bv-focusable"
																			aria-haspopup="true"
																			aria-expanded="false"
																			aria-labelledby="bv-dropdown-reviews-menu bv-dropdown-select-reviews bv-dropdown-title-reviews">
																			<span
																				id="bv-dropdown-title-reviews"
																				className="bv-dropdown-title"
																				role="option">
																				Most Helpful
																			</span>
																			<span
																				className="bv-dropdown-arrow"
																				aria-hidden="true"
																				role="presentation">
																				▼
																			</span>
																			<span
																				id="bv-dropdown-reviews-menu"
																				className="bv-off-screen">
																				Menu
																			</span>
																		</button>
																	</div>
																	<select
																		className="bv-select-cleanslate bv-dropdown-select"
																		aria-hidden="true"
																		aria-labelledby="bv-dropdown-select-reviews"
																		tabIndex={-1}>
																		<option value="mostHelpful" selected="">
																			Most Helpful
																		</option>
																		<option value="positive">
																			Highest to Lowest Rating
																		</option>
																		<option value="negative">
																			Lowest to Highest Rating
																		</option>
																		<option value="mostRecent">
																			Most Recent
																		</option>
																	</select>
																</div>
															</div>
															<button
																data-bv-v="contentFilterButton:4"
																className="bv-content-btn bv-filter-control bv-expand-filter-button bv-focusable"
																type="button"
																tabIndex={0}
																aria-expanded="false">
																<span
																	className="bv-filter-control-icon"
																	aria-hidden="true">
																	≡
																</span>
																<span className="bv-filter-control-text">
																	Filter Reviews
																</span>
																<span className="bv-off-screen">
																	Clicking on the following button will update
																	the content below
																</span>
															</button>
														</div>
													</div>
													<div
														data-bv-v="contentFilter:3"
														className="bv-content-filter bv-filter-controls-hidden bv-active-filters-hidden">
														<div
															data-bv-v="FilterControls:63"
															className="bv-filter-controls"
															role="status"
															aria-live="polite">
															<div className="bv-filters bv-hidden">
																<div
																	data-bv-v="FilterSelect:64"
																	className="bv-content-filter-select">
																	<div
																		className="bv-dropdown"
																		data-bv-filter-for="Rating">
																		<div className="bv-dropdown-target">
																			<button
																				type="button"
																				role="listbox"
																				id="bv-content-filter-Rating-dropdown"
																				className="bv-focusable"
																				aria-haspopup="true"
																				aria-expanded="false"
																				aria-controls="bv-content-filter-dropdown-Rating"
																				aria-label="Menu Filter by Rating">
																				<span
																					className="bv-dropdown-arrow"
																					aria-hidden="true"
																					role="presentation">
																					▼
																				</span>
																				<span
																					className="bv-dropdown-title"
																					aria-hidden="true"
																					role="option">
																					Rating
																				</span>
																				<span className="bv-off-screen">
																					Filter by Rating
																				</span>
																			</button>
																		</div>
																		<label
																			htmlFor="bv-dropdown-select-64"
																			className="bv-off-screen"
																			aria-hidden="true">
																			Filter by Rating
																		</label>
																		<select
																			id="bv-dropdown-select-64"
																			className="bv-select-cleanslate bv-dropdown-select">
																			<option value={1}> 1 star </option>
																			<option value={2}> 2 stars </option>
																			<option value={3}> 3 stars </option>
																			<option value={4}> 4 stars </option>
																			<option value={5}> 5 stars </option>
																		</select>
																	</div>
																</div>
															</div>
														</div>
														<div
															data-bv-v="ActiveFilters:65"
															className="bv-active-filters bv-hidden">
															<h4 className="bv-active-filters-list-title">
																Active Filters
															</h4>
															<ul className="bv-active-filters-list">
																<li
																	data-bv-filter-headerid="Rating"
																	className="bv-active-filters-list-item">
																	<button
																		type="button"
																		data-bv-filter-option={1}
																		className="bv-active-filter-button bv-focusable"
																		title="Rating">
																		<span
																			className="bv-off-screen"
																			id="bv-aria-filter-announce-1">
																			Active Filters 1 star
																		</span>
																		1 star
																		<span
																			className="bv-close-icon"
																			aria-hidden="true">
																			✘
																		</span>
																		<span className="bv-off-screen">
																			Remove Filter
																		</span>
																	</button>
																</li>
																<li
																	data-bv-filter-headerid="Rating"
																	className="bv-active-filters-list-item">
																	<button
																		type="button"
																		data-bv-filter-option={2}
																		className="bv-active-filter-button bv-focusable"
																		title="Rating">
																		<span
																			className="bv-off-screen"
																			id="bv-aria-filter-announce-2">
																			Active Filters 2 stars
																		</span>
																		2 stars
																		<span
																			className="bv-close-icon"
																			aria-hidden="true">
																			✘
																		</span>
																		<span className="bv-off-screen">
																			Remove Filter
																		</span>
																	</button>
																</li>
																<li
																	data-bv-filter-headerid="Rating"
																	className="bv-active-filters-list-item">
																	<button
																		type="button"
																		data-bv-filter-option={3}
																		className="bv-active-filter-button bv-focusable"
																		title="Rating">
																		<span
																			className="bv-off-screen"
																			id="bv-aria-filter-announce-3">
																			Active Filters 3 stars
																		</span>
																		3 stars
																		<span
																			className="bv-close-icon"
																			aria-hidden="true">
																			✘
																		</span>
																		<span className="bv-off-screen">
																			Remove Filter
																		</span>
																	</button>
																</li>
																<li
																	data-bv-filter-headerid="Rating"
																	className="bv-active-filters-list-item">
																	<button
																		type="button"
																		data-bv-filter-option={4}
																		className="bv-active-filter-button bv-focusable"
																		title="Rating">
																		<span
																			className="bv-off-screen"
																			id="bv-aria-filter-announce-4">
																			Active Filters 4 stars
																		</span>
																		4 stars
																		<span
																			className="bv-close-icon"
																			aria-hidden="true">
																			✘
																		</span>
																		<span className="bv-off-screen">
																			Remove Filter
																		</span>
																	</button>
																</li>
																<li
																	data-bv-filter-headerid="Rating"
																	className="bv-active-filters-list-item">
																	<button
																		type="button"
																		data-bv-filter-option={5}
																		className="bv-active-filter-button bv-focusable"
																		title="Rating">
																		<span
																			className="bv-off-screen"
																			id="bv-aria-filter-announce-5">
																			Active Filters 5 stars
																		</span>
																		5 stars
																		<span
																			className="bv-close-icon"
																			aria-hidden="true">
																			✘
																		</span>
																		<span className="bv-off-screen">
																			Remove Filter
																		</span>
																	</button>
																</li>
																<li className="bv-active-filters-list-item">
																	<button
																		type="button"
																		className="bv-active-filter-button-clear bv-focusable">
																		<span aria-hidden="true">Clear All</span>
																		<span
																			className="bv-close-icon"
																			aria-hidden="true">
																			✘
																		</span>
																		<span className="bv-off-screen">
																			Clear All Filters
																		</span>
																	</button>
																</li>
															</ul>
														</div>
													</div>
													<ol
														data-bv-v="contentItemCollection:2"
														className="bv-content-list bv-content-list-reviews">
														<li
															data-bv-v="contentItem:11"
															className="bv-content-item bv-content-top-review bv-content-review bv-content-loaded"
															data-content-id="Reviews-185315258">
															<div
																data-bv-v="inlineProfile:15"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See Varsamas profile.">
																					<h3>Varsamas</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See Varsamas profile.">
																				<h3>Varsamas</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> New York </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Reviews
																					</span>
																					<span className="bv-author-userstats-value">
																						3
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						44
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-content-author-badges">
																			<ul
																				className="bv-content-author-badges-list"
																				role="presentation"></ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						45 to 54
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person is one of the top 100 contributors of useful reviews."
																							className="bv-badge bv-badge-contributor bv-badge-contributor-rank"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								★
																							</span>
																							<span className="bv-badge-label">
																								Top 100 Contributor
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="4 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="4 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-80"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								4 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See Varsamas profile.">
																									<h3>Varsamas</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										2 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Cant live without it.
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							If you dont have a bagger for your
																							riding mower then you are not
																							useing the full potential of your
																							mower. This stuff should come
																							standard!
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																						<ul
																							className="bv-content-media-container"
																							role="presentation">
																							<li
																								role="presentation"
																								className="bv-media-item bv-media-item-photo bv-focusable bv-media-item-show bv-media-item-square"
																								tabIndex={0}
																								data-bv-mediatype="Photos"
																								data-bv-media-id={12590249}>
																								<div className="bv-media-item-wrapper">
																									<div className="bv-media-item-spinner-container">
																										<div className="bv-media-item-spinner" />
																									</div>
																									<a
																										className="bv-image-wrapper bv-focusable"
																										tabIndex={0}
																										href="#">
																										<span className="bv-off-screen">
																											Review photo 1.
																										</span>
																										<span className="bv-off-screen">
																											Photo This action will
																											open a modal dialog.
																										</span>
																										<img
																											className="bv-media-item-lazyload"
																											data-src="//photos-us.bazaarvoice.com/photo/2/cGhvdG86dHJveWJpbHQ/1e33a800-4bca-5e7e-a495-15071fc83683"
																											alt="Review photo 1."
																											title="Review photo 1."
																											src="//photos-us.bazaarvoice.com/photo/2/cGhvdG86dHJveWJpbHQ/1e33a800-4bca-5e7e-a495-15071fc83683"
																										/>
																									</a>
																								</div>
																								<span
																									className="bv-media-item-border"
																									role="presentation"
																								/>
																							</li>
																						</ul>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Rugged Performance, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Durable Construction, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Great Value, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:14"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 9 people found this review by Varsamas helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							9
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by Varsamas helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Cant live without it. by Varsamas as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:12"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:13"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:16"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-189741625">
															<div
																data-bv-v="inlineProfile:20"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See John profile.">
																					<h3>John</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See John profile.">
																				<h3>John</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> South Carolina </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Review
																					</span>
																					<span className="bv-author-userstats-value">
																						1
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						5
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						55 to 64
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								5 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See John profile.">
																									<h3>John</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										2 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Awesome
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							Easy to install, picks up leaves
																							very well. Easy to dump, used
																							trash bags in bagger worked great
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Rugged Performance, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Durable Construction, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Great Value, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:19"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 5 people found this review by John helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							5
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by John helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Awesome by John as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:17"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:18"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:21"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-172916530">
															<div
																data-bv-v="inlineProfile:25"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See Willie B Butler profile.">
																					<h3>Willie B Butler</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See Willie B Butler profile.">
																				<h3>Willie B Butler</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> Augusta Georgia </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Review
																					</span>
																					<span className="bv-author-userstats-value">
																						1
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						5
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						65 or over
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="3 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="3 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-60"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								3 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See Willie B Butler profile.">
																									<h3>Willie B Butler</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										2 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Grass bagger
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							Pay close attention to assembly
																							diagram steps are little hard to
																							follow
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-60" />
																							<span className="bv-off-screen">
																								Rugged Performance, 3 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-60" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 3 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-20" />
																							<span className="bv-off-screen">
																								Durable Construction, 1 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-60" />
																							<span className="bv-off-screen">
																								Great Value, 3 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:24"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 5 people found this review by Willie B Butler helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							5
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by Willie B Butler helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Grass bagger by Willie B Butler as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:22"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:23"
																		className="bv-content-list bv-content-list-clientresponses">
																		<li
																			data-bv-v="secondaryContentItem:51"
																			className="bv-content-item bv-secondary-content-clientresponse bv-secondary-content-item">
																			<div className="bv-content-item-avatar-offset bv-content-item-avatar-offset-off">
																				<div className="bv-content-container">
																					<div className="bv-content-core ">
																						<div className="bv-content-header">
																							<div className="bv-content-data-summary">
																								<div className="bv-content-header-meta">
																									<h4 className="bv-content-title">
																										Response from Troy-Bilt:
																									</h4>
																									<div className="bv-content-meta-wrapper">
																										<div
																											className="bv-content-meta"
																											role="presentation">
																											<div className="bv-content-reference-data bv-content-author-name">
																												<span className="bv-author bv-content-author-department">
																													CS
																												</span>
																												<div
																													className="bv-content-datetime"
																													role="presentation">
																													<span
																														className="bv-content-datetime-dot"
																														aria-hidden="true">
																														·
																													</span>
																													<span className="bv-content-datetime-stamp">
																														2 years ago &nbsp;
																													</span>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																								<div className="bv-content-title-container"></div>
																							</div>
																						</div>
																						<div className="bv-content-details-offset-off">
																							<div className="bv-content-summary">
																								<div className="bv-content-summary-body">
																									<div className="bv-content-summary-body-text">
																										<p>
																											Thank you for bringing
																											this situation to our
																											attention. First and
																											foremost, we would like to
																											apologize for any
																											inconvenience this may
																											have caused. If you would
																											like to discuss this
																											problem further, please
																											contact us at
																											1-800-269-6215 and mention
																											Case # 06345220.
																										</p>
																									</div>
																									<div className="bv-content-data">
																										<div className="bv-content-product-questions"></div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</li>
																	</ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:26"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-166012112">
															<div
																data-bv-v="inlineProfile:30"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See Ron S profile.">
																					<h3>Ron S</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See Ron S profile.">
																				<h3>Ron S</h3>
																			</button>
																		</div>
																		<div className="bv-author-location"></div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Review
																					</span>
																					<span className="bv-author-userstats-value">
																						1
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						5
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<span
																				className="bv-no-userinfo"
																				aria-hidden="true">
																				…
																			</span>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								5 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See Ron S profile.">
																									<h3>Ron S</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										3 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Great bagger
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							Does a great job collecting the
																							fall leaves. Easy to empty too
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:29"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 5 people found this review by Ron S helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							5
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by Ron S helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Great bagger by Ron S as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:27"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:28"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:31"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-168258211">
															<div
																data-bv-v="inlineProfile:35"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See Dennis Kerl profile.">
																					<h3>Dennis Kerl</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See Dennis Kerl profile.">
																				<h3>Dennis Kerl</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> Elma NY </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Reviews
																					</span>
																					<span className="bv-author-userstats-value">
																						2
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						4
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						65 or over
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								5 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See Dennis Kerl profile.">
																									<h3>Dennis Kerl</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										2 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Very happy customer
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							The ordering and delivery went
																							very well. The instructions were
																							easy to follow. The unit fit and
																							works very well. Very happy with
																							my Troy Bilt mower. I also have 20
																							year old Troy Bilt tiller that is
																							still going strong. I highly
																							recommend your products to
																							everyone.
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Rugged Performance, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Durable Construction, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Great Value, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:34"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 4 people found this review by Dennis Kerl helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							4
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by Dennis Kerl helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Very happy customer by Dennis Kerl as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:32"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:33"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:36"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-166435166">
															<div
																data-bv-v="inlineProfile:40"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See John profile.">
																					<h3>John</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See John profile.">
																				<h3>John</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> Illinois </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Review
																					</span>
																					<span className="bv-author-userstats-value">
																						1
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						4
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						65 or over
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								5 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See John profile.">
																									<h3>John</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										3 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Rear bagger for troy bolt 46” deck
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							Extremely happy with the rear
																							bagger. There was a bolt and nut
																							missing. Able to clear my leaves
																							quickly
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Rugged Performance, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Durable Construction, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Great Value, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:39"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 4 people found this review by John helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							4
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by John helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Rear bagger for troy bolt 46” deck by John as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:37"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:38"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:41"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-173313732">
															<div
																data-bv-v="inlineProfile:45"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See Lynwood profile.">
																					<h3>Lynwood</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See Lynwood profile.">
																				<h3>Lynwood</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> North Carolina </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Reviews
																					</span>
																					<span className="bv-author-userstats-value">
																						2
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						3
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						55 to 64
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								5 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See Lynwood profile.">
																									<h3>Lynwood</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										2 years ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						My mower and bagger
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							It is great works great told my
																							son about it now he has a 42 inch
																							riding Troy Bilt
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Rugged Performance, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Durable Construction, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Great Value, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:44"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 3 people found this review by Lynwood helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							3
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by Lynwood helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review My mower and bagger by Lynwood as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:42"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:43"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
														<li
															data-bv-v="contentItem:46"
															className="bv-content-item bv-content-top-review bv-content-review"
															data-content-id="Reviews-194085527">
															<div
																data-bv-v="inlineProfile:50"
																className="bv-author-profile">
																<div className="bv-inline-profile">
																	<div className="bv-author-avatar">
																		<div className="bv-author-avatar-nickname">
																			<div
																				className="bv-content-author-name"
																				role="presentation">
																				<button
																					type="button"
																					className="bv-author bv-fullprofile-popup-target bv-focusable"
																					aria-label="See Paul profile.">
																					<h3>Paul</h3>
																				</button>
																			</div>
																		</div>
																	</div>
																	<div className="bv-popup-prosnap-userinfo bv-contains-profile-button">
																		<div
																			className="bv-content-author-name"
																			role="presentation">
																			<button
																				type="button"
																				className="bv-author bv-fullprofile-popup-target bv-focusable"
																				aria-label="See Paul profile.">
																				<h3>Paul</h3>
																			</button>
																		</div>
																		<div className="bv-author-location">
																			<span> Morgantown, WV. </span>
																		</div>
																		<div className="bv-author-userstats">
																			<ul
																				className="bv-author-userstats-list"
																				role="list">
																				<li className="bv-author-userstats-reviews">
																					<span className="bv-author-userstats-data">
																						Review
																					</span>
																					<span className="bv-author-userstats-value">
																						1
																					</span>
																				</li>
																				<li className="bv-author-userstats-votes">
																					<span className="bv-author-userstats-data">
																						Votes
																					</span>
																					<span className="bv-author-userstats-value">
																						2
																					</span>
																				</li>
																			</ul>
																		</div>
																		<div className="bv-author-userinfo">
																			<ul role="list">
																				<li className="bv-author-cdv bv-first ">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Age
																					</span>
																					<span className="bv-author-userinfo-value">
																						55 to 64
																					</span>
																				</li>
																				<li className="bv-author-cdv  bv-last">
																					{/* UIA-7763 - removed default display so only translated strings matched by FB will display; can't remove defaultDisplay field entirely due to compilation errors, so used a value of '' */}
																					<span className="bv-author-userinfo-data">
																						Gender
																					</span>
																					<span className="bv-author-userinfo-value">
																						Male
																					</span>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="bv-content-item-author-profile-offset bv-content-item-author-profile-offset-on">
																<div className="bv-content-container">
																	<div className="bv-content-core ">
																		<div className="bv-content-header">
																			<div className="bv-content-data-summary">
																				<div className="bv-content-badges-container">
																					<ul
																						className="bv-badge-summary bv-badge-first bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This reviewer received an incentive to write this review. An incentive can be a coupon, sample product, sweepstakes entry, loyalty points, or other token of value in exchange for writing a review for this product."
																							className="bv-badge bv-badge-content bv-badge-content-incentivizedreview"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								⊞
																							</span>
																							<span className="bv-badge-label">
																								Incentivized Review
																							</span>
																						</li>
																					</ul>
																					<ul
																						className="bv-badge-summary bv-badge-top-three"
																						role="presentation">
																						<li
																							title="This person purchased the product or service."
																							className="bv-badge bv-badge-content bv-badge-content-verifiedpurchaser"
																							role="presentation">
																							<span
																								className="bv-badge-icon"
																								aria-hidden="true">
																								*
																							</span>
																							<span className="bv-badge-label">
																								Verified Purchaser
																							</span>
																						</li>
																					</ul>
																				</div>
																				<div className="bv-content-header-meta">
																					<span className="bv-content-rating bv-rating-ratio">
																						<span className="bv-rating-stars-container">
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating bv-rating-stars bv-rating-stars-off"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<abbr
																								title="5 out of 5 stars."
																								className="bv-rating-max bv-rating-stars bv-rating-stars-on bv-width-from-rating-stats-100"
																								aria-hidden="true">
																								★★★★★
																							</abbr>
																							<span className="bv-off-screen">
																								5 out of 5 stars.
																							</span>
																						</span>
																					</span>
																					<div className="bv-content-meta-wrapper">
																						<div
																							className="bv-content-meta"
																							role="presentation">
																							<div className="bv-content-reference-data bv-content-author-name">
																								<button
																									type="button"
																									className="bv-author bv-fullprofile-popup-target bv-focusable"
																									aria-label="See Paul profile.">
																									<h3>Paul</h3>
																								</button>
																								<div
																									className="bv-content-datetime"
																									role="presentation">
																									<span
																										className="bv-content-datetime-dot"
																										aria-hidden="true">
																										·
																									</span>
																									<span className="bv-content-datetime-stamp">
																										a year ago &nbsp;
																									</span>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="bv-content-title-container">
																					<h3 className="bv-content-title">
																						Good value
																					</h3>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-offset-on">
																			<div className="bv-content-summary">
																				<div className="bv-content-summary-body">
																					<div className="bv-content-summary-body-text">
																						<p>
																							Happy with bagger purchase
																							overall. The mower bagger was easy
																							to put together and took an hour
																							or so to install on my
																							46&quot;&quot; troy bilt mower.
																							There was a small problem with
																							instruction manual as I matched up
																							the parts with the pictures in the
																							manual and it looked like a couple
																							of parts were missing. I called
																							the help number and was told that
																							they were already assembled on
																							another part and the pictures
																							didn&quot;t look like the actual
																							parts. Besides that the bagger
																							works as described.
																						</p>
																					</div>
																					<div className="bv-content-data">
																						<div className="bv-content-product-questions"></div>
																						<div className="bv-content-tag-dimensions"></div>
																						<div
																							className="bv-content-data-recommend-yes"
																							role="presentation">
																							<div className="bv-content-data-label-container">
																								Recommends this product
																							</div>
																							<div className="bv-content-data-value">
																								<span
																									className="bv-content-data-icon"
																									aria-hidden="true">
																									✔
																								</span>
																								<span className="bv-content-data-label">
																									Yes
																								</span>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="bv-content-details-container">
																			<div className="bv-secondary-ratings">
																				<ul
																					className="bv-content-secondary-ratings"
																					role="presentation">
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Rugged Performance
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Rugged Performance, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Reliably Consistent
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-100" />
																							<span className="bv-off-screen">
																								Reliably Consistent, 5 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Durable Construction
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Durable Construction, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																					<li
																						className="bv-content-secondary-ratings-label"
																						role="presentation"
																						aria-hidden="true">
																						Great Value
																					</li>
																					<li
																						className="bv-popup-histogram-ratings-bar"
																						role="presentation">
																						<span className="bv-content-secondary-ratings-container">
																							<ul
																								className="bv-content-secondary-ratings-bars"
																								role="presentation">
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																								<li
																									className="bv-content-secondary-ratings-bar"
																									role="presentation"
																								/>
																							</ul>
																							<span className="bv-content-secondary-ratings-value bv-width-from-rating-stats-80" />
																							<span className="bv-off-screen">
																								Great Value, 4 out of 5
																								&nbsp;&nbsp;
																							</span>
																						</span>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-content-actions-container bv-active-feedback">
																	<div
																		data-bv-v="feedback:49"
																		className="bv-feedback-container">
																		<div
																			className="bv-content-feedback-vote bv-content-feedback-vote-active"
																			role="group"
																			aria-label="Content helpfulness">
																			<div className="bv-content-feedback-vote-request">
																				<p>Helpful?</p>
																			</div>
																			<div className="bv-content-feedback-btn-container">
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-yes bv-focusable"
																					aria-label="Yes: 2 people found this review by Paul helpful.">
																					<span aria-hidden="true">
																						Yes ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							2
																						</span>
																					</span>
																				</button>
																				<button
																					type="button"
																					className="bv-content-btn bv-content-btn-feedback-no bv-focusable"
																					aria-label="No: 0 people did not find this review by Paul helpful.">
																					<span aria-hidden="true">
																						No ·
																						<span
																							className="bv-content-btn-count"
																							aria-hidden="true">
																							0
																						</span>
																					</span>
																				</button>
																			</div>
																			<div className="bv-content-feedback-vote bv-content-feedback-vote-active">
																				<button
																					type="button"
																					className="bv-content-report-btn bv-focusable"
																					aria-label="Report this review Good value by Paul as inappropriate. ">
																					Report
																				</button>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="bv-inline-form-container" />
																<div
																	data-bv-v="secondaryContentList:47"
																	className="bv-secondary-content-list">
																	<ol
																		data-bv-v="secondaryContentItemCollection:48"
																		className="bv-content-list bv-content-list-clientresponses"
																		role="presentation"></ol>
																</div>
															</div>
														</li>
													</ol>
													<div
														data-bv-v="pagination:5"
														className="bv-content-pagination">
														{/*begin-pagination*/}
														<div className="bv-content-pagination-container">
															<div
																data-bv-v="ugcCount:6"
																className="bv-control-bar-count">
																<div
																	id="bv-content-pagination-pages-reviewContentList1-6"
																	className="bv-content-pagination-pages-current">
																	<span
																		role="alert"
																		aria-live="assertive"
																		aria-atomic="true">
																		1–8 of 313 Reviews &nbsp;
																	</span>
																</div>
															</div>
															<ul
																className="bv-content-pagination-buttons"
																role="presentation">
																<li
																	className="bv-content-pagination-buttons-item bv-content-pagination-buttons-item-previous"
																	role="presentation">
																	<button
																		type="button"
																		className="bv-content-btn bv-content-btn-pages bv-content-btn-pages-first bv-focusable bv-content-btn-pages-inactive"
																		disabled="">
																		<span className="bv-off-screen">
																			Previous Reviews
																		</span>
																		<span
																			className="bv-content-btn-pages-prev"
																			aria-hidden="true">
																			◄
																		</span>
																	</button>
																</li>
																<li
																	className="bv-content-pagination-buttons-item bv-content-pagination-buttons-item-next"
																	role="presentation">
																	<a
																		href="https://www.troybilt.com/en_US/lawn-mower-attachments/riding-mower-bagger-for-42-in.-and-46-in.-decks/19A30031OEM.html?fitsOnModel=false&bvstate=pg:2/ct:r#start=0"
																		role="button"
																		className="bv-content-btn bv-content-btn-pages bv-content-btn-pages-last bv-focusable bv-content-btn-pages-active">
																		<span className="bv-off-screen">
																			Next Reviews
																		</span>
																		<span
																			className="bv-content-btn-pages-next"
																			aria-hidden="true">
																			►
																		</span>
																	</a>
																</li>
															</ul>
														</div>
														{/*end-pagination*/}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End Reviews */}
					</div>
				</div>
			</div>
			<div className="recommendations">
				{/* =============== This snippet of JavaScript handles fetching the dynamic recommendations from the remote recommendations server
and then makes a call to render the configured template with the returned recommended products: ================= */}
				{/* The DIV tag id below is unique on purpose in case there are multiple recommendation slots on the same .isml page: */}
				<div id="cq_recomm_slot-ec21f2180f16cec2c71fbff6f4">
					{/*had to include this here, can't get webpack to include the js file. it doesn't seem to work on slot templates*/}
					<div className="product-carousel-slot container">
						<div className="carousel-title">
							<h4>Recently Viewed Products</h4>
						</div>
						<div className="product-tile-caro slick-initialized slick-slider slick-dotted">
							{/* CQuotient Activity Tracking (viewReco-cquotient.js) */}
							<div className="slick-list draggable">
								<div
									className="slick-track"
									style={{
										opacity: 1,
										width: 5280,
										transform: "translate3d(-1320px, 0px, 0px)",
									}}>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="33AA27JDB66"
										data-slick-index={-4}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB30E XP Battery-Powered Compact Riding Mower"
											data-product-extended-name=""
											data-monetate-pid="33AA27JDB66"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=138&sh=138&sm=fit"
															alt="TB30E XP Battery-Powered Compact Riding Mower"
															title="TB30E XP Battery-Powered Compact Riding Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
														data-gtmdata='{"id":"33AA27JDB66","name":"TB30E XP Battery-Powered Compact Riding Mower","productType":"WholeGood"}'
														itemProp="url">
														TB30E XP Battery-Powered Compact Riding Mower
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
														33AA27JDB66
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
																content={3499.0}>
																$3,499.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="33AA27JDB66"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="fcbc9b5e-690b-48ef-bb43-ea8e38430b00"
																href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="0.0 out of 5 stars.  ">
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_IkVzEHFbNT") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_IkVzEHFbNT") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_0.00_IkVzEHFbNT"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_mo7Gb9p7zz") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_mo7Gb9p7zz") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_0.00_mo7Gb9p7zz"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_NmcjvIYr0v") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_NmcjvIYr0v") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_0.00_NmcjvIYr0v"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_64hFl5ufBi") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_64hFl5ufBi") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_0.00_64hFl5ufBi"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_v80DYvKrKw") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_v80DYvKrKw") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_0.00_v80DYvKrKw"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<div className="bv_text">0.0</div>
																</div>
																<div
																	className="bv_numReviews_component_container"
																	aria-hidden="true">
																	<div className="bv_text">(0)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="33AA27JDB66"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"33AA27JDB66","name":"TB30E XP Battery-Powered Compact Riding Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="918-04822B"
										data-slick-index={-3}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name='Spindle Assembly - 6.3" Dia. Pulley'
											data-product-extended-name=""
											data-monetate-pid="918-04822B"
											data-monetate-producturl="https://www.troybilt.com/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=138&sh=138&sm=fit"
															alt='Spindle Assembly - 6.3" Dia. Pulley'
															title='Spindle Assembly - 6.3" Dia. Pulley'
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html?fitsOnModel=false"
														data-gtmdata='{"id":"918-04822B","name":"Spindle Assembly - 6.3\" Dia. Pulley","productType":"PARTS"}'
														itemProp="url">
														Spindle Assembly - 6.3&quot;&quot; Dia. Pulley
													</a>
												</div>
												<div className="product-number">
													Item#:
													<span className="product-id" itemProp="productID">
														918-04822B
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
																content="116.86">
																$116.86
															</span>
														</span>
													</span>
												</div>
												<div className="ratings"></div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="918-04822B"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"918-04822B","name":"Spindle Assembly - 6.3\" Dia. Pulley","productType":"PARTS"}'>
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
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="15A-3100B66"
										data-slick-index={-2}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB18R Reel Lawn Mower"
											data-product-extended-name=""
											data-monetate-pid="15A-3100B66"
											data-monetate-producturl="https://www.troybilt.com/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=138&sh=138&sm=fit"
															alt="TB18R Reel Lawn Mower"
															title="TB18R Reel Lawn Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
														data-gtmdata='{"id":"15A-3100B66","name":"TB18R Reel Lawn Mower","productType":"WholeGood"}'
														itemProp="url">
														TB18R Reel Lawn Mower
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
														15A-3100B66
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
																content={159.0}>
																$159.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="15A-3100B66"
														data-bv-redirect-url="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="1c880941-5dca-410d-9c52-fc1ff6d630b8"
																href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.2 out of 5 stars. 15 reviews "
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_5jFnSNvctT") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_5jFnSNvctT") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_5jFnSNvctT"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_XklOGWWKXF") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_XklOGWWKXF") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_XklOGWWKXF"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_v6hJ2yGSap") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_v6hJ2yGSap") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_v6hJ2yGSap"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_SXobXC2W6y") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_SXobXC2W6y") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_SXobXC2W6y"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_20.00_UREoQHU7f3") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_20.00_UREoQHU7f3") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_20.00_UREoQHU7f3"
																						x1="20.00%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={15} />
																	<div className="bv_text">(15)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="15A-3100B66"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"15A-3100B66","name":"TB18R Reel Lawn Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="33ABA7KS766"
										data-slick-index={-1}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="Super Bronco™ 42E XP Battery-Powered Riding Mower"
											data-product-extended-name=""
											data-monetate-pid="33ABA7KS766"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=138&sh=138&sm=fit"
															alt="Super Bronco™ 42E XP Battery-Powered Riding Mower"
															title="Super Bronco&trade; 42E XP Battery-Powered Riding Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
														data-gtmdata='{"id":"33ABA7KS766","name":"Super Bronco™ 42E XP Battery-Powered Riding Mower","productType":"WholeGood"}'
														itemProp="url">
														Super Bronco™ 42E XP Battery-Powered Riding Mower
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
														33ABA7KS766
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
																content={4699.0}>
																$4,699.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="33ABA7KS766"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="f1672879-59c6-4c68-9170-bf083bec748d"
																href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="0.0 out of 5 stars.  ">
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_mz8Y5VgnAJ") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_mz8Y5VgnAJ") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_0.00_mz8Y5VgnAJ"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_MYsxJgF5Zt") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_MYsxJgF5Zt") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_0.00_MYsxJgF5Zt"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_EtzGKd0PqQ") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_EtzGKd0PqQ") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_0.00_EtzGKd0PqQ"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_ZZNkbAYU3c") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_ZZNkbAYU3c") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_0.00_ZZNkbAYU3c"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_29gIEOJQwA") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_29gIEOJQwA") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_0.00_29gIEOJQwA"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<div className="bv_text">0.0</div>
																</div>
																<div
																	className="bv_numReviews_component_container"
																	aria-hidden="true">
																	<div className="bv_text">(0)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="33ABA7KS766"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"33ABA7KS766","name":"Super Bronco™ 42E XP Battery-Powered Riding Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-current slick-active"
										data-pid="19A30014OEM"
										data-slick-index={0}
										aria-hidden="false"
										role="tabpanel"
										id="slick-slide20"
										aria-describedby="slick-slide-control20"
										tabIndex={0}
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="Bagger for 30-inch Decks"
											data-product-extended-name=""
											data-monetate-pid="19A30014OEM"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a
													href="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
													tabIndex={0}>
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=138&sh=138&sm=fit"
															alt="Bagger for 30-inch Decks"
															title="Bagger for 30-inch Decks"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
														data-gtmdata='{"id":"19A30014OEM","name":"Bagger for 30-inch Decks","productType":"ACCESSORY"}'
														itemProp="url"
														tabIndex={0}>
														Bagger for 30-inch Decks
													</a>
												</div>
												<div className="product-number">
													Item#:
													<span className="product-id" itemProp="productID">
														19A30014OEM
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
																content="389.99">
																$389.99
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="19A30014OEM"
														data-bv-redirect-url="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="548e22b6-53aa-442b-b94b-8ba52841e82d"
																href="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.3 out of 5 stars. 59 reviews "
																itemProp="aggregateRating"
																itemScope=""
																itemType="https://schema.org/AggregateRating"
																tabIndex={0}>
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_0bhjpEfO9X") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_0bhjpEfO9X") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_0bhjpEfO9X"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_27lamZcN84") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_27lamZcN84") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_27lamZcN84"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_5uIqDwN9gf") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_5uIqDwN9gf") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_5uIqDwN9gf"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_Ga4UDLMELL") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_Ga4UDLMELL") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_Ga4UDLMELL"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_25.42_qsWJULHXCi") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_25.42_qsWJULHXCi") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_25.42_qsWJULHXCi"
																						x1="25.42%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={59} />
																	<div className="bv_text">(59)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="19A30014OEM"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"19A30014OEM","name":"Bagger for 30-inch Decks","productType":"ACCESSORY"}'
																tabIndex={0}>
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
									<div
										className="grid-tile slick-slide slick-active"
										data-pid="13AC26JDA23"
										data-slick-index={1}
										aria-hidden="false"
										role="tabpanel"
										id="slick-slide21"
										tabIndex={0}
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB30B Compact Riding Lawn Mower"
											data-product-extended-name=""
											data-monetate-pid="13AC26JDA23"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a
													href="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
													tabIndex={0}>
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2e5d4e13/products/Equipment/Troy-Bilt_TB30B_3.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2e5d4e13/products/Equipment/Troy-Bilt_TB30B_3.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2e5d4e13/products/Equipment/Troy-Bilt_TB30B_3.jpg?sw=138&sh=138&sm=fit"
															alt="TB30B Compact Riding Lawn Mower"
															title="TB30B Compact Riding Lawn Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
														data-gtmdata='{"id":"13AC26JDA23","name":"TB30B Compact Riding Lawn Mower","productType":"WholeGood"}'
														itemProp="url"
														tabIndex={0}>
														TB30B Compact Riding Lawn Mower
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
														13AC26JDA23
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
																content={1939.0}>
																$1,939.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="13AC26JDA23"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="37b94496-3f5a-4664-9949-c064af323a65"
																href="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.2 out of 5 stars. 534 reviews "
																itemProp="aggregateRating"
																itemScope=""
																itemType="https://schema.org/AggregateRating"
																tabIndex={0}>
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_E0pOCsKxOb") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_E0pOCsKxOb") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_E0pOCsKxOb"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_1IH9Jolp8E") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_1IH9Jolp8E") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_1IH9Jolp8E"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_YiYBZcxiH3") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_YiYBZcxiH3") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_YiYBZcxiH3"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_TSUp2Hsz22") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_TSUp2Hsz22") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_TSUp2Hsz22"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_24.53_1q6blklDPl") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_24.53_1q6blklDPl") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_24.53_1q6blklDPl"
																						x1="24.53%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={534} />
																	<div className="bv_text">(534)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="13AC26JDA23"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"13AC26JDA23","name":"TB30B Compact Riding Lawn Mower","productType":"WholeGood"}'
																tabIndex={0}>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-active"
										data-pid="33AA27JDB66"
										data-slick-index={2}
										aria-hidden="false"
										role="tabpanel"
										id="slick-slide22"
										tabIndex={0}
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB30E XP Battery-Powered Compact Riding Mower"
											data-product-extended-name=""
											data-monetate-pid="33AA27JDB66"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a
													href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
													tabIndex={0}>
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=138&sh=138&sm=fit"
															alt="TB30E XP Battery-Powered Compact Riding Mower"
															title="TB30E XP Battery-Powered Compact Riding Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
														data-gtmdata='{"id":"33AA27JDB66","name":"TB30E XP Battery-Powered Compact Riding Mower","productType":"WholeGood"}'
														itemProp="url"
														tabIndex={0}>
														TB30E XP Battery-Powered Compact Riding Mower
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
														33AA27JDB66
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
																content={3499.0}>
																$3,499.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="33AA27JDB66"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="7f5ae855-f915-4b21-bf1d-4349254a51c0"
																href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="0.0 out of 5 stars.  "
																tabIndex={0}>
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_lcoBd3SuBH") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_lcoBd3SuBH") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_0.00_lcoBd3SuBH"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_DmThjf3E00") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_DmThjf3E00") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_0.00_DmThjf3E00"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_0aQHgBNn1P") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_0aQHgBNn1P") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_0.00_0aQHgBNn1P"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_1m4h8LYHdY") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_1m4h8LYHdY") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_0.00_1m4h8LYHdY"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_oHWXJ5kheO") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_oHWXJ5kheO") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_0.00_oHWXJ5kheO"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<div className="bv_text">0.0</div>
																</div>
																<div
																	className="bv_numReviews_component_container"
																	aria-hidden="true">
																	<div className="bv_text">(0)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="33AA27JDB66"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"33AA27JDB66","name":"TB30E XP Battery-Powered Compact Riding Mower","productType":"WholeGood"}'
																tabIndex={0}>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-active"
										data-pid="918-04822B"
										data-slick-index={3}
										aria-hidden="false"
										role="tabpanel"
										id="slick-slide23"
										tabIndex={0}
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name='Spindle Assembly - 6.3" Dia. Pulley'
											data-product-extended-name=""
											data-monetate-pid="918-04822B"
											data-monetate-producturl="https://www.troybilt.com/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a
													href="/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html?fitsOnModel=false"
													tabIndex={0}>
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=138&sh=138&sm=fit"
															alt='Spindle Assembly - 6.3" Dia. Pulley'
															title='Spindle Assembly - 6.3" Dia. Pulley'
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html?fitsOnModel=false"
														data-gtmdata='{"id":"918-04822B","name":"Spindle Assembly - 6.3\" Dia. Pulley","productType":"PARTS"}'
														itemProp="url"
														tabIndex={0}>
														Spindle Assembly - 6.3&quot;&quot; Dia. Pulley
													</a>
												</div>
												<div className="product-number">
													Item#:
													<span className="product-id" itemProp="productID">
														918-04822B
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
																content="116.86">
																$116.86
															</span>
														</span>
													</span>
												</div>
												<div className="ratings"></div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="918-04822B"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"918-04822B","name":"Spindle Assembly - 6.3\" Dia. Pulley","productType":"PARTS"}'
																tabIndex={0}>
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
									<div
										className="grid-tile slick-slide"
										data-pid="15A-3100B66"
										data-slick-index={4}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide24"
										aria-describedby="slick-slide-control21"
										style={{ width: 330, height: "513.453px" }}
										tabIndex={0}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB18R Reel Lawn Mower"
											data-product-extended-name=""
											data-monetate-pid="15A-3100B66"
											data-monetate-producturl="https://www.troybilt.com/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a
													href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
													tabIndex={0}>
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=138&sh=138&sm=fit"
															alt="TB18R Reel Lawn Mower"
															title="TB18R Reel Lawn Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
														data-gtmdata='{"id":"15A-3100B66","name":"TB18R Reel Lawn Mower","productType":"WholeGood"}'
														itemProp="url"
														tabIndex={0}>
														TB18R Reel Lawn Mower
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
														15A-3100B66
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
																content={159.0}>
																$159.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="15A-3100B66"
														data-bv-redirect-url="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="63d9854d-ec04-4d3d-a9a6-50ba69e6f45e"
																href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.2 out of 5 stars. 15 reviews "
																itemProp="aggregateRating"
																itemScope=""
																itemType="https://schema.org/AggregateRating"
																tabIndex={0}>
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_sa51upKIkq") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_sa51upKIkq") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_sa51upKIkq"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_IMNGAYv0ka") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_IMNGAYv0ka") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_IMNGAYv0ka"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_npv2SvALyc") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_npv2SvALyc") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_npv2SvALyc"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_7xkthvuswR") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_7xkthvuswR") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_7xkthvuswR"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_20.00_jUOyaRcrQ1") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_20.00_jUOyaRcrQ1") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_20.00_jUOyaRcrQ1"
																						x1="20.00%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={15} />
																	<div className="bv_text">(15)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="15A-3100B66"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"15A-3100B66","name":"TB18R Reel Lawn Mower","productType":"WholeGood"}'
																tabIndex={0}>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide"
										data-pid="33ABA7KS766"
										data-slick-index={5}
										aria-hidden="true"
										role="tabpanel"
										id="slick-slide25"
										style={{ width: 330, height: "513.453px" }}
										tabIndex={0}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="Super Bronco™ 42E XP Battery-Powered Riding Mower"
											data-product-extended-name=""
											data-monetate-pid="33ABA7KS766"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a
													href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
													tabIndex={0}>
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=138&sh=138&sm=fit"
															alt="Super Bronco™ 42E XP Battery-Powered Riding Mower"
															title="Super Bronco&trade; 42E XP Battery-Powered Riding Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
														data-gtmdata='{"id":"33ABA7KS766","name":"Super Bronco™ 42E XP Battery-Powered Riding Mower","productType":"WholeGood"}'
														itemProp="url"
														tabIndex={0}>
														Super Bronco™ 42E XP Battery-Powered Riding Mower
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
														33ABA7KS766
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
																content={4699.0}>
																$4,699.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="33ABA7KS766"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="4708c07d-e999-4951-9789-ab1349e8be8d"
																href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="0.0 out of 5 stars.  "
																tabIndex={0}>
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_h644SzSR7S") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_h644SzSR7S") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_0.00_h644SzSR7S"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_zNhlA7FdAX") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_zNhlA7FdAX") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_0.00_zNhlA7FdAX"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_QiOCOxpScE") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_QiOCOxpScE") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_0.00_QiOCOxpScE"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_J4MxOLEKS7") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_J4MxOLEKS7") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_0.00_J4MxOLEKS7"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_6qJVspNiKB") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_6qJVspNiKB") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_0.00_6qJVspNiKB"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<div className="bv_text">0.0</div>
																</div>
																<div
																	className="bv_numReviews_component_container"
																	aria-hidden="true">
																	<div className="bv_text">(0)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="33ABA7KS766"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"33ABA7KS766","name":"Super Bronco™ 42E XP Battery-Powered Riding Mower","productType":"WholeGood"}'
																tabIndex={0}>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="19A30014OEM"
										data-slick-index={6}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="Bagger for 30-inch Decks"
											data-product-extended-name=""
											data-monetate-pid="19A30014OEM"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=138&sh=138&sm=fit"
															alt="Bagger for 30-inch Decks"
															title="Bagger for 30-inch Decks"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
														data-gtmdata='{"id":"19A30014OEM","name":"Bagger for 30-inch Decks","productType":"ACCESSORY"}'
														itemProp="url">
														Bagger for 30-inch Decks
													</a>
												</div>
												<div className="product-number">
													Item#:
													<span className="product-id" itemProp="productID">
														19A30014OEM
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
																content="389.99">
																$389.99
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="19A30014OEM"
														data-bv-redirect-url="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="1d98864e-d50a-486f-a077-00ce90d4acf6"
																href="/en_US/lawn-mower-attachments/bagger-for-30-inch-decks/19A30014OEM.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.3 out of 5 stars. 59 reviews "
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_GdXozbJ8zJ") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_GdXozbJ8zJ") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_GdXozbJ8zJ"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_fGKvJCIBew") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_fGKvJCIBew") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_fGKvJCIBew"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_VDvz1j3KT6") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_VDvz1j3KT6") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_VDvz1j3KT6"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_VxvHLAVL46") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_VxvHLAVL46") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_VxvHLAVL46"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_25.42_dFCTxKF62p") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_25.42_dFCTxKF62p") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_25.42_dFCTxKF62p"
																						x1="25.42%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={59} />
																	<div className="bv_text">(59)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="19A30014OEM"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"19A30014OEM","name":"Bagger for 30-inch Decks","productType":"ACCESSORY"}'>
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
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="13AC26JDA23"
										data-slick-index={7}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB30B Compact Riding Lawn Mower"
											data-product-extended-name=""
											data-monetate-pid="13AC26JDA23"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2e5d4e13/products/Equipment/Troy-Bilt_TB30B_3.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2e5d4e13/products/Equipment/Troy-Bilt_TB30B_3.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2e5d4e13/products/Equipment/Troy-Bilt_TB30B_3.jpg?sw=138&sh=138&sm=fit"
															alt="TB30B Compact Riding Lawn Mower"
															title="TB30B Compact Riding Lawn Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
														data-gtmdata='{"id":"13AC26JDA23","name":"TB30B Compact Riding Lawn Mower","productType":"WholeGood"}'
														itemProp="url">
														TB30B Compact Riding Lawn Mower
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
														13AC26JDA23
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
																content={1939.0}>
																$1,939.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="13AC26JDA23"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="a30efe24-b809-4909-9f70-d45a53051b43"
																href="/en_US/lawn-and-garden-tractors/tb30b-compact-riding-lawn-mower/13AC26JDA23.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.2 out of 5 stars. 534 reviews "
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_e2viH7BPho") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_e2viH7BPho") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_e2viH7BPho"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_R9g41JgKOz") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_R9g41JgKOz") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_R9g41JgKOz"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_3sabwgrrqG") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_3sabwgrrqG") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_3sabwgrrqG"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_LOrlXz12nB") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_LOrlXz12nB") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_LOrlXz12nB"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_24.53_DMkLSbtupB") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_24.53_DMkLSbtupB") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_24.53_DMkLSbtupB"
																						x1="24.53%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={534} />
																	<div className="bv_text">(534)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="13AC26JDA23"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"13AC26JDA23","name":"TB30B Compact Riding Lawn Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="33AA27JDB66"
										data-slick-index={8}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB30E XP Battery-Powered Compact Riding Mower"
											data-product-extended-name=""
											data-monetate-pid="33AA27JDB66"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw07566b58/products/Equipment/Troy-Bilt_TB30EXP_4.jpg?sw=138&sh=138&sm=fit"
															alt="TB30E XP Battery-Powered Compact Riding Mower"
															title="TB30E XP Battery-Powered Compact Riding Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
														data-gtmdata='{"id":"33AA27JDB66","name":"TB30E XP Battery-Powered Compact Riding Mower","productType":"WholeGood"}'
														itemProp="url">
														TB30E XP Battery-Powered Compact Riding Mower
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
														33AA27JDB66
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
																content={3499.0}>
																$3,499.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="33AA27JDB66"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="8f7f9108-c85c-4e7f-9a3e-2ab040c21ccc"
																href="/en_US/lawn-and-garden-tractors/tb30e-xp-battery-powered-compact-riding-mower/33AA27JDB66.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="0.0 out of 5 stars.  ">
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_Z3b0Y0SD6p") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_Z3b0Y0SD6p") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_0.00_Z3b0Y0SD6p"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_FgctSKsmZq") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_FgctSKsmZq") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_0.00_FgctSKsmZq"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_aBeM85fOb6") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_aBeM85fOb6") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_0.00_aBeM85fOb6"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_7J1CxKgMiR") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_7J1CxKgMiR") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_0.00_7J1CxKgMiR"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_7Baq7HaHTj") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_7Baq7HaHTj") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_0.00_7Baq7HaHTj"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<div className="bv_text">0.0</div>
																</div>
																<div
																	className="bv_numReviews_component_container"
																	aria-hidden="true">
																	<div className="bv_text">(0)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="33AA27JDB66"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"33AA27JDB66","name":"TB30E XP Battery-Powered Compact Riding Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="918-04822B"
										data-slick-index={9}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name='Spindle Assembly - 6.3" Dia. Pulley'
											data-product-extended-name=""
											data-monetate-pid="918-04822B"
											data-monetate-producturl="https://www.troybilt.com/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwfb1b7d70/products/918-04822B.jpg?sw=138&sh=138&sm=fit"
															alt='Spindle Assembly - 6.3" Dia. Pulley'
															title='Spindle Assembly - 6.3" Dia. Pulley'
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/spindles/spindle-assembly---6.3inch-dia.-pulley/918-04822B.html?fitsOnModel=false"
														data-gtmdata='{"id":"918-04822B","name":"Spindle Assembly - 6.3\" Dia. Pulley","productType":"PARTS"}'
														itemProp="url">
														Spindle Assembly - 6.3&quot;&quot; Dia. Pulley
													</a>
												</div>
												<div className="product-number">
													Item#:
													<span className="product-id" itemProp="productID">
														918-04822B
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
																content="116.86">
																$116.86
															</span>
														</span>
													</span>
												</div>
												<div className="ratings"></div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="918-04822B"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"918-04822B","name":"Spindle Assembly - 6.3\" Dia. Pulley","productType":"PARTS"}'>
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
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="15A-3100B66"
										data-slick-index={10}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="TB18R Reel Lawn Mower"
											data-product-extended-name=""
											data-monetate-pid="15A-3100B66"
											data-monetate-producturl="https://www.troybilt.com/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw48271604/products/Equipment/Troy-Bilt_TB18R_1000x1000_1.jpg?sw=138&sh=138&sm=fit"
															alt="TB18R Reel Lawn Mower"
															title="TB18R Reel Lawn Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
														data-gtmdata='{"id":"15A-3100B66","name":"TB18R Reel Lawn Mower","productType":"WholeGood"}'
														itemProp="url">
														TB18R Reel Lawn Mower
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
														15A-3100B66
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
																content={159.0}>
																$159.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="15A-3100B66"
														data-bv-redirect-url="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="fc7a3414-a772-4eb2-b0c6-38a4f41fdb48"
																href="/en_US/push-mowers/tb18r-reel-lawn-mower/15A-3100B66.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="4.2 out of 5 stars. 15 reviews "
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_8ok1Q6LVxb") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_99.99_8ok1Q6LVxb") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_99.99_8ok1Q6LVxb"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_TnHgS0CZwy") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_99.99_TnHgS0CZwy") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_99.99_TnHgS0CZwy"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_AfAWzv6GRR") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_99.99_AfAWzv6GRR") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_99.99_AfAWzv6GRR"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_et50oZrmqF") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_99.99_et50oZrmqF") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_99.99_et50oZrmqF"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_20.00_G776LJairR") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_20.00_G776LJairR") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_20.00_G776LJairR"
																						x1="20.00%"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<meta itemProp="reviewCount" content={15} />
																	<div className="bv_text">(15)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="15A-3100B66"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"15A-3100B66","name":"TB18R Reel Lawn Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="grid-tile slick-slide slick-cloned"
										data-pid="33ABA7KS766"
										data-slick-index={11}
										id=""
										aria-hidden="true"
										style={{ width: 330, height: "513.453px" }}>
										<div
											className="product-tile"
											itemScope=""
											itemType="http://schema.org/Product"
											data-product-name="Super Bronco™ 42E XP Battery-Powered Riding Mower"
											data-product-extended-name=""
											data-monetate-pid="33ABA7KS766"
											data-monetate-producturl="https://www.troybilt.com/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html">
											{/* dwMarker="product" dwContentID="null" */}
											<div className="image-container">
												<a href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false">
													<picture>
														{/*[if IE 9]><video style="display: none;"><![endif]*/}
														<source
															media="(min-width: 768px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=280&sh=280&sm=fit"
														/>
														<source
															media="(max-width: 767px)"
															srcSet="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=138&sh=138&sm=fit"
														/>
														{/*[if IE 9]></video><![endif]*/}
														<img
															className="tile-image"
															src="https://www.troybilt.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe4c48c2f/products/Equipment/Troy-Bilt_SuperBronco_42EXP_02.jpg?sw=138&sh=138&sm=fit"
															alt="Super Bronco™ 42E XP Battery-Powered Riding Mower"
															title="Super Bronco&trade; 42E XP Battery-Powered Riding Mower"
															itemProp="image"
														/>
													</picture>
												</a>
											</div>
											<div className="tile-body tile-footer-lg">
												<div className="pdp-link" itemProp="name">
													<a
														className="link"
														href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
														data-gtmdata='{"id":"33ABA7KS766","name":"Super Bronco™ 42E XP Battery-Powered Riding Mower","productType":"WholeGood"}'
														itemProp="url">
														Super Bronco™ 42E XP Battery-Powered Riding Mower
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
														33ABA7KS766
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
																content={4699.0}>
																$4,699.00
															</span>
														</span>
													</span>
												</div>
												<div className="ratings">
													<div
														data-bv-show="inline_rating"
														data-bv-productid="33ABA7KS766"
														data-bv-redirect-url="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
														data-bv-ready="true">
														<div>
															<a
																id="8b47cc86-b427-42b1-b095-c9a1030287db"
																href="/en_US/lawn-and-garden-tractors/super-bronco-42e-xp-battery-powered-riding-mower/33ABA7KS766.html?fitsOnModel=false"
																className="bv_main_container bv_hover"
																aria-label="0.0 out of 5 stars.  ">
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
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_IPnFC26kIH") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_0_0.00_IPnFC26kIH") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_0_0.00_IPnFC26kIH"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_Pa7oVuyAjd") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_1_0.00_Pa7oVuyAjd") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_1_0.00_Pa7oVuyAjd"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_bGuw3WMLZI") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_2_0.00_bGuw3WMLZI") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_2_0.00_bGuw3WMLZI"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_2iMX3eADkp") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_3_0.00_2iMX3eADkp") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_3_0.00_2iMX3eADkp"
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
																								stopColor: "rgb(204, 204, 204)",
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
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_bapx83gCmT") !important',
																					}}
																				/>
																				<path
																					d="M24.8676481,9.0008973 C24.7082329,8.54565507 24.2825324,8.23189792 23.7931772,8.20897226 L16.1009423,8.20897226 L13.658963,0.793674161 C13.4850788,0.296529881 12.9965414,-0.0267985214 12.4623931,0.00174912135 L12.4623931,0.00174912135 C11.9394964,-0.00194214302 11.4747239,0.328465149 11.3146628,0.81767189 L8.87268352,8.23296999 L1.20486846,8.23296999 C0.689809989,8.22949161 0.230279943,8.55030885 0.0640800798,9.0294023 C-0.102119784,9.50849575 0.0623083246,10.0383495 0.472274662,10.3447701 L6.69932193,14.9763317 L4.25734261,22.4396253 C4.08483744,22.9295881 4.25922828,23.4727606 4.68662933,23.7767181 C5.11403038,24.0806756 5.69357086,24.0736812 6.11324689,23.7595003 L12.6333317,18.9599546 L19.1778362,23.7595003 C19.381674,23.9119158 19.6299003,23.9960316 19.8860103,23.9994776 C20.2758842,24.0048539 20.6439728,23.8232161 20.8724402,23.5127115 C21.1009077,23.202207 21.1610972,22.8017824 21.0337405,22.4396253 L18.5917612,14.9763317 L24.6967095,10.3207724 C25.0258477,9.95783882 25.0937839,9.43328063 24.8676481,9.0008973 Z"
																					style={{
																						fill: 'url("#bv_inline_ratings_star_filled_4_0.00_bapx83gCmT") !important',
																					}}
																				/>
																				<defs>
																					<linearGradient
																						id="bv_inline_ratings_star_filled_4_0.00_bapx83gCmT"
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
																								stopColor: "rgb(204, 204, 204)",
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
																	<div className="bv_text">0.0</div>
																</div>
																<div
																	className="bv_numReviews_component_container"
																	aria-hidden="true">
																	<div className="bv_text">(0)</div>
																</div>
															</a>
														</div>
													</div>
												</div>
											</div>
											{/* END_dwmarker */}
											<div className="tile-body-footer">
												<div className="tile-atc col-12 mb-2">
													<div className="row cart-and-ipay atc-product justify-content-center justify-content-sm-start">
														<div className="col-12">
															<button
																className="add-to-cart-tile btn btn-secondary"
																data-pid="33ABA7KS766"
																data-add-to-cart-url="/on/demandware.store/Sites-troybilt-Site/en_US/Cart-AddProduct"
																data-gtmdata='{"id":"33ABA7KS766","name":"Super Bronco™ 42E XP Battery-Powered Riding Mower","productType":"WholeGood"}'>
																Add to Cart
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* CQuotient Activity Tracking (viewReco-cquotient.js) */}
							{/* CQuotient Activity Tracking (viewReco-cquotient.js) */}
							{/* CQuotient Activity Tracking (viewReco-cquotient.js) */}
							{/* CQuotient Activity Tracking (viewReco-cquotient.js) */}
							{/* CQuotient Activity Tracking (viewReco-cquotient.js) */}
						</div>
					</div>
				</div>
				{/* ====================== snippet ends here ======================== */}
			</div>
		</div>
	);
}
