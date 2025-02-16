import tw, { styled } from 'twin.macro';
const StyledOurProcess = styled.section`
    ${tw`md:py-24 py-12 bg-primary-dark bg-opacity-5`};
    .main-container {
        ${tw`flex flex-col items-center justify-center xl:container mx-auto md:px-8 px-5`};
        h3 {
            ${tw`uppercase text-tsl-black font-bold text-base tracking-wide`}
        }
    
        h2 {
            ${tw`md:text-3xl text-2xl font-bold text-center pt-2 pb-12`}

            span {
                ${tw`text-primary-dark`}
            }
        }

        .process-wrapper {
            ${tw`flex md:(flex-row gap-4) gap-y-44 flex-col w-full items-center`}

            .item {
                ${tw`w-1/4 flex flex-col justify-center items-center relative last:after:[content: none]`}

                .top {
                    ${tw`relative`}
                    .icon {
                        ${tw`w-28 h-28 bg-secondary-dark bg-opacity-10 text-secondary-dark p-10 rounded-full`}
                    }
                    .number {
                        ${tw`flex items-center justify-center w-8 h-8 rounded-full bg-secondary-dark text-white absolute top-1.5`}
                    }
                }

                .content {
                    ${tw`md:text-2xl text-xl font-bold pt-4`}
                }

            &:after {
                ${tw`w-[140px] h-[25px] md:(left-[14rem] translate-x-0) left-[50%] translate-x-[-50%] md:top-auto top-[14rem] md:rotate-0 rotate-90 absolute [background-size: 100%] [content: ''] bg-no-repeat`}
            }
            &:nth-child(2) {
                &:after {
                ${tw`-scale-y-100 md:top-12`}
                }
            }
            }
        }
    }
`;
export default StyledOurProcess;