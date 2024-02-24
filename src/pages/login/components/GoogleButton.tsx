const GoogleButton = () => {
  return (
    <button className="flex flex-row items-center justify-center w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2.5">
      <img className="h-5 mr-3" src="/google.png" alt="logo" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleButton;
