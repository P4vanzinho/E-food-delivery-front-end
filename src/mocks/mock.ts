"use client";

import { useState } from "react";
export default function useMocks() {
  const [categories] = useState([
    {
      name: "petiscos",
      products: [
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
      ],
    },
    {
      name: "petiscos",
      products: [
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
      ],
    },
    {
      name: "petiscos",
      products: [
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
      ],
    },
    {
      name: "petiscos",
      products: [
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
        },
        {
          name: "salada de ovos",
          upload: { url: "" },
          slug: "salada-de-ovos",
          price: "20",
          description: "Salada de ovos deliciosa, feita no capricho.",
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

  const product = {
    id: 1,
    name: "salada de ovos",
    upload: { url: "" },
    slug: "salada-de-ovos",
    price: "20",
    description: "Salada de ovos deliciosa, feita no capricho.",
  };

  const business = {
    whatsapp: "62999999999",
    status: "open",
    name: "Loja 1",
  };
  return {
    categories,
    product,
    business,
    businessInfos,
    user,
  };
}
