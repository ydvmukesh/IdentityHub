import Button from "@/components/common/Button";
import Title from "@/components/common/Title";
import Banner from "@/components/home/Banner";
import CallToAction from "@/components/home/CallToAction";
import Service from "@/components/home/Service";


export default function Home() {
  return (
    <>
      {/* // banner */}
     <div className="banner-bg">
      <Banner />
      {/* // service  */}
      <Service />
      </div>
      {/* call to action */}
      <CallToAction />
    </>

  );
}
