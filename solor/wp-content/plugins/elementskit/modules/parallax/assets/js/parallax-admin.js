! function() {
    var e = {
            78: function() {
                ! function(e, t) {
                    "use strict";
                    var n = {
                        init: function() {
                            t.hooks.addAction("frontend/element_ready/section", n.elementorSection), t.hooks.addAction("frontend/element_ready/container", n.elementorSection)
                        },
                        elementorSection: function(e) {
                            var n = e,
                                o = null;
                            Boolean(t.isEditMode());
                            (o = new i(n)).init(o)
                        }
                    };
                    e(window).on("elementor/frontend/init", n.init);
                    var i = function(n) {
                        var i = this,
                            o = n.data("id"),
                            s = Boolean(t.isEditMode()),
                            a = e(window);
                        e("body"), a.scrollTop(), a.height(), navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), navigator.platform;
                        i.init = function() {
                            return i.setParallaxMulti(o), i.moveBg(o), !1
                        }, i.setParallaxMulti = function(t) {
                            var o, a = {},
                                l = [];
                            if (a = i.getOptions(t, "ekit_section_parallax_multi_items"), "yes" == (o = i.getOptions(t, "ekit_section_parallax_multi"))) {
                                if (s) {
                                    if (!a.hasOwnProperty("models") || 0 === Object.keys(a.models).length || "yes" != o) return;
                                    a = a.models
                                }
                                if (n.addClass("elementskit-parallax-multi-container"), e.each(a, (function(e, t) {
                                        t.hasOwnProperty("attributes") && (t = t.attributes), l.push(t), i.pushElement(t), i.getSVG()
                                    })), l.length < 0) return l;
                                n.on("mousemove", (function(t) {
                                    e.each(l, (function(e, n) {
                                        "mousemove" == n.parallax_style && i.moveItem(n, t)
                                    }))
                                })), e.each(l, (function(e, t) {
                                    "tilt" == t.parallax_style && i.tiltItem(t), "onscroll" == t.parallax_style && i.walkItem(t)
                                }))
                            }
                        }, i.moveBg = function(e) {
                            var t, o;
                            t = i.getOptions(e, "ekit_section_parallax_bg"), o = i.getOptions(e, "ekit_section_parallax_bg_speed"), n.addClass("elementskit-parallax-multi-container"), "yes" != t || s || n.jarallax({
                                speed: o
                            })
                        }, i.walkItem = function(t) {
                            t.parallax_transform !== undefined && t.parallax_transform_value !== undefined && n.find(".elementor-repeater-item-" + t._id).imagesLoaded((function() {
                                e(this.elements[0]).magician({
                                    type: "scroll",
                                    offsetTop: parseInt(t.offsettop),
                                    offsetBottom: parseInt(t.offsetbottom),
                                    duration: parseInt(t.smoothness),
                                    animation: {
                                        [t.parallax_transform]: t.parallax_transform_value
                                    }
                                })
                            }))
                        }, i.moveItem = function(e, t) {
                            var i = t.pageX - n.offset().left,
                                o = t.pageY - n.offset().top,
                                s = n.find(".elementor-repeater-item-" + e._id);
                            TweenMax.to(s, 1, {
                                x: (i - n.width() / 2) / n.width() * e.parallax_speed,
                                y: (o - n.height() / 2) / n.height() * e.parallax_speed,
                                ease: Power2.ease
                            })
                        }, i.tiltItem = function(e) {
                            var t = n.find(".elementor-repeater-item-" + e._id);
                            t.find("img");
                            t.tilt({
                                disableAxis: e.disableaxis,
                                scale: e.scale,
                                speed: e.parallax_speed,
                                maxTilt: e.maxtilt,
                                glare: !1,
                                maxGlare: .5
                            })
                        }, i.getOptions = function(t, n) {
                            var i = null,
                                o = {};
                            if (s) {
                                if (!window.elementor.hasOwnProperty("elements")) return !1;
                                if (!(i = window.elementor.elements).models) return !1;
                                if (e.each(i.models, (function(e, n) {
                                        t == n.id && (o = n.attributes.settings.attributes)
                                    })), !o.hasOwnProperty(n)) return !1
                            } else {
                                if (void 0 === (o = e(t = ".elementor-element-" + t).data("settings"))) return;
                                if (!o.hasOwnProperty(n)) return !1
                            }
                            return o[n]
                        }, i.pushElement = function(e) {
                            var t = "ekit-section-parallax-mousemove ekit-section-parallax-layer elementor-repeater-item-" + e._id,
                                i = "";
                            "shape" == e.item_source && (e.image = {}, e.image.url = window.elementskit_module_parallax_url + "assets/svg/" + e.shape + ".svg", t += " ekit-section-parallax-layer-shape", i = "shape-" + e.shape.replace(".svg", "")), 0 === n.find(".elementor-repeater-item-" + e._id).length && "" != e.image.url && n.prepend(`\n                        <div class="${t} ekit-section-parallax-type-${e.parallax_style}" role="img" aria-label="${e.image.alt}">\n\t\t\t\t\t\t\t<img class="elementskit-parallax-graphic ${i}" src="${e.image.url}" alt="${e.image.alt}" />\n                        </div>\n                    `)
                        }, i.getSVG = function() {
                            n.find(".ekit-section-parallax-layer-shape img").each((function() {
                                var t = e(this),
                                    n = t.prop("attributes"),
                                    i = t.attr("src");
                                e.get(i, (function(i) {
                                    var o = e(i).find("svg");
                                    o = o.removeAttr("xmlns:a"), e.each(n, (function() {
                                        o.attr(this.name, this.value)
                                    })), t.replaceWith(o)
                                }))
                            }))
                        }
                    }
                }(jQuery, window.elementorFrontend)
            },
            957: function() {
                ! function(e, t) {
                    "use strict";
                    var n = function() {
                        t.hooks.addAction("frontend/element_ready/global", (function(e) {
                            new o({
                                $element: e
                            })
                        }))
                    };
                    e(window).on("elementor/frontend/init", n);
                    var i = "undefined" != typeof window.elementorFrontend && function(e, t) {
                            if ("string" != typeof e) return !1;
                            if ("string" != typeof t) return !1;
                            e = e.split("."), t = t.split(".");
                            const n = Math.min(e.length, t.length);
                            for (let i = 0; i < n; ++i) {
                                if (e[i] = parseInt(e[i], 10), t[i] = parseInt(t[i], 10), e[i] > t[i]) return 1;
                                if (e[i] < t[i]) return -1
                            }
                            return e.length == t.length ? 0 : e.length < t.length ? -1 : 1
                        }(window.elementorFrontend.version, "2.6.0") < 0 ? elementorFrontend.Module : elementorModules.frontend.handlers.Base,
                        o = i.extend({
                            isTrue: function(e, t) {
                                return 0 != this.getElementSettings(e) && this.getElementSettings(e) == t
                            },
                            shouldRun: function(e) {
                                var n = !1;
                                return this.isTrue("ekit_we_effect_on", e) && (n = !0), Boolean(t.isEditMode()) && this.isTrue("ekit_we_on_test_mode", "yes") && (n = !1), n
                            },
                            active: function() {
                                this.shouldRun("tilt") && this.tilt(), this.shouldRun("mousemove") && this.mousemove(), this.shouldRun("onscroll") && this.onscroll()
                            },
                            deactivate: function(t) {
                                (t || !this.getElementSettings("ekit_we_effect_on") || "tilt" != this.getElementSettings("ekit_we_effect_on") || this.isTrue("ekit_we_on_test_mode", "yes")) && this.$element.find(".elementor-widget-container").tilt().tilt.destroy.call(this.$element.find(".elementor-widget-container")), (t || !this.getElementSettings("ekit_we_effect_on") || "mousemove" != this.getElementSettings("ekit_we_effect_on") || this.isTrue("ekit_we_on_test_mode", "yes")) && this.$element.parents(".elementor-section, .e-con").first().off("mousemove.elementskitwidgethovereffect"), (t || !this.getElementSettings("ekit_we_effect_on") || "onscroll" != this.getElementSettings("ekit_we_effect_on") || this.isTrue("ekit_we_on_test_mode", "yes")) && e(window).off("scroll.magicianscrolleffect" + this.getID())
                            },
                            onElementChange: function(e) {
                                e.includes("ekit_we_") && (e.includes("_on") && this.deactivate(!1), e.includes("we_scroll_") && this.deactivate(!0), this.active())
                            },
                            onInit: function() {
                                i.prototype.onInit.apply(this, arguments), this.active()
                            },
                            onDestroy: function() {
                                i.prototype.onDestroy.apply(this, arguments), this.deactivate(!0)
                            },
                            tilt: function() {
                                this.$element.find(".elementor-widget-container").tilt({
                                    disableAxis: this.getElementSettings("ekit_we_tilt_disableaxis"),
                                    scale: this.getElementSettings("ekit_we_tilt_scale"),
                                    speed: this.getElementSettings("ekit_we_tilt_parallax_speed"),
                                    maxTilt: this.getElementSettings("ekit_we_tilt_maxtilt"),
                                    glare: !1,
                                    maxGlare: .5
                                })
                            },
                            mousemove: function() {
                                var e = this.$element.find(".elementor-widget-container"),
                                    t = this.$element.parents(".elementor-section, .e-con").first(),
                                    n = this.getElementSettings("ekit_we_mousemove_parallax_speed");
                                t.on("mousemove.elementskitwidgethovereffect", (function(i) {
                                    var o = i.pageX - t.offset().left,
                                        s = i.pageY - t.offset().top;
                                    TweenMax.to(e, 1, {
                                        x: (o - t.width() / 2) / t.width() * n,
                                        y: (s - t.height() / 2) / t.height() * n,
                                        ease: Power2.ease
                                    })
                                }))
                            },
                            onscroll: function() {
                                this.$element.find(".elementor-widget-container").magician({
                                    type: "scroll",
                                    uniqueKey: this.getID(),
                                    offsetTop: parseInt(this.getElementSettings("ekit_we_scroll_offsettop")),
                                    offsetBottom: parseInt(this.getElementSettings("ekit_we_scroll_offsetbottom")),
                                    duration: parseInt(this.getElementSettings("ekit_we_scroll_smoothness")),
                                    animation: {
                                        [this.getElementSettings("ekit_we_scroll_animation")]: this.getElementSettings("ekit_we_scroll_animation_value")
                                    }
                                })
                            }
                        })
                }(jQuery, window.elementorFrontend)
            }
        },
        t = {};

    function n(i) {
        var o = t[i];
        if (o !== undefined) return o.exports;
        var s = t[i] = {
            exports: {}
        };
        return e[i](s, s.exports, n), s.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            n(957), n(78)
        }()
}();