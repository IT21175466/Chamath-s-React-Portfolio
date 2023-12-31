import React,{useRef, useEffect} from "react";
const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener("scroll" , () => {

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')

            }else {
                headerRef.current.classList.remove('sticky__header')
            }
        })

    }

    useEffect(() => {
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[]);

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

    return (
        <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
        <div className="container">
            <div className="flex items-center justify-between">
                {/* ==LOGO== */}
                <div className="flex items-center gap-[10px]">

                    <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]
                    rounded-full flex items-center justify-center">
                        C

                    </span>
                    <div className="leading-[20px]">
                        <h2 className="text-xl text-smallTextColor font-[700]">Chamath</h2>
                        <p className="text-smallTextColor text-[16px] font-[500]">Personal</p>
                    </div>

                </div>
                {/* == LOGO End == */}

                {/* == MENU Start == */}
                <div className="menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className="flex items-center gap-10">
                        <li><a className="text-smallTextColor font-[500]" href="#about">About</a></li>
                        <li><a className="text-smallTextColor font-[500]" href="#services">Services</a></li>
                        <li><a className="text-smallTextColor font-[500]" href="#portfolio">Portfolio</a></li>
                        <li><a className="text-smallTextColor font-[500]" href="#contact">Contact</a></li>
                    </ul>
                </div>


                {/* == MENU Right == */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-smallTextColor font-[400] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[400] ease-in duration-700">
                        <a className="ri-send-plane-line" href="#contact">Let's Talk</a>
                    </button>

                    <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
                        <i className="ri-menu-line"></i>
                    </span>

                </div>

                {/* == MENU End == */}

            </div>

        </div>
        </header>
    );
}

export default Header;
