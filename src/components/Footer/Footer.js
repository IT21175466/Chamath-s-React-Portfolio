import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#12141e] pt-12">
            <div className="container">
                <div className="sm:flex items-center justify-between md:gap-8">
                    <div className="w-full sm:w-1/2">
                        <h2 className="text-[26px] leading-10 text-white font-[500] mb-5 md:text-[2rem]">
                            Ready to transform your app idea into a reality in the bustling world of technology?
                        </h2>
                        <a href="#contact">
                            <button className="bg-primaryColor text-white font-[400] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i className="ri-mail-line"></i>Hire Me</button>
                        </a>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
                            "I'm a versatile mobile app developer skilled in creating exceptional user experiences and interfaces across Android and iOS platforms using Flutter and native development. Let me bring your app vision to life, whether it's a specialized iOS app or a cross-platform solution for broader accessibility."
                        </p>



                    <div className="flex items-center gap-4 mt-10 flex-wrap md:gap-8">
                            <span className="text-gray-300 text-[15px] font-[500]">
                            Follow me:
                            </span>
                        <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="www.linkedin.com/in/chamath-harshana" className="text-gray-300 text-[18px] font-[500]">
                                    <i className="ri-linkedin-box-line"></i>
                                </a>
                            </span>
                        <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                                <a href="https://github.com/IT21175466" className="text-gray-300 text-[18px] font-[500]">
                                    <i className="ri-github-line"></i>
                                </a>
                            </span>

                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
