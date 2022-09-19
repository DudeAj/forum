import React from "react";
import Image from "next/image";
import Input from "../UI/Input";
import styles from "../../styles/header.module.scss";

const Header = () => {
  return (
    <div className="min-h-full drop-shadow">
      <nav className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-5">
            <div className="flex justify-between">
              <div className="w-full">
                <h1>Forume</h1>
              </div>
              <div className="w-full">
                <Input type="text" placeholder="Search..." />
              </div>
              <div className="w-full flex justify-end">
                <Image
                  width={32}
                  height={32}
                  layout="fixed"
                  src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
