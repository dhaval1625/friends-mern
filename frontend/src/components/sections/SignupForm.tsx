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
import { SIGNUP_FORM_INITIAL_VALUES, SIGNUP_FORM_SCHEMA } from '@/lib/config';
import { SignupData } from '@/lib/definitions';

interface SignupProps {
   onSubmit: (data: SignupData) => void;
}

function SignupForm({ onSubmit }: SignupProps) {
   const formSchema = z
      .object(SIGNUP_FORM_SCHEMA)
      .refine((data) => data.password === data.cnfPassword, {
         message: 'Must be equal to password entered above!',
         path: ['cnfPassword'],
      });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: SIGNUP_FORM_INITIAL_VALUES,
   });

   return (
      <Card className="max-w-sm w-full">
         <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
               Enter your information to create an account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(
                     (values: z.infer<typeof formSchema>) => onSubmit(values)
                  )}
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
                                 autoComplete='username'
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
                                 placeholder="Password"
                                 type="password"
                                 {...field}
                                 autoComplete="new-password"
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
                                 autoComplete='new-password'
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
               <Link to="/auth/login" className="underline">
                  Sign in
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}

export default SignupForm;
