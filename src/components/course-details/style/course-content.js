import tw, { styled } from 'twin.macro';

const StyledCourseContent = styled.section`
${tw`md:py-20 py-5 bg-amber-100/50`};
@keyframes tslHeight {
    0% {
        max-height: 5rem;
    }
    100% {
        max-height: 100rem;
    }
}
@keyframes tslPulse {
    0% {
        box-shadow: 0 0 0 0 hsla(0,0%,100%,.4);
    }
    70% {
        box-shadow: 0 0 0 45px hsla(0,0%,100%,0);
    }
    100% {
        box-shadow: 0 0 0 0 hsla(0,0%,100%,0);
    }
}
.main-container {
    ${tw`flex md:flex-row flex-col-reverse items-start justify-center xl:container mx-auto md:px-8 px-5 gap-8`};
    .left {
        ${tw`md:w-3/4 w-full bg-white p-4 rounded shadow relative`}
        .tabs-list {
            ${tw`flex flex-row w-full bg-white border-b border-gray-500/20 md:(gap-x-4) gap-x-2 font-bold md:sticky top-24`}
            button {
                ${tw`focus:outline-none`}
                .button {
                    ${tw`md:p-3 px-1 py-2 relative`};
                    &:before {
                        ${tw`w-0 absolute left-0 h-[3px] bg-primary-dark bottom-0`}
                        transition: 0.5s;
                        content: '';
                    }
                    &.selected, &:hover {
                        ${tw`text-primary-dark`}
                        &:before {
                            ${tw`w-full`}
                        }
                    }
                }
            }
        }

        .tab-panel {
            ${tw`py-7`}
            a {
                ${tw`text-blue-600 underline`}
            }
            h4 {
                ${tw`md:text-xl text-lg font-semibold text-black`}
            }
            > .description {
                ${tw`flex flex-col gap-y-3 pt-8 last-of-type:pt-4 md:text-base text-sm text-muted`}

                h4 {
                    ${tw`pt-4`}
                }

                img {
                    ${tw`max-w-none w-full md:w-[revert-layer] mx-auto`}
                }
            }
             ul {
                ${tw`flex flex-col gap-y-3 md:text-base text-sm text-muted`}
                li {
                    ${tw`flex flex-row gap-x-2 items-start`}
                    .icon {
                        ${tw`shrink-0 md:text-xl text-lg mt-1`}
                    }
                }

                &.list {
                    li {
                        ${tw`flex-col`}

                        h5 {
                            ${tw`font-semibold text-dark-muted`}
                        }
                    }
                }
            }
            .disclosure-wrapper {
                ${tw`flex flex-col gap-y-4`}

                .item {
                    ${tw`flex flex-col`}

                    .button {
                        ${tw`flex md:flex-row flex-col justify-between md:items-center items-start md:(px-4 py-3) p-3 bg-white rounded-t border md:gap-y-0 gap-y-1`}
                        .course-syllabus {
                            ${tw`flex flex-row md:gap-2 gap-0 items-center font-bold`}
                            h5 {
                                ${tw`md:text-lg text-base text-left font-medium`}
                            }

                            .icon {
                                ${tw`md:(h-6 w-6) h-4 w-4 shrink-0`}
                            }
                        }
                        &.active {
                            ${tw`bg-primary-dark text-white`}

                            .icon {
                                ${tw`rotate-90 transition-transform`}
                            }
                        }
                        .details {
                            ${tw`shrink-0 md:text-base text-sm`}
                        }
                    }
                }

                .panel {
                    ${tw`bg-white p-4 shadow-lg rounded-b`}
                    // animation-name: tslHeight;
                    // animation-duration: 1s;
                    // animation-timing-function: ease;

                    .description {
                        ${tw`text-muted font-medium`}
                    }

                    .list {
                        ${tw`flex flex-col pt-4 text-muted font-medium`}

                        li {
                            ${tw`border-b last:border-0 py-4 border-gray-200 flex flex-row items-center justify-between`}

                            .sub-course {
                                ${tw`flex flex-row gap-x-2 items-center`}
                                .icon {
                                    ${tw`w-9 h-9 rounded-full bg-primary bg-opacity-[.15] p-2 text-primary shrink-0`}
                                }
                            }
                            .duration, .quiz {
                                ${tw`shrink-0`}
                                span {
                                    ${tw`px-2 py-1 bg-secondary bg-opacity-10 text-secondary text-sm rounded font-semibold`}
                                }
                            }
                            .quiz {
                                span {
                                    ${tw`bg-primary-dark bg-opacity-10 text-primary-dark`}
                                }
                            }
                        }
                    }
                }
            }
            .instructor-details {
                ${tw`flex flex-col gap-y-1 bg-white p-4 rounded border`}
                .instructor-name {
                    ${tw`md:text-2xl text-xl font-extrabold`}
                }
                .expert {
                    ${tw`text-secondary font-bold`}
                }
                .details {
                    ${tw`flex flex-row gap-x-4 pt-4`}
                    li {
                        ${tw`flex flex-row gap-x-2 items-center text-tsl-black font-semibold`}
                        .divider {
                            ${tw`w-[1px] h-full bg-gray-300`}
                        }
                        .icon {
                            ${tw`md:text-2xl text-xl text-primary`}
                        }
                    }
                }
                p {
                    ${tw`pt-4`}
                }
            }
        }
    }
    .right {
        ${tw`md:(sticky w-1/4) w-full top-28`}
        .download-btn {
            ${tw`mt-2 w-full rounded-md bg-secondary flex flex-row items-center gap-2 justify-center text-white font-medium [letter-spacing: .05em] p-2 text-center uppercase shadow`}

            .icon {
                ${tw`text-xl`}
            }
        }
        .course-sidebar {
            ${tw`p-4 bg-white shadow rounded-md`}

            .course-video {
                ${tw`relative overflow-hidden rounded mb-2 border`}

                .video-thumb {
                    ${tw`relative`}
                    
                    img {
                        ${tw`w-full h-auto`}
                    }
    
                    &:before {
                        ${tw`[content: ''] bg-black/50 w-full h-full absolute`}
                    }
    
                    .video-play {
                        ${tw`absolute cursor-pointer top-[50%] left-[50%] [transform: translate(-50%,-50%)]`}
    
                        .wrapper {
                            ${tw`w-11 h-11 text-center text-secondary-dark flex items-center justify-center rounded-full bg-white`}
                            animation: tslPulse 2s infinite;
                        }
                    }
                }
            }

            .details {
                ${tw`flex flex-col`}
                li {
                    ${tw`flex flex-row justify-between items-center py-4 border-b`}
                    .label {
                        ${tw`flex flex-row items-center gap-x-2`}
                    }
                }
            }

            .share {
                ${tw`flex flex-row gap-x-4 pt-4 items-center justify-center`}

                .label {
                    ${tw`font-bold`}
                }

                .icon {
                    ${tw`flex items-center justify-center text-white`}
                    &:nth-child(2) {
                        button {
                        ${tw`!bg-[#3b5998] rounded-full !bg-opacity-100 hover:(!bg-opacity-80 cursor-pointer)`}
                        }
                    }
                    &:nth-child(3) {
                        button {
                        ${tw`!bg-[#007fb1] rounded-full !bg-opacity-100 hover:(!bg-opacity-80 cursor-pointer)`}
                    }
                    }
                    &:nth-child(4) {
                        button {
                        ${tw`!bg-[#00aced] rounded-full !bg-opacity-100 hover:(!bg-opacity-80 cursor-pointer)`}
                    }
                    }
                    button {
                        ${tw`!p-3`}
                    }
                }
            }

            .course-cta {
                button {
                    ${tw`w-full rounded-md bg-primary text-white font-medium [letter-spacing: .05em] px-3 py-2 text-center uppercase shadow`}
                }
            }
        }
    }
    .custom-modal-wrapper {
        ${tw`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none z-[9999]`}
        .overlay {
            ${tw`opacity-25 fixed inset-0 bg-black`}
        }
        .modal-main-container {
            ${tw`relative w-auto my-6 mx-auto max-w-md`}
            animation: modalAnimation .3s ease forwards;
            @keyframes modalAnimation {
                0% {
                    opacity: 0;
                    transform: translate3d(0,50%,0);
                },
                100% {
                  opacity: 1,
                  transform: translateZ(0),
                },
              },
            .content {
                ${tw`border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
                .header-wrapper {
                    ${tw`flex items-start justify-between pt-6 px-6 pb-4 rounded-t`}
                    h1 {
                        ${tw`md:text-xl text-lg font-semibold text-black`}
                    }
                    button {
                        ${tw`p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none`}
    
                        .close {
                            ${tw`bg-transparent h-6 w-6 text-3xl block outline-none focus:outline-none`}
                        }
                    }
                }

                .body {
                    ${tw`relative px-6 pb-6 flex-auto`}
                    h3 {
                        ${tw`md:text-base text-sm font-medium text-dark`}
                    }

                    form {
                        ${tw`grid grid-cols-1 gap-4 pt-8`}
                        .wrapper {
                            ${tw`relative z-0`}
    
                            input, textarea {
                                ${tw`pt-5 pb-2 pl-2 pr-4 block w-full mt-0 bg-transparent rounded appearance-none focus:outline-none focus:(ring-0 shadow-[0 0 0 2px #1961d9]) shadow-[0 0 0 1px #d9d9d9] text-dark-muted text-sm font-medium`}
                            }
    
                            label {
                                ${tw`absolute duration-300 top-3 -z-[1] translate-x-2 [transform-origin: 0%] text-muted`}
                            }
    
                            input, textarea {
                                &:focus ~ label, &:not(:placeholder-shown) ~ label {
                                    ${tw`transform scale-[0.75] -translate-y-3 font-medium z-0`}
                                }
                            }
    
                            select {
                                &:focus ~ label, &:not([value='']):valid ~ label {
                                    ${tw`transform scale-[0.75] -translate-y-3 font-medium z-0`}
                                }
                            }
    
                            input, select {
                                &:focus ~ label {
                                    ${tw`left-0 font-medium z-0`}
                                }
                            }

                            input.form-control {
                                ${tw`h-[53px] pl-12 py-4`}
                            }

                            textarea {
                                ${tw`resize-none w-full`}
                            }
                            &.about {
                                ${tw`col-start-1 col-end-[-1]`}
                                &:before {
                                    content: "";
                                    position: absolute;
                                    height: 25px;
                                    width: calc(100% - 1rem);
                                    background: #fff;
                                    top: 0;
                                    left: 0;
                                    border-radius: 0.25rem 0.25rem 0 0;
                                }
    
                                label {
                                    ${tw`z-0`}
                                }
                            }
    
                        }

                        .submit {
                            ${tw`col-start-1 col-end-[-1]`}
    
                            button {
                                ${tw`font-medium w-auto rounded-3xl px-4 py-2 text-white text-base bg-secondary disabled:opacity-50`}
                            }
                        }

                        .agree-terms-checkbox {
                            ${tw`text-sm text-dark-muted flex flex-row gap-2 items-start cursor-default`}

                            input {
                                ${tw`mt-1`}
                            }

                            a {
                                ${tw`text-tsl-blue`}
                            }
                        }
                    }

                    .submission-success {
                        ${tw`flex flex-col gap-1 items-center justify-center`}
    
                        img {
                            ${tw`w-28`}
                        }
    
                        h3 {
                            ${tw`md:text-xl text-lg font-bold text-dark py-4`}
                        }
                        button {
                            ${tw`bg-secondary text-white font-bold uppercase text-sm px-6 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4`}                        
                        }
                    }
                }
            }
        }
    }
}
`;

export default StyledCourseContent;
