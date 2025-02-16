import tw, { styled } from 'twin.macro';

const StyledAbout = styled.section`
${tw`md:py-6 bg-amber-100/50`};
.wrapper {
    ${tw`flex md:flex-row flex-col items-center justify-center xl:container mx-auto md:(px-8 gap-12) gap-4 px-5`}
    .left {
        ${tw`md:w-1/2 w-full flex items-center justify-center`}
        .image {
            ${tw`md:(rounded-2xl rounded-tr-[8rem]) rounded-tr-[4rem] rounded-lg shadow-xl`}
        }
    }
    .right {
        ${tw`md:w-1/2 w-full`}
        h3 {
            ${tw`md:text-2xl text-xl font-semibold`}
        }
        p {
            ${tw`md:text-lg text-base font-medium text-muted pt-2 pb-8 leading-normal`}
        }
    }
}
`;

export default StyledAbout;