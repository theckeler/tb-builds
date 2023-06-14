export default function Fit({ className }) {
	return (
		<div className={`card refinement refinement-model-num ${className}`}>
			<div className="card-header">
				<span
					className="refinement-name"
					id="Have a Model Number Link"
					aria-expanded="false"
					aria-controls="Have a Model Number?"
					tabIndex={0}>
					Have a Model Number?
				</span>
			</div>
			<div
				className="card-body"
				id="Fits On Content"
				role="region"
				aria-labelledby="Fits On Link">
				<div className="part-fitment-wrapper plp">
					<div className="content-asset mb-1" style={{ fontSize: "0.9em" }}>
						{/* dwMarker="content" dwContentID="926dbd83f90373e3a9fa0ba683" */}
						Enter your{" "}
						<a
							className="find-model"
							style={{ fontSize: "0.9em" }}
							data-target="#modal-will-fit"
							data-toggle="modal"
							href=""
							title="Find my model number">
							model number
						</a>{" "}
						to confirm fit.
					</div>
					{/* End content-asset */}
					<form
						className="part-fitment-forms need-validation"
						action="/en_US/blades"
						method="get"
						role="search">
						<div className="input-group text-center">
							<input
								name="fitsOnModel"
								type="search"
								className="part-fitment-input form-control text-center p-1"
								defaultValue=""
								required=""
							/>
							<span className="ml-1 ">
								<button
									className="btn btn-secondary content-search py-1"
									type="submit">
									Go
								</button>
							</span>
							<div className="d-none">
								We are sorry, but no parts were found for the model number you
								entered.
							</div>
						</div>
					</form>
					<div className="my-1">
						<a
							className="find-model text-center w-100"
							style={{ fontSize: "0.75em" }}
							data-target="#modal-will-fit"
							data-toggle="modal"
							href=""
							title="Find my model number">
							How to find your model number?
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
