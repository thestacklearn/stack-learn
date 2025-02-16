import tw, { styled } from 'twin.macro';

const StyledContactSection = styled.section`
${tw`md:py-32 py-12 bg-primary bg-opacity-5`};
.main-container {
    ${tw`flex flex-col items-center justify-center container mx-auto md:px-8 px-5`};

    .contact-wrapper {
        ${tw`bg-tsl-dark-blue rounded-lg shadow-xl relative`}

        .list {
            ${tw`px-24 py-12 text-white flex md:(flex-row gap-x-8 gap-y-0) items-center flex-col gap-y-4`}

            .content {
                ${tw`text-center md:text-left`}
                span {
                    ${tw`text-lg`}
                }
                h3 {
                    ${tw`md:text-2xl text-xl`}

                    a {
                        ${tw`text-white font-bold`}
                    }
                }

                &.end {
                    ${tw`md:text-right text-center`}
                }
            }
            .separator {
                ${tw`w-16 h-16 rounded-full text-red bg-white border-8 border-red border-opacity-70 md:text-2xl text-xl font-bold flex justify-center items-center`}
            }
        }

        &:before {
            ${tw`absolute left-0 bottom-0 w-full h-full bg-cover bg-no-repeat z-[-1]`}
            content: '';
        }
    }
}
`;

export default StyledContactSection;
