import banner from "../../public/img/banner.jpg";
const AboutPage = () => {
  return (
    <section className="lg:max-w-4xl w-auto mx-auto lg:mx-auto min-h-screen">
      <h3 className="italic text-2xl lg:text-4xl text-center text-dark-brown p-5">About Me</h3>
      <div>
        <div >
          <img src={banner} alt="mine " className="p-2" />
        </div>
      </div>
      <h3 className="text-3xl text-center text-dark-brown p-5">My Activities</h3>
      <div className="lg:grid lg:grid-cols-3 gap-3 p-5" >
        <div className="border-2 border-dark-brown p-4 space-y-2 mt-2">
          <h4 className="font-medium underline">Web development</h4>
          <p>
            create a web appication and ui/ux designing and realtime application
            work
          </p>

        </div>
        <div className="border-2 border-dark-brown p-4 space-y-2 mt-2">
          <h4 className="font-medium underline">Stock-Market</h4>
          <p>
            investment ,intraday trading , swing position, cryptocurrency ,forex
          </p>

        </div>
        <div className="border-2 border-dark-brown p-4 space-y-2 mt-2">
          <h4 className="font-medium underline">Digital Marketting</h4>
          <p>
            Google Analytics, SEO Optimization, Email marketing, Get Noticed
            with Social Media
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
