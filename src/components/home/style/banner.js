import tw, { styled } from 'twin.macro';

const StyledBanner = styled.section`
${tw`pt-20 bg-black bg-opacity-40 md:h-[70vh] h-[55vh] bg-cover bg-no-repeat relative flex justify-center`};

&:before {
  ${tw`absolute content-[''] top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60`}
}

@keyframes tslRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
      transform: rotate(1turn);
  }
}

@keyframes tslScale {
  0% {
    transform: scale(0.9);
  }
  50% {
      transform: scale(0.8);
  }
  100% {
      transform: scale(0.9);
  }
}
@keyframes tslBounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.hero {
  ${tw`grid justify-center items-center container mx-auto md:px-8 px-5 gap-y-10 pb-20 min-h-[80%] relative`};

  .left {
      ${tw`md:pr-6 pr-0 flex items-center flex-col`};
      .content {
        ${tw`flex flex-col items-center`}
        h1 {
          ${tw`text-white text-center 2xl:text-5xl xl:text-3xl text-xl font-semibold md:leading-[3.5rem] leading-[2rem]`};
        }
        .labels {
          ${tw`text-tsl-dark-blue my-4 2xl:text-3xl text-xl font-medium bg-white p-2 leading-none rounded`}
        }
        p {
          ${tw`text-white font-medium text-center md:text-2xl text-xl rounded mb-8`}
        }
        .cta {
          ${tw`flex flex-row px-6 py-3 md:text-xl text-lg font-bold rounded-md items-center gap-x-2 bg-secondary text-dark cursor-pointer transition transform duration-1000 hover:-translate-y-2 `};
        }
      }
  }

  // .right {
  //     ${tw`flex justify-end`}

  //     .banner-shape-1 {
  //       ${tw`absolute -z-[1] right-[5%] bottom-[-1rem]`}
  //       animation-name: tslRotate;
  //       animation-duration: 50s;
  //       animation-iteration-count: infinite;
  //       animation-timing-function: linear;
  //     }
  //     .banner-shape-2 {
  //       ${tw`absolute -z-[1] top-[7rem] right-[5%]`}
  //       animation: 4s linear 0s infinite normal none running tslScale;
  //     }
  //     .banner-shape-3 {
  //       ${tw`absolute -z-[1] bottom-[-8rem] left-[0rem]`}
  //       animation: 4s linear 0s infinite normal none running tslBounce;
  //     }
  // }
}

.feature-area {
  ${tw`absolute -bottom-16`}

  .wrapper {
    ${tw`container mx-auto p-4`}

    .main-grid {
      ${tw`grid md:grid-cols-4 grid-cols-1 gap-6`}

      .feature-box {
        ${tw`px-4 py-6 bg-white shadow-xl rounded-xl text-dark flex items-center gap-4`}

        .icon {
          ${tw`md:(w-16 h-10) text-white w-10 h-10 flex items-center justify-center relative md:text-3xl text-xl`}
          
          &:before, &:after {
            ${tw`[content: ''] absolute border-y-[15px] border-x-[32px] left-0 z-[1]`}
          }

          &:before {
            border-color: transparent transparent #ffa800;
            top: -30px;
          }

          &:after {
            border-color: #ffa800 transparent transparent;
            bottom: -30px;
          }
        }

        &:first-child {
          .icon {
            ${tw`bg-secondary`}
            &:before {
              ${tw`border-b-secondary`}
            }
            &:after {
              ${tw`border-t-secondary`}
            }
          }
        }

        &:nth-child(2) {
          .icon {
            ${tw`bg-primary-dark`}
            &:before {
              ${tw`border-b-primary-dark`}
            }
            &:after {
              ${tw`border-t-primary-dark`}
            }
          }
        }

        &:nth-child(3) {
          .icon {
            ${tw`bg-tsl-blue`}
            &:before {
              ${tw`border-b-tsl-blue`}
            }
            &:after {
              ${tw`border-t-tsl-blue`}
            }
          }
        }

        &:nth-child(4) {
          .icon {
            ${tw`bg-tsl-red`}
            &:before {
              ${tw`border-b-tsl-red`}
            }
            &:after {
              ${tw`border-t-tsl-red`}
            }
          }
        }

        .content {
          h5 {
            ${tw`flex flex-col font-medium md:text-xl text-lg leading-7 text-dark-muted`}
          }
        }
      }
    }
  }
}
`;

export const StyledFeature = styled.div`
${tw`pt-2 bg-primary bg-opacity-5`}
.feature-area {
  ${tw`-top-16 relative`}

  .wrapper {
    ${tw`container mx-auto`}

    .main-grid {
      ${tw`grid md:grid-cols-4 grid-cols-1 gap-6`}

      .feature-box {
        ${tw`px-4 py-6 bg-white shadow-xl rounded-xl text-dark flex items-center gap-4`}

        .icon {
          ${tw`w-16 h-10 text-white flex items-center justify-center relative md:text-3xl text-xl`}
          
          &:before, &:after {
            ${tw`[content: ''] absolute border-y-[15px] border-x-[32px] left-0 z-[1]`}
          }

          &:before {
            border-color: transparent transparent #ffa800;
            top: -29px;
          }

          &:after {
            border-color: #ffa800 transparent transparent;
            bottom: -29px;
          }
        }

        &:first-child {
          .icon {
            ${tw`bg-secondary`}
            &:before {
              ${tw`border-b-secondary`}
            }
            &:after {
              ${tw`border-t-secondary`}
            }
          }
        }

        &:nth-child(2) {
          .icon {
            ${tw`bg-primary-dark`}
            &:before {
              ${tw`border-b-primary-dark`}
            }
            &:after {
              ${tw`border-t-primary-dark`}
            }
          }
        }

        &:nth-child(3) {
          .icon {
            ${tw`bg-tsl-blue`}
            &:before {
              ${tw`border-b-tsl-blue`}
            }
            &:after {
              ${tw`border-t-tsl-blue`}
            }
          }
        }

        &:nth-child(4) {
          .icon {
            ${tw`bg-tsl-red`}
            &:before {
              ${tw`border-b-tsl-red`}
            }
            &:after {
              ${tw`border-t-tsl-red`}
            }
          }
        }

        .content {
          h5 {
            ${tw`flex flex-col font-medium md:text-xl text-lg leading-7 text-dark-muted`}
          }
        }
      }
    }
  }
}
`;

export default StyledBanner;
