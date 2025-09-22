import ProfileCard from '@/components/people/profile_card';
import { executiveBody } from '@/constants/people.js';

// export default function PeopleBoard() {
//   return (
//     <div className=''>
//       <div className='bg-gradient-to-r from-slate-500 to-slate-800'>
//         <div className='flex flex-col items-center space-y-4 text-center mb-24 p-12'>
//           <div className='space-y-2 '>
//             <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'>
//               Meet the humans of BDGS
//             </h1>
//             <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
//               Thank you for visiting our community. We invite you to explore our
//               Kampas and discover the value we can bring to our Bangladeshi
//               Community.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-5 gap-4 mx-12 '>
//         {executiveBody.map(({ id, name, img, title, followers, following }) => (
//           <ProfileCard
//             key={id}
//             name={name}
//             title={title}
//             img={img}
//             followers={followers}
//             following={following}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// bg-gradient-to-r from-fuchsia-500 to-cyan-500
// bg-gradient-to-r from-cyan-500 to-blue-500

export default function PeopleBoard() {
  return (
    <div>
      {/* Hero Banner with improved styling */}
      <div className='bg-gradient-to-r from-slate-800 to-slate-950 relative overflow-hidden'>
        <div className='absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]'></div>
        <div className='relative flex flex-col items-center space-y-4 text-center py-24 px-6'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none'>
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Meet Our Leadership
            </span>
          </h1>
          <p className='mx-auto max-w-[700px] text-lg text-slate-300 md:text-xl'>
            Meet the dedicated individuals who lead and inspire our Bangladeshi
            community. Together, we&apos;re building bridges and creating
            opportunities.
          </p>
        </div>
      </div>

      {/* Profile Cards Grid */}
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {executiveBody.map(
            ({ id, name, img, title, followers, following }) => (
              <ProfileCard
                key={id}
                name={name}
                title={title}
                img={img}
                followers={followers}
                following={following}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
