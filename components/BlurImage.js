import Image from "next/image";
import { useState } from "react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const BlurImage = ({ src, alt, className, ...props }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={classNames(
        "transition bg-light d-inline-block",
        className,
        isLoading ? "blur" : ""
      )}
      onLoad={() => setLoading(false)}
    />
  );
};

export default BlurImage;
