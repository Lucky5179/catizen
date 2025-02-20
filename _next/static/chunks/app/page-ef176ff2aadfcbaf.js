(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    4470: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 2071));
    },
    2071: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return $;
          },
        });
      var r = a(4232);
      a(9907);
      var l = a(6473),
        n = a(9543),
        i = a(9753),
        s = a(1126),
        o = a(6875),
        c = a(4029),
        d = a(3552);
      function m() {
        let e = (0, o.Z)(),
          t = (t) => {
            e.isScroll || e.setCurrentIndex(t);
          },
          [a, n] = (0, c.useState)("6px");
        return (
          (0, d.Z)(() => {
            let e = document.querySelector(".current-progress-bar-item");
            e && n(e.offsetTop + 6 + "px");
          }, [e.currentIndex]),
          (0, r.jsxs)("div", {
            id: "progressBar",
            className: (0, s.dh)(
              "fixed z-[99999] bottom-1/2 translate-y-1/2 transition-opacity duration-300\n    hidden md:block\n    right-10\n  ",
              e.pageLoading ? "opacity-0" : "opacity-100",
              e.isScroll && "cursor-not-allowed"
            ),
            children: [
              (0, r.jsx)("div", {
                id: "progressBarItems",
                className:
                  "rounded-full r-progress-bar-bg flex items-center justify-center   w-10 py-6   ",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col justify-between relative progress-bar-box   w-4 h-[251px]   ",
                  children: [
                    s.w0.map((a, l) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: (0, s.dh)(
                            "w-4 h-4 flex items-center justify-center",
                            l === e.currentIndex && "current-progress-bar-item",
                            e.isScroll ? "cursor-not-allowed" : "cursor-pointer"
                          ),
                          onClick: () => t(l),
                          children: (0, r.jsx)("div", {
                            className: (0, s.dh)(
                              "w-1.5 h-1.5 rounded-full bg-white transition-colors duration-500",
                              l < e.currentIndex
                                ? "bg-opacity-100"
                                : "bg-opacity-30"
                            ),
                          }),
                        },
                        a.id
                      )
                    ),
                    (0, r.jsx)(l.default, {
                      className:
                        "absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-w-none transition-all duration-500   w-5 h-5   ",
                      style: { top: a },
                      width: 20,
                      height: 20,
                      src: (0, s.wD)("progress_bar_cat.png"),
                      priority: !0,
                      loading: "eager",
                      alt: "",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                id: "progressBarItem",
                className: (0, s.dh)(
                  "mt-2.5 rounded-full r-progress-bar-bg flex items-center justify-center\n      w-10 h-10\n    ",
                  e.isScroll ? "cursor-not-allowed" : "cursor-pointer"
                ),
                onClick: () => {
                  e.isScroll || e.setScrollTopFlag(!e.scrollTopFlag);
                },
                children: (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 20 20",
                  fill: "none",
                  children: (0, r.jsx)("path", {
                    d: "M13.5413 12.5001L10.4416 9.40036C10.1976 9.15628 9.80183 9.15628 9.55775 9.40036L6.45801 12.5001M9.99969 18.3334V9.37508M13.333 4.16675H6.66634",
                    stroke: "white",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              }),
            ],
          })
        );
      }
      var u = a(7735),
        p = a(1562);
      function x(e) {
        let { data: t, globalData: a } = e,
          i = (0, o.Z)(),
          c = [
            {
              id: 1,
              img: (0, s.wD)("data_cat_1.png"),
              label: "Onchain Txs",
              value: t.onchainTxs,
            },
            {
              id: 2,
              img: (0, s.wD)("data_cat_2.png"),
              label: "Onchain Users",
              value: t.onchainUsers,
            },
            {
              id: 3,
              img: (0, s.wD)("data_cat_3.png"),
              label: "Total Catizens",
              value: t.botUser,
            },
            {
              id: 4,
              img: (0, s.wD)("data_cat_4.png"),
              label: "Daily Players",
              value: t.dailyUser,
            },
            {
              id: 5,
              img: (0, s.wD)("data_cat_5.png"),
              label: "Channel Subscribers",
              value: t.tgChannel,
            },
          ],
          m = () => {
            let e = u.ZP.timeline({ delay: 0.5 });
            e
              .to(".move-cat-1", { x: "50%", opacity: 0, duration: 0.3 })
              .to(".move-cat-2", { x: "50%", opacity: 0, duration: 0.3 })
              .to(".move-cat-3", { x: "50%", opacity: 0, duration: 0.3 })
              .to(".loading-button", { height: "100%", duration: 0.3 })
              .to(".loading-button-text", {
                opacity: 1,
                display: "block",
                duration: 0.1,
              }),
              document.querySelectorAll(".bounce-cat").forEach((t, a) => {
                e.fromTo(
                  t,
                  { y: "100%", opacity: 0 },
                  { y: -10, opacity: 100, duration: 0.5, ease: "power4.in" },
                  1 + 0.2 * a
                ).to(t, {
                  y: 0,
                  duration: 0.2,
                  ease: "power4.out",
                  zIndex: 20,
                });
              });
          };
        return (
          (0, d.Z)(() => {
            i.pageLoading || m();
          }, [i.pageLoading]),
          (0, r.jsxs)("div", {
            id: "frame1",
            className: (0, s.dh)(
              "absolute left-0 top-0 w-full h-full frame-item-1 z-[10000]\n    flex flex-col items-center\n  ",
              1 === i.frameCurrentIndex ? "frame-item-1-active" : ""
            ),
            style: {
              background: "url("
                .concat(n.Z.frameUrl)
                .concat(
                  a.folder,
                  "/Catizen_2k_0.jpg) no-repeat center center /cover"
                ),
            },
            children: [
              (0, r.jsx)(l.default, {
                className: "hidden",
                width: 1920,
                height: 1440,
                src: ""
                  .concat(n.Z.frameUrl)
                  .concat(a.folder, "/Catizen_2k_0.jpg"),
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex-grow flex flex-col items-center justify-center frame-item-1-header   md:pb-[15vh]   ",
                children: [
                  (0, r.jsx)(l.default, {
                    className:
                      "h-auto   w-[183px]   md:w-[200px]   lg:w-[210px]   xl:w-[228px]   ",
                    width: 228,
                    height: 112,
                    src: (0, s.wD)("catizen_logo.png"),
                    priority: !0,
                    loading: "eager",
                    alt: "",
                  }),
                  (0, r.jsx)("h1", {
                    className:
                      "text-white font-medium r-loading-header-text   mt-6 text-xl   md:mt-7 md:text-2xl   lg:text-[28px]   xl:mt-7.5 xl:text-[32px]   ",
                    children: "Play To Earn, Heal The World",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "frame-item-1-button relative   mt-20 w-[200px] h-11   md:mt-14 md:w-[220px] md:h-12   lg:mt-16 lg:w-[240px] lg:h-14   xl:mt-18 xl:w-[260px] xl:h-15   ",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "absolute left-0 right-0 h-0.5 top-px z-10",
                        children: [
                          (0, r.jsx)(l.default, {
                            className:
                              "absolute -left-2.5 bottom-0 h-auto block move-cat-1   w-9   ",
                            width: 35,
                            height: 29,
                            src: (0, s.wD)("loading_cat1.gif"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                          (0, r.jsx)(l.default, {
                            className: (0, s.dh)(
                              "absolute right-1/2 translate-x-1/2 bottom-0 h-auto block move-cat-2\n                w-12\n              ",
                              i.progress > 50 ? "opacity-100" : "opacity-0"
                            ),
                            width: 132,
                            height: 117,
                            src: (0, s.wD)("loading_cat2.gif"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                          (0, r.jsx)(l.default, {
                            className: (0, s.dh)(
                              "absolute -right-1.5 bottom-0 h-auto block move-cat-3\n              w-14\n              ",
                              i.progress > 90 ? "opacity-100" : "opacity-0"
                            ),
                            width: 57,
                            height: 45,
                            src: (0, s.wD)("loading_cat3.gif"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "absolute left-2.5 right-2.5 h-2.5 top-px",
                        children: [
                          (0, r.jsx)(l.default, {
                            className:
                              "absolute left-0 bottom-0 w-1/3 h-auto opacity-0 bounce-cat   ",
                            width: 80,
                            height: 48,
                            src: (0, s.wD)("loading_button_cat1.png"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                          (0, r.jsx)(l.default, {
                            className:
                              "absolute bottom-0 right-1/2 translate-x-1/2 w-1/3 h-auto opacity-0 bounce-cat   ",
                            width: 80,
                            height: 48,
                            src: (0, s.wD)("loading_button_cat2.png"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                          (0, r.jsx)(l.default, {
                            className:
                              "absolute right-0 bottom-0 w-1/3 h-auto opacity-0 bounce-cat   ",
                            width: 80,
                            height: 48,
                            src: (0, s.wD)("loading_button_cat3.png"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: (0, s.dh)(
                          "border border-white border-opacity-80 r-loading-btn-box-bg loading-button\n            duration-300\n            w-full\n            rounded-xl\n            md:rounded-2xl\n          ",
                          i.pageLoading
                            ? "\n              cursor-progress p-px h-2.5\n            "
                            : "\n              cursor-pointer h-full p-px md:p-[2px] lg:p-[3px]\n            "
                        ),
                        children: (0, r.jsx)("div", {
                          className:
                            "w-full h-full overflow-hidden   rounded-[10px]   md:rounded-xl   ",
                          children: (0, r.jsx)("div", {
                            className: (0, s.dh)(
                              "h-full flex items-center justify-center r-loading-btn transition-all duration-300",
                              "\n                  rounded-[10px]\n                  md:rounded-xl\n                "
                            ),
                            style: { width: i.progress + "%" },
                            onClick: () => {
                              i.setIsStart(!0), i.setCurrentIndex(1);
                            },
                            children: (0, r.jsx)("span", {
                              className: (0, s.dh)(
                                "font-semibold tracking-wider loading-button-text\n                  r-loading-btn-text-color\n                  hidden opacity-0\n                  text-sm\n                  md:text-base\n                  lg:text-lg\n                  xl:text-xl\n                "
                              ),
                              children: "Into Catizen World",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            //   (0, r.jsx)("div", {
            //     className: "w-full px-[5px] md:px-0",
            //     children: (0, r.jsx)("div", {
            //       className:
            //         "flex-none container mx-auto flex items-center justify-center backdrop-blur-[5px]   frame-item-1-main1   h-[136px] rounded-t-[20px] flex-wrap py-5 loading-footer-bg   md:h-20 md:rounded-t-[26px] md:flex-nowrap md:py-0 md:loading-footer-bg-pc   lg:h-[90px] lg:rounded-t-[28px]   xl:h-25 xl:rounded-t-[30px]   ",
            //       style: {
            //         "--cat-bg": "url(".concat(
            //           (0, s.wD)("loading_cat_bg.png"),
            //           ")"
            //         ),
            //         "--cat-bg-2": "url(".concat(
            //           (0, s.wD)("loading_cat_bg.png"),
            //           ")"
            //         ),
            //       },
            //       children: c.map((e) =>
            //         (0, r.jsxs)(
            //           "div",
            //           {
            //             className:
            //               "flex flex-col items-center justify-center   w-1/3   md:flex-1 md:w-auto md:h-full   ",
            //             children: [
            //               (0, r.jsx)("h1", {
            //                 className:
            //                   "font-semibold tracking-2 capitalize text-[#FF5C00] !leading-1.2   text-lg   md:text-lg   lg:text-xl   xl:text-2xl   ",
            //                 children: e.value,
            //               }),
            //               (0, r.jsx)("h2", {
            //                 className:
            //                   "text-[#717171] tracking-wider !leading-1   mt-[3px] text-[10px]   md:mt-1 md:text-xs   lg:mt-[5px] lg:text-sm   ",
            //                 children: e.label,
            //               }),
            //             ],
            //           },
            //           e.id
            //         )
            //       ),
            //     }),
            //   }),
            ],
          })
        );
      }
      function g() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame2",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item\n  ",
            2 === e.frameCurrentIndex ? "frame-item-active" : ""
          ),
        });
      }
      function h() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame3",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item\n    flex items-center\n    pl-[140px]\n  ",
            3 === e.frameCurrentIndex ? "frame-item-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "relative z-10 r-frame-card-bg frame-item-card   w-[380px] rounded-[30px] p-10   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-[160px] top-[-60px] right-0   ",
                src: (0, s.wD)("frame3_icon.png"),
                width: 160,
                height: 160,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "uppercase font-semibold r-frame-3-title-bg !leading-1.2   text-2xl   ",
                children: "CATIZEN WORLD",
              }),
              (0, r.jsx)("div", {
                className: "w-full h-0.5 bg-black bg-opacity-5   my-7.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col text-[#4D4A48] !leading-1.2   gap-5   ",
                children: [
                  {
                    id: 1,
                    title: "Mini-Games",
                    intro: "A cat caf\xe9-themed mini-game adventure",
                  },
                  {
                    id: 3,
                    title: "Multichain",
                    intro:
                      "Catizen is a unique, cat-themed social entertainment experience on Telegram, blending playful interactions with the power of the Ethereum Blockchain. As a revolutionary gaming bot, Catizen not only simplifies Web3 access but also makes mobile payments seamless, transforming the way users engage with decentralized technologies.",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px]",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsxs)("div", {
                className: "flex flex-col text-white   mt-14 gap-4   ",
                children: [
                  (0, r.jsxs)("a", {
                    className:
                      "w-full flex items-center justify-center gap-2.5 r-frame-3-btn-bg cursor-pointer   h-12.5 rounded-2xl   ",
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x96085475215a18Df64c9A25d522f440DF6d2f6bC&chain=mainnet",
                    target: "_blank",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
                        children: "BUY $CATI",
                      }),
                      // (0, r.jsx)(l.default, {
                      //   className: "w-auto   h-6   ",
                      //   src: (0, s.wD)("mantle_logo.png"),
                      //   width: 108,
                      //   height: 24,
                      //   priority: !0,
                      //   loading: "eager",
                      //   alt: "",
                      // }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function f() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame4",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item\n    flex items-center justify-end\n    pr-[140px]\n  ",
            4 === e.frameCurrentIndex ? "frame-item-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "r-frame-card-bg relative frame-item-card   w-[380px] rounded-[30px] p-10   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-[160px] top-[-60px] right-0   ",
                src: (0, s.wD)("frame4_icon.png"),
                width: 160,
                height: 160,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "uppercase font-semibold r-frame-4-title-bg !leading-1.2   text-2xl   ",
                children: "GAME CENTER",
              }),
              (0, r.jsx)("div", {
                className: "w-full h-0.5 bg-black bg-opacity-5   my-7.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col text-[#4D4A48] !leading-1.2   gap-5   ",
                children: [
                  {
                    id: 1,
                    title: "Top-Quality Games",
                    intro: "Best picks from many choices",
                  },
                  {
                    id: 2,
                    title: "Game SDK",
                    intro: "Empowering game developers to join gamefi",
                  },
                  {
                    id: 3,
                    title: "Large Game Library",
                    intro: "Over 50 games signed",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px]",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: "w-full text-white   mt-16   ",
                children: (0, r.jsx)("div", {
                  
                  className:
                    "cursor-pointer w-full flex items-center justify-center r-frame-4-btn-bg cursor-pointer   h-12.5 rounded-2xl   ",
                  children: (0, r.jsx)("span", {
                    className:
                      "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
                    children: "Coming Soon",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function w() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame5",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item\n    flex items-center\n    pl-[140px]\n  ",
            5 === e.frameCurrentIndex ? "frame-item-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "relative r-frame-card-bg frame-item-card   w-[380px] rounded-[30px] p-10   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-[160px] top-[-60px] right-0   ",
                src: (0, s.wD)("frame5_icon.png"),
                width: 160,
                height: 160,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "uppercase font-semibold r-frame-5-title-bg !leading-1.2   text-2xl   ",
                children: "OPEN TASK CENTER",
              }),
              (0, r.jsx)("div", {
                className: "w-full h-0.5 bg-black bg-opacity-5   my-7.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col text-[#4D4A48] !leading-1.2   gap-5   ",
                children: [
                  {
                    id: 1,
                    title: "User Acquisition",
                    intro:
                      "Jumpstarting projects with targeted seed user acquisition",
                  },
                  {
                    id: 2,
                    title: "Task Rewards",
                    intro:
                      "Guiding users to earn airdrops and rewards through task completion",
                  },
                  {
                    id: 3,
                    title: "Expanding $CATI Utility",
                    intro:
                      "Expanding $CATI use cases to enhance its intrinsic value",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px]",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
            //   (0, r.jsx)("div", {
            //     className: "w-full text-white   mt-12.5   ",
            //     children: (0, r.jsx)("a", {
            //       href: "https://docs.google.com/forms/d/e/1FAIpQLSdHGS_yNArIzVJd-r3lILAga-1i-Xm4HfOINfX-a9xYXNM7vQ/viewform",
            //       target: "_blank",
            //       rel: "noreferrer",
            //       className:
            //         "w-full flex items-center justify-center r-frame-5-btn-bg cursor-pointer   h-12.5 rounded-2xl   ",
            //       children: (0, r.jsx)("span", {
            //         className:
            //           "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
            //         children: "apply",
            //       }),
            //     }),
            //   }),
            ],
          }),
        });
      }
      function b() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame6",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item\n    flex items-center justify-end\n    pr-[140px]\n  ",
            6 === e.frameCurrentIndex ? "frame-item-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "relative r-frame-card-bg frame-item-card   w-[380px] rounded-[30px] p-10   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-[160px] top-[-60px] right-0   ",
                src: (0, s.wD)("frame6_icon.png"),
                width: 160,
                height: 160,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "uppercase font-semibold r-frame-6-title-bg !leading-1.2   text-2xl   ",
                children: "Tokenomics",
              }),
              (0, r.jsx)("div", {
                className: "w-full h-0.5 bg-black bg-opacity-5   my-7.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col text-[#4D4A48] !leading-1.2   gap-5   ",
                children: [
                  {
                    id: 1,
                    title: "Total Supply",
                    intro:
                      "1,000,000,000",
                  },
                  {
                    id: 2,
                    title: "Ownership",
                    intro:
                      "Renounced",
                  },
                  {
                    id: 3,
                    title: "LP Tokens",
                    intro:
                      "All are burnt",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px]",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: "w-full text-white   mt-18   ",
                children: (0, r.jsx)("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x96085475215a18Df64c9A25d522f440DF6d2f6bC&chain=mainnet",
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "w-full flex items-center justify-center r-frame-6-btn-bg cursor-pointer   h-12.5 rounded-2xl   ",
                  children: (0, r.jsx)("span", {
                    className:
                      "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
                    children: "BUY NOW",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function j() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame7",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item\n    flex items-center\n    pl-[140px]\n  ",
            7 === e.frameCurrentIndex ? "frame-item-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "relative r-frame-card-bg frame-item-card   w-[380px] rounded-[30px] p-10   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-[160px] top-[-60px] right-0   ",
                src: (0, s.wD)("frame7_icon.png"),
                width: 160,
                height: 160,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "uppercase font-semibold r-frame-7-title-bg !leading-1.2   text-2xl   ",
                children: "CATIZEN AI",
              }),
              (0, r.jsx)("div", {
                className: "w-full h-0.5 bg-black bg-opacity-5   my-7.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex flex-col text-[#4D4A48] !leading-1.2   gap-5   ",
                children: [
                  {
                    id: 1,
                    title: "Heal The World",
                    intro: "Your adorable kitty, always by your side",
                  },
                  {
                    id: 2,
                    title: "Unique AI Kitty",
                    intro:
                      "Embrace your personal AI kitty as you feed, train, and bond with a digital companion that's uniquely yours",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px]",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      var v = a(3223),
        y = a.n(v);
      let N = n.Z.scrollInterval,
        C = n.Z.scrollSpeed,
        _ = 0,
        I = 0,
        k = 0;
      function D(e) {
        let { smootherRef: t, globalData: a } = e,
          l = (0, o.Z)(),
          i = (0, c.useRef)(!0),
          m = (0, c.useRef)(!1),
          u = (0, c.useRef)([]),
          v = (0, c.useRef)(!0),
          D = (0, c.useRef)(!1),
          S = (0, c.useRef)(0),
          Z = (0, c.useRef)(!1);
        (0, d.Z)(() => {
          i.current = l.pageLoading;
        }, [l.pageLoading]),
          (0, d.Z)(() => {
            m.current = l.isStart;
          }, [l.isStart]),
          (0, d.Z)(() => {
            G(l.currentIndex);
          }, [l.currentIndex]),
          (0, d.Z)(() => {
            q();
          }, [l.scrollTopFlag]);
        let E = (0, c.useRef)(null),
          A = (e) => {
            let t, a, r, l;
            if (!D.current || !v.current) return;
            E.current.clearRect(0, 0, innerWidth, innerHeight);
            let n = u.current[e],
              i = innerWidth / innerHeight;
            (null == n ? void 0 : n.width) / (null == n ? void 0 : n.height) <=
            i
              ? ((l = (r = n.width) / i), (t = 0), (a = (n.height - l) / 2))
              : ((r = (l = n.height) * i), (t = (n.width - r) / 2), (a = 0)),
              E.current.drawImage(n, t, a, r, l, 0, 0, innerWidth, innerHeight);
          },
          L = () => {
            let e = document.getElementById("canvasBg");
            (E.current = e.getContext("2d")),
              (e.width = innerWidth),
              (e.height = innerHeight),
              A(0),
              p.Z.create({
                scrub: 0,
                pin: !1,
                trigger: "#section1",
                start: "top top",
                end: "bottom top",
                onEnter: () => {
                  console.log("top onEnter");
                },
                onEnterBack: () => {
                  console.log("top onEnterBack");
                },
                onLeave: () => {
                  console.log("top onLeave");
                },
                onLeaveBack: async () => {
                  Z.current ||
                    (console.log("top onLeaveBack"),
                    (v.current = !0),
                    t.current.paused(!0),
                    (D.current = !0),
                    l.setIsScroll(!1),
                    await (0, s._v)(1e3),
                    (D.current = !1),
                    l.setIsScroll(!1));
                },
              });
          },
          z = (e) => {
            let t = "Catizen_2k_".concat(e, ".").concat(a.format);
            return "".concat(n.Z.frameUrl).concat(a.folder, "/").concat(t);
          },
          U = async (e, t) =>
            new Promise((a) => {
              let r = [],
                n = t - e,
                i = 0,
                s = 0;
              for (let o = e; o < t; o++) {
                let e = new Image();
                r.push(e),
                  (e.src = z(o)),
                  (e.onload = () => {
                    0 === o && l.setIsReady(!0),
                      ++i === n
                        ? (l.setProgress(100),
                          l.setPageLoading(!1),
                          l.setIsStart(!0),
                          a(r))
                        : ((s += 100 / n), l.setProgress(Math.floor(s)));
                  }),
                  (e.onerror = (e) => {
                    ++i === n
                      ? (l.setProgress(100),
                        l.setPageLoading(!1),
                        l.setIsStart(!0),
                        a(r))
                      : ((s += 100 / n), l.setProgress(Math.floor(s)));
                  });
              }
            }),
          T = (e, t) => {
            let a = [];
            for (let r = e; r <= t; r++) {
              let e = new Image();
              (e.src = z(r)), a.push(e);
            }
            return a;
          },
          P = async () => [...(await U(0, 500)), ...T(500, 570)],
          B = async () => {
            let e = new Date();
            (u.current = await P()),
              console.log("time", (new Date() - e) / 1e3 + "s"),
              L();
          };
        (0, c.useEffect)(() => {
          B();
          let e = document.querySelector("#smooth-content");
          return (
            e.addEventListener("mousewheel", O, {
              passive: !1,
              useCapture: !1,
            }),
            e.addEventListener("keydown", K),
            Y(),
            () => {
              e.removeEventListener("mousewheel", O),
                e.removeEventListener("keydown", K);
            }
          );
        }, []);
        let F = (e, t) =>
            new Promise((a, r) => {
              let l = e < t ? 1 : -1,
                n = e,
                i = 0,
                s = () => {
                  if (
                    ++i >= N &&
                    ((i = 0),
                    (n += l * C),
                    1 === l && n > t && (n = t),
                    -1 === l && n < t && (n = t),
                    A(n),
                    n === t)
                  ) {
                    a();
                    return;
                  }
                  requestAnimationFrame(s);
                };
              s();
            }),
          M = async () => {
            let e = document.getElementById("videoBg");
            return (
              !e ||
              new Promise((t, a) => {
                (e.loop = !1),
                  (e.playbackRate = 5),
                  e.addEventListener("ended", function () {
                    t();
                  });
              })
            );
          },
          R = async () => {
            if (0 === S.current) {
              (D.current = !1), l.setIsScroll(!1);
              return;
            }
            S.current--,
              console.log("currentIndex", S.current),
              l.setCurrentIndex(S.current),
              await M(),
              l.hiddenFrame();
            let e = 1 * s.w0[S.current + 1].point,
              t = 1 * s.w0[S.current].point;
            console.log("scrollValue", e, t),
              await F(e, t),
              l.showFrame(S.current),
              await (0, s._v)(700),
              (D.current = !1),
              l.setIsScroll(!1);
          },
          q = async () => {
            0 !== S.current &&
              (t.current.paused(!0),
              (v.current = !0),
              (Z.current = !0),
              t.current.scrollTo(0, !0),
              await G(0),
              (Z.current = !1));
          },
          G = async (e) => {
            if (e === S.current) return;
            t.current.paused(!0),
              (v.current = !0),
              (D.current = !0),
              l.setIsScroll(!0);
            let a = S.current;
            (S.current = e), await M(), l.hiddenFrame(), l.setCurrentIndex(e);
            let r = 1 * s.w0[a].point,
              n = 1 * s.w0[e].point;
            console.log("scrollValue", r, n),
              await F(r, n),
              l.showFrame(S.current),
              await (0, s._v)(700),
              (D.current = !1),
              l.setIsScroll(!1);
          },
          H = async () => {
            if (6 === S.current) {
              (D.current = !1),
                l.setIsScroll(!1),
                (v.current = !1),
                t.current.paused(!1);
              return;
            }
            S.current++,
              console.log("currentIndex", S.current),
              l.setCurrentIndex(S.current),
              await M(),
              l.hiddenFrame();
            let e = 1 * s.w0[S.current - 1].point,
              a = 1 * s.w0[S.current].point;
            console.log("scrollValue", e, a),
              await F(e, a),
              l.showFrame(S.current),
              await (0, s._v)(700),
              (D.current = !1),
              l.setIsScroll(!1);
          },
          O = y()(async (e) => {
            !i.current &&
              m.current &&
              v.current &&
              !D.current &&
              ((D.current = !0),
              l.setIsScroll(!0),
              e.wheelDelta > 0 ? await R() : await H());
          }, 200),
          W = () => {
            (_ = 0), (I = 0), (k = 0);
          },
          Y = () => {
            let e = document.querySelector("#smooth-content");
            e.addEventListener(
              "touchstart",
              function (e) {
                v.current && (_ = e.touches[0].pageY);
              },
              { passive: !1, useCapture: !1 }
            ),
              e.addEventListener(
                "touchmove",
                function (e) {
                  v.current && ((I = e.touches[0].pageY), (k = _ - I));
                },
                { passive: !1, useCapture: !1 }
              ),
              e.addEventListener("touchend", async function (e) {
                !i.current &&
                  m.current &&
                  v.current &&
                  !D.current &&
                  ((D.current = !0),
                  l.setIsScroll(!0),
                  Math.abs(k) > 80 && (k > 0 ? await H() : await R(), W()));
              });
          },
          K = async (e) => {
            !i.current &&
              m.current &&
              v.current &&
              !D.current &&
              ((D.current = !0),
              l.setIsScroll(!0),
              "ArrowDown" === e.key
                ? await H()
                : "ArrowUp" === e.key && (await R()));
          },
          V = (0, c.useMemo)(
            () =>
              2 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_200.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-01.mp4"),
                  }
                : 3 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_270.jpg"),
                    src: "".concat(n.Z.frameUrl, "/1.mp4"),
                  }
                : 4 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_340.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-03.mp4"),
                  }
                : 5 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_410.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-04.mp4"),
                  }
                : 6 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_500.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-05.mp4"),
                  }
                : 7 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_570.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-06.mp4"),
                  }
                : { poster: "", src: "" },
            [l.frameCurrentIndex, a.folder]
          );
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "w-screen r-h-screen relative",
            id: "section1",
            children: [
              (0, r.jsx)("canvas", {
                className: "absolute left-0 top-0 w-full h-full",
                id: "canvasBg",
              }),
              [2, 3, 4, 5, 6, 7].includes(l.frameCurrentIndex) &&
                (0, r.jsx)("video", {
                  id: "videoBg",
                  className:
                    "absolute left-0 top-0 w-full h-full z-10 object-cover ",
                  poster: V.poster,
                  preload: "auto",
                  "x5-video-player-type": "h5",
                  "x5-playsinline": "true",
                  "webkit-playsinline": "true",
                  playsInline: !0,
                  muted: !0,
                  autoPlay: !0,
                  loop: !0,
                  children: (0, r.jsx)("source", {
                    src: V.src,
                    type: "video/mp4",
                  }),
                }),
              (0, r.jsxs)("div", {
                className: "absolute left-0 top-0 w-full h-full z-10",
                children: [
                  (0, r.jsx)(x, { data: a.data, globalData: a }),
                  (0, r.jsx)(g, {}),
                  (0, r.jsx)(h, {}),
                  (0, r.jsx)(f, {}),
                  (0, r.jsx)(w, {}),
                  (0, r.jsx)(b, {}),
                  (0, r.jsx)(j, {}),
                ],
              }),
            ],
          }),
        });
      }
      function S(e) {
        let { data: t, globalData: a, start: i } = e,
          c = (0, o.Z)(),
          m = [
            {
              id: 1,
              img: (0, s.wD)("data_cat_1.png"),
              label: "Onchain Txs",
              value: t.onchainTxs,
            },
            {
              id: 2,
              img: (0, s.wD)("data_cat_2.png"),
              label: "Onchain Users",
              value: t.onchainUsers,
            },
            {
              id: 3,
              img: (0, s.wD)("data_cat_3.png"),
              label: "Total Catizens",
              value: t.botUser,
            },
            {
              id: 4,
              img: (0, s.wD)("data_cat_4.png"),
              label: "Daily Players",
              value: t.dailyUser,
            },
            {
              id: 5,
              img: (0, s.wD)("data_cat_5.png"),
              label: "Channel Subscribers",
              value: t.tgChannel,
            },
          ],
          p = async () => {
            await i();
          },
          x = () => {
            let e = document.querySelectorAll(".bounce-cat");
            console.log("show cat");
            let t = u.ZP.timeline({ delay: 0 });
            console.log("show cat 2"),
              e.forEach((e, a) => {
                t.fromTo(
                  e,
                  { y: "100%", opacity: 0 },
                  { y: -10, opacity: 100, duration: 0.3, ease: "power4.in" },
                  1 + 0.2 * a
                ).to(e, {
                  y: 0,
                  duration: 0.2,
                  ease: "power4.out",
                  zIndex: 20,
                });
              });
          };
        return (
          (0, d.Z)(() => {
            c.pageLoading || x();
          }, [c.pageLoading]),
          (0, r.jsxs)("div", {
            className: (0, s.dh)(
              "absolute left-0 top-0 w-full h-full z-20\n    flex flex-col frame-item-1-m\n    ",
              0 === c.currentIndex && "frame-item-1-m-active-1",
              1 === c.currentIndex && "frame-item-1-m-active-2"
            ),
            children: [
              (0, r.jsx)("div", {
                className: (0, s.dh)(
                  "w-full aspect-[390/360]",
                  c.isStart ? "opacity-0" : "opacity-100"
                ),
                children: (0, r.jsx)(l.default, {
                  className: "w-full h-full object-cover",
                  width: 400,
                  height: 300,
                  src: ""
                    .concat(n.Z.frameUrl)
                    .concat(a.folder, "/Catizen_2k_0.jpg"),
                  priority: !0,
                  loading: "eager",
                  alt: "",
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "absolute left-0 top-0 w-full h-full flex flex-col items-center",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex-grow flex flex-col items-center justify-center relative   md:pb-[15vh]   ",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "frame-item-1-header   flex flex-col items-center justify-center   ",
                        children: [
                          (0, r.jsx)(l.default, {
                            className:
                              " h-auto   w-[183px]   md:w-[200px]   lg:w-[210px]   xl:w-[228px]   ",
                            width: 228,
                            height: 112,
                            src: (0, s.wD)("catizen_logo.png"),
                            priority: !0,
                            loading: "eager",
                            alt: "",
                          }),
                          (0, r.jsx)("h1", {
                            className:
                              "text-white font-medium r-loading-header-text   mt-6 text-xl   md:mt-7 md:text-2xl   lg:text-[28px]   xl:mt-7.5 xl:text-[32px]   ",
                            children: "Play To Earn, Heal The World",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "frame-item-1-button relative   mt-20 w-[200px] h-11   md:mt-14 md:w-[220px] md:h-12   lg:mt-16 lg:w-[240px] lg:h-14   xl:mt-18 xl:w-[260px] xl:h-15   ",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "absolute left-2.5 right-2.5 h-1.5 top-px pointer-events-none",
                            children: [
                              (0, r.jsx)(l.default, {
                                className:
                                  "absolute left-0 bottom-0 w-1/3 h-auto opacity-0 bounce-cat   ",
                                width: 80,
                                height: 48,
                                src: (0, s.wD)("loading_button_cat1.png"),
                                priority: !0,
                                loading: "eager",
                                alt: "",
                              }),
                              (0, r.jsx)(l.default, {
                                className:
                                  "absolute bottom-0 right-1/2 translate-x-1/2 w-1/3 h-auto opacity-0 bounce-cat   ",
                                width: 80,
                                height: 48,
                                src: (0, s.wD)("loading_button_cat2.png"),
                                priority: !0,
                                loading: "eager",
                                alt: "",
                              }),
                              (0, r.jsx)(l.default, {
                                className:
                                  "absolute right-0 bottom-0 w-1/3 h-auto opacity-0 bounce-cat   ",
                                width: 80,
                                height: 48,
                                src: (0, s.wD)("loading_button_cat3.png"),
                                priority: !0,
                                loading: "eager",
                                alt: "",
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: (0, s.dh)(
                              "border border-white border-opacity-80 r-loading-btn-box-bg\n            transition-all duration-300\n            w-full\n            rounded-xl\n            md:rounded-2xl\n          ",
                              c.pageLoading
                                ? "\n              cursor-progress h-2.5 p-px\n            "
                                : "\n              cursor-pointer h-full p-px md:p-[2px] lg:p-[3px]\n            "
                            ),
                            children: (0, r.jsx)("div", {
                              className:
                                "w-full h-full overflow-hidden   rounded-[10px]   md:rounded-xl   ",
                              children: (0, r.jsx)("div", {
                                className: (0, s.dh)(
                                  "h-full flex items-center justify-center r-loading-btn transition-all duration-300",
                                  "\n                  rounded-[10px]\n                  md:rounded-xl\n                "
                                ),
                                style: { width: c.progress + "%" },
                                onClick: p,
                                children: (0, r.jsx)("span", {
                                  className: (0, s.dh)(
                                    "font-semibold tracking-wider\n                  transition-opacity delay-200 r-loading-btn-text-color\n                  text-sm\n                  md:text-base\n                  lg:text-lg\n                  xl:text-xl\n                ",
                                    c.pageLoading ? "hidden" : "block"
                                  ),
                                  children: "Into Catizen World",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "frame-item-1-swipe absolute left-0 bottom-5 w-full flex items-center justify-center gap-1.5",
                        children: [
                          (0, r.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "none",
                            children: [
                              (0, r.jsx)("path", {
                                d: "M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32121C0.00303299 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67878 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73784 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM7 12.6C5.89243 12.6 4.80972 12.2716 3.88881 11.6562C2.96789 11.0409 2.25013 10.1663 1.82628 9.14303C1.40243 8.11976 1.29153 6.99379 1.50761 5.90749C1.72368 4.8212 2.25703 3.82337 3.0402 3.0402C3.82338 2.25703 4.8212 1.72368 5.9075 1.5076C6.99379 1.29153 8.11976 1.40242 9.14303 1.82627C10.1663 2.25012 11.0409 2.96789 11.6562 3.88881C12.2716 4.80972 12.6 5.89242 12.6 7C12.6 8.48521 12.01 9.90959 10.9598 10.9598C9.9096 12.01 8.48521 12.6 7 12.6Z",
                                fill: "white",
                              }),
                              (0, r.jsx)("path", {
                                d: "M7.49693 5.10721C7.43186 5.0416 7.35444 4.98952 7.26914 4.95398C7.18384 4.91844 7.09234 4.90015 6.99993 4.90015C6.90753 4.90015 6.81603 4.91844 6.73073 4.95398C6.64543 4.98952 6.56801 5.0416 6.50293 5.10721L3.70293 7.90721C3.63767 7.97247 3.58589 8.04995 3.55057 8.13523C3.51525 8.22051 3.49707 8.3119 3.49707 8.4042C3.49707 8.49651 3.51525 8.5879 3.55057 8.67318C3.58589 8.75845 3.63767 8.83594 3.70293 8.9012C3.83475 9.03302 4.01352 9.10707 4.19993 9.10707C4.29224 9.10707 4.38363 9.08889 4.46891 9.05357C4.55418 9.01824 4.63167 8.96647 4.69693 8.9012L6.99993 6.5912L9.30293 8.9012C9.36801 8.96681 9.44543 9.01889 9.53073 9.05443C9.61603 9.08997 9.70752 9.10826 9.79993 9.10826C9.89234 9.10826 9.98383 9.08997 10.0691 9.05443C10.1544 9.01889 10.2319 8.96681 10.2969 8.9012C10.3625 8.83613 10.4146 8.75871 10.4502 8.67341C10.4857 8.58811 10.504 8.49661 10.504 8.4042C10.504 8.3118 10.4857 8.2203 10.4502 8.135C10.4146 8.0497 10.3625 7.97228 10.2969 7.90721L7.49693 5.10721Z",
                                fill: "white",
                              }),
                            ],
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-sm text-white font-medium uppercase   ",
                            children: "Swipe Up",
                          }),
                        ],
                      }),
                    ],
                  }),
                //   (0, r.jsx)("div", {
                //     className: "frame-item-1-footer w-full px-[5px] md:px-0",
                //     children: (0, r.jsx)("div", {
                //       className:
                //         "flex-none container mx-auto flex items-center justify-center backdrop-blur-[5px]   h-[136px] rounded-t-[20px] flex-wrap py-5 loading-footer-bg   md:h-20 md:rounded-t-[26px] md:flex-nowrap md:py-0 md:loading-footer-bg-pc   lg:h-[90px] lg:rounded-t-[28px]   xl:h-25 xl:rounded-t-[30px]   ",
                //       style: {
                //         "--cat-bg": "url(".concat(
                //           (0, s.wD)("loading_cat_bg.png"),
                //           ")"
                //         ),
                //         "--cat-bg-2": "url(".concat(
                //           (0, s.wD)("loading_cat_bg.png"),
                //           ")"
                //         ),
                //       },
                //       children: m.map((e) =>
                //         (0, r.jsxs)(
                //           "div",
                //           {
                //             className:
                //               "flex flex-col items-center justify-center   w-1/3   md:flex-1 md:w-auto md:h-full   ",
                //             children: [
                //               (0, r.jsx)("h1", {
                //                 className:
                //                   "font-semibold tracking-2 capitalize text-[#FF5C00] !leading-1.2   text-lg   md:text-lg   lg:text-xl   xl:text-2xl   ",
                //                 children: e.value,
                //               }),
                //               (0, r.jsx)("h2", {
                //                 className:
                //                   "text-[#717171] tracking-wider !leading-1   mt-[3px] text-[10px]   md:mt-1 md:text-xs   lg:mt-[5px] lg:text-sm   ",
                //                 children: e.label,
                //               }),
                //             ],
                //           },
                //           e.id
                //         )
                //       ),
                //     }),
                //   }),
                ],
              }),
            ],
          })
        );
      }
      function Z() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame3",
          className: (0, s.dh)(
            "absolute left-0 top-0 w-full h-full frame-item-m\n    px-5\n  ",
            3 === e.frameCurrentIndex ? "frame-item-m-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "r-frame-m-card-bg frame-item-card relative   w-full h-full flex flex-col   rounded-[18px] p-5 pt-3   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-30 left-0 top-[-72px]   ",
                src: (0, s.wD)("frame3_icon.png"),
                width: 120,
                height: 120,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "flex-none uppercase font-semibold r-frame-3-title-bg !leading-1.2   text-xl text-right   ",
                children: "CATIZEN WORLD",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-none w-full h-0.5 bg-black bg-opacity-5   my-2.5   ",
              }),
              (0, r.jsx)("div", {
                className: "flex-grow flex flex-col text-[#4D4A48]   gap-4   ",
                children: [
                  {
                    id: 1,
                    title: "Mini-Games",
                    intro: "A cat caf\xe9-themed mini-game adventure",
                  },
                  {
                    id: 3,
                    title: "Multichain",
                    intro:
                      "Catizen is a unique, cat-themed social entertainment experience on Telegram, blending playful interactions with the power of the Ethereum Blockchain. As a revolutionary gaming bot, Catizen not only simplifies Web3 access but also makes mobile payments seamless, transforming the way users engage with decentralized technologies.",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium text-base leading-1.2",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px] text-xs leading-1.2",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsxs)("div", {
                className: "flex-none flex text-white   gap-2.5   ",
                children: [
            
                  (0, r.jsxs)("a", {
                    className:
                      "w-full flex items-center justify-center gap-1.5 r-frame-3-btn-bg cursor-pointer   h-10 rounded-lg   ",
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x96085475215a18Df64c9A25d522f440DF6d2f6bC&chain=mainnet",
                    target: "_blank",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-xs   ",
                        children: "BUY $CATI",
                      }),
                    //   (0, r.jsx)(l.default, {
                    //     className: "w-auto   h-4   ",
                    //     src: (0, s.wD)("mantle_logo.png"),
                    //     width: 108,
                    //     height: 24,
                    //     priority: !0,
                    //     loading: "eager",
                    //     alt: "",
                    //   }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function E() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame4",
          className: (0, s.dh)(
            "absolute left-0 top-0  w-full h-full frame-item-m\n    px-5\n  ",
            4 === e.frameCurrentIndex ? "frame-item-m-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "r-frame-m-card-bg frame-item-card relative   w-full h-full flex flex-col   rounded-[18px] p-5 pt-3   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-30 right-0 top-[-72px]   ",
                src: (0, s.wD)("frame4_icon.png"),
                width: 120,
                height: 120,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "flex-none uppercase font-semibold r-frame-4-title-bg !leading-1.2   text-xl   ",
                children: "GAME CENTER",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-none w-full h-0.5 bg-black bg-opacity-5   my-2.5   ",
              }),
              (0, r.jsx)("div", {
                className: "flex-grow flex flex-col text-[#4D4A48]   gap-4   ",
                children: [
                  {
                    id: 1,
                    title: "Top-Quality Games",
                    intro: "Best picks from many choices",
                  },
                  {
                    id: 2,
                    title: "Game SDK",
                    intro: "Empowering game developers to join gamefi",
                  },
                  {
                    id: 3,
                    title: "Large Game Library",
                    intro: "Over 50 games signed",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium text-base leading-1.2",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px] text-xs leading-1.2",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: "flex-none w-full text-white",
                children: (0, r.jsx)("a", {
                  href: "https://docs.google.com/forms/d/e/1FAIpQLSeVYnlpHwquprEFBPAx2KUKXTd4JtH0LCIuq1TGV95qG3UxqA/viewform",
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "w-full flex items-center justify-center r-frame-4-btn-bg cursor-pointer   h-10 rounded-lg   ",
                  children: (0, r.jsx)("span", {
                    className:
                      "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
                    children: "apply",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function A() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame5",
          className: (0, s.dh)(
            "absolute left-0 top-0  w-full h-full frame-item-m\n    px-5\n  ",
            5 === e.frameCurrentIndex ? "frame-item-m-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "r-frame-m-card-bg frame-item-card relative   w-full h-full flex flex-col   rounded-[18px] p-5 pt-3   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-30 left-0 top-[-72px]   ",
                src: (0, s.wD)("frame5_icon.png"),
                width: 120,
                height: 120,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "flex-none uppercase font-semibold r-frame-5-title-bg !leading-1.2   text-xl text-right   ",
                children: "OPEN TASK CENTER",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-none w-full h-0.5 bg-black bg-opacity-5   my-2.5   ",
              }),
              (0, r.jsx)("div", {
                className: "flex-grow flex flex-col text-[#4D4A48]   gap-4   ",
                children: [
                  {
                    id: 1,
                    title: "User Acquisition",
                    intro:
                      "Jumpstarting projects with targeted seed user acquisition",
                  },
                  {
                    id: 2,
                    title: "Task Rewards",
                    intro:
                      "Guiding users to earn airdrops and rewards through task completion",
                  },
                  {
                    id: 3,
                    title: "Expanding $CATI Utility",
                    intro:
                      "Expanding $CATI use cases to enhance its intrinsic value",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium text-base leading-1.2",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px] text-xs leading-1.2",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: "flex-none w-full text-white",
                children: (0, r.jsx)("a", {
                  href: "https://docs.google.com/forms/d/e/1FAIpQLSdHGS_yNArIzVJd-r3lILAga-1i-Xm4HfOINfX-a9xYXNM7vQ/viewform",
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "w-full flex items-center justify-center r-frame-5-btn-bg cursor-pointer   h-10 rounded-lg   ",
                  children: (0, r.jsx)("span", {
                    className:
                      "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
                    children: "apply",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function L() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame6",
          className: (0, s.dh)(
            "absolute left-0 top-0  w-full h-full frame-item-m\n    px-5\n  ",
            6 === e.frameCurrentIndex ? "frame-item-m-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "r-frame-m-card-bg frame-item-card relative   w-full h-full flex flex-col   rounded-[18px] p-5 pt-3   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-30 right-0 top-[-72px]   ",
                src: (0, s.wD)("frame6_icon.png"),
                width: 120,
                height: 120,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "flex-none uppercase font-semibold r-frame-6-title-bg !leading-1.2   text-xl   ",
                children: "LAUNCH POOL",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-none w-full h-0.5 bg-black bg-opacity-5   my-2.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-grow flex flex-col text-[#4D4A48] !leading-1.2   gap-4   ",
                children: [
                  {
                    id: 1,
                    title: "Safe Staking",
                    intro:
                      "$CATI holders can earn yield without impermanent loss",
                  },
                  {
                    id: 2,
                    title: "Premium Project Launches",
                    intro:
                      "Boost premium projects with high-quality users. driving robust growth",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium text-base leading-1.2",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px] text-xs leading-1.2",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, r.jsx)("div", {
                className: "flex-none w-full text-white",
                children: (0, r.jsx)("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x96085475215a18Df64c9A25d522f440DF6d2f6bC&chain=mainnet",
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "w-full flex items-center justify-center r-frame-6-btn-bg cursor-pointer   h-10 rounded-lg   ",
                  children: (0, r.jsx)("span", {
                    className:
                      "font-semibold uppercase tracking-wider r-frame-btn-text-color   text-lg   ",
                    children: "BUY NOW",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function z() {
        let e = (0, o.Z)();
        return (0, r.jsx)("div", {
          id: "frame7",
          className: (0, s.dh)(
            "absolute left-0 top-0  w-full h-full frame-item-m\n    px-5\n  ",
            7 === e.frameCurrentIndex ? "frame-item-m-active" : ""
          ),
          children: (0, r.jsxs)("div", {
            className:
              "r-frame-m-card-bg frame-item-card relative   w-full h-full flex flex-col   rounded-[18px] p-5 pt-3   ",
            children: [
              (0, r.jsx)(l.default, {
                className: "h-auto absolute   w-30 left-0 top-[-72px]   ",
                src: (0, s.wD)("frame7_icon.png"),
                width: 120,
                height: 120,
                priority: !0,
                loading: "eager",
                alt: "",
              }),
              (0, r.jsx)("h1", {
                className:
                  "flex-none capitalize font-semibold r-frame-7-title-bg !leading-1.2   text-xl text-right   ",
                children: "CATIZEN AI",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-none w-full h-0.5 bg-black bg-opacity-5   my-2.5   ",
              }),
              (0, r.jsx)("div", {
                className:
                  "flex-grow flex flex-col text-[#4D4A48] !leading-1.2   gap-4   ",
                children: [
                  {
                    id: 1,
                    title: "Heal The World",
                    intro: "Your adorable kitty, always by your side",
                  },
                  {
                    id: 2,
                    title: "Unique AI Kitty",
                    intro:
                      "Embrace your personal AI kitty as you feed, train, and bond with a digital companion that's uniquely yours",
                  },
                ].map((e) =>
                  (0, r.jsxs)(
                    "div",
                    {
                      className: "",
                      children: [
                        (0, r.jsx)("h1", {
                          className: "font-medium text-base leading-1.2",
                          children: e.title,
                        }),
                        (0, r.jsx)("h2", {
                          className: "mt-[5px] text-xs leading-1.2",
                          children: e.intro,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
            ],
          }),
        });
      }
      let U = n.Z.scrollInterval,
        T = n.Z.scrollSpeed,
        P = 0,
        B = 0,
        F = 0;
      function M(e) {
        let { smootherRef: t, globalData: a } = e,
          l = (0, o.Z)(),
          i = (0, c.useRef)(!0),
          m = (0, c.useRef)(!1),
          x = (0, c.useRef)([]),
          g = (0, c.useRef)(!0),
          h = (0, c.useRef)(!1),
          f = (0, c.useRef)(0);
        (0, c.useRef)(!1),
          (0, d.Z)(() => {
            i.current = l.pageLoading;
          }, [l.pageLoading]),
          (0, d.Z)(() => {
            m.current = l.isStart;
          }, [l.isStart]);
        let w = (0, c.useCallback)(async () => {
            (h.current = !0), l.setIsScroll(!0), await H();
          }, []),
          b = (0, c.useRef)(null),
          j = 0,
          v = 0,
          N = (e) => {
            let t, a, r, l;
            if (0 !== e && (!h.current || !g.current)) return;
            b.current.clearRect(0, 0, j, v);
            let n = x.current[e],
              i = j / v;
            n.width / n.height <= i
              ? ((l = (r = n.width) / i), (t = 0), (a = (n.height - l) / 2))
              : ((r = (l = n.height) * i), (t = (n.width - r) / 2), (a = 0)),
              b.current.drawImage(n, t, a, r, l, 0, 0, j, v);
          },
          C = () => {
            let e = document.getElementById("canvasBg");
            (b.current = e.getContext("2d")),
              (e.width = e.offsetWidth),
              (e.height = e.offsetHeight),
              (j = e.width),
              (v = e.height),
              N(0),
              p.Z.create({
                scrub: 0,
                pin: !1,
                trigger: "#section1",
                start: "top top",
                end: "bottom top",
                onEnter: () => {
                  console.log("top onEnter");
                },
                onEnterBack: () => {
                  console.log("top onEnterBack");
                },
                onLeave: () => {
                  console.log("top onLeave");
                },
                onLeaveBack: async () => {
                  console.log("top onLeaveBack"),
                    (g.current = !0),
                    t.current.paused(!0),
                    (h.current = !0),
                    l.setIsScroll(!1),
                    await (0, s._v)(1e3),
                    (h.current = !1),
                    l.setIsScroll(!1);
                },
              });
          },
          _ = (e) => {
            let t = "Catizen_2k_".concat(e, ".").concat(a.format);
            return "".concat(n.Z.frameUrl).concat(a.folder, "/").concat(t);
          },
          I = async (e, t) =>
            new Promise((a) => {
              let r = [],
                n = t - e,
                i = 0,
                s = 0;
              for (let o = e; o < t; o++) {
                let e = new Image();
                r.push(e),
                  (e.src = _(o)),
                  (e.onload = () => {
                    0 === o && l.setIsReady(!0),
                      ++i === n
                        ? (l.setProgress(100),
                          l.setPageLoading(!1),
                          l.setIsStart(!0),
                          a(r))
                        : ((s += 100 / n), l.setProgress(Math.floor(s)));
                  }),
                  (e.onerror = (e) => {
                    ++i === n
                      ? (l.setProgress(100),
                        l.setPageLoading(!1),
                        l.setIsStart(!0),
                        a(r))
                      : ((s += 100 / n), l.setProgress(Math.floor(s)));
                  });
              }
            }),
          k = (e, t) => {
            let a = [];
            for (let r = e; r <= t; r++) {
              let e = new Image();
              (e.src = _(r)), a.push(e);
            }
            return a;
          },
          D = async () => [...(await I(0, 500)), ...k(500, 570)],
          M = async () => {
            let e = new Date();
            (x.current = await D()),
              console.log("time", (new Date() - e) / 1e3 + "s"),
              C();
          };
        (0, c.useEffect)(() => {
          M();
          let e = document.querySelector("#smooth-content");
          return (
            e.addEventListener("mousewheel", O, { passive: !1 }),
            Y(),
            () => {
              e.removeEventListener("mousewheel", O);
            }
          );
        }, [a.folder]);
        let R = (e, t) =>
            new Promise((a, r) => {
              let l = e < t ? 1 : -1,
                n = e,
                i = 0,
                s = () => {
                  if (
                    ++i >= U &&
                    ((i = 0),
                    (n += l * T),
                    1 === l && n > t && (n = t),
                    -1 === l && n < t && (n = t),
                    N(n),
                    n === t)
                  ) {
                    a();
                    return;
                  }
                  requestAnimationFrame(s);
                };
              s();
            }),
          q = async () => {
            let e = document.getElementById("videoBg");
            return (
              !e ||
              new Promise((t, a) => {
                (e.loop = !1),
                  (e.playbackRate = 5),
                  e.addEventListener("ended", function () {
                    t();
                  });
              })
            );
          },
          G = async () => {
            if (0 === f.current) {
              (h.current = !1), l.setIsScroll(!1);
              return;
            }
            f.current--,
              console.log("currentIndex", f.current),
              l.setCurrentIndex(f.current),
              await q(),
              l.hiddenFrame();
            let e = 1 * s.w0[f.current + 1].point,
              t = 1 * s.w0[f.current].point;
            console.log("scrollValue", e, t),
              await R(e, t),
              0 === f.current &&
                u.ZP.to(".cover-bg", { opacity: 0, duration: 0.2 }),
              l.showFrame(f.current),
              (h.current = !1),
              l.setIsScroll(!1);
          },
          H = async () => {
            if (
              (console.log("currentIndex.current111", f.current),
              6 === f.current)
            ) {
              (h.current = !1),
                l.setIsScroll(!1),
                (g.current = !1),
                t.current.paused(!1);
              return;
            }
            f.current++,
              console.log("currentIndex", f.current),
              l.setCurrentIndex(f.current),
              1 === f.current &&
                u.ZP.to(".cover-bg", { opacity: 1, duration: 0.5 }),
              await q(),
              l.hiddenFrame();
            let e = 1 * s.w0[f.current - 1].point,
              a = 1 * s.w0[f.current].point;
            console.log("scrollValue", e, a),
              await R(e, a),
              l.showFrame(f.current),
              (h.current = !1),
              l.setIsScroll(!1);
          },
          O = y()(async (e) => {
            !i.current &&
              m.current &&
              g.current &&
              !h.current &&
              ((h.current = !0),
              l.setIsScroll(!0),
              e.wheelDelta > 0 ? await G() : await H());
          }, 200),
          W = () => {
            (P = 0), (B = 0), (F = 0);
          },
          Y = () => {
            let e = document.querySelector("#smooth-content");
            e.addEventListener(
              "touchstart",
              function (e) {
                g.current && (P = e.touches[0].pageY);
              },
              { passive: !1, useCapture: !1 }
            ),
              e.addEventListener(
                "touchmove",
                function (e) {
                  g.current && ((B = e.touches[0].pageY), (F = P - B));
                },
                { passive: !1, useCapture: !1 }
              ),
              e.addEventListener("touchend", async function (e) {
                !i.current &&
                  m.current &&
                  g.current &&
                  !h.current &&
                  ((h.current = !0),
                  l.setIsScroll(!0),
                  Math.abs(F) > 80 && (F > 0 ? await H() : await G(), W()));
              });
          },
          K = (0, c.useMemo)(
            () =>
              2 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_200.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-01.mp4"),
                  }
                : 3 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_270.jpg"),
                    src: "".concat(n.Z.frameUrl, "/1.mp4"),
                  }
                : 4 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_340.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-03.mp4"),
                  }
                : 5 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_410.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-04.mp4"),
                  }
                : 6 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_500.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-05.mp4"),
                  }
                : 7 === l.frameCurrentIndex
                ? {
                    poster: ""
                      .concat(n.Z.frameUrl)
                      .concat(a.folder, "/Catizen_2k_570.jpg"),
                    src: "".concat(n.Z.frameUrl, "video/Catizen-Scene-06.mp4"),
                  }
                : { poster: "", src: "" },
            [l.frameCurrentIndex]
          );
        return (0, r.jsxs)("div", {
          className: "w-screen r-h-screen relative",
          id: "section1",
          children: [
            (0, r.jsxs)("div", {
              className:
                "absolute left-0 top-0 w-full h-full   flex flex-col   ",
              style: {
                background:
                  "linear-gradient(180deg, rgba(185, 218, 245, 0.00) 0%, #B9DAF5 15%, #B9DAF5 100%)",
              },
              children: [
                (0, r.jsxs)("div", {
                  className: "w-full aspect-[390/360] relative",
                  children: [
                    (0, r.jsx)("canvas", {
                      className: "w-full h-full",
                      id: "canvasBg",
                    }),
                    [2, 3, 4, 5, 6, 7].includes(l.frameCurrentIndex) &&
                      (0, r.jsx)("video", {
                        id: "videoBg",
                        className: (0, s.dh)(
                          "absolute left-0 top-0 w-full h-full object-cover video-bg"
                        ),
                        poster: K.poster,
                        preload: "auto",
                        "x5-video-player-type": "h5",
                        "x5-playsinline": "true",
                        "webkit-playsinline": "true",
                        playsInline: !0,
                        muted: !0,
                        autoPlay: !0,
                        loop: !0,
                        children: (0, r.jsx)("source", {
                          src: K.src,
                          type: "video/mp4",
                        }),
                      }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: (0, s.dh)(
                    "flex-grow w-full mt-[-45px] relative cover-bg opacity-0\n          pt-9\n          flex flex-col\n        "
                  ),
                  style: {
                    background:
                      "linear-gradient(180deg, rgba(185, 218, 245, 0.00) 0%, #B9DAF5 15%, #B9DAF5 100%)",
                    backgroundSize: "100% 300px",
                  },
                }),
              ],
            }),
            (0, r.jsx)(S, { data: a.data, globalData: a, start: w }),
            (0, r.jsxs)("div", {
              className:
                "absolute left-0 top-0 w-full h-full z-10   flex flex-col   ",
              children: [
                (0, r.jsx)("div", {
                  className: "w-full aspect-[390/360] overflow-hidden",
                  style: { flex: "0 1 auto" },
                }),
                (0, r.jsxs)("div", {
                  className: (0, s.dh)(
                    "flex-grow w-full relative\n          pt-9\n          flex flex-col\n        "
                  ),
                  style: { flex: "1 0 410px" },
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex-grow relative",
                      style: { flex: "1 0 auto" },
                      children: [
                        (0, r.jsx)(Z, {}),
                        (0, r.jsx)(E, {}),
                        (0, r.jsx)(A, {}),
                        (0, r.jsx)(L, {}),
                        (0, r.jsx)(z, {}),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: (0, s.dh)(
                        "flex-none transition-[opacity] duration-[opacity]-300 overflow-hidden\n            flex items-center justify-center gap-1.5\n          ",
                        l.currentIndex > 1
                          ? "frame-m-swipe-up-show"
                          : "frame-m-swipe-up"
                      ),
                      children: [
                        (0, r.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          children: [
                            (0, r.jsx)("path", {
                              d: "M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32121C0.00303299 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67878 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73784 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM7 12.6C5.89243 12.6 4.80972 12.2716 3.88881 11.6562C2.96789 11.0409 2.25013 10.1663 1.82628 9.14303C1.40243 8.11976 1.29153 6.99379 1.50761 5.90749C1.72368 4.8212 2.25703 3.82337 3.0402 3.0402C3.82338 2.25703 4.8212 1.72368 5.9075 1.5076C6.99379 1.29153 8.11976 1.40242 9.14303 1.82627C10.1663 2.25012 11.0409 2.96789 11.6562 3.88881C12.2716 4.80972 12.6 5.89242 12.6 7C12.6 8.48521 12.01 9.90959 10.9598 10.9598C9.9096 12.01 8.48521 12.6 7 12.6Z",
                              fill: "white",
                            }),
                            (0, r.jsx)("path", {
                              d: "M7.49693 5.10721C7.43186 5.0416 7.35444 4.98952 7.26914 4.95398C7.18384 4.91844 7.09234 4.90015 6.99993 4.90015C6.90753 4.90015 6.81603 4.91844 6.73073 4.95398C6.64543 4.98952 6.56801 5.0416 6.50293 5.10721L3.70293 7.90721C3.63767 7.97247 3.58589 8.04995 3.55057 8.13523C3.51525 8.22051 3.49707 8.3119 3.49707 8.4042C3.49707 8.49651 3.51525 8.5879 3.55057 8.67318C3.58589 8.75845 3.63767 8.83594 3.70293 8.9012C3.83475 9.03302 4.01352 9.10707 4.19993 9.10707C4.29224 9.10707 4.38363 9.08889 4.46891 9.05357C4.55418 9.01824 4.63167 8.96647 4.69693 8.9012L6.99993 6.5912L9.30293 8.9012C9.36801 8.96681 9.44543 9.01889 9.53073 9.05443C9.61603 9.08997 9.70752 9.10826 9.79993 9.10826C9.89234 9.10826 9.98383 9.08997 10.0691 9.05443C10.1544 9.01889 10.2319 8.96681 10.2969 8.9012C10.3625 8.83613 10.4146 8.75871 10.4502 8.67341C10.4857 8.58811 10.504 8.49661 10.504 8.4042C10.504 8.3118 10.4857 8.2203 10.4502 8.135C10.4146 8.0497 10.3625 7.97228 10.2969 7.90721L7.49693 5.10721Z",
                              fill: "white",
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "text-sm text-white font-medium uppercase   ",
                          children: "Swipe Up",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function R(e) {
        let { globalData: t } = e,
          a = [
            {
              id: 1,
              img: (0, s.wD)("feature_app_img.png"),
              minImg: (0, s.wD)("feature_app_icon.png"),
              h1: "Powered By",
              h2: "Telegram Mini-App",
              intro:
                "Tap into Telegram's 1 billion monthly active users for rapid user acquisition and traffic growth",
            },
            {
              id: 2,
              img: (0, s.wD)("feature_game_img.png"),
              minImg: (0, s.wD)("feature_game_icon.png"),
              h1: "Blockchain-Powered",
              h2: "Gaming",
              intro:
                "Simple games unlock blockchain access for millions of users",
            },
          ],
          n = (0, c.useRef)(null),
          i = () => {
            u.ZP.registerPlugin(p.Z),
              u.ZP.timeline({
                scrollTrigger: {
                  trigger: n.current,
                  scrub: !0,
                  pin: !1,
                  start: "top bottom-=200",
                  end: "top bottom-=500",
                },
              })
                .fromTo(
                  "#progressBarItems",
                  { opacity: 100 },
                  { opacity: 0, duration: 1 }
                )
                .fromTo(
                  "#progressBar",
                  { bottom: "50%", y: "50%" },
                  { bottom: "150px", y: 0, duration: 3 }
                )
                .fromTo(
                  "#progressBarItem",
                  {
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.09) 100%)",
                  },
                  {
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.1) 100%)",
                    duration: 1,
                  },
                  "-=2"
                );
          };
        return (
          (0, c.useEffect)(() => {
            i();
          }, []),
          (0, r.jsx)("section", {
            ref: n,
            className:
              "w-full overflow-hidden   pt-15 pb-20 r-feature-bg-m   md:pt-16 md:pb-[160px] md:r-feature-bg   lg:pt-20 lg:pb-[180px]   xl:pt-25 xl:pb-[200px]   ",
            style: {
              "--bg": "url(".concat((0, s.wD)("feature_bg.png"), ")"),
              "--bg-m": "url(".concat((0, s.wD)("feature_bg_m.png"), ")"),
            },
            children: (0, r.jsxs)("div", {
              className: "container mx-auto",
              children: [
                (0, r.jsx)("h1", {
                  "data-aos": "fade-up",
                  className:
                    "text-center font-semibold uppercase tracking-wider r-feature-header-color   text-[30px]   md:text-[42px]   lg:text-[46px]   xl:text-[50px]   ",
                  children: "Feature",
                }),
                (0, r.jsx)("div", {
                  className:
                    "w-full flex items-center justify-center   flex-col md:flex-row   mt-12.5 gap-5   md:mt-20 md:gap-16   lg:mt-25 lg:gap-18   xl:mt-[110px] xl:gap-20   ",
                  children: a.map((e) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        "data-aos": "fade-up",
                        "data-aos-delay":
                          "desktop" === t.deviceType && 2 === e.id
                            ? "300"
                            : "0",
                        className:
                          "r-feature-item-bg   w-full rounded-3xl p-7.5   md:w-[320px] md:h-[380px] md:rounded-[26px] md:p-8   lg:w-[430px] lg:h-[430px] lg:rounded-[28px] lg:p-9   xl:w-[460px] xl:h-[450px] xl:rounded-[30px] xl:p-10   ",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "!leading-1.2 capitalize font-medium text-[#3E88F7]   text-xl   md:text-2xl   xl:text-[26px]   ",
                            children: [
                              (0, r.jsx)("h1", { children: e.h1 }),
                              (0, r.jsx)("h1", { children: e.h2 }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "w-full relative   mt-4   md:mt-5   ",
                            children: [
                              (0, r.jsx)(l.default, {
                                className:
                                  "w-full h-full object-cover   rounded-[20px]   md:rounded-[24px]   lg:rounded-[26px]   xl:rounded-[30px]   ",
                                width: 380,
                                height: 220,
                                src: e.img,
                                priority: !0,
                                loading: "eager",
                                alt: "",
                              }),
                              (0, r.jsx)(l.default, {
                                className: (0, s.dh)(
                                  "absolute object-cover\n                ",
                                  1 === e.id
                                    ? "w-[26.842%] -right-1.5 top-[-31.818%]"
                                    : "w-[28.6842%] right-0 top-[-34.0909%]"
                                ),
                                width: 205,
                                height: 205,
                                src: e.minImg,
                                priority: !0,
                                loading: "eager",
                                alt: "",
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "!leading-1.2 text-[#76726F]   mt-5 text-sm   md:mt-6 md:text-base   lg:mt-7   xl:mt-7.5   ",
                            children: e.intro,
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
          })
        );
      }
      function q(e) {
        let { globalData: t } = e,
          a = () => {};
        (0, c.useEffect)(() => {
          a();
        }, []);
        let n = [
          { id: 1, img: (0, s.wD)("partner-logo-01.png") },
          { id: 2, img: (0, s.wD)("partner-logo-02.png") },
          { id: 3, img: (0, s.wD)("partner-logo-03.png") },
          { id: 4, img: (0, s.wD)("partner-logo-04.png") },
          { id: 5, img: (0, s.wD)("partner-logo-05.png") },
          { id: 6, img: (0, s.wD)("partner-logo-06.png") },
          { id: 7, img: (0, s.wD)("partner-logo-07.png") },
          { id: 8, img: (0, s.wD)("partner-logo-08.png") },
          { id: 9, img: (0, s.wD)("partner-logo-09.png") },
          { id: 10, img: (0, s.wD)("partner-logo-10.png") },
          { id: 11, img: (0, s.wD)("partner-logo-11.png") },
          { id: 12, img: (0, s.wD)("partner-logo-12.png") },
          { id: 13, img: (0, s.wD)("partner-logo-13.png") },
          { id: 14, img: (0, s.wD)("partner-logo-14.png") },
          { id: 15, img: (0, s.wD)("partner-logo-15.png") },
          { id: 16, img: (0, s.wD)("partner-logo-16.png") },
        ];
        return (0, r.jsx)("div", {
          className:
            "",
          children: []
        });
      }
      function G() {
        let e = [
          {
            id: 1,
            title: "Telegram",
            img: (0, s.wD)("social_telegram.png"),
            href: "https://t.me/catizen_erc20",
          },
          {
            id: 2,
            title: "Twitter",
            img: (0, s.wD)("social_twitter.png"),
            href: "https://x.com/catizen_erc20",
          },
          {
            id: 3,
            title: "Medium",
            img: (0, s.wD)("social_medium.png"),
            href: "https://dexscreener.com/ethereum/0x96085475215a18Df64c9A25d522f440DF6d2f6bC",
          },
          {
            id: 4,
            title: "Email",
            img: (0, s.wD)("social_email.png"),
            href: "https://dextools.io/",
          },
        ];
        return (0, r.jsx)("div", {
          className:
            "w-full bg-white   h-[124px] px-5   md:h-16 md:px-12   lg:px-14   xl:px-15   ",
          children: (0, r.jsxs)("div", {
            className:
              "w-full h-full flex items-center justify-between   text-[#BFB7B2] font-medium tracking-2   text-xs   md:text-sm   lg:text-base   ",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "flex   flex-col md:flex-row md:items-center   gap-3.5   md:gap-6   lg:gap-7   xl:gap-7.5   ",
                children: [
                  (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.default, {
                      className: "w-auto   h-11   ",
                      width: 228,
                      height: 112,
                      priority: !0,
                      loading: "eager",
                      alt: "",
                      src: (0, s.wD)("catizen_logo.png"),
                    }),
                  }),
                  (0, r.jsx)("p", {
                    className: "",
                    children: "\xa92025 CATIZEN. COPYRIGHT",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex items-center   flex-col-reverse md:flex-row   gap-3.5   md:gap-6   lg:gap-7   xl:gap-7.5   ",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "text-[#4D4A48] flex items-center uppercase   gap-3.5   md:gap-6   lg:gap-7   xl:gap-7.5   ",
                    children: [
                      (0, r.jsx)("a", {
                        className: "cursor-pointer hover:underline",
                        href: "/terms",
                        target: "_blank",
                        children: "Terms of Use",
                      }),
                      (0, r.jsx)("a", {
                        className: "cursor-pointer hover:underline",
                        href: "/privacy",
                        target: "_blank",
                        children: "Privacy Policy",
                      }),
                    //   (0, r.jsx)("a", {
                    //     className: "cursor-pointer hover:underline",
                    //     href: "https://drive.google.com/drive/folders/1oxD-RsKO-PoPsLlUS46d6_nsg2Dn3vGX",
                    //     target: "_blank",
                    //     children: "Media Kit",
                    //   }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "flex items-center h-11   gap-3   md:gap-3.5   lg:gap-4   ",
                    children: e.map((e) =>
                      (0, r.jsx)(
                        "a",
                        {
                          href: e.href,
                          target: "_blank",
                          children: (0, r.jsx)(l.default, {
                            className: "   w-8 h-8   ",
                            width: 32,
                            height: 32,
                            priority: !0,
                            loading: "eager",
                            alt: "",
                            src: e.img,
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      a(5115);
      var H = a(3241),
        O = a(3969),
        W = a.n(O);
      a(6695);
      let Y = () =>
          fetch("https://api-ton.catizen.ai/api/cat/botdata")
            .then((e) => e.json())
            .then((e) =>
              (console.log("botdata", e), 0 === e.code)
                ? { botUser: e.data.botuser, dailyUser: e.data.dailyuser }
                : { botUser: 0, dailyUser: 0 }
            )
            .catch(() => ({ botUser: 0, dailyUser: 0 })),
        K = () =>
          fetch("https://api-ton.catizen.ai/api/cat/chaindata")
            .then((e) => e.json())
            .then((e) => {
              var t, a;
              return (console.log("chaindata", e), 0 !== e.code)
                ? { onchainTxs: 0, onchainUsers: 0 }
                : {
                    onchainTxs:
                      (null === (t = e.data) || void 0 === t
                        ? void 0
                        : t.alltransactions) || "22,713,879",
                    onchainUsers:
                      (null === (a = e.data) || void 0 === a
                        ? void 0
                        : a.onchainusers) || 0,
                  };
            })
            .catch(
              (e) => (console.log("eee", e), { onchainTxs: 0, onchainUsers: 0 })
            ),
        V = () =>
          fetch("https://api-ton.catizen.ai/api/cat/social")
            .then((e) => e.json())
            .then((e) =>
              0 === e.code ? { tgChannel: e.data.channel } : { tgChannel: 0 }
            )
            .catch(() => ({ tgChannel: 0 })),
        Q = () =>
          Promise.all([Y(), K(), V()])
            .then((e) => {
              let [t, a, r] = e;
              return { ...t, ...a, ...r };
            })
            .catch(() => ({
              botUser: 0,
              dailyUser: 0,
              onchainTxs: 0,
              onchainUsers: 0,
              tgChannel: 0,
            })),
        X = async function () {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          let e = async () => {
            let e = (
              await (await fetch("https://api.ipify.org/?format=json")).json()
            ).ip;
            return await (
              await fetch(
                "https://api-ton.catizen.ai/api/cat/position?ip=".concat(e)
              )
            ).json();
          };
          return await e();
        };
      function J(e) {
        let { globalData: t } = e,
          a = (0, c.useRef)(),
          l = (0, o.Z)(),
          d = () => {
            u.ZP.registerPlugin(H.Z, p.Z),
              (a.current = H.Z.create({ effects: !1 })),
              (document.querySelector("body").style.overflow = "unset"),
              a.current.scrollTop(0),
              a.current.paused(!0);
          };
        (0, c.useEffect)(
          () => (
            W().init({ offset: 80, duration: 500 }),
            d(),
            () => {
              a.current && a.current.kill();
            }
          ),
          []
        );
        let [x, g] = (0, c.useState)(!0);
        return (
          (0, c.useEffect)(() => {
            X()
              .then((e) => {
                !1 === e && g(!1);
              })
              .catch((e) => {
                g(!0), console.log(e);
              });
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              !1 === x &&
                (0, r.jsx)("div", {
                  className: "block-country",
                  children: (0, r.jsx)("p", {
                    children:
                      "Sorry!\xa0 Catizen is unavailable in your country",
                  }),
                }),
              x &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      id: "smooth-wrapper",
                      className: "fixed w-screen r-h-screen-i overflow-hidden",
                      style: {},
                      children: (0, r.jsxs)("div", {
                        id: "smooth-content",
                        children: [
                          document.documentElement.clientWidth < 1140
                            ? (0, r.jsx)(M, { smootherRef: a, globalData: t })
                            : (0, r.jsx)(D, { smootherRef: a, globalData: t }),
                          (0, r.jsx)(R, { globalData: t }),
                          (0, r.jsx)(q, { globalData: t }),
                          (0, r.jsx)(G, {}),
                        ],
                      }),
                    }),
                    (0, r.jsx)(i.default, {}),
                    (0, r.jsx)(m, {}),
                    "mobile" !== t.deviceType &&
                      (0, r.jsx)("div", {
                        className: (0, s.dh)(
                          "fixed left-0 top-0 w-full h-full z-[999999]",
                          "pointer-events-none",
                          l.isReady ? "opacity-0" : "optional-100"
                        ),
                        style: {
                          background: "url("
                            .concat(n.Z.frameUrl)
                            .concat(
                              t.folder,
                              "/Catizen_2k_0.jpg) no-repeat center center /cover"
                            ),
                        },
                      }),
                  ],
                }),
            ],
          })
        );
      }
      function $(e) {
        let { searchParams: t } = e,
          [a, l] = (0, c.useState)({
            onchainTxs: "-",
            onchainUsers: "-",
            botUser: "-",
            dailyUser: "-",
            tgChannel: "-",
          }),
          [n, i] = (0, c.useState)("desktop"),
          [s, o] = (0, c.useState)("pic");
        return (
          (0, c.useEffect)(() => {
            (async () => await Q())().then((e) => l(e));
          }, []),
          (0, c.useEffect)(() => {
            let e = () => {
              i(
                document.documentElement.clientWidth > 1140
                  ? "desktop"
                  : "mobile"
              ),
                o(
                  document.documentElement.clientWidth > 1140 ? "pic" : "pic_mb"
                );
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, r.jsx)(J, {
            globalData: { data: a, folder: s, format: "jpg", deviceType: n },
          })
        );
      }
    },
    9907: function () {},
  },
  function (e) {
    e.O(0, [332, 531, 980, 258, 753, 261, 789, 744], function () {
      return e((e.s = 4470));
    }),
      (_N_E = e.O());
  },
]);
