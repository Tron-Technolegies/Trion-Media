import { useState } from "react";

import celebration1 from "../assets/celebration1.JPG";
import celebration2 from "../assets/celebration2.JPG";
import celebration3 from "../assets/celebration3.JPG";

import Product from "../assets/Product.JPG";
import product2 from "../assets/product2.JPG";
import product3 from "../assets/product3.JPG";

import sports1 from "../assets/sports1.jpg";
import sports2 from "../assets/sports2.jpg";
import sports3 from "../assets/sports3.jpg";

import event1 from "../assets/event1.JPG";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";

import fashion1 from "../assets/fashion1.jpg";
import fashion2 from "../assets/fashion2.jpg";
import fashion3 from "../assets/fashion3.jpg";
import fashion4 from "../assets/fashion4.jpg";

import actionsports1 from "../assets/actionsports1.jpg";
import actionsports2 from "../assets/actionsports2.jpg";
import actionsports3 from "../assets/actionsports3.jpg";
import actionsports4 from "../assets/actionsports4.jpg";


const Works = () => {
    const [carouselIndexes, setCarouselIndexes] = useState({
        celebration: 0,
        product: 0,
        sports: 0,
        event: 0,
        fashion: 0,
        actionsports: 0
    });



    const projects = [
        {
            type: "celebration",
            images: [celebration1, celebration2, celebration3],
            title: "Celebrations"
        },
        {
            type: "product",
            images: [Product, product2, product3],
            title: "Product"
        },
        {
            type: "sports",
            images: [sports1, sports2, sports3],
            title: "Sports"
        },
        {
            type: "event",
            images: [event1, event2, event3, event4],
            title: "Event"
        },
        {
            type: "fashion",
            images: [fashion1, fashion2, fashion3, fashion4],
            title: "Fashion"
        },
        {
            type: "actionsports",
            images: [actionsports1, actionsports2, actionsports3, actionsports4],
            title: "Action Sports"
        },
        {
            img: "https://images.unsplash.com/photo-1541300613939-71366b37c92e?q=80&w=2104&auto=format&fit=crop",
            title: "Reels"
        }
    ];

    const nextImage = (e, project) => {
        e.stopPropagation();

        setCarouselIndexes((prev) => ({
            ...prev,
            [project.type]:
                (prev[project.type] + 1) % project.images.length
        }));
    };

    const prevImage = (e, project) => {
        e.stopPropagation();

        setCarouselIndexes((prev) => ({
            ...prev,
            [project.type]:
                (prev[project.type] - 1 + project.images.length) %
                project.images.length
        }));
    };

    const setCurrentIndex = (type, index) => {
        setCarouselIndexes((prev) => ({
            ...prev,
            [type]: index
        }));
    };

    return (
        <section id="works" className="py-24 bg-black">
            <div className="max-w-[90rem] mx-auto px-8 md:px-12">

                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-6 block">
                        OUR CREATIVE PORTFOLIO
                    </span>

                    <h2 className="text-4xl md:text-[56px] font-montserrat font-light leading-[1.1] mb-6 text-white-touch">
                        Capturing Moments.<br />
                        Creating Stories.
                    </h2>

                    <p className="text-white-touch/60 text-[14px] font-poppins font-light leading-relaxed max-w-xl mb-10">
                        Explore our collection of photography and cinematic productions,
                        where every frame captures a story, every detail matters,
                        and every moment becomes a lasting impression.
                    </p>

                    <div className="w-24 h-[1px] bg-gradient-to-r from-gold/80 to-transparent"></div>
                </div>

                {/* Portfolio Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                    {projects.map((project, index) => {
                        const currentIndex = project.type
                            ? carouselIndexes[project.type]
                            : 0;

                        const currentImage = project.images
                            ? project.images[currentIndex]
                            : project.img;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden aspect-[4/3] bg-[#111]"
                            >
                                <img
                                    src={currentImage}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    loading="lazy"
                                />

                                {/* Carousel Controls */}
                                {project.images && (
                                    <>
                                        <button
                                            onClick={(e) => prevImage(e, project)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-black"
                                            aria-label="Previous image"
                                        >
                                            &#10094;
                                        </button>

                                        <button
                                            onClick={(e) => nextImage(e, project)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-black"
                                            aria-label="Next image"
                                        >
                                            &#10095;
                                        </button>

                                        {/* Navigation Dots */}
                                        <div className="absolute bottom-4 right-6 flex gap-2">
                                            {project.images.map((_, dotIndex) => (
                                                <button
                                                    key={dotIndex}
                                                    onClick={() =>
                                                        setCurrentIndex(project.type, dotIndex)
                                                    }
                                                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === dotIndex
                                                        ? "bg-gold scale-125"
                                                        : "bg-white/60"
                                                        }`}
                                                    aria-label={`Show image ${dotIndex + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Title Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h3 className="text-white-touch text-[18px] font-montserrat font-light">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* View More */}
                <div className="flex justify-end mt-12">
                    <a
                        href="#works"
                        className="text-white-touch font-montserrat text-[13px] font-medium tracking-wide hover:text-gold border-b border-white-touch hover:border-gold transition-all duration-300 pb-1"
                    >
                        Explore Our Work
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Works;