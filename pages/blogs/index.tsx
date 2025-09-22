//
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Component() {
  return (
    <div className='relative min-h-[calc(100vh-4rem)]'>
      {' '}
      {/* Adjusted height to account for navbar */}
      {/* Overlay - changed from fixed to absolute positioning */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-white'>
        <h2 className='text-4xl font-bold mb-4'>Coming Soon!</h2>
        <p className='text-xl text-center max-w-md'>
          We&apos;re working hard to bring you the most relevant information.
          Stay tuned for our launch!
        </p>
      </div>
      {/* Existing content with pointer-events-none */}
      <div className='max-w-screen-xl mx-auto px-6 pointer-events-none'>
        <div className=' '>
          <div className='max-w-7xl mx-auto px-6 py-12'>
            <h2 className='text-4xl font-bold mb-8'>Latest posts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Card className=''>
                <CardHeader>
                  <img
                    alt='Win a dev workstation'
                    className='rounded-t-md'
                    height='200'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0a/SIN_card.jpg'
                    style={{
                      aspectRatio: '350/200',
                      objectFit: 'cover',
                    }}
                    width='350'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='font-bold text-xl mb-2'>
                    কানাডা ল্যান্ড করার সাথে সাথে স্টুডেন্টদের যেই ৪ টি কাজ করা
                    উচিত
                  </h3>
                  {/* <p className='text-sm mb-4'>
                Join the daily.dev referral campaign and get a chance to win an
                exclusive limited edition
              </p> */}
                  <div className='flex items-center space-x-3  p-2 rounded-lg'>
                    <Avatar>
                      <AvatarImage
                        alt='Nimrod Kramer'
                        src='https://media.licdn.com/dms/image/C5603AQFGhJdtAnmrBg/profile-displayphoto-shrink_200_200/0/1661350294379?e=1712793600&v=beta&t=IzhCSTRHKs01BRLSlL0xOTRyykTyvHcmY6TKYi6P8-Q'
                      />
                      <AvatarFallback>NK</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold '>
                        Ihan Howlader
                      </span>
                      <span className='text-xs text-gray-400'>
                        January 21, 2024
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className=''>
                <CardHeader>
                  <img
                    alt='Win a dev workstation'
                    className='rounded-t-md'
                    height='200'
                    src='https://www.investopedia.com/thmb/OQxvtmsJwBCy6kVw86E-ooDRVqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rent_house_73089751-5bfc333346e0fb002602ddbe.jpg'
                    style={{
                      aspectRatio: '350/200',
                      objectFit: 'cover',
                    }}
                    width='350'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='font-bold text-xl mb-2'>
                    How to rent your first home and the documents to look out
                    for
                  </h3>
                  {/* <p className='text-sm mb-4'>
                Join the daily.dev referral campaign and get a chance to win an
                exclusive limited edition
              </p> */}
                  <div className='flex items-center space-x-3 p-2 rounded-lg'>
                    <Avatar>
                      <AvatarImage
                        alt='Nimrod Kramer'
                        src='https://media.licdn.com/dms/image/C5603AQFGhJdtAnmrBg/profile-displayphoto-shrink_200_200/0/1661350294379?e=1712793600&v=beta&t=IzhCSTRHKs01BRLSlL0xOTRyykTyvHcmY6TKYi6P8-Q'
                      />
                      <AvatarFallback>NK</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold '>
                        Ihan Howlader
                      </span>
                      <span className='text-xs text-gray-400'>
                        January 21, 2024
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className=''>
                <CardHeader>
                  <img
                    alt='Win a dev workstation'
                    className='rounded-t-md'
                    height='200'
                    src='https://www.moncallcenter.ma/images/300/ca-4trnpepf8vcg508d8rttuyc22yvjdi21072022051420.jpg'
                    style={{
                      aspectRatio: '350/200',
                      objectFit: 'cover',
                    }}
                    width='350'
                  />
                </CardHeader>
                <CardContent>
                  <h3 className='font-bold text-xl mb-2'>
                    Interview prep guide for IO Solutions
                  </h3>
                  {/* <p className='text-sm mb-4'>
                Join the daily.dev referral campaign and get a chance to win an
                exclusive limited edition
              </p> */}
                  <div className='flex items-center space-x-3  p-2 rounded-lg'>
                    <Avatar>
                      <AvatarImage
                        alt='Nimrod Kramer'
                        src='https://media.licdn.com/dms/image/C5603AQFGhJdtAnmrBg/profile-displayphoto-shrink_200_200/0/1661350294379?e=1712793600&v=beta&t=IzhCSTRHKs01BRLSlL0xOTRyykTyvHcmY6TKYi6P8-Q'
                      />
                      <AvatarFallback>NK</AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col'>
                      <span className='text-sm font-semibold '>
                        Ihan Howlader
                      </span>
                      <span className='text-xs text-gray-400'>
                        January 21, 2024
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
