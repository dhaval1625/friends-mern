import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
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

function LoginForm() {
   const formSchema = z.object({
      email: z
         .string()
         .min(1, { message: 'Email is required!' })
         .email('Please enter valid email!'),
      password: z
         .string()
         .min(6, { message: 'Password must be atleast 6 characters long!' })
   })

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: '',
         password: '',
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }
   return (
      <Card className="max-w-sm w-full">
         <CardHeader>
            <CardTitle className="text-xl">Login</CardTitle>
         </CardHeader>
         <CardContent>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
               >
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
                                 autoComplete='username'
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
                                 placeholder="Password"
                                 type="password"
                                 {...field}
                                 autoComplete='new-password'
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <Button type="submit" className="w-full">
                     Login
                  </Button>
               </form>
            </Form>
            <div className="mt-4 text-center text-sm">
               Don't have an account?{' '}
               <Link to="/auth/signup" className="underline">
                  Sign up
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}

export default LoginForm;
