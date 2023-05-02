type InputFieldProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;


export function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div className="mt-4">
      <label htmlFor={props.id}>{label}</label>
      <input
        className="w-full p-2 border border-gray-300 bg-primary-50 text-primary-800 mt-1"
        {...props}
      />
    </div>
  );
}
