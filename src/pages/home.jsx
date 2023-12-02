import SearchInput from "../components/search";
import Slider from "../components/slider";
import Container from "../shared/container";
import React from "react";
import img9 from "../assets/images/img9.jpg";

export default function Home() {
  return (
    <Container>
      <div className="w-full">
        <SearchInput />
      </div>
      <div>
        <Slider />
      </div>

      <main className="w-full h-full border ">
        <div className=" w-full flex justify-around items-center my-[100px] ">
          <div className="w-[40%]">
            <div className="title">
              <h3 className="text text-[25px] font-bold  text-center">
                Bu daturda siz kerakli maqolalar, darsliklar, bilim alish uchun
                har qanday ma'lumotiar topishigiz mumkin
              </h3>
            </div>
            <div className="description text-center mt-[50px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae harum neque commodi amet quidem nemo accusantium. Ab
                temporibus inventore quaerat maiores debitis quo maxime
                voluptates fugiat fuga voluptatem ullam, mollitia, veritatis
                asperiores iure eius. Animi commodi odit provident repellendus
                ipsa, aliquam a, consectetur, molestiae doloribus minima
                dolores? Porro, voluptas labore.
              </p>
            </div>
          </div>
          <div className="img">
            <img src={img9} alt="" />
          </div>
        </div>
        <div className=" w-full flex justify-between flex-row-reverse items-center my-[100px] ">
          <div className="w-[40%]">
            <div className="title">
              <h3 className="text text-[25px] font-bold  text-center">
                Bu daturda siz kerakli maqolalar, darsliklar, bilim alish uchun
                har qanday ma'lumotiar topishigiz mumkin
              </h3>
            </div>
            <div className="description text-center mt-[50px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae harum neque commodi amet quidem nemo accusantium. Ab
                temporibus inventore quaerat maiores debitis quo maxime
                voluptates fugiat fuga voluptatem ullam, mollitia, veritatis
                asperiores iure eius. Animi commodi odit provident repellendus
                ipsa, aliquam a, consectetur, molestiae doloribus minima
                dolores? Porro, voluptas labore.
              </p>
            </div>
          </div>
          <div className="img">
            <img src={img9} alt="" />
          </div>
        </div>
        <div className=" w-full flex justify-around items-center  my-[100px]">
          <div className="w-[40%]">
            <div className="title">
              <h3 className="text text-[25px] font-bold  text-center">
                Bu daturda siz kerakli maqolalar, darsliklar, bilim alish uchun
                har qanday ma'lumotiar topishigiz mumkin
              </h3>
            </div>
            <div className="description text-center mt-[50px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae harum neque commodi amet quidem nemo accusantium. Ab
                temporibus inventore quaerat maiores debitis quo maxime
                voluptates fugiat fuga voluptatem ullam, mollitia, veritatis
                asperiores iure eius. Animi commodi odit provident repellendus
                ipsa, aliquam a, consectetur, molestiae doloribus minima
                dolores? Porro, voluptas labore.
              </p>
            </div>
          </div>
          <div className="img">
            <img src={img9} alt="" />
          </div>
        </div>
      </main>
    </Container>
  );
}
