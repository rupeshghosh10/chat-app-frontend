interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  Icon: React.ElementType;
}

const Input = ({ name, type, placeholder, label, Icon }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 ml-1 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Icon className="text-zinc-400 w-6 h-6" />
        </div>
        <input
          id={name}
          name={name}
          type={type}
          className="ml-1 bg-zinc-800 border border-zinc-400 rounded-lg block w-full ps-10 p-2.5 outline-1 outline-zinc-300"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
