import React from "react";
// import styles from "./Card.module.css";
import "./Card.css";

interface CardProps {
    image: string;
    text_column: string;
}

const Card = (props: CardProps) => {
    return (
        <div className="vc_column-inner vc_custom_1616791165196">
            <div className="wpb_wrapper">
                <div className="vc_empty_space" style={{height: 32}}>
                <span className="vc_empty_space_inner"></span>
                </div>
	<div className="wpb_single_image wpb_content_element vc_align_center   support-logo">
		
		<figure className="wpb_wrapper vc_figure">
			<div className="vc_single_image-wrapper   vc_box_border_grey"><img width="196" height="72" src={props.image} className="vc_single_image-img attachment-medium" alt="" loading="lazy" /></div>
		</figure>
	</div>
<div className="vc_empty_space" style={{height: 32}}><span className="vc_empty_space_inner"></span></div>
	<div className="wpb_text_column wpb_content_element  vc_custom_1561411385522 text-center">
		<div className="wpb_wrapper">
			<p>{props.text_column}</p>

		</div>
	</div>
<div className="vc_empty_space" style={{height: 32}}><span className="vc_empty_space_inner"></span></div>
	<div className="wpb_text_column wpb_content_element  text-center">
		<div className="wpb_wrapper">
			<p><a className="see-what-btn see-what" href="/">LEARN MORE</a></p>

		</div>
	</div>
<div className="vc_empty_space" style={{height: 60}}><span className="vc_empty_space_inner"></span></div></div></div>
    );
};

export default Card;