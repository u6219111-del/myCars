import React, { useState } from "react";
import "./Abu.css";

function Abu() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="tt mx-auto flex flex-col justify-center max-w-[1220px]">
      <h2 className="text-4xl text-center font-bold mb-12 inline-block ">
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h3 className="text-[50px] font-bold w-[360px] tl">
            Where every drive feels extraordinary
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          <div> 
            <h4 className="font-bold text-lg mb-2">Variety Brands</h4>
            <p className="text-gray-600 text-sm">
              Platea non auctor fermentum sollicitudin. Eget adipiscing augue
              sit quam natoque ornare cursus viverra odio.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Awesome Support</h4>
            <p className="text-gray-600 text-sm">
              Eget adipiscing augue sit quam natoque ornare cursus viverra odio.
              Diam quam gravida ultricies velit.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Maximum Freedom</h4>
            <p className="text-gray-600 text-sm">
              Diam quam gravida ultricies velit duis consequat integer. Est
              aliquam posuere vel rhoncus massa volutpat in.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Flexibility On The Go</h4>
            <p className="text-gray-600 text-sm">
              Vitae pretium nulla sed quam id nisl semper. Vel non in proin
              egestas dis faucibus rhoncus. Iaculis dignissim aenean
              pellentesque nisl.
            </p>
          </div>
        </div>
      </div>
      <div className="video-wrapper">
        <div className="video-preview" onClick={() => setIsPlaying(true)}></div>

        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/RFcYbx_jLwU?autoplay=1"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Abu;
