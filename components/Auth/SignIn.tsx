'use client';

import { useState } from 'react';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useAuth, VIEWS } from '../AuthProvider';
import { supabaseCreateForBrowser } from '@/lib/supabase-browser';

const supabase = supabaseCreateForBrowser()

interface SignInFormData {
  email: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignIn = (): JSX.Element => {
  const { setView } = useAuth();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [supabase] = useState(() => supabaseCreateForBrowser())

  async function signIn(formData: SignInFormData): Promise<void> {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="flex flex-col bg-orange-300 rounded p-2 m-1 text-center text-orange-800">
      <h2 className="text-center font-bold p-1 m-1 bg-orange-200 align-middle">Sign In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={signIn}
      >
        {({ errors, touched }): JSX.Element => (
          <Form className="flex flex-col">
            <label htmlFor="email" className='m-1'>Email</label>
            <Field
              className={cn('bg-orange-200', 'input', errors.email && touched.email && 'bg-red-50')}
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}

            <label htmlFor="password" className='m-1'>Password</label>
            <Field
              className={cn('input', errors.password && touched.password && 'bg-red-50')}
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}

            <button
              className="m-1 mt-3 bg-orange-400 hover:bg-orange-700 text-white py-2 px-4 rounded"
              type="button"
              onClick={() => setView(VIEWS.FORGOTTEN_PASSWORD)}
            >
              Forgot your password?
            </button>

            <button
              className="m-1 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className="text-red-600">{errorMsg}</div>}
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => setView(VIEWS.SIGN_UP)}
      >
        Don&apos;t have an account? Sign Up.
      </button> */}
    </div>
  );
};

export default SignIn;
