import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import DetailedServices from '../components/DetailedServices';
import ProjectCTA from '../components/ProjectCTA';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTitle from '../components/PageTitle';

const HomePage = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <PageTitle title="Accueil" description="Bienvenue sur le site de Lodgic" />
            <div className="pt-16">
                <Hero />
                <Features />
                <Process />
                <DetailedServices />
                <ProjectCTA />
                <SuccessStories />
                <FAQ />
            </div>
        </>
    );
};

export default HomePage; 