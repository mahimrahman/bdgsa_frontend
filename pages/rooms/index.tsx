/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f1S0IjTcsxP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { AvatarImage, Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function Component() {
  return (
    <div className='relative min-h-[calc(100vh-4rem)]'>
      {' '}
      {/* Adjusted height to account for navbar */}
      {/* Overlay - changed from fixed to absolute positioning */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white'>
        <h2 className='text-4xl font-bold mb-4'>Coming Soon!</h2>
        <p className='text-xl text-center max-w-md'>
          We&apos;re working hard to bring you the best housing options. Stay
          tuned for our launch!
        </p>
      </div>
      {/* Existing content with pointer-events-none */}
      <div className='max-w-screen-xl mx-auto px-6 pointer-events-none'>
        <div key='1' className='max-w-screen-xl mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center space-x-4'>
              <HotelIcon className='text-red-500 h-8 w-8' />
              <div className='space-x-2'>
                <Button variant='ghost'>Stays</Button>
                <Button variant='ghost'>Experiences</Button>
                <Button variant='ghost'>Online Experiences</Button>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <Button variant='ghost'>Rent your home</Button>
              <MenuIcon className='h-6 w-6' />
              <Avatar>
                <AvatarImage
                  alt='User avatar'
                  src='/placeholder.svg?height=32&width=32'
                />
              </Avatar>
            </div>
          </div>
          <div className='flex space-x-4 overflow-x-auto py-4'>
            <Button variant='outline' className='rounded-full'>
              Downtown
            </Button>
            <Button variant='outline' className='rounded-full'>
              CDN
            </Button>
            <Button variant='outline' className='rounded-full'>
              Plamondon
            </Button>
            <Button variant='outline' className='rounded-full'>
              Charlevoix
            </Button>
            <Button variant='outline' className='rounded-full'>
              Lionel groulx{' '}
            </Button>
            <Button variant='outline' className='rounded-full'>
              La Salle
            </Button>
            <Button variant='outline' className='rounded-full'>
              De l&apos;eglise
            </Button>
            <Button variant='outline' className='rounded-full'>
              Park
            </Button>
            <Button variant='outline' className='rounded-full'>
              Park Ext.
            </Button>
            <Button variant='outline' className='rounded-full'>
              Hochelaga
            </Button>
            <Button variant='outline' className='rounded-full'>
              Jean Talon
            </Button>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
            {/* card 1 */}
            <div className='space-y-2 shadow-lg border border-gray-200 rounded-lg p-4'>
              <img
                alt='Rental property'
                className='w-full h-auto rounded-lg'
                height='300'
                src='https://images.unsplash.com/photo-1601760561233-ce085e1e4a53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                  padding: 0,
                }}
                width='400'
              />
              <div className='flex justify-between items-center'>
                <Badge variant='secondary'>Guest favourite</Badge>
                <HeartIcon className='text-gray-400 h-6 w-6' />
              </div>
              <h3 className='font-semibold'>CDN, Montreal</h3>
              <div className='flex items-center space-x-1'>
                <StarIcon className='text-yellow-400 h-4 w-4' />
                <span className='text-sm font-medium'>5.0</span>
              </div>
              <p className='text-sm text-gray-500'>8 km away from campus</p>
              <p className='text-sm font-medium'>July</p>
              <p className='font-bold'>$550 CAD</p>
            </div>
            {/* card 2 */}
            <div className='space-y-2 shadow-lg border border-gray-200 rounded-lg p-4'>
              <img
                alt='Rental property'
                className='w-full h-auto rounded-lg'
                height='300'
                src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D'
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                  padding: 0,
                }}
                width='400'
              />
              <div className='flex justify-between items-center'>
                <Badge variant='secondary'>Guest favourite</Badge>
                <HeartIcon className='text-gray-400 h-6 w-6' />
              </div>
              <h3 className='font-semibold'>Downtown Montreal</h3>
              <div className='flex items-center space-x-1'>
                <StarIcon className='text-yellow-400 h-4 w-4' />
                <span className='text-sm font-medium'>4.8</span>
              </div>
              <p className='text-sm text-gray-500'>0.5 km away from campus</p>
              <p className='text-sm font-medium'>March</p>
              <p className='font-bold'>$450 CAD night</p>
            </div>
            {/* card 3 */}
            <div className='space-y-2 shadow-lg border border-gray-200 rounded-lg p-4'>
              <img
                alt='Rental property'
                className='w-full h-auto rounded-lg'
                height='300'
                src='https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb218ZW58MHx8MHx8fDA%3D'
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                  padding: 0,
                }}
                width='400'
              />
              <div className='flex justify-between items-center'>
                <Badge variant='secondary'>Guest favourite</Badge>
                <HeartIcon className='text-gray-400 h-6 w-6' />
              </div>
              <h3 className='font-semibold'>Park, Montreal</h3>
              <div className='flex items-center space-x-1'>
                <StarIcon className='text-yellow-400 h-4 w-4' />
                <span className='text-sm font-medium'>4.7</span>
              </div>
              <p className='text-sm text-gray-500'>8 km away from campus</p>
              <p className='text-sm font-medium'>April</p>
              <p className='font-bold'>$525 CAD night</p>
            </div>
            {/* card 4 */}
            <div className='space-y-2 shadow-lg border border-gray-200 rounded-lg p-4'>
              <img
                alt='Rental property'
                className='w-full h-auto rounded-lg'
                height='300'
                src='https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '400/300',
                  objectFit: 'cover',
                  padding: 0,
                }}
                width='400'
              />
              <div className='flex justify-between items-center'>
                <Badge variant='secondary'>Guest favourite</Badge>
                <HeartIcon className='text-gray-400 h-6 w-6' />
              </div>
              <h3 className='font-semibold'>Plamondon, Montreal</h3>
              <div className='flex items-center space-x-1'>
                <StarIcon className='text-yellow-400 h-4 w-4' />
                <span className='text-sm font-medium'>4.5</span>
              </div>
              <p className='text-sm text-gray-500'>6 km away from campus</p>
              <p className='text-sm font-medium'>May</p>
              <p className='font-bold'>$475 CAD night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props: any) {
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
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
    </svg>
  );
}

function HotelIcon(props: any) {
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
      <path d='M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z' />
      <path d='m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16' />
      <path d='M8 7h.01' />
      <path d='M16 7h.01' />
      <path d='M12 7h.01' />
      <path d='M12 11h.01' />
      <path d='M16 11h.01' />
      <path d='M8 11h.01' />
      <path d='M10 22v-6.5m4 0V22' />
    </svg>
  );
}

function MenuIcon(props: any) {
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
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
