"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
    useEffect(() => {
        AOS.init({
            // Configuration globale d'AOS
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 50,
        });
    }, []);

    return null; // Ce composant ne rend rien
} 