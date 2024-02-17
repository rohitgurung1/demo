import React from "react";
import Image from "next/image";
import { Rubik, Nunito } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

const Section4 = () => {
  return (
    <div className="my-10 bg-[url('https://keendigitalservices.com/wp-content/uploads/2021/01/home10_ellipse2.png')] bg-no-repeat bg-center">
      <div className="bg-white p-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-12 rounded-xl shadow-custom text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://keendigitalservices.com/wp-content/uploads/2021/01/home10_service1-active.png"
                    alt="experience"
                    width={76}
                    height={71}
                    className=""
                  />
                  <h3
                    className={`text-2xl font-bold mt-4 mb-2 ${nunito.className}`}
                  >
                    SEO
                  </h3>
                </div>
                <span className={`${rubik.className} text-sm`}>
                  Maecenas elementum sapien in metus placerat finibus. Lorem
                  ipsum dolor sit amet, vix an.
                </span>
              </div>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-custom text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://keendigitalservices.com/wp-content/uploads/2021/01/home10_service2-active.png"
                    alt="experience"
                    width={76}
                    height={71}
                    className=""
                  />
                  <h3
                    className={`text-2xl font-bold mt-4 mb-2 ${nunito.className}`}
                  >
                    Development
                  </h3>
                </div>
                <span className={`${rubik.className} text-sm`}>
                  Maecenas elementum sapien in metus placerat finibus. Lorem
                  ipsum dolor sit amet, vix an.
                </span>
              </div>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-custom text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://keendigitalservices.com/wp-content/uploads/2021/01/home10_service3-active.png"
                    alt="experience"
                    width={76}
                    height={71}
                    className=""
                  />
                  <h3
                    className={`text-2xl font-bold mt-4 mb-2 ${nunito.className}`}
                  >
                    Web Design
                  </h3>
                </div>
                <span className={`${rubik.className} text-sm`}>
                  Maecenas elementum sapien in metus placerat finibus. Lorem
                  ipsum dolor sit amet, vix an.
                </span>
              </div>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-custom text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://keendigitalservices.com/wp-content/uploads/2021/01/home10_service4-active.png"
                    alt="experience"
                    width={76}
                    height={71}
                    className=""
                  />
                  <h3
                    className={`text-2xl font-bold mt-4 mb-2 ${nunito.className}`}
                  >
                    CMS
                  </h3>
                </div>
                <span className={`${rubik.className} text-sm`}>
                  Maecenas elementum sapien in metus placerat finibus. Lorem
                  ipsum dolor sit amet, vix an.
                </span>
              </div>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-custom text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://keendigitalservices.com/wp-content/uploads/2021/01/home10_service5-active.png"
                    alt="experience"
                    width={76}
                    height={71}
                    className=""
                  />
                  <h3
                    className={`text-2xl font-bold mt-4 mb-2 ${nunito.className}`}
                  >
                    Maintenance
                  </h3>
                </div>
                <span className={`${rubik.className} text-sm`}>
                  Maecenas elementum sapien in metus placerat finibus. Lorem
                  ipsum dolor sit amet, vix an.
                </span>
              </div>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-custom text-gray-800 hover:text-white hover:bg-[#3b3663] transition-colors duration-500">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <Image
                    src="https://keendigitalservices.com/wp-content/uploads/2021/01/home10_service6-active.png"
                    alt="experience"
                    width={76}
                    height={71}
                    className=""
                  />
                  <h3
                    className={`text-2xl font-bold mt-4 mb-2 ${nunito.className}`}
                  >
                    Hosting
                  </h3>
                </div>
                <span className={`${rubik.className} text-sm`}>
                  Maecenas elementum sapien in metus placerat finibus. Lorem
                  ipsum dolor sit amet, vix an.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
