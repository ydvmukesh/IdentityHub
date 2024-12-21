import Image from 'next/image'
import React from 'react'
import { FaAnglesDown } from 'react-icons/fa6'
import { MdOutlineCheck } from 'react-icons/md'
import { featureData } from '@/utils/data'



const FeatureCard = () => {

    return (
        <>
            {featureData.map((feature) => (
                <div key={feature.id} className="feature-card mb-4 lg:mb-6 xl:mb-8 2xl:mb-10">
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                        <div className="w-full lg:w-[55%]">
                            <div className="flex gap-3 xl:gap-4 2xl:gap-5">
                                <div className="relative">
                                    <div className="feature-icon ">
                                        <div
                                            className={`w-7 h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 ${feature.backgroundColor} rounded-full flex items-center justify-center`}
                                            style={{
                                            }}
                                        >
                                            {feature.icon === 'FaAnglesDown' ? (
                                                <FaAnglesDown className="text-white   " />
                                            ) : (
                                                <MdOutlineCheck className="text-white  " />
                                            )}
                                        </div>
                                       
                                    </div>
                                     <div
                                            className={`vertical-line w-[2.4px] block absolute inset-0 mx-auto -z-[1]`}
                                            style={{
                                                background: `linear-gradient(180deg, ${feature.fromGradient} 13.51%, rgba(108, 85, 255, 0.0) 89.18%, rgba(99, 101, 255, 0.0) 89.18%)`,
                                            }}
                                        ></div>
                                     <div
                                            className={`vertical-blur w-[3px] block absolute inset-0 mx-auto -z-[2]`}
                                            style={{
                                                background: `linear-gradient(180deg, ${feature.fromGradient} 13.51%, ${feature.fromGradient},  ${feature.fromGradient}`,
                                                boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.25) inset`, 
                                                filter: `blur(2px)`
                                            }}
                                        ></div>
                                </div>
                                <div className="feature-content flex flex-col gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
                                    <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px]">
                                        {feature.title}
                                    </h3>
                                    <ul className="flex flex-col gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
                                        {feature.content.map((item) => (
                                            <li key={item.id} className="flex gap-2 2xl:gap-3">
                                                <div
                                                    className={`check-icon w-5 xl:w-6 2xl:w-7 h-5 xl:h-6 2xl:h-7 aspect-square  rounded-full ${feature.backgroundColor} bg-opacity-50 flex items-center justify-center`}
                                                >                           <MdOutlineCheck className={`${feature.textColor}`}  style={{color:` ${feature.textColor}`}} />
                                                </div>
                                                <p className="text-base md:text-lg xl:text-xl">
                                                    {item.text}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Right side image */}
                        <div className="w-full lg:w-[40%]">
                            <div className="feature-img">
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.imageAlt}
                                    width={484}
                                    height={355}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
// Usage

export default FeatureCard 