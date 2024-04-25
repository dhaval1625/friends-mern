import DPForm from '@/components/sections/DPForm';
import SignupForm from '@/components/sections/SignupForm';
import { SignupData } from '@/lib/definitions';
import { Fragment, useState } from 'react';

function Signup() {
   const [curStep, setCurStep] = useState(1);

   const signupHandler = (data: SignupData) => {
      console.log('Signup Data', data);
      setCurStep((step) => step + 1);
   };

   return (
      <Fragment>
         {curStep === 0 && <SignupForm onSubmit={signupHandler} />}
         {curStep === 1 && <DPForm />}
      </Fragment>
   );
}

export default Signup;
