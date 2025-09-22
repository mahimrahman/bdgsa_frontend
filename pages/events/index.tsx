import Link from 'next/link';
import { CardContent, CardFooter, Card } from '@/components/ui/card';

export default function Component() {
  return (
    <div className='relative min-h-[calc(100vh-4rem)]'>
      {' '}
      {/* Adjusted height to account for navbar */}
      {/* Overlay - changed from fixed to absolute positioning */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white'>
        <h2 className='text-4xl font-bold mb-4'>Coming Soon!</h2>
        <p className='text-xl text-center max-w-md'>
          We&apos;re working hard to bring you the best Bangladeshi events. Stay
          tuned for our launch!
        </p>
      </div>
      {/* Existing content with pointer-events-none */}
      <div className='max-w-screen-xl mx-auto px-6 pointer-events-none'>
        <div>
          <div className='w-full py-12'>
            <div className='container grid max-w-6xl items-start gap-6 px-4 md:px-6 md:grid-cols-2 lg:gap-10'>
              <div className='space-y-4'>
                {/* <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Events
            </h1> */}
                {/* <p className='text-gray-500 dark:text-gray-400'>
              Stay up to date with our latest events. Join us for meetups,
              workshops, and webinars.
            </p> */}
              </div>
              <div className='flex items-start justify-end gap-4 md:gap-6'>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white text-sm shadow-sm px-4 text-gray-900 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                  href='#'
                >
                  Upcoming
                </Link>
                <Link
                  className='inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                  href='#'
                >
                  Past Events
                </Link>
              </div>
            </div>
          </div>
          <div key='1' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              Popular in Montreal
            </h1>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* card 1 */}
              <Card className='w-full'>
                <img
                  alt='Grandioses éclipses totales de Soleil'
                  className='h-60 w-full object-cover'
                  height='200'
                  src='https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/shahid-minar-20210131162234.jpg'
                  style={{
                    aspectRatio: '350/200',
                    objectFit: 'cover',
                  }}
                  width='350'
                />
                <CardContent>
                  <h2 className='text-lg font-semibold mt-4 leading-8'>
                    আন্তর্জাতিক মাতৃভাষা দিবস: একুশে ফেব্রুয়ারি
                  </h2>
                  <p className='text-sm font-semibold text-red-500'>
                    21st february, Wednesday at 1:30 PM
                  </p>
                  <p className='text-sm font-semibold text-gray-500'>CUBSC</p>

                  <p className='text-sm font-medium text-gray-900'>From $15</p>
                  <p className='text-sm text-gray-500 flex items-center'>
                    <MapIcon className='h-4 w-4 mr-2 -mt-1' />H Building
                    Concordia University
                  </p>
                  <p className='flex items-center text-sm text-gray-500'>
                    <UserIcon className='h-4 w-4 mr-2' />
                    151 RSVP
                  </p>
                </CardContent>
              </Card>
              {/* card 2 */}
              <Card className='w-full'>
                <img
                  alt='Grandioses éclipses totales de Soleil'
                  className='h-60 w-full object-cover'
                  height='200'
                  src='https://bengali.indianexpress.com/wp-content/uploads/2019/04/shubhanababarsha-2.jpg'
                  style={{
                    aspectRatio: '350/200',
                    objectFit: 'cover',
                  }}
                  width='350'
                />
                <CardContent>
                  <h2 className='text-lg font-semibold mt-4'>
                    বাংলা নববর্ষ পহেলা বৈশাখ
                  </h2>
                  <p className='text-sm font-semibold text-red-500 leading-8'>
                    April 14, Sunday at 1:30 PM
                  </p>
                  <p className='text-sm font-semibold text-gray-500'>CUBSC</p>

                  <p className='text-sm font-medium text-gray-900'>From $12</p>
                  <p className='text-sm text-gray-500 flex items-center'>
                    <MapIcon className='h-4 w-4 mr-2 -mt-1' />H Building
                    Concordia University
                  </p>
                  <p className='flex items-center text-sm text-gray-500'>
                    <UserIcon className='h-4 w-4 mr-2' />
                    120 RSVP
                  </p>
                </CardContent>
              </Card>
              {/* card 3 */}
              <Card className='w-full'>
                <img
                  alt='Grandioses éclipses totales de Soleil'
                  className='h-60 w-full object-cover'
                  height='200'
                  src='https://media.npr.org/assets/img/2011/08/18/party540_wide-f50503fe39909a8f38eeb30bdb7f4aa9c761c12f-s1400-c100.jpg'
                  style={{
                    aspectRatio: '350/200',
                    objectFit: 'cover',
                  }}
                  width='350'
                />
                <CardContent>
                  <h2 className='text-lg font-semibold mt-4 leading-8'>
                    ঈদ-উল-ফিতর ১৪৪৫ হিজরী
                  </h2>
                  <p className='text-sm font-semibold text-red-500'>
                    April 9, Wednesday at 7:30 AM
                  </p>
                  <p className='text-sm font-semibold text-gray-500'>CUBSC</p>

                  <p className='text-sm font-medium text-gray-900'>From $15</p>
                  <p className='text-sm text-gray-500 flex items-center'>
                    <MapIcon className='h-4 w-4 mr-2 -mt-1' />H Building
                    Concordia University
                  </p>
                  <p className='flex items-center text-sm text-gray-500'>
                    <UserIcon className='h-4 w-4 mr-2' />
                    51 RSVP
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21' />
      <line x1='9' x2='9' y1='3' y2='18' />
      <line x1='15' x2='15' y1='6' y2='21' />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  );
}
