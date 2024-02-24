interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="border border-neutral-100 rounded-xl px-12 py-8 w-[90%] md:w-2/3 lg:w-[30%]">{children}</div>
    </div>
  );
};

export default Container;
