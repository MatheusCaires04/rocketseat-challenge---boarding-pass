import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";

import qrcode from "/assets/qrcode.png";

function App() {
  return (
    <div className="bg-violet-900 w-full h-screen flex flex-col items-center justify-center ">
      <div className="bg-white px-7 py-5 rounded-3xl w-[350px] sm:w-[400px]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-600 font-medium leading-4">
              Voo
            </span>
            <strong className="text-base leading-4">RS995</strong>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600 font-medium leading-4">
              Data
            </span>
            <strong className="text-base leading-4">03/03/2023</strong>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-1 flex-col items-start">
            <span className="text-sm text-gray-600 font-medium leading-4">
              São Paulo, Brasil
            </span>
            <strong className="text-2xl leading-4">GRU</strong>
            <span className="text-xs font-medium">17:00</span>
          </div>
          <div>
            <IoAirplaneSharp size={30} />
          </div>
          <div className="flex gap-1 flex-col items-end">
            <span className="text-sm text-gray-600 font-medium leading-4">
              São Francisco, EUA
            </span>
            <strong className="text-2xl leading-4">SFO</strong>
            <span className="text-xs font-medium">21:10</span>
          </div>
        </div>
      </div>
      <div className="relative bg-white px-7 py-5 rounded-3xl w-[350px] sm:w-[400px] flex items-center justify-between">
        <div className="border-image w-[300px] sm:w-[350px] h-[1px] top-0 left-[50%] translate-x-[-50%] absolute" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-600 font-medium leading-4">
            Passageiro
          </span>
          <strong className="text-xl leading-6">Matheus Bini</strong>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-600 font-medium leading-4">
            Assento
          </span>
          <strong className="text-xl leading-6">26A</strong>
        </div>
        <div className="border-image w-[300px] sm:w-[350px] h-[1px] bottom-0 left-[50%] translate-x-[-50%] absolute" />
      </div>
      <div className="bg-white px-7 py-5 rounded-3xl w-[350px] sm:w-[400px] flex flex-col">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 font-medium leading-4">
                Embarque
              </span>
              <strong className="text-xl leading-5">16:15</strong>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 font-medium leading-4">
                Terminal
              </span>
              <strong className="text-xl leading-5">2</strong>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 font-medium leading-4">
                Portão
              </span>
              <strong className="text-xl leading-5">15</strong>
            </div>
          </div>
          <div className="">
            <div>
              <img
                src={qrcode}
                alt="Imagem de um QR CODE na cor preta, onde será direcionado para seu grupo de embarque"
                className="w-36"
              />
            </div>
            <span className="text-xs text-gray-600 font-medium ">
              Grupo de embarque: 3
            </span>
          </div>
        </div>
        <span className="text-base text-gray-800 font-medium text-center mt-5">
          <strong className="text-black font-bold text-lg">Atenção: </strong>o
          portão fecha 16:45
        </span>
      </div>
    </div>
  );
}

export default App;
