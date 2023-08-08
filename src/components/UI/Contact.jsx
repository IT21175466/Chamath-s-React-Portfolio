import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_ayv6p4o', 'template_h37ovp9', form.current, 'h6vZB8P5plby0d2jm')
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                setIsLoading(false);
                window.alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <section id="contact" className="pb-16">
            <div className="container">
                <h2 className="text-headingColor font-[600] text-[2.5rem] mb-8">Get in touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            title="google-maps"
                            className="border-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63215406648!2d79.77380332700568!3d6.921831560924612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1691383447211!5m2!1sen!2slk"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-
                    lg:px-8 py-8 p-10">
                        <form className="w-full" ref={form} onSubmit={sendEmail}>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>


                            <div className="mb-5">
                                <textarea
                                    type="text"
                                    rows={4}
                                    name="message"
                                    placeholder="Write your message"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            {isLoading && (
                                <div className="mt-4 text-gray-600">
                                    Sending...
                                </div>
                            )}
                            {isSuccess && (
                                <div className="mt-4 text-green-600">
                                    Email sent successfully!
                                </div>
                            )}

                            <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
                            hover:bg-headingColor text-center ease-linear duration-150">
                                Send Message
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact