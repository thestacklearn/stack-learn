import tw, { styled } from 'twin.macro';
const StyledTestimonial = styled.section`
    ${tw`md:py-24 py-12 bg-amber-100/50`};

    .main-container {
        ${tw`grid md:grid-cols-2 grid-cols-1 items-center justify-center xl:container mx-auto md:(px-8 gap-x-12 gap-y-0) gap-y-8 px-5`};

        .left {
            ${tw`relative`}

            .custom-carousel {
                ${tw`bg-white shadow-xl rounded-md md:p-12 p-8`}

                .custom-arrow {
                    ${tw`absolute md:(bottom-0 top-auto) top-0 bg-primary-dark z-10 md:(w-12 h-12) w-8 h-8 flex items-center justify-center rounded-md cursor-pointer`}

                    &.prev {
                        ${tw`md:right-16 right-10`}
                    }

                    &.next {
                        ${tw`right-0`}
                    }

                    .icon {
                        ${tw`text-white stroke-1`}
                    }

                    &:hover {
                        ${tw`bg-opacity-100`}
                    }
                }

                .carousel-container {
                    ${tw`flex flex-col gap-y-8`}
                    .rating {
                        ${tw`flex flex-row gap-x-4`}

                        .star {
                            ${tw`text-lg text-tsl-orange`}
                        }
                    }

                    p {
                        ${tw`text-left text-gray-800 font-normal md:text-lg text-base`}
                    }

                    .student-details {
                        .student {
                            ${tw`flex flex-row gap-x-4 items-center`}
                            
                            .thumb {
                                ${tw`rounded-full w-16 h-16 shadow border-secondary-dark border-2 border-solid`}
                            }

                            .meta {
                                ${tw`flex flex-col items-start`}

                                .name {
                                    ${tw`md:text-xl text-lg font-bold`}
                                }

                                .course {
                                    ${tw`text-primary font-bold`}
                                }
                            }
                        }
                    }
                }
            }
        }

        .right {
            ${tw`flex flex-col gap-y-2`}

            h3 {
                ${tw`uppercase text-tsl-black font-bold text-base tracking-wide`}
            }
        
            h2 {
                ${tw`md:text-3xl text-2xl font-black`}
            }

            p {
                ${tw`text-lg text-muted font-medium pb-6 pt-4`}
            }

            h6 {
                ${tw`text-tsl-black font-bold md:text-xl text-lg`}
            }

            .features {
                ${tw`flex md:flex-row flex-col gap-x-4 pt-2`}

                .list {
                    ${tw`flex flex-col gap-y-1 md:w-1/2 w-full`}

                    h6 {
                        ${tw`md:text-2xl text-xl text-tsl-dark-orange`}
                    }

                    span {
                        ${tw`text-lg text-muted font-semibold leading-normal`}
                    }
                }
            }
        }
    }
`;
export default StyledTestimonial;