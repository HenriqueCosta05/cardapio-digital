'use client';

import { Card, Spinner } from "@/components";
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
    <section className="w-full min-h-screen flex justify-center items-center p-2 gap-8 flex-col bg-slate-100">
      {items ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        <Spinner />
      )}
    </section>
  );
}
