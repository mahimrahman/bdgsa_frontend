import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

//supabase
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

//ui
import { Menu } from '@headlessui/react';

//components
import LoginButton from '@/components/auth/LoginLogOutButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/people', label: 'People' },
    { href: '/jobs', label: 'Job' },
    { href: '/rooms', label: 'Room' },
    { href: '/events', label: 'Event' },
    { href: '/meetups', label: 'Meetup' },
    { href: '/blogs', label: 'Blog' },
  ];

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push('/'); // Redirect to home page after logout
  };

  return (
    <nav className='border-b border-gray-200 dark:border-gray-700'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center text-xl font-bold'>
          <MountainIcon className='h-6 w-6 mr-2' />
          <span>Logo</span>
        </Link>

        {/* Mobile Menu Button */}
        {user && (
          <button
            className='lg:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <MenuIcon className='h-6 w-6' />
          </button>
        )}

        {/* Navigation Links - Only visible when authenticated */}
        {user && (
          <nav
            className={`${
              isMenuOpen
                ? 'block absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg'
                : 'hidden'
            } lg:static lg:flex lg:shadow-none items-center gap-6 flex-1 text-sm font-medium justify-center px-4 py-2 lg:py-0`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className='block py-2 lg:py-0 hover:text-gray-600 dark:hover:text-gray-300'
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Auth Section */}
        {!user ? (
          <div className='flex gap-4'>
            <LoginButton />
            <Link
              href='/signup'
              className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900'
            >
              Join Now
            </Link>
          </div>
        ) : (
          <Menu as='div' className='relative'>
            <Menu.Button as='button' className='flex items-center'>
              <Avatar>
                <AvatarImage
                  alt={user.email || 'User'}
                  src={user.user_metadata?.avatar_url}
                />
                <AvatarFallback>
                  {user.email?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
            </Menu.Button>
            <Menu.Items className='absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/profile'
                    className={`block px-4 py-2 ${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleSignOut}
                    className={`block w-full text-left px-4 py-2 ${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    }`}
                  >
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        )}
      </div>
    </nav>
  );
}

function MountainIcon(props: any) {
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
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
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
      <line x1='3' y1='12' x2='21' y2='12' />
      <line x1='3' y1='6' x2='21' y2='6' />
      <line x1='3' y1='18' x2='21' y2='18' />
    </svg>
  );
}
