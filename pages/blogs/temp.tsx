import { CardHeader, CardContent, Card } from '@/components/ui/card';

export default function Component() {
  return (
    <div className='bg-[#1e1e2d] text-white'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <h2 className='text-4xl font-bold mb-8'>Latest posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card className='bg-[#2d2d3a]'>
            <CardHeader>
              <img
                alt='Win a dev workstation'
                className='rounded-t-md'
                height='200'
                src='/placeholder.svg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
            </CardHeader>
            <CardContent>
              <p className='text-sm text-[#a3a3ff] mb-2'>{`Made with love ❤\u{fe0f} by daily.dev`}</p>
              <h3 className='font-bold text-xl mb-2'>
                Giveaway Campaign terms and conditions
              </h3>
              <p className='text-sm mb-4'>
                Join the daily.dev referral campaign and get a chance to win an
                exclusive limited edition
              </p>
              <p className='text-sm text-[#a3a3ff]'>daily.dev</p>
              <p className='text-sm'>June 6, 2023</p>
            </CardContent>
          </Card>
          <Card className='bg-[#2d2d3a]'>
            <CardHeader>
              <img
                alt='Give Your Eyes a Break! Introducing daily.dev Paper Edition'
                className='rounded-t-md'
                height='200'
                src='/placeholder.svg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
            </CardHeader>
            <CardContent>
              <h3 className='font-bold text-xl mb-2'>
                Give Your Eyes a Break! Introducing daily.dev Paper Edition
              </h3>
              <p className='text-sm mb-4'>
                Introducing Daily.dev Paper Edition – the perfect solution for
                burnt-out developers
              </p>
              <p className='text-sm text-[#a3a3ff]'>Nimrod Kramer</p>
              <p className='text-sm'>April 1, 2023</p>
            </CardContent>
          </Card>
          <Card className='bg-[#2d2d3a]'>
            <CardHeader>
              <img
                alt='We raised our seed round!'
                className='rounded-t-md'
                height='200'
                src='/placeholder.svg'
                style={{
                  aspectRatio: '350/200',
                  objectFit: 'cover',
                }}
                width='350'
              />
            </CardHeader>
            <CardContent>
              <h3 className='font-bold text-xl mb-2'>
                daily.dev raised an $11M seed round 🎉
              </h3>
              <p className='text-sm mb-4'>
                daily.dev, a developer-focused startup, has raised $11 million
                in seed funding to build the
              </p>
              <p className='text-sm text-[#a3a3ff]'>Nimrod Kramer</p>
              <p className='text-sm'>March 23, 2023</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
