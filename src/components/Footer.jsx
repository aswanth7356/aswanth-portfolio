export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/A Logo2.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/A Logo2.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:aswanth1392@gmail.com" className="hover:underline transition-all duration-300" target="_blank">aswanth1392@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                {/* <p>© {new Date().getFullYear()} • Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a> • All rights reserved.</p> */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    © 2026 Aswanth P. All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="tel:+917356644734" target="_blank" className="hover:underline transition-all duration-300">Phone</a></li>
                    <li><a href="https://www.linkedin.com/in/aswanth-clt/" target="_blank" className="hover:underline transition-all duration-300">LinkedIn</a></li>
                    <li><a href="https://wa.me/+917356644734" target="_blank" className="hover:underline transition-all duration-300" >Whatsapp</a></li>
                </ul>
            </div>
        </div>
    )
}