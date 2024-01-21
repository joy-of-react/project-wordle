import React from "react";
import Banner from "../Banner/Banner";

function BannerLose({ answer }) {
	return (
		<Banner status="sad">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</Banner>
	);
}

export default BannerLose;
