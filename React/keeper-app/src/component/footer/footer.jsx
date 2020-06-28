import React from "react";

let d=new Date();
let copyright_year=d.getFullYear();
function Footer(){
	return (

		<footer>
			<p>Copyright©️ {copyright_year}</p>
		</footer>


		);
};


export default Footer;