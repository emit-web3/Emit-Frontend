import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Button, { ButtonColors, ButtonVariants } from "../../Button/Button";

interface Props {
  activeTab?: 0 | 1 | 2;
  onChange: (value: 0 | 1 | 2) => void;
}

const Tabs = ({ activeTab = 0, onChange }: Props) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    const container = containerRef.current;

    if (activeTabRef && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeTabRef.getBoundingClientRect();

      setIndicatorStyle({
        width: buttonRect.width,
        height: buttonRect.height,
        left: buttonRect.left - containerRect.left,
        top: buttonRect.top - containerRect.top,
      });
    }
  }, [activeTab]);

  const handleClick = (value: 0 | 1 | 2) => {
    onChange(value);
  };

  return (
    <div
      ref={containerRef}
      className="w-100 flex justify-center gap-4 py-4 relative"
    >
      <Button
        ref={(el) => (tabRefs.current[0] = el)}
        variant={ButtonVariants.TRANSPARENT}
        color={activeTab === 0 ? ButtonColors.WHITE : ButtonColors.LIGHT_BLUE}
        onClick={() => handleClick(0)}
        className="w-full z-10"
      >
        ارائه
      </Button>
      <Button
        ref={(el) => (tabRefs.current[1] = el)}
        variant={ButtonVariants.TRANSPARENT}
        color={activeTab === 1 ? ButtonColors.WHITE : ButtonColors.LIGHT_BLUE}
        onClick={() => handleClick(1)}
        className="w-full z-10"
      >
        کارگاه
      </Button>
      <Button
        ref={(el) => (tabRefs.current[2] = el)}
        variant={ButtonVariants.TRANSPARENT}
        color={activeTab === 2 ? ButtonColors.WHITE : ButtonColors.LIGHT_BLUE}
        onClick={() => handleClick(2)}
        className="w-full z-10"
      >
        مسابقه
      </Button> 

      <div
        className="absolute bottom-0 h-1 bg-secondary-blue transition-all duration-200 ease-in-out rounded-md -z-1"
        style={{
          width: `${indicatorStyle.width}px`,
          height: `${indicatorStyle.height}px`,
          left: `${indicatorStyle.left}px`,
          top: `${indicatorStyle.top}px`,
        }}
      />
    </div>
  );
};

export default Tabs;
