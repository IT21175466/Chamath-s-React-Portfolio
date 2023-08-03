import React from "react";
import frontendImg from "../../assets/images/front-end.png"

const Services = () => {
    return(
      <section id="services">
          <div className="container lg:pt-5">
              <div className="text-center">
                  <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                      What do I help
                  </h2>
                  <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[400] text-[16px] leading-7">
                      As a mobile app developer with a diverse skill set, I specialize in crafting exceptional user experiences and user interfaces across multiple platforms. With expertise in Flutter, I can create dynamic and engaging apps that work seamlessly on both Android and iOS devices. Additionally, my proficiency in native development allows me to leverage the full potential of each platform, ensuring optimal performance and user satisfaction. Whether you need a specialized iOS app or a cross-platform solution to reach a wider audience, I have the knowledge and experience to bring your vision to the real world!
                  </p>
              </div>

              <div className="flex flex-col justify-center sm:py-12">
                  <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                      <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* Running Vertical Line */}

                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform
                        -translate-x-1/2"></div>

                          {/* Left Card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">


                              <div className="flex items-center flex-col sm:flex-row">

                                  <div className="flex justify-start w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          <div
                                              data-aos='fade-right'
                                              data-aos-duration='1200'
                                              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">

                                              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                              group-hover:font-[700] text-2xl">Mobile Application Developer</h3>

                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover: font-[400] leading-7">
                                                  I'm a dedicated mobile app developer proficient in creating innovative and user-friendly applications across various platforms.
                                              </p>
                                          </div>

                                  </div>
                              </div>

                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-5 flex items-center
                                  justify-center">

                                  </div>
                            </div>
                          </div>

                          {/* Right Card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">


                              <div className="flex items-center flex-col sm:flex-row">

                                  <div className="flex justify-end w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pl-8">
                                          <div
                                              data-aos='fade-left'
                                              data-aos-duration='1500'
                                              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">

                                              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                              group-hover:font-[700] text-2xl">Flutter Developer</h3>

                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover: font-[400] leading-7">
                                                  I'm a versatile Flutter developer proficient in both frontend and backend development, creating seamless user experiences from UI design to robust backend systems.                                              </p>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-5 flex items-center
                                  justify-center">

                                  </div>
                              </div>
                          </div>

                          {/* Left Card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">


                              <div className="flex items-center flex-col sm:flex-row">

                                  <div className="flex justify-start w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          <div
                                              data-aos='fade-right'
                                              data-aos-duration='1200'
                                              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">

                                              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                              group-hover:font-[700] text-2xl">Android Developer</h3>

                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover: font-[400] leading-7">
                                                  I'm an Android developer utilizing Android Studio to design and build cutting-edge mobile applications.
                                              </p>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-5 flex items-center
                                  justify-center">

                                  </div>
                              </div>
                          </div>

                          {/* Right Card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">


                              <div className="flex items-center flex-col sm:flex-row">

                                  <div className="flex justify-end w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pl-8">
                                          <div
                                              data-aos='fade-left'
                                              data-aos-duration='1500'
                                              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">

                                              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                              group-hover:font-[700] text-2xl">Wireframe Designer</h3>

                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover: font-[400] leading-7">
                                                  I'm a wireframer who transforms ideas into visual blueprints, providing a clear roadmap for the design process.                                              </p>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-5 flex items-center
                                  justify-center">

                                  </div>
                              </div>
                          </div>

                          {/* Left Card */}
                          <div className="mt-6 sm:mt-0 sm:mb-12">


                              <div className="flex items-center flex-col sm:flex-row">

                                  <div className="flex justify-start w-full mx-auto items-center">
                                      <div className="w-full sm:w-1/2 sm:pr-8">
                                          <div
                                              data-aos='fade-right'
                                              data-aos-duration='1200'
                                              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">

                                              <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white
                                              group-hover:font-[700] text-2xl">IOS Developer</h3>

                                              <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover: font-[400] leading-7">
                                                  I'm an iOS developer committed to creating exceptional and immersive experiences for Apple users                                              </p>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                  left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-5 flex items-center
                                  justify-center">

                                  </div>
                              </div>
                          </div>
                      </div>



                  </div>
              </div>
          </div>
      </section>
    );
}

export default Services;