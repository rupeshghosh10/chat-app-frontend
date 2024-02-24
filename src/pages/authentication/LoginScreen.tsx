import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { Link } from 'wouter';
import Input from './components/Input';
import Divider from './components/Divider';
import GoogleButton from './components/GoogleButton';
import Container from './components/Container';
import Button from './components/Button';

const LoginScreen = () => {
  return (
    <Container>
      <p className="text-2xl mb-6 text-center">Sign in to your account</p>
      <GoogleButton text="Sign in with Google" />
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
        <Button text="Sign in" />
      </div>
      <p className="mt-5 text-sm text-center">
        Not yet registered?{' '}
        <Link to="/register" className="text-blue-500 font-medium cursor-pointer hover:underline">
          Create an Account
        </Link>
      </p>
    </Container>
  );
};

export default LoginScreen;
