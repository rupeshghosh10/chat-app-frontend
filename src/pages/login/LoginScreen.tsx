import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Input from './components/Input';
import Divider from './components/Divider';
import GoogleButton from './components/GoogleButton';

const LoginScreen = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="border border-neutral-100 rounded-xl px-12 py-8 w-[90%] md:w-2/3 lg:w-[30%]">
        <p className="text-2xl mb-6 text-center">Sign in to your account</p>
        <GoogleButton />
        <Divider />
        <div className="flex flex-col gap-4">
          <Input name="email" type="email" placeholder="name@company.com" label="Your email" Icon={EnvelopeIcon} />
          <Input name="password" type="password" placeholder="••••••••" label="Password" Icon={LockClosedIcon} />
          <div className="flex justify-between text-sm px-1">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-1" />
              <label id="remember" htmlFor="remember">
                Remember me
              </label>
            </div>
            <p className="text-blue-500 font-medium cursor-pointer hover:underline">Forgot password?</p>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2.5">
            Sign in
          </button>
        </div>
        <p className="mt-5 text-sm text-center">
          Not yet registered?{' '}
          <span className="text-blue-500 font-medium cursor-pointer hover:underline">Create an Account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
