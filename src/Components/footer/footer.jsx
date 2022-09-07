const Footer = (props) => {
  const { isMobile } = props;
  return (
    <section className="">
      {isMobile ? (
        <div className="bg-gray-300 pt-[5%]">
          <div className="ml-[6%] mr-[5%]">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col w-[50%]">
                <div className="">
                  <div>
                    <img
                      className="w-[70%] h-[70%]"
                      src="https://i.imgur.com/0YnLJrv.png"
                      alt="logo"
                    />
                  </div>
                  <div className="text-left mt-[10%] pb-[6.5%] text-[10px] leading-6 font-body font-medium">
                    Vũ trụ Sáng tạo ý nghĩa, chuyên nghiệp và thực tế; nơi phát
                    triển và nuôi dưỡng nhân tài trong ngành Sáng tạo thông qua
                    hành trình trải nghiệm: Học, Làm và Sống trọn vẹn với Sáng
                    tạo cùng nhau.
                  </div>
                </div>
              </div>
          
              <div className="flex flex-col w-[40%] mt-[17%] leading-7">
                <div className="ml-[2%]">
                  <div>
                    <p className="text-[14px] font-body font-semibold">
                      Contact
                    </p>
                  </div>
                  <div className="mt-[15px]">
                    <p className="text-[10px] font-body font-medium">
                      122-124 B2, Khu đô thị Sala, TP Hồ Chí Minh
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-body font-medium">
                    info.creativeuniv@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-body font-medium">
                      +84 899 535 899
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-White pt-[1%] pb-[1%]">
            <p className="ml-[5%] mr-[5%] font-semibold text-[9px] font-body">
              Copyright 2022 & Made by 9soul
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-gray-300 pt-[3%]">
          <div className="ml-[5%] mr-[5%]">
            <div className="flex flex-row gap-10">
              <div className="flex flex-col w-[50%]">
                <div className="">
                  <div>
                    <img
                      className=""
                      src="https://i.imgur.com/0YnLJrv.png"
                      alt="logo"
                    />
                  </div>
                  <div className="text-justify mt-[3.5%] pb-[6.5%] text-[14px] leading-6 font-body font-medium">
                    Vũ trụ Sáng tạo ý nghĩa, chuyên nghiệp và thực tế; nơi phát
                    triển và nuôi dưỡng nhân tài trong ngành Sáng tạo thông qua
                    hành trình trải nghiệm: Học, Làm và Sống trọn vẹn với Sáng
                    tạo cùng nhau.
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[15%] leading-7">
                <div className="ml-[70%]">
                  <div>
                    <a className="text-[18px] font-body font-semibold" href="#">
                      Home
                    </a>
                  </div>
                  <div className="mt-[15px]">
                    <a className="text-[14px] font-body font-medium" href="#">
                      Train
                    </a>
                  </div>
                  <div>
                    <a className="text-[14px] font-body font-medium" href="#">
                      Work
                    </a>
                  </div>
                  <div>
                    <a className="text-[14px] font-body font-medium" href="#">
                      Culture
                    </a>
                  </div>
                  <div>
                    <a className="text-[14px] font-body font-medium" href="#">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[35%] leading-7">
                <div className="ml-[30%]">
                  <div>
                    <p className="text-[18px] font-body font-semibold">
                      Contact
                    </p>
                  </div>
                  <div className="mt-[15px]">
                    <p className="text-[14px] font-body font-medium">
                    122-124 B2, Khu đô thị Sala, TP. Hồ Chí Minh
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-body font-medium">
                    info.creativeuniv@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-body font-medium">
                      +84 899 535 899
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-White pt-[1%] pb-[1%]">
            <p className="ml-[5%] mr-[5%] font-semibold font-[16px] font-body">
              Copyright 2022 & Made by 9soul
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Footer;
