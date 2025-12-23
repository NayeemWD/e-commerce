
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const TopHeader = () => {
    return (
        <div className="bg-[#F8F8FB] py-2 ">

            <div className="flex flex-wrap justify-between items-center container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 ">
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 ct ">
                    <div className="flex items-center gap-2">
                        <MdOutlinePhoneInTalk />
                        <p className="text-[12px] ct ">01753923093</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsWhatsapp />
                        <p className="text-[12px] ">01322840808</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="text-[12px] ct">World's Fastest Online Shopping Destination</p>
                </div>
                <div className="hidden md:flex items-center ct text-[12px] gap-5">
                    <p>Help?</p>
                    <p>Trac Order?</p>
                    <p>English</p>
                    <p>Contact Us</p>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;