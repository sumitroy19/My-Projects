import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

export default function Work() {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Pick Meals",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
          image: ChooseMeals,
          title: "Choose How Often",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
        },
        {
          image: DeliveryMeals,
          title: "Fast Deliveries",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
        },
    ];
    return <div className="sub-section-wrapper">
        <div className="sub-section-top">
            <p className="subprimary-header">Work</p>
            <h1 className="primary-header">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info" key={data.title}>
                    <div className="info-box-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
                ))
            }
        </div>
    </div>
}