/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rn9obOJWJP1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CardContent, Card } from '@/components/ui/card';

export default function Component() {
  return (
    <div className='relative min-h-[calc(100vh-4rem)]'>
      {' '}
      {/* Adjusted height to account for navbar */}
      {/* Overlay - changed from fixed to absolute positioning */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white'>
        <h2 className='text-4xl font-bold mb-4'>Coming Soon!</h2>
        <p className='text-xl text-center max-w-md'>
          We&apos;re working hard to bring you the best meetups. Stay tuned for
          our launch!
        </p>
      </div>
      {/* Existing content with pointer-events-none */}
      <div className='max-w-screen-xl mx-auto px-6 pointer-events-none'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-6'>
            <h1 className='text-3xl font-bold'>
              Meetups near{' '}
              <span className='bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>
                Montreal, QC
              </span>
              {/* <LocateIcon className='inline' /> */}
            </h1>
            <Button variant='secondary'>See all meetups</Button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card className='w-full'>
              <img
                alt='ConFoo 2024: Happy Hour'
                className='w-full rounded-t-lg'
                height='200'
                src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/10/07/GettyImages-1389882789.jpg.rend.hgtvcom.1280.1280.suffix/1665152791139.jpeg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
              <CardContent>
                <h3 className='text-xl font-semibold leading-10'>
                  চা, সিঙ্গারা আড্ডা{' '}
                </h3>
                <p className='text-sm text-gray-500'>আয়োজন: ইসতিয়াক ভাইয়া </p>
                <div className='flex items-center text-sm my-2'>
                  <CalendarIcon className='mr-2' />
                  WED, FEB 21 - 4:30 PM EST
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <UsersIcon className='mr-2' />
                    61 going
                  </div>
                  <Badge variant='secondary'>$5</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className='w-full'>
              <img
                alt='ConFoo 2024: Happy Hour'
                className='w-full rounded-t-lg'
                height='200'
                src='https://i.pinimg.com/originals/1b/23/24/1b23246e22cdcd32abe75bb35ae72863.jpg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
              <CardContent>
                <h3 className='text-xl font-semibold leading-10'>
                  তেহারি পার্টি
                </h3>
                <p className='text-sm text-gray-500'>আয়োজন: সানজানা আপু </p>
                <div className='flex items-center text-sm my-2'>
                  <CalendarIcon className='mr-2' />
                  WED, MAR 21 - 4:30 PM EST
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <UsersIcon className='mr-2' />
                    21 going
                  </div>
                  <Badge variant='secondary'>Free</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className='w-full'>
              <img
                alt='ConFoo 2024: Happy Hour'
                className='w-full rounded-t-lg'
                height='200'
                src='https://www.tripsavvy.com/thmb/vEHZpX3hLrXBQpWx3gtn6Q7_CBU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/montreal-snow-tubing-inner-tubing-glissade-chambre-air-renault-philippe-getty-566dc33c3df78ce16193885a.jpg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
              <CardContent>
                <h3 className='text-xl font-semibold leading-10'>
                  স্কি এক্টিভিটিজ
                </h3>
                <p className='text-sm text-gray-500'>আয়োজন: ইকতিসাদ ভাইয়া </p>
                <div className='flex items-center text-sm my-2'>
                  <CalendarIcon className='mr-2' />
                  THU, FEB 8 - 4:30 PM EST
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <UsersIcon className='mr-2' />
                    61 going
                  </div>
                  <Badge variant='secondary'>$20</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className='w-full'>
              <img
                alt='ConFoo 2024: Happy Hour'
                className='w-full rounded-t-lg'
                height='200'
                src='https://samitacuriouscook.com/wp-content/uploads/2022/07/imagefood4.jpg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
              <CardContent>
                <h3 className='text-xl font-semibold leading-10'>
                  ভাত ভর্তা পার্টি
                </h3>
                <p className='text-sm text-gray-500'>আয়োজন: মীম আপু </p>
                <div className='flex items-center text-sm my-2'>
                  <CalendarIcon className='mr-2' />
                  WED, APR 21 - 4:30 PM EST
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <UsersIcon className='mr-2' />
                    31 going
                  </div>
                  <Badge variant='secondary'>$10</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
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
      <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
      <line x1='16' x2='16' y1='2' y2='6' />
      <line x1='8' x2='8' y1='2' y2='6' />
      <line x1='3' x2='21' y1='10' y2='10' />
    </svg>
  );
}

function LocateIcon(props: any) {
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
      <line x1='2' x2='5' y1='12' y2='12' />
      <line x1='19' x2='22' y1='12' y2='12' />
      <line x1='12' x2='12' y1='2' y2='5' />
      <line x1='12' x2='12' y1='19' y2='22' />
      <circle cx='12' cy='12' r='7' />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}
