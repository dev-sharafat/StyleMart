// "use client"; // ✅ must be at the very top, exactly like this
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// const Banner = () => {
//   return (
//     // full width
//     <div className="bg-[#F6F6F6] mt-4 ">
//       {/* to set the container widthe */}
//       <div className=" container mx-auto flex lg:flex-row flex-col-reverse  justify-between ">
//         {/* text div */}
//         <motion.div
//           className=" flex justify-center items-center lg:py-10"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="lg:p-16 md:p-10 p-5  bg-[#EEEEEE]  space-y-4 bg-">
//             <h3 className="font-bold lg:text-lg text-sm ">
//               SUMMER SALE <span className="text-red-600">50%</span> OFF
//             </h3>
//             <h1 className="lg:text-3xl text-sm font-bold">
//               Design For Beauty{" "}
//             </h1>
//             <p>You Can Have Anything You Want In Life You Dress For It. </p>
//             <button className="btn btn-outline">All Collection</button>
//           </div>
//         </motion.div>
//         {/* image div */}
//         <div className="lg:w-1/2 w-full  lg:py-10">
//           <Image
//             className="w-full h-full rounded-sm"
//             src={"/assets/banner.jpg"}
//             alt="The banner Image...."
//             width={800}
//             height={600}
//             sizes="(max-width: 768px) 100vw, 
//          (max-width: 1200px) 50vw, 
//          33vw"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
