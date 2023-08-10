import React from "react";
import heroImg from "../../assets/images/profile.png"

const Hero = () => {
    return(
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    <div className="w-full md:basis-1/2">
                        <h5
                        data-aos="fade-right"
                        data-aos-duration ="1500"
                        className="text-headingColor font-[600] text-[16px]"
                        >
                            Hello Welcome
                        </h5>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px]
                        sm:leading-[46px] mt-5">
                            I'm Chamath Harshana <br />
                            Mobile Application Developer
                        </h1>

                        <div
                         data-aos="fade-up"
                         data-aos-duration="1800"
                         data-aos-delay="200"
                         className="flex items-center gap-6 mt-7"
                        >
                            <a href="#contact">
                            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i className="ri-mail-line"></i>Hire Me</button>
                            </a>

                            <a
                                className="text-smallTextColor font-[400] text-[16px] border-b border-solid border-smallTextColor"
                                href="#portfolio">See Portfolio
                            </a>



                        </div>

                        <p data-aos="fade-left"
                           data-aos-duration="1500"
                           className="flex gap-2 text-headingColor mt-14 font-[400] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                        >
                            <span>
                            <i className="ri-apps-line"></i>
                        </span>
                            Hi! My name is Chamath. I'm working in the field of Mobile Application Development including Flutter Development, IOS Development, UI and Wireframe Design with doing my Software Engineering Degree. A skilled observer who always tries to be creative in producing unique ideas. Feel free to contact me. Let’s create something together!</p>

                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[500]">
                            Follow me:
                            </span>
                            <span>
                                <a href="https://www.linkedin.com/in/chamath-harshana/" className="text-smallTextColor text-[25px] font-[500]">
                                    <i className="ri-linkedin-box-fill"></i>


                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/IT21175466" className="text-smallTextColor text-[22px] font-[500]">
                                    <i className="ri-github-fill"></i>


                                </a>
                            </span>



                        </div>

                    </div>

                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={heroImg} alt=''/>
                        </figure>

                    </div>

                   

                </div>

            </div>

        </section>
    );
}

export default Hero