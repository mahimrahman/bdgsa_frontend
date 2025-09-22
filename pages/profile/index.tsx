/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3nVKOWVjFNf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';

export default function Component() {
  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center'>
      <Card className='my-32 w-full max-w-3xl'>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Update your account information.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-6'>
            <div className='space-y-2'>
              <Label htmlFor='username'>Username</Label>
              <Input id='username' placeholder='Enter your username' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' placeholder='Enter your email' type='email' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                placeholder='Enter your password'
                type='password'
              />
            </div>
            <div className='space-y-2'>
              <Label>Profile Picture</Label>
              <div className='flex items-center space-x-4'>
                <img
                  alt='Profile picture'
                  className='rounded-full'
                  height='96'
                  src='https://media.licdn.com/dms/image/D4E03AQGhmkXbsVoWeA/profile-displayphoto-shrink_400_400/0/1678522233326?e=1712793600&v=beta&t=LklsZh1u7T9vF7qPJXB6vkb0x94gwIS2DR0RQGh2e4Q'
                  style={{
                    aspectRatio: '96/96',
                    objectFit: 'cover',
                  }}
                  width='96'
                />
                <Button variant='outline'>Upload</Button>
              </div>
            </div>
            <div className='space-y-2'>
              <Label>Notification Preferences</Label>
              <div className='grid gap-1.5'>
                <Checkbox id='email' />
                <label className='leading-none' htmlFor='email'>
                  Email
                </label>
                <Checkbox id='push' />
                <label className='leading-none' htmlFor='push'>
                  Push Notifications
                </label>
                <Checkbox id='sms' />
                <label className='leading-none' htmlFor='sms'>
                  SMS
                </label>
              </div>
            </div>
            <div className='space-y-2'>
              <Label>Language Preference</Label>
              <Select>
                <SelectTrigger className='w-[200px]'>
                  <SelectValue placeholder='Select language' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='en'>English</SelectItem>
                  <SelectItem value='es'>Spanish</SelectItem>
                  <SelectItem value='fr'>French</SelectItem>
                  <SelectItem value='de'>German</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label>Timezone Preference</Label>
              <Select>
                <SelectTrigger className='w-[200px]'>
                  <SelectValue placeholder='Select timezone' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='pst'>PST</SelectItem>
                  <SelectItem value='mst'>MST</SelectItem>
                  <SelectItem value='cst'>CST</SelectItem>
                  <SelectItem value='est'>EST</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex'>
          <Button className='ml-auto'>Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
