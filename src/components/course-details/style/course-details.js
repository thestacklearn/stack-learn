import tw, { styled } from 'twin.macro';

const StyledCourseDetails = styled.section`
.banner {
    ${tw`bg-primary bg-opacity-5 relative overflow-hidden`}
    .container {
        ${tw`md:(pt-32 pb-28) pt-24 pb-12 flex flex-col gap-y-6 items-center justify-center container mx-auto md:px-72 px-5 `} 
        &:before {
            ${tw`absolute content-[''] top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60`}
        }

        .wrapper {
            ${tw`bg-black bg-opacity-50 p-6 z-[1] rounded`}
            h1 {
                ${tw`md:text-3xl text-xl font-semibold text-white text-center`}
            }
            h2 {
                ${tw`max-w-lg mx-auto text-base my-4 bg-white rounded text-center px-2 py-1 text-tsl-light-black`}
            }
            .course-meta {
                ${tw`flex flex-row justify-center md:gap-8 gap-2 z-[1]`}
    
                li {
                    ${tw`font-semibold text-tsl-light-black flex flex-row gap-x-2 md:justify-center justify-start items-center`}
    
                    .icon {
                        ${tw`text-secondary text-2xl`}
                    }
    
                    span {
                        ${tw`text-lg font-bold text-white`}
                    }
    
                    .divider {
                        ${tw`w-[1px] h-full bg-gray-300`}
                    }
                }
            }
        }
    }
}
`;

export default StyledCourseDetails;
