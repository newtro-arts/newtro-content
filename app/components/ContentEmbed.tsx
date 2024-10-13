"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ContentEmbedProps {
  url: string;
  title: string;
  thumbnail: string;
  descripcion: string;
  imgAuthor: string;
  nameAuthor: string;
  date: string;
}

const ContentEmbed: React.FC<ContentEmbedProps> = ({
  url,
  title,
  thumbnail,
  descripcion,
  imgAuthor,
  nameAuthor,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="col-span-3 max-w-full lg:max-w-lg aspect-square flex flex-col items-start gap-y-2">
        <Image
          src={thumbnail} 
          alt="Thumbnail"
          width={380}
          height={350}
          className="aspect-square rounded-md object-cover cursor-pointer" 
          onClick={handleOpenModal} 
        />
        <p className="uppercase pragmatica-text text-xl lg:text-3xl max-w-sm">
          {title}
        </p>
        <p className="text-sm max-w-sm">{descripcion}</p>
        <div className="flex gap-x-2">
          <Image src={imgAuthor} width={30} height={30} alt="" />
          <div className="flex flex-col text-xs">
            <p className="font-semibold">{nameAuthor}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-primary p-16 rounded-lg border border-gray-400/20 w-full max-w-2xl aspect-video relative flex flex-col text-center gap-y-2 justify-center">
            <span
              className="absolute top-2 right-3 cursor-pointer text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </span>
            <iframe
              src={url}
              allowFullScreen
              width="100%"
              height="400"
              title={title}
            ></iframe>
            <p className="font-Pragmatica uppercase text-2xl">{title}</p>
            <p>{descripcion}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentEmbed;