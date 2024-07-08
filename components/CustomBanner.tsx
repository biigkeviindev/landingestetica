import React from "react";

const CustomBanner = ({ title, subtitle }: any) => {
    const goWsp = () => {
        window.open('https://wa.me/34622757185', '_blank');
    }
    const call = () => {
        window.location.href = 'tel:+34622757185';
    }

    return (
        <div className="flex justify-center items-center h-[50vh] pt-10 bg-main-banner shadow-image w-full">
            <div>
                <span className="text-center">
                    <ul className="flex justify-center gap-10 text-white mb-3">
                        <li className="banner-little">{subtitle}</li>
                    </ul>
                </span>
                <h2 className="text-[2.7rem] px-4 text-center mb-14 text-white md:text-[50px] font-bold uppercase md:leading-[55px] lg:w-[50rem]">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default CustomBanner;
