import React from "react";
import Banner from "../Banner/Banner";

function BannerWin({ numOfGuesses }) {
	return (
		<Banner status="happy">
			<p>
				<strong>Congratulations!</strong> Got it in{" "}
				<strong>
					{numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
				</strong>
				.
			</p>
		</Banner>
	);
}

export default BannerWin;
