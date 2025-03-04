import ContactForm from "@/components/pages/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lodgic - Contact",
    description: "Contactez-nous pour discuter de vos besoins numériques et de la façon dont nous pouvons vous aider",
};

export default function Contact() {
    return (
        <ContactForm />
    )
}


