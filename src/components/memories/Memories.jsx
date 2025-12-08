import React from "react";
import "./Memories.css"; 

const Memories = () => {
  return (
    <div className="memories-section">
  
      <div className="memories-text">
        <h2 className="memories-title">
          Unlock unforgettable memories on the road
        </h2>
        <p className="memories-description">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>

        <div className="memories-grid">
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...
            </p>
          </div>
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum
            </p>
          </div>
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            </p>
          </div>
          <div className="memories-item">
            <div className="memories-check"><img src="/src/assets/svg/succesfuly.svg" alt="" /></div>
            <p className="memories-item-text">
              Quis nunc interdum gravida ullamcorper
            </p>
          </div>
        </div>
      </div>

      

      <div className="memories-image-wrapper">
        <img
          src="https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_900,w_900,x_0,y_0/f_auto/q_auto:best/f_auto/q_auto:best/v1751995462/tenants/3588a7c0-beea-47ac-982f-2010fad4d9ff/11193963708045049bffb6b2bbbe6c4e/Car-Show-Website-Icon.png"
          alt="Memories"
          className="memories-image"
        />
      </div>
    </div>
  );
};

export default Memories;
