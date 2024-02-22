import React from "react";
import binance from "../images/binanceLogo.png"
import profit from "../images/logo.png"



const CapturePage: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen md:bg-hero flex justify-center items-center bg-gray-800  ">
        <div className="md:flex grid w-[90%] max-w-6xl shadow-2xl mx-auto h-screen items-center rounded-md md:p-10 md:gap-20 bg-gray-200 opacity-95 ">    
          <div className="w-full md:w-1/2 md:p-0 px-10 md:mt-0 mt-10 ">
          <img className="h-20 mb-4" src={profit} alt="Logo" />
            <h1 className="text-2xl font-extrabold mb-2 text-gray-800">Preencha o formulário e receba um Robô Gratuito</h1>
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem provident. Illo corrupti fugit minus
              ullam, animi cupiditate nam reprehenderit officia repellendus nostrum magni nobis consequatur alias
              reiciendis iste. Perferendis!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rem provident. Illo corrupti fugit minus
              ullam, animi cupiditate nam reprehenderit officia repellendus nostrum magni nobis consequatur alias!
              
            </p>
          </div>
        

          <div className="w-full md:w-1/2 md:mt-0 mb-4 md:mb-0 items-center z-50 opacity-100  ">
            <form action="" className="grid gap-4 p-8 rounded-2xl shadow-2xl md:bg-gray-300 bg-gray-200  ">
              <div className="grid gap-2 ">
                <h1 className="text-xl font-bold text-gray-700 hidden md:grid">Preencha o Formulário</h1>
                <label htmlFor="nome" className="text-gray-700 font font-semibold text-lg">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  name="nome"
                  className="w-full p-2 md:p-3 border rounded-2xl focus:outline-none focus:border-blue-500 text-lg"
                />
              </div>
              <div className="grid gap-1 ">
                <label htmlFor="whatsapp" className="text-gray-700 font font-semibold text-lg">
                  Whatsapp
                </label>
                <input
                  type="text"
                  id="whatsapp"
                  placeholder="Seu número de celular"
                  name="whatsapp"
                  className="w-full p-2 md:p-3 border rounded-2xl focus:outline-none focus:border-blue-500 text-lg"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition duration-300 font-semibold text-lg"
              >
                Solicitar meu Robô
              </button>
            </form>
            
          </div>

          <img className="md:hidden h-20 bottom-10 mb-20 mx-auto" src={binance} alt="Logo" />
          <img className="hidden md:inline fixed bottom-0 h-20 mx-auto left-0 right-0" src={binance} alt="Logo" />


        </div>
     
      </div>
    </>
  );
};

export default CapturePage;
