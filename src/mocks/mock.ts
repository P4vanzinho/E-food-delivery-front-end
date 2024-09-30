"use client";
import foodImg from "../../public/foodImg.png";
import chocolate from "../../public/chocolate.jpg";
import jantinha from "../../public/jantinha.jpg";
import { useState } from "react";
export default function useMocks() {
  const [categories] = useState([
    {
      name: "Petiscos",
      products: [
        {
          name: "salada de ovos",
          upload: foodImg,
          slug: "salada-de-ovos",
          price: "2000",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: foodImg,
          slug: "salada-de-ovos",
          price: "2000",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: foodImg,
          slug: "salada-de-ovos",
          price: "2000",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
      ],
    },
    {
      name: "Sobremesas",
      products: [
        {
          name: "chocolate ao leite",
          upload: chocolate,
          slug: "chocolate-ao-leite",
          price: "400",
          description: "30 porcento de cacau.",
        },
        {
          name: "chocolate ao leite",
          upload: chocolate,
          slug: "chocolate-ao-leite",
          price: "400",
          description: "30 porcento de cacau.",
        },
        {
          name: "chocolate ao leite",
          upload: chocolate,
          slug: "chocolate-ao-leite",
          price: "400",
          description: "30 porcento de cacau.",
        },
      ],
    },
    {
      name: "Comida brasileira",
      products: [
        {
          name: "Jantinha com espetinho",
          upload: jantinha,
          slug: "jantinha",
          price: "3400",
          description: "Arroz, feijao tropeiro e espetinho de carne.",
        },
        {
          name: "Jantinha com espetinho",
          upload: jantinha,
          slug: "jantinha",
          price: "3400",
          description: "Arroz, feijao tropeiro e espetinho de carne.",
        },
        {
          name: "Jantinha com espetinho",
          upload: jantinha,
          slug: "jantinha",
          price: "3400",
          description: "Arroz, feijao tropeiro e espetinho de carne.",
        },
      ],
    },
  ]);
  const [businessInfos] = useState({
    upload: {
      url: "",
    },
    whatsapp: "62999999999",
    status: "open" || "close",
    name: "User Restaurante",
    address: {
      id: "",
      cep: "34334343",
      state: "Good State",
      city: "Good State",
      neighborhood: "Good neighborhood",
      street: "Good street",
      number: "1",
      lat: "2",
      long: "3",
    },
  });

  const [user] = useState({
    name: "Thiago Pavan",
    whatsapp: "62999999999",
    address: {
      cep: "74945569",
      street: "Street 1",
      streetNumber: "1",
      neighborhood: "Neighborhood 1",
      addressDetails: "number 234",
      city: "Great city",
      state: "Great State",
    },
    preferences: {
      payment: {
        method: "credit",
        cardBrand: "masterCard",
      },
      delivery: {
        method: "delivery",
      },
    },
  });

  const business = {
    whatsapp: "62999999999",
    status: "open",
    name: "Loja 1",
  };
  return {
    categories,

    business,
    businessInfos,
    user,
  };
}
