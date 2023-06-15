"use client";
export default function FitsProduct({
	className,
	results,
	//setResults,
	fits = true,
}) {
	return (
		<div className={` ${className}`}>
			{results && (
				<ul className="list-unstyled d-flex align-items-center mt-2">
					<li>
						<div
							className="rounded-circle p-1 mr-1"
							style={{ backgroundColor: fits ? "green" : "red" }}></div>
					</li>
					<li>
						{fits ? (
							<div>Will Fit Model #13APA1CT010</div>
						) : (
							<div>
								Will <strong>NOT</strong> Fit Model #13APA1CT010
							</div>
						)}
					</li>
				</ul>
			)}
		</div>
	);
}
