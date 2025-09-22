/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mDeFxgoSwOV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';

export default function Component() {
  return (
    <div
      key='1'
      className='flex flex-col min-h-screen bg-gradient-to-br from-blue-500 to-indigo-500'
    >
      <header className='flex items-center h-16 px-4 border-b bg-[#ffffffaa] backdrop-blur-lg dark:bg-[#000000aa] dark:border-gray-800 md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6'>
          <Link
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
            href='#'
          >
            <HomeIcon className='w-6 h-6' />
            <span className='sr-only'>Home</span>
          </Link>
          <Link className='font-bold' href='#'>
            Listings
          </Link>
          <Link className='text-gray-500 dark:text-gray-400' href='#'>
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <form className='flex flex-col gap-4 md:flex-row md:items-end md:gap-8'>
          <Input
            className='flex-1'
            placeholder='Search properties...'
            type='search'
          />
          <Select defaultValue='type'>
            <SelectTrigger className='w-40 md:w-48'>
              <SelectValue placeholder='Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='apartment'>Apartment</SelectItem>
              <SelectItem value='house'>House</SelectItem>
              <SelectItem value='condo'>Condo</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue='location'>
            <SelectTrigger className='w-40 md:w-48'>
              <SelectValue placeholder='Location' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='san-francisco'>San Francisco</SelectItem>
              <SelectItem value='new-york'>New York</SelectItem>
              <SelectItem value='los-angeles'>Los Angeles</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue='price'>
            <SelectTrigger className='w-40 md:w-48'>
              <SelectValue placeholder='Price Range' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0-500'>$0 - $500</SelectItem>
              <SelectItem value='500-1000'>$500 - $1000</SelectItem>
              <SelectItem value='1000+'>$1000+</SelectItem>
            </SelectContent>
          </Select>
          <Button>Search</Button>
        </form>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='bg-[#ffffffaa] backdrop-blur-lg dark:bg-[#000000aa]'>
            <img
              alt='Property 1'
              className='object-cover w-full h-64'
              height={400}
              src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                aspectRatio: '500/400',
                objectFit: 'cover',
              }}
              width={500}
            />
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Cozy 2 Bedroom Apartment
              </CardTitle>
              <div className='text-gray-500 dark:text-gray-400'>$1,200/mo</div>
            </CardHeader>
            <CardContent>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                San Francisco, CA
              </p>
            </CardContent>
            <CardFooter>
              <Button className='w-full' variant='outline'>
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className='bg-[#ffffffaa] backdrop-blur-lg dark:bg-[#000000aa]'>
            <img
              alt='Property 2'
              className='object-cover w-full h-64'
              height={400}
              src='https://images.unsplash.com/photo-1601760561233-ce085e1e4a53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                aspectRatio: '500/400',
                objectFit: 'cover',
              }}
              width={500}
            />
            <div className='absolute top-0 left-0 h-full w-full flex items-center justify-between'>
              <Button className='rounded-full' size='icon' variant='ghost'>
                <ArrowLeftIcon className='h-6 w-6 rounded-full' />
              </Button>
              <Button className='rounded-full' size='icon' variant='ghost'>
                <ArrowRightIcon className='h-6 w-6' />
              </Button>
            </div>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Modern Condo with Ocean View
              </CardTitle>
              <div className='text-gray-500 dark:text-gray-400'>$2,500/mo</div>
            </CardHeader>
            <CardContent>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                Los Angeles, CA
              </p>
            </CardContent>
            <CardFooter>
              <Button className='w-full' variant='outline'>
                View Details
              </Button>
            </CardFooter>
          </Card>
          <Card className='bg-[#ffffffaa] backdrop-blur-lg dark:bg-[#000000aa]'>
            <img
              alt='Property 3'
              className='object-cover w-full h-64'
              height={400}
              src='https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              style={{
                aspectRatio: '500/400',
                objectFit: 'cover',
              }}
              width={500}
            />
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Spacious 3 Bedroom House
              </CardTitle>
              <div className='text-gray-500 dark:text-gray-400'>$1,800/mo</div>
            </CardHeader>
            <CardContent>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                New York, NY
              </p>
            </CardContent>
            <CardFooter>
              <Button className='w-full' variant='outline'>
                View Details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
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
      <path d='m12 19-7-7 7-7' />
      <path d='M19 12H5' />
    </svg>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d='M5 12h14' />
      <path d='m12 5 7 7-7 7' />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}
