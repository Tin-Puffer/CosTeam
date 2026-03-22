import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Members from "@/components/Members";
import type { Member } from "@/components/Members";

const membersData: Member[] = [
  {
    id: 1,
    name: "Tokito Muichiro",
    role: "Leader",
    image: "/images/T1.jpg",
    color: "#27b2e0", // xanh lá
  },
  {
    id: 2,
    name: "Kochou Shinobu",
    role: "Co-Leader",
    image: "/images/T2.jpg",
    color: "#a855f7", // tím
  },
  {
    id: 3,
    name: "Mitsuri Kanroji",
    role: "Member",
    image: "/images/T3.jpg",
    color: "#ff5ed4", // tím
  },
  {
    id: 4,
    name: "Tomioka Giyuu",
    role: "Member",
    image: "/images/T4.jpg",
    color: "#3b82f6", // xanh dương
  },
  {
    id: 5,
    name: "Kanao Tsuyuri",
    role: "Member",
    image: "/images/T5.jpg",
    color: "#9031c0", // vàng
  },
];

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Members members={membersData} />
    </>
  );
}
