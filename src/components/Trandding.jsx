// "use client";

// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';

// const Trandding = () => {
//   const images = [
//     "/assets/dress1.jpg",
//     "/assets/dress2.jpg",
//     "/assets/dree3.jpg",
//     "/assets/dress4.jpg",
//   ];

//   // Animation variants
//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.6, ease: "easeOut" } 
//     },
//     hover: { scale: 1.05 },
//   };

//   return (
//     <div className='container mx-auto mt-10'>
//       <motion.h1
//         className='lg:text-3xl text-2xl font-bold text-center mb-10'
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Trending Now
//       </motion.h1>

//       <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
//         {images.map((src, idx) => (
//           <motion.div
//             key={idx}
//             className='rounded-sm overflow-hidden'
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"           // Animate when in viewport
//             viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of element is visible
//             whileHover="hover"
//           >
//             <Image
//               src={src}
//               width={352}
//               height={450}
//               alt='Image is loading...'
//               className='rounded-sm'
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Trandding;
