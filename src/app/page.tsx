import Button from "@/components/Button";
import Card from "@/components/Card";
import { Paperclip } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full h-screen flex justify-center items-center p-8 gap-8 flex-col">
    <Card
      title="Premium Headphones"
      pricing={199.99}
      description="Experience crystal-clear sound with noise cancellation and up to 20 hours of battery life."
      image={{
        src: "https://picsum.photos/id/114/800/600",
        alt: "Premium headphones on a wooden table"
      }}
    />
      <Button variant="base">
        Teste
      </Button>
      <Button variant="icon">
        <Paperclip />
      </Button>
    </section>
  );
}
