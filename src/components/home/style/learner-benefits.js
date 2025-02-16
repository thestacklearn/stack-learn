import tw, { styled } from 'twin.macro';
const StyledLearnerBenefits = styled.section`
${tw`md:py-24 py-12 bg-primary bg-opacity-5`};
.main-container {
    ${tw`flex flex-col items-center justify-center xl:container mx-auto md:px-8 px-5`};

    h3 {
        ${tw`uppercase text-tsl-black font-bold text-base tracking-wide`}
    }

    h2 {
        ${tw`md:text-3xl text-2xl font-bold text-center pt-2 pb-12 text-primary-dark`}
    }

    .benefits-list {
        ${tw`flex flex-col gap-y-20`}

        .benefits-item {
            ${tw`flex md:flex-row flex-col items-center gap-8`}

            .left {
                ${tw`md:w-2/5 w-full`}
            }
    
            .right {
                ${tw`md:w-3/5 w-full`}
            }

            h3 {
                ${tw`md:text-lg text-secondary-dark text-base font-bold`}
            }
            p {
                ${tw`pt-2 pb-4 text-gray-800 text-lg`}
            }

            img {
                ${tw`rounded-2xl border-white border-[.75rem] shadow-lg`}
            }

            ul {
                ${tw`flex flex-row gap-4 justify-center`}

                li {
                    ${tw`flex flex-col items-center gap-1`}

                    .icon {
                        ${tw`text-2xl bg-gray-200 p-4 rounded-full`}
                    }

                    &:first-child {
                        .icon {
                            ${tw`text-primary-dark`}
                        }
                    }

                    &:nth-child(2) {
                        .icon {
                            ${tw`text-secondary`}
                        }
                    }

                    .title {
                        ${tw`text-xl font-semibold`}
                    }

                    .sub-title {
                        ${tw`text-lg text-gray-800 font-medium max-w-[95%] leading-6 text-center`}
                    }
                }
            }
        }
    }
}
`
export default StyledLearnerBenefits