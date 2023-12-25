import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={Logo} alt="logo" width={128} height={38} />
        </Link>
        <p className="text-gray-400 text-sm">
          2023 Evently. | All Rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
