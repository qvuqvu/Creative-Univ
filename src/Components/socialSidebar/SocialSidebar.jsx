import React, {useState} from 'react';

function SocialSidebar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    {!isOpen ? 
      (<div className="fixed top-[35%] right-0 z-10 bg-yellow-main w-[10px] h-[188px]">
        <button className="fixed top-[35%] right-0 z-20 w-[10px] h-[188px]" onClick={() => setIsOpen(!isOpen)}>
          
          </button>
      </div>
      ) :
      (
        <button className="fixed top-[35%] right-0 z-20 w-[60px] 
        h-[188px] ease-in-out duration-300" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col items-center gap-5">
        <div>
        <a className="z-30" href="https://www.facebook.com/ULTIMATE.Mystery/">
        <img
          className=""
          src="https://i.imgur.com/SGN6rnv.png"
          alt="Youtube"
        />
        </a>  
        </div>
        <div>
        <a className="z-30" href="https://www.facebook.com/ULTIMATE.Mystery/">
        <img
          className=""
          src="https://i.imgur.com/MMleym7.png"
          alt="light"
        />
        </a>  
        </div>  
        <div>
        <a className="z-30" href="https://www.facebook.com/ULTIMATE.Mystery/">
        <img
          className=""
          src="https://i.imgur.com/yDaMqEl.png"
          alt="light"
        />
        </a>  
        </div>    
      </div>    
          </button>
      )
    }
    <div className={`fixed top-[35%] right-0 z-10 bg-yellow-main w-[60px] 
    h-[188px] ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
    
    </div>
    </>
);

};

export default SocialSidebar;