"use client";
import { useEffect, useState } from "react";
import { TaskModal } from "@/components/TaskModal";
import { Sidebar } from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import Image from "next/image";
import { LightButton } from "@/components/LightButton";
import { Button } from "@/components/Button";
import Board from "./board";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { CalendarIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { ShareIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { SparklesIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import {
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const cardsData = [
  {
    imageSrc: "/images/1.png",
    altText: "Introducing tags",
    title: "Introducing tags",
    description:
      "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
  },
  {
    imageSrc: "/images/2.png",
    altText: "Share Notes Instantly",
    title: "Share Notes Instantly",
    description:
      "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
  },
  {
    imageSrc: "/images/3.png",
    altText: "Access Anywhere",
    title: "Access Anywhere",
    description:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex h-full bg-[#f7f7f7]">
      <Sidebar toggleModal={toggleModal} />
      <main className="flex-1 p-6 overflow-y-auto" style={{ height: "100vh" }}>
        <section>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              Good morning, {user?.name || "Joe Gardner"} !
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span>Help & feedback</span>
              <QuestionMarkCircleIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 p-2">
            {cardsData.map((card, index) => (
              <DashboardCard
                key={index}
                imageSrc={card.imageSrc}
                altText={card.altText}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>

        <div className="flex items-center justify-between my-6">
          <div className="flex items-center border border-gray-300 bg-white rounded-lg p-1 w-[250px]">
            <input
              type="text"
              placeholder="Search"
              className="p-2 outline-none w-full"
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="flex items-center space-x-5">
            <LightButton
              text="Calendar view"
              onClick={() => {}}
              icon={<CalendarDaysIcon className="h-6 w-6" />}
              alt={"Calendar Icon"}
            />
            <LightButton
              text="Automation"
              onClick={() => {}}
              icon={<SparklesIcon className="h-6 w-6" />}
              alt={"Calendar Icon"}
            />
            <LightButton
              text="Filter"
              onClick={() => {}}
              icon={<FunnelIcon className="h-6 w-6" />}
              alt={"Calendar Icon"}
            />
            <LightButton
              text="Share"
              onClick={() => {}}
              icon={<ShareIcon className="h-6 w-6" />}
              alt={"Calendar Icon"}
            />
            <Button
              text="Create new"
              onClick={toggleModal}
              icon={<PlusCircleIcon className="h-8 w-8" />}
            />
          </div>
        </div>

        <Board />
      </main>

      {isModalOpen && (
        <TaskModal isOpen={isModalOpen} onClose={toggleModal} statusText="" />
      )}
    </div>
  );
}
