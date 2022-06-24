const Finance = () => {
  return (
    <section className="">
      <div className=" first-line:font-head lg:text-[30px]  text-[16px] text-center font-semibold mt-5">
        Đừng để vấn đề về tài chính <br /> cản bước bạn?
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center bg-White">
        {/* <div className="lg:invisible first-line:font-head text-[16px] text-center font-semibold mt-5">
          Đừng để vấn đề về tài chính <br /> cản bước bạn?
        </div> */}

        <div className="font-body font-medium text-[9.5px]  lg:text-16 mt-10">
          <p className="leading-6 px-5 lg:px-10 lg:-ml-20 lg:leading-7 ">
            Chúng tôi hiểu và đồng cảm với những trăn trở về tài chính của bạn
            vào lúc này…
            <br /> <br />
            “Sớm đầu tư từ hôm nay, đường sự nghiệp thẳng tiến…”
            <br /> <br />
            Vì bạn xứng đáng được đầu tư từ ngày hôm nay, Creative Univ <br />{" "}
            đồng hành cùng bạn với Chính sách học bổng lên đến 50% và <br />
            đặc biệt 100% portfolio ứng tuyển học bổng sẽ được các mentor <br/> đánh
            giá, góp ý với những nhận xét chân thành và thực tế nhất.
          </p>
        </div>
        <div className="font-body text-10 font-medium mt-10 ml-10 mr-2 flex flex-col">
          <p className="font-head lg:text-16 lg:mt-">
            Học phí{" "}
            <span className="flex lg:ustify-center items-center font-head lg:text-24 text-20 font-semibold lg:-mt-7 mt-5 ml-5 text-center">
              8.500.000 VND
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 place-items-center">
            <div className="bg-gray-300 w-full lg:w-[220px] h-[52px] font-head text-[30px] font-semibold mt-5 text-center">
              50%
            </div>
            <div className="bg-gray-300 w-full h-[52px] font-head text-[30px] font-semibold mt-5 text-center">
              20%
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col -ml-10">
              <div className="font-head text-10 font-medium flex flex-col w-[110px] h-[50px] mt-5 ml-[15px]">
                <img src="https://i.imgur.com/cyZGdLe.png" alt="light" />
              </div>
              <p className="mt-8 -ml-[45px] text-[25px] font-hand">
                {" "}
                Xem chi tiết
              </p>
            </div>

            <div className="relative mt-[35px] ml-[15px]">
              <span class="absolute w-[22px] h-[22px] inline-flex rounded-full bg-yellow-main " />
              <span class="asolute animate-ping w-[22px] h-[22px] inline-flex rounded-full bg-yellow-main " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finance;
