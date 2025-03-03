import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Process from "../components/Process";
import DetailedServices from "../components/DetailedServices";
import ProjectCTA from "../components/ProjectCTA";
import SuccessStories from "../components/SuccessStories";
import FAQ from "../components/FAQ";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTitle from "../components/PageTitle";

const HomePage = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <PageTitle
                title="Accueil"
                description="Lodgic vous accompagne dans votre transformation digitale avec des solutions sur mesure. Experts en développement web, applications mobiles et stratégie digitale pour propulser votre entreprise vers le succès. Découvrez nos services, notre processus et nos réalisations."
            />
            <div className="pt-16">
                <Hero />
                <Features />
                <Process />
                <ProjectCTA />
                <SuccessStories />
                <FAQ />
            </div>
        </>
    );
};

export default HomePage;
