import React, { useState } from "react";

const ChangeImg = () => {
  const [changeImg, setChangeImg] = useState(
    "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );

  //
  //
  const Changing = () => {
    if (
      changeImg ===
      "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ) {
      setChangeImg(
        "https://images.pexels.com/photos/8422781/pexels-photo-8422781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    } else if (
      changeImg ===
      "https://images.pexels.com/photos/8422781/pexels-photo-8422781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ) {
      setChangeImg(
        "https://images.pexels.com/photos/8422757/pexels-photo-8422757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      );
    } else {
      setChangeImg(
        "https://images.pexels.com/photos/8422782/pexels-photo-8422782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      );
    }
  };

  return (
    <>
      <div className="img-change">
        <img src={changeImg} alt="" className="img-box" />
        <button className="btn-card-book" type="button" onClick={Changing}>
          button
        </button>
      </div>
    </>
  );
};

export default ChangeImg;
