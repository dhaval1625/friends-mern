import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';

function SignupForm() {
   const formSchema = z.object({
      firstName: z.string().min(1, {
         message: 'First name is required.',
      }),
      lastName: z.string().min(1, {
         message: 'Last name is required.',
      }),
      email: z
         .string()
         .min(1, { message: 'Email is required!' })
         .email('Please enter valid email!'),
      password: z
         .string()
         .min(6, { message: 'Password must be atleast 6 characters long!' }),
      cnfPassword: z.string()
   }).refine(data => data.password === data.cnfPassword, {
      message: 'Must be equal to password entered above!',
      path: ['cnfPassword'],
   });;

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         cnfPassword: ''
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }
   return (
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
               Enter your information to create an account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
               >
                  <div className="grid grid-cols-2 gap-4">
                     <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>First name</FormLabel>
                              <FormControl>
                                 <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Last name</FormLabel>
                              <FormControl>
                                 <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </div>
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="john@doe.com"
                                 type="email"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Password</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="password"
                                 type="password"
                                 {...field}
                                 autoComplete='new-password'
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="cnfPassword"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Confirm Password</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Confirm password"
                                 type="password"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit" className="w-full">
                     Create an account
                  </Button>
               </form>
            </Form>
            <div className="mt-4 text-center text-sm">
               Already have an account?{' '}
               <Link to="/login" className="underline">
                  Sign in
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}

export default SignupForm;
