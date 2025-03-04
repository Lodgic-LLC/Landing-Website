import RendezVousContent from "@/components/pages/rendez-vous/RendezVousContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lodgic - Rendez-vous",
    description: "Prenez rendez-vous avec notre équipe pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider",
};

export default function RendezVous() {
    return (
        <RendezVousContent />
    )
}


