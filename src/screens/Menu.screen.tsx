'use client';

import { Card, Header, Spinner, TextField } from "@/components";
import { get } from "@/services";
import { MenuItem } from "@/types";
import { useEffect, useState } from "react";

export default function Menu() {
  const [items, setItems] = useState<MenuItem[] | null>(null)

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await get("/menu-items.json");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col bg-white-theme">
      <Header
        title="Olá,"
        subtitle="Seja bem-vindo(a)!"
      />
      <div className="px-6 -mt-12 relative mb-6">
        <TextField
          id="search"
          name="search"
          label="Qual comida você está procurando?"
          placeholder="Ex: Pizza, Massa, etc."
          value={""}
          onChange={() => { }}
          iconName="search"
          variant="base"
          helperText="Digite o nome do prato ou ingrediente"
        />
      </div>
        {items ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
            {items.map((item) => (
              <Card
                key={item.id}
                title={item.name}
                description={item.description}
                pricing={item.pricing}
                image={{ src: item.imageUrl, alt: item.name }}
                cta={item.feature}
                onClick={() => alert(`You clicked on ${item.name}`)}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[200px]">
            <Spinner />
          </div>
        )}
    </section>
  );
}