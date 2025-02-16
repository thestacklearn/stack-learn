import tw, { styled } from 'twin.macro';

const StyledBanner = styled.section`
${tw`bg-cover bg-center relative`}
&:before {
    ${tw`absolute content-[''] top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80`}
}
.banner {
    ${tw`md:(pb-28) pt-32 pb-12 bg-primary bg-opacity-5 relative overflow-hidden`}
    

    .container {
        ${tw`flex flex-col gap-y-6 items-center justify-center container mx-auto md:px-72 px-5 `} 
        h1 {
            ${tw`text-black md:text-4xl text-xl font-semibold bg-secondary px-2 py-2 rounded`};
        }
        p {
            ${tw`font-medium md:text-xl text-lg px-4 py-2 rounded text-center mb-0 text-white`}
        }
    }
}
`;

export default StyledBanner;
