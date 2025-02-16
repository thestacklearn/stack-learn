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
`;

export default StyledCourseContent;
