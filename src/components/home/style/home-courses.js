import tw, { styled } from 'twin.macro';

const StyledHomeCourses = styled.section`
${tw`md:pb-24 pb-12 bg-primary bg-opacity-5`};
.main-container {
    ${tw`flex flex-col items-center justify-center xl:container mx-auto md:px-8 px-5`};

    h3 {
        ${tw`uppercase text-tsl-black font-bold text-base tracking-wide`}
    }

    h2 {
        ${tw`md:text-3xl text-2xl font-bold text-center pt-2 pb-12 text-primary-dark`}
    }

    .courses-list {
        ${tw`grid md:grid-cols-3 grid-cols-1 gap-8`}

        .card {
            ${tw`bg-white rounded-lg shadow-md overflow-hidden relative`}
            
            .inner {
                ${tw`flex flex-col h-full`}

                .thumbnail {
                    ${tw`relative`}
                    .img {
                        ${tw`w-full`}
                    }
                    .course-duration {
                        ${tw`absolute top-4 left-4 flex flex-row gap-x-1 justify-center items-center bg-secondary text-white px-2 py-1 rounded text-base`}
                    }
                }

                .content {
                    ${tw`p-6 flex flex-col items-start gap-y-1 h-full relative`}

                    .intructor {
                        ${tw`flex flex-row gap-x-4`}

                        .thumb {
                            ${tw`rounded-full`}
                        }

                        span {
                            ${tw`text-base font-bold`}
                        }
                    }

                    .course-level {
                        ${tw`text-sm font-bold text-primary px-4 py-2 bg-primary bg-opacity-10 rounded`}
                    }

                    h6 {
                        ${tw`md:text-xl text-lg font-bold`}
                    }

                    .desc {
                        ${tw`pb-8 text-dark`}
                    }

                    .meta-wrapper {
                        ${tw`w-full h-full relative pt-2`}
                        .divider {
                            ${tw`w-full absolute bottom-7`}
                        }
    
                        .course-meta {
                            ${tw`w-full flex flex-row gap-x-4 justify-between absolute bottom-0`}
    
                            .item {
                                ${tw`flex flex-row items-center text-[#6F6B80] text-sm gap-x-1`}
    
                                span {
                                    ${tw`font-medium`}
                                }
                            }
                        }
                    }
                }
            }

            .hover-content {
                ${tw`absolute top-0 left-0 w-full h-full bg-primary-dark opacity-0 transition duration-[300ms] p-8 z-[2]`}
            }

            &:hover {
                ${tw`cursor-pointer`}
                .hover-content {
                    ${tw`opacity-100 text-white`}
                    .content {
                        ${tw`h-full flex flex-col justify-between`}

                        .top {
                            ${tw`flex flex-col items-start gap-y-6`}
                            .course-level {
                                ${tw`text-sm font-bold text-white px-4 py-2 bg-white bg-opacity-25 rounded`}
                            }
                            h6 {
                                ${tw`md:text-xl text-lg font-bold`}
                            }
                            p {
                                ${tw`text-base`}
                            }
                            .intructor {
                                ${tw`flex flex-row gap-x-4`}
    
                                .thumb {
                                    ${tw`rounded-full`}
                                }
    
                                span {
                                    ${tw`text-base font-bold`}
                                }
                            }
                        }
                        .bottom {
                            ${tw`flex flex-col items-start gap-y-6`}
                            .divider {
                                ${tw`w-full`}
                            }
                            .course-meta {
                                ${tw`w-full flex flex-row gap-x-4 justify-between`}
        
                                .item {
                                    ${tw`flex flex-row items-center text-white text-sm gap-x-1`}
        
                                    span {
                                        ${tw`font-medium`}
                                    }
                                }
                            }
                            .cta {
                                ${tw`flex flex-row gap-x-4 bg-white px-4 py-2 rounded justify-center items-center text-primary font-bold mx-auto`}
                                &:hover {
                                    ${tw`bg-secondary text-white cursor-pointer`}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`
export default StyledHomeCourses