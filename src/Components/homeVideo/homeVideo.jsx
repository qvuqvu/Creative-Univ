import "./homeVideo.css";
import {AiFillPlayCircle} from "react-icons/ai";
const HomeVideo = () => {
 
  return (
    <section className="bg-White ml-10 mr-10">
      <div className="flex flex-col">
        <div className="bg-yellow-main flex flex-row w-[75%]">
        <div className="mt-[3%] ml-[15%]">
        <img
            className=""
              src="https://i.imgur.com/9lPJi6K.png"
              alt="logo"
        />
        </div>
        <div className="mt-[380px] ml-[290px]">
        <button>
              <div
                onClick={() => {
                  
                }}
              >
                <AiFillPlayCircle className="hover:fill-orange-main scale-[6.5] mt-[10] ml-4 lg:mt-10 lg:ml-[80px]" color="white"/>
              </div>
        </button>
        </div>
      </div>
      <div className="">
        
      </div>
      </div>
    </section>
  );
};

export default HomeVideo;