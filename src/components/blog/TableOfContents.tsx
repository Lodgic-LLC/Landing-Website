"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLDivElement>(null); // Ref for the TOC container

  // --- Smooth Scrolling ---
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed header (adjust '100' as needed)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Optionally update URL hash without jumping
      // history.pushState(null, '', `#${id}`);
      // Temporarily set active state on click for immediate feedback
      setActiveId(id);
    }
  };

  // --- Intersection Observer for Active State ---
  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    // Options for the observer (which part of the viewport to consider)
    const observerOptions = {
      rootMargin: "-100px 0px -50% 0px",
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveId(id);
          }
        }
      });
    }, observerOptions);

    // Observe each heading element - Using a safer approach
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    // Cleanup function
    return () => {
      observer.current?.disconnect();
    };
  }, [headings]);

  // --- Scroll TOC into view if active item is outside --- (Optional but good UX)
  useEffect(() => {
    if (activeId && tocRef.current) {
      const activeLink = tocRef.current.querySelector(
        `a[href="#${activeId}"]`
      ) as HTMLAnchorElement;
      if (activeLink) {
        // Basic check: if link is outside the visible TOC area, scroll it into view
        // This is a simplified check, more robust logic might be needed
        const tocRect = tocRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();

        if (linkRect.top < tocRect.top || linkRect.bottom > tocRect.bottom) {
          activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  }, [activeId]);

  if (!headings || headings.length === 0) {
    return null; // Don't render if no headings found
  }

  return (
    <div
      ref={tocRef}
      className="overflow-y-auto pr-4"
      style={{ maxHeight: "calc(100vh - 12rem)" }}
    >
      {" "}
      {/* Allow scrolling within TOC */}
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ marginLeft: `${(heading.level - 1) * 0.75}rem` }}
          >
            {" "}
            {/* Indent based on heading level */}
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleLinkClick(e, heading.id)}
              className={`block transition-colors duration-200 
                ${heading.level === 2 ? "text-base font-medium" : "text-sm"}
                ${activeId === heading.id
                  ? "text-orange-600 font-semibold" // Active state style
                  : "text-gray-600 hover:text-orange-500" // Default state style
                } ${heading.level > 2 ? "pl-2" : ""
                } // Additional padding for sub-headings
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
