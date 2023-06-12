"use client";

import Check from "@/app/components/icons/Check";
import X from "@/app/components/icons/X";

export default function ModelVerifyBlock({
	modelNum,
	setModelNum,
	setVerify,
	className,
	fits,
	id,
}) {
	return (
		<div className="list-unstyled d-flex align-items-center">
			<div
				className="rounded-circle position-relative"
				style={{
					padding: "6px",
					backgroundColor: modelNum === "1234" ? "green" : "red",
					border: "1px solid #000",
					zIndex: 1,
				}}>
				{modelNum === "1234" ? (
					<Check style={{ maxWidth: "40px" }} fill="#fff" />
				) : (
					<X style={{ maxWidth: "40px" }} />
				)}
			</div>

			<div
				className="p-1 pl-3 ml-n2 position-relative w-100"
				style={{ background: "#e8e8e8", zIndex: 0 }}>
				<div className="text-center">
					<div
						className={`font-bold ${modelNum !== "1234" && "text-danger"}`}
						style={{ marginBottom: "6px" }}>
						{modelNum === "1234" ? "Will Fit" : "Will NOT Fit"}
					</div>
					<div className="" style={{ fontSize: "12px", lineHeight: 1.2 }}>
						This part <strong>IS</strong> expected to fit your equipment.
					</div>
					<div className="bg-white mt-1 font-bold" style={{ padding: "4px" }}>
						#{modelNum}
					</div>
					<button
						className="border-0 bg-transparent"
						style={{ fontSize: "11px" }}
						onClick={(e) => {
							const containerID = document.querySelector(`#${id}`);
							setModelNum(0);
							containerID
								.querySelector("#model-input")
								.classList.remove("d-none");
							containerID
								.querySelector("#model-input-result")
								.classList.add("d-none");
							setVerify(false);
						}}>
						<u>Reset</u>
					</button>
				</div>
			</div>
		</div>
	);
}
