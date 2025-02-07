import { useState, useRef, useEffect } from "react";

interface Props {
  onComplete: (code: string) => void;
}

const FiveDigitInput = ({ onComplete }: Props) => {
  const [digits, setDigits] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(5).fill(null));

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/[^0-9]/g, "").slice(0, 1);
    const newDigits = [...digits];
    newDigits[index] = digit;
    setDigits(newDigits);

    if (digit && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!digit && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    const firstEmptyIndex = digits.findIndex((d) => d === "");
    if (firstEmptyIndex !== -1 && firstEmptyIndex !== digits.length) {
      inputRefs.current[firstEmptyIndex]?.focus();
    }

    if (digits.every((d) => d !== "")) {
      onComplete(digits.join(""));
    }
  }, [digits, onComplete]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !digits[index]) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      const input = inputRefs.current[index];
      if (input && input.selectionStart === 0) {
        const prevInput = inputRefs.current[index - 1];
        prevInput?.focus();
        prevInput?.setSelectionRange(1, 1);
      }
    }

    if (e.key === "ArrowRight" && index < digits.length - 1) {
      const input = inputRefs.current[index];
      if (input && input.selectionStart === input.value.length) {
        const nextInput = inputRefs.current[index + 1];
        nextInput?.focus();
        nextInput?.setSelectionRange(0, 0);
      }
    }
  };

  return (
    <div className="flex gap-4" dir="ltr">
      {digits.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-16 text-3xl text-center p-2 bg-primary-blue text-white border-b-2 focus:border-light-blue focus:outline-none focus:text-light-blue"
        />
      ))}
    </div>
  );
};

export default FiveDigitInput;
