import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id="services" className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/workers.jpeg"
            alt="phone"
            width={440}
            height={1500}
            className="feature-phone shadow-lg ml-20 drop-shadow-sm"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            {/* <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            /> */}
            <h2 className="bold-40 lg:bold-64">Serviços e Produtos</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex p-2 relative w-full flex-1 flex-col items-start border shadow-sm ">
      <img className='object-cover shadow-sm rounded-md' src={icon} alt="map" />
    
      <h2 className="bold-20 z-20 text-slate-600 lg:bold-32  mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 z-20  text-gray-700 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features