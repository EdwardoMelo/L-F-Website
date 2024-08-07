import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div style={{background: `url('${backgroundImage}')`,
     backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
        backgroundSize: 'cover',
         margin: 'auto',
          }}
      className={`h-full w-[90%] drop-shadow-md rounded-5xl border-2 z-20`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1 z-30">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {/* {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))} */}
        </span>
        {/* <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p> */}
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="/factory.jpg"
          title="Fábrica"
          subtitle=""
          peopleJoined="50+ Joined"
        />
        {/* <CampSite 
          backgroundImage="/sparkingbold.jpg"
          title="Produção"
          subtitle="Processo bem definido"
          peopleJoined="50+ Joined"
        /> */}
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 z-30 shadow-lg p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Quer Conhecer nossa Unidade?</strong> Agende uma visita!
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
             Tratamos nossos clientes e colaboradores com cordialidade a fim de disseminar os bons valores que são refletidos em nosso trabalho!
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp