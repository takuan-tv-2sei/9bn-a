"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[497], {
    36266: function(e, t, r) {
        r.d(t, {
            v: function() {
                return a
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(53218)
          , s = r(21823);
        let a = () => {
            let e = (0,
            n.Dv)(s.FI)
              , [t,r] = (0,
            i.useState)([]);
            return (0,
            i.useEffect)( () => {
                let t = async () => {
                    try {
                        let {facilitatorList: t} = await (0,
                        l.bG)({
                            accessToken: e
                        })
                          , n = t.map(e => {
                            let {facilitatorId: t, name: r} = e;
                            return {
                                value: t.toString(),
                                label: r
                            }
                        }
                        );
                        n.unshift({
                            value: "",
                            label: " "
                        }),
                        r(n)
                    } catch (e) {
                        r([])
                    }
                }
                ;
                t()
            }
            , []),
            {
                facilitators: t
            }
        }
    },
    18751: function(e, t, r) {
        r.d(t, {
            A: function() {
                return i
            }
        });
        var n = r(67294);
        let i = () => {
            let e = (0,
            n.useCallback)(e => {
                e.preventDefault()
            }
            , [])
              , t = (0,
            n.useCallback)( () => {
                document.addEventListener("touchmove", e, {
                    passive: !1
                })
            }
            , [e])
              , r = (0,
            n.useCallback)( () => {
                document.removeEventListener("touchmove", e)
            }
            , [e]);
            return {
                preventTouchScroll: t,
                allowTouchScroll: r
            }
        }
    },
    3363: function(e, t, r) {
        r.d(t, {
            zF: function() {
                return u
            },
            J$: function() {
                return m
            },
            hu: function() {
                return p
            }
        });
        var n = r(85893)
          , i = r(1050)
          , l = r(45098)
          , s = r(67294)
          , a = r(60619)
          , o = r(10242)
          , c = r(70086)
          , d = r(63754);
        let u = s.memo(e => {
            let {src: t, isSpeaking: r, zIndex: i} = e
              , [l,d] = (0,
            s.useState)("idle")
              , [u,h] = (0,
            s.useState)(0)
              , p = (0,
            s.useRef)()
              , [g,{sound: m, duration: v, pause: j, stop: b}] = (0,
            a.Z)(t)
              , f = v ? v / 1e3 : 0
              , w = (0,
            s.useCallback)( () => {
                u > f && h(0),
                d("play"),
                g()
            }
            , [g, u, f])
              , S = (0,
            s.useCallback)( () => {
                d("pause"),
                j()
            }
            , [j])
              , y = (0,
            s.useCallback)( () => {
                "play" === l ? S() : w()
            }
            , [l, w, S])
              , C = (0,
            s.useCallback)( (e, t) => {
                "number" == typeof t && (h(t),
                null == m || m.seek(t))
            }
            , [m]);
            return (0,
            s.useEffect)( () => {
                if ("play" !== l)
                    return;
                let e = () => {
                    h(e => e + .1),
                    p.current = window.setTimeout(e, 100)
                }
                ;
                return e(),
                () => {
                    window.clearTimeout(p.current)
                }
            }
            , [l]),
            (0,
            s.useEffect)( () => {
                u > f && (d("pause"),
                b(),
                window.clearTimeout(p.current))
            }
            , [u, f, b]),
            (0,
            s.useEffect)( () => {
                r && S()
            }
            , [r, S]),
            (0,
            s.useEffect)( () => () => {
                b()
            }
            , [b]),
            (0,
            n.jsxs)(c.sg, {
                width: 352,
                alignItems: "center",
                children: [(0,
                n.jsx)(o.ch, {
                    name: "play" === l ? "pause" : "sound",
                    sx: {
                        zIndex: i
                    },
                    onClick: y,
                    disabled: r
                }), (0,
                n.jsx)(x, {
                    value: u,
                    step: .1,
                    max: f,
                    sx: {
                        marginTop: .5,
                        py: 2.25,
                        zIndex: i
                    },
                    onChange: C,
                    disabled: r
                })]
            })
        }
        );
        u.displayName = "AudioPlayer";
        let x = (0,
        l.Z)(i.ZP)( () => ({
            width: "320px",
            "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: d.O9.primary,
                "&:focus, &:hover, &.Mui-active": {
                    height: 32,
                    width: 32,
                    boxShadow: "none"
                },
                "&:before": {
                    boxShadow: "none"
                }
            },
            "& .MuiSlider-track": {
                border: "none",
                height: 4
            },
            "& .MuiSlider-rail": {
                height: 2,
                backgroundColor: d.O9.onSurfaceWeak3
            }
        }));
        var h = r(69417);
        let p = e => {
            let {zIndex: t, onClick: r} = e;
            return (0,
            n.jsx)(h.Z, {
                variant: "outlined",
                onClick: r,
                disableRipple: !0,
                sx: [{
                    height: 32,
                    width: 56,
                    minWidth: 56,
                    borderRadius: "8px",
                    boxShadow: 0,
                    backgroundColor: d.O9.white,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderWidth: 2,
                    zIndex: t,
                    "&:hover": {
                        boxShadow: 0,
                        backgroundColor: d.O9.white,
                        borderColor: d.O9.onSurfaceWeak3,
                        borderWidth: 2
                    }
                }],
                children: (0,
                n.jsx)(o.YS, {
                    name: "zoom",
                    size: 24,
                    color: "onSurface"
                })
            })
        }
        ;
        var g = r(41008);
        r(8594);
        let m = s.memo(e => {
            let {src: t, style: r={}, weight: i="normal"} = e;
            "bold" === i && (r = {
                ...r,
                fontWeight: "bold"
            });
            let l = function(e) {
                let t;
                let r = "<math>"
                  , n = "</math>"
                  , i = [];
                for (; 0 <= (t = e.search(r)); ) {
                    let l = e.substring(0, t);
                    i.push(l),
                    e = e.substring(t);
                    let s = e.search(n);
                    if (s < 0)
                        break;
                    let a = s + n.length
                      , o = e.substring(0, a)
                      , c = o.replace(RegExp(r, "g"), "").replace(RegExp(n, "g"), "");
                    try {
                        let t = g.Z.renderToString(c, {
                            output: "html"
                        });
                        i.push(t),
                        e = e.substring(a)
                    } catch (e) {
                        break
                    }
                }
                0 !== e.length && i.push(e);
                let l = i.join("");
                return l
            }(t);
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    style: r,
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                })
            })
        }
        );
        m.displayName = "InlineQML"
    },
    16396: function(e, t, r) {
        r.d(t, {
            G: function() {
                return p
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(25889)
          , s = r(48583)
          , a = r(67294)
          , o = r(73935)
          , c = r(59415)
          , d = r(5834)
          , u = r(46724)
          , x = r(65976);
        let h = "State Machine"
          , p = a.memo(e => {
            var t, r;
            let {result: i, height: l=500, width: a=500, portalElem: o=x.L, handleOnPlay: c, handleOnStop: d} = e
              , h = (0,
            s.Dv)(u.dx);
            return (0,
            n.jsx)(g, {
                result: i,
                postPartCountUp: null !== (r = null == h ? void 0 : null === (t = h.feedBackCommandOnAnswerCorrect) || void 0 === t ? void 0 : t.additionalIntParam) && void 0 !== r ? r : 0,
                height: l,
                width: a,
                portalElem: o,
                handleOnPlay: c,
                handleOnStop: d
            })
        }
        )
          , g = e => {
            var t;
            let {result: r, postPartCountUp: p, height: g=500, width: m=500, portalElem: v=x.L, handleOnPlay: j, handleOnStop: b} = e
              , f = (0,
            s.Dv)(u.q7)
              , [w,S] = (0,
            a.useState)(!1)
              , [y,C] = (0,
            a.useState)()
              , k = (0,
            a.useRef)(!1)
              , {rive: I, RiveComponent: O} = (0,
            l.useRive)({
                src: c.T.popupOX,
                artboard: "Artboard",
                stateMachines: h,
                autoplay: !0,
                onPlay: () => {
                    j && j()
                }
                ,
                onStop: () => {
                    !k.current && (k.current = !0,
                    b && b())
                }
            })
              , _ = e => {
                let t = e.data
                  , r = t.properties;
                if ("Sound" === t.name && void 0 !== r.name) {
                    let e = new Audio((0,
                    d.n)("sound/".concat(r.name, ".mp3")));
                    C(e)
                } else
                    C(void 0);
                "exit" === t.name ? S(!0) : S(!1)
            }
              , A = (0,
            l.useStateMachineInput)(I, h, "correct" === r || "incorrect" === r ? "default" : "kanji_correct" === r || "kanji_incorrect" === r ? "kanji" : "redo")
              , L = (0,
            l.useStateMachineInput)(I, h, "correction")
              , R = (0,
            l.useStateMachineInput)(I, h, "num");
            return (0,
            a.useEffect)( () => {
                I && (A && A.fire(),
                L && (L.value = "correct" === r || "kanji_correct" === r),
                R && (R.value = p),
                I.setTextRunValue("correctNum", "".concat(p)),
                I.on(l.EventType.RiveEvent, _))
            }
            , [L, R, p, r, I, A]),
            (0,
            a.useEffect)( () => {
                y && f && y.play()
            }
            , [y, f]),
            (0,
            a.useEffect)( () => {
                I && w && I.stop()
            }
            , [w, I]),
            (0,
            o.createPortal)((0,
            n.jsx)(i.Z, {
                position: "body" === v ? "fixed" : "absolute",
                width: m,
                height: g,
                margin: "auto",
                sx: {
                    inset: "body" === v ? "0 0 0 56px" : 0
                },
                children: (0,
                n.jsx)(i.Z, {
                    height: g,
                    width: m,
                    children: (0,
                    n.jsx)(O, {})
                })
            }), "body" === v ? document.body : null !== (t = document.getElementById(v)) && void 0 !== t ? t : document.body)
        }
        ;
        p.displayName = "Popup"
    },
    34774: function(e, t, r) {
        r.d(t, {
            Y: function() {
                return i
            },
            u: function() {
                return l
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)("")
          , l = (0,
        n.cn)(!1)
    },
    57455: function(e, t, r) {
        r.d(t, {
            je: function() {
                return V
            },
            U8: function() {
                return x
            },
            sR: function() {
                return Z
            },
            GI: function() {
                return h.G
            },
            FO: function() {
                return H
            },
            eL: function() {
                return P
            },
            A9: function() {
                return m
            },
            nv: function() {
                return R
            },
            M$: function() {
                return y
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(73935)
          , s = r(10242)
          , a = r(76636)
          , o = r(67294);
        let c = () => {
            let[e,t] = (0,
            o.useState)(0)
              , r = (0,
            o.useCallback)( () => {
                t(window.innerWidth)
            }
            , []);
            return (0,
            o.useEffect)( () => (r(),
            window.addEventListener("resize", r),
            () => {
                window.removeEventListener("resize", r)
            }
            )),
            {
                windowWidth: e
            }
        }
        ;
        var d = r(70086)
          , u = r(63754);
        let x = e => {
            let {onClick: t} = e
              , {windowHeight: r} = (0,
            a.A)()
              , {windowWidth: o} = c();
            return (0,
            l.createPortal)((0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    height: r,
                    width: o,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    bgcolor: u.O9.onSurface,
                    sx: {
                        opacity: .7
                    }
                }), (0,
                n.jsx)(i.Z, {
                    height: r,
                    width: o,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0,
                    n.jsxs)(d.sg, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0,
                        n.jsx)(s.nG, {
                            name: "popupFinish01",
                            height: 271,
                            width: 498
                        }), (0,
                        n.jsx)(d.LZ, {
                            y: 12
                        }), (0,
                        n.jsx)(s.Vy, {
                            text: "結果を見る",
                            onClick: t
                        })]
                    })
                })]
            }), document.body)
        }
        ;
        var h = r(16396)
          , p = r(51526)
          , g = r(47986);
        let m = o.memo(e => {
            let {text: t, bgColor: r, enableTapRemove: l=!0, fadeOut: a=!0} = e
              , [c,d] = (0,
            o.useState)(!0)
              , x = (0,
            o.useCallback)( () => {
                l && d(!1)
            }
            , [l]);
            return (0,
            o.useEffect)( () => {
                if (!a)
                    return;
                let e = setTimeout( () => {
                    d(!1)
                }
                , 5e3);
                return () => {
                    clearTimeout(e)
                }
            }
            , [a]),
            (0,
            n.jsx)(p.M, {
                children: c && (0,
                n.jsx)(g.E.div, {
                    initial: {
                        opacity: 0,
                        y: -100,
                        scale: 1
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 0,
                        scale: 1,
                        transition: {
                            duration: 1
                        }
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsx)(i.Z, {
                        height: 56,
                        width: "fit-content",
                        minWidth: 216,
                        borderRadius: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 24px",
                        sx: {
                            backgroundColor: "default" === r ? (0,
                            u.NH)("onSurface", .8) : (0,
                            u.NH)("important", .8)
                        },
                        onClick: x,
                        children: (0,
                        n.jsx)(s.xv, {
                            size: "lg",
                            color: "surface",
                            fontWeight: "bold",
                            children: t
                        })
                    })
                })
            })
        }
        );
        m.displayName = "Snackbar";
        var v = r(2734)
          , j = r(24358)
          , b = r(48583)
          , f = r(26126);
        let w = e => {
            let {name: t, onClick: r} = e;
            return (0,
            n.jsx)(s.Xd, {
                bgcolor: "onSurface",
                rippleColor: "surface",
                disabled: !1,
                onClick: r,
                sx: {
                    height: 48,
                    width: 48,
                    borderRadius: 24,
                    opacity: .5,
                    ":hover": {
                        opacity: .25
                    }
                },
                children: (0,
                n.jsx)(s.YS, {
                    name: t,
                    size: 40,
                    color: "surface"
                })
            })
        }
        ;
        var S = r(34774);
        let y = () => {
            let e = (0,
            b.Dv)(S.Y)
              , t = (0,
            b.Dv)(S.u);
            return (0,
            n.jsx)(C, {
                src: e,
                visible: t
            })
        }
          , C = e => {
            let {src: t, visible: r} = e
              , l = (0,
            b.b9)(S.u)
              , [s,a] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , [c,x] = (0,
            o.useState)({
                width: 0,
                height: 0
            })
              , h = (0,
            v.Z)()
              , p = s.width / s.height
              , g = c.width / c.height
              , m = p >= g
              , y = m ? (innerHeight - 64) * g : innerWidth - 64
              , C = m ? innerHeight - 64 : (innerWidth - 64) / g
              , k = m ? c.height > C : c.width > y
              , I = k ? y : c.width
              , O = k ? C : c.height;
            (0,
            o.useEffect)( () => {
                let e = () => {
                    a({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                ;
                return e(),
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("resize", e)
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = new Image;
                e.src = t;
                let r = () => {
                    x({
                        width: e.width,
                        height: e.height
                    })
                }
                ;
                return e.addEventListener("load", r),
                () => {
                    e.removeEventListener("load", r)
                }
            }
            , [t]);
            let _ = (0,
            o.useCallback)( () => {
                l(!1)
            }
            , [l])
              , A = (0,
            o.useCallback)( () => {
                l(!1)
            }
            , [l])
              , L = (0,
            o.useCallback)(e => {
                let {scale: t, positionX: r, positionY: n} = e.state;
                1 === t && (-100 === r || 100 === r || -100 === n || 100 === n) && l(!1)
            }
            , [l]);
            return (0,
            n.jsxs)(j.Z, {
                open: r,
                onClick: A,
                sx: {
                    zIndex: h.zIndex.modal
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(w, {
                        name: "close",
                        onClick: _
                    })
                }), (0,
                n.jsx)(f.d$, {
                    initialScale: 1,
                    centerOnInit: !0,
                    onPanningStop: L,
                    children: (0,
                    n.jsx)(f.Uv, {
                        children: (0,
                        n.jsx)(d.M5, {
                            width: innerWidth,
                            height: innerHeight,
                            children: (0,
                            n.jsx)(i.Z, {
                                display: "flex",
                                bgcolor: u.O9.surface,
                                borderRadius: 2,
                                padding: 2,
                                onClick: e => {
                                    e.stopPropagation()
                                }
                                ,
                                children: (0,
                                n.jsx)("img", {
                                    width: I,
                                    height: O,
                                    alt: "",
                                    src: t,
                                    style: {
                                        objectFit: "contain"
                                    }
                                })
                            })
                        })
                    })
                })]
            })
        }
        ;
        var k = r(94054)
          , I = r(33841)
          , O = r(10315)
          , _ = r(23599);
        let A = o.memo(e => {
            let {id: t, value: r, menuList: i, label: l, fullWidth: a=!1, onChange: c} = e
              , d = l ? "".concat(l, "-label") : void 0
              , [u,x] = (0,
            o.useState)(!1)
              , h = (0,
            o.useCallback)( () => x(!0), [])
              , p = (0,
            o.useCallback)( () => x(!1), [])
              , g = (0,
            o.useCallback)(e => {
                c(e.target.value),
                x(!1)
            }
            , [c]);
            return (0,
            n.jsxs)(k.Z, {
                focused: u,
                fullWidth: a,
                sx: {
                    width: "100%",
                    "& .MuiOutlinedInput-input": {
                        fontSize: "1.25rem",
                        paddingLeft: "24px",
                        paddingTop: "16px"
                    }
                },
                children: [d && (0,
                n.jsx)(I.Z, {
                    id: d,
                    children: l
                }), (0,
                n.jsx)(O.Z, {
                    id: t,
                    value: r,
                    label: l,
                    labelId: d,
                    onOpen: h,
                    onClose: p,
                    onChange: g,
                    sx: {
                        height: 48,
                        minWidth: 120
                    },
                    children: i.map(e => {
                        let {value: t, label: r} = e;
                        return (0,
                        n.jsx)(_.Z, {
                            value: t,
                            children: (0,
                            n.jsx)(s.xv, {
                                color: "black",
                                size: "lg",
                                lineClamp: 1,
                                children: r
                            })
                        }, t)
                    }
                    )
                })]
            })
        }
        );
        A.displayName = "Select";
        var L = r(61903);
        let R = o.memo(e => {
            let {type: t="text", onChange: r, maxlength: i, value: l, size: s="medium", children: a, ...c} = e
              , d = (0,
            o.useCallback)(e => null == r ? void 0 : r(e.target.value), [r])
              , [u,x] = (0,
            o.useState)(!1)
              , h = () => {
                x(!0)
            }
              , p = () => {
                x(!1)
            }
            ;
            return (0,
            n.jsx)(L.Z, {
                type: t,
                onChange: d,
                ...c,
                inputProps: {
                    maxLength: i
                },
                InputLabelProps: {
                    shrink: void 0 !== l && "" !== l || u
                },
                value: l,
                size: s,
                onFocus: h,
                onBlur: p,
                children: a
            })
        }
        );
        R.displayName = "TextField";
        var E = r(87109)
          , N = r(3363);
        let Z = e => {
            let {mode: t, value: r, placeHolder: i, onChange: l} = e
              , s = (0,
            o.useId)()
              , a = i.useLatexInLabel ? "<math>".concat(i.label, "</math>") : i.label
              , c = a ? (0,
            n.jsx)(z, {
                text: a
            }) : "回答を入力"
              , d = i.useLatexInSuffix ? "<math>".concat(i.suffix, "</math>") : i.suffix;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(M, {
                    id: s,
                    value: r,
                    label: c,
                    suffix: d,
                    onChange: l
                });
            case "Correct":
                return (0,
                n.jsx)(D, {
                    id: s,
                    value: r,
                    label: c,
                    suffix: d
                });
            case "Incorrect":
                return (0,
                n.jsx)(W, {
                    id: s,
                    value: r,
                    label: c,
                    suffix: d
                })
            }
        }
          , T = {
            ".MuiInputLabel-outlined": {
                lineHeight: 2.8
            },
            ".MuiInputLabel-shrink": {
                lineHeight: 1.7
            },
            ".MuiOutlinedInput-input": {
                lineHeight: 1.7
            },
            ".Mui-disabled.MuiInputLabel-shrink": {
                color: u.O9.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: u.O9.onSurface,
                WebkitTextFillColor: u.O9.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            }
        }
          , M = e => {
            let {id: t, value: r, label: i, suffix: l, onChange: s} = e;
            return (0,
            n.jsx)(R, {
                id: t,
                name: t,
                size: "small",
                fullWidth: !0,
                multiline: !0,
                maxRows: 3,
                label: i,
                value: r,
                onChange: s,
                onKeyPress: e => {
                    "Enter" === e.key && e.preventDefault()
                }
                ,
                sx: {
                    ".MuiInputLabel-outlined": {
                        lineHeight: 2.8
                    },
                    ".MuiInputLabel-shrink": {
                        lineHeight: 1.7
                    },
                    ".MuiOutlinedInput-input": {
                        lineHeight: 1.7
                    }
                },
                InputProps: (null == l ? void 0 : l.length) ? {
                    endAdornment: (0,
                    n.jsx)(q, {
                        text: l
                    })
                } : void 0
            })
        }
          , D = e => {
            let {id: t, value: r, label: l, suffix: a} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(R, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 3,
                    label: l,
                    value: r,
                    disabled: !0,
                    sx: {
                        ...T,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.O9.correctWeak
                        }
                    },
                    InputProps: (null == a ? void 0 : a.length) ? {
                        endAdornment: (0,
                        n.jsx)(q, {
                            text: a
                        })
                    } : void 0
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , W = e => {
            let {id: t, value: r, label: l, suffix: a} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(R, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    maxRows: 3,
                    label: l,
                    value: r,
                    disabled: !0,
                    sx: {
                        ...T,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: u.O9.importantWeak
                        }
                    },
                    InputProps: (null == a ? void 0 : a.length) ? {
                        endAdornment: (0,
                        n.jsx)(q, {
                            text: a
                        })
                    } : void 0
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(s.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , z = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(N.J$, {
                src: t,
                style: {
                    fontSize: 20,
                    color: u.O9.onSurfaceWeak2
                }
            })
        }
          , q = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(E.Z, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                children: (0,
                n.jsx)(N.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: u.O9.onSurfaceWeak2
                    }
                })
            })
        }
          , H = o.memo(e => {
            let {width: t=435, height: r=230, handleOnPlay: a, handleOnStop: o} = e;
            return (0,
            l.createPortal)((0,
            n.jsx)(i.Z, {
                position: "fixed",
                top: "50%",
                left: "50%",
                width: t,
                height: r,
                margin: "auto",
                sx: {
                    transform: "translate(-50%, -50%)"
                },
                children: (0,
                n.jsx)(s.nG, {
                    name: "popupStart5minReview",
                    height: r,
                    width: t,
                    handleOnPlay: a,
                    handleOnStop: o
                })
            }), document.body)
        }
        );
        H.displayName = "Popup5minReview";
        var J = r(18751);
        let P = e => {
            let {src: t, width: r, height: i, isTouchScroll: l} = e
              , {preventTouchScroll: s, allowTouchScroll: a} = (0,
            J.A)()
              , c = (0,
            o.useCallback)(e => {
                l || e.touches.length < 2 ? s() : a()
            }
            , [l, s, a])
              , d = (0,
            o.useCallback)(e => {
                (l || e.touches.length < 2) && a()
            }
            , [l, a]);
            return (0,
            n.jsx)("div", {
                onTouchStart: c,
                onTouchEnd: d,
                children: (0,
                n.jsx)("img", {
                    src: t,
                    width: r,
                    height: i,
                    alt: "",
                    style: {
                        height: "auto"
                    }
                })
            })
        }
        ;
        var F = r(5152)
          , $ = r.n(F);
        let V = $()( () => Promise.all([r.e(289), r.e(996)]).then(r.bind(r, 11996)).then(e => e.DrawingArea), {
            loadableGenerated: {
                webpack: () => [11996]
            },
            ssr: !1
        })
    },
    66105: function(e, t, r) {
        r.d(t, {
            D: function() {
                return i
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(void 0)
    },
    26622: function(e, t, r) {
        r.d(t, {
            eN: function() {
                return s
            },
            Yf: function() {
                return k
            },
            Fh: function() {
                return I
            },
            Ux: function() {
                return L
            },
            c8: function() {
                return f
            },
            ve: function() {
                return j
            },
            Wm: function() {
                return w
            },
            zh: function() {
                return x
            },
            _n: function() {
                return A
            }
        });
        var n = r(85893)
          , i = r(67294)
          , l = r(10242);
        let s = i.memo(e => {
            let {isOpen: t, onClickCancel: r, onClickAnswer: i} = e;
            return (0,
            n.jsx)(l.Vq, {
                isOpen: t,
                title: "このまま解答しますか？",
                body: "解答が未入力です。",
                actions: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.Qd, {
                        label: "キャンセル",
                        color: "primary",
                        onClick: r
                    }), (0,
                    n.jsx)(l.Qd, {
                        label: "解答する",
                        color: "primary",
                        onClick: i
                    })]
                }),
                onClose: r
            })
        }
        );
        s.displayName = "EmptyAnswerDialog";
        var a = r(80822)
          , o = r(18751)
          , c = r(63754)
          , d = r(5834)
          , u = r(3363);
        let x = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, mode: l="Default", page: s, maxPage: o, height: d=240, prefixLabel: u, suffixLabel: x, useLatexInLabel: j=!1, useLatexInSuffix: b=!1, hasBackgroundImage: f=!0, onClickLeft: w, onClickRight: S} = e
              , y = (0,
            i.useMemo)( () => {
                switch (l) {
                case "Default":
                    return (0,
                    n.jsx)(h, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: f,
                        children: r
                    });
                case "Slider":
                    return (0,
                    n.jsx)(p, {
                        page: s,
                        maxPage: o,
                        onClickLeft: w,
                        onClickRight: S,
                        children: (0,
                        n.jsx)(h, {
                            ref: t,
                            height: d,
                            hasBackgroundImage: f,
                            children: r
                        })
                    });
                case "Correct":
                    return (0,
                    n.jsx)(g, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: f,
                        children: r
                    });
                case "Incorrect":
                    return (0,
                    n.jsx)(m, {
                        ref: t,
                        height: d,
                        hasBackgroundImage: f,
                        children: r
                    })
                }
            }
            , [r, l, s, o, d, t, f, w, S])
              , C = "Slider" === l ? 48 : 16
              , k = {
                border: "4px solid ".concat(c.O9.onSurfaceWeak3),
                borderRadius: "8px",
                ..."100%" === d ? {
                    height: d
                } : {}
            };
            return (0,
            n.jsx)("div", {
                style: k,
                children: (0,
                n.jsxs)(a.Z, {
                    height: d,
                    position: "relative",
                    display: "flex",
                    children: [y, u && (0,
                    n.jsx)(v, {
                        type: "prefix",
                        text: u,
                        sideMove: C,
                        useLatex: j
                    }), x && (0,
                    n.jsx)(v, {
                        type: "suffix",
                        text: x,
                        sideMove: C,
                        useLatex: b
                    })]
                })
            })
        }
        );
        x.displayName = "WritingArea";
        let h = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, hasBackgroundImage: l} = e
              , {preventTouchScroll: s, allowTouchScroll: c} = (0,
            o.A)();
            return (0,
            n.jsx)(a.Z, {
                ref: t,
                flexGrow: 0,
                position: "relative",
                width: "100%",
                height: i,
                sx: {
                    overflow: "hidden",
                    scrollBehavior: "smooth",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    ...l ? {
                        backgroundImage: "url(".concat((0,
                        d.n)("png/handwriting.png"), ")"),
                        backgroundSize: "215px 105px",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    } : void 0
                },
                onPointerEnter: s,
                onPointerLeave: c,
                children: r
            })
        }
        );
        h.displayName = "Default";
        let p = e => {
            let {children: t, page: r, maxPage: i, onClickLeft: l, onClickRight: s} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(a.Z, {
                    flexGrow: 0,
                    children: (0,
                    n.jsx)(j, {
                        type: "left",
                        width: 32,
                        disabled: 1 === r,
                        onClick: l
                    })
                }), t, (0,
                n.jsx)(a.Z, {
                    flexGrow: 0,
                    children: (0,
                    n.jsx)(j, {
                        type: "right",
                        width: 32,
                        disabled: r === i,
                        onClick: s
                    })
                })]
            })
        }
          , g = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, prefixLabel: s, suffixLabel: o, hasBackgroundImage: c} = e;
            return (0,
            n.jsxs)(h, {
                ref: t,
                height: i,
                prefixLabel: s,
                suffixLabel: o,
                hasBackgroundImage: c,
                children: [(0,
                n.jsx)(a.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    n.jsx)(l.$V, {
                        name: "correctionO",
                        width: 144,
                        height: 144
                    })
                }), r]
            })
        }
        );
        g.displayName = "Correct";
        let m = (0,
        i.forwardRef)( (e, t) => {
            let {children: r, height: i, prefixLabel: s, suffixLabel: o, hasBackgroundImage: c} = e;
            return (0,
            n.jsxs)(h, {
                ref: t,
                height: i,
                prefixLabel: s,
                suffixLabel: o,
                hasBackgroundImage: c,
                children: [(0,
                n.jsx)(a.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 144,
                    height: 144,
                    children: (0,
                    n.jsx)(l.$V, {
                        name: "correctionX",
                        width: 144,
                        height: 144
                    })
                }), r]
            })
        }
        );
        m.displayName = "Incorrect";
        let v = e => {
            let {text: t, type: r, sideMove: i, useLatex: l} = e;
            return (0,
            n.jsx)(u.J$, {
                src: l ? "<math>".concat(t, "</math>") : t,
                style: {
                    position: "absolute",
                    fontSize: 40,
                    color: c.O9.onSurfaceWeak2,
                    ..."prefix" === r ? {
                        top: 16,
                        left: i
                    } : {
                        bottom: 16,
                        right: i
                    }
                }
            })
        }
          , j = i.memo(e => {
            let {type: t, width: r, disabled: i, onClick: s} = e;
            return (0,
            n.jsx)("button", {
                disabled: i,
                style: {
                    width: r,
                    height: "100%",
                    padding: 0,
                    border: "none",
                    background: (0,
                    c.NH)("onSurfaceWeak4", .5),
                    cursor: "pointer",
                    ..."left" === t && {
                        borderRight: "1px solid ".concat(c.O9.onSurfaceWeak3)
                    },
                    ..."right" === t && {
                        borderLeft: "1px solid ".concat(c.O9.onSurfaceWeak3)
                    }
                },
                onClick: s,
                children: (0,
                n.jsx)(l.YS, {
                    name: "left" === t ? "triangleLeft" : "triangleRight",
                    size: 32,
                    color: i ? "onSurfaceWeak3" : "primary"
                })
            })
        }
        );
        j.displayName = "SliderButton";
        var b = r(70086);
        let f = i.memo(e => {
            let {isOpen: t, x: r, y: i, onClick: s} = e;
            return t ? (0,
            n.jsxs)(l.Xd, {
                sx: {
                    position: "absolute",
                    justifyContent: "normal",
                    top: i,
                    left: null != r ? r : "calc(50% - ".concat(136, "px)"),
                    width: 272,
                    height: 48,
                    bgcolor: (0,
                    c.NH)("onSurface", .8),
                    borderRadius: 32,
                    zIndex: 22
                },
                onClick: s,
                children: [(0,
                n.jsx)(b.LZ, {
                    x: 3
                }), (0,
                n.jsx)(l.xv, {
                    color: "white",
                    children: "接続が不安定です"
                }), (0,
                n.jsx)(b.LZ, {
                    x: 2
                }), (0,
                n.jsxs)(b.X2, {
                    alignItems: "center",
                    pr: 1.5,
                    pl: .5,
                    py: .5,
                    height: 32,
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                    bgcolor: c.O9.onSurface,
                    borderRadius: 32,
                    children: [(0,
                    n.jsx)(l.YS, {
                        name: "reload",
                        size: 32
                    }), "再接続"]
                }), (0,
                n.jsx)(b.LZ, {
                    x: 1
                })]
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
        );
        function w(e) {
            switch (e.recognitionType) {
            case "math":
            default:
                return "Math";
            case "alphabet":
                return "English";
            case "japanese":
                return "Japanese"
            }
        }
        f.displayName = "ReconnectMessage";
        var S = r(48583)
          , y = r(41008);
        r(8594);
        var C = r(4446);
        let k = i.memo(e => {
            let {text: t, id: r, style: l} = e
              , s = (0,
            S.b9)(C.f)
              , a = (0,
            i.useRef)(null);
            return (0,
            i.useEffect)( () => {
                if (a.current)
                    try {
                        s(!1),
                        y.Z.render(t, a.current);
                        let e = a.current.querySelectorAll(".katex-html");
                        e.forEach(e => {
                            e.style.whiteSpace = "nowrap"
                        }
                        )
                    } catch (e) {
                        console.error("KaTeXのレンダリングエラー:", e),
                        e instanceof Error && s(!0)
                    }
            }
            , [t, s]),
            (0,
            n.jsx)("div", {
                id: r,
                style: l,
                ref: a
            })
        }
        );
        k.displayName = "Katex";
        let I = i.memo(e => {
            let {isOpen: t, title: r, onClickCancel: i, onClickContinue: s, onClose: a} = e;
            return (0,
            n.jsx)(l.Vq, {
                isOpen: t,
                title: r,
                body: (0,
                n.jsx)(l.xv, {
                    lineHeight: "relaxed",
                    children: "書き直しをおねがいします。いらない点や線があれば消してください。"
                }),
                actions: (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.Qd, {
                        label: "このまま解答する",
                        color: "primary",
                        onClick: s
                    }), (0,
                    n.jsx)(l.Qd, {
                        label: "書き直す",
                        color: "primary",
                        onClick: i
                    })]
                }),
                onClose: a
            })
        }
        );
        I.displayName = "KatexErrorDialog";
        var O = r(61982)
          , _ = r(46724);
        let A = () => {
            let e = (0,
            S.Dv)(_.As)
              , t = (0,
            S.b9)(_.Ok)
              , r = "eraser" === e ? "eraser" : "pen"
              , n = (0,
            i.useCallback)( () => {
                switch (r) {
                case "pen":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_HANDWRITE_START
                    });
                    return;
                case "eraser":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_ERASER_START
                    });
                    return
                }
            }
            , [r, t])
              , l = (0,
            i.useCallback)( () => {
                switch (r) {
                case "pen":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_HANDWRITE_END
                    });
                    return;
                case "eraser":
                    t({
                        type: O.zE.ANSWERVIEW_INPUT_ERASER_END
                    });
                    return
                }
            }
            , [r, t]);
            return {
                onPointerDown: n,
                onPointerUp: l
            }
        }
          , L = i.memo(e => {
            let {isOpen: t, onClick: r} = e;
            return (0,
            n.jsx)(l.Vq, {
                isOpen: t,
                title: "文字数が多すぎます",
                body: "300文字以内で解答してください。",
                actions: (0,
                n.jsx)(n.Fragment, {
                    children: (0,
                    n.jsx)(l.Qd, {
                        label: "OK",
                        color: "primary",
                        onClick: r
                    })
                }),
                onClose: r
            })
        }
        );
        L.displayName = "OverflowDialog"
    },
    4446: function(e, t, r) {
        r.d(t, {
            f: function() {
                return i
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(!1)
    },
    58695: function(e, t, r) {
        r.d(t, {
            _: function() {
                return c
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(71608)
          , s = r(2805)
          , a = r(75275)
          , o = r(62058);
        let c = () => {
            let e = (0,
            n.b9)(o.m5)
              , {forceReplace: t} = (0,
            s.q)()
              , {replace: r} = (0,
            l.kE)()
              , c = (0,
            i.useCallback)( (e, t, n) => {
                for (let i of t)
                    if ("text" === i.case) {
                        let {result: t, isMatched: l} = r(e, i.value, n);
                        if (l)
                            return t
                    } else if ("regex" === i.case && RegExp(i.value).test(e))
                        return e
            }
            , [r])
              , d = (0,
            i.useCallback)(r => {
                let {correct: n, input: i, gradeId: l, replaceType: s} = r;
                if (0 === i.length)
                    return e("empty"),
                    i;
                let o = i.replace(/\n/g, "english" === s ? " " : "")
                  , d = c(o, n, s);
                if (d)
                    return e("correct"),
                    d;
                let u = t(o, l, s)
                  , x = n.map(e => e.value)
                  , h = (0,
                a.rd)(s, x, u)
                  , p = c(h, n, s);
                return p ? (e("correct"),
                p) : (e("incorrect"),
                h)
            }
            , [c, t, e]);
            return {
                validate: d
            }
        }
    },
    62058: function(e, t, r) {
        r.d(t, {
            C$: function() {
                return d
            },
            Gl: function() {
                return i
            },
            Gs: function() {
                return l
            },
            NZ: function() {
                return s
            },
            Th: function() {
                return a
            },
            XX: function() {
                return c
            },
            Zr: function() {
                return o
            },
            _S: function() {
                return u
            },
            m5: function() {
                return x
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(void 0)
          , l = (0,
        n.cn)([])
          , s = (0,
        n.cn)(void 0)
          , a = (0,
        n.cn)("")
          , o = (0,
        n.cn)(void 0)
          , c = (0,
        n.cn)({
            label: "",
            suffix: "",
            useLatexInLabel: !1,
            useLatexInSuffix: !1
        })
          , d = (0,
        n.cn)("none")
          , u = (0,
        n.cn)(0)
          , x = (0,
        n.cn)("empty")
    },
    59199: function(e, t, r) {
        r.d(t, {
            Q: function() {
                return s
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(10242);
        let s = e => {
            let {mode: t, startRecording: r, stopRecording: i, isPlaying: l, playAudio: s} = e;
            switch (t) {
            case "idle":
            default:
                return (0,
                n.jsx)(a, {
                    onClick: r
                });
            case "recording":
                return (0,
                n.jsx)(o, {
                    onClick: i
                });
            case "stopped":
                return (0,
                n.jsx)(c, {
                    onClick: s,
                    isPlaying: l
                })
            }
        }
          , a = e => {
            let {onClick: t} = e;
            return (0,
            n.jsx)(i.Z, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.UV, {
                        name: "microphone",
                        onClick: t
                    })
                })
            })
        }
          , o = e => {
            let {onClick: t} = e;
            return (0,
            n.jsxs)(i.Z, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(l.nG, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking"
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.UV, {
                        name: "stop",
                        onClick: t
                    })
                })]
            })
        }
          , c = e => {
            let {onClick: t, isPlaying: r} = e;
            return (0,
            n.jsxs)(i.Z, {
                minHeight: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(l.nG, {
                    width: 550,
                    height: 120,
                    name: "soundwaveSpeaking",
                    play: r
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: (0,
                    n.jsx)(l.ch, {
                        name: "sound",
                        onClick: t
                    })
                })]
            })
        }
    },
    79361: function(e, t, r) {
        r.d(t, {
            wn: function() {
                return o
            },
            xm: function() {
                return i
            },
            pU: function() {
                return u
            },
            IE: function() {
                return d
            },
            BF: function() {
                return l
            },
            py: function() {
                return c
            }
        });
        var n = r(67294);
        let i = e => {
            let[t,r] = (0,
            n.useState)(void 0)
              , [i,l] = (0,
            n.useState)(!1)
              , s = (0,
            n.useCallback)( () => {
                if (!e)
                    return;
                t && t.pause();
                let n = new Audio(e);
                r(n),
                n.play()
            }
            , [e, t])
              , a = (0,
            n.useCallback)( () => {
                t && (t.pause(),
                t.currentTime = 0,
                r(void 0),
                l(!1))
            }
            , [t]);
            return (0,
            n.useEffect)( () => {
                if (!t)
                    return;
                let e = () => l(!0)
                  , r = () => l(!1);
                return t.addEventListener("play", e),
                t.addEventListener("ended", r),
                () => {
                    t.removeEventListener("play", e),
                    t.removeEventListener("ended", r)
                }
            }
            , [t]),
            {
                isPlaying: i,
                playAudio: s,
                stopAudio: a
            }
        }
          , l = () => {
            let[e,t] = (0,
            n.useState)()
              , r = (0,
            n.useCallback)(e => t(e), [])
              , i = (0,
            n.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: i
            }
        }
        ;
        var s = r(61982)
          , a = r(65166);
        let o = () => {
            let[e,t] = (0,
            n.useState)(new Uint8Array)
              , r = (0,
            n.useCallback)( (e, r, n) => {
                if (!e) {
                    r();
                    return
                }
                n(),
                t(e)
            }
            , [])
              , i = (0,
            n.useCallback)(t => {
                t({
                    answer: {
                        result: s.sS.CORRECT,
                        textType: 2,
                        text: "",
                        wrongCount: 0
                    },
                    answerLogResource: {
                        buffer: e,
                        type: a.Up.ENGLISH_AUDIO
                    },
                    viewStateJSON: {}
                })
            }
            , [e]);
            return {
                prepare: r,
                fix: i
            }
        }
          , c = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , r = (0,
            n.useCallback)( () => t(!0), [])
              , i = (0,
            n.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: i,
                visibled: e
            }
        }
          , d = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , r = (0,
            n.useCallback)( () => t(!0), [])
              , i = (0,
            n.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: i,
                visibled: e
            }
        }
          , u = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , r = (0,
            n.useCallback)( () => t(!0), [])
              , i = (0,
            n.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: i,
                visibled: e
            }
        }
    },
    29497: function(e, t, r) {
        r.d(t, {
            hD: function() {
                return iI
            },
            QW: function() {
                return i$
            },
            qg: function() {
                return z
            },
            Mq: function() {
                return ik
            }
        });
        var n = r(85893)
          , i = r(80822)
          , l = r(48583)
          , s = r(67294)
          , a = r(10242)
          , o = r(68789)
          , c = r(70086)
          , d = r(63754);
        let u = e => {
            let {question: t, isSpeaking: r, showImageDialog: i} = e;
            switch (t.type) {
            case "A1":
                return (0,
                n.jsx)(h, {
                    source: t
                });
            case "A2":
                return (0,
                n.jsx)(p, {
                    source: t
                });
            case "A2Selection":
                return (0,
                n.jsx)(g, {
                    source: t
                });
            case "B1":
                return (0,
                n.jsx)(m, {
                    source: t
                });
            case "B2":
                return (0,
                n.jsx)(v, {
                    source: t
                });
            case "B2Selection":
                return (0,
                n.jsx)(j, {
                    source: t
                });
            case "ClassicQubena":
                return (0,
                n.jsx)(b, {
                    source: t
                });
            case "EnglishWordL":
                return (0,
                n.jsx)(f, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordL1":
                return (0,
                n.jsx)(w, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordL2":
                return (0,
                n.jsx)(S, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordR":
                return (0,
                n.jsx)(y, {
                    source: t
                });
            case "EnglishWordRL":
                return (0,
                n.jsx)(C, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordRLv2":
                return (0,
                n.jsx)(k, {
                    source: t,
                    isSpeaking: r
                });
            case "EnglishWordW":
                return (0,
                n.jsx)(I, {
                    source: t
                });
            case "EnglishWordWL":
                return (0,
                n.jsx)(O, {
                    source: t,
                    isSpeaking: r
                });
            case "Html":
                return (0,
                n.jsx)(_, {
                    source: t
                });
            case "KanjiNazori":
                return (0,
                n.jsx)(A, {
                    source: t
                });
            case "KanjiSelfJudgement":
                return (0,
                n.jsx)(L, {
                    source: t
                });
            case "KanjiYomi":
                return (0,
                n.jsx)(R, {
                    source: t
                });
            case "Simple":
                return (0,
                n.jsx)(E, {
                    source: t,
                    isSpeaking: r,
                    showImageDialog: i
                })
            }
        }
        ;
        var x = r(3363);
        let h = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , p = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length && (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "並べ替えて完成させよ。"
                }), l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , g = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , m = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , d = i.aSideAtomName;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length && (0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    n.jsx)("b", {
                        children: d
                    }), " の説明文である。", (0,
                    n.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる語句を書け。"]
                }), l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , v = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , d = i.aSideAtomName;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length && (0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    n.jsx)("b", {
                        children: d
                    }), " の説明文である。", (0,
                    n.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる語句を書け。"]
                }), l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , j = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.parameter
              , l = i.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , s = i.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = i.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = t.image
              , d = i.aSideAtomName;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [0 === l.length ? (0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: ["以下は ", (0,
                    n.jsx)("b", {
                        children: d
                    }), " の説明文である。", (0,
                    n.jsx)("b", {
                        children: "（　　　）"
                    }), "にあてはまる選択肢を選べ。"]
                }) : l.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), s.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), o && (0,
                n.jsx)("div", {
                    style: {
                        pointerEvents: "auto",
                        padding: 16,
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        maxWidth: "80%",
                        children: [(0,
                        n.jsx)("img", {
                            src: o,
                            alt: ""
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                r && r(o)
                            }
                        })]
                    }, "image_section")
                }), a.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t)))]
            })
        }
          , b = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.image;
            return i ? (0,
            n.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: (0,
                n.jsxs)(c.sg, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0,
                    n.jsx)("img", {
                        className: "question-content-image",
                        src: i,
                        width: "100%"
                    }), (0,
                    n.jsx)(x.hu, {
                        zIndex: 1,
                        onClick: () => {
                            r && r(i)
                        }
                    })]
                }, 0)
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , f = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.audio;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    n.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語の意味または用法を選びましょう。"
                    }), i && (0,
                    n.jsx)("div", {
                        className: "audio",
                        children: (0,
                        n.jsx)(c.M5, {
                            children: (0,
                            n.jsx)(x.zF, {
                                src: i,
                                zIndex: 1,
                                isSpeaking: r
                            })
                        })
                    })]
                })
            })
        }
          , w = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.audio;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    n.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語を選びましょう。"
                    }), i && (0,
                    n.jsx)("div", {
                        className: "audio",
                        children: (0,
                        n.jsx)(c.M5, {
                            children: (0,
                            n.jsx)(x.zF, {
                                src: i,
                                zIndex: 1,
                                isSpeaking: r
                            })
                        })
                    })]
                })
            })
        }
          , S = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.audio;
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("div", {
                    className: "question-area",
                    children: [(0,
                    n.jsx)("p", {
                        className: "question-text",
                        children: "聞こえてきた英語の意味または用法を選びましょう。"
                    }), i && (0,
                    n.jsx)("div", {
                        className: "audio",
                        children: (0,
                        n.jsx)(c.M5, {
                            children: (0,
                            n.jsx)(x.zF, {
                                src: i,
                                zIndex: 1,
                                isSpeaking: r
                            })
                        })
                    })]
                })
            })
        }
          , y = e => {
            let {source: t} = e
              , r = t.parameter
              , i = r.mainText;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "英語の意味または用法を選びましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: i
                    })
                })]
            })
        }
          , C = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.parameter
              , l = i.mainText
              , s = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "英語の意味または用法を選びましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: l
                    })
                }), s && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: s,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , k = e => {
            let {source: t, isSpeaking: r} = e
              , i = t.parameter
              , l = i.mainText.replaceAll("\n", "<br/>")
              , s = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsxs)("p", {
                    className: "question-text",
                    children: [(0,
                    n.jsx)("b", {
                        children: "下線部"
                    }), " ", "の英語の意味または用法を選びましょう。分からない場合は，前後の単語や文全体の意味から予想してみましょう。"]
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: l
                    })
                }), s && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: s,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , I = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {questionText: i, variantForm: l, baseForm: s, wordUsageAndMeaning: a} = r;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: i ? "次の日本語を英語に直しましょう。" : "次の英語を書きましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: ( () => {
                            switch (l) {
                            case "3単現":
                                return "".concat(s, "の変化形で, 主語が3人称単数で現在の時に使う語");
                            case "過去形":
                                return "".concat(s, "の過去形");
                            case "過去分詞形":
                                return "".concat(s, "の過去分詞形");
                            default:
                                return "".concat(a)
                            }
                        }
                        )()
                    })
                }), i && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("br", {}), (0,
                    n.jsx)(x.J$, {
                        src: i
                    })]
                })]
            })
        }
          , O = e => {
            let {source: t, isSpeaking: r} = e
              , {parameter: i} = t
              , l = t.audio
              , {targetWord: s, partOfSpeech: a, variantForm: o, baseForm: d, wordUsageAndMeaning: u} = i
              , h = s.split(" ").length;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "熟語" === a || "名詞" === a && h >= 3 ? "語句を並べかえて次の英語を完成させましょう。" : "文字を並べかえて次の英語を完成させましょう。"
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: ( () => {
                            switch (o) {
                            case "3単現":
                                return "".concat(d, "の変化形で, 主語が3人称単数で現在の時に使う語");
                            case "過去形":
                                return "".concat(d, "の過去形");
                            case "過去分詞形":
                                return "".concat(d, "の過去分詞形");
                            default:
                                return "".concat(u)
                            }
                        }
                        )()
                    })
                }), l && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: l,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                })]
            })
        }
          , _ = e => {
            let {source: t} = e
              , r = t.parameter.html || "<h2>no content</h2>";
            return (0,
            n.jsx)("div", {
                className: "question-area",
                style: {
                    fontSize: "20px"
                },
                children: (0,
                n.jsx)(x.J$, {
                    src: r
                })
            })
        }
          , A = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, s = i.questionWordPronunciation, a = i.example, o = i.grade;
            switch (o) {
            case 1:
                t = "<ruby><rb>下線部</rb><rp>(</rp><rt>かせんぶ</rt><rp>)</rp></ruby>を<ruby><rb>漢字</rb><rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>で<ruby><rb>書</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>いてみましょう。";
                break;
            case 2:
                t = "下<ruby><rb>線部</rb><rp>(</rp><rt>せんぶ</rt><rp>)</rp></ruby>を<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字で<ruby><rb>書</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>いてみましょう。";
                break;
            case 3:
                t = "下線<ruby><rb>部</rb><rp>(</rp><rt>ぶ</rt><rp>)</rp></ruby>を<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字で書いてみましょう。";
                break;
            default:
                t = "下線部を漢字で書いてみましょう。"
            }
            let c = a.replace(l, "<u>".concat(s, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: c
                    })
                })]
            })
        }
          , L = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, s = i.questionWordPronunciation, a = i.example, o = i.grade;
            switch (o) {
            case 1:
                t = "<ruby><rb>下線部</rb><rp>(</rp><rt>かせんぶ</rt><rp>)</rp></ruby>の<ruby><rb>漢字</rb><rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 2:
                t = "下<ruby><rb>線部</rb><rp>(</rp><rt>せんぶ</rt><rp>)</rp></ruby>の<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 3:
                t = "下線<ruby><rb>部</rb><rp>(</rp><rt>ぶ</rt><rp>)</rp></ruby>の<ruby><rb>漢</rb><rp>(</rp><rt>かん</rt><rp>)</rp></ruby>字を答えましょう。";
                break;
            default:
                t = "下線部の漢字を答えましょう。"
            }
            let c = a.replace(l, "<u>".concat(s, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: c
                    })
                })]
            })
        }
          , R = e => {
            let t, {source: r} = e, i = r.parameter, l = i.questionWord, s = i.example, a = i.grade;
            switch (a) {
            case 1:
                t = "<ruby><rb>下線部</rb><rp>(</rp><rt>かせんぶ</rt><rp>)</rp></ruby>の<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>み<ruby><rb>方</rb><rp>(</rp><rt>かた</rt><rp>)</rp></ruby>を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 2:
                t = "下<ruby><rb>線部</rb><rp>(</rp><rt>せんぶ</rt><rp>)</rp></ruby>の<ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>み<ruby><rb>方</rb><rp>(</rp><rt>かた</rt><rp>)</rp></ruby>を<ruby><rb>答</rb><rp>(</rp><rt>こた</rt><rp>)</rp></ruby>えましょう。";
                break;
            case 3:
                t = "下線<ruby><rb>部</rb><rp>(</rp><rt>ぶ</rt><rp>)</rp></ruby>の読み方を答えましょう。";
                break;
            default:
                t = "下線部の読み方を答えましょう。"
            }
            let o = s.replace(l, "<u>".concat(l, "</u>"));
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                }), (0,
                n.jsx)("div", {
                    className: "main-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: o
                    })
                })]
            })
        }
          , E = e => {
            let {source: t, isSpeaking: r, showImageDialog: i} = e
              , l = t.parameter
              , s = l.questionSection.map(e => e.text.replaceAll("\n", "<br/>"))
              , a = l.mainSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , o = l.subSection.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , d = t.images
              , u = t.smallImages
              , h = t.largeImages
              , p = t.audio;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e
                    })
                }, "Question Section:".concat(t))), a.map( (e, t) => (0,
                n.jsx)("div", {
                    className: "main-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Main Section:".concat(t))), p && (0,
                n.jsx)("div", {
                    className: "audio",
                    children: (0,
                    n.jsx)(c.M5, {
                        children: (0,
                        n.jsx)(x.zF, {
                            src: p,
                            zIndex: 1,
                            isSpeaking: r
                        })
                    })
                }), o.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "subSection",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Sub Section:".concat(t))), 0 !== h.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: h.map( (e, t) => (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-large"
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Large Image:".concat(t)))
                }), 0 !== d.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: d.map( (e, t) => (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Medium Image:".concat(t)))
                }), 0 !== u.length && (0,
                n.jsx)("div", {
                    className: "image-area-small",
                    style: {
                        pointerEvents: "auto",
                        padding: 16
                    },
                    children: u.map( (e, t) => (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-small"
                        }), (0,
                        n.jsx)(x.hu, {
                            zIndex: 1,
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Small Image:".concat(t)))
                })]
            })
        }
        ;
        var N = r(34774)
          , Z = r(57455)
          , T = r(71608)
          , M = r(46724);
        let D = s.memo(e => {
            let {width: t, height: r, isTouchScroll: i, isScaling: s, selectedTool: a, stageRef: o} = e
              , c = (0,
            l.Dv)(M.kQ)
              , d = (0,
            l.Dv)(M.$p)
              , u = (0,
            T.R3)()
              , x = "StartFromReplay" === d && (null == c ? void 0 : c.args.memo) !== void 0
              , h = "landscape" === u;
            return (0,
            n.jsx)(n.Fragment, {
                children: x ? (0,
                n.jsx)(Z.eL, {
                    src: null == c ? void 0 : c.args.memo,
                    width: t,
                    height: h ? r + 480 : s ? r + 480 : r,
                    isTouchScroll: i
                }) : (0,
                n.jsx)(Z.je, {
                    tool: a,
                    width: t,
                    height: h ? r + 480 : s ? r + 480 : r,
                    isTouchScroll: i,
                    stageRef: o
                })
            })
        }
        );
        D.displayName = "ViewArea";
        var W = r(76421);
        let z = s.memo(e => {
            let {answerMode: t, width: r, stageRef: i} = e
              , s = (0,
            l.Dv)(M.As)
              , {getQuestionSource: a} = (0,
            W.z)()
              , o = (0,
            T.R3)()
              , c = a();
            return void 0 === c ? (0,
            n.jsx)(n.Fragment, {
                children: "未確認のQP"
            }) : (0,
            n.jsx)(q, {
                question: c,
                selectedTool: "Answered" === t ? void 0 : s,
                width: r,
                isMemoExpand: "portrait" === o,
                isTouchScroll: "Answered" === t,
                stageRef: i
            })
        }
        );
        z.displayName = "QuestionPanel";
        let q = e => {
            let {question: t, selectedTool: r, width: x, isMemoExpand: h, isTouchScroll: p, stageRef: g} = e
              , m = (0,
            l.b9)(M.As)
              , v = (0,
            l.b9)(N.Y)
              , j = (0,
            l.b9)(N.u)
              , b = (0,
            l.Dv)(M.iX)
              , [f,w] = (0,
            s.useState)(!1)
              , {elementRef: S, elementSize: y} = (0,
            o.yU)()
              , C = (0,
            T.R3)()
              , {sendOpenMemoOnReplay: k} = H()
              , I = (0,
            s.useCallback)( () => {
                w(e => {
                    let t = !e;
                    return t && m("pen"),
                    t
                }
                ),
                k()
            }
            , [k, m])
              , O = (0,
            s.useCallback)(e => {
                v(e),
                j(!0)
            }
            , [v, j]);
            return (0,
            n.jsxs)(i.Z, {
                ref: S,
                position: "relative",
                width: x,
                height: "fit-content",
                minHeight: "100%",
                pb: "landscape" === C ? 60 : f ? 60 : 0,
                bgcolor: d.O9.surface,
                border: "1px solid ".concat(d.O9.onSurfaceWeak3),
                borderRadius: 2,
                overflow: "hidden",
                children: [u({
                    question: t,
                    isSpeaking: b,
                    showImageDialog: O
                }), h && (0,
                n.jsxs)(c.X2, {
                    position: "relative",
                    width: 64,
                    height: 32,
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 1,
                    ml: 1,
                    bgcolor: d.O9.onSurfaceWeak4,
                    borderRadius: 2,
                    sx: {
                        cursor: "pointer"
                    },
                    zIndex: 1,
                    onClick: I,
                    children: [(0,
                    n.jsx)(a.YS, {
                        name: "memo",
                        size: 24,
                        color: "onSurface"
                    }), (0,
                    n.jsx)(a.YS, {
                        name: f ? "angleUp" : "angleDown",
                        size: 24,
                        color: "onSurface"
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    children: (0,
                    n.jsx)(D, {
                        width: y.width,
                        height: y.height,
                        isTouchScroll: p,
                        isScaling: f,
                        selectedTool: r,
                        stageRef: g
                    })
                })]
            })
        }
          , H = () => {
            var e, t;
            let r = (0,
            l.Dv)(M.mv)
              , n = r.code
              , i = (0,
            l.Dv)(M.dx)
              , s = null !== (e = null == i ? void 0 : i.id) && void 0 !== e ? e : 0
              , a = null !== (t = null == i ? void 0 : i.contentResource.answer.name) && void 0 !== t ? t : "unknown"
              , c = (0,
            l.Dv)(M.$p)
              , d = "StartFromReplay" === c
              , {analyticsEvent: u} = (0,
            o.WS)()
              , x = () => {
                d && u({
                    eventName: "解答リプレイ「メモを開く」クリック",
                    params: {
                        courseCode: n,
                        programId: s,
                        ap: a
                    }
                })
            }
            ;
            return {
                sendOpenMemoOnReplay: x
            }
        }
        ;
        var J = r(47986)
          , P = r(73935)
          , F = r(15103);
        let $ = (0,
        F.cn)(void 0)
          , V = (0,
        F.cn)("1to1")
          , X = (0,
        F.cn)(!1)
          , G = (0,
        F.cn)(0);
        var B = r(65976)
          , K = r(67720)
          , Y = r(40021)
          , U = r(86886)
          , Q = r(3804)
          , ee = r(25675)
          , et = r.n(ee)
          , er = r(15995)
          , en = r(68595);
        let ei = e => {
            let {index: t, mode: r} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(el, {
                    index: t
                });
            case "Other":
                return (0,
                n.jsx)(es, {
                    index: t
                });
            case "Correct":
                return (0,
                n.jsx)(ea, {
                    index: t
                });
            case "Incorrect":
                return (0,
                n.jsx)(eo, {
                    index: t
                })
            }
        }
          , el = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(en.x, {
                    color: "onSurface",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , es = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(en.x, {
                    color: "onSurfaceWeak1",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , ea = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(en.x, {
                    color: "correct",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , eo = e => {
            let {index: t} = e;
            return (0,
            n.jsx)(i.Z, {
                width: 32,
                height: 32,
                borderRadius: 16,
                bgcolor: d.O9.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    zIndex: 1
                },
                children: (0,
                n.jsx)(en.x, {
                    color: "important",
                    size: "lg",
                    fontWeight: "bold",
                    lineHeight: "base",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , ec = e => {
            let {index: t, width: r, height: i, qml: l, mode: s, onClick: a} = e;
            switch (s) {
            case "Active":
                return (0,
                n.jsx)(eu, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: a
                });
            case "Other":
                return (0,
                n.jsx)(ex, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: a
                });
            case "Correct":
                return (0,
                n.jsx)(eh, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: a
                });
            case "Incorrect":
                return (0,
                n.jsx)(ep, {
                    index: t,
                    width: r,
                    height: i,
                    qml: l,
                    onClick: a
                })
            }
        }
          , ed = e => {
            let {src: t} = e
              , r = (0,
            er.S)();
            return "".concat(r, "/lem/v1").concat(t)
        }
          , eu = e => {
            let {index: t, width: r, height: l, qml: s, onClick: a} = e;
            return (0,
            n.jsx)(Q.Z, {
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 4
                }],
                onClick: a,
                children: (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Active"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: s,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                })
            })
        }
          , ex = e => {
            let {index: t, width: r, height: l, qml: s} = e;
            return (0,
            n.jsx)(Q.Z, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 4
                }],
                children: (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Other"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: s,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                })
            })
        }
          , eh = e => {
            let {index: t, width: r, height: l, qml: s} = e;
            return (0,
            n.jsxs)(Q.Z, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 4
                }],
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Correct"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: s,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 40,
                        height: 40
                    })
                })]
            })
        }
          , ep = e => {
            let {index: t, width: r, height: l, qml: s} = e;
            return (0,
            n.jsxs)(Q.Z, {
                disabled: !0,
                sx: [{
                    position: "relative",
                    width: r,
                    height: l,
                    border: 2,
                    borderColor: d.O9.importantWeak,
                    borderRadius: 4
                }],
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    height: "100%",
                    children: [t && (0,
                    n.jsx)(ei, {
                        index: t,
                        mode: "Incorrect"
                    }), (0,
                    n.jsx)(et(), {
                        loader: ed,
                        src: s,
                        alt: "",
                        fill: !0,
                        sizes: "100%",
                        style: {
                            objectFit: "contain",
                            padding: "8px"
                        }
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 4,
                    left: 4,
                    zIndex: 1,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 40,
                        height: 40
                    })
                })]
            })
        }
          , eg = e => {
            let {items: t, orientation: r} = e;
            if (0 === t.length)
                return null;
            switch (r) {
            case "landscape":
                return (0,
                n.jsx)(U.ZP, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    n.jsx)(U.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        n.jsx)(ec, {
                            index: e.index,
                            width: "100%",
                            height: 180,
                            qml: e.url,
                            mode: "Other"
                        })
                    }, t))
                });
            case "portrait":
                return (0,
                n.jsx)("div", {
                    style: {
                        display: "flex",
                        overflowX: "scroll"
                    },
                    children: (0,
                    n.jsx)(c.X2, {
                        gap: 2,
                        children: t.map( (e, t) => (0,
                        n.jsx)(ec, {
                            index: e.index,
                            width: window.innerWidth / 2 * .9,
                            height: 196,
                            qml: e.url,
                            mode: "Other"
                        }, t))
                    })
                })
            }
        }
          , em = (0,
        F.cn)([])
          , ev = (0,
        F.cn)({
            id: 0,
            url: "",
            index: void 0
        })
          , ej = (0,
        F.cn)(void 0)
          , eb = () => {
            let e = (0,
            l.Dv)(em)
              , t = (0,
            l.Dv)(ev)
              , r = (0,
            l.Dv)(ej)
              , i = (0,
            T.R3)();
            return r ? (0,
            n.jsx)(ef, {
                selectables: e,
                correct: t,
                answered: r,
                orientation: i
            }) : null
        }
          , ef = e => {
            let {selectables: t, correct: r, answered: l, orientation: a} = e
              , o = l.id === r.id ? l : void 0
              , u = l.id !== r.id ? r : void 0
              , x = l.id !== r.id ? l : void 0
              , h = [null == o ? void 0 : o.id, null == u ? void 0 : u.id, null == x ? void 0 : x.id]
              , p = t.filter(e => !h.includes(e.id));
            return (0,
            n.jsxs)(Y.s, {
                children: [(0,
                n.jsx)(c.M5, {
                    children: (0,
                    n.jsxs)(c.X2, {
                        width: o ? "50%" : "100%",
                        children: [o && (0,
                        n.jsx)(ec, {
                            index: o.index,
                            width: "100%",
                            height: "landscape" === a ? 200 : 216,
                            qml: o.url,
                            mode: "Correct"
                        }), u && (0,
                        n.jsx)(ec, {
                            index: u.index,
                            width: "100%",
                            height: "landscape" === a ? 200 : 216,
                            qml: u.url,
                            mode: "Correct"
                        }), x && (0,
                        n.jsxs)(s.Fragment, {
                            children: [(0,
                            n.jsx)(c.LZ, {
                                x: 2
                            }), (0,
                            n.jsx)(ec, {
                                index: x.index,
                                width: "100%",
                                height: "landscape" === a ? 200 : 216,
                                qml: x.url,
                                mode: "Incorrect"
                            })]
                        })]
                    })
                }), 0 !== p.length && (0,
                n.jsx)(n.Fragment, {
                    children: "landscape" === a ? (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(K.Z, {
                            orientation: "horizontal",
                            sx: {
                                my: 3,
                                borderColor: d.O9.onSurfaceWeak3
                            }
                        }), (0,
                        n.jsx)(i.Z, {
                            mx: 3,
                            children: (0,
                            n.jsx)(eg, {
                                items: p,
                                orientation: a
                            })
                        })]
                    }) : (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(eg, {
                            items: p,
                            orientation: a
                        })]
                    })
                })]
            })
        }
        ;
        var ew = r(91082);
        let eS = () => {
            let e = (0,
            s.useCallback)(e => {
                var t, r;
                let n = null !== (t = e.correctItem) && void 0 !== t ? t : new ew.Op
                  , i = {
                    id: n.itemId,
                    url: n.imageUrl,
                    index: void 0
                }
                  , l = e.itemList.map(e => ({
                    id: e.itemId,
                    url: e.imageUrl,
                    index: void 0
                }));
                return e.shouldShuffle && l.sort( () => .5 - Math.random()),
                e.isDisplayNumber && (l.forEach( (e, t) => {
                    e.index = t + 1
                }
                ),
                i.index = null === (r = l.find(e => e.id === i.id)) || void 0 === r ? void 0 : r.index),
                {
                    selectables: l,
                    correct: i
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , ey = () => {
            let e = (0,
            s.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", []);
            return {
                validate: e
            }
        }
          , eC = () => {
            let e = (0,
            s.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.items.map(e => e.itemId)
                          , r = e.items.map(e => e.itemId)
                          , n = t[e.selected];
                        return {
                            order: r,
                            answered: n
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
        ;
        var ek = r(61982);
        let eI = e => {
            let t = (0,
            l.Dv)(em)
              , r = (0,
            l.b9)(ej)
              , [n,i] = (0,
            s.useState)(t[0])
              , [a,o] = (0,
            s.useState)("")
              , [c,d] = (0,
            s.useState)("incorrect")
              , {validate: u} = ey()
              , x = (0,
            s.useCallback)( (t, r, n) => {
                let l = u(e, t);
                switch (d(l),
                i(t),
                o(t.url),
                l) {
                case "correct":
                    r();
                    break;
                case "incorrect":
                    n()
                }
            }
            , [e, d, u])
              , h = (0,
            s.useCallback)(e => {
                let i = "correct" === c ? ek.sS.CORRECT : ek.sS.WRONG
                  , l = {
                    order: t.map(e => e.id),
                    answered: n.id
                };
                r(n),
                e({
                    answer: {
                        result: i,
                        textType: 2,
                        text: a,
                        wrongCount: 0
                    },
                    viewStateJSON: l
                })
            }
            , [t, n, r, a, c]);
            return {
                prepare: x,
                fix: h
            }
        }
          , eO = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , e_ = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(em)
              , i = (0,
            l.Dv)(ev)
              , s = (0,
            T.R3)();
            return (0,
            n.jsx)(eA, {
                selectables: r,
                correct: i,
                orientation: s,
                onAnswered: t
            })
        }
          , eA = e => {
            let {selectables: t, correct: r, orientation: l, onAnswered: a} = e
              , {prepare: o, fix: c} = eI(r)
              , {showing: d, show: u, hide: x} = eO()
              , h = (0,
            s.useCallback)(e => o(e, () => u("correct"), () => u("incorrect")), [o, u])
              , p = (0,
            s.useCallback)( () => {
                c(a),
                x()
            }
            , [c, x, a]);
            return (0,
            n.jsxs)(i.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsx)(U.ZP, {
                    container: !0,
                    rowSpacing: 2,
                    columnSpacing: {
                        xs: 2
                    },
                    children: t.map( (e, t) => (0,
                    n.jsx)(U.ZP, {
                        item: !0,
                        xs: 6,
                        children: (0,
                        n.jsx)(ec, {
                            index: e.index,
                            width: "100%",
                            height: 216,
                            qml: e.url,
                            mode: "Active",
                            onClick: () => h(e)
                        })
                    }, t))
                }), d && (0,
                n.jsx)(Z.GI, {
                    result: d,
                    portalElem: "portrait" === l ? "body" : B.L,
                    handleOnStop: p
                })]
            })
        }
          , eL = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(em)
              , c = (0,
            l.b9)(ev)
              , [d,u] = (0,
            l.KO)(ej)
              , {formatDto: x} = eS()
              , {getViewState: h} = eC();
            return ((0,
            s.useEffect)( () => {
                let {selectables: e, correct: n} = x(t);
                if (r) {
                    let t = h(r);
                    o(e),
                    c(n),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                o(e),
                c(n),
                u(void 0)
            }
            , [t, x, h, r, u, c, o]),
            d) ? (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(eb, {})
            }) : (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(e_, {
                    onAnswered: a
                })
            })
        }
        ;
        var eR = r(76636)
          , eE = r(26008)
          , eN = r(5834);
        let eZ = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(a.xv, {
                color: "correct",
                size: "lg",
                padding: "0 24px",
                children: t
            })
        }
          , eT = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(a.xv, {
                color: "important",
                size: "lg",
                padding: "0 24px",
                children: t
            })
        }
          , eM = (0,
        F.cn)([])
          , eD = (0,
        F.cn)(void 0)
          , eW = (0,
        F.cn)(void 0)
          , ez = (0,
        F.cn)({
            label: "",
            suffix: "",
            useLatexInLabel: !1,
            useLatexInSuffix: !1
        })
          , eq = () => {
            let e = (0,
            l.Dv)(ez)
              , t = (0,
            l.Dv)(eW)
              , r = (0,
            l.Dv)(eM)
              , i = (0,
            l.Dv)(eD)
              , s = (0,
            T.R3)();
            return void 0 === i ? null : (0,
            n.jsx)(eH, {
                placeHolder: e,
                modelAnswer: t,
                correct: r,
                answered: i,
                orientation: s
            })
        }
          , eH = e => {
            let {placeHolder: t, modelAnswer: r, correct: i, answered: l, orientation: s} = e
              , {convertInputToAnswerText: a} = (0,
            T.gH)()
              , o = i.map(e => ({
                ...e,
                value: a(e.value)
            }))
              , d = o.find(e => "text" === e.case ? e.value === l : RegExp(e.value).test(l));
            switch (s) {
            case "landscape":
                return (0,
                n.jsxs)(c.sg, {
                    height: "100%",
                    children: [(0,
                    n.jsx)(c.M5, {
                        height: "100%",
                        minHeight: 48,
                        children: (0,
                        n.jsx)(et(), {
                            src: (0,
                            eN.n)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), d ? (0,
                    n.jsx)(eJ, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    }) : (0,
                    n.jsx)(eP, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    })]
                });
            case "portrait":
                return (0,
                n.jsx)(c.sg, {
                    children: d ? (0,
                    n.jsx)(eJ, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    }) : (0,
                    n.jsx)(eP, {
                        answered: l,
                        placeHolder: t,
                        modelAnswer: r
                    })
                })
            }
        }
          , eJ = e => {
            let {answered: t, placeHolder: r, modelAnswer: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(Z.sR, {
                    mode: "Correct",
                    value: t,
                    placeHolder: r
                }), void 0 !== i && i !== t && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsx)(eZ, {
                        text: i
                    })]
                })]
            })
        }
          , eP = e => {
            let {answered: t, placeHolder: r, modelAnswer: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(Z.sR, {
                    mode: "Incorrect",
                    value: t,
                    placeHolder: r
                }), void 0 !== i && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsx)(eT, {
                        text: i
                    })]
                })]
            })
        }
        ;
        var eF = r(26622);
        let e$ = () => {
            let {convertInputToAnswerText: e} = (0,
            T.gH)()
              , t = (0,
            s.useCallback)(t => {
                var r;
                let n = null !== (r = t.placeHolder) && void 0 !== r ? r : new ew.i
                  , i = t.correctAnswerList.reduce( (t, r) => {
                    if (!r.option.case || !r.option.value)
                        return t;
                    if ("text" === r.option.case) {
                        let n = e(r.option.value);
                        return [...t, {
                            case: "text",
                            value: n
                        }]
                    }
                    return [...t, r.option]
                }
                , []);
                return {
                    placeHolder: n,
                    correct: i
                }
            }
            , [e]);
            return {
                formatDto: t
            }
        }
          , eV = () => {
            let e = (0,
            s.useCallback)( (e, t) => {
                if (0 === t.length)
                    return "empty";
                if (t.length > 300)
                    return "overflow";
                let r = e.find(e => "text" === e.case ? e.value === t : RegExp(e.value).test(t));
                return r ? "correct" : "incorrect"
            }
            , []);
            return {
                validate: e
            }
        }
          , eX = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , eG = () => {
            let e = (0,
            s.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        let r = t.text;
                        return {
                            answered: r
                        }
                    }(0, r.apViewState);
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , eB = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => t(!0), [])
              , n = (0,
            s.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , eK = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => t(!0), [])
              , n = (0,
            s.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , eY = e => {
            let t = (0,
            l.b9)(eD)
              , [r,n] = (0,
            s.useState)("")
              , [i,a] = (0,
            s.useState)(0)
              , [o,c] = (0,
            s.useState)("incorrect")
              , {convertInputToAnswerText: d} = (0,
            T.gH)()
              , {validate: u} = eV()
              , x = (0,
            s.useCallback)( (t, l, s, o, x, h) => {
                let p = d(r)
                  , g = e.map(e => ({
                    ...e,
                    value: d(e.value)
                }))
                  , m = u(g, p);
                if ("overflow" === m) {
                    t();
                    return
                }
                if ("empty" === m) {
                    h ? x() : l();
                    return
                }
                if ("incorrect" === m && 0 === i) {
                    a(1),
                    o();
                    return
                }
                switch (m) {
                case "correct":
                    s();
                    break;
                case "incorrect":
                    x()
                }
                c(m),
                n(p)
            }
            , [d, e, r, u, i])
              , h = (0,
            s.useCallback)(e => {
                let n = "correct" === o ? ek.sS.CORRECT : ek.sS.WRONG;
                t(r),
                e({
                    answer: {
                        result: n,
                        textType: 2,
                        text: r,
                        wrongCount: i
                    },
                    viewStateJSON: {
                        answered: r
                    }
                })
            }
            , [r, t, o, i]);
            return {
                input: r,
                setInput: n,
                prepare: x,
                fix: h
            }
        }
          , eU = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(eM)
              , i = (0,
            l.Dv)(ez)
              , s = (0,
            T.R3)();
            return (0,
            n.jsx)(eQ, {
                correct: r,
                placeHolder: i,
                onAnswered: t,
                orientation: s
            })
        }
          , eQ = e => {
            let {correct: t, placeHolder: r, orientation: l, onAnswered: o} = e
              , {input: d, setInput: u, prepare: x, fix: h} = eY(t)
              , {showing: p, show: g, hide: m} = eX()
              , {show: v, hide: j, visibled: b} = eK()
              , {show: f, hide: w, visibled: S} = eB()
              , y = (0,
            s.useCallback)(e => {
                x(f, v, () => g("correct"), () => g("redo"), () => g("incorrect"), e)
            }
            , [x, v, f, g])
              , C = (0,
            s.useCallback)( () => y(!1), [y])
              , k = (0,
            s.useCallback)( () => {
                h(o),
                m()
            }
            , [h, m, o])
              , I = (0,
            s.useCallback)( () => {
                j(),
                y(!0)
            }
            , [j, y]);
            switch (l) {
            case "landscape":
                return (0,
                n.jsxs)(c.sg, {
                    height: "100%",
                    children: [(0,
                    n.jsx)(c.M5, {
                        height: "100%",
                        minHeight: 140,
                        children: (0,
                        n.jsx)(et(), {
                            src: (0,
                            eN.n)("png/illust_keyboard.png"),
                            width: 269,
                            height: 108,
                            alt: ""
                        })
                    }), (0,
                    n.jsxs)(c.sg, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 1
                        }), (0,
                        n.jsx)(Z.sR, {
                            mode: "Default",
                            value: d,
                            placeHolder: r,
                            onChange: u
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 6
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "flex-end",
                            children: (0,
                            n.jsx)(a.Vy, {
                                text: "解答する",
                                disabled: void 0 !== p,
                                onClick: C
                            })
                        })]
                    }), p && (0,
                    n.jsx)(i.Z, {
                        sx: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        },
                        children: (0,
                        n.jsx)(Z.GI, {
                            result: p,
                            handleOnStop: "redo" === p ? m : k
                        })
                    }), (0,
                    n.jsx)(eF.Ux, {
                        isOpen: S,
                        onClick: w
                    }), (0,
                    n.jsx)(eF.eN, {
                        isOpen: b,
                        onClickCancel: j,
                        onClickAnswer: I
                    })]
                });
            case "portrait":
                return (0,
                n.jsxs)(c.sg, {
                    children: [(0,
                    n.jsxs)(c.sg, {
                        children: [(0,
                        n.jsx)(Z.sR, {
                            mode: "Default",
                            value: d,
                            placeHolder: r,
                            onChange: u
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 5
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "flex-end",
                            children: (0,
                            n.jsx)(a.Vy, {
                                text: "解答する",
                                disabled: void 0 !== p,
                                onClick: C
                            })
                        })]
                    }), p && (0,
                    n.jsx)(Z.GI, {
                        result: p,
                        portalElem: "portrait" === l ? "body" : B.L,
                        handleOnStop: "redo" === p ? m : k
                    }), (0,
                    n.jsx)(eF.Ux, {
                        isOpen: S,
                        onClick: w
                    }), (0,
                    n.jsx)(eF.eN, {
                        isOpen: b,
                        onClickCancel: j,
                        onClickAnswer: I
                    })]
                })
            }
        }
          , e0 = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(eM)
              , c = (0,
            l.b9)(eW)
              , d = (0,
            l.b9)(ez)
              , [u,x] = (0,
            l.KO)(eD)
              , {formatDto: h} = e$()
              , {getViewState: p} = eG()
              , g = (0,
            T.R3)()
              , {windowHeight: m} = (0,
            eR.A)();
            if ((0,
            s.useEffect)( () => {
                let {placeHolder: e, correct: n} = h(t);
                if (r) {
                    let i = p(t, r);
                    o(n),
                    x(i.answered),
                    c(t.displayAnswerText),
                    d(e);
                    return
                }
                return () => {
                    o(n),
                    c(t.displayAnswerText),
                    d(e)
                }
            }
            , [t, r, h, p, x, o, c, d]),
            (0,
            s.useEffect)( () => () => {
                x(void 0)
            }
            , [x]),
            void 0 !== u)
                switch (g) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: m - eE.J9 - 18,
                        pt: 1,
                        pr: 2,
                        pb: 12,
                        pl: 2,
                        children: (0,
                        n.jsx)(eq, {})
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 4,
                        pl: 2,
                        children: (0,
                        n.jsx)(eq, {})
                    })
                }
            else
                switch (g) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: m - eE.J9 - 18,
                        pt: 1,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        n.jsx)(eU, {
                            onAnswered: a
                        })
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        height: "100%",
                        pt: 4,
                        pr: 2,
                        pb: 2,
                        pl: 2,
                        children: (0,
                        n.jsx)(eU, {
                            onAnswered: a
                        })
                    })
                }
        }
          , e1 = e => {
            let {items: t} = e
              , r = "他の選択肢"
              , l = 16 * r.length;
            return (0,
            n.jsxs)(c.X2, {
                gap: 2,
                children: [(0,
                n.jsx)(i.Z, {
                    minWidth: l,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(a.xv, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        children: r
                    })
                }), (0,
                n.jsx)(K.Z, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: d.O9.onSurfaceWeak3,
                        my: 0
                    }
                }), (0,
                n.jsx)(c.X2, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    children: t.map( (e, t) => (0,
                    n.jsx)(x.J$, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: d.O9.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
          , e2 = e => {
            let {mode: t} = e
              , r = "";
            switch (t) {
            case "on":
                r = (0,
                eN.n)("png/icon_check_select_multi_on.png");
                break;
            case "off":
                r = (0,
                eN.n)("png/icon_check_select_multi_off.png");
                break;
            case "disabled":
                r = (0,
                eN.n)("png/icon_check_select_multi_disable.png")
            }
            return (0,
            n.jsx)("img", {
                src: r,
                width: 24,
                height: 24,
                alt: ""
            })
        }
          , e4 = e => {
            let {qml: t, mode: r, onClick: i} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(e8, {
                    qml: t,
                    onClick: i
                });
            case "Selected":
                return (0,
                n.jsx)(e9, {
                    qml: t,
                    onClick: i
                });
            case "Correct":
                return (0,
                n.jsx)(e3, {
                    qml: t,
                    onClick: i
                });
            case "SelectedCorrect":
                return (0,
                n.jsx)(e5, {
                    qml: t,
                    onClick: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(e6, {
                    qml: t,
                    onClick: i
                });
            case "Disabled":
                return (0,
                n.jsx)(e7, {
                    qml: t,
                    onClick: i
                })
            }
        }
          , e8 = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsxs)(a.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "off"
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })]
            })
        }
          , e9 = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsxs)(a.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    backgroundColor: d.O9.primaryWeak1,
                    border: 2,
                    borderColor: d.O9.primary,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })]
            })
        }
          , e3 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(a.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "off"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , e5 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(a.Xd, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                disabled: !0,
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "8",
                    left: "16px",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , e6 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(a.Xd, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "on"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 8,
                    left: 16,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.important
                    },
                    weight: "bold"
                })]
            })
        }
          , e7 = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(a.Xd, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: (0,
                    d.NH)("onSurface", "disabledBackground"),
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "calc(50% - 12px)",
                    left: "-8px",
                    width: 24,
                    height: 24,
                    children: (0,
                    n.jsx)(e2, {
                        mode: "disabled"
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: (0,
                        d.NH)("onSurface", "disabled")
                    },
                    weight: "bold"
                })]
            })
        }
          , te = (0,
        F.cn)([])
          , tt = (0,
        F.cn)([])
          , tr = (0,
        F.cn)(void 0)
          , tn = (0,
        F.cn)(!1)
          , ti = () => {
            let e = (0,
            l.Dv)(te)
              , t = (0,
            l.Dv)(tt)
              , r = (0,
            l.Dv)(tr);
            return r ? (0,
            n.jsx)(tl, {
                selectables: e,
                correct: t,
                answered: r
            }) : null
        }
          , tl = e => {
            let {selectables: t, correct: r, answered: i} = e
              , l = r.filter(e => !i.find(t => t.id === e.id))
              , s = r.filter(e => i.find(t => t.id === e.id))
              , a = i.filter(e => !r.find(t => e.id === t.id))
              , o = t.filter(e => !(l.find(t => t.id === e.id) || s.find(t => t.id === e.id) || a.find(t => t.id === e.id)));
            return (0,
            n.jsxs)(Y.s, {
                gap: 3,
                children: [(0,
                n.jsxs)(Y.s, {
                    gap: 2,
                    children: [l.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e4, {
                            qml: e.text,
                            mode: "Correct"
                        }, e.id)
                    })), s.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e4, {
                            qml: e.text,
                            mode: "SelectedCorrect"
                        }, e.id)
                    })), a.map(e => (0,
                    n.jsx)(n.Fragment, {
                        children: (0,
                        n.jsx)(e4, {
                            qml: e.text,
                            mode: "Incorrect"
                        }, e.id)
                    }))]
                }), 0 !== o.length && (0,
                n.jsx)(e1, {
                    items: o
                })]
            })
        }
          , ts = e => {
            let {isOpen: t, onClose: r} = e;
            return (0,
            n.jsx)(a.Vq, {
                isOpen: t,
                title: "解答が足りません",
                body: "指定された数だけ選択してください。",
                actions: (0,
                n.jsx)(a.Qd, {
                    label: "OK",
                    color: "primary",
                    onClick: r
                }),
                onClose: r
            })
        }
        ;
        var ta = r(75275);
        let to = () => {
            let e = (0,
            s.useCallback)(e => {
                let t = e.itemList.map(e => {
                    let t = (0,
                    ta.Yv)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                );
                e.shouldShuffle && t.sort( () => .5 - Math.random());
                let r = e.correctItemList.map(e => {
                    let t = (0,
                    ta.Yv)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                )
                  , n = e.selectionCountDesignated;
                return {
                    selectables: t,
                    correct: r,
                    fullSelectRequired: n
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , tc = () => {
            let e = (0,
            s.useCallback)( (e, t) => {
                if (0 === t.length)
                    return "empty";
                let r = e.map(e => e.id).sort()
                  , n = t.map(e => e.id).sort()
                  , i = n.length === r.length && r.every( (e, t) => e === n[t]);
                return i ? "correct" : "incorrect"
            }
            , []);
            return {
                validate: e
            }
        }
          , td = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , tu = () => {
            let e = (0,
            s.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.itemList.map(e => e.itemId)
                          , r = e.itemList.filter(e => e.selected).map(e => e.itemId);
                        return {
                            order: t,
                            answered: r
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , tx = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => t(!0), [])
              , n = (0,
            s.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , th = (e, t, r) => {
            let n = (0,
            l.Dv)(te)
              , i = (0,
            l.b9)(tr)
              , [a,o] = (0,
            s.useState)("")
              , [c,d] = (0,
            s.useState)(e)
              , [u,x] = (0,
            s.useState)(0)
              , [h,p] = (0,
            s.useState)("incorrect")
              , {validate: g} = tc()
              , m = (0,
            s.useCallback)(e => {
                let t = void 0 !== c.find(t => t.id === e.id);
                t ? d(c.filter(t => t.id !== e.id)) : d(c.concat([e]))
            }
            , [c, d])
              , v = (0,
            s.useCallback)(e => void 0 !== c.find(t => t.id === e.id), [c])
              , j = (0,
            s.useCallback)( () => !r || c.length < t.length, [t.length, r, c.length])
              , b = (0,
            s.useCallback)( (e, n, i, l) => {
                if (r && c.length < t.length) {
                    e();
                    return
                }
                let s = g(t, c);
                if (("incorrect" === s || "empty" === s) && 0 === u) {
                    x(1),
                    i();
                    return
                }
                switch (s) {
                case "correct":
                    n();
                    break;
                case "incorrect":
                case "empty":
                    l()
                }
                o("[".concat(c.map(e => e.text).toString(), "]")),
                p(s)
            }
            , [t, r, c, x, g, u])
              , f = (0,
            s.useCallback)(e => {
                let t = {
                    order: n.map(e => e.id),
                    answered: c.map(e => e.id)
                }
                  , r = ek.sS.CORRECT;
                i(c),
                e({
                    answer: {
                        result: r,
                        textType: 2,
                        text: a,
                        wrongCount: u
                    },
                    viewStateJSON: t
                })
            }
            , [n, c, i, a, h, u]);
            return {
                toggle: m,
                isSelected: v,
                isSelectable: j,
                prepare: b,
                fix: f
            }
        }
          , tp = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(te)
              , i = (0,
            l.Dv)(tn)
              , s = (0,
            l.Dv)(tt)
              , a = (0,
            T.R3)();
            return (0,
            n.jsx)(tg, {
                selectables: r,
                selecting: [],
                fullSelectRequired: i,
                correct: s,
                orientation: a,
                onAnswered: t
            })
        }
          , tg = e => {
            let {selectables: t, selecting: r, fullSelectRequired: l, correct: o, orientation: c, onAnswered: d} = e
              , {toggle: u, isSelected: x, isSelectable: h, prepare: p, fix: g} = th(r, o, l)
              , {showing: m, show: v, hide: j} = td()
              , {show: b, hide: f, visibled: w} = tx()
              , S = (0,
            s.useCallback)( () => {
                p( () => b(), () => v("correct"), () => v("redo"), () => v("incorrect"))
            }
            , [b, v, p])
              , y = (0,
            s.useCallback)( () => {
                g(d),
                j()
            }
            , [g, d, j]);
            return (0,
            n.jsxs)(i.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                children: [(0,
                n.jsxs)(Y.s, {
                    width: "100%",
                    gap: 4,
                    children: [(0,
                    n.jsx)(Y.s, {
                        gap: 2,
                        children: t.map( (e, t) => {
                            let r = x(e);
                            return (0,
                            n.jsx)(e4, {
                                qml: e.text,
                                mode: r ? "Selected" : h() ? "Active" : "Disabled",
                                onClick: () => u(e)
                            }, t)
                        }
                        )
                    }), (0,
                    n.jsx)(i.Z, {
                        alignSelf: "flex-end",
                        children: (0,
                        n.jsx)(a.Vy, {
                            text: "解答する",
                            disabled: void 0 !== m,
                            onClick: S
                        })
                    })]
                }), m && (0,
                n.jsx)(Z.GI, {
                    result: m,
                    portalElem: "portrait" === c ? "body" : B.L,
                    handleOnStop: "redo" === m ? j : y
                }), (0,
                n.jsx)(ts, {
                    isOpen: w,
                    onClose: f
                })]
            })
        }
          , tm = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(te)
              , c = (0,
            l.b9)(tt)
              , d = (0,
            l.b9)(tn)
              , [u,x] = (0,
            l.KO)(tr)
              , {formatDto: h} = to()
              , {getViewState: p} = tu();
            return ((0,
            s.useEffect)( () => {
                let {selectables: e, correct: n, fullSelectRequired: i} = h(t);
                if (r) {
                    let t = p(r);
                    o(t.order.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , [])),
                    c(n),
                    d(i),
                    x(t.answered.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , []));
                    return
                }
                o(e),
                c(n),
                d(i),
                x(void 0)
            }
            , [t, h, p, r, x, c, d, o]),
            u) ? (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(ti, {})
            }) : (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(tp, {
                    onAnswered: a
                })
            })
        }
          , tv = e => {
            let {mode: t, modelAnswer: r, recognitionMode: i} = e;
            switch (t) {
            case "Correct":
                return (0,
                n.jsx)(tj, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(tb, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            default:
                return (0,
                n.jsx)(n.Fragment, {})
            }
        }
          , tj = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tb = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tf = e => {
            let {mode: t="Default", answeredText: r, recognitionMode: i} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tw, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                n.jsx)(tS, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(ty, {
                    answeredText: r,
                    recognitionMode: i
                })
            }
        }
          , tw = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(c.sg, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.primaryWeak1),
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , tS = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.correctWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , ty = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.importantWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface,
                        textAlign: "center"
                    },
                    text: t
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    textAlign: "center",
                    children: t
                })]
            })
        }
          , tC = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: s} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tk, {
                    width: r,
                    answeredText: i,
                    recognitionMode: s
                });
            case "Correct":
                return (0,
                n.jsx)(tI, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: s
                });
            case "Incorrect":
                return (0,
                n.jsx)(tO, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: s
                })
            }
        }
          , tk = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.Z, {
                width: t,
                children: (0,
                n.jsx)(tf, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , tI = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: s} = e;
            return (0,
            n.jsxs)(c.X2, {
                alignItems: "center",
                columnGap: 2,
                children: [(0,
                n.jsx)(i.Z, {
                    width: t,
                    children: (0,
                    n.jsx)(tf, {
                        mode: "Correct",
                        answeredText: r,
                        recognitionMode: s
                    })
                }), r !== l && (0,
                n.jsx)(i.Z, {
                    flexShrink: 0,
                    children: (0,
                    n.jsx)(tv, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: s
                    })
                })]
            })
        }
          , tO = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: s} = e;
            return (0,
            n.jsxs)(c.X2, {
                alignItems: "center",
                columnGap: 2,
                children: [(0,
                n.jsx)(i.Z, {
                    width: t,
                    children: (0,
                    n.jsx)(tf, {
                        mode: "Incorrect",
                        answeredText: r,
                        recognitionMode: s
                    })
                }), l && (0,
                n.jsx)(i.Z, {
                    flexShrink: 0,
                    children: (0,
                    n.jsx)(tv, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: s
                    })
                })]
            })
        }
          , t_ = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: s} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(tA, {
                    width: r,
                    answeredText: i,
                    recognitionMode: s
                });
            case "Correct":
                return (0,
                n.jsx)(tL, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: s
                });
            case "Incorrect":
                return (0,
                n.jsx)(tR, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: s
                })
            }
        }
          , tA = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.Z, {
                width: t,
                children: (0,
                n.jsx)(tf, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , tL = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: s} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(tf, {
                    mode: "Correct",
                    answeredText: r,
                    recognitionMode: s
                }), l && r !== l && (0,
                n.jsx)(c.sg, {
                    height: 72,
                    justifyContent: "center",
                    children: (0,
                    n.jsx)(tv, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: s
                    })
                })]
            })
        }
          , tR = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: s} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(tf, {
                    mode: "Incorrect",
                    answeredText: r,
                    recognitionMode: s
                }), (0,
                n.jsx)(c.sg, {
                    justifyContent: "center",
                    height: 72,
                    children: l && (0,
                    n.jsx)(tv, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: s
                    })
                })]
            })
        }
          , tE = () => {
            let e = (0,
            l.Dv)($)
              , t = (0,
            l.Dv)(V)
              , r = (0,
            T.R3)();
            return e ? (0,
            n.jsx)(tN, {
                apData: e,
                answerType: t,
                orientation: r
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , tN = e => {
            let {apData: t, answerType: r, orientation: i} = e;
            switch (r) {
            case "1to1":
                return (0,
                n.jsx)(tZ, {
                    apData: t,
                    orientation: i
                });
            case "triple":
                return (0,
                n.jsx)(tT, {
                    apData: t,
                    orientation: i
                });
            default:
                return null
            }
        }
          , tZ = e => {
            var t, r, l, s;
            let {apData: a, orientation: o} = e
              , [d,u] = a;
            if (!d || !u)
                return null;
            let x = tD(d.correct, d.answered)
              , h = tD(u.correct, u.answered)
              , p = "portrait" === o ? 200 : 180;
            return (0,
            n.jsx)(i.Z, {
                display: "flex",
                justifyContent: "center",
                children: (0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(tM, {
                        mode: x,
                        height: p,
                        placeHolder: d.placeHolder,
                        svg: d.writtenSVG
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            mode: x,
                            width: 240,
                            answeredText: null !== (l = d.answered) && void 0 !== l ? l : "",
                            modelAnswer: d.modelAnswer,
                            recognitionMode: null === (t = d.recognitionConfig) || void 0 === t ? void 0 : t.mode
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsx)(tM, {
                        mode: h,
                        height: p,
                        placeHolder: u.placeHolder,
                        svg: u.writtenSVG
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            mode: h,
                            width: 240,
                            answeredText: null !== (s = u.answered) && void 0 !== s ? s : "",
                            modelAnswer: u.modelAnswer,
                            recognitionMode: null === (r = u.recognitionConfig) || void 0 === r ? void 0 : r.mode
                        })]
                    })]
                })
            })
        }
          , tT = e => {
            var t, r, l, s, a, o;
            let {apData: d, orientation: u} = e
              , [x,h,p] = d;
            if (!x || !h || !p)
                return null;
            let g = tD(x.correct, x.answered)
              , m = tD(h.correct, h.answered)
              , v = tD(p.correct, p.answered)
              , j = "portrait" === u ? 200 : "100%";
            return (0,
            n.jsx)(c.sg, {
                height: "100%",
                children: (0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    height: "100%",
                    alignSelf: "center",
                    children: [(0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(tM, {
                                mode: g,
                                height: j,
                                placeHolder: x.placeHolder,
                                svg: x.writtenSVG
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(tM, {
                                mode: m,
                                height: j,
                                placeHolder: h.placeHolder,
                                svg: h.writtenSVG
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            children: (0,
                            n.jsxs)(c.sg, {
                                gap: 1,
                                children: [(0,
                                n.jsxs)(c.X2, {
                                    gap: 2,
                                    children: [(0,
                                    n.jsx)(t_, {
                                        mode: g,
                                        width: 120,
                                        answeredText: null !== (s = x.answered) && void 0 !== s ? s : "",
                                        modelAnswer: x.modelAnswer,
                                        recognitionMode: null === (t = x.recognitionConfig) || void 0 === t ? void 0 : t.mode
                                    }), (0,
                                    n.jsx)(t_, {
                                        mode: m,
                                        width: 120,
                                        answeredText: null !== (a = h.answered) && void 0 !== a ? a : "",
                                        modelAnswer: h.modelAnswer,
                                        recognitionMode: null === (r = h.recognitionConfig) || void 0 === r ? void 0 : r.mode
                                    })]
                                }), (0,
                                n.jsx)(i.Z, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    children: (0,
                                    n.jsx)(t_, {
                                        mode: v,
                                        answeredText: null !== (o = p.answered) && void 0 !== o ? o : "",
                                        modelAnswer: p.modelAnswer,
                                        recognitionMode: null === (l = p.recognitionConfig) || void 0 === l ? void 0 : l.mode
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 12px)",
                            children: (0,
                            n.jsx)(tM, {
                                mode: v,
                                height: j,
                                placeHolder: p.placeHolder,
                                svg: p.writtenSVG
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: "portrait" === u ? 0 : 11
                    })]
                })
            })
        }
          , tM = e => {
            let {mode: t, height: r, placeHolder: i, svg: l} = e;
            return (0,
            n.jsx)(eF.zh, {
                mode: t,
                height: r,
                prefixLabel: i.label,
                suffixLabel: i.suffix,
                useLatexInLabel: i.useLatexInLabel,
                useLatexInSuffix: i.useLatexInSuffix,
                hasBackgroundImage: !1,
                children: (0,
                n.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                })
            })
        }
          , tD = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , r = e.find(e => "text" === e.case ? e.value === t : RegExp(e.value).test(t));
            return r ? "Correct" : "Incorrect"
        }
          , tW = e => {
            let {children: t, area: r={
                width: "100%",
                height: "100%"
            }, diff: i={
                x: 0,
                y: 0
            }, zIndex: l=1, cursor: a="auto", onPointerUp: o, onPointerDown: c, onPointerMove: d} = e
              , [u,x] = (0,
            s.useState)()
              , h = (0,
            s.useRef)(null)
              , p = (0,
            s.useCallback)(e => {
                if (!h.current)
                    return;
                let {x: t, y: r} = h.current.getBoundingClientRect();
                x({
                    x: e.clientX - t - i.x,
                    y: e.clientY - r - i.y
                })
            }
            , [i])
              , g = (0,
            s.useCallback)(e => {
                p(e),
                null == c || c(e)
            }
            , [p, c])
              , m = (0,
            s.useCallback)(e => {
                p(e),
                null == d || d(e)
            }
            , [p, d]);
            return (0,
            n.jsx)("div", {
                ref: h,
                style: {
                    width: r.width,
                    height: r.height,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: l,
                    cursor: a
                },
                onPointerUp: o,
                onPointerDown: g,
                onPointerMove: m,
                onPointerOut: () => x(void 0),
                children: u && (0,
                n.jsx)("div", {
                    style: {
                        transform: "translate(".concat(u.x, "px, ").concat(u.y, "px)"),
                        pointerEvents: "none",
                        userSelect: "none"
                    },
                    children: t
                })
            })
        }
          , tz = {
            Japanese: {
                type: "TEXT",
                lang: "ja_JP"
            },
            English: {
                type: "TEXT",
                lang: "en_US"
            },
            Math: {
                type: "MATH",
                lang: "en_US"
            }
        }
          , tq = e => {
            let t = (0,
            s.useMemo)( () => new Event("disconnected"), [])
              , r = (0,
            s.useRef)()
              , n = (0,
            s.useCallback)( () => {
                var t;
                let r = null === (t = e.current) || void 0 === t ? void 0 : t.querySelector('svg[data-layer="MODEL"]');
                if (!r)
                    return "";
                let n = r.cloneNode(!0).outerHTML;
                return n
            }
            , [e])
              , i = (0,
            s.useCallback)( () => {
                var n, i;
                let l = e.current;
                if (!l)
                    return;
                let s = null === (n = e.current) || void 0 === n ? void 0 : n.editor.recognizerContext.websocket;
                if ((null == s ? void 0 : s.readyState) !== window.WebSocket.OPEN) {
                    null === (i = l.editor) || void 0 === i || i.close();
                    return
                }
                s.send(JSON.stringify({
                    type: "ping"
                })),
                r.current = window.setTimeout( () => {
                    var e, r;
                    null == l || null === (e = l.editor) || void 0 === e || e.clear(),
                    null == l || null === (r = l.editor) || void 0 === r || r.close(),
                    null == l || l.dispatchEvent(t)
                }
                , 5e3)
            }
            , [e, t])
              , l = (0,
            s.useCallback)( () => {
                let t = e.current;
                if (!t)
                    return;
                let n = t.editor.recognizerContext.websocket;
                n.addEventListener("message", e => {
                    var t;
                    let n = null === (t = JSON.parse(e.data)) || void 0 === t ? void 0 : t.type;
                    "pong" === n && clearTimeout(r.current)
                }
                )
            }
            , [e])
              , a = (0,
            s.useCallback)( (e, t) => {
                var r;
                let i = "Math" === t ? e.detail.exports["application/x-latex"] : null === (r = JSON.parse(e.detail.exports["application/vnd.myscript.jiix"])) || void 0 === r ? void 0 : r.label
                  , l = n();
                return {
                    text: i,
                    svg: l
                }
            }
            , [n])
              , o = (0,
            s.useCallback)(r => {
                let n = e.current;
                if (!n)
                    return;
                let i = n.querySelector(".error-msg");
                i && (i.style.display = "none");
                let l = null == r ? void 0 : r.detail.type;
                ("close" === l || "timeout" === l) && n.dispatchEvent(t)
            }
            , [e, t])
              , c = (0,
            s.useCallback)(async r => {
                let {mode: n, useLK: i, sk: l} = r
                  , s = e.current;
                if (s && window.iink)
                    try {
                        let e = await (await fetch((0,
                        eN.n)("myscript.json"))).json();
                        window.iink.register(s, {
                            recognitionParams: {
                                type: tz[n].type,
                                protocol: "WEBSOCKET",
                                server: e,
                                iink: {
                                    lang: tz[n].lang,
                                    gesture: {
                                        enable: !1
                                    },
                                    math: {
                                        mimeTypes: ["application/x-latex", "application/vnd.myscript.jiix"]
                                    },
                                    text: {
                                        configuration: {
                                            addLKText: i,
                                            customResources: l ? ["NO_EMOJIS", l] : ["NO_EMOJIS"]
                                        },
                                        guides: {
                                            enable: !1
                                        },
                                        smartGuide: !1
                                    }
                                }
                            }
                        })
                    } catch (e) {
                        console.error(e),
                        s.dispatchEvent(t)
                    }
            }
            , [e, t])
              , d = (0,
            s.useCallback)(e => {
                let t = []
                  , r = []
                  , n = [];
                for (let i = 0; i < 36; i++)
                    t.push(e.x + 1 * Math.cos(10 * i * (Math.PI / 180))),
                    r.push(e.y + 1 * Math.sin(10 * i * (Math.PI / 180))),
                    n.push(e.t);
                let i = e.radius - 4;
                for (let l = 0; l < 36; l++)
                    t.push(e.x + i * Math.cos(10 * l * (Math.PI / 180))),
                    r.push(e.y + i * Math.sin(10 * l * (Math.PI / 180))),
                    n.push(e.t);
                return {
                    pointerType: "eraser",
                    pointerId: 1,
                    x: t,
                    y: r,
                    t: n
                }
            }
            , [])
              , u = (0,
            s.useCallback)( (t, r) => {
                let n = e.current;
                if (!n)
                    return;
                let {x: i, y: l} = n.getBoundingClientRect()
                  , s = d({
                    x: t.clientX - i,
                    y: t.clientY - l,
                    t: new Date().getTime(),
                    radius: r
                });
                n.editor.pointerEvents({
                    events: [s]
                })
            }
            , [e, d]);
            return {
                sendPing: i,
                opened: l,
                recognized: a,
                error: o,
                init: c,
                eraseLine: u
            }
        }
          , tH = (0,
        s.forwardRef)( (e, t) => {
            let {width: r, height: i=240, mode: l, recognitionConfig: a, onOpened: o, onRecognizing: c, onRecognized: d, onDisconnected: u} = e
              , [x,h] = (0,
            s.useState)(!1)
              , p = (0,
            s.useMemo)( () => "eraser" === l, [l])
              , {sendPing: g, opened: m, recognized: v, error: j, init: b, eraseLine: f} = tq(t)
              , w = (0,
            s.useCallback)( () => {
                m(),
                null == o || o()
            }
            , [m, o])
              , S = (0,
            s.useCallback)(e => {
                let {text: t, svg: r} = v(e, a.mode);
                d(t, r)
            }
            , [a.mode, v, d])
              , y = (0,
            s.useCallback)(e => {
                h(!0),
                p && f(e, 30)
            }
            , [p, f])
              , C = (0,
            s.useCallback)(e => {
                x && p && f(e, 30)
            }
            , [x, p, f]);
            return (0,
            s.useEffect)( () => {
                let e = t.current;
                if (e)
                    return e.addEventListener("loaded", w),
                    e.addEventListener("exported", S),
                    e.addEventListener("error", j),
                    e.addEventListener("pointerup", g),
                    c && e.addEventListener("pointerdown", c),
                    u && e.addEventListener("disconnected", u),
                    b(a),
                    () => {
                        var t;
                        e.removeEventListener("loaded", w),
                        e.removeEventListener("exported", S),
                        e.removeEventListener("error", j),
                        e.removeEventListener("pointerup", g),
                        c && e.removeEventListener("pointerdown", c),
                        u && e.removeEventListener("disconnected", u),
                        null === (t = e.editor) || void 0 === t || t.close()
                    }
            }
            , [t, a, u, c, w, S, j, g, b]),
            (0,
            s.useEffect)( () => {
                let e = () => h(!1);
                return document.addEventListener("pointerup", e),
                () => {
                    document.removeEventListener("pointerup", e)
                }
            }
            , []),
            (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("div", {
                    ref: t,
                    style: {
                        width: r,
                        height: i,
                        zIndex: 20
                    }
                }), (0,
                n.jsx)(tW, {
                    area: {
                        width: r,
                        height: i
                    },
                    diff: {
                        x: 30,
                        y: 30
                    },
                    zIndex: p ? 21 : 1,
                    cursor: x ? "none" : "auto",
                    onPointerDown: y,
                    onPointerMove: C,
                    children: p && x && (0,
                    n.jsx)(et(), {
                        src: (0,
                        eN.n)("png/icon_eraser_cursor.png"),
                        width: 60,
                        height: 60,
                        alt: "eraser"
                    })
                })]
            })
        }
        );
        tH.displayName = "MyScriptRecognizer";
        let tJ = s.memo(tH);
        var tP = r(16396);
        let tF = () => {
            let[e,t] = (0,
            l.KO)(G)
              , [r,n] = (0,
            s.useState)()
              , i = (0,
            s.useCallback)(r => {
                switch (r) {
                case "correct":
                    n("correct");
                    break;
                case "incorrect":
                    0 === e ? (t(1),
                    n("redo")) : n("incorrect");
                    break;
                case "empty":
                    t(1),
                    n("incorrect")
                }
            }
            , [e, t])
              , a = (0,
            s.useCallback)( () => {
                n(void 0)
            }
            , []);
            return {
                currentPopup: r,
                setPopup: i,
                hidePopup: a
            }
        }
          , t$ = () => {
            let {forceReplace: e} = (0,
            T.qR)()
              , {replace: t} = (0,
            T.kE)()
              , r = (0,
            s.useCallback)( (e, r, n) => {
                for (let i of r)
                    if ("text" === i.case) {
                        let {result: r, isMatched: l} = t(e, i.value, n);
                        if (l)
                            return r
                    } else if ("regex" === i.case && RegExp(i.value).test(e))
                        return e
            }
            , [t])
              , n = (0,
            s.useCallback)(t => {
                let {correct: n, text: i, gradeId: l, replaceType: s} = t;
                if (!i || 0 === i.length)
                    return {
                        result: "empty",
                        text: ""
                    };
                let a = i.replace(/\n/g, "english" === s ? " " : "")
                  , o = r(a, n, s);
                if (o)
                    return {
                        result: "correct",
                        text: o
                    };
                let c = e(a, l, s)
                  , d = n.map(e => e.value)
                  , u = (0,
                ta.rd)(s, d, c)
                  , x = r(u, n, s);
                return x ? {
                    result: "correct",
                    text: x
                } : {
                    result: "incorrect",
                    text: u
                }
            }
            , [r, e])
              , i = (0,
            s.useCallback)(e => {
                let t = e.map(n)
                  , r = t.some(e => {
                    let {result: t} = e;
                    return "empty" === t
                }
                )
                  , i = t.every(e => {
                    let {result: t} = e;
                    return "correct" === t
                }
                );
                return r ? "empty" : i ? "correct" : "incorrect"
            }
            , [n]);
            return {
                validate: i,
                validateSingle: n
            }
        }
        ;
        var tV = r(4446);
        let tX = (e, t) => {
            let r = (0,
            l.Dv)(G)
              , n = (0,
            l.b9)(X)
              , i = (0,
            l.b9)($)
              , [a,o] = (0,
            l.KO)(tV.f)
              , [c,d] = (0,
            s.useState)( () => e.map(e => ({
                answeredText: "",
                answeredSvg: "",
                isRecognizing: !1,
                recognitionConfig: e.recognitionConfig,
                placeHolder: e.placeHolder,
                gradeId: e.gradeId,
                replaceType: e.replaceType
            })))
              , [u,x] = (0,
            s.useState)(!1)
              , [h,p] = (0,
            s.useState)(!1)
              , [g,m] = (0,
            s.useState)(!1)
              , {validate: v, validateSingle: j} = t$()
              , {currentPopup: b, setPopup: f, hidePopup: w} = tF()
              , S = (0,
            s.useMemo)( () => {
                let e = c.some(e => {
                    let {isRecognizing: t} = e;
                    return t
                }
                );
                return e || u
            }
            , [u, c])
              , y = (0,
            s.useCallback)( () => {
                if (a) {
                    m(!0);
                    return
                }
                let t = c.map( (t, r) => {
                    let {answeredText: n} = t;
                    return {
                        text: n,
                        correct: e[r].correct,
                        replaceType: e[r].replaceType,
                        gradeId: e[r].gradeId
                    }
                }
                )
                  , r = v(t);
                "empty" === r ? p(!0) : f(r)
            }
            , [e, a, c, v, f])
              , C = (0,
            s.useCallback)( () => {
                if (w(),
                "redo" === b)
                    return;
                let l = ek.sS.CORRECT
                  , s = c.map(e => {
                    let {answeredText: t} = e;
                    return t
                }
                )
                  , a = {
                    items: null == e ? void 0 : e.map( (e, t) => {
                        var r, n;
                        return {
                            answered: null === (r = c[t]) || void 0 === r ? void 0 : r.answeredText,
                            svg: null === (n = c[t]) || void 0 === n ? void 0 : n.answeredSvg
                        }
                    }
                    )
                };
                n(!0),
                i(e => null == e ? void 0 : e.map( (e, t) => {
                    var r, n;
                    return {
                        ...e,
                        answered: null === (r = c[t]) || void 0 === r ? void 0 : r.answeredText,
                        writtenSVG: null === (n = c[t]) || void 0 === n ? void 0 : n.answeredSvg
                    }
                }
                )),
                t({
                    answer: {
                        result: l,
                        textType: 2,
                        text: "".concat(s),
                        wrongCount: r
                    },
                    viewStateJSON: a
                })
            }
            , [e, b, w, t, i, n, c, r])
              , k = (0,
            s.useCallback)( () => {
                p(!1);
                let t = c.map( (t, r) => {
                    let {answeredText: n} = t;
                    return {
                        text: n,
                        correct: e[r].correct,
                        replaceType: e[r].replaceType,
                        gradeId: e[r].gradeId
                    }
                }
                );
                f(v(t))
            }
            , [c, f, v, e])
              , I = (0,
            s.useCallback)( () => {
                p(!1)
            }
            , [])
              , O = (0,
            s.useCallback)(e => {
                d(t => t.map( (t, r) => r === e ? {
                    ...t,
                    isRecognizing: !0
                } : t))
            }
            , [])
              , _ = (0,
            s.useCallback)( (t, r, n) => {
                let i = j({
                    text: r,
                    correct: e[t].correct,
                    gradeId: e[t].gradeId,
                    replaceType: e[t].replaceType
                });
                d(e => e.map( (e, r) => r === t ? {
                    ...e,
                    answeredText: i.text,
                    answeredSvg: n,
                    isRecognizing: !1
                } : e))
            }
            , [e, j])
              , A = (0,
            s.useCallback)( () => {
                i(e => null == e ? void 0 : e.map(e => ({
                    ...e,
                    answered: "",
                    writtenSVG: ""
                }))),
                d(e => e.map(e => ({
                    ...e,
                    answeredText: "",
                    answeredSvg: ""
                }))),
                x(!0)
            }
            , [i])
              , L = (0,
            s.useCallback)( () => {
                x(!1)
            }
            , [])
              , R = (0,
            s.useCallback)( () => {
                o(!1),
                m(!1),
                y()
            }
            , [o, y])
              , E = (0,
            s.useCallback)( () => {
                m(!1)
            }
            , []);
            return {
                writingInfos: c,
                isOpenReconnectMessage: u,
                isOpenEmptyAnswerDialog: h,
                isOpenKatexErrorDialog: g,
                currentPopup: b,
                unanswerable: S,
                startAnswerProcess: y,
                endAnswerProcess: C,
                startDialogAnswerProcess: k,
                hidePopup: w,
                hideDialog: I,
                recognizing: O,
                recognized: _,
                disconnected: A,
                reconnect: L,
                handleKatexErrorDialogContinue: R,
                handleKatexErrorDialogClose: E
            }
        }
        ;
        function tG(e) {
            switch (e) {
            case ew.iF.REPLACE_TYPE_MATH_NORMAL:
                return "math";
            case ew.iF.REPLACE_TYPE_LITERATURE_NORMAL:
                return "literature";
            case ew.iF.REPLACE_TYPE_ENGLISH_NORMAL:
                return "english";
            case ew.iF.REPLACE_TYPE_SCIENCE_NORMAL:
                return "science";
            case ew.iF.REPLACE_TYPE_SOCIAL_NORMAL:
                return "social";
            default:
                return "none"
            }
        }
        let tB = () => {
            let e = (0,
            s.useCallback)(e => {
                let t = e.childAnswerList.reduce( (e, t) => {
                    let {apData: r} = t;
                    return "apHandWrite" === r.case ? [...e, r.value] : e
                }
                , []).map( (e, t) => {
                    var r;
                    let n = e.correctAnswerList.reduce( (e, t) => {
                        let {option: r} = t;
                        if (!r.case || !r.value)
                            return e;
                        if ("text" === r.case) {
                            let t = (0,
                            T.Cn)(r.value);
                            return [...e, {
                                case: "text",
                                value: t = (0,
                                T.YA)(t)
                            }]
                        }
                        return [...e, r]
                    }
                    , [])
                      , i = e.interactiveInkSetting
                      , l = i ? (0,
                    eF.Wm)(i) : "Math"
                      , s = e.useLk
                      , a = e.skNameOptional.value
                      , o = tG(e.replaceType)
                      , c = e.gradeId;
                    return {
                        id: t,
                        recognitionConfig: {
                            mode: l,
                            useLK: s,
                            sk: a
                        },
                        placeHolder: null !== (r = e.placeHolder) && void 0 !== r ? r : new ew.i,
                        correct: n,
                        modelAnswer: e.displayAnswerText,
                        answered: void 0,
                        writtenSVG: "",
                        replaceType: o,
                        gradeId: c
                    }
                }
                )
                  , r = t.length > 2 ? "triple" : "1to1";
                return {
                    apData: t,
                    answerType: r
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , tK = () => {
            let e = (0,
            s.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        let r = t.recognizedTexts.map( (e, r) => {
                            let n = t.svgList;
                            return {
                                answered: e,
                                svg: n ? n[r] : ""
                            }
                        }
                        );
                        return {
                            items: r
                        }
                    }(0, r.apViewState);
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , tY = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)($)
              , i = (0,
            l.Dv)(V)
              , s = (0,
            l.Dv)(G)
              , a = (0,
            T.R3)();
            return r ? (0,
            n.jsx)(tU, {
                apData: r,
                answerType: i,
                wrongCount: s,
                orientation: a,
                onAnswered: t
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , tU = e => {
            let {apData: t, answerType: r, wrongCount: i, orientation: l, onAnswered: s} = e;
            switch (r) {
            case "1to1":
                return (0,
                n.jsx)(tQ, {
                    apData: t,
                    wrongCount: i,
                    orientation: l,
                    onAnswered: s
                });
            case "triple":
                return (0,
                n.jsx)(t0, {
                    apData: t,
                    wrongCount: i,
                    orientation: l,
                    onAnswered: s
                })
            }
        }
          , tQ = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {writingInfos: o, isOpenReconnectMessage: d, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: h, unanswerable: p, startAnswerProcess: g, endAnswerProcess: m, startDialogAnswerProcess: v, hidePopup: j, hideDialog: b, recognizing: f, recognized: w, disconnected: S, reconnect: y, handleKatexErrorDialogContinue: C, handleKatexErrorDialogClose: k} = tX(t, l)
              , I = (0,
            s.useCallback)( () => {
                f(0)
            }
            , [f])
              , O = (0,
            s.useCallback)( () => {
                f(1)
            }
            , [f])
              , _ = (0,
            s.useCallback)( (e, t) => {
                w(0, e, t)
            }
            , [w])
              , A = (0,
            s.useCallback)( (e, t) => {
                w(1, e, t)
            }
            , [w])
              , [L,R] = o;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    alignSelf: "center",
                    children: [(0,
                    n.jsx)(t1, {
                        height: 200,
                        recognitionConfig: L.recognitionConfig,
                        connected: !d,
                        placeHolder: L.placeHolder,
                        recognizing: I,
                        recognized: _,
                        onDisconnected: S
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            width: 240,
                            answeredText: L.answeredText,
                            recognitionMode: L.recognitionConfig.mode
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsx)(t1, {
                        height: 200,
                        recognitionConfig: R.recognitionConfig,
                        connected: !d,
                        placeHolder: R.placeHolder,
                        recognizing: O,
                        recognized: A,
                        onDisconnected: S
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsxs)(c.X2, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 2
                        }), (0,
                        n.jsx)(tC, {
                            width: 240,
                            answeredText: R.answeredText,
                            recognitionMode: R.recognitionConfig.mode
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    })]
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 200,
                    height: 72,
                    children: (0,
                    n.jsx)(a.Vy, {
                        text: "解答する",
                        disabled: p,
                        onClick: g
                    })
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: d,
                    y: 24,
                    onClick: y
                }), h && (0,
                n.jsx)(tP.G, {
                    result: h,
                    portalElem: "portrait" === r ? "body" : B.L,
                    handleOnStop: "redo" === h ? j : m
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: u,
                    onClickAnswer: v,
                    onClickCancel: b
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: k,
                    onClickContinue: C,
                    onClose: k
                })]
            })
        }
          , t0 = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {writingInfos: o, isOpenReconnectMessage: d, isOpenEmptyAnswerDialog: u, isOpenKatexErrorDialog: x, currentPopup: h, unanswerable: p, startAnswerProcess: g, endAnswerProcess: m, startDialogAnswerProcess: v, hidePopup: j, hideDialog: b, recognizing: f, recognized: w, disconnected: S, reconnect: y, handleKatexErrorDialogContinue: C, handleKatexErrorDialogClose: k} = tX(t, l)
              , I = (0,
            s.useCallback)( () => {
                f(0)
            }
            , [f])
              , O = (0,
            s.useCallback)( () => {
                f(1)
            }
            , [f])
              , _ = (0,
            s.useCallback)( () => {
                f(2)
            }
            , [f])
              , A = (0,
            s.useCallback)( (e, t) => {
                w(0, e, t)
            }
            , [w])
              , L = (0,
            s.useCallback)( (e, t) => {
                w(1, e, t)
            }
            , [w])
              , R = (0,
            s.useCallback)( (e, t) => {
                w(2, e, t)
            }
            , [w])
              , [E,N,Z] = o
              , T = "portrait" === r
              , M = T ? 200 : "100%";
            return (0,
            n.jsxs)(c.sg, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: "100%",
                    maxWidth: 712,
                    height: "100%",
                    alignSelf: "center",
                    flex: 1,
                    children: [(0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(t1, {
                                height: M,
                                recognitionConfig: E.recognitionConfig,
                                connected: !d,
                                placeHolder: E.placeHolder,
                                recognizing: I,
                                recognized: A,
                                onDisconnected: S
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            children: (0,
                            n.jsx)(t1, {
                                height: M,
                                recognitionConfig: N.recognitionConfig,
                                connected: !d,
                                placeHolder: N.placeHolder,
                                recognizing: O,
                                recognized: L,
                                onDisconnected: S
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 2
                    }), (0,
                    n.jsxs)(c.X2, {
                        flex: 1,
                        children: [(0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 8px)",
                            display: "flex",
                            justifyContent: "center",
                            flex: 1,
                            children: (0,
                            n.jsxs)(c.sg, {
                                gap: 1,
                                children: [(0,
                                n.jsxs)(c.X2, {
                                    gap: 2,
                                    children: [(0,
                                    n.jsx)(tC, {
                                        width: 120,
                                        answeredText: E.answeredText,
                                        recognitionMode: E.recognitionConfig.mode
                                    }), (0,
                                    n.jsx)(tC, {
                                        width: 120,
                                        answeredText: N.answeredText,
                                        recognitionMode: N.recognitionConfig.mode
                                    })]
                                }), (0,
                                n.jsx)(i.Z, {
                                    alignSelf: "end",
                                    width: 120,
                                    marginLeft: "auto",
                                    children: (0,
                                    n.jsx)(tC, {
                                        answeredText: Z.answeredText,
                                        recognitionMode: Z.recognitionConfig.mode
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)(c.LZ, {
                            x: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            width: "calc(50% - 12px)",
                            children: (0,
                            n.jsx)(t1, {
                                height: M,
                                recognitionConfig: Z.recognitionConfig,
                                connected: !d,
                                placeHolder: Z.placeHolder,
                                recognizing: _,
                                recognized: R,
                                onDisconnected: S
                            })
                        })]
                    })]
                }), (0,
                n.jsx)(c.LZ, {
                    y: 2
                }), (0,
                n.jsx)(i.Z, {
                    alignSelf: "end",
                    children: (0,
                    n.jsx)(a.Vy, {
                        text: "解答する",
                        disabled: p,
                        onClick: g
                    })
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: d,
                    y: 24,
                    onClick: y
                }), h && (0,
                n.jsx)(tP.G, {
                    result: h,
                    portalElem: T ? "body" : B.L,
                    handleOnStop: "redo" === h ? j : m
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: u,
                    onClickAnswer: v,
                    onClickCancel: b
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: x,
                    title: "読みとれない解答があります",
                    onClickCancel: k,
                    onClickContinue: C,
                    onClose: k
                })]
            })
        }
          , t1 = e => {
            let {height: t, recognitionConfig: r, connected: i, placeHolder: a, recognizing: c, recognized: d, onDisconnected: u} = e
              , x = (0,
            l.Dv)(M.As)
              , h = (0,
            s.useRef)(null)
              , {elementRef: p, elementSize: g} = (0,
            o.yU)()
              , {onPointerDown: m, onPointerUp: v} = (0,
            eF._n)()
              , j = (0,
            s.useCallback)( () => {
                c(),
                m()
            }
            , [c])
              , b = (0,
            s.useCallback)( (e, t) => {
                d(e, t),
                v()
            }
            , [d]);
            return (0,
            n.jsx)(eF.zh, {
                ref: p,
                height: t,
                prefixLabel: a.label,
                suffixLabel: a.suffix,
                useLatexInLabel: a.useLatexInLabel,
                useLatexInSuffix: a.useLatexInSuffix,
                hasBackgroundImage: !1,
                children: i && (0,
                n.jsx)(tJ, {
                    ref: h,
                    width: g.width,
                    height: g.height,
                    mode: "eraser" === x ? "eraser" : "pen",
                    recognitionConfig: r,
                    onOpened: void 0,
                    onRecognizing: j,
                    onRecognized: b,
                    onDisconnected: u
                })
            })
        }
          , t2 = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)($)
              , c = (0,
            l.b9)(G)
              , [d,u] = (0,
            l.KO)(V)
              , [x,h] = (0,
            l.KO)(X)
              , p = (0,
            T.R3)()
              , {formatDto: g} = tB()
              , {getViewState: m} = tK();
            return ((0,
            s.useEffect)( () => {
                let {apData: e, answerType: n} = g(t);
                if (r) {
                    let i = m(t, r);
                    o(e.map( (e, t) => (e.answered = i.items[t].answered,
                    e.writtenSVG = i.items[t].svg,
                    e))),
                    u(n),
                    h(!0);
                    return
                }
                return o(e),
                u(n),
                () => {
                    o(void 0),
                    c(0),
                    u("1to1"),
                    h(!1)
                }
            }
            , [t, g, m, r, u, o, h, c]),
            x) ? (0,
            n.jsx)(i.Z, {
                pt: 2,
                pb: "portrait" === p ? 3 : "1to1" === d ? 12 : 2,
                px: 2,
                flex: 1,
                children: (0,
                n.jsx)(tE, {})
            }) : (0,
            n.jsx)(i.Z, {
                p: 2,
                flex: 1,
                children: (0,
                n.jsx)(tY, {
                    onAnswered: a
                })
            })
        }
          , t4 = e => {
            let {correct: t, isEnglish: r} = e
              , i = r ? function(e) {
                let t = ["?", "!", '"', ".", "？", "！", "”", "．"]
                  , r = (r, n) => {
                    var i;
                    let l = null === (i = e[n - 1]) || void 0 === i ? void 0 : i.slice(-1)
                      , s = r && 0 === n || l && t.includes(l);
                    return s ? "".concat(r[0].toUpperCase()).concat(r.slice(1)) : r
                }
                ;
                return e.map( (e, t) => r(e, t))
            }(t) : t;
            return (0,
            n.jsx)(x.J$, {
                src: i.join(" "),
                style: {
                    fontSize: 20,
                    color: d.O9.important
                }
            })
        }
        ;
        var t8 = r(60887);
        let t9 = s.memo(e => {
            let {mode: t, width: r="auto"} = e;
            switch (t) {
            case "Order":
                return (0,
                n.jsx)(i.Z, {
                    minWidth: 72,
                    width: r,
                    height: 64,
                    px: 2,
                    bgcolor: d.O9.onSurfaceWeak4,
                    border: "1px solid ".concat((0,
                    d.NH)("onSurfaceWeak2", .3)),
                    borderRadius: 1
                });
            case "Selection":
                return (0,
                n.jsx)(i.Z, {
                    width: 72,
                    height: 64,
                    borderRadius: 1
                })
            }
        }
        );
        t9.displayName = "EmptyBlock";
        let t3 = s.memo(e => {
            let {value: t, width: r="auto"} = e;
            return (0,
            n.jsx)(c.M5, {
                minWidth: 72,
                width: r,
                height: 64,
                px: 2,
                border: "1px solid ".concat((0,
                d.NH)("onSurfaceWeak2", .3)),
                borderRadius: 1,
                bgcolor: d.O9.surface,
                sx: {
                    cursor: "default",
                    userSelect: "none"
                },
                children: (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })
            })
        }
        );
        t3.displayName = "WordBlock";
        let t5 = e => {
            let {mode: t, items: r, isEnglishText: i, onClickItem: l} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(t7, {
                    items: r,
                    isEnglishText: i,
                    onClickItem: l
                });
            case "Correct":
                return (0,
                n.jsx)(re, {
                    items: r,
                    isEnglishText: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(rt, {
                    items: r,
                    isEnglishText: i
                })
            }
        }
          , t6 = ["?", "!", '"', ".", "？", "！", "”", "．"]
          , t7 = e => {
            let {children: t, items: r, isEnglishText: l, onClickItem: s} = e
              , a = (e, t) => {
                var n, i;
                let l = null === (n = r[t - 1]) || void 0 === n ? void 0 : null === (i = n.text) || void 0 === i ? void 0 : i.slice(-1)
                  , s = e && 0 === t || l && t6.includes(l);
                return s ? "".concat(e[0].toUpperCase()).concat(e.slice(1)) : e
            }
            ;
            return (0,
            n.jsxs)(c.X2, {
                position: "relative",
                flexWrap: "wrap",
                gap: 1,
                alignItems: "center",
                width: "fit-content",
                sx: {
                    userSelect: "none"
                },
                children: [r.map( (e, t) => {
                    let {id: r, text: o, movable: c} = e;
                    return c ? (0,
                    n.jsx)(i.Z, {
                        id: r,
                        children: o ? (0,
                        n.jsx)(rr, {
                            id: r,
                            onClick: s,
                            children: (0,
                            n.jsx)(t3, {
                                value: l ? a(o, t) : o
                            })
                        }, r) : (0,
                        n.jsx)(rn, {
                            id: r,
                            children: (0,
                            n.jsx)(t9, {
                                mode: "Order"
                            })
                        }, r)
                    }, r) : o && (0,
                    n.jsx)(x.J$, {
                        src: l ? a(o, t) : o,
                        style: {
                            height: 64,
                            fontSize: 20,
                            color: d.O9.onSurface,
                            display: "flex",
                            alignItems: "center"
                        }
                    })
                }
                ), t]
            })
        }
          , re = e => {
            let {items: t, isEnglishText: r} = e;
            return (0,
            n.jsx)(t7, {
                items: t,
                isEnglishText: r,
                children: (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })
            })
        }
          , rt = e => {
            let {items: t, isEnglishText: r} = e;
            return (0,
            n.jsx)(i.Z, {
                children: (0,
                n.jsx)(t7, {
                    items: t,
                    isEnglishText: r,
                    children: (0,
                    n.jsx)(i.Z, {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        margin: "auto",
                        width: 48,
                        height: 48,
                        children: (0,
                        n.jsx)(a.$V, {
                            name: "correctionX",
                            width: 48,
                            height: 48
                        })
                    })
                })
            })
        }
          , rr = e => {
            let {children: t, id: r, onClick: i} = e
              , {attributes: l, listeners: s, setNodeRef: a, isDragging: o} = (0,
            t8.O1)({
                id: r
            });
            return o ? (0,
            n.jsx)(t9, {
                mode: "Order"
            }) : (0,
            n.jsx)("div", {
                ref: a,
                id: r,
                ...s,
                ...l,
                onClick: i,
                children: t
            })
        }
          , rn = e => {
            let {children: t, id: r} = e
              , {setNodeRef: i, isOver: l} = (0,
            t8.Zj)({
                id: r
            });
            return (0,
            n.jsx)("div", {
                ref: i,
                style: {
                    opacity: l ? .5 : 1
                },
                children: t
            })
        }
          , ri = (0,
        F.cn)([])
          , rl = (0,
        F.cn)([])
          , rs = (0,
        F.cn)([])
          , ra = (0,
        F.cn)([])
          , ro = (0,
        F.cn)(!1)
          , rc = (0,
        F.cn)(0)
          , rd = () => {
            let e = (0,
            l.Dv)(rs)
              , t = (0,
            l.Dv)(rl)
              , r = (0,
            l.Dv)(ro);
            return (0,
            n.jsx)(ru, {
                answered: e,
                correct: t,
                isEnglishText: r
            })
        }
          , ru = e => {
            let {answered: t, correct: r, isEnglishText: l} = e
              , s = t.every( (e, t) => {
                let {text: n} = e;
                return n === r[t]
            }
            );
            return s ? (0,
            n.jsx)(i.Z, {
                width: "100%",
                children: (0,
                n.jsx)(t5, {
                    mode: "Correct",
                    items: t,
                    isEnglishText: l
                })
            }) : (0,
            n.jsxs)(c.sg, {
                width: "100%",
                children: [(0,
                n.jsx)(t5, {
                    mode: "Incorrect",
                    items: t,
                    isEnglishText: l
                }), (0,
                n.jsx)(c.LZ, {
                    y: 1
                }), (0,
                n.jsx)(t4, {
                    correct: r,
                    isEnglish: l
                })]
            })
        }
        ;
        var rx = r(45587)
          , rh = r(24285)
          , rp = r(18751);
        let rg = (e, t) => Math.floor(Math.random() * (t - e + 1) + e)
          , rm = () => {
            let e = (0,
            s.useCallback)(e => {
                let t = e.correctList.map( (e, t) => ({
                    index: t,
                    text: e.text,
                    movable: e.entryStyle === ew.Xc.MOVABLE
                }))
                  , r = e.dummyList.map(e => e.text)
                  , n = 0
                  , i = 0
                  , l = t.map(e => e.movable ? {
                    id: "Placeholder[".concat(n++, "]"),
                    text: void 0,
                    movable: !0
                } : {
                    id: "Fixed[".concat(i++, "]"),
                    text: e.text,
                    movable: !1
                })
                  , s = t.filter(e => e.movable).map( (e, t) => ({
                    id: "Correct[".concat(t, "]"),
                    text: e.text,
                    movable: e.movable
                }))
                  , a = r.map( (e, t) => ({
                    id: "Dummy[".concat(t, "]"),
                    text: e,
                    movable: !0
                }))
                  , o = [...s, ...a].sort( () => Math.random() - .5);
                if (o.length > 1 && o[0].text === s[0].text) {
                    let e = rg(1, o.length - 1);
                    [o[0],o[e]] = [o[e], o[0]]
                }
                let c = e.correctList.map(e => {
                    let {text: t} = e;
                    return t
                }
                );
                return {
                    answeringItems: l,
                    correctTexts: c,
                    selectableItems: o,
                    isEnglishText: e.isEnglishText
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , rv = () => {
            let e = (0,
            s.useCallback)(e => e.some(e => {
                let {text: t} = e;
                return !t
            }
            ), [])
              , t = (0,
            s.useCallback)( (t, r) => {
                let n = e(t);
                if (n)
                    return "empty";
                let i = t.every( (e, t) => {
                    let {text: n} = e;
                    return n === r[t]
                }
                );
                return i ? "correct" : "incorrect"
            }
            , [e]);
            return {
                validate: t,
                checkEmpty: e
            }
        }
          , rj = () => {
            let[e,t] = (0,
            l.KO)(rc)
              , [r,n] = (0,
            s.useState)()
              , {validate: i} = rv()
              , a = (0,
            s.useCallback)( (r, l) => {
                let s = i(r, l);
                switch (s) {
                case "correct":
                    n("correct");
                    break;
                case "incorrect":
                    0 === e ? (t(1),
                    n("redo")) : n("incorrect");
                    break;
                case "empty":
                    t(1),
                    n("incorrect")
                }
            }
            , [e, t, i])
              , o = (0,
            s.useCallback)( () => {
                n(void 0)
            }
            , []);
            return {
                currentPopup: r,
                setPopup: a,
                hidePopup: o
            }
        }
          , rb = () => {
            let e = (0,
            s.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        var r;
                        let n = e.correctList.map( (e, t) => ({
                            index: t,
                            text: e.text,
                            movable: e.entryStyle === ew.Xc.MOVABLE
                        }))
                          , i = 0
                          , l = 0
                          , s = n.map(e => e.movable ? {
                            id: "Placeholder[".concat(i++, "]"),
                            text: void 0,
                            movable: !0
                        } : {
                            id: "Fixed[".concat(l++, "]"),
                            text: e.text,
                            movable: !1
                        })
                          , a = n.filter(e => e.movable).map( (e, t) => ({
                            id: "Correct[".concat(t, "]"),
                            text: e.text
                        }))
                          , o = e.dummyList.map( (e, t) => {
                            let {text: r} = e;
                            return {
                                id: "Dummy[".concat(t, "]"),
                                text: r
                            }
                        }
                        )
                          , c = n.filter(e => e.movable).map(e => e.index)
                          , d = null !== (r = t.dropped) && void 0 !== r ? r : {}
                          , u = []
                          , x = c.map(e => {
                            let t;
                            if (d[e]) {
                                var r;
                                let n = d[e]
                                  , i = e => u.find(t => t === e)
                                  , l = a.find(e => !i(e.id) && e.text === n.text) || o.find(e => !i(e.id) && e.text === n.text);
                                t = null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : s[e].id
                            } else
                                t = s[e].id;
                            return u.push(t),
                            t
                        }
                        );
                        return {
                            answered: x
                        }
                    }(e, r.apViewState);
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , rf = "selectable_context"
          , rw = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(ri)
              , i = (0,
            l.Dv)(ra)
              , s = (0,
            l.Dv)(rl)
              , a = (0,
            l.Dv)(ro)
              , o = (0,
            l.Dv)(rc)
              , c = (0,
            T.R3)();
            return (0,
            n.jsx)(rS, {
                selectables: r,
                answering: i,
                correct: s,
                isEnglishText: a,
                wrongCount: o,
                orientation: c,
                onAnswered: t
            })
        }
          , rS = e => {
            let {correct: t, isEnglishText: r, wrongCount: o, orientation: u, onAnswered: x, ...h} = e
              , p = (0,
            l.b9)(rs)
              , [g,m] = (0,
            s.useState)([])
              , [v,j] = (0,
            s.useState)([])
              , [b,f] = (0,
            s.useState)()
              , [w,S] = (0,
            s.useState)(0)
              , [y,C] = (0,
            s.useState)(!1)
              , k = (0,
            s.useRef)(null)
              , {currentPopup: I, setPopup: O, hidePopup: _} = rj()
              , {checkEmpty: A} = rv()
              , {preventTouchScroll: L, allowTouchScroll: R} = (0,
            rp.A)()
              , E = (0,
            t8.Dy)((0,
            t8.VT)(t8.MA, {
                activationConstraint: {
                    delay: 200,
                    tolerance: 1e3
                }
            }), (0,
            t8.VT)(t8.LO, {
                activationConstraint: {
                    delay: 100,
                    tolerance: 1e3
                },
                onActivation: L
            }))
              , N = (0,
            s.useCallback)( (e, t) => {
                let r = g.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = g.findIndex(e => {
                    let {id: r} = e;
                    return r === t.id
                }
                )
                  , i = JSON.parse(JSON.stringify(g));
                [i[r],i[n]] = [i[n], i[r]],
                m(i)
            }
            , [g])
              , T = (0,
            s.useCallback)( (e, t) => {
                let r = v.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = v.findIndex(e => {
                    let {id: r} = e;
                    return r === t.id
                }
                )
                  , i = JSON.parse(JSON.stringify(v));
                [i[r],i[n]] = [i[n], i[r]],
                j(i)
            }
            , [v])
              , M = (0,
            s.useCallback)( (e, t) => {
                if (e < 0 || t < 0)
                    return;
                let r = JSON.parse(JSON.stringify(v))
                  , n = JSON.parse(JSON.stringify(g));
                [r[e],n[t]] = [n[t], r[e]],
                m(n),
                j(r)
            }
            , [v, g])
              , D = (0,
            s.useCallback)(e => {
                let t = v.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , r = g.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                );
                M(t, r)
            }
            , [v, M, g])
              , W = (0,
            s.useCallback)( (e, t) => {
                let r = g.findIndex(t => {
                    let {id: r} = t;
                    return r === e.id
                }
                )
                  , n = v.findIndex(e => {
                    let {id: r} = e;
                    return r === (null == t ? void 0 : t.id)
                }
                );
                M(n, r)
            }
            , [v, M, g])
              , z = (0,
            s.useCallback)(e => {
                var t, r;
                let {active: n} = e
                  , i = null === (t = n.data.current) || void 0 === t ? void 0 : null === (r = t.sortable) || void 0 === r ? void 0 : r.containerId
                  , l = i === rf ? g.find(e => {
                    let {id: t} = e;
                    return t === n.id
                }
                ) : v.find(e => {
                    let {id: t} = e;
                    return t === n.id
                }
                );
                f(l)
            }
            , [v, g])
              , q = (0,
            s.useCallback)(e => {
                var t, r, n, i, l;
                if (!e.over || e.active.id === e.over.id)
                    return;
                let s = null === (t = e.active.data.current) || void 0 === t ? void 0 : null === (r = t.sortable) || void 0 === r ? void 0 : r.containerId
                  , a = null === (n = null === (i = e.over) || void 0 === i ? void 0 : i.data.current) || void 0 === n ? void 0 : null === (l = n.sortable) || void 0 === l ? void 0 : l.containerId;
                s === rf && a === rf && N(e.active, e.over)
            }
            , [N])
              , H = (0,
            s.useCallback)(e => {
                var t, r, n, i;
                if (f(void 0),
                !e.over || e.active.id === e.over.id)
                    return;
                let l = null === (t = e.active.data.current) || void 0 === t ? void 0 : null === (r = t.sortable) || void 0 === r ? void 0 : r.containerId
                  , s = null === (n = e.over.data.current) || void 0 === n ? void 0 : null === (i = n.sortable) || void 0 === i ? void 0 : i.containerId;
                l === rf ? W(e.active, e.over) : s === rf ? D(e.active) : T(e.active, e.over)
            }
            , [T, D, W])
              , J = (0,
            s.useCallback)(e => {
                var t;
                let r = v.findIndex(t => {
                    let {id: r} = t;
                    return r === e.currentTarget.id
                }
                );
                if (!(null === (t = v[r]) || void 0 === t ? void 0 : t.text))
                    return;
                let n = g.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                );
                M(r, n)
            }
            , [v, M, g])
              , P = (0,
            s.useCallback)(e => {
                var t;
                let r = g.findIndex(t => {
                    let {id: r} = t;
                    return r === e.currentTarget.id
                }
                );
                if (!(null === (t = g[r]) || void 0 === t ? void 0 : t.text))
                    return;
                let n = v.findIndex(e => {
                    let {text: t} = e;
                    return !t
                }
                );
                M(n, r)
            }
            , [v, M, g])
              , F = (0,
            s.useCallback)( () => {
                let e = A(v);
                e ? C(!0) : O(v, t)
            }
            , [v, t, A, O])
              , $ = (0,
            s.useCallback)( () => {
                let e = ek.sS.CORRECT
                  , t = {
                    answered: v.filter(e => e.movable).map(e => e.id)
                };
                p(v),
                x({
                    answer: {
                        result: e,
                        textType: 2,
                        text: v.map(e => {
                            let {text: t} = e;
                            return t
                        }
                        ).join(" "),
                        wrongCount: o
                    },
                    viewStateJSON: t
                }),
                _()
            }
            , [I, p, v, x, o, _])
              , V = (0,
            s.useCallback)( () => {
                C(!1),
                O(v, t)
            }
            , [v, t, O, C])
              , X = (0,
            s.useCallback)( () => {
                C(!1)
            }
            , [C]);
            return (0,
            s.useEffect)( () => {
                m(h.selectables),
                j(h.answering)
            }
            , [h.selectables, h.answering]),
            (0,
            s.useEffect)( () => {
                document.addEventListener("touchend", R)
            }
            , [R]),
            (0,
            s.useEffect)( () => {
                if (!k.current)
                    return;
                let e = k.current.clientHeight;
                S(e + 72)
            }
            , [w]),
            (0,
            n.jsxs)(c.sg, {
                width: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(t8.LB, {
                    sensors: E,
                    collisionDetection: t8.pE,
                    onDragStart: z,
                    onDragOver: q,
                    onDragEnd: H,
                    children: [(0,
                    n.jsx)(i.Z, {
                        minHeight: w,
                        children: (0,
                        n.jsx)(i.Z, {
                            ref: k,
                            children: (0,
                            n.jsx)(t5, {
                                mode: "Default",
                                items: v,
                                isEnglishText: r,
                                onClickItem: J
                            })
                        })
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 4
                    }), (0,
                    n.jsx)(rx.Fo, {
                        id: rf,
                        items: g,
                        children: (0,
                        n.jsx)(c.X2, {
                            flexWrap: "wrap",
                            gap: 2,
                            p: 2,
                            borderRadius: 1,
                            bgcolor: d.O9.onSurfaceWeak4,
                            children: g.map(e => {
                                let {id: t, text: r} = e;
                                return r ? (0,
                                n.jsx)(ry, {
                                    id: t,
                                    onClick: P,
                                    children: (0,
                                    n.jsx)(t3, {
                                        value: r
                                    })
                                }, t) : (0,
                                n.jsx)(ry, {
                                    id: t,
                                    disabled: !0,
                                    children: (0,
                                    n.jsx)(t9, {
                                        mode: "Selection"
                                    })
                                }, t)
                            }
                            )
                        })
                    }), (0,
                    n.jsx)(t8.y9, {
                        style: {
                            width: "fit-content",
                            boxShadow: "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
                            borderRadius: "4px"
                        },
                        children: (null == b ? void 0 : b.text) ? (0,
                        n.jsx)(t3, {
                            value: b.text
                        }) : null
                    })]
                }), (0,
                n.jsx)(c.LZ, {
                    y: 4
                }), (0,
                n.jsx)(i.Z, {
                    alignSelf: "flex-end",
                    children: (0,
                    n.jsx)(a.Vy, {
                        text: "解答する",
                        disabled: void 0 !== I,
                        onClick: F
                    })
                }), I && (0,
                n.jsx)(Z.GI, {
                    result: I,
                    portalElem: "portrait" === u ? "body" : B.L,
                    handleOnStop: "redo" === I ? _ : $
                }), (0,
                n.jsx)(a.Vq, {
                    isOpen: y,
                    title: "このまま解答しますか？",
                    body: "空欄が残っています。",
                    actions: (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(a.Qd, {
                            label: "キャンセル",
                            color: "primary",
                            onClick: X
                        }), (0,
                        n.jsx)(a.Qd, {
                            label: "解答する",
                            color: "primary",
                            onClick: V
                        })]
                    }),
                    onClose: X
                })]
            })
        }
          , ry = e => {
            let {children: t, id: r, disabled: i, onClick: l} = e
              , {attributes: s, listeners: a, setNodeRef: o, transform: c, transition: d, isDragging: u} = (0,
            rx.nB)({
                id: r,
                disabled: i
            })
              , x = {
                transform: rh.ux.Transform.toString(c),
                transition: d,
                opacity: u ? 0 : 1
            };
            return (0,
            n.jsx)("div", {
                ref: o,
                id: r,
                style: x,
                onClick: l,
                ...s,
                ...a,
                children: t
            })
        }
          , rC = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(ri)
              , c = (0,
            l.b9)(ra)
              , d = (0,
            l.b9)(rl)
              , u = (0,
            l.b9)(ro)
              , x = (0,
            l.b9)(rc)
              , [h,p] = (0,
            l.KO)(rs)
              , {formatDto: g} = rm()
              , {getViewState: m} = rb()
              , v = (0,
            T.R3)();
            if ((0,
            s.useEffect)( () => {
                let {answeringItems: e, correctTexts: n, selectableItems: i, isEnglishText: l} = g(t);
                if (r) {
                    let s = m(t, r)
                      , a = 0;
                    p(e.map(e => {
                        if (!e.movable)
                            return e;
                        let t = s.answered[a++]
                          , r = i.find(e => e.id === t);
                        return {
                            id: t,
                            text: r ? r.text : e.text,
                            movable: !0
                        }
                    }
                    )),
                    d(n),
                    u(l);
                    return
                }
                o(i),
                c(e),
                p([]),
                d(n),
                u(l),
                x(0)
            }
            , [t, g, m, r, p, c, d, u, o, x]),
            h.length > 0)
                switch (v) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        pt: 4,
                        pr: 3,
                        pb: 12,
                        pl: 3,
                        children: (0,
                        n.jsx)(rd, {})
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        pt: 4,
                        pr: 3,
                        pb: 3,
                        pl: 3,
                        children: (0,
                        n.jsx)(rd, {})
                    })
                }
            else
                switch (v) {
                case "landscape":
                    return (0,
                    n.jsx)(i.Z, {
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "end",
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        children: (0,
                        n.jsx)(rw, {
                            onAnswered: a
                        })
                    });
                case "portrait":
                    return (0,
                    n.jsx)(i.Z, {
                        pt: 4,
                        pr: 3,
                        pb: 2,
                        pl: 3,
                        flex: 1,
                        children: (0,
                        n.jsx)(rw, {
                            onAnswered: a
                        })
                    })
                }
        }
        ;
        var rk = r(45098);
        let rI = (0,
        F.cn)(void 0)
          , rO = (0,
        F.cn)(void 0)
          , r_ = (0,
        F.cn)(void 0)
          , rA = (0,
        F.cn)("")
          , rL = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(rO)
              , i = (0,
            l.Dv)(r_)
              , s = (0,
            l.Dv)(rA)
              , a = (0,
            l.Dv)(M.uR)
              , o = (0,
            T.R3)();
            return void 0 === i ? null : (0,
            n.jsx)(rR, {
                result: r,
                answered: i,
                svg: s,
                orientation: o,
                onAnswered: t,
                isViewer: a
            })
        }
          , rR = e => {
            let {result: t, answered: r, svg: l, orientation: o, onAnswered: d, isViewer: u} = e
              , [x,h] = (0,
            s.useState)()
              , [p,g] = (0,
            s.useState)(!1)
              , [m,v] = (0,
            s.useState)(!1)
              , j = (0,
            s.useCallback)( () => {
                h("correct")
            }
            , [])
              , b = (0,
            s.useCallback)( () => {
                h("kanji_incorrect")
            }
            , [])
              , f = (0,
            s.useCallback)( () => {
                let e = "correct" === x
                  , t = ek.sS.CORRECT;
                d({
                    answer: {
                        result: t,
                        textType: 2,
                        text: r,
                        wrongCount: 0
                    },
                    viewStateJSON: {
                        answered: r,
                        result: e,
                        svg: l
                    }
                }),
                g(!1),
                v(!1)
            }
            , [r, x, d, l]);
            return (0,
            s.useEffect)( () => {
                "" === r ? v(!0) : g(!0)
            }
            , [r]),
            (0,
            n.jsxs)(c.sg, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: "portrait" === o ? void 0 : "100%",
                    position: "portrait" === o ? void 0 : "absolute",
                    bottom: "portrait" === o ? void 0 : 0,
                    children: [(0,
                    n.jsxs)(i.Z, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        children: [(0,
                        n.jsx)(eF.zh, {
                            mode: "Default",
                            height: "portrait" === o ? 254 : 334,
                            children: (0,
                            n.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: l
                                }
                            })
                        }), void 0 !== t && u && (0,
                        n.jsx)(i.Z, {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: "auto",
                            width: 144,
                            height: 144,
                            children: (0,
                            n.jsx)(a.$V, {
                                name: t ? "correctionO" : "correctionX",
                                width: 144,
                                height: 144
                            })
                        })]
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: "portrait" === o ? 0 : 14
                    })]
                }), p && (0,
                P.createPortal)((0,
                n.jsx)(rE, {
                    currentPopup: x,
                    isViewer: u,
                    endWrongAnswerProcess: b,
                    endCorrectAnswerProcess: j
                }), document.body), m && (0,
                P.createPortal)((0,
                n.jsx)(rN, {
                    isViewer: u,
                    currentPopup: x,
                    endAnswerProcess: f
                }), document.body), x && (0,
                n.jsx)(Z.GI, {
                    result: x,
                    portalElem: "body",
                    handleOnStop: f
                })]
            })
        }
          , rE = e => {
            let {isViewer: t, currentPopup: r, endWrongAnswerProcess: i, endCorrectAnswerProcess: l} = e;
            return (0,
            n.jsxs)(rZ, {
                children: [(0,
                n.jsx)(a.oj, {
                    width: 200,
                    text: "できなかった",
                    disabled: t || !!r,
                    onClick: i
                }), (0,
                n.jsx)(a.Vy, {
                    width: 200,
                    text: "できた",
                    disabled: t || !!r,
                    onClick: l
                })]
            })
        }
          , rN = e => {
            let {isViewer: t, currentPopup: r, endAnswerProcess: i} = e;
            return (0,
            n.jsx)(rZ, {
                children: (0,
                n.jsx)(a.Vy, {
                    width: 200,
                    text: "次へ",
                    disabled: t || !!r,
                    onClick: i
                })
            })
        }
          , rZ = (0,
        rk.Z)(i.Z)(e => {
            let {theme: t} = e;
            return {
                position: "fixed",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "0 24px",
                bottom: 24,
                right: 96,
                [t.breakpoints.up("lg")]: {
                    right: 24
                }
            }
        }
        )
          , rT = () => {
            let e = (0,
            s.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        var t;
                        let r = "ANSWER_RESULT_CORRECT" === e.result
                          , n = e.recognizedText
                          , i = null !== (t = e.svg) && void 0 !== t ? t : "";
                        return {
                            result: r,
                            answered: n,
                            svg: i
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , rM = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            s.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , rD = () => {
            let e = (0,
            l.b9)(rA)
              , [t,r] = (0,
            s.useState)("")
              , [n,i] = (0,
            s.useState)(!1)
              , [a,o] = (0,
            s.useState)(!1)
              , c = (0,
            s.useCallback)( () => {
                r("")
            }
            , [r])
              , d = (0,
            s.useCallback)( (t, n) => {
                r(t),
                e(n),
                i(!1)
            }
            , [r, i, e])
              , u = (0,
            s.useCallback)( () => {
                i(!0)
            }
            , [i])
              , x = (0,
            s.useCallback)( () => {
                r(""),
                e(""),
                o(!0)
            }
            , [r, o, e])
              , h = (0,
            s.useCallback)( () => {
                o(!1)
            }
            , [o]);
            return {
                opened: c,
                recognizing: u,
                recognized: d,
                disconnected: x,
                reconnect: h,
                setAnsweredText: r,
                setIsRecognizing: i,
                answeredText: t,
                isOpenReconnectMessage: a,
                isRecognizing: n
            }
        }
          , rW = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , rz = () => {
            let e = (0,
            s.useCallback)(e => {
                let t = e.correctAnswer;
                return {
                    correct: t
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , rq = e => {
            let {onPendingAnswered: t} = e
              , r = (0,
            l.Dv)(rI)
              , i = (0,
            l.Dv)(M.As)
              , s = (0,
            T.R3)();
            return r ? (0,
            n.jsx)(rJ, {
                recognitionConfig: r,
                orientation: s,
                selectedTool: i,
                onPendingAnswered: t
            }) : null
        }
          , rH = () => {
            let e = (0,
            s.useCallback)( (e, t, r) => {
                if (0 === e.length) {
                    t();
                    return
                }
                r()
            }
            , []);
            return {
                prepare: e
            }
        }
          , rJ = e => {
            let {recognitionConfig: t, orientation: r, selectedTool: d, onPendingAnswered: u} = e
              , x = (0,
            l.b9)(r_)
              , h = (0,
            s.useRef)(null)
              , {elementRef: p, elementSize: g} = (0,
            o.yU)()
              , {showing: m, show: v, hide: j} = rW()
              , {prepare: b} = rH()
              , {opened: f, recognizing: w, recognized: S, disconnected: y, reconnect: C, answeredText: k, isOpenReconnectMessage: I, isRecognizing: O} = rD()
              , {show: _, hide: A, visibled: L} = rM()
              , {onPointerDown: R, onPointerUp: E} = (0,
            eF._n)()
              , N = (0,
            s.useCallback)( () => {
                w(),
                R()
            }
            , [w])
              , T = (0,
            s.useCallback)( (e, t) => {
                S(e, t),
                E()
            }
            , [S])
              , M = (0,
            s.useCallback)( () => {
                b(k, _, () => {
                    x(k),
                    u()
                }
                )
            }
            , [b, k, _, x, u])
              , D = (0,
            s.useCallback)( () => {
                x(k),
                u(),
                j()
            }
            , [k, j, u, x])
              , W = (0,
            s.useCallback)( () => {
                A(),
                v("incorrect")
            }
            , [A, v]);
            (0,
            s.useEffect)( () => {
                var e, t, r;
                null === (e = h.current) || void 0 === e || null === (t = e.editor) || void 0 === t || null === (r = t.resize) || void 0 === r || r.call(t)
            }
            , [p]);
            let z = "portrait" === r;
            return (0,
            n.jsxs)(c.sg, {
                height: "100%",
                position: "relative",
                children: [(0,
                n.jsxs)(c.sg, {
                    width: z ? void 0 : "100%",
                    position: z ? void 0 : "absolute",
                    bottom: z ? void 0 : 0,
                    children: [(0,
                    n.jsx)(i.Z, {
                        width: "100%",
                        maxWidth: 712,
                        alignSelf: "center",
                        children: (0,
                        n.jsx)(eF.zh, {
                            ref: p,
                            height: z ? 254 : 334,
                            children: !I && (0,
                            n.jsx)(tJ, {
                                ref: h,
                                width: g.width,
                                height: z ? 254 : 334,
                                mode: "eraser" === d ? "eraser" : "pen",
                                recognitionConfig: t,
                                onOpened: f,
                                onRecognizing: N,
                                onRecognized: T,
                                onDisconnected: y
                            })
                        })
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: z ? 2 : 5
                    }), (0,
                    n.jsx)(i.Z, {
                        alignSelf: "end",
                        children: (0,
                        n.jsx)(a.Vy, {
                            text: "答え合わせ",
                            disabled: O || I,
                            onClick: M
                        })
                    }), (0,
                    n.jsx)(eF.eN, {
                        isOpen: L,
                        onClickAnswer: W,
                        onClickCancel: A
                    })]
                }), m && (0,
                n.jsx)(Z.GI, {
                    result: m,
                    portalElem: "body",
                    handleOnStop: D
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: I,
                    y: z ? 96 : 24,
                    onClick: C
                })]
            })
        }
          , rP = e => {
            let {dto: t, replayResource: r, onPendingAnswered: a, onAnswered: c} = e
              , d = (0,
            l.b9)(rO)
              , u = (0,
            l.b9)(rI)
              , x = (0,
            l.b9)(rA)
              , [h,p] = (0,
            l.KO)(r_)
              , {formatDto: g} = rz()
              , m = (0,
            T.R3)()
              , {getViewState: v} = rT()
              , {windowHeight: j} = (0,
            o.AS)();
            return ((0,
            s.useEffect)( () => {
                if (r) {
                    let e = v(r);
                    d(e.result),
                    p(e.answered),
                    x(e.svg);
                    return
                }
                return u({
                    mode: "Japanese",
                    useLK: !1,
                    sk: void 0
                }),
                d(void 0),
                p(void 0),
                x(""),
                () => {
                    u(void 0),
                    d(void 0),
                    p(void 0),
                    x("")
                }
            }
            , [t, r, v, p, u, x, g, d]),
            void 0 !== h) ? (0,
            n.jsx)(i.Z, {
                height: "portrait" === m ? "auto" : j - eE.J9 - 18,
                p: 2,
                children: (0,
                n.jsx)(rL, {
                    onAnswered: c
                })
            }) : (0,
            n.jsx)(i.Z, {
                height: "portrait" === m ? "auto" : j - eE.J9 - 18,
                p: 2,
                children: (0,
                n.jsx)(rq, {
                    onPendingAnswered: a
                })
            })
        }
          , rF = e => {
            let {items: t, style: r} = e
              , l = "他の選択肢"
              , s = 16 * l.length;
            return (0,
            n.jsxs)(c.X2, {
                gap: 2,
                style: r,
                children: [(0,
                n.jsx)(i.Z, {
                    minWidth: s,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(a.xv, {
                        color: "onSurfaceWeak1",
                        fontWeight: "bold",
                        children: l
                    })
                }), (0,
                n.jsx)(K.Z, {
                    orientation: "vertical",
                    variant: "middle",
                    flexItem: !0,
                    sx: {
                        borderColor: d.O9.onSurfaceWeak3,
                        my: 0
                    }
                }), (0,
                n.jsx)(c.X2, {
                    flexWrap: "wrap",
                    gap: "8px 24px",
                    children: t.map( (e, t) => (0,
                    n.jsx)(x.J$, {
                        src: e.text,
                        style: {
                            fontSize: 16,
                            color: d.O9.onSurface,
                            display: "flex",
                            alignItems: "flex-end"
                        }
                    }, t))
                })]
            })
        }
        ;
        var r$ = r(69417);
        let rV = e => {
            let {qml: t, mode: r, onClick: i} = e;
            switch (r) {
            case "Active":
                return (0,
                n.jsx)(rX, {
                    qml: t,
                    onClick: i
                });
            case "Correct":
                return (0,
                n.jsx)(rG, {
                    qml: t,
                    onClick: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(rB, {
                    qml: t,
                    onClick: i
                })
            }
        }
          , rX = e => {
            let {qml: t, onClick: r} = e;
            return (0,
            n.jsx)(r$.Z, {
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.onSurfaceWeak3,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                onClick: r,
                children: (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.onSurface
                    },
                    weight: "bold"
                })
            })
        }
          , rG = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(r$.Z, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.correctWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.correct
                    },
                    weight: "bold"
                })]
            })
        }
          , rB = e => {
            let {qml: t} = e;
            return (0,
            n.jsxs)(r$.Z, {
                disabled: !0,
                sx: {
                    width: 1,
                    height: 1,
                    minHeight: 64,
                    border: 2,
                    borderColor: d.O9.importantWeak,
                    borderRadius: 8,
                    paddingY: 0,
                    paddingX: 3
                },
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "1",
                    left: 8,
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), (0,
                n.jsx)(x.J$, {
                    src: t,
                    style: {
                        fontSize: 20,
                        color: d.O9.important
                    },
                    weight: "bold"
                })]
            })
        }
          , rK = (0,
        F.cn)([])
          , rY = (0,
        F.cn)({
            id: 0,
            text: ""
        })
          , rU = (0,
        F.cn)(void 0)
          , rQ = () => {
            let e = (0,
            l.Dv)(rK)
              , t = (0,
            l.Dv)(rY)
              , r = (0,
            l.Dv)(rU);
            return r ? (0,
            n.jsx)(r0, {
                selectables: e,
                correct: t,
                answered: r
            }) : null
        }
          , r0 = e => {
            let {selectables: t, correct: r, answered: i} = e
              , l = i.id === r.id ? i : void 0
              , s = i.id !== r.id ? r : void 0
              , a = i.id !== r.id ? i : void 0
              , o = [null == l ? void 0 : l.id, null == s ? void 0 : s.id, null == a ? void 0 : a.id]
              , c = t.filter(e => !o.includes(e.id));
            return (0,
            n.jsxs)(Y.s, {
                gap: 2,
                children: [l && (0,
                n.jsx)(rV, {
                    qml: l.text,
                    mode: "Correct"
                }), s && (0,
                n.jsx)(rV, {
                    qml: s.text,
                    mode: "Correct"
                }), a && (0,
                n.jsx)(rV, {
                    qml: a.text,
                    mode: "Incorrect"
                }, a.id), 0 !== c.length && (0,
                n.jsx)(rF, {
                    items: c,
                    style: {
                        marginTop: "8px"
                    }
                })]
            })
        }
          , r1 = () => {
            let e = (0,
            s.useCallback)(e => {
                var t;
                let r = null !== (t = e.correctItem) && void 0 !== t ? t : new ew.LE
                  , n = {
                    id: r.itemId,
                    text: r.text
                }
                  , i = e.itemList.map(e => {
                    let t = (0,
                    ta.Yv)(e.text);
                    return {
                        id: e.itemId,
                        text: t
                    }
                }
                );
                return e.shouldShuffle && i.sort( () => .5 - Math.random()),
                {
                    selectables: i,
                    correct: n
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , r2 = () => {
            let e = (0,
            s.useCallback)( (e, t) => t.id === e.id ? "correct" : "incorrect", []);
            return {
                validate: e
            }
        }
          , r4 = () => {
            let e = (0,
            s.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        let t = e.items.map(e => e.itemId)
                          , r = e.items.map(e => e.itemId)
                          , n = t[e.selected];
                        return {
                            order: r,
                            answered: n
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , r8 = e => {
            let t = (0,
            l.Dv)(rK)
              , r = (0,
            l.b9)(rU)
              , [n,i] = (0,
            s.useState)(t[0])
              , [a,o] = (0,
            s.useState)("")
              , [c,d] = (0,
            s.useState)("incorrect")
              , {validate: u} = r2()
              , x = (0,
            s.useCallback)( (t, r, n) => {
                let l = u(e, t);
                switch (d(l),
                i(t),
                o(t.text),
                l) {
                case "correct":
                    r();
                    break;
                case "incorrect":
                    n()
                }
            }
            , [e, d, u])
              , h = (0,
            s.useCallback)(e => {
                let i = ek.sS.CORRECT
                  , l = {
                    order: t.map(e => e.id),
                    answered: n.id
                };
                r(n),
                e({
                    answer: {
                        result: i,
                        textType: 2,
                        text: a,
                        wrongCount: 0
                    },
                    viewStateJSON: l
                })
            }
            , [c, t, n, r, a]);
            return {
                prepare: x,
                fix: h
            }
        }
          , r9 = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , r3 = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(rK)
              , i = (0,
            l.Dv)(rY)
              , s = (0,
            T.R3)();
            return (0,
            n.jsx)(r5, {
                selectables: r,
                correct: i,
                orientation: s,
                onAnswered: t
            })
        }
          , r5 = e => {
            let {selectables: t, correct: r, orientation: l, onAnswered: a} = e
              , {prepare: o, fix: d} = r8(r)
              , {showing: u, show: x, hide: h} = r9()
              , p = (0,
            s.useCallback)(e => o(e, () => x("correct"), () => x("incorrect")), [o, x])
              , g = (0,
            s.useCallback)( () => {
                d(a),
                h()
            }
            , [d, h, a]);
            return (0,
            n.jsxs)(i.Z, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                children: [(0,
                n.jsx)(Y.s, {
                    width: "100%",
                    children: t.map( (e, r) => (0,
                    n.jsxs)(Y.s, {
                        children: [(0,
                        n.jsx)(rV, {
                            qml: e.text,
                            mode: "Active",
                            onClick: () => p(e)
                        }), r < t.length - 1 && (0,
                        n.jsx)(c.LZ, {
                            y: 2
                        })]
                    }, r))
                }), u && (0,
                n.jsx)(Z.GI, {
                    result: u,
                    portalElem: "portrait" === l ? "body" : B.L,
                    handleOnStop: g
                })]
            })
        }
          , r6 = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(rK)
              , c = (0,
            l.b9)(rY)
              , [d,u] = (0,
            l.KO)(rU)
              , {formatDto: x} = r1()
              , {getViewState: h} = r4();
            return ((0,
            s.useEffect)( () => {
                let {selectables: e, correct: n} = x(t);
                if (r) {
                    let t = h(r);
                    o(t.order.reduce( (t, r) => {
                        let n = e.find(e => e.id === r);
                        return n ? [...t, n] : t
                    }
                    , [])),
                    c(n),
                    u(e.find(e => e.id === t.answered));
                    return
                }
                o(e),
                c(n),
                u(void 0)
            }
            , [t, x, h, r, u, c, o]),
            d) ? (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(rQ, {})
            }) : (0,
            n.jsx)(i.Z, {
                padding: 3,
                children: (0,
                n.jsx)(r3, {
                    onAnswered: a
                })
            })
        }
          , r7 = e => {
            let {mode: t, modelAnswer: r, recognitionMode: i} = e;
            switch (t) {
            case "Correct":
                return (0,
                n.jsx)(ne, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(nt, {
                    modelAnswer: r,
                    recognitionMode: i
                });
            default:
                return (0,
                n.jsx)(n.Fragment, {})
            }
        }
          , ne = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.correct,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    color: "correct",
                    textAlign: "center",
                    children: t
                })
            })
        }
          , nt = e => {
            let {modelAnswer: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(n.Fragment, {
                children: "Math" === r ? (0,
                n.jsx)(eF.Yf, {
                    style: {
                        fontSize: 20,
                        color: d.O9.important,
                        textAlign: "center"
                    },
                    text: null != t ? t : ""
                }) : (0,
                n.jsx)(a.xv, {
                    size: "lg",
                    color: "important",
                    textAlign: "center",
                    children: t
                })
            })
        }
        ;
        var nr = r(70056);
        let nn = e => {
            let {mode: t="Default", answeredText: r, recognitionMode: i} = e;
            switch ((0,
            s.useEffect)( () => {
                (0,
                nr.Z)("#fitty", {
                    minSize: 12,
                    maxSize: 20,
                    multiLine: !1
                })
            }
            , []),
            t) {
            case "Default":
                return (0,
                n.jsx)(ni, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Correct":
                return (0,
                n.jsx)(nl, {
                    answeredText: r,
                    recognitionMode: i
                });
            case "Incorrect":
                return (0,
                n.jsx)(ns, {
                    answeredText: r,
                    recognitionMode: i
                })
            }
        }
          , ni = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsx)(c.sg, {
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.primaryWeak1),
                children: "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eF.Yf, {
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(a.xv, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })
            })
        }
          , nl = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.correctWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eF.Yf, {
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(a.xv, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , ns = e => {
            let {answeredText: t, recognitionMode: r} = e;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "center",
                height: 72,
                borderBottom: "2px solid ".concat(d.O9.importantWeak),
                children: [(0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                }), "Math" === r ? (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(eF.Yf, {
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface,
                            textAlign: "center"
                        },
                        text: t,
                        id: "fitty"
                    })
                }) : (0,
                n.jsx)("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: (0,
                    n.jsx)(a.xv, {
                        size: "lg",
                        textAlign: "center",
                        id: "fitty",
                        children: t
                    })
                })]
            })
        }
          , na = e => {
            let {mode: t="Default", width: r="100%", answeredText: i, modelAnswer: l, recognitionMode: s} = e;
            switch (t) {
            case "Default":
                return (0,
                n.jsx)(no, {
                    width: r,
                    answeredText: i,
                    recognitionMode: s
                });
            case "Correct":
                return (0,
                n.jsx)(nc, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: s
                });
            case "Incorrect":
                return (0,
                n.jsx)(nd, {
                    width: r,
                    answeredText: i,
                    modelAnswer: l,
                    recognitionMode: s
                })
            }
        }
          , no = e => {
            let {width: t, answeredText: r, recognitionMode: l} = e;
            return (0,
            n.jsx)(i.Z, {
                width: t,
                children: (0,
                n.jsx)(nn, {
                    mode: "Default",
                    answeredText: r,
                    recognitionMode: l
                })
            })
        }
          , nc = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: s} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(nn, {
                    mode: "Correct",
                    answeredText: r,
                    recognitionMode: s
                }), (0,
                n.jsx)(c.sg, {
                    height: 72,
                    justifyContent: "center",
                    children: r !== l && (0,
                    n.jsx)(r7, {
                        mode: "Correct",
                        modelAnswer: l,
                        recognitionMode: s
                    })
                })]
            })
        }
          , nd = e => {
            let {width: t, answeredText: r, modelAnswer: l, recognitionMode: s} = e;
            return (0,
            n.jsxs)(i.Z, {
                width: t,
                children: [(0,
                n.jsx)(nn, {
                    mode: "Incorrect",
                    answeredText: r,
                    recognitionMode: s
                }), (0,
                n.jsx)(c.sg, {
                    justifyContent: "center",
                    height: 72,
                    children: l && (0,
                    n.jsx)(r7, {
                        mode: "Incorrect",
                        modelAnswer: l,
                        recognitionMode: s
                    })
                })]
            })
        }
        ;
        var nu = r(62058);
        let nx = () => {
            let e = (0,
            l.Dv)(nu.Zr)
              , t = (0,
            l.Dv)(nu.NZ)
              , r = (0,
            l.Dv)(nu.XX)
              , i = (0,
            l.Dv)(nu.Th)
              , s = (0,
            l.Dv)(nu.Gl)
              , a = (0,
            l.Dv)(nu.m5)
              , o = (0,
            T.R3)();
            return void 0 === t ? null : (0,
            n.jsx)(nh, {
                modelAnswer: e,
                answered: t,
                placeHolder: r,
                svg: i,
                orientation: o,
                recognitionConfig: s,
                validationResult: a
            })
        }
          , nh = e => {
            let {answered: t, modelAnswer: r, placeHolder: l, svg: s, orientation: a, recognitionConfig: o, validationResult: d} = e
              , u = "correct" === d;
            return (0,
            n.jsx)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: "portrait" === a ? (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(eF.zh, {
                        mode: u ? "Correct" : "Incorrect",
                        prefixLabel: l.label,
                        suffixLabel: l.suffix,
                        useLatexInLabel: l.useLatexInLabel,
                        useLatexInSuffix: l.useLatexInSuffix,
                        children: (0,
                        n.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: s
                            }
                        })
                    }), (0,
                    n.jsxs)(c.X2, {
                        columnGap: 3,
                        marginTop: 2,
                        children: [(0,
                        n.jsx)(c.LZ, {
                            x: 4
                        }), (0,
                        n.jsx)(na, {
                            mode: u ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t,
                            modelAnswer: t !== r ? r : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                }) : (0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: [(0,
                    n.jsx)(eF.zh, {
                        mode: u ? "Correct" : "Incorrect",
                        prefixLabel: l.label,
                        suffixLabel: l.suffix,
                        useLatexInLabel: l.useLatexInLabel,
                        useLatexInSuffix: l.useLatexInSuffix,
                        children: (0,
                        n.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: s
                            }
                        })
                    }), (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        rowGap: 3,
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(na, {
                            mode: u ? "Correct" : "Incorrect",
                            width: 368,
                            answeredText: t,
                            modelAnswer: t !== r ? r : void 0,
                            recognitionMode: null == o ? void 0 : o.mode
                        })]
                    })]
                })
            })
        }
          , np = e => {
            let t = (0,
            s.useCallback)(t => {
                let {mode: r, sk: n, useLK: i} = t;
                return "science" === e && "Math" === r || "science" === e && i && "NUMBER_SK" === n
            }
            , [e]);
            return {
                isSantaScriptTargetQuestion: t
            }
        }
        ;
        var ng = r(72315);
        let nm = () => {
            let e = (0,
            s.useCallback)(e => {
                var t;
                let r = e.correctAnswerList.reduce( (e, t) => {
                    if (!t.option.case || !t.option.value)
                        return e;
                    if ("text" === t.option.case) {
                        let r = (0,
                        ng.Cn)(t.option.value);
                        return [...e, {
                            case: "text",
                            value: r = (0,
                            ng.YA)(r)
                        }]
                    }
                    return [...e, t.option]
                }
                , [])
                  , n = e.displayAnswerText
                  , i = e.interactiveInkSetting ? (0,
                eF.Wm)(e.interactiveInkSetting) : "Math"
                  , l = {
                    mode: i,
                    useLK: e.useLk,
                    sk: e.skNameOptional.value
                }
                  , s = null !== (t = e.placeHolder) && void 0 !== t ? t : new ew.i
                  , a = tG(e.replaceType)
                  , o = e.gradeId;
                return {
                    correct: r,
                    modelAnswer: n,
                    recognitionConfig: l,
                    placeHolder: s,
                    replaceType: a,
                    gradeId: o
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , nv = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
        ;
        var nj = r(58695);
        let nb = () => {
            let e = (0,
            s.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        var r;
                        let n = t.recognizedText
                          , i = null !== (r = t.svg) && void 0 !== r ? r : "";
                        return {
                            answered: n,
                            svg: i
                        }
                    }(0, r.apViewState);
                throw Error("no view state")
            }
            )(0, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , nf = () => {
            let e = (0,
            l.Dv)(nu.m5)
              , t = (0,
            l.Dv)(nu.Th)
              , r = (0,
            l.Dv)(tV.f)
              , n = (0,
            l.b9)(nu.NZ)
              , [i,a] = (0,
            s.useState)(0)
              , o = (0,
            s.useCallback)( (t, n, l, s, o, c) => {
                if (r) {
                    n();
                    return
                }
                if ("empty" === e) {
                    c ? o() : t();
                    return
                }
                if ("incorrect" === e && 0 === i) {
                    a(1),
                    s();
                    return
                }
                switch (e) {
                case "correct":
                    l();
                    break;
                case "incorrect":
                    o()
                }
            }
            , [r, e, i])
              , c = (0,
            s.useCallback)( (r, l) => {
                let s = ek.sS.CORRECT;
                n(r),
                l({
                    answer: {
                        result: s,
                        textType: 2,
                        text: r,
                        wrongCount: i
                    },
                    viewStateJSON: {
                        answered: r,
                        svg: t
                    }
                })
            }
            , [n, t, e, i]);
            return {
                prepare: o,
                fix: c
            }
        }
          , nw = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            s.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , nS = () => {
            let e = (0,
            l.b9)(nu.Th)
              , t = (0,
            l.Dv)(nu.Gs)
              , r = (0,
            l.Dv)(nu.C$)
              , n = (0,
            l.Dv)(nu._S)
              , [i,a] = (0,
            s.useState)("")
              , [o,c] = (0,
            s.useState)(!1)
              , [d,u] = (0,
            s.useState)(!1)
              , {validate: x} = (0,
            nj._)()
              , h = (0,
            s.useCallback)( () => {
                a("")
            }
            , [a])
              , p = (0,
            s.useCallback)( () => {
                c(!0)
            }
            , [c])
              , g = (0,
            s.useCallback)( (i, l) => {
                let s = x({
                    input: i,
                    correct: t,
                    gradeId: n,
                    replaceType: r
                });
                a(s),
                e(l),
                c(!1)
            }
            , [x, t, n, r, e])
              , m = (0,
            s.useCallback)( () => {
                a(""),
                e(""),
                u(!0)
            }
            , [a, u, e])
              , v = (0,
            s.useCallback)( () => {
                u(!1)
            }
            , [u]);
            return {
                opened: h,
                recognizing: p,
                recognized: g,
                disconnected: m,
                reconnect: v,
                recognizedText: i,
                isOpenReconnectMessage: d,
                isRecognizing: o
            }
        }
          , ny = () => {
            let[e,t] = (0,
            s.useState)(1)
              , r = (0,
            s.useCallback)( () => {
                t(e - 1)
            }
            , [e])
              , n = (0,
            s.useCallback)( () => {
                t(e + 1)
            }
            , [e]);
            return {
                page: e,
                maxPage: 4,
                back: r,
                forward: n
            }
        }
        ;
        var nC = r(66105);
        let nk = () => {
            let e = (0,
            l.b9)(nu.Th)
              , t = (0,
            l.b9)(nC.D)
              , r = (0,
            l.Dv)(nu.Gs)
              , n = (0,
            l.Dv)(nu.C$)
              , i = (0,
            l.Dv)(nu._S)
              , a = (0,
            l.Dv)(M.mv)
              , o = (0,
            l.Dv)(M.dx)
              , [c,d] = (0,
            s.useState)("")
              , [u,x] = (0,
            s.useState)(!1)
              , [h,p] = (0,
            s.useState)(!1)
              , {validate: g} = (0,
            nj._)()
              , m = (0,
            s.useCallback)( () => {
                d("")
            }
            , [d])
              , v = (0,
            s.useCallback)( () => {
                x(!0)
            }
            , [x])
              , j = (0,
            s.useCallback)( (l, s, a) => {
                let o = g({
                    input: l,
                    correct: r,
                    gradeId: i,
                    replaceType: n
                });
                d(o),
                e(s),
                x(!1),
                t(a)
            }
            , [g, r, i, n, d, e, x, t])
              , b = (0,
            s.useCallback)( () => {
                p(!0)
            }
            , [p])
              , f = (0,
            s.useCallback)( () => {
                p(!1)
            }
            , [p])
              , w = (0,
            s.useMemo)( () => {
                var e;
                return {
                    programId: null !== (e = null == o ? void 0 : o.id) && void 0 !== e ? e : 0,
                    courseCode: a.code,
                    replaceType: n
                }
            }
            , [a.code, null == o ? void 0 : o.id, n]);
            return {
                opened: m,
                recognizing: v,
                recognized: j,
                recognizedError: b,
                reconnect: f,
                recognizedText: c,
                isOpenReconnectMessage: h,
                isRecognizing: u,
                appendix: w
            }
        }
          , nI = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            s.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , nO = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(nu.Gl)
              , i = (0,
            l.Dv)(nu.XX)
              , s = (0,
            l.Dv)(M.As)
              , a = (0,
            T.R3)();
            return r ? (0,
            n.jsx)(n_, {
                recognitionConfig: r,
                placeHolder: i,
                orientation: a,
                selectedTool: s,
                onAnswered: t
            }) : null
        }
          , n_ = e => {
            let {recognitionConfig: t, placeHolder: r, orientation: d, selectedTool: u, onAnswered: x} = e
              , h = (0,
            l.b9)(tV.f)
              , p = (0,
            s.useRef)(null)
              , {elementRef: g, elementSize: m} = (0,
            o.yU)()
              , {opened: v, recognizing: j, recognized: b, disconnected: f, reconnect: w, recognizedText: S, isOpenReconnectMessage: y, isRecognizing: C} = nS()
              , {show: k, hide: I, visibled: O} = nI()
              , {show: _, hide: A, visibled: L} = nw()
              , {page: R, maxPage: E, back: N, forward: T} = ny()
              , {prepare: M, fix: D} = nf()
              , {showing: W, show: z, hide: q} = nv()
              , {onPointerDown: H, onPointerUp: J} = (0,
            eF._n)()
              , P = (0,
            s.useCallback)( () => {
                j(),
                H()
            }
            , [j])
              , F = (0,
            s.useCallback)( (e, t) => {
                b(e, t),
                J()
            }
            , [b])
              , $ = (0,
            s.useCallback)(e => {
                M(k, _, () => z("correct"), () => z("redo"), () => z("incorrect"), e)
            }
            , [M, k, _, z])
              , V = (0,
            s.useCallback)( () => $(!1), [$])
              , X = (0,
            s.useCallback)( () => {
                D(S, x),
                q()
            }
            , [S, D, q, x])
              , G = (0,
            s.useCallback)( () => {
                h(!1),
                A(),
                V()
            }
            , [A, h, V])
              , K = (0,
            s.useCallback)( () => {
                I(),
                $(!0)
            }
            , [I, $]);
            (0,
            s.useEffect)( () => {
                var e, t, r;
                p.current && g.current && (null === (e = p.current) || void 0 === e || null === (t = e.editor) || void 0 === t || null === (r = t.resize) || void 0 === r || r.call(t),
                1 === R ? g.current.scrollLeft = 0 : g.current.scrollLeft = .8 * m.width * (R - 1))
            }
            , [m.width, R, g]);
            let Y = C || y || void 0 !== W
              , U = m.width + .8 * m.width * (E - 1)
              , Q = "portrait" === d;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 784,
                    children: [(0,
                    n.jsx)(eF.zh, {
                        ref: g,
                        mode: "Slider",
                        page: R,
                        maxPage: E,
                        prefixLabel: r.label,
                        suffixLabel: r.suffix,
                        useLatexInLabel: r.useLatexInLabel,
                        useLatexInSuffix: r.useLatexInSuffix,
                        onClickLeft: N,
                        onClickRight: T,
                        children: !y && (0,
                        n.jsx)(tJ, {
                            ref: p,
                            width: U,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            recognitionConfig: t,
                            onOpened: v,
                            onRecognizing: P,
                            onRecognized: F,
                            onDisconnected: f
                        })
                    }), Q ? (0,
                    n.jsxs)(c.X2, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        n.jsx)(i.Z, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            n.jsx)(na, {
                                width: 368,
                                answeredText: S,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        n.jsx)(a.Vy, {
                            text: "解答する",
                            disabled: Y,
                            onClick: V
                        })]
                    }) : (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(na, {
                            width: 368,
                            answeredText: S,
                            recognitionMode: t.mode
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(a.Vy, {
                                text: "解答する",
                                disabled: Y,
                                onClick: V
                            })
                        })]
                    })]
                }), W && (0,
                n.jsx)(Z.GI, {
                    result: W,
                    portalElem: Q ? "body" : B.L,
                    handleOnStop: "redo" === W ? q : X
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: O,
                    onClickAnswer: K,
                    onClickCancel: I
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: L,
                    title: "文字を読みとれませんでした",
                    onClickCancel: A,
                    onClickContinue: G,
                    onClose: A
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: y,
                    y: Q ? 96 : 24,
                    onClick: w
                })]
            })
        }
        ;
        var nA = r(72213);
        let nL = e => {
            let {useLK: t, sk: r, mode: n} = e;
            if (t && r)
                switch (r) {
                case "NUMBER_SK":
                    return "number_sk";
                case "ALPHABET_SK":
                    return "alphabet_sk";
                case "HIRAGANA_SK":
                    return "hiragana_sk";
                case "KATAKANA_SK":
                    return "katakana_sk"
                }
            switch (n) {
            case "Japanese":
                return "japanese";
            case "English":
                return "english";
            case "Math":
                return "math"
            }
        }
          , nR = (0,
        s.forwardRef)( (e, t) => {
            let {width: r, height: l, editorStyle: a, apiUrl: o, mode: c, recognitionConfig: d, onOpened: u, onRecognizing: x, onRecognized: h, onRecognizedError: p, appendix: g, isOpenReconnectMessage: m} = e
              , v = (0,
            s.useRef)()
              , j = (0,
            s.useCallback)(e => {
                let {data: t, errors: r} = e;
                if (r) {
                    null == p || p(r);
                    return
                }
                null == h || h(t)
            }
            , [p, h]);
            return (0,
            s.useEffect)( () => {
                var e;
                let r = null == t ? void 0 : t.current;
                if (!r)
                    throw Error("Mount element not found");
                let n = nL(d)
                  , i = nA.M.create(r, {
                    fill: !0,
                    style: a,
                    model: n,
                    apiUrl: o,
                    program: {
                        programId: null !== (e = null == g ? void 0 : g.programId) && void 0 !== e ? e : 0,
                        courseCode: null == g ? void 0 : g.courseCode
                    },
                    recognizerOptions: {
                        debug: !1
                    },
                    autoRecognition: !0
                });
                return i.addRecognitionResultListener(j),
                i.addStrokeStartListener(x),
                v.current = i,
                null == u || u(),
                () => {
                    var e;
                    null === (e = v.current) || void 0 === e || e.cleanupListeners()
                }
            }
            , []),
            (0,
            s.useEffect)( () => {
                var e;
                null === (e = v.current) || void 0 === e || e.setPointerType(c)
            }
            , [c]),
            (0,
            s.useEffect)( () => {
                var e;
                m || null === (e = v.current) || void 0 === e || e.recognize()
            }
            , [m]),
            (0,
            n.jsx)(i.Z, {
                ref: t,
                sx: {
                    width: r,
                    height: l
                }
            })
        }
        );
        nR.displayName = "SantaScriptRecognizer";
        var nE = r(34155);
        let nN = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(nu.Gl)
              , i = (0,
            l.Dv)(nu.XX)
              , s = (0,
            l.Dv)(M.As)
              , a = (0,
            T.R3)();
            return r ? (0,
            n.jsx)(nZ, {
                recognitionConfig: r,
                placeHolder: i,
                orientation: a,
                selectedTool: s,
                onAnswered: t
            }) : null
        }
          , nZ = e => {
            let {recognitionConfig: t, placeHolder: r, orientation: d, selectedTool: u, onAnswered: x} = e
              , h = (0,
            l.b9)(tV.f)
              , p = (0,
            s.useRef)(null)
              , {elementRef: g, elementSize: m} = (0,
            o.yU)()
              , {opened: v, recognizing: j, recognized: b, recognizedError: f, reconnect: w, recognizedText: S, isOpenReconnectMessage: y, isRecognizing: C, appendix: k} = nk()
              , {show: I, hide: O, visibled: _} = nI()
              , {show: A, hide: L, visibled: R} = nw()
              , {page: E, maxPage: N, back: T, forward: M} = ny()
              , {prepare: D, fix: W} = nf()
              , {showing: z, show: q, hide: H} = nv()
              , J = (0,
            s.useCallback)(e => {
                D(I, A, () => q("correct"), () => q("redo"), () => q("incorrect"), e)
            }
            , [D, I, A, q])
              , P = (0,
            s.useCallback)( () => J(!1), [J])
              , F = (0,
            s.useCallback)( () => {
                W(S, x),
                H()
            }
            , [S, W, H, x])
              , $ = (0,
            s.useCallback)( () => {
                h(!1),
                L(),
                P()
            }
            , [L, h, P])
              , V = (0,
            s.useCallback)( () => {
                O(),
                J(!0)
            }
            , [O, J]);
            (0,
            s.useEffect)( () => {
                var e, t, r;
                p.current && g.current && (null === (e = p.current) || void 0 === e || null === (t = e.editor) || void 0 === t || null === (r = t.resize) || void 0 === r || r.call(t),
                1 === E ? g.current.scrollLeft = 0 : g.current.scrollLeft = .8 * m.width * (E - 1))
            }
            , [m.width, E, g]);
            let X = C || y || void 0 !== z
              , G = m.width + .8 * m.width * (N - 1)
              , K = "portrait" === d
              , Y = (0,
            s.useCallback)(e => {
                let {tokenResult: t, svgSnapshot: r, ...n} = e
                  , i = {
                    tokenResult: t,
                    ...n
                };
                null == b || b(t, r, i)
            }
            , [b]);
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsxs)(i.Z, {
                    width: "100%",
                    maxWidth: 784,
                    children: [(0,
                    n.jsx)(eF.zh, {
                        ref: g,
                        mode: "Slider",
                        page: E,
                        maxPage: N,
                        prefixLabel: r.label,
                        suffixLabel: r.suffix,
                        useLatexInLabel: r.useLatexInLabel,
                        useLatexInSuffix: r.useLatexInSuffix,
                        onClickLeft: T,
                        onClickRight: M,
                        children: (0,
                        n.jsx)(nR, {
                            ref: p,
                            width: G,
                            height: 240,
                            mode: "eraser" === u ? "eraser" : "pen",
                            apiUrl: nE.env.NEXT_PUBLIC_SANTASCRIPT_API_URL,
                            recognitionConfig: t,
                            onOpened: v,
                            onRecognizing: j,
                            onRecognized: Y,
                            onRecognizedError: f,
                            appendix: k,
                            isOpenReconnectMessage: y
                        })
                    }), K ? (0,
                    n.jsxs)(c.X2, {
                        marginTop: 2,
                        sx: {
                            justifyContent: "space-between"
                        },
                        children: [(0,
                        n.jsx)(i.Z, {
                            sx: {
                                marginLeft: "54px"
                            },
                            children: (0,
                            n.jsx)(na, {
                                width: 368,
                                answeredText: S,
                                recognitionMode: t.mode
                            })
                        }), (0,
                        n.jsx)(a.Vy, {
                            text: "解答する",
                            disabled: X,
                            onClick: P
                        })]
                    }) : (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(na, {
                            width: 368,
                            answeredText: S,
                            recognitionMode: t.mode
                        }), (0,
                        n.jsx)(c.LZ, {
                            y: 3
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(a.Vy, {
                                text: "解答する",
                                disabled: X,
                                onClick: P
                            })
                        })]
                    })]
                }), z && (0,
                n.jsx)(Z.GI, {
                    result: z,
                    portalElem: K ? "body" : B.L,
                    handleOnStop: "redo" === z ? H : F
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: _,
                    onClickAnswer: V,
                    onClickCancel: O
                }), (0,
                n.jsx)(eF.Fh, {
                    isOpen: R,
                    title: "文字を読みとれませんでした",
                    onClickCancel: L,
                    onClickContinue: $,
                    onClose: L
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: y,
                    y: K ? 96 : 24,
                    onClick: w
                })]
            })
        }
          , nT = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(nu.C$)
              , i = (0,
            l.Dv)(nu.Gl)
              , {isSantaScriptTargetQuestion: s} = np(null != r ? r : "");
            return i ? s(i) ? (0,
            n.jsx)(nN, {
                onAnswered: t
            }) : (0,
            n.jsx)(nO, {
                onAnswered: t
            }) : null
        }
          , nM = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(nu.Gs)
              , c = (0,
            l.b9)(nu.Zr)
              , d = (0,
            l.b9)(nu.Gl)
              , u = (0,
            l.b9)(nu.XX)
              , [x,h] = (0,
            l.KO)(nu.NZ)
              , p = (0,
            l.b9)(nu.C$)
              , g = (0,
            l.b9)(nu._S)
              , m = (0,
            l.b9)(nu.m5)
              , v = (0,
            l.b9)(nu.Th)
              , j = (0,
            T.R3)()
              , {formatDto: b} = nm()
              , {getViewState: f} = nb();
            return ((0,
            s.useEffect)( () => {
                let {correct: e, modelAnswer: n, recognitionConfig: i, placeHolder: l, replaceType: s, gradeId: a} = b(t);
                if (r) {
                    let i = f(t, r);
                    h(i.answered),
                    v(i.svg),
                    c(n),
                    u(l),
                    m(e.some(e => e.value === i.answered) ? "correct" : "incorrect");
                    return
                }
                return o(e),
                c(n),
                d(i),
                u(l),
                p(s),
                g(a),
                () => {
                    o([]),
                    h(void 0),
                    v(""),
                    c(void 0),
                    d(void 0),
                    u(new ew.i),
                    m("empty")
                }
            }
            , [t, r, b, h, c, o, u, d, p, g, m, f, v]),
            void 0 !== x) ? (0,
            n.jsx)(i.Z, {
                pt: 2,
                pb: "portrait" === j ? 2 : 12,
                px: 2,
                children: (0,
                n.jsx)(nx, {})
            }) : (0,
            n.jsx)(i.Z, {
                p: 2,
                children: (0,
                n.jsx)(nT, {
                    onAnswered: a
                })
            })
        }
          , nD = e => {
            let {placeHolder: t, modelAnswer: r, correct: i, answered: l} = e
              , s = i.find(e => "text" === e.case ? e.value === l : RegExp(e.value).test(l));
            return (0,
            n.jsx)(c.sg, {
                children: s ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(Z.sR, {
                        mode: "Correct",
                        value: l,
                        placeHolder: t
                    }), l !== r && (0,
                    n.jsxs)(n.Fragment, {
                        children: [(0,
                        n.jsx)(c.LZ, {
                            y: 1
                        }), (0,
                        n.jsx)(a.xv, {
                            color: "correct",
                            size: "lg",
                            padding: "0 24px",
                            children: r
                        })]
                    })]
                }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(Z.sR, {
                        mode: "Incorrect",
                        value: l,
                        placeHolder: t
                    }), (0,
                    n.jsx)(c.LZ, {
                        y: 1
                    }), (0,
                    n.jsx)(a.xv, {
                        color: "important",
                        size: "lg",
                        padding: "0 24px",
                        children: r
                    })]
                })
            })
        }
        ;
        var nW = r(23599)
          , nz = r(87109);
        let nq = (0,
        F.cn)([])
          , nH = (0,
        F.cn)(!1)
          , nJ = e => {
            let {data: t} = e
              , r = (0,
            l.b9)(nq)
              , [i,a] = (0,
            s.useState)("")
              , o = e => {
                let n = t.selectables.find(t => t.id === Number(e));
                r(e => e.map(e => e.id === t.id ? {
                    ...t,
                    answered: n
                } : e)),
                a(e)
            }
            ;
            return (0,
            n.jsx)(nP, {
                mode: "Default",
                value: i,
                placeHolder: t.placeHolder,
                selectables: t.selectables,
                onChange: o
            })
        }
          , nP = e => {
            var t, r;
            let {mode: i, value: l, placeHolder: a, selectables: o, onChange: c} = e
              , d = (0,
            s.useId)()
              , u = o.map(e => ({
                label: e.text,
                value: 0 !== e.id ? String(e.id) : void 0
            }))
              , x = a.useLatexInLabel ? null === (t = a.label.match(/^<math>(.+)<\/math>$/)) || void 0 === t ? void 0 : t[1] : a.label
              , h = a.useLatexInSuffix ? null === (r = a.suffix.match(/^<math>(.+)<\/math>$/)) || void 0 === r ? void 0 : r[1] : a.suffix;
            switch (i) {
            case "Default":
                return (0,
                n.jsx)(n$, {
                    id: d,
                    value: l,
                    label: x,
                    suffix: h,
                    menuList: u,
                    onChange: c
                });
            case "Correct":
                return (0,
                n.jsx)(nV, {
                    id: d,
                    value: l,
                    label: x,
                    suffix: h,
                    menuList: u
                });
            case "Incorrect":
                return (0,
                n.jsx)(nX, {
                    id: d,
                    value: l,
                    label: x,
                    suffix: h,
                    menuList: u
                })
            }
        }
          , nF = {
            ".MuiSelect-select.MuiSelect-outlined": {
                minHeight: "1.7em"
            },
            ".MuiInputLabel-outlined": {
                lineHeight: 2.8
            },
            ".MuiInputLabel-shrink": {
                lineHeight: 1.7
            },
            ".MuiOutlinedInput-input": {
                lineHeight: 1.7
            },
            ".Mui-disabled.MuiInputLabel-shrink": {
                color: d.O9.onSurface
            },
            ".Mui-disabled.MuiOutlinedInput-input": {
                color: d.O9.onSurface,
                WebkitTextFillColor: d.O9.onSurface
            },
            ".Mui-disabled:hover": {
                background: "inherit"
            },
            ".MuiSelect-iconOutlined": {
                position: "static"
            },
            ".Mui-disabled.MuiSelect-iconOutlined": {
                color: d.O9.onSurfaceWeak1
            }
        }
          , n$ = e => {
            let {id: t, value: r, label: i, suffix: l, menuList: s, onChange: a} = e;
            return (0,
            n.jsx)(Z.nv, {
                id: t,
                name: t,
                size: "small",
                fullWidth: !0,
                multiline: !0,
                label: i,
                value: r,
                select: !0,
                onChange: a,
                sx: {
                    ".MuiSelect-select.MuiSelect-outlined": {
                        minHeight: "1.7em"
                    },
                    ".MuiInputLabel-outlined": {
                        lineHeight: 2.8
                    },
                    ".MuiInputLabel-shrink": {
                        lineHeight: 1.7
                    },
                    ".MuiOutlinedInput-input": {
                        lineHeight: 1.7
                    },
                    ".MuiSelect-iconOutlined": {
                        position: "static"
                    }
                },
                InputProps: (null == l ? void 0 : l.length) ? {
                    endAdornment: (0,
                    n.jsx)(nG, {
                        text: l
                    })
                } : void 0,
                children: s.map(e => (0,
                n.jsx)(nW.Z, {
                    value: e.value,
                    sx: {
                        height: 48
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.label,
                        style: {
                            fontSize: 20,
                            color: d.O9.onSurface
                        }
                    })
                }, e.value))
            })
        }
          , nV = e => {
            let {id: t, value: r, label: l, suffix: s, menuList: o} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(Z.nv, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    label: l,
                    value: r,
                    select: !0,
                    disabled: !0,
                    sx: {
                        ...nF,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: d.O9.correctWeak
                        }
                    },
                    InputProps: (null == s ? void 0 : s.length) ? {
                        endAdornment: (0,
                        n.jsx)(nG, {
                            text: s
                        })
                    } : void 0,
                    children: o.map(e => (0,
                    n.jsx)(nW.Z, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        n.jsx)(x.J$, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: d.O9.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionO",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , nX = e => {
            let {id: t, value: r, label: l, suffix: s, menuList: o} = e;
            return (0,
            n.jsxs)(i.Z, {
                position: "relative",
                children: [(0,
                n.jsx)(Z.nv, {
                    id: t,
                    name: t,
                    size: "small",
                    fullWidth: !0,
                    multiline: !0,
                    label: l,
                    value: r,
                    select: !0,
                    disabled: !0,
                    sx: {
                        ...nF,
                        ".MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: d.O9.importantWeak
                        }
                    },
                    InputProps: (null == s ? void 0 : s.length) ? {
                        endAdornment: (0,
                        n.jsx)(nG, {
                            text: s
                        })
                    } : void 0,
                    children: o.map(e => (0,
                    n.jsx)(nW.Z, {
                        value: e.value,
                        sx: {
                            height: 48
                        },
                        children: (0,
                        n.jsx)(x.J$, {
                            src: e.label,
                            style: {
                                fontSize: 20,
                                color: d.O9.onSurface
                            }
                        })
                    }, e.value))
                }), (0,
                n.jsx)(i.Z, {
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                    margin: "auto",
                    width: "48px",
                    height: "48px",
                    children: (0,
                    n.jsx)(a.$V, {
                        name: "correctionX",
                        width: 48,
                        height: 48
                    })
                })]
            })
        }
          , nG = e => {
            let {text: t} = e;
            return (0,
            n.jsx)(nz.Z, {
                position: "end",
                sx: {
                    alignSelf: "end",
                    height: "inherit",
                    marginBottom: 1.5
                },
                children: (0,
                n.jsx)(i.Z, {
                    color: d.O9.onSurfaceWeak2,
                    fontSize: 20,
                    lineHeight: 1.7,
                    children: t
                })
            })
        }
          , nB = e => {
            var t;
            let {placeHolder: r, selectables: i, correct: l, answered: s} = e
              , a = l.id === s
              , o = null !== (t = null == s ? void 0 : s.toString()) && void 0 !== t ? t : "";
            return a ? (0,
            n.jsx)(nP, {
                mode: "Correct",
                value: o,
                placeHolder: r,
                selectables: i
            }) : (0,
            n.jsxs)(c.sg, {
                children: [(0,
                n.jsx)(nP, {
                    mode: "Incorrect",
                    value: o,
                    placeHolder: r,
                    selectables: i
                }), (0,
                n.jsx)(c.LZ, {
                    y: 1
                }), (0,
                n.jsx)(x.J$, {
                    src: l.text,
                    style: {
                        fontSize: 20,
                        color: d.O9.important,
                        padding: "0 24px",
                        wordWrap: "break-word"
                    }
                })]
            })
        }
          , nK = () => {
            let e = (0,
            l.Dv)(nq)
              , t = (0,
            T.R3)();
            return e ? (0,
            n.jsx)(nY, {
                apData: e,
                orientation: t
            }) : null
        }
          , nY = e => {
            let {apData: t, orientation: r} = e;
            return (0,
            n.jsx)(c.sg, {
                width: "100%",
                px: 4,
                gap: 3,
                children: t.map( (e, l) => {
                    var s, a;
                    switch (e.case) {
                    case "apSelection":
                        return (0,
                        n.jsx)(i.Z, {
                            minHeight: "landscape" === r && l === t.length - 1 ? 114 : void 0,
                            children: (0,
                            n.jsx)(nB, {
                                placeHolder: e.placeHolder,
                                selectables: e.selectables,
                                correct: e.correct,
                                answered: null === (s = e.answered) || void 0 === s ? void 0 : s.id
                            }, e.id)
                        }, e.id);
                    case "apKeyboardWrite":
                        return (0,
                        n.jsx)(i.Z, {
                            minHeight: "landscape" === r && l === t.length - 1 ? 114 : void 0,
                            children: (0,
                            n.jsx)(nD, {
                                ...e,
                                answered: null !== (a = e.answered) && void 0 !== a ? a : "",
                                modelAnswer: e.modelAnswer
                            }, e.id)
                        }, e.id);
                    default:
                        return (0,
                        n.jsx)(n.Fragment, {})
                    }
                }
                )
            })
        }
          , nU = () => {
            let {convertInputToAnswerText: e} = (0,
            T.gH)()
              , t = (0,
            s.useCallback)(t => {
                let r = t.childAnswerList.reduce( (t, r, n) => {
                    switch (r.apData.case) {
                    case "apSelection":
                        {
                            let {placeHolder: e, selectables: i, correctItem: l} = function(e) {
                                var t, r;
                                let n = null !== (t = e.placeHolder) && void 0 !== t ? t : new ew.i
                                  , i = e.itemList.map(e => ({
                                    id: e.itemId,
                                    text: e.text
                                }));
                                e.shouldShuffle && i.sort( () => .5 - Math.random());
                                let l = null !== (r = e.correctItem) && void 0 !== r ? r : new ew.LE;
                                return {
                                    placeHolder: n,
                                    selectables: i,
                                    correctItem: l
                                }
                            }(r.apData.value);
                            return [...t, {
                                id: n,
                                case: "apSelection",
                                placeHolder: e,
                                selectables: [{
                                    id: 0,
                                    text: ""
                                }, ...i],
                                correct: {
                                    id: l.itemId,
                                    text: l.text
                                },
                                answered: void 0
                            }]
                        }
                    case "apKeyboardWrite":
                        {
                            let i = r.apData.value
                              , {placeHolder: l, correct: s} = function(t) {
                                var r;
                                let n = null !== (r = t.placeHolder) && void 0 !== r ? r : new ew.i
                                  , i = t.correctAnswerList.reduce( (t, r) => {
                                    if (!r.option.case || !r.option.value)
                                        return t;
                                    if ("text" === r.option.case) {
                                        let n = e(r.option.value);
                                        return [...t, {
                                            case: "text",
                                            value: n
                                        }]
                                    }
                                    return [...t, r.option]
                                }
                                , []);
                                return {
                                    placeHolder: n,
                                    correct: i
                                }
                            }(i);
                            return [...t, {
                                id: n,
                                case: "apKeyboardWrite",
                                placeHolder: l,
                                modelAnswer: i.displayAnswerText,
                                correct: s,
                                answered: void 0
                            }]
                        }
                    default:
                        return t
                    }
                }
                , []);
                return {
                    apData: r
                }
            }
            , []);
            return {
                formatDto: t
            }
        }
          , nQ = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , n0 = () => {
            let[e,t] = (0,
            l.KO)(nq)
              , {convertInputToAnswerText: r} = (0,
            T.gH)()
              , n = (0,
            s.useCallback)(e => {
                if (!e.answered)
                    return "empty";
                let t = e.answered.id === e.correct.id;
                return t ? "correct" : "incorrect"
            }
            , [])
              , i = (0,
            s.useCallback)(n => {
                if (!n.answered)
                    return "empty";
                if (n.answered.length > 300)
                    return "overflow";
                let i = r(n.answered)
                  , l = e.map(e => e.id === n.id ? {
                    ...n,
                    answered: i
                } : e);
                t(l);
                let s = n.correct.find(e => "text" === e.case ? e.value === i : RegExp(e.value).test(i));
                return s ? "correct" : "incorrect"
            }
            , [e, r, t])
              , a = (0,
            s.useCallback)(e => {
                let t = e.map(e => "apSelection" === e.case ? n(e) : i(e));
                return t.includes("overflow") ? "overflow" : t.includes("empty") ? "empty" : t.every(e => "correct" === e) ? "correct" : "incorrect"
            }
            , [i, n]);
            return {
                validate: a
            }
        }
          , n1 = () => {
            let e = (0,
            s.useCallback)( (e, t) => (function(e, t) {
                let r = JSON.parse(t);
                if (r.viewState)
                    return r.viewState;
                if (r.apViewState)
                    return function(e, t) {
                        let r = e.childAnswerList.reduce( (e, r, n) => {
                            switch (r.apData.case) {
                            case "apSelection":
                                {
                                    let {selectables: i} = function(e) {
                                        let t = e.itemList.map(e => ({
                                            id: e.itemId,
                                            text: e.text
                                        }));
                                        return {
                                            selectables: t
                                        }
                                    }(r.apData.value)
                                      , l = i.find(e => {
                                        var r;
                                        return e.text === (null === (r = t.texts) || void 0 === r ? void 0 : r[n])
                                    }
                                    )
                                      , s = l ? l.id : 0;
                                    return [...e, {
                                        type: "selection",
                                        id: s
                                    }]
                                }
                            case "apKeyboardWrite":
                                return [...e, {
                                    type: "keyboard",
                                    value: t.texts ? t.texts[n] : ""
                                }];
                            default:
                                return e
                            }
                        }
                        , []);
                        return {
                            answered: r
                        }
                    }(e, r.apViewState);
                throw Error("no view state")
            }
            )(e, t.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , n2 = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => t(!0), [])
              , n = (0,
            s.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , n4 = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => t(!0), [])
              , n = (0,
            s.useCallback)( () => t(!1), []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , n8 = () => {
            let e = (0,
            l.b9)(nH)
              , t = (0,
            l.Dv)(nq)
              , [r,n] = (0,
            s.useState)(0)
              , [i,a] = (0,
            s.useState)("incorrect")
              , {validate: o} = n0()
              , c = (0,
            s.useCallback)( (e, i, l, s, c, d) => {
                let u = o(t);
                if ("overflow" === u) {
                    e();
                    return
                }
                if ("empty" === u) {
                    d ? c() : i();
                    return
                }
                if ("incorrect" === u && 0 === r) {
                    n(1),
                    s();
                    return
                }
                switch (u) {
                case "correct":
                    l();
                    break;
                case "incorrect":
                    c()
                }
                a(u)
            }
            , [t, o, r])
              , d = (0,
            s.useCallback)(n => {
                let l = ek.sS.CORRECT
                  , s = t.map(e => {
                    var t;
                    let r = "apSelection" === e.case ? null === (t = e.answered) || void 0 === t ? void 0 : t.text : e.answered;
                    return null != r ? r : ""
                }
                )
                  , a = {
                    answered: t.map(e => {
                        switch (e.case) {
                        case "apSelection":
                            var t;
                            return {
                                type: "selection",
                                id: null === (t = e.answered) || void 0 === t ? void 0 : t.id
                            };
                        case "apKeyboardWrite":
                            return {
                                type: "keyboard",
                                value: e.answered
                            }
                        }
                    }
                    )
                };
                e(!0),
                n({
                    answer: {
                        result: l,
                        textType: 2,
                        text: "".concat(s),
                        wrongCount: r
                    },
                    viewStateJSON: a
                })
            }
            , [t, e, i, r]);
            return {
                prepare: c,
                fix: d
            }
        }
          , n9 = () => {
            let e = (0,
            l.b9)(nq)
              , [t,r] = (0,
            s.useState)([])
              , {convertInputToAnswerText: n} = (0,
            T.gH)()
              , i = (t, r) => {
                let i = n(t);
                e(e => e.map(e => e.id === r.id ? {
                    ...r,
                    answered: i
                } : e)),
                a(r.id, t)
            }
              , a = (e, t) => {
                r(r => {
                    let n = r.findIndex(t => t.id === e);
                    return -1 === n ? [...r, {
                        id: e,
                        value: t
                    }] : r.map(r => r.id === e ? {
                        ...r,
                        value: t
                    } : r)
                }
                )
            }
              , o = e => {
                let r = t.find(t => t.id === e);
                return r ? r.value : ""
            }
            ;
            return {
                handleChanged: i,
                getInput: o
            }
        }
          , n3 = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(nq)
              , i = (0,
            T.R3)();
            return r ? (0,
            n.jsx)(n5, {
                apData: r,
                orientation: i,
                onAnswered: t
            }) : null
        }
          , n5 = e => {
            let {apData: t, orientation: r, onAnswered: l} = e
              , {prepare: o, fix: d} = n8()
              , {showing: u, show: x, hide: h} = nQ()
              , {show: p, hide: g, visibled: m} = n2()
              , {show: v, hide: j, visibled: b} = n4()
              , {handleChanged: f, getInput: w} = n9()
              , S = (0,
            s.useCallback)(e => {
                o(v, p, () => x("correct"), () => x("redo"), () => x("incorrect"), e)
            }
            , [o, p, v, x])
              , y = (0,
            s.useCallback)( () => S(!1), [S])
              , C = (0,
            s.useCallback)( () => {
                d(l),
                h()
            }
            , [d, h, l])
              , k = (0,
            s.useCallback)( () => {
                g(),
                S(!0)
            }
            , [g, S])
              , I = e => {
                switch (e.case) {
                case "apSelection":
                    return (0,
                    n.jsx)(nJ, {
                        data: e
                    });
                case "apKeyboardWrite":
                    return (0,
                    n.jsx)(Z.sR, {
                        mode: "Default",
                        value: w(e.id),
                        placeHolder: e.placeHolder,
                        onChange: t => f(t, e)
                    })
                }
            }
            ;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                width: "100%",
                children: [(0,
                n.jsx)(c.sg, {
                    px: 4,
                    gap: 3,
                    children: t.map(e => (0,
                    n.jsx)(s.Fragment, {
                        children: I(e)
                    }, e.id))
                }), (0,
                n.jsx)(c.LZ, {
                    y: "portrait" === r ? 5 : 6
                }), (0,
                n.jsx)(i.Z, {
                    alignSelf: "flex-end",
                    children: (0,
                    n.jsx)(a.Vy, {
                        text: "解答する",
                        disabled: void 0 !== u,
                        onClick: y
                    })
                }), u && (0,
                n.jsx)(tP.G, {
                    result: u,
                    portalElem: "portrait" === r ? "body" : B.L,
                    handleOnStop: "redo" === u ? h : C
                }), (0,
                n.jsx)(eF.Ux, {
                    isOpen: b,
                    onClick: j
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: m,
                    onClickCancel: g,
                    onClickAnswer: k
                })]
            })
        }
          , n6 = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , c = (0,
            l.b9)(nq)
              , [d,u] = (0,
            l.KO)(nH)
              , x = (0,
            T.R3)()
              , {windowHeight: h} = (0,
            o.AS)()
              , {getViewState: p} = n1()
              , {formatDto: g} = nU();
            return ((0,
            s.useEffect)( () => {
                let {apData: e} = g(t);
                if (r) {
                    let n = p(t, r);
                    c(e.map( (e, t) => {
                        switch (e.case) {
                        case "apSelection":
                            {
                                let r = n.answered[t];
                                e.answered = r.id ? {
                                    id: r.id,
                                    text: ""
                                } : void 0;
                                break
                            }
                        case "apKeyboardWrite":
                            {
                                let r = n.answered[t];
                                e.answered = r.value ? r.value : void 0
                            }
                        }
                        return e
                    }
                    )),
                    u(!0);
                    return
                }
                return c(e),
                () => {
                    c([]),
                    u(!1)
                }
            }
            , [t, g, p, r, c, u]),
            d) ? (0,
            n.jsx)(i.Z, {
                height: "portrait" === x ? "auto" : h - eE.J9 - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                pt: 4,
                pb: "portrait" === x ? 4 : 12,
                px: 2,
                children: (0,
                n.jsx)(nK, {})
            }) : (0,
            n.jsx)(i.Z, {
                height: "portrait" === x ? "auto" : h - eE.J9 - 18,
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                p: 4,
                pb: 2,
                px: 2,
                children: (0,
                n.jsx)(n3, {
                    onAnswered: a
                })
            })
        }
        ;
        var n7 = r(15861);
        let ie = (0,
        s.forwardRef)( (e, t) => {
            let {width: r, height: i, text: l, children: s} = e
              , a = (0,
            T.R3)();
            return (0,
            n.jsx)(it, {
                ref: t,
                width: r,
                height: i,
                text: l,
                orientation: a,
                children: s
            })
        }
        );
        ie.displayName = "WritingArea";
        let it = (0,
        s.forwardRef)( (e, t) => {
            let {width: r, height: l, text: a, children: o, orientation: c} = e
              , [u,x] = (0,
            s.useState)(0);
            return (0,
            s.useEffect)( () => {
                let e = Math.floor(r / a.length);
                x(Math.min("portrait" === c ? 257 : 238, e))
            }
            , [r, a, c]),
            (0,
            n.jsxs)(i.Z, {
                position: "relative",
                border: "4px solid ".concat(d.O9.onSurfaceWeak3),
                borderRadius: 2,
                children: [(0,
                n.jsx)(n7.Z, {
                    width: r,
                    maxHeight: "portrait" === c ? 344 : 317,
                    fontFamily: "KanjiStrokeOrders",
                    fontSize: u,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    color: d.O9.onSurfaceWeak3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    sx: {
                        transform: "translate(-50%, -50%)"
                    },
                    children: a
                }), (0,
                n.jsx)(i.Z, {
                    ref: t,
                    width: "100%",
                    height: l,
                    position: "relative",
                    children: o
                })]
            })
        }
        );
        it.displayName = "WritingAreaView";
        let ir = (0,
        F.cn)(void 0)
          , ii = (0,
        F.cn)("")
          , il = (0,
        F.cn)(0)
          , is = (0,
        F.cn)("none")
          , ia = (0,
        F.cn)(void 0)
          , io = (0,
        F.cn)("")
          , ic = () => {
            let e = (0,
            l.Dv)(ii)
              , t = (0,
            l.Dv)(ia)
              , r = (0,
            l.Dv)(io)
              , i = (0,
            l.Dv)(M.uR)
              , s = (0,
            T.R3)();
            return (0,
            n.jsx)(id, {
                correct: e,
                answered: t,
                writtenSVG: r,
                orientation: s,
                isViewer: i
            })
        }
          , id = e => {
            let {correct: t, answered: r, writtenSVG: l, orientation: s, isViewer: d} = e
              , {elementRef: u, elementSize: x} = (0,
            o.yU)();
            return (0,
            n.jsx)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: (0,
                n.jsx)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: (0,
                    n.jsxs)(c.sg, {
                        gap: "portrait" === s ? 2 : 5,
                        children: [(0,
                        n.jsxs)(ie, {
                            ref: u,
                            width: x.width,
                            height: "portrait" === s ? 360 : 336,
                            text: t,
                            children: [d && (0,
                            n.jsx)(i.Z, {
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                margin: "auto",
                                width: 144,
                                height: 144,
                                children: (0,
                                n.jsx)(a.$V, {
                                    name: r === t ? "correctionO" : "correctionX",
                                    width: 144,
                                    height: 144
                                })
                            }), (0,
                            n.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: l
                                }
                            })]
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(a.Vy, {
                                text: "できた",
                                disabled: d
                            })
                        })]
                    })
                })
            })
        }
          , iu = () => {
            let e = (0,
            s.useCallback)(e => {
                let t = e.correctAnswer
                  , r = e.gradeId
                  , n = tG(e.replaceType)
                  , i = e.interactiveInkSetting ? (0,
                eF.Wm)(e.interactiveInkSetting) : "Math"
                  , l = {
                    mode: i,
                    useLK: e.useLk,
                    sk: e.skNameOptional.value
                };
                return {
                    correct: t,
                    grade: r,
                    replaceType: n,
                    recognitionConfig: l
                }
            }
            , []);
            return {
                formatDto: e
            }
        }
          , ix = () => {
            let[e,t] = (0,
            s.useState)()
              , r = (0,
            s.useCallback)(e => t(e), [])
              , n = (0,
            s.useCallback)( () => t(void 0), []);
            return {
                showing: e,
                show: r,
                hide: n
            }
        }
          , ih = () => {
            let e = (0,
            l.Dv)(il)
              , t = (0,
            l.Dv)(is)
              , {forceReplace: r} = (0,
            T.qR)()
              , {replace: n} = (0,
            T.kE)()
              , i = (0,
            s.useCallback)(e => 0 === e.length, [])
              , a = (0,
            s.useCallback)( (l, s) => {
                let a = i(l);
                if (a)
                    return "empty";
                let o = l.replace(/\n/g, "english" === t ? " " : "")
                  , {isMatched: c} = n(o, s, t);
                if (c)
                    return "correct";
                let d = r(o, e, t)
                  , u = (0,
                ta.rd)(t, [s], d)
                  , {isMatched: x} = n(u, s, t);
                return x ? "correct" : "incorrect"
            }
            , [i, r, e, n, t]);
            return {
                validate: a,
                checkEmpty: i
            }
        }
          , ip = () => {
            let e = (0,
            s.useCallback)(e => (function(e) {
                let t = JSON.parse(e);
                if (t.viewState)
                    return t.viewState;
                if (t.apViewState)
                    return function(e) {
                        var t;
                        let r = e.recognizedText
                          , n = null !== (t = e.svg) && void 0 !== t ? t : "";
                        return {
                            answered: r,
                            svg: n
                        }
                    }(t.apViewState);
                throw Error("no view state")
            }
            )(e.viewStateJSON), []);
            return {
                getViewState: e
            }
        }
          , ig = () => {
            let[e,t] = (0,
            s.useState)(!1)
              , r = (0,
            s.useCallback)( () => {
                t(!0)
            }
            , [])
              , n = (0,
            s.useCallback)( () => {
                t(!1)
            }
            , []);
            return {
                show: r,
                hide: n,
                visibled: e
            }
        }
          , im = () => {
            let e = (0,
            l.b9)(io)
              , [t,r] = (0,
            s.useState)("")
              , [n,i] = (0,
            s.useState)(!1)
              , [a,o] = (0,
            s.useState)(!1)
              , c = (0,
            s.useCallback)( () => {
                r("")
            }
            , [r])
              , d = (0,
            s.useCallback)( () => {
                i(!0)
            }
            , [i])
              , u = (0,
            s.useCallback)( (t, n) => {
                r(t),
                e(n),
                i(!1)
            }
            , [e])
              , x = (0,
            s.useCallback)( () => {
                r(""),
                o(!0)
            }
            , [r, o])
              , h = (0,
            s.useCallback)( () => {
                o(!1)
            }
            , [o]);
            return {
                opened: c,
                recognizing: d,
                recognized: u,
                disconnected: x,
                reconnect: h,
                recognizedText: t,
                isOpenReconnectMessage: a,
                isRecognizing: n
            }
        }
          , iv = e => {
            let t = (0,
            l.Dv)(io)
              , r = (0,
            l.b9)(ia)
              , [n,i] = (0,
            s.useState)("incorrect")
              , {validate: a} = ih()
              , o = (0,
            s.useCallback)( (t, r, n, l, s, o) => {
                let c = a(t, e);
                if ("empty" === c) {
                    o ? s() : r();
                    return
                }
                switch (c) {
                case "correct":
                    n();
                    break;
                case "incorrect":
                    l()
                }
                i(c)
            }
            , [e, a])
              , c = (0,
            s.useCallback)( (e, i) => {
                let l = ek.sS.CORRECT;
                r(e),
                i({
                    answer: {
                        result: l,
                        textType: 2,
                        text: e,
                        wrongCount: 0
                    },
                    viewStateJSON: {
                        answered: e,
                        svg: t
                    }
                })
            }
            , [r, n, t]);
            return {
                prepare: o,
                fix: c
            }
        }
          , ij = e => {
            let {onAnswered: t} = e
              , r = (0,
            l.Dv)(ii)
              , i = (0,
            l.Dv)(ia)
              , s = (0,
            l.Dv)(ir)
              , a = (0,
            l.Dv)(M.As)
              , o = (0,
            l.Dv)(M.uR)
              , c = (0,
            T.R3)();
            return s ? (0,
            n.jsx)(ib, {
                correct: r,
                recognitionConfig: s,
                orientation: c,
                selectedTool: a,
                onAnswered: t,
                isViewer: o,
                isAnswered: void 0 !== i
            }) : null
        }
          , ib = e => {
            let {correct: t, recognitionConfig: r, orientation: l, selectedTool: d, onAnswered: u, isViewer: x, isAnswered: h} = e
              , p = (0,
            s.useRef)(null)
              , {prepare: g, fix: m} = iv(t)
              , {showing: v, show: j, hide: b} = ix()
              , {elementRef: f, elementSize: w} = (0,
            o.yU)()
              , {opened: S, recognizing: y, recognized: C, disconnected: k, reconnect: I, recognizedText: O, isOpenReconnectMessage: _, isRecognizing: A} = im()
              , {show: L, hide: R, visibled: E} = ig()
              , {onPointerDown: N, onPointerUp: T} = (0,
            eF._n)()
              , M = (0,
            s.useCallback)( () => {
                y(),
                N()
            }
            , [y])
              , D = (0,
            s.useCallback)( (e, t) => {
                C(e, t),
                T()
            }
            , [C])
              , W = (0,
            s.useCallback)(e => {
                g(O, L, () => j("kanji_correct"), () => j("kanji_incorrect"), () => j("incorrect"), e)
            }
            , [O, g, j, L])
              , z = (0,
            s.useCallback)( () => W(!1), [W])
              , q = (0,
            s.useCallback)( () => {
                m(O, u),
                b()
            }
            , [m, O, u, b])
              , H = (0,
            s.useCallback)( () => {
                R(),
                W(!0)
            }
            , [R, W])
              , J = "portrait" === l;
            return (0,
            n.jsxs)(c.sg, {
                position: "relative",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                children: [(0,
                n.jsx)(i.Z, {
                    width: "100%",
                    maxWidth: 712,
                    children: (0,
                    n.jsxs)(c.sg, {
                        gap: J ? 2 : 5,
                        children: [(0,
                        n.jsx)(ie, {
                            ref: f,
                            width: w.width,
                            height: J ? 360 : 336,
                            text: t,
                            children: !_ && (0,
                            n.jsx)(tJ, {
                                ref: p,
                                width: w.width,
                                height: w.height,
                                recognitionConfig: r,
                                mode: "eraser" === d ? "eraser" : "pen",
                                onOpened: S,
                                onRecognizing: M,
                                onRecognized: D,
                                onDisconnected: k
                            })
                        }), (0,
                        n.jsx)(i.Z, {
                            alignSelf: "end",
                            children: (0,
                            n.jsx)(a.Vy, {
                                text: "できた",
                                disabled: x || A || _ || void 0 !== v || h,
                                onClick: z
                            })
                        })]
                    })
                }), v && (0,
                n.jsx)(Z.GI, {
                    result: v,
                    portalElem: "body",
                    handleOnStop: q
                }), (0,
                n.jsx)(eF.eN, {
                    isOpen: E,
                    onClickAnswer: H,
                    onClickCancel: R
                }), (0,
                n.jsx)(eF.c8, {
                    isOpen: _,
                    y: J ? 96 : 24,
                    onClick: I
                })]
            })
        }
          , iw = e => {
            let {dto: t, replayResource: r, onAnswered: a} = e
              , o = (0,
            l.b9)(ii)
              , c = (0,
            l.b9)(il)
              , d = (0,
            l.b9)(ir)
              , u = (0,
            l.b9)(is)
              , [x,h] = (0,
            l.KO)(ia)
              , p = (0,
            l.b9)(io)
              , {formatDto: g} = iu()
              , {getViewState: m} = ip();
            return ((0,
            s.useEffect)( () => {
                let {correct: e, grade: n, replaceType: i, recognitionConfig: l} = g(t);
                if (r) {
                    let t = m(r);
                    o(e),
                    h(t.answered),
                    p(t.svg);
                    return
                }
                return o(e),
                d(l),
                c(n),
                u(i),
                () => {
                    o(""),
                    h(void 0),
                    d(void 0),
                    c(0),
                    u("none"),
                    p("")
                }
            }
            , [t, g, m, r, h, o, c, d, u, p]),
            void 0 !== x || r) ? (0,
            n.jsx)(i.Z, {
                p: 2,
                children: (0,
                n.jsx)(ic, {})
            }) : (0,
            n.jsx)(i.Z, {
                p: 2,
                children: (0,
                n.jsx)(ij, {
                    onAnswered: a
                })
            })
        }
        ;
        var iS = r(5152)
          , iy = r.n(iS);
        r(59199),
        r(79361),
        iy()( () => Promise.all([r.e(153), r.e(189), r.e(196), r.e(755)]).then(r.bind(r, 60755)).then(e => e.Answering), {
            loadableGenerated: {
                webpack: () => [60755]
            },
            ssr: !1
        });
        let iC = iy()( () => Promise.all([r.e(153), r.e(883), r.e(909)]).then(r.bind(r, 97909)).then(e => e.VoiceElsa), {
            loadableGenerated: {
                webpack: () => [97909]
            },
            ssr: !1
        })
          , ik = 24
          , iI = s.memo(e => {
            let {answerMode: t, pendingAnswerProcess: r, startAnswerProcess: i, endAnswerProcess: s} = e
              , a = (0,
            l.Dv)(M.dx)
              , o = (0,
            l.Dv)(M.kQ)
              , c = (0,
            l.Dv)(V);
            return a ? (0,
            n.jsx)(iO, {
                programResource: a,
                replayResource: o,
                answerMode: t,
                answerType: c,
                pendingAnswerProcess: r,
                startAnswerProcess: i,
                endAnswerProcess: s
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
        );
        iI.displayName = "AnswerPanel";
        let iO = e => {
            let {programResource: t, replayResource: r, answerMode: l, answerType: s, pendingAnswerProcess: a, startAnswerProcess: o, endAnswerProcess: c} = e
              , u = t.contentResource.legacyAnswer
              , x = u.apData
              , {sendUnknownAnswerPattern: h, sendAnswerPatternChanged: p, sendInvalidReplayResource: g} = iN()
              , m = () => {
                var e, t, i, s, d, p, g, m, v, j, b;
                switch (x.case) {
                case "apSelection":
                    return e = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(r6, {
                            dto: e,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apMultipleSelection":
                    return t = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(tm, {
                            dto: t,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apWordOrderSort":
                    return i = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(rC, {
                            dto: i,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apImageSelection":
                    return s = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(eL, {
                            dto: s,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apSynchronization":
                    return d = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(n6, {
                            dto: d,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apVoiceInput":
                    return p = x.value,
                    (0,
                    n.jsx)(iA, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(iC, {
                            dto: p,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apKeyboardWrite":
                    return g = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(e0, {
                            dto: g,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apHandWrite":
                    return m = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(nM, {
                            dto: m,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apSyncedHandWrite":
                    return v = x.value,
                    (0,
                    n.jsx)(i_, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(t2, {
                            dto: v,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apTrace":
                    return j = x.value,
                    (0,
                    n.jsx)(iA, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(iw, {
                            dto: j,
                            replayResource: r,
                            onAnswered: o
                        })
                    }, u.originalId);
                case "apHandWriteSelfJudgement":
                    return b = x.value,
                    (0,
                    n.jsx)(iA, {
                        answerMode: l,
                        endAnswerProcess: c,
                        children: (0,
                        n.jsx)(rP, {
                            dto: b,
                            replayResource: r,
                            onPendingAnswered: a,
                            onAnswered: o
                        })
                    }, u.originalId)
                }
                return h(),
                (0,
                n.jsx)(iL, {})
            }
            ;
            return (0,
            n.jsx)(i.Z, {
                id: B.L,
                height: "fit-content",
                minHeight: "100%",
                bgcolor: d.O9.surface,
                border: "1px solid ".concat(d.O9.onSurfaceWeak3),
                borderRadius: 2,
                display: "apWordOrderSort" === x.case || "apSyncedHandWrite" === x.case && "triple" === s ? "flex" : "block",
                children: ( () => {
                    if (!r)
                        return m();
                    try {
                        let e = JSON.parse(r.viewStateJSON)
                          , i = e.apName;
                        if (!i)
                            return m();
                        let l = t.contentResource.answer.name;
                        if (i === l)
                            return m();
                        return p(),
                        (0,
                        n.jsx)(iR, {})
                    } catch (e) {
                        return g(),
                        (0,
                        n.jsx)(iE, {})
                    }
                }
                )()
            })
        }
          , i_ = e => {
            let {children: t, answerMode: r, endAnswerProcess: i} = e
              , o = (0,
            l.Dv)(M.uR)
              , c = (0,
            l.Dv)(M.$p)
              , [d,u] = (0,
            s.useState)()
              , x = (0,
            s.useCallback)( () => {
                u(!0),
                i()
            }
            , [i]);
            (0,
            s.useEffect)( () => {
                u(!1)
            }
            , [r]);
            let h = "StartFromReplay" === c;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [t, ("Answered" === r || h) && (0,
                P.createPortal)((0,
                n.jsx)(J.E.div, {
                    style: {
                        position: "fixed",
                        bottom: ik,
                        right: ik,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    },
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        scale: {
                            type: "spring",
                            damping: 15,
                            stiffness: 150
                        }
                    },
                    children: (0,
                    n.jsx)(a.Vy, {
                        width: 200,
                        text: "次へ",
                        disabled: h || o || d,
                        onClick: x
                    })
                }), document.body)]
            })
        }
          , iA = e => {
            let {children: t, answerMode: r, endAnswerProcess: i} = e;
            return (0,
            s.useEffect)( () => {
                "Answered" === r && i()
            }
            , [r, i]),
            (0,
            n.jsx)(n.Fragment, {
                children: t
            })
        }
          , iL = () => (0,
        n.jsx)(i.Z, {
            sx: {
                padding: 1
            },
            children: (0,
            n.jsx)(a.xv, {
                size: "lg",
                textAlign: "center",
                color: "onSurfaceWeak1",
                children: "未知のAP"
            })
        })
          , iR = () => (0,
        n.jsx)(i.Z, {
            sx: {
                padding: 1
            },
            children: (0,
            n.jsx)(a.xv, {
                size: "lg",
                textAlign: "center",
                color: "onSurfaceWeak1",
                children: "問題の解答形式が変更されたため プレビューを表示できません。"
            })
        })
          , iE = () => (0,
        n.jsx)(i.Z, {
            sx: {
                padding: 1
            },
            children: (0,
            n.jsx)(a.xv, {
                size: "lg",
                textAlign: "center",
                color: "onSurfaceWeak1",
                children: "不正な解答リプレイデータ"
            })
        })
          , iN = () => {
            var e, t;
            let r = (0,
            l.Dv)(M.dx)
              , n = null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : 0
              , i = null !== (t = null == r ? void 0 : r.contentResource.answer.name) && void 0 !== t ? t : "unknown"
              , s = (0,
            l.Dv)(M.$p)
              , a = "StartFromReplay" === s
              , {analyticsEvent: c} = (0,
            o.WS)()
              , d = e => {
                a && c({
                    eventName: "解答リプレイ「解答データを正しく読み込めませんでした」表示",
                    params: {
                        programId: n,
                        ap: i,
                        error: e
                    }
                })
            }
              , u = () => d("未知のAPがある")
              , x = () => d("APが変更された")
              , h = () => d("保存された解答リプレイデータが破損している");
            return {
                sendUnknownAnswerPattern: u,
                sendAnswerPatternChanged: x,
                sendInvalidReplayResource: h
            }
        }
          , iZ = (e, t) => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                n.jsx)(iT, {
                    source: e,
                    showImageDialog: t
                });
            case "Empty":
                return (0,
                n.jsx)(iM, {});
            case "EnglishWord":
                return (0,
                n.jsx)(iD, {
                    source: e
                });
            case "EnglishWordV2":
                return (0,
                n.jsx)(iW, {
                    source: e
                });
            case "Html":
                return (0,
                n.jsx)(iz, {
                    source: e
                });
            case "KanjiDefault":
                return (0,
                n.jsx)(iq, {
                    source: e
                });
            case "KanjiSelfJudgement":
                return (0,
                n.jsx)(iH, {
                    source: e
                });
            case "KanjiSelfJudgementLegacy":
                return (0,
                n.jsx)(iJ, {
                    source: e
                });
            case "Simple":
                return (0,
                n.jsx)(iP, {
                    source: e,
                    showImageDialog: t
                })
            }
        }
          , iT = e => {
            let {source: t, showImageDialog: r} = e
              , i = t.image;
            return i ? (0,
            n.jsx)("div", {
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: (0,
                n.jsxs)(c.sg, {
                    alignItems: "center",
                    gap: 2,
                    children: [(0,
                    n.jsx)("img", {
                        className: "answer-content-image",
                        src: i,
                        width: "100%"
                    }), (0,
                    n.jsx)(x.hu, {
                        onClick: () => {
                            r && r(i)
                        }
                    })]
                }, 0)
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , iM = () => (0,
        n.jsx)(n.Fragment, {})
          , iD = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {targetWord: i, partOfSpeech: l, variantForm: s, countability: a, baseForm: o, wordUsageAndMeaning: c, singularForm: d, pluralForm: u, thirdParsonSingular: x, pastTense: h, presentParticiple: p, pastParticiple: g, positiveDegree: m, comparativeDegree: v, superlativeDegree: j, exampleUsage: b, meaningOfExample: f} = r
              , w = [{
                label: "単数形",
                value: d
            }, {
                label: "複数形",
                value: u
            }, {
                label: "原形",
                value: o
            }, {
                label: "3単現",
                value: x
            }, {
                label: "過去形",
                value: h
            }, {
                label: "現在分詞",
                value: p
            }, {
                label: "過去分詞",
                value: g
            }, {
                label: "原級",
                value: m
            }, {
                label: "比較級",
                value: v
            }, {
                label: "最上級",
                value: j
            }].filter(e => {
                let {label: t, value: r} = e;
                return void 0 !== r && r.length > 0 && s !== t
            }
            ).map(e => {
                let {label: t, value: r} = e;
                return "".concat(t, "=").concat(r)
            }
            );
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    className: "question-area",
                    children: (0,
                    n.jsxs)("p", {
                        className: "question-text",
                        children: [(0,
                        n.jsx)("b", {
                            children: i
                        }), (0,
                        n.jsx)("br", {}), l, a && "名詞" === l ? "(".concat(a, ")") : "", (0,
                        n.jsx)("br", {}), ("動詞" === l || "助動詞" === l) && "3単現" === s ? (0,
                        n.jsxs)("b", {
                            children: [o, "の変化形で, 主語が3人称単数で現在の時に使う語"]
                        }) : (0,
                        n.jsx)("b", {
                            children: c
                        }), w.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), w.join(", ")]
                        }), b && b.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), (0,
                            n.jsxs)("b", {
                                children: [b, f ? "(".concat(f, ")") : ""]
                            })]
                        })]
                    })
                })
            })
        }
          , iW = e => {
            let {source: t} = e
              , {parameter: r} = t
              , {targetWord: i, partOfSpeech: l, variantForm: s, countability: a, baseForm: o, wordUsageAndMeaning: c, singularForm: d, pluralForm: u, thirdParsonSingular: x, pastTense: h, presentParticiple: p, pastParticiple: g, positiveDegree: m, comparativeDegree: v, superlativeDegree: j, exampleUsage: b, meaningOfExample: f} = r
              , w = [{
                label: "単数形",
                value: d
            }, {
                label: "複数形",
                value: u
            }, {
                label: "原形",
                value: o
            }, {
                label: "3単現",
                value: x
            }, {
                label: "過去形",
                value: h
            }, {
                label: "現在分詞",
                value: p
            }, {
                label: "過去分詞",
                value: g
            }, {
                label: "原級",
                value: m
            }, {
                label: "比較級",
                value: v
            }, {
                label: "最上級",
                value: j
            }].filter(e => {
                let {label: t, value: r} = e;
                return void 0 !== r && r.length > 0 && s !== t
            }
            ).map(e => {
                let {label: t, value: r} = e;
                return "".concat(t, "=").concat(r)
            }
            );
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("div", {
                    className: "question-area",
                    children: (0,
                    n.jsxs)("p", {
                        className: "question-text",
                        children: [(0,
                        n.jsx)("b", {
                            children: i
                        }), (0,
                        n.jsx)("br", {}), l, a && "名詞" === l ? "(".concat(a, ")") : "", (0,
                        n.jsx)("br", {}), ("動詞" === l || "助動詞" === l) && "3単現" === s ? (0,
                        n.jsxs)("b", {
                            children: [o, "の変化形で, 主語が3人称単数で現在の時に使う語"]
                        }) : (0,
                        n.jsx)("b", {
                            children: c
                        }), w.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), w.join(", ")]
                        }), b && b.length > 0 && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)("br", {}), (0,
                            n.jsxs)("b", {
                                children: [b.replace(/\n/g, "<br />"), (0,
                                n.jsx)("br", {}), (f || "").replace(/\n/g, "<br />")]
                            })]
                        })]
                    })
                })
            })
        }
          , iz = e => {
            let {source: t} = e
              , r = t.parameter.html || "";
            return (0,
            n.jsx)("div", {
                className: "question-area",
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: r
                    })
                })
            })
        }
          , iq = e => {
            let t, {source: r} = e, i = r.parameter, l = i.phrase, s = i.phrasePronunciation, a = i.grade;
            return t = a <= 2 ? "<b><ruby><rb>語</rb><rp>(</rp><rt>ご</rt><rp>)</rp></ruby>　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(l, "</b><br/><b><ruby><rb>読</rb><rp>(</rp><rt>よ</rt><rp>)</rp></ruby>　　み：").concat(s, "</b>") : a <= 5 ? "<b>語　　<ruby><rb>句</rb><rp>(</rp><rt>く</rt><rp>)</rp></ruby>：".concat(l, "</b><br/><b>読　　み：").concat(s, "</b>") : "<b>語　　句：".concat(l, "</b><br/><b>読　　み：").concat(s, "</b>"),
            (0,
            n.jsx)("div", {
                className: "question-area",
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: t
                    })
                })
            })
        }
          , iH = e => {
            let t, {source: r} = e, i = r.parameter, l = i.components, s = i.modelAnswerString, a = s.length;
            return t = 0 === l.length ? (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("p", {
                    className: "question-text",
                    children: "正解はこれ"
                })
            }) : l.map( (e, t) => (0,
            n.jsx)("p", {
                className: "question-text",
                children: (0,
                n.jsx)(x.J$, {
                    src: e.text.replaceAll("\n", "<br/>")
                })
            }, t)),
            (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [t, (0,
                n.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(a <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": a
                    },
                    children: s
                })]
            })
        }
          , iJ = e => {
            let {source: t} = e
              , r = t.parameter
              , i = r.questionWord
              , l = r.questionWordOthers
              , s = i.length
              , a = r.grade;
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [(0,
                n.jsx)("p", {
                    className: "question-text",
                    children: (0,
                    n.jsx)(x.J$, {
                        src: a <= 1 ? "<ruby><rb>正解</rb><rp>(</rp><rt>せいかい</rt><rp>)</rp></ruby>はこちらです" : a <= 5 ? "正<ruby><rb>解</rb><rp>(</rp><rt>かい</rt><rp>)</rp></ruby>はこちらです" : "正解はこちらです"
                    })
                }), (0,
                n.jsx)("p", {
                    className: "font-kanji-stroke-order ".concat(s <= 2 ? "adjust-font-upto2" : "adjust-font-over3"),
                    style: {
                        "--wordnum": s
                    },
                    children: i
                }), "" !== l && (0,
                n.jsxs)("div", {
                    className: "main-text",
                    style: {
                        fontSize: "20px",
                        lineHeight: 1.7
                    },
                    children: ["※", (0,
                    n.jsx)("b", {
                        children: l
                    }), "も可"]
                })]
            })
        }
          , iP = e => {
            var t;
            let {source: r, showImageDialog: i} = e
              , l = r.parameter
              , s = l.components.map(e => ({
                text: e.text.replaceAll("\n", "<br/>"),
                align: e.align
            }))
              , a = null !== (t = r.images) && void 0 !== t ? t : [];
            return (0,
            n.jsxs)("div", {
                className: "question-area",
                children: [s.map( (e, t) => (0,
                n.jsx)("p", {
                    className: "question-text",
                    style: {
                        textAlign: e.align
                    },
                    children: (0,
                    n.jsx)(x.J$, {
                        src: e.text
                    })
                }, "Text:".concat(t))), 0 !== a.length && (0,
                n.jsx)("div", {
                    className: "image-area",
                    children: a.map( (e, t) => (0,
                    n.jsxs)(c.sg, {
                        alignItems: "center",
                        gap: 2,
                        children: [(0,
                        n.jsx)("img", {
                            src: e,
                            alt: "image_tag",
                            className: "img-medium"
                        }), (0,
                        n.jsx)(x.hu, {
                            onClick: () => {
                                i && i(e)
                            }
                        })]
                    }, "Image:".concat(t)))
                })]
            })
        }
        ;
        var iF = r(51408);
        let i$ = s.memo(e => {
            let {minHeight: t, margin: r} = e
              , {getDescriptionSource: i} = (0,
            iF.M)()
              , l = i();
            return void 0 === l ? (0,
            n.jsx)(n.Fragment, {
                children: "開発中のAD"
            }) : (0,
            n.jsx)(iV, {
                minHeight: t,
                margin: r,
                description: l
            })
        }
        );
        i$.displayName = "DescriptionPanel";
        let iV = e => {
            let {minHeight: t, margin: r, description: o} = e
              , c = (0,
            l.b9)(N.Y)
              , u = (0,
            l.b9)(N.u)
              , x = (0,
            s.useCallback)(e => {
                c(e),
                u(!0)
            }
            , [c, u]);
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(i.Z, {
                    height: 56,
                    bgcolor: d.O9.important,
                    sx: {
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8
                    },
                    paddingX: 3,
                    display: "flex",
                    alignItems: "center",
                    children: (0,
                    n.jsx)(a.xv, {
                        color: "onSurfaceWeak4",
                        size: "xl",
                        fontWeight: "bold",
                        children: "解説"
                    })
                }), (0,
                n.jsx)(i.Z, {
                    minHeight: t,
                    marginBottom: r,
                    bgcolor: d.O9.surface,
                    border: "1px solid ".concat(d.O9.onSurfaceWeak3),
                    sx: {
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 8
                    },
                    children: iZ(o, x)
                })]
            })
        }
    },
    78949: function(e, t, r) {
        r.d(t, {
            wn: function() {
                return x
            },
            kk: function() {
                return h
            },
            ur: function() {
                return g
            },
            D7: function() {
                return p
            }
        });
        var n = r(72213)
          , i = r(48583)
          , l = r(67294)
          , s = r(61982)
          , a = r(65166)
          , o = r(66105)
          , c = r(71608)
          , d = r(46724)
          , u = r(49682);
        let x = e => {
            let t = (0,
            i.b9)(d.si)
              , r = (0,
            i.b9)(d.Ok)
              , x = (0,
            i.Dv)(u.W)
              , h = (0,
            i.Dv)(d.uR)
              , [p,g] = (0,
            i.KO)(o.D)
              , [m,v] = (0,
            l.useState)()
              , [j,b] = (0,
            l.useState)(!1)
              , [f,w] = (0,
            l.useState)(!1)
              , [S,y] = (0,
            l.useState)(!1)
              , C = (0,
            l.useMemo)( () => m ? "Answered" : j ? "PendingAnswered" : "Answering", [m, j])
              , k = (0,
            l.useMemo)( () => (null == m ? void 0 : m.pagePath) === "cursor/result", [null == m ? void 0 : m.pagePath])
              , I = (0,
            c.U4)()
              , O = (0,
            c.Fl)()
              , _ = (0,
            c.fc)()
              , A = (0,
            c.DV)()
              , L = (0,
            l.useCallback)(async () => {
                m && (r({
                    type: s.zE.ANSWER_END
                }),
                O(),
                k && (t(1),
                await new Promise(e => setTimeout(e, 2e3))),
                _(m),
                b(!1))
            }
            , [m, k, r, O, _, t])
              , R = (0,
            l.useCallback)( () => {
                r({
                    type: s.zE.QUESTION_END
                }),
                r({
                    type: s.zE.ANSWER_START
                }),
                b(!0)
            }
            , [r])
              , E = (0,
            l.useCallback)(async t => {
                w(!0),
                y(!1),
                r({
                    type: s.zE.QUESTION_END
                }),
                r({
                    type: s.zE.ANSWER_START
                });
                try {
                    let r = await I(t);
                    if (!r)
                        return;
                    let i = r.transitionCommand
                      , l = r.answerLogIds
                      , o = t.answerLogResource;
                    return o && 1 === l.length && await A(o, l[0]),
                    0 !== x && await A({
                        buffer: e.current,
                        type: a.Up.DRAWING_IMAGE
                    }, l[0]),
                    v(i),
                    p && ((0,
                    n.F)({
                        ...p,
                        answer: t.answer.text,
                        correct: t.answer.result === s.sS.CORRECT
                    }),
                    g(void 0)),
                    l[0]
                } catch (e) {
                    y(!0)
                } finally {
                    w(!1)
                }
            }
            , [r, I, A, e, x, p, g])
              , N = (0,
            l.useCallback)( () => {
                L(),
                k || v(void 0)
            }
            , [k, L, v])
              , Z = (0,
            l.useCallback)(async e => {
                v(s.Eu.fromJson({}))
            }
            , [v]);
            return {
                answerMode: C,
                isStartAnswering: f,
                isNextResult: k,
                isError: S,
                pendingAnswerProcess: R,
                startAnswerProcess: h ? Z : E,
                endAnswerProcess: N
            }
        }
        ;
        r(51408),
        r(76421);
        let h = () => {
            let e = (0,
            i.Dv)(d.dx)
              , t = (0,
            l.useCallback)( () => {
                var t;
                let r = null == e ? void 0 : e.contentResource
                  , n = null == e ? void 0 : e.id;
                switch (null == r ? void 0 : null === (t = r.explain) || void 0 === t ? void 0 : t.name) {
                case "explain_classic_qubena":
                    return {
                        id: n,
                        src: function(e) {
                            var t;
                            let r = e.explain
                              , n = (null !== (t = r.resources.content_image) && void 0 !== t ? t : []).map(e => {
                                var t;
                                let r = e.path
                                  , n = JSON.parse(e.meta)
                                  , i = null !== (t = n.frames) && void 0 !== t ? t : 0
                                  , l = n.time_ms;
                                return {
                                    path: r,
                                    frames: i,
                                    length: l ? 1e3 * l : void 0
                                }
                            }
                            );
                            return {
                                type: "ClassicQubena",
                                resources: n.map(e => ({
                                    url: e.path,
                                    length: e.length
                                }))
                            }
                        }(r)
                    };
                case "explain_image":
                    return {
                        id: n,
                        src: function(e) {
                            var t;
                            let r = e.explain
                              , n = (null !== (t = r.resources.content_image) && void 0 !== t ? t : []).map(e => {
                                var t;
                                let r = e.path
                                  , n = JSON.parse(e.meta)
                                  , i = null !== (t = n.frames) && void 0 !== t ? t : 0
                                  , l = n.time_ms;
                                return {
                                    path: r,
                                    frames: i,
                                    length: l ? 1e3 * l : void 0
                                }
                            }
                            );
                            return {
                                type: "Image",
                                resources: n.map(e => ({
                                    url: e.path,
                                    length: e.length
                                }))
                            }
                        }(r)
                    };
                default:
                    return
                }
            }
            , [e]);
            return {
                getExplainSource: t
            }
        }
          , p = () => {
            let e = (0,
            i.Dv)(d.dx)
              , t = (0,
            l.useCallback)( () => {
                var t;
                let r = null == e ? void 0 : e.contentResource;
                switch (null == r ? void 0 : null === (t = r.hint) || void 0 === t ? void 0 : t.name) {
                case "hint_classic_qubena":
                    return function(e) {
                        var t;
                        let r = e.hint
                          , n = null !== (t = r.resources.content_image) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return i ? {
                            type: "ClassicQubena",
                            image: i
                        } : void 0
                    }(r);
                case "hint_simple":
                    return function(e) {
                        var t;
                        let r = e.hint
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.components.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        );
                        return {
                            type: "Simple",
                            components: i
                        }
                    }(r);
                default:
                    return
                }
            }
            , [e]);
            return {
                getHintSource: t
            }
        }
          , g = () => {
            let e = (0,
            i.Dv)(d.dx)
              , t = null == e ? void 0 : e.contentResource
              , r = (0,
            l.useCallback)( () => {
                if (!t)
                    return !1;
                switch (null == t ? void 0 : t.description.name) {
                case void 0:
                    return !1;
                case "ad_empty":
                    return !0;
                default:
                    return function(e) {
                        var t;
                        let r = e.description
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.components;
                        if (!i || 0 === i.length)
                            return !1;
                        let l = i.find(e => {
                            let t = e.text;
                            return 0 !== t.length
                        }
                        );
                        return l
                    }(t) || function(e) {
                        let t = e.description
                          , r = Object.entries(t.resources);
                        return 0 < r.length
                    }(t) || function(e) {
                        let t = e.args
                          , r = Object.keys(t);
                        return 0 < r.length
                    }(t)
                }
            }
            , [t]);
            return {
                hasDescription: r
            }
        }
    },
    51408: function(e, t, r) {
        r.d(t, {
            M: function() {
                return s
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(46724);
        let s = () => {
            let e = (0,
            n.Dv)(l.dx)
              , t = (0,
            i.useCallback)( () => {
                let t = null == e ? void 0 : e.contentResource;
                switch (null == t ? void 0 : t.description.name) {
                case "ad_classic_qubena":
                    return function(e) {
                        var t;
                        let r = e.description
                          , n = null !== (t = r.resources.answer_content_image) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "ClassicQubena",
                            image: i
                        }
                    }(t);
                case "ad_empty":
                    return {
                        type: "Empty",
                        parameter: void 0
                    };
                case "ad_english_word":
                    return function(e) {
                        var t, r, n, i, l, s, a, o, c, d, u, x, h, p, g, m, v;
                        let j = e.args
                          , b = null !== (t = j.target_word) && void 0 !== t ? t : ""
                          , f = null !== (r = j.part_of_speech) && void 0 !== r ? r : ""
                          , w = null !== (n = j.variant_form) && void 0 !== n ? n : ""
                          , S = null !== (i = j.countability) && void 0 !== i ? i : ""
                          , y = null !== (l = j.base_form) && void 0 !== l ? l : ""
                          , C = null !== (s = j.word_usage_and_meaning) && void 0 !== s ? s : ""
                          , k = null !== (a = j.singular_form) && void 0 !== a ? a : void 0
                          , I = null !== (o = j.plural_form) && void 0 !== o ? o : void 0
                          , O = null !== (c = j.third_parson_singular) && void 0 !== c ? c : void 0
                          , _ = null !== (d = j.past_tense) && void 0 !== d ? d : void 0
                          , A = null !== (u = j.present_participle) && void 0 !== u ? u : void 0
                          , L = null !== (x = j.past_participle) && void 0 !== x ? x : void 0
                          , R = null !== (h = j.positive_degree) && void 0 !== h ? h : void 0
                          , E = null !== (p = j.comparative_degree) && void 0 !== p ? p : void 0
                          , N = null !== (g = j.superlative_degree) && void 0 !== g ? g : void 0
                          , Z = null !== (m = j.example_usage) && void 0 !== m ? m : void 0
                          , T = null !== (v = j.meaning_of_example) && void 0 !== v ? v : void 0;
                        return {
                            type: "EnglishWord",
                            parameter: {
                                targetWord: b,
                                partOfSpeech: f,
                                variantForm: w,
                                countability: S,
                                baseForm: y,
                                wordUsageAndMeaning: C,
                                singularForm: k,
                                pluralForm: I,
                                thirdParsonSingular: O,
                                pastTense: _,
                                presentParticiple: A,
                                pastParticiple: L,
                                positiveDegree: R,
                                comparativeDegree: E,
                                superlativeDegree: N,
                                exampleUsage: Z,
                                meaningOfExample: T
                            }
                        }
                    }(t);
                case "ad_english_word_v2":
                    return function(e) {
                        var t, r, n, i, l, s, a, o, c, d, u, x, h, p, g, m, v;
                        let j = e.args
                          , b = null !== (t = j.target_word) && void 0 !== t ? t : ""
                          , f = null !== (r = j.part_of_speech) && void 0 !== r ? r : ""
                          , w = null !== (n = j.variant_form) && void 0 !== n ? n : ""
                          , S = null !== (i = j.countability) && void 0 !== i ? i : ""
                          , y = null !== (l = j.base_form) && void 0 !== l ? l : ""
                          , C = null !== (s = j.word_usage_and_meaning) && void 0 !== s ? s : ""
                          , k = null !== (a = j.singular_form) && void 0 !== a ? a : void 0
                          , I = null !== (o = j.plural_form) && void 0 !== o ? o : void 0
                          , O = null !== (c = j.third_parson_singular) && void 0 !== c ? c : void 0
                          , _ = null !== (d = j.past_tense) && void 0 !== d ? d : void 0
                          , A = null !== (u = j.present_participle) && void 0 !== u ? u : void 0
                          , L = null !== (x = j.past_participle) && void 0 !== x ? x : void 0
                          , R = null !== (h = j.positive_degree) && void 0 !== h ? h : void 0
                          , E = null !== (p = j.comparative_degree) && void 0 !== p ? p : void 0
                          , N = null !== (g = j.superlative_degree) && void 0 !== g ? g : void 0
                          , Z = null !== (m = j.example_usage) && void 0 !== m ? m : void 0
                          , T = null !== (v = j.meaning_of_example) && void 0 !== v ? v : void 0;
                        return {
                            type: "EnglishWordV2",
                            parameter: {
                                targetWord: b,
                                partOfSpeech: f,
                                variantForm: w,
                                countability: S,
                                baseForm: y,
                                wordUsageAndMeaning: C,
                                singularForm: k,
                                pluralForm: I,
                                thirdParsonSingular: O,
                                pastTense: _,
                                presentParticiple: A,
                                pastParticiple: L,
                                positiveDegree: R,
                                comparativeDegree: E,
                                superlativeDegree: N,
                                exampleUsage: Z,
                                meaningOfExample: T
                            }
                        }
                    }(t);
                case "ad_html":
                    return function(e) {
                        var t;
                        let r = e.description
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.html;
                        return {
                            type: "Html",
                            parameter: {
                                html: i
                            }
                        }
                    }(t);
                case "ad_kanji_default":
                    return function(e) {
                        var t, r, n;
                        let i = e.args
                          , l = null !== (t = i.phrase) && void 0 !== t ? t : ""
                          , s = null !== (r = i.phrase_pronunciation) && void 0 !== r ? r : ""
                          , a = parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0");
                        return {
                            type: "KanjiDefault",
                            parameter: {
                                phrase: l,
                                phrasePronunciation: s,
                                grade: a
                            }
                        }
                    }(t);
                case "ad_kanji_self_judgement":
                    return function(e) {
                        var t, r, n;
                        let i = e.description
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , s = null !== (r = l.components) && void 0 !== r ? r : {}
                          , a = null !== (n = l.model_answer_string) && void 0 !== n ? n : "";
                        return {
                            type: "KanjiSelfJudgement",
                            parameter: {
                                components: s,
                                modelAnswerString: a
                            }
                        }
                    }(t);
                case "ad_kanji_selfjudgement":
                    return function(e) {
                        var t, r, n;
                        let i = e.args
                          , l = null !== (t = i.question_word) && void 0 !== t ? t : ""
                          , s = null !== (r = i.question_word_others) && void 0 !== r ? r : ""
                          , a = parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0");
                        return {
                            type: "KanjiSelfJudgementLegacy",
                            parameter: {
                                questionWord: l,
                                questionWordOthers: s,
                                grade: a
                            }
                        }
                    }(t);
                case "ad_simple":
                    return function(e) {
                        var t, r;
                        let n = e.description
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.components.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , s = (null !== (r = n.resources.ad_image_section) && void 0 !== r ? r : []).map(e => e.path);
                        return {
                            type: "Simple",
                            parameter: {
                                components: l
                            },
                            images: s
                        }
                    }(t);
                default:
                    return
                }
            }
            , [e]);
            return {
                getDescriptionSource: t
            }
        }
    },
    76421: function(e, t, r) {
        r.d(t, {
            z: function() {
                return s
            }
        });
        var n = r(48583)
          , i = r(67294)
          , l = r(46724);
        let s = () => {
            let e = (0,
            n.Dv)(l.dx)
              , t = (0,
            i.useCallback)( () => {
                let t = null == e ? void 0 : e.contentResource;
                switch (null == t ? void 0 : t.question.name) {
                case "qp_a1":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , s = i.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , a = i.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : []
                          , c = 0 !== o.length ? o[0].path : void 0;
                        return {
                            type: "A1",
                            parameter: {
                                questionSection: l,
                                mainSection: s,
                                subSection: a
                            },
                            image: c
                        }
                    }(t);
                case "qp_a2":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , s = i.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , a = i.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : []
                          , c = 0 !== o.length ? o[0].path : void 0;
                        return {
                            type: "A2",
                            parameter: {
                                questionSection: l,
                                mainSection: s,
                                subSection: a
                            },
                            image: c
                        }
                    }(t);
                case "qp_a2_selection":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = JSON.parse(null !== (t = n.body) && void 0 !== t ? t : "{}")
                          , l = i.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , s = i.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , a = i.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , o = null !== (r = n.resources.image_section) && void 0 !== r ? r : []
                          , c = 0 !== o.length ? o[0].path : void 0;
                        return {
                            type: "A2Selection",
                            parameter: {
                                questionSection: l,
                                mainSection: s,
                                subSection: a
                            },
                            image: c
                        }
                    }(t);
                case "qp_b1":
                    return function(e) {
                        var t, r, n;
                        let i = e.question
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , s = l.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , a = l.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , o = l.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                          , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : []
                          , u = 0 !== d.length ? d[0].path : void 0;
                        return {
                            type: "B1",
                            parameter: {
                                questionSection: s,
                                mainSection: a,
                                subSection: o,
                                aSideAtomName: c
                            },
                            image: u
                        }
                    }(t);
                case "qp_b2":
                    return function(e) {
                        var t, r, n;
                        let i = e.question
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , s = l.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , a = l.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , o = l.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                          , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : []
                          , u = 0 !== d.length ? d[0].path : void 0;
                        return {
                            type: "B2",
                            parameter: {
                                questionSection: s,
                                mainSection: a,
                                subSection: o,
                                aSideAtomName: c
                            },
                            image: u
                        }
                    }(t);
                case "qp_b2_selection":
                    return function(e) {
                        var t, r, n;
                        let i = e.question
                          , l = JSON.parse(null !== (t = i.body) && void 0 !== t ? t : "{}")
                          , s = l.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , a = l.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , o = l.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , c = null !== (r = l.a_side_atom_name) && void 0 !== r ? r : ""
                          , d = null !== (n = i.resources.image_section) && void 0 !== n ? n : []
                          , u = 0 !== d.length ? d[0].path : void 0;
                        return {
                            type: "B2Selection",
                            parameter: {
                                questionSection: s,
                                mainSection: a,
                                subSection: o,
                                aSideAtomName: c
                            },
                            image: u
                        }
                    }(t);
                case "qp_classic_qubena":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.question_content_image) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "ClassicQubena",
                            image: i
                        }
                    }(t);
                case "qp_english_word_L":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.listening_section) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "EnglishWordL",
                            audio: i
                        }
                    }(t);
                case "qp_english_word_L1":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.listening_section) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "EnglishWordL1",
                            audio: i
                        }
                    }(t);
                case "qp_english_word_L2":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = null !== (t = r.resources.listening_section) && void 0 !== t ? t : []
                          , i = 0 !== n.length ? n[0].path : void 0;
                        return {
                            type: "EnglishWordL2",
                            audio: i
                        }
                    }(t);
                case "qp_english_word_R":
                    return function(e) {
                        var t;
                        let r = e.args
                          , n = null !== (t = r.target_word) && void 0 !== t ? t : "";
                        return {
                            type: "EnglishWordR",
                            parameter: {
                                mainText: n
                            }
                        }
                    }(t);
                case "qp_english_word_RL":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = e.args
                          , l = null !== (t = i.target_word) && void 0 !== t ? t : ""
                          , s = null !== (r = n.resources.listening_section) && void 0 !== r ? r : []
                          , a = 0 !== s.length ? s[0].path : void 0;
                        return {
                            type: "EnglishWordRL",
                            parameter: {
                                mainText: l
                            },
                            audio: a
                        }
                    }(t);
                case "qp_english_word_RL_v2":
                    return function(e) {
                        var t, r;
                        let n = e.question
                          , i = e.args
                          , l = null !== (t = i.question_text_for_rxl_v_2) && void 0 !== t ? t : ""
                          , s = null !== (r = n.resources.listening_section) && void 0 !== r ? r : []
                          , a = 0 !== s.length ? s[0].path : void 0;
                        return {
                            type: "EnglishWordRLv2",
                            parameter: {
                                mainText: l
                            },
                            audio: a
                        }
                    }(t);
                case "qp_english_word_W":
                    return function(e) {
                        var t, r, n, i;
                        let l = e.args
                          , s = null !== (t = l.question_text_for_multi_writing) && void 0 !== t ? t : void 0
                          , a = null !== (r = l.variant_form) && void 0 !== r ? r : ""
                          , o = null !== (n = l.base_form) && void 0 !== n ? n : ""
                          , c = null !== (i = l.word_usage_and_meaning) && void 0 !== i ? i : "";
                        return {
                            type: "EnglishWordW",
                            parameter: {
                                questionText: s,
                                variantForm: a,
                                baseForm: o,
                                wordUsageAndMeaning: c
                            }
                        }
                    }(t);
                case "qp_english_word_WL":
                    return function(e) {
                        var t, r, n, i, l, s;
                        let a = e.question
                          , o = e.args
                          , c = null !== (t = o.target_word) && void 0 !== t ? t : ""
                          , d = null !== (r = o.part_of_speech) && void 0 !== r ? r : ""
                          , u = null !== (n = o.variant_form) && void 0 !== n ? n : ""
                          , x = null !== (i = o.base_form) && void 0 !== i ? i : ""
                          , h = null !== (l = o.word_usage_and_meaning) && void 0 !== l ? l : ""
                          , p = null !== (s = a.resources.listening_section) && void 0 !== s ? s : []
                          , g = 0 !== p.length ? p[0].path : void 0;
                        return {
                            type: "EnglishWordWL",
                            parameter: {
                                targetWord: c,
                                partOfSpeech: d,
                                variantForm: u,
                                baseForm: x,
                                wordUsageAndMeaning: h
                            },
                            audio: g
                        }
                    }(t);
                case "qp_html":
                    return function(e) {
                        var t;
                        let r = e.question
                          , n = JSON.parse(null !== (t = r.body) && void 0 !== t ? t : "{}")
                          , i = n.html;
                        return {
                            type: "Html",
                            parameter: {
                                html: i
                            }
                        }
                    }(t);
                case "qp_kanji_nazori":
                    return function(e) {
                        var t, r, n, i;
                        let l = e.args
                          , s = null !== (t = l.question_word) && void 0 !== t ? t : ""
                          , a = null !== (r = l.question_word_pronunciation) && void 0 !== r ? r : ""
                          , o = null !== (n = l.example) && void 0 !== n ? n : ""
                          , c = parseInt(null !== (i = l.grade) && void 0 !== i ? i : "0");
                        return {
                            type: "KanjiNazori",
                            parameter: {
                                questionWord: s,
                                questionWordPronunciation: a,
                                example: o,
                                grade: c
                            }
                        }
                    }(t);
                case "qp_kanji_selfjudgement":
                    return function(e) {
                        var t, r, n, i;
                        let l = e.args
                          , s = null !== (t = l.question_word) && void 0 !== t ? t : ""
                          , a = null !== (r = l.question_word_pronunciation) && void 0 !== r ? r : ""
                          , o = null !== (n = l.example) && void 0 !== n ? n : ""
                          , c = parseInt(null !== (i = l.grade) && void 0 !== i ? i : "0");
                        return {
                            type: "KanjiSelfJudgement",
                            parameter: {
                                questionWord: s,
                                questionWordPronunciation: a,
                                example: o,
                                grade: c
                            }
                        }
                    }(t);
                case "qp_kanji_yomi":
                    return function(e) {
                        var t, r, n;
                        let i = e.args
                          , l = null !== (t = i.question_word) && void 0 !== t ? t : ""
                          , s = null !== (r = i.example) && void 0 !== r ? r : ""
                          , a = parseInt(null !== (n = i.grade) && void 0 !== n ? n : "0");
                        return {
                            type: "KanjiYomi",
                            parameter: {
                                questionWord: l,
                                example: s,
                                grade: a
                            }
                        }
                    }(t);
                case "qp_simple":
                    return function(e) {
                        var t, r, n, i, l;
                        let s = e.question
                          , a = JSON.parse(null !== (t = s.body) && void 0 !== t ? t : "{}")
                          , o = a.question_section.map(e => {
                            var t;
                            let r = null !== (t = e.text) && void 0 !== t ? t : "";
                            return {
                                text: r
                            }
                        }
                        )
                          , c = a.main_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , d = a.sub_section.map(e => {
                            var t, r, n;
                            let i = null !== (t = e.text) && void 0 !== t ? t : ""
                              , l = null !== (r = e.align) && void 0 !== r ? r : "left"
                              , s = null !== (n = e.component_type) && void 0 !== n ? n : "text_line";
                            return {
                                text: i,
                                align: l,
                                type: s
                            }
                        }
                        )
                          , u = (null !== (r = s.resources.small_image) && void 0 !== r ? r : []).map(e => e.path)
                          , x = (null !== (n = s.resources.image_tag) && void 0 !== n ? n : []).map(e => e.path)
                          , h = (null !== (i = s.resources.large_image) && void 0 !== i ? i : []).map(e => e.path)
                          , p = (null !== (l = s.resources.listening_section) && void 0 !== l ? l : []).map(e => e.path)
                          , g = p && 0 !== p.length ? p[0] : void 0;
                        return {
                            type: "Simple",
                            parameter: {
                                questionSection: o,
                                mainSection: c,
                                subSection: d
                            },
                            images: x,
                            smallImages: u,
                            largeImages: h,
                            audio: g
                        }
                    }(t);
                default:
                    return
                }
            }
            , [e]);
            return {
                getQuestionSource: t
            }
        }
    },
    26008: function(e, t, r) {
        r.d(t, {
            Kr: function() {
                return $
            },
            EE: function() {
                return K
            },
            h4: function() {
                return N
            },
            kW: function() {
                return et
            },
            J9: function() {
                return E
            }
        });
        var n = r(85893)
          , i = r(48583)
          , l = r(70086)
          , s = r(63754)
          , a = r(13578)
          , o = r(46724)
          , c = r(67294)
          , d = r(10242);
        let u = e => {
            let {enabled: t} = e
              , r = (0,
            i.b9)(o.G$)
              , l = (0,
            c.useCallback)(r, [r]);
            return (0,
            n.jsxs)(d.Xd, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: s.O9.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: l,
                children: [(0,
                n.jsx)(d.YS, {
                    name: "explain",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.xv, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "説明"
                })]
            })
        }
          , x = e => {
            let {enabled: t} = e
              , r = (0,
            i.b9)(o.pB)
              , l = (0,
            c.useCallback)(r, [r]);
            return (0,
            n.jsxs)(d.Xd, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: s.O9.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: l,
                children: [(0,
                n.jsx)(d.YS, {
                    name: "hint",
                    size: 40,
                    color: "onSurface",
                    alpha: void 0
                }), (0,
                n.jsx)(d.xv, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: void 0,
                    children: "チート導入済み"
                })]
            })
        }
        ;
        var h = r(24358)
          , p = r(78462)
          , g = r(97212)
          , m = r(98619)
          , v = r(67720)
          , j = r(45843)
          , b = r(47986)
          , f = r(36266)
          , w = r(21823)
          , S = r(6408)
          , y = r(71608);
        let C = () => {
            var e;
            let t = (0,
            i.Dv)(o.dx)
              , r = (0,
            i.Dv)(o.fp)
              , l = (0,
            i.Dv)(o.q7)
              , s = null == t ? void 0 : t.mode
              , a = null == t ? void 0 : t.menuContext
              , c = a ? "".concat(a.courseName, " ").concat(a.rootStructureElementName).concat(a.intermediateSequence) : ""
              , d = null !== (e = null == a ? void 0 : a.entryStructureElementName) && void 0 !== e ? e : "";
            return (0,
            n.jsx)(k, {
                visible: r,
                title: c,
                subTitle: d,
                mode: null != s ? s : "Basic",
                top: 56,
                left: 24,
                soundEffectEnabled: l
            })
        }
          , k = e => {
            let {visible: t, title: r, subTitle: a, mode: u, top: x=0, left: j=0, soundEffectEnabled: C, onToggleSoundEffect: k} = e
              , O = (0,
            i.b9)(S._T)
              , _ = (0,
            i.b9)(S.A8)
              , A = (0,
            i.b9)(S.j2)
              , L = (0,
            i.b9)(o.fp)
              , R = (0,
            i.b9)(o.Bm)
              , E = (0,
            i.b9)(w.DX)
              , {isLoading: N, isError: Z, sendCursorPauseCommand: T} = (0,
            y.sy)()
              , {facilitators: M} = (0,
            f.v)()
              , D = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                L(!1),
                T()
            }
            , [T, L])
              , W = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                R(),
                null == k || k()
            }
            , [R, k])
              , z = (0,
            c.useCallback)(e => {
                e.stopPropagation(),
                _(M),
                A("プレイ画面"),
                O(!0),
                L(!1)
            }
            , [M, _, L, A, O]);
            return (0,
            c.useEffect)( () => {
                Z && E()
            }
            , [Z, E]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(h.Z, {
                    open: t,
                    invisible: !0,
                    onClick: () => L(!1)
                }), (0,
                n.jsx)(b.E.div, {
                    style: {
                        position: "fixed",
                        top: x,
                        left: j,
                        zIndex: 1,
                        transformOrigin: "top left"
                    },
                    initial: {
                        scaleY: 0
                    },
                    animate: t ? {
                        scaleY: 1
                    } : {
                        scaleY: 0
                    },
                    transition: {
                        duration: .25
                    },
                    children: (0,
                    n.jsxs)(p.Z, {
                        sx: {
                            minWidth: 240,
                            maxWidth: 280,
                            bgcolor: s.O9.white,
                            border: "1px solid ".concat(s.O9.onSurfaceWeak2),
                            borderRadius: 2,
                            userSelect: "none"
                        },
                        children: [(0,
                        n.jsxs)(g.ZP, {
                            sx: {
                                display: "inline-block"
                            },
                            children: [(0,
                            n.jsx)(d.xv, {
                                color: "onSurface",
                                size: "sm",
                                children: r
                            }), (0,
                            n.jsx)(d.xv, {
                                color: "onSurface",
                                size: "sm",
                                children: a
                            }), "Review" === u && (0,
                            n.jsx)(d.xv, {
                                color: "correct",
                                size: "sm",
                                children: "復習中"
                            })]
                        }), (0,
                        n.jsxs)(m.Z, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    s.NH)("black", "hover")
                                }
                            },
                            onClick: D,
                            children: [(0,
                            n.jsx)(l.sg, {
                                justifyContent: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                children: (0,
                                n.jsx)(d.xv, {
                                    size: "md",
                                    color: "important",
                                    children: "学習を中断する"
                                })
                            }), (0,
                            n.jsx)(v.Z, {
                                sx: {
                                    borderColor: s.O9.onSurfaceWeak3
                                }
                            })]
                        }), (0,
                        n.jsxs)(m.Z, {
                            sx: {
                                display: "block",
                                py: 0,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    s.NH)("black", "hover")
                                }
                            },
                            onClick: W,
                            children: [(0,
                            n.jsxs)(l.X2, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                height: 56,
                                px: 1,
                                children: [(0,
                                n.jsx)(d.xv, {
                                    children: "こうか音"
                                }), (0,
                                n.jsx)(I, {
                                    checked: C
                                })]
                            }), (0,
                            n.jsx)(v.Z, {
                                sx: {
                                    borderColor: s.O9.onSurfaceWeak3
                                }
                            })]
                        }), (0,
                        n.jsx)(m.Z, {
                            sx: {
                                height: 48,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: (0,
                                    s.NH)("black", "hover")
                                }
                            },
                            onClick: z,
                            children: (0,
                            n.jsx)(l.sg, {
                                px: 1,
                                children: (0,
                                n.jsx)(d.xv, {
                                    size: "sm",
                                    children: "困っている事を送信する"
                                })
                            })
                        })]
                    })
                }), (0,
                n.jsx)(d.h2, {
                    isLoading: N
                })]
            })
        }
          , I = e => {
            let {checked: t} = e;
            return (0,
            n.jsx)(j.Z, {
                checked: t,
                sx: {
                    width: 52,
                    height: 32,
                    p: 0,
                    "& .MuiSwitch-switchBase": {
                        p: 0,
                        m: .5,
                        transitionDuration: "300ms",
                        "&.Mui-checked": {
                            transform: "translateX(20px)",
                            color: "#fff",
                            "& + .MuiSwitch-track": {
                                backgroundColor: s.O9.primary,
                                opacity: 1,
                                border: 0
                            }
                        }
                    },
                    "& .MuiSwitch-thumb": {
                        boxSizing: "border-box",
                        width: 24,
                        height: 24
                    },
                    "& .MuiSwitch-track": {
                        borderRadius: 16,
                        backgroundColor: s.O9.onSurfaceWeak2,
                        opacity: 1,
                        transition: "background-color .5s"
                    }
                }
            })
        }
        ;
        I.displayName = "IOSSwitch";
        let O = e => {
            let {onClick: t} = e
              , r = (0,
            i.Dv)(o.uR);
            return (0,
            n.jsx)(d.Xd, {
                sx: {
                    width: 48,
                    height: 48,
                    backgroundColor: s.O9.bg,
                    borderRadius: "50%"
                },
                onClick: t,
                disabled: r,
                children: (0,
                n.jsx)(d.YS, {
                    name: "menu",
                    size: 40,
                    color: "onSurface"
                })
            })
        }
        ;
        var _ = r(80822);
        let A = c.memo(e => {
            let {ratio: t, color: r} = e;
            return (0,
            n.jsx)(_.Z, {
                height: 16,
                borderRadius: 2,
                bgcolor: (0,
                s.NH)("onSurface", .1),
                children: (0,
                n.jsx)(b.E.div, {
                    style: {
                        height: 16,
                        borderRadius: 8,
                        background: r
                    },
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: "".concat(100 * t, "%")
                    },
                    transition: {
                        duration: .8
                    }
                })
            })
        }
        );
        A.displayName = "GradientBar";
        let L = c.memo(e => {
            let {mode: t, ratio: r, visibleText: i} = e;
            return (0,
            n.jsxs)(l.X2, {
                width: "100%",
                children: [(0,
                n.jsx)(_.Z, {
                    width: 34,
                    height: 16,
                    children: i && (0,
                    n.jsxs)(d.xv, {
                        size: "sm",
                        color: 0 === r ? "onSurfaceWeak1" : "Basic" === t ? "primary" : "correct",
                        fontWeight: "bold",
                        textAlign: "right",
                        children: [Math.floor(100 * r), "%"]
                    })
                }), (0,
                n.jsx)(l.LZ, {
                    x: 1
                }), (0,
                n.jsx)(_.Z, {
                    flex: 1,
                    alignItems: "center",
                    children: (0,
                    n.jsx)(A, {
                        ratio: r,
                        color: "Basic" === t ? s.cz.basicBar : s.cz.reviewBar
                    })
                })]
            })
        }
        );
        L.displayName = "ProgressBar";
        let R = e => {
            let {enabled: t, onClick: r} = e;
            return (0,
            n.jsxs)(d.Xd, {
                sx: {
                    height: 48,
                    borderRadius: 6,
                    backgroundColor: s.O9.bg,
                    paddingLeft: .5,
                    paddingRight: 1.5
                },
                disabled: !t,
                onClick: r,
                children: [(0,
                n.jsx)(d.YS, {
                    name: "textbook",
                    size: 40,
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled"
                }), (0,
                n.jsx)(d.xv, {
                    fontWeight: "bold",
                    color: "onSurface",
                    alpha: t ? void 0 : "disabled",
                    children: "教科書"
                })]
            })
        }
          , E = 56
          , N = () => {
            let e = (0,
            i.Dv)(o.$p)
              , t = (0,
            i.Dv)(o.dx)
              , r = (0,
            i.Dv)(o.si)
              , l = null == t ? void 0 : t.mode
              , {displayTextbook: s, hasTextbookLink: c, handleClickProgramDigitalTextbook: d} = (0,
            a.MJ)(null == t ? void 0 : t.id);
            if (!e || !l)
                return (0,
                n.jsx)(n.Fragment, {});
            let u = t.contentResource;
            return (0,
            n.jsx)(Z, {
                reason: e,
                mode: l,
                progress: r,
                hasHint: !!u.hint,
                hasExplain: !!u.explain,
                displayTextbook: s(),
                hasTextbookLink: c(),
                handleClickTextbook: () => d()
            })
        }
          , Z = e => {
            let {reason: t, mode: r, progress: a, hasHint: c, hasExplain: d, displayTextbook: h, hasTextbookLink: p, handleClickTextbook: g} = e
              , m = (0,
            i.b9)(o.fp);
            return (0,
            n.jsxs)(l.X2, {
                height: E,
                px: 2,
                py: .5,
                alignContent: "center",
                sx: {
                    userSelect: "none"
                },
                children: [(0,
                n.jsx)(O, {
                    onClick: () => m(!0)
                }), (0,
                n.jsx)(C, {}), (0,
                n.jsx)(l.LZ, {
                    x: 2
                }), (0,
                n.jsxs)(l.X2, {
                    flex: 1,
                    marginY: 1.5,
                    p: .5,
                    bgcolor: s.O9.bg,
                    borderRadius: 4,
                    children: [(0,
                    n.jsx)(l.LZ, {
                        x: 1
                    }), "StartFromReview" !== t && (0,
                    n.jsx)(L, {
                        mode: r,
                        ratio: a,
                        visibleText: !(("StartFromHome" === t || "ResumeFromHome" === t) && "Review" === r)
                    })]
                }), (0,
                n.jsx)(l.LZ, {
                    x: 1.5
                }), (0,
                n.jsx)(u, {
                    enabled: d
                }), (0,
                n.jsx)(l.LZ, {
                    x: 1
                }), (0,
                n.jsx)(x, {
                    enabled: c
                }), h && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(l.LZ, {
                        x: 1
                    }), (0,
                    n.jsx)(R, {
                        enabled: p,
                        onClick: g
                    })]
                })]
            })
        }
        ;
        var T = r(2734)
          , M = r(73935)
          , D = r(68789)
          , W = r(78949)
          , z = r(6964)
          , q = r(98456)
          , H = r(70872)
          , J = r(45098);
        let P = e => {
            let {count: t, selectedPageAnimTime: r, onChangePage: i, onClickSelectedPage: l} = e
              , [a,o] = (0,
            c.useState)(0)
              , d = (0,
            c.useRef)()
              , u = (0,
            c.useCallback)( () => {
                if (window.clearTimeout(d.current),
                !r)
                    return;
                let e = r / 100
                  , t = r => {
                    d.current = window.setTimeout( () => {
                        r ? o(0) : o(e => e < 100 ? e + 1 : (window.clearTimeout(d.current),
                        0)),
                        t()
                    }
                    , e)
                }
                ;
                t(!0)
            }
            , [r])
              , x = (0,
            c.useCallback)( (e, t) => {
                window.clearTimeout(d.current),
                o(0),
                i(t - 1)
            }
            , [i])
              , h = (0,
            c.useCallback)( () => {
                l(),
                u()
            }
            , [l, u])
              , p = (0,
            c.useCallback)(e => {
                switch (e.type) {
                case "previous":
                case "next":
                    return (0,
                    n.jsx)(F, {
                        ...e
                    });
                default:
                    return (0,
                    n.jsxs)(_.Z, {
                        position: "relative",
                        zIndex: 1,
                        sx: {
                            userSelect: "none"
                        },
                        children: [(0,
                        n.jsx)(z.Z, {
                            ...e,
                            sx: {
                                minWidth: 48,
                                height: 48,
                                margin: 0,
                                padding: 0,
                                fontSize: 16,
                                fontWeight: "bold",
                                color: e.selected ? s.O9.onSurface : s.O9.onSurfaceWeak1,
                                borderRadius: "50%",
                                "&.Mui-selected": {
                                    background: s.O9.primaryWeak1,
                                    "&:hover": {
                                        background: s.O9.primaryWeak1
                                    }
                                }
                            }
                        }), e.selected && (0,
                        n.jsx)(q.Z, {
                            variant: "determinate",
                            value: a,
                            size: 48,
                            thickness: 2,
                            sx: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                cursor: "pointer",
                                ".MuiCircularProgress-svg circle": {
                                    transition: "none"
                                },
                                ":hover": {
                                    background: "transparent",
                                    "&:before": {
                                        content: '""',
                                        position: "absolute",
                                        width: 48,
                                        height: 48,
                                        background: e.selected ? (0,
                                        s.NH)("primary", "hover") : s.O9.onSurfaceWeak4,
                                        zIndex: -1
                                    }
                                }
                            },
                            onClick: h
                        })]
                    })
                }
            }
            , [a, h]);
            return (0,
            c.useEffect)( () => (u(),
            () => {
                window.clearTimeout(d.current)
            }
            ), [u]),
            (0,
            n.jsx)(H.Z, {
                sx: {
                    ".MuiPagination-ul": {
                        flexWrap: "nowrap",
                        "li:first-of-type": {
                            width: "100%"
                        },
                        "li:last-child": {
                            width: "100%",
                            textAlign: "right"
                        }
                    }
                },
                count: t,
                renderItem: p,
                onChange: x
            })
        }
          , F = (0,
        J.Z)(z.Z)(e => {
            let {disabled: t} = e;
            return {
                width: 56,
                height: 56,
                margin: 0,
                padding: 0,
                background: s.O9.primary,
                borderRadius: "50%",
                visibility: t ? "hidden" : "visible",
                ":hover": {
                    background: s.O9.primary
                },
                ".MuiPaginationItem-icon": {
                    width: 40,
                    height: 40,
                    color: s.O9.white
                }
            }
        }
        )
          , $ = () => {
            let e = (0,
            i.Dv)(o.R9)
              , {getExplainSource: t} = (0,
            W.kk)()
              , r = t();
            if (!r)
                return (0,
                n.jsx)(n.Fragment, {});
            let {id: l, src: s} = r;
            return 0 === s.resources.length ? (0,
            n.jsx)(n.Fragment, {}) : (0,
            n.jsx)(V, {
                explain: s,
                visible: e
            }, l)
        }
          , V = e => {
            let {explain: t, visible: r} = e
              , a = (0,
            i.b9)(o.Kw)
              , [u,x] = (0,
            c.useState)(void 0)
              , [p,g] = (0,
            c.useState)(!1)
              , [m,v] = (0,
            c.useState)(!1)
              , j = (0,
            T.Z)()
              , {windowHeight: b} = (0,
            D.AS)()
              , f = (0,
            c.useCallback)( () => {
                m || a()
            }
            , [a, m])
              , w = (0,
            c.useCallback)(e => {
                g(e.currentTarget.scrollTop > 0)
            }
            , [])
              , S = (0,
            c.useCallback)(e => {
                e.stopPropagation()
            }
            , [])
              , y = (0,
            c.useCallback)(e => {
                x(t.resources[e])
            }
            , [t.resources])
              , C = (0,
            c.useCallback)( () => {
                x(e => (null == e ? void 0 : e.length) ? {
                    ...e,
                    url: "".concat(e.url, "?").concat(Date.now())
                } : e)
            }
            , []);
            (0,
            c.useEffect)( () => {
                let e = () => v(!1)
                  , t = () => v(!0);
                return document.addEventListener("pointerup", e),
                document.addEventListener("pointerdown", t),
                () => {
                    document.removeEventListener("pointerup", e),
                    document.removeEventListener("pointerdown", t)
                }
            }
            , []),
            (0,
            c.useEffect)( () => (x(t.resources[0]),
            () => {
                x(void 0)
            }
            ), [t.resources]),
            (0,
            c.useEffect)( () => {
                r || x(void 0)
            }
            , [r]);
            let k = t.resources.length > 1;
            return (0,
            M.createPortal)((0,
            n.jsx)(h.Z, {
                open: r,
                onPointerDown: f,
                sx: {
                    zIndex: j.zIndex.modal
                },
                children: (0,
                n.jsxs)(_.Z, {
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: s.O9.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    onPointerDown: S,
                    children: [(0,
                    n.jsxs)(_.Z, {
                        width: "100%",
                        height: 48,
                        p: .5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderBottom: p ? "1px solid ".concat((0,
                        s.NH)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        n.jsx)(_.Z, {
                            paddingLeft: 2,
                            children: (0,
                            n.jsx)(d.xv, {
                                size: "lg",
                                children: "説明"
                            })
                        }), (0,
                        n.jsx)(l.sg, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: s.O9.onSurfaceWeak3
                                }
                            },
                            onPointerDown: f,
                            children: (0,
                            n.jsx)(d.YS, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), u && (k ? (0,
                    n.jsxs)(_.Z, {
                        width: "100%",
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        paddingBottom: 2,
                        children: [(0,
                        n.jsx)(l.M5, {
                            pt: 2,
                            children: (0,
                            n.jsx)(K, {
                                qmlType: t.type,
                                url: u.url,
                                maxHeight: b - 48 - 48 - 56 - 40
                            })
                        }), (0,
                        n.jsx)(_.Z, {
                            pt: 2,
                            children: (0,
                            n.jsx)(P, {
                                count: t.resources.length,
                                selectedPageAnimTime: u.length,
                                onChangePage: y,
                                onClickSelectedPage: C
                            })
                        })]
                    }) : (0,
                    n.jsx)(_.Z, {
                        width: "100%",
                        maxHeight: b - 48 - 48,
                        marginTop: "".concat(48, "px"),
                        px: 2,
                        pb: 2,
                        overflow: "auto",
                        onScroll: w,
                        children: (0,
                        n.jsx)(l.M5, {
                            pt: 2,
                            children: (0,
                            n.jsx)(K, {
                                qmlType: t.type,
                                url: u.url,
                                wheelDisabled: !0
                            })
                        })
                    }))]
                })
            }), document.body)
        }
        ;
        var X = r(26126);
        let G = e => {
            let {url: t, maxHeight: r} = e;
            return (0,
            n.jsx)("img", {
                src: t,
                width: "100%",
                height: "100%",
                style: {
                    maxHeight: r
                },
                alt: ""
            })
        }
          , B = e => {
            let {url: t, maxHeight: r} = e;
            return (0,
            n.jsx)("img", {
                src: t,
                width: "100%",
                height: "100%",
                style: {
                    maxHeight: r
                },
                alt: ""
            })
        }
          , K = e => {
            let {qmlType: t, url: r, maxHeight: i, wheelDisabled: l} = e;
            return (0,
            n.jsx)(X.d$, {
                wheel: {
                    wheelDisabled: l
                },
                panning: {
                    disabled: !0
                },
                doubleClick: {
                    mode: "reset"
                },
                children: (0,
                n.jsxs)(X.Uv, {
                    children: ["ClassicQubena" === t && (0,
                    n.jsx)(G, {
                        url: r,
                        maxHeight: i
                    }), "Image" === t && (0,
                    n.jsx)(B, {
                        url: r,
                        maxHeight: i
                    })]
                })
            })
        }
          , Y = e => {
            switch (e.type) {
            case "ClassicQubena":
                return (0,
                n.jsx)(U, {
                    source: e
                });
            case "Simple":
                return (0,
                n.jsx)(ee, {
                    source: e
                })
            }
        }
          , U = e => {
            let {source: t} = e;
            return (0,
            n.jsx)(_.Z, {
                p: 2,
                children: (0,
                n.jsx)("img", {
                    src: t.image,
                    width: "100%",
                    height: "100%",
                    alt: ""
                })
            })
        }
        ;
        var Q = r(3363);
        let ee = e => {
            let {source: t} = e;
            return (0,
            n.jsx)("div", {
                className: "question-area",
                style: {
                    padding: "16px"
                },
                children: t.components.map( (e, r) => {
                    let i = t.components.length - 1 === r;
                    return (0,
                    n.jsx)("p", {
                        className: "question-text",
                        style: {
                            textAlign: e.align,
                            paddingBottom: i ? 0 : "16px"
                        },
                        children: (0,
                        n.jsx)(Q.J$, {
                            src: e.text.replaceAll("\n", "<br/>")
                        })
                    }, r)
                }
                )
            })
        }
          , et = () => {
            let e = (0,
            i.Dv)(o.H$)
              , {getHintSource: t} = (0,
            W.D7)()
              , r = t();
            return r ? (0,
            n.jsx)(er, {
                hint: r,
                visible: e
            }) : (0,
            n.jsx)(n.Fragment, {})
        }
          , er = e => {
            let {hint: t, visible: r} = e
              , a = (0,
            i.b9)(o.E9)
              , [u,x] = (0,
            c.useState)(!1)
              , [p,g] = (0,
            c.useState)(!1)
              , m = (0,
            T.Z)()
              , {windowHeight: v} = (0,
            D.AS)()
              , j = (0,
            c.useCallback)( () => {
                p || a()
            }
            , [a, p])
              , b = (0,
            c.useCallback)(e => {
                x(e.currentTarget.scrollTop > 0)
            }
            , [])
              , f = (0,
            c.useCallback)(e => {
                e.stopPropagation()
            }
            , []);
            return (0,
            c.useEffect)( () => {
                let e = () => g(!1)
                  , t = () => g(!0);
                return document.addEventListener("pointerup", e),
                document.addEventListener("pointerdown", t),
                () => {
                    document.removeEventListener("pointerup", e),
                    document.removeEventListener("pointerdown", t)
                }
            }
            , []),
            (0,
            M.createPortal)((0,
            n.jsx)(h.Z, {
                open: r,
                onPointerDown: j,
                sx: {
                    zIndex: m.zIndex.modal
                },
                children: (0,
                n.jsxs)(_.Z, {
                    width: "100%",
                    maxWidth: 800,
                    maxHeight: "calc(100% - ".concat(48, "px)"),
                    marginX: 3,
                    bgcolor: s.O9.surface,
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    sx: {
                        userSelect: "none"
                    },
                    onPointerDown: f,
                    children: [(0,
                    n.jsxs)(_.Z, {
                        width: "100%",
                        height: 48,
                        p: .5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderBottom: u ? "1px solid ".concat((0,
                        s.NH)("onSurface", .1)) : void 0,
                        sx: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        },
                        children: [(0,
                        n.jsx)(_.Z, {
                            paddingLeft: 1.5,
                            children: (0,
                            n.jsx)(d.xv, {
                                size: "lg",
                                children: "チート導入済み"
                            })
                        }), (0,
                        n.jsx)(l.sg, {
                            height: 40,
                            sx: {
                                cursor: "pointer",
                                ":hover": {
                                    bgcolor: s.O9.onSurfaceWeak3
                                },
                                borderRadius: "50%"
                            },
                            onPointerDown: j,
                            children: (0,
                            n.jsx)(d.YS, {
                                name: "close",
                                size: 40,
                                color: "onSurface"
                            })
                        })]
                    }), (0,
                    n.jsx)(_.Z, {
                        marginTop: "".concat(48, "px"),
                        width: "100%",
                        maxHeight: v - 48 - 48,
                        overflow: "auto",
                        onScroll: b,
                        children: (0,
                        n.jsx)(X.d$, {
                            wheel: {
                                wheelDisabled: !0
                            },
                            panning: {
                                disabled: !0
                            },
                            doubleClick: {
                                mode: "reset"
                            },
                            children: (0,
                            n.jsx)(X.Uv, {
                                wrapperStyle: {
                                    width: "100%"
                                },
                                contentStyle: {
                                    width: "100%"
                                },
                                children: Y(t)
                            })
                        })
                    })]
                })
            }), document.body)
        }
    },
    49682: function(e, t, r) {
        r.d(t, {
            W: function() {
                return i
            }
        });
        var n = r(15103);
        let i = (0,
        n.cn)(0)
    },
    65976: function(e, t, r) {
        r.d(t, {
            L: function() {
                return n
            }
        });
        let n = "panel-answer"
    }
}]);
