import "./form.css";
const Form = (props) => {
  const { isMobile } = props;
  return (
    <section>
      {isMobile ? (
        <section className="bg-yellow-main slanted-div mt-8 py-5 ">
          <div className="z-40 font-head text-[14px] font-semibold ml-4">
            Form đăng ký tư vấn
          </div>
          <div className="ml-8 mr-8 mt-3 z-30">
            <form method="POST" id="contactForm" name="contactForm">
              <div class="row">
                <div class="col-md-12 z-50">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Họ và tên (*)"
                    ></input>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Ngày sinh (*)"
                    ></input>
                  </div>
                </div>
                <div class="col-md-12 z-50">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Số điện thoại (*)"
                    ></input>
                  </div>
                </div>
                <div class="col-md-12 z-50">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Email (*)"
                    ></input>
                  </div>
                </div>
                <div class="col-md-12 z-50">
                  <div class="form-group ">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Portfolio (link google drive/behance)"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-start ml-4 font-body font-bold text-[12px] mt-7">
            <button class="z-50 button ">Đăng ký tư vấn</button>
          </div>
          <div className="ml-5 font-body font-medium text-[9px] -mt-[54px]">
            <p className="leading-3 z-50">
              Có khả năng nhận học bổng lên đến 4 250 000 VNĐ khi gửi kèm
              portfolio
            </p>
          </div>
          <div className="z-50 flex justify-center mt-[30px] mb-[1px] text-[20px] ml-10 font-hand">
            Form đăng ký <br /> chính thức
          </div>

          <div className="font-head text-10 font-medium flex flex-col w-[50px] h-[100px] mb-10 -mt[10px] ml-[210px]">
            <img
              className="z-40"
              src="https://i.imgur.com/nXSzPlz.png"
              alt="light"
            />
          </div>

          <button
            onClick={() => {
              window.open(
                "https://forms.gle/QsLV7vAvU3rZUFLh6",
                "_blank"
              );
            }}
          >
            <div className="z-50 relative flex justify-center -mt-[70px] ml-[160px]">
              <span class="absolute w-[45px] h-[45px] inline-flex rounded-full bg-yellow-main " />
              <span class="asolute animate-ping w-[45px] h-[45px] inline-flex rounded-full bg-yellow-main" />
            </div>
          </button>

          <div className="z-10">
            <img
              className="w-full -mt-[260px] -z-10"
              src="https://i.imgur.com/YlslnpE.png"
              alt="hands"
            />
          </div>
        </section>
      ) : (
        <section className="bg-yellow-main slanted-div mt-[10%] py-5 mb-[10%] h-[450px] ">
          <div className="flex flex-row justify-center   ">
            <div className="ml-[8%]">
              <div className="z-40 font-head text-[24px] font-semibold ml-6">
                Form đăng ký tư vấn
              </div>
              <div className="ml-10 mt-3 z-30 ">
                <form
                  className="w-[50%]"
                  method="POST"
                  id="contactFormDesktop"
                  name="contactFormDesktop"
                >
                  <div class="row">
                    <div class="col-md-12 z-50">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Họ và tên (*)"
                        ></input>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Ngày sinh (*)"
                        ></input>
                      </div>
                    </div>
                    <div class="col-md-12 z-50">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Số điện thoại (*)"
                        ></input>
                      </div>
                    </div>
                    <div class="col-md-12 z-50">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Email (*)"
                        ></input>
                      </div>
                    </div>
                    <div class="col-md-12 z-50">
                      <div class="form-group ">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Portfolio (link google drive/behance)"
                        ></input>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex justify-start ml-5 font-body font-bold text-[16px] mt-10">
                <button class="button ">Đăng ký tư vấn</button>
              </div>
              <div className="ml-8 font-body font-medium text-[13px] -mt-[70px]">
                <p className="leading-3 z-50">
                  Có khả năng nhận học bổng lên đến 4 250 000 VNĐ khi gửi kèm
                  portfolio
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start">
              <div className="z-50 -mt-[40px] mb-[50px] text-[24px] ml-[250px] font-hand">
                Form đăng ký <br /> chính thức
              </div>
              <div className="font-head text-10 font-medium w-[50px] h-[100px] mb-10 -mt[1000px] ml-[210px]">
                <img
                  className="z-40"
                  src="https://i.imgur.com/nXSzPlz.png"
                  alt="light"
                />
              </div>

              <button>
                <div
                  onClick={() => {
                    window.open(
                      "https://forms.gle/QsLV7vAvU3rZUFLh6",
                      "_blank"
                    );
                  }}
                  className="z-40 relative flex justify-center -mt-[130px] ml-[250px]"
                >
                  <span class="absolute w-[60px] h-[60px] inline-flex rounded-full bg-yellow-main " />
                  <span class="asolute animate-ping w-[60px] h-[60px] inline-flex rounded-full bg-yellow-main" />
                </div>
              </button>
              <div className="flex items-center  z-0  -mt-[350px] -ml-[150px] w-[900px] h-[549px] img static ">
                <img
                  className=" z-0 -ml-[113px] scale-125"
                  src="https://i.imgur.com/KEP6p8i.png"
                  alt="hands"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Form;
