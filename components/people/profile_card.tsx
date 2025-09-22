/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YCXjMGmJSp5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { BackgroundGradient } from '../ui/background-gradient';

interface ProfileCardProps {
  name: string;
  img: string;
  title: string;
  followers: number;
  following: number;
}

export default function ProfileCard({
  name,
  img,
  title,
  followers,
  following,
}: ProfileCardProps) {
  return (
    // <BackgroundGradient className='rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900'>
    <div className='flex items-center justify-center'>
      <div className='rounded-lg shadow-lg w-64 bg-white'>
        <div className='h-24 bg-blue-600 rounded-t-lg' />
        <img
          alt='User avatar'
          className='rounded-full -mt-12 border-4 border-white mx-auto'
          height='100'
          src={img}
          style={{
            aspectRatio: '100/100',
            objectFit: 'cover',
          }}
          width='100'
        />
        <div className='text-center mt-2'>
          <h2 className='text-lg font-semibold'>{name}</h2>
          <p className='text-gray-500'>{title}</p>
        </div>
        <div className='flex justify-around my-4'>
          <div className='text-center'>
            <h3 className='font-semibold text-lg'>{followers}</h3>
            <p className='text-gray-500'>Followers</p>
          </div>
          <div className='text-center'>
            <h3 className='font-semibold text-lg'>{following}</h3>
            <p className='text-gray-500'>Following</p>
          </div>
        </div>
        <div className='px-6 py-4'>
          <Button className='w-full bg-blue-600 text-white rounded-lg'>
            Follow
          </Button>
        </div>
      </div>
    </div>
    // </BackgroundGradient>
  );
}
