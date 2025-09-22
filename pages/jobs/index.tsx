import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';

export default function Component() {
  return (
    <div className='relative min-h-[calc(100vh-4rem)]'>
      {' '}
      {/* Adjusted height to account for navbar */}
      {/* Overlay - changed from fixed to absolute positioning */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white'>
        <h2 className='text-4xl font-bold mb-4'>Coming Soon!</h2>
        <p className='text-xl text-center max-w-md'>
          We&apos;re working hard to bring you the best job opportunities. Stay
          tuned for our launch!
        </p>
      </div>
      {/* Existing content with pointer-events-none */}
      <div className='max-w-screen-xl mx-auto px-6 pointer-events-none'>
        <div className='max-w-screen-xl mx-auto px-6'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage
                  alt='Company Logo'
                  src='/placeholder.svg?height=40&width=40'
                />
                <AvatarFallback>OK</AvatarFallback>
              </Avatar>
              <MicroscopeIcon className='text-gray-600' />
              <Select>
                <SelectTrigger id='search-category'>
                  <SelectValue placeholder='Search' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='all'>All Categories</SelectItem>
                  <SelectItem value='jobs'>Jobs</SelectItem>
                  <SelectItem value='companies'>Companies</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id='location'>
                  <SelectValue placeholder='Location' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='canada'>Canada</SelectItem>
                  <SelectItem value='usa'>USA</SelectItem>
                  <SelectItem value='uk'>UK</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id='salary'>
                  <SelectValue placeholder='Salary' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='50k'>50k+</SelectItem>
                  <SelectItem value='70k'>70k+</SelectItem>
                  <SelectItem value='100k'>100k+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id='benefits'>
                  <SelectValue placeholder='Benefits' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='health'>Health Insurance</SelectItem>
                  <SelectItem value='retirement'>Retirement Plan</SelectItem>
                  <SelectItem value='vacation'>Paid Vacation</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id='sort'>
                  <SelectValue placeholder='Sort by' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='date'>Date Posted</SelectItem>
                  <SelectItem value='relevance'>Relevance</SelectItem>
                  <SelectItem value='salary'>Salary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className='bg-red-500 text-white'>Post a remote job</Button>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center space-x-2'>
              <Badge variant='secondary'>Canada</Badge>
              <XIcon className='text-red-500' />
              <span className='text-red-500 underline'>Clear 120 results</span>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* card 1 */}
            <Card className='w-full'>
              <CardHeader>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage
                      alt='Company Logo'
                      src='/placeholder.svg?height=40&width=40'
                    />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Senior Blockchain Security Engineer</CardTitle>
                    <CardDescription>Pagoda</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-2'>
                    <Badge variant='secondary'>North America</Badge>
                    <Badge variant='secondary'>USA</Badge>
                    <Badge>$50k - $80k*</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Badge variant='default'>Security</Badge>
                    <Badge variant='default'>Embedded</Badge>
                    <Badge variant='default'>System</Badge>
                  </div>
                  <span className='text-gray-500'>1d</span>
                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <UserIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-500'>Uploaded by Shehriar</span>
                </div>
                <Button variant='destructive'>Apply</Button>
              </CardFooter>
            </Card>
            {/* card 2 */}
            <Card className='w-full'>
              <CardHeader>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage
                      alt='Company Logo'
                      src='/placeholder.svg?height=40&width=40'
                    />
                    <AvatarFallback>I</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Full Stack Engineer</CardTitle>
                    <CardDescription>Intercom</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-2'>
                    <Badge variant='secondary'>North America</Badge>
                    <Badge variant='secondary'>Canada</Badge>
                    <Badge>$60k - $90k*</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Badge variant='default'>React</Badge>
                    <Badge variant='default'>Node</Badge>
                    <Badge variant='default'>AWS</Badge>
                  </div>
                  <span className='text-gray-500'>2d</span>
                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <UserIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-500'>Uploaded by Nafis</span>
                </div>
                <Button variant='destructive'>Apply</Button>
              </CardFooter>
            </Card>
            {/* card 3 */}
            <Card className='w-full'>
              <CardHeader>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage
                      alt='Company Logo'
                      src='/placeholder.svg?height=40&width=40'
                    />
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Backend Engineer</CardTitle>
                    <CardDescription>TD Bank</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-2'>
                    <Badge variant='secondary'>North America</Badge>
                    <Badge variant='secondary'>Canada</Badge>
                    <Badge>$70k - $90k*</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Badge variant='default'>Java</Badge>
                    <Badge variant='default'>SQL</Badge>
                    <Badge variant='default'>Azure</Badge>
                  </div>
                  <span className='text-gray-500'>5d</span>
                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <UserIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-500'>Uploaded by Itmam</span>
                </div>
                <Button variant='destructive'>Apply</Button>
              </CardFooter>
            </Card>
            {/* card 4 */}
            <Card className='w-full'>
              <CardHeader>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage
                      alt='Company Logo'
                      src='/placeholder.svg?height=40&width=40'
                    />
                    <AvatarFallback>K</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>DevSecOps Engineer</CardTitle>
                    <CardDescription>KOHO</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-2'>
                    <Badge variant='secondary'>North America</Badge>
                    <Badge variant='secondary'>Canada</Badge>
                    <Badge>$120k - $130k*</Badge>
                  </div>
                  <div className='flex space-x-2'>
                    <Badge variant='default'>Cloud</Badge>
                    <Badge variant='default'>Security</Badge>
                    <Badge variant='default'>Kubernetes</Badge>
                  </div>
                  <span className='text-gray-500'>1h</span>
                </div>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <UserIcon className='h-5 w-5 text-gray-500' />
                  <span className='text-gray-500'>Uploaded by Umar Chy</span>
                </div>
                <Button variant='destructive'>Apply</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function MicroscopeIcon(props: any) {
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
      <path d='M6 18h8' />
      <path d='M3 22h18' />
      <path d='M14 22a7 7 0 1 0 0-14h-1' />
      <path d='M9 14h2' />
      <path d='M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z' />
      <path d='M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3' />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
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
