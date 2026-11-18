import { useState } from "react";
import sports from "../assets/sports.jpg";
import sports2 from "../assets/sports2.jpg";
import sports3 from "../assets/sports3.jpg";
import event1 from "../assets/event1.JPG";
import fashion2 from "../assets/fashion2.jpg";

const Works = () => {
    const [carouselIndexes, setCarouselIndexes] = useState({
        celebration: 0,
        product: 0,
        sports: 0,
        event: 0,
        fashion: 0,
        actionsports: 0
    });

    const [reelIndex, setReelIndex] = useState(0);

    const projects = [

        {
            type: "celebration",
            images: [
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981077/celebration2.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981078/celebration3.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981074/celebration1.jpg"
            ],
            title: "Celebrations"
        },
        {
            type: "product",
            images: [
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981081/Product.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981077/product1.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981071/product3.jpg"
            ],
            title: "Product"
        },
        {
            type: "sports",
            images: [sports, sports2, sports3],
            title: "Sports"
        },
        {
            type: "event",
            images: [
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981046/event3.jpg",
                event1,
                "https://res.cloudinary.com/veprql8d/image/upload/v1794981047/event2.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980751/event4.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980875/event5.jpg"
            ],
            title: "Event"
        },
        {
            type: "fashion",
            images: [
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980748/fashion3.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980749/fashion4.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980995/fashion1.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794985358/fashion5.jpg",
                fashion2
            ],
            title: "Fashion"
        },
        {
            type: "actionsports",
            images: [
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980994/actionsports1.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980958/actionsports2.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980957/actionsports4.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980953/actionsports3.jpg",
                "https://res.cloudinary.com/veprql8d/image/upload/v1794980873/actionsports5.jpg"
            ],
            title: "Action Sports"
        },
    ];

    const reels = [
        {
            title: "Reel 01",
            url: "https://res.cloudinary.com/veprql8d/video/upload/v1794980415/1030.mov"
        },
        {
            title: "Reel 02",
            url: "https://res.cloudinary.com/veprql8d/video/upload/v1794986050/SWEETHA_ASHOOK_REEL.mov"
        },
        {
            title: "Reel 03",
            url: "https://res.cloudinary.com/veprql8d/video/upload/v1794980489/BIRTHDAY_2.mov"
        },
        {
            title: "Reel 04",
            url: "https://res.cloudinary.com/veprql8d/video/upload/v1794980495/CPA_PADEL_TEASER_FN.mov"
        },
        {
            title: "Reel 05",
            url: "https://res.cloudinary.com/veprql8d/video/upload/v1794980722/REEL_DUM_DUM_TRION.mov"
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
                                className="group relative overflow-hidden aspect-[3/4] bg-[#111]"
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
                                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-black"
                                            aria-label="Previous image"
                                        >
                                            &#10094;
                                        </button>

                                        <button
                                            onClick={(e) => nextImage(e, project)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-100 transition-opacity duration-300 hover:bg-gold hover:text-black"
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



                {/* Reels Section */}

                {/* Reels Section */}
                <div className="mt-20">

                    {/* Reels Header */}
                    <div className="mb-10">
                        <span className="text-gold text-[10px] tracking-[0.25em] font-montserrat font-semibold uppercase mb-4 block">
                            CINEMATIC VIDEOS
                        </span>

                        <h3 className="text-3xl md:text-5xl font-montserrat font-light text-white-touch mb-4">
                            Reels & Films.
                        </h3>

                        <p className="text-white-touch/60 text-sm font-poppins font-light max-w-xl">
                            Explore our collection of cinematic reels and creative video productions.
                        </p>
                    </div>

                    {/* Reels Carousel */}
                    <div className="relative">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

                            {[0, 1].map((offset) => {
                                const video = reels[(reelIndex + offset) % reels.length];

                                return (
                                    <div
                                        key={video.title}
                                        className="group relative overflow-hidden aspect-[3/4] bg-[#111] rounded-xl"
                                    >
                                        <video
                                            src={video.url}
                                            controls
                                            muted
                                            playsInline
                                            preload="metadata"
                                            className="w-full h-full object-cover"
                                        />

                                        {/* <div className="absolute top-4 left-4 pointer-events-none"> */}
                                        {/* <span className="text-white text-xs tracking-widest font-montserrat bg-black/50 px-3 py-2 rounded">
                                                {video.title}
                                            </span> */}
                                        {/* </div> */}
                                    </div>
                                );
                            })}

                        </div>

                        {/* Carousel Navigation */}
                        <div className="flex justify-center gap-4 mt-8">

                            <button
                                onClick={() =>
                                    setReelIndex((prev) =>
                                        (prev - 1 + reels.length) % reels.length
                                    )
                                }
                                className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-gold hover:text-black hover:border-gold transition-all"
                                aria-label="Previous reels"
                            >
                                &#10094;
                            </button>

                            <button
                                onClick={() =>
                                    setReelIndex((prev) =>
                                        (prev + 1) % reels.length
                                    )
                                }
                                className="w-10 h-10 rounded-full border border-white/30 text-white hover:bg-gold hover:text-black hover:border-gold transition-all"
                                aria-label="Next reels"
                            >
                                &#10095;
                            </button>

                        </div>

                    </div>
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