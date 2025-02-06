import clsx from "clsx";
import { MdErrorOutline } from "react-icons/md";

interface Props {
  type?: "text" | "password";
  label: string;
  className?: string;
  onChange?: (value: string) => void;
  errorText?: string;
}

const TextField = ({
  type = "text",
  label,
  className,
  onChange,
  errorText,
}: Props) => {
  return (
    <div className={clsx(className, "w-full transition-all")}>
      <label htmlFor={label} className="text-light-blue">
        {label}
      </label>
      <input
        type={type}
        name={label}
        className={clsx(
          "outline-none w-full p-2 rounded-md bg-lighter-blue text-black border-2 mt-2",
          { ["border-red-500"]: errorText },
          { ["border-border-blue"]: !errorText }
        )}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {errorText && (
        <div className="flex text-red-500 mt-2">
          <MdErrorOutline size={24} />
          <p>{errorText}</p>
        </div>
      )}
    </div>
  );
};

export default TextField;
