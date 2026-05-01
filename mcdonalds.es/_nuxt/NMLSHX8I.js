const t = {
  base: "flex flex-col items-center self-stretch rounded-16  desktop:rounded-24   shadow-long-blur  transition-shadow duration-300",
  image: "flex justify-center items-end self-strech relative ",
  default: { grid: "1/2" },
  grid: {
    "1/2": {
      base: "w-full max-w-[328px] tablet:max-w-[348px]  desktop:max-w-[580px] h-auto",
      imageContainer:
        "w-full h-[160px] min-h-[147px]  relative tablet:min-h-[156px]  desktop:min-h-[260px] desktop:h-[240px]",
      content: {
        base: "flex p-4 flex-col items-center gap-2 self-strech text-center tablet:py-6 tablet:px-8 desktop:pt-6 desktop:pb-10 desktop:px-10",
        title: "text-title-s tablet:text-title-m desktop:text-title-l",
        description: "text-body-m tablet:text-body-l",
        badge:
          "w-[76px] h-[76px] tablet:w-24 tablet:h-24 desktop:w-[120px] desktop:h-[120px]",
        "schar-badge":
          "w-[64px] h-[64px] desktop:w-[76px] desktop:h-[76px] overflow-hidden rounded-tl-xl",
      },
    },
    "1/3": {
      base: "w-full max-w-[328px] tablet:max-w-[224px] desktop:max-w-[373px] h-auto",
      imageContainer:
        "max-h-[100px] min-h-[100px] tablet:min-h-[216px] desktop:min-h-[165px] relative  tablet:max-h-[216px] h-full  desktop:max-h-[165px] w-full flex justify-center items-center",
      content: {
        base: "flex p-4 flex-col items-center gap-2 selft-strech text-center tablet:py-6 tablet:px-8",
        title: "text-title-s tablet:text-title-m desktop:text-title-l",
        description: "text-body-m tablet:text-body-l",
        badge: "w-[76px] h-[76px] desktop:w-24 desktop:h-24 ",
        "schar-badge":
          "w-[64px] h-[64px] desktop:w-[76px] desktop:h-[76px] overflow-hidden rounded-tl-xl",
      },
    },
    "1/4": {
      base: "w-full  max-w-[156px] tablet:max-w-[162px] desktop:max-w-[270px] h-auto",
      imageContainer:
        "w-full min-h-[104px] w-[148px] relative tablet:min-h-[154px] tablet:w-[154px]  desktop:w-[254px] desktop:min-h-[254px]",
      content: {
        base: "flex p-4 flex-col items-center gap-2 selft-strech text-center",
        title: "text-body-l tablet:text-title-xs desktop:text-title-m",
        description: "text-body-m tablet:text-body-l",
        badge: "w-16 h-16 desktop:w-[76px] desktop:h-[76px]",
        "schar-badge":
          "w-[64px] h-[64px] desktop:w-[76px] desktop:h-[76px] overflow-hidden rounded-tl-xl",
      },
    },
    "1/4/Mobile": {
      base: "w-full  max-w-[156px] h-auto",
      imageContainer: "w-full min-h-[104px] w-[148px] relative",
      content: {
        base: "flex p-4 flex-col items-center gap-2 selft-strech text-center",
        title: "text-body-l tablet:text-title-xs desktop:text-title-m",
        description: "text-body-m tablet:text-body-l",
        badge: "w-16 h-16",
        "schar-badge":
          "w-[64px] h-[64px] desktop:w-[76px] desktop:h-[76px] overflow-hidden rounded-tl-xl",
      },
    },
    overlay: {
      base: "w-full max-w-[240px] tablet:max-w-[280px] desktop:max-w-[448px] h-full",
      imageContainer:
        "w-full  min-h-[105px]  relative tablet:min-h-[122px]  desktop:min-h-[196px] ",
      content: {
        base: "flex px-6 pb-6 pt-4 tablet:p-6 desktop:pb-10 flex-col items-center gap-2 selft-strech text-center ",
        title: "text-title-s tablet:text-title-m desktop:text-title-l",
        description: "text-body-m tablet:text-body-l",
        badge: "w-[76px] h-[76px] desktop:w-[120px] desktop:h-[120px]",
        "schar-badge":
          "w-[64px] h-[64px] desktop:w-[76px] desktop:h-[76px] overflow-hidden rounded-tl-xl",
      },
    },
  },
};
export { t as c };
