import tw, { styled } from 'twin.macro';

const StyledWhatOffer = styled.section`
${tw`md:py-24 py-12 bg-tsl-dark-blue bg-opacity-5`};
.main-container {
    ${tw`flex flex-col items-center justify-center xl:container mx-auto md:px-8 px-5`};
    h3 {
        ${tw`uppercase text-tsl-black font-bold text-base tracking-wide`}
    }

    h2 {
        ${tw`md:text-3xl text-2xl font-bold text-center pt-2 pb-12`}

        span {
            ${tw`text-secondary-dark`}
        }
    }

    .wrapper {
        ${tw`flex md:flex-row flex-col gap-12 md:w-3/4 w-full mx-auto`}
        > li {
            ${tw`md:w-1/3 w-full flex flex-col items-start justify-start bg-white p-4 rounded-md shadow-lg gap-4 hover:translate-y-[-10px] transition-all`}
            h4 {
                ${tw`md:text-xl text-lg font-bold`}
            }
            ul {
                ${tw`flex flex-col gap-2`}
                li {
                    ${tw`flex flex-row gap-x-2 items-center`}
                    .icon {
                        ${tw`text-secondary-dark`}
                    }
                }
            }
        }
    }
}
`;

export default StyledWhatOffer;