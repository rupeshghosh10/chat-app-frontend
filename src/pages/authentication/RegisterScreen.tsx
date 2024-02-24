import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'wouter';
import Container from './components/Container';
import Divider from './components/Divider';
import GoogleButton from './components/GoogleButton';
import Input from './components/Input';
import Button from './components/Button';

const RegisterScreen = () => {
  return (
    <Container>
      <p className="text-2xl mb-6 text-center">Create an account</p>
      <GoogleButton text="Sign up with Google" />
      <Divider />
      <div className="flex flex-col gap-4">
        <Input name="name" type="text" placeholder="full name" label="Your name" Icon={UserIcon} />
        <Input name="email" type="email" placeholder="name@company.com" label="Your email" Icon={EnvelopeIcon} />
        <Input name="password" type="password" placeholder="••••••••" label="Password" Icon={LockClosedIcon} />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          label="Confirm Password"
          Icon={LockClosedIcon}
        />
        <Button text="Create an account" />
      </div>
      <p className="mt-5 text-sm text-center">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 font-medium cursor-pointer hover:underline">
          Sign in
        </Link>
      </p>
    </Container>
  );
};

export default RegisterScreen;
