import React from "react";
import Container from "../shared/container";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

export default function Header() {
  return (
    <div className="w-full h-[80px] border  flex justify-center items-center ">
      <Container>
        <div className="flex items-center">
          <div className="w-full flex justify-between items-center">
            <div className="logo">
              <h1 className="text text-[50px] mr-10">your test</h1>
            </div>
            <div className="flex ">
              <Link
                to={"#"}
                className="flex justify-center items-center ml-1 mr-2"
              >
                Maktab darsliklari{" "}
                <span className="flex justify-center items-center mr-1 ml-1">
                  <AiOutlineDown />
                </span>
              </Link>
              <Link
                to={"#"}
                className="flex justify-center items-center ml-1 mr-2"
              >
                Oliy talim{" "}
                <span className="flex justify-center items-center mr-1 ml-1">
                  <AiOutlineDown />
                </span>
              </Link>
              <Link
                to={"#"}
                className="flex justify-center items-center ml-1 mr-2"
              >
                Maqsadlar{" "}
                <span className="flex justify-center items-center mr-1 ml-1">
                  <AiOutlineDown />
                </span>
              </Link>
              <Link
                to={"#"}
                className="flex justify-center items-center ml-1 mr-2"
              >
                Malumotlar{" "}
                <span className="flex justify-center items-center mr-1 ml-1">
                  <AiOutlineDown />
                </span>
              </Link>
              <Link
                to={"#"}
                className="flex justify-center items-center ml-1 mr-2"
              >
                Contact
              </Link>
            </div>
            <div>
              <Link className="px-6 py-3 mx-3 border rounded-md">Login</Link>
              <Link className="px-6 py-3 mx-3 border rounded-md bg-[#5417c7] text text-[#fff]">
                Join library
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
