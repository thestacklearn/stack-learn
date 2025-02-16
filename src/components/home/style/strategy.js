import tw, { styled } from 'twin.macro';

const StyledStrategy = styled.section`
${tw`md:py-24 py-12 bg-[rgb(24, 43, 73)] bg-opacity-[0.98]`};
.main-container {
    ${tw`flex flex-col items-center justify-center xl:container mx-auto md:px-8 px-5`};

    h3 {
        ${tw`uppercase text-white font-bold text-base tracking-wider`}
    }

    h2 {
        ${tw`md:text-3xl text-2xl font-bold text-center text-white pt-2 pb-12`}

        span {
            ${tw`text-secondary`}
        }
    }

    .main-wrapper {
        ${tw`flex md:flex-row flex-col gap-4 items-center`}

        .strategy-list {
            ${tw`grid grid-cols-1 gap-y-4 md:w-1/2 w-full`}
    
            .strategy-wrapper {
                ${tw`flex flex-row items-center bg-white bg-opacity-[0.08] rounded-lg shadow-[0px 10px 30px 0px rgba(0, 0, 0, 0.05)] p-4`}
                .top-inner {
                    ${tw`w-[5rem] h-[5rem] bg-white rounded-full flex flex-none justify-center items-center`}
                    .icon {
                        ${tw`md:text-4xl text-2xl`}
                    }
                }
                .box {
                    ${tw`p-4 flex flex-col`}
    
                    h3 {
                        ${tw`md:text-lg text-secondary-dark text-base font-bold`}
                    }
                    span {
                        ${tw`pt-2 text-white text-lg`}
                    }
                }
                
    
                &:nth-child(1) {
                    .top-inner {
                        .icon {
                            ${tw`text-primary`}
                        }
                    }
    
                    &:hover {
                        .top-inner {
                            ${tw`bg-primary`}
                            
                            .icon {
                                ${tw`text-white`}
                            }
                        }
                    }
                }
    
                &:nth-child(2) {
                    .top-inner {
                        .icon {
                            ${tw`text-tsl-red`}
                        }
                    }
                    &:hover {
                        .top-inner {
                            ${tw`bg-tsl-red`}
                            
                            .icon {
                                ${tw`text-white`}
                            }
                        }
                    }
                }
    
                &:nth-child(3) {
                    .top-inner {
                        .icon {
                            ${tw`text-tsl-dark-blue`}
                        }
                    }
                    &:hover {
                        .top-inner {
                            ${tw`bg-tsl-dark-blue`}
                            
                            .icon {
                                ${tw`text-white`}
                            }
                        }
                    }
                }
    
                &:nth-child(4) {
                    .top-inner {
                        .icon {
                            ${tw`text-tsl-red`}
                        }
                    }
                    &:hover {
                        .top-inner {
                            ${tw`bg-tsl-red`}
                            
                            .icon {
                                ${tw`text-white`}
                            }
                        }
                    }
                }
            }
        }

        .img-wrapper {
            ${tw`md:w-1/2 w-full`}

            img {
                ${tw`rounded-full w-3/4 m-auto`}
            }
        }
    }
}
`;

export default StyledStrategy;
