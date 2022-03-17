import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import styled, { ThemeProvider } from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || from);
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}

var DisplayMonths = function (_a) {
  var source = _a.source,
    setSource = _a.setSource,
    setDisplayMonths = _a.setDisplayMonths,
    jalali = _a.jalali;
  var selectMonth = function (source) {
    setSource(source.month(+source.format("M") - 1));
    setDisplayMonths(false);
  };
  var renderMonths = function () {
    var months = [];
    for (var i = 0; i < 12; i++) {
      months[i] = source.month(i);
    }
    return months.map(function (item) {
      return jsx(
        "div",
        __assign(
          {
            onClick: function () {
              return selectMonth(item);
            },
            "data-testid": "month-item-to-select",
          },
          { children: jsx("p", { children: item.format("MMMM") }, void 0) },
        ),
        item.format("MM-MMMM"),
      );
    });
  };
  return jsx(
    Wrapper$5,
    __assign({ jalali: jalali }, { children: renderMonths() }),
    void 0,
  );
};
var Wrapper$5 = styled.div(
  templateObject_1$5 ||
    (templateObject_1$5 = __makeTemplateObject(
      [
        "\n  margin-top: 15px;\n  display: flex;\n  flex: 1 1;\n  height: 350px;\n  flex-wrap: wrap;\n  flex-direction: ",
        ";\n  > div {\n    flex-basis: calc(25% - 4px);\n    justify-content: center;\n    text-align: center;\n    display: flex;\n    background-color: ",
        ";\n    align-items: center;\n    cursor: pointer;\n    border: 2px solid #fff;\n    p {\n      color: #fff;\n    }\n  }\n",
      ],
      [
        "\n  margin-top: 15px;\n  display: flex;\n  flex: 1 1;\n  height: 350px;\n  flex-wrap: wrap;\n  flex-direction: ",
        ";\n  > div {\n    flex-basis: calc(25% - 4px);\n    justify-content: center;\n    text-align: center;\n    display: flex;\n    background-color: ",
        ";\n    align-items: center;\n    cursor: pointer;\n    border: 2px solid #fff;\n    p {\n      color: #fff;\n    }\n  }\n",
      ],
    )),
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "row-reverse" : "row";
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.main;
  },
);
var templateObject_1$5;

var _path$1;

function _extends$1() {
  _extends$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1.apply(this, arguments);
}

function SvgChevronLeft(props) {
  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends$1(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 4.876,
        height: 7.908,
        fill: "currentColor",
      },
      props,
    ),
    _path$1 ||
      (_path$1 = /*#__PURE__*/ React.createElement("path", {
        d: "M4.877.924L1.846 3.955l3.031 3.031-.923.923L0 3.955 3.954.001z",
        className: "chevron-left_svg__semi-dark",
      })),
  );
}

var _path;

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function SvgChevronRight(props) {
  return /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 4.877,
        height: 7.91,
        fill: "currentColor",
      },
      props,
    ),
    _path ||
      (_path = /*#__PURE__*/ React.createElement("path", {
        d: "M-.001 6.986L3.03 3.955-.001.924.922.001l3.954 3.954L.922 7.909z",
      })),
  );
}

var Header = function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
  var jalali = _a.jalali,
    source = _a.source,
    setSource = _a.setSource,
    components = _a.components,
    displayMonths = _a.displayMonths,
    numberOfMonths = _a.numberOfMonths,
    setDisplayMonths = _a.setDisplayMonths;
  var prev = function () {
    if (displayMonths) {
      setSource(source.subtract(1, "year"));
    } else {
      setSource(source.subtract(1, "month"));
    }
  };
  var next = function () {
    if (displayMonths) {
      setSource(source.add(1, "year"));
    } else {
      setSource(source.add(1, "month"));
    }
  };
  var renderTitles = function () {
    var _a, _b, _c, _d;
    var titles = [];
    if (displayMonths) {
      return jsx(
        "p",
        __assign(
          {
            onClick: function () {
              return setDisplayMonths(function (prev) {
                return !prev;
              });
            },
          },
          {
            children: source.format(
              (
                (_a =
                  components === null || components === void 0
                    ? void 0
                    : components.header) === null || _a === void 0
                  ? void 0
                  : _a.format
              )
                ? (_b =
                    components === null || components === void 0
                      ? void 0
                      : components.header) === null || _b === void 0
                  ? void 0
                  : _b.format
                : displayMonths
                ? "YYYY"
                : "YYYY-MMMM",
            ),
          },
        ),
        Math.random(),
      );
    }
    for (var i = 0; i < numberOfMonths; i++) {
      if (source.get("day") === 0) {
        source = source.add(1, "day");
      }
      titles.push(
        jsx(
          "p",
          __assign(
            {
              onClick: function () {
                return setDisplayMonths(function (prev) {
                  return !prev;
                });
              },
            },
            {
              children: source
                .add(i, "month")
                .format(
                  (
                    (_c =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _c === void 0
                      ? void 0
                      : _c.format
                  )
                    ? (_d =
                        components === null || components === void 0
                          ? void 0
                          : components.header) === null || _d === void 0
                      ? void 0
                      : _d.format
                    : "YYYY-MMMM",
                ),
            },
          ),
          Math.random(),
        ),
      );
    }
    return titles;
  };
  return jsxs(
    Wrapper$4,
    __assign(
      {
        numberOfMonths: numberOfMonths,
        jalali: jalali,
        displayMonths: displayMonths,
      },
      {
        children: [
          jsxs(
            "div",
            __assign(
              {
                className: (
                  (_c =
                    (_b =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _b === void 0
                      ? void 0
                      : _b.monthIcons) === null || _c === void 0
                    ? void 0
                    : _c.left
                )
                  ? ""
                  : "action left",
                onClick: prev,
              },
              {
                children: [
                  ((_e =
                    (_d =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _d === void 0
                      ? void 0
                      : _d.monthIcons) === null || _e === void 0
                    ? void 0
                    : _e.left) &&
                    !displayMonths &&
                    components.header.monthIcons.left,
                  ((_g =
                    (_f =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _f === void 0
                      ? void 0
                      : _f.yearIcons) === null || _g === void 0
                    ? void 0
                    : _g.left) &&
                    displayMonths &&
                    components.header.yearIcons.left,
                  !((_j =
                    (_h =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _h === void 0
                      ? void 0
                      : _h.monthIcons) === null || _j === void 0
                    ? void 0
                    : _j.left) &&
                    jsxs(
                      Fragment,
                      {
                        children: [
                          jsx(SvgChevronLeft, {}, void 0),
                          displayMonths
                            ? jsx(SvgChevronLeft, {}, void 0)
                            : null,
                        ],
                      },
                      void 0,
                    ),
                ],
              },
            ),
            void 0,
          ),
          renderTitles(),
          jsxs(
            "div",
            __assign(
              {
                className: (
                  (_l =
                    (_k =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _k === void 0
                      ? void 0
                      : _k.monthIcons) === null || _l === void 0
                    ? void 0
                    : _l.right
                )
                  ? ""
                  : "action right",
                onClick: next,
              },
              {
                children: [
                  ((_o =
                    (_m =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _m === void 0
                      ? void 0
                      : _m.monthIcons) === null || _o === void 0
                    ? void 0
                    : _o.right) &&
                    !displayMonths &&
                    components.header.monthIcons.right,
                  ((_q =
                    (_p =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _p === void 0
                      ? void 0
                      : _p.yearIcons) === null || _q === void 0
                    ? void 0
                    : _q.right) &&
                    displayMonths &&
                    components.header.yearIcons.right,
                  !((_s =
                    (_r =
                      components === null || components === void 0
                        ? void 0
                        : components.header) === null || _r === void 0
                      ? void 0
                      : _r.monthIcons) === null || _s === void 0
                    ? void 0
                    : _s.right) &&
                    jsxs(
                      Fragment,
                      {
                        children: [
                          jsx(SvgChevronRight, {}, void 0),
                          displayMonths
                            ? jsx(SvgChevronRight, {}, void 0)
                            : null,
                        ],
                      },
                      void 0,
                    ),
                ],
              },
            ),
            void 0,
          ),
        ],
      },
    ),
    void 0,
  );
};
var Wrapper$4 = styled.div(
  templateObject_1$4 ||
    (templateObject_1$4 = __makeTemplateObject(
      [
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 55px;\n  position: relative;\n  background-color: ",
        ";\n  flex-direction: ",
        ";\n  p {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    direction: ",
        ";\n    width: ",
        ";\n  }\n  .action {\n    position: absolute;\n    height: 55px;\n    width: 55px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    &.right {\n      transform: ",
        ";\n      ",
        "\n    }\n    &.left {\n      transform: ",
        ";\n      ",
        "\n    }\n  }\n  svg {\n    width: 10px;\n    height: 15px;\n    color: ",
        ";\n  }\n",
      ],
      [
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 55px;\n  position: relative;\n  background-color: ",
        ";\n  flex-direction: ",
        ";\n  p {\n    color: #fff;\n    text-align: center;\n    cursor: pointer;\n    direction: ",
        ";\n    width: ",
        ";\n  }\n  .action {\n    position: absolute;\n    height: 55px;\n    width: 55px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    &.right {\n      transform: ",
        ";\n      ",
        "\n    }\n    &.left {\n      transform: ",
        ";\n      ",
        "\n    }\n  }\n  svg {\n    width: 10px;\n    height: 15px;\n    color: ",
        ";\n  }\n",
      ],
    )),
  function (_a) {
    var theme = _a.theme;
    return theme.primary.main;
  },
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "row-reverse" : "row";
  },
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "ltr" : "rtl";
  },
  function (_a) {
    var numberOfMonths = _a.numberOfMonths,
      displayMonths = _a.displayMonths;
    return displayMonths ? "100%" : 100 / numberOfMonths + "% ";
  },
  function (_a) {
    var jalali = _a.jalali;
    return !jalali ? "rotate(0deg)" : "rotate(180deg)";
  },
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "left:0;" : "right: 0;";
  },
  function (_a) {
    var jalali = _a.jalali;
    return !jalali ? "rotate(0deg)" : "rotate(180deg)";
  },
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "right:0;" : "left: 0;";
  },
  function (_a) {
    var theme = _a.theme;
    return theme.background.default;
  },
);
var templateObject_1$4;

var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
  return fn(module, module.exports), module.exports;
}

var dayjs_min = createCommonjsModule(function (module, exports) {
  !(function (t, e) {
    module.exports = e();
  })(commonjsGlobal, function () {
    var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      $ = "Invalid Date",
      l =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_",
          ),
      },
      m = function (t, e, n) {
        var r = String(t);
        return !r || r.length >= e
          ? t
          : "" + Array(e + 1 - r.length).join(n) + t;
      },
      g = {
        s: m,
        z: function (t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
          return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e);
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, f),
            s = n - i < 0,
            u = e.clone().add(r + (s ? -1 : 1), f);
          return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function (t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function (t) {
          return (
            { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[
              t
            ] ||
            String(t || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (t) {
          return void 0 === t;
        },
      },
      D = "en",
      v = {};
    v[D] = M;
    var p = function (t) {
        return t instanceof _;
      },
      S = function (t, e, n) {
        var r;
        if (!t) return D;
        if ("string" == typeof t) v[t] && (r = t), e && ((v[t] = e), (r = t));
        else {
          var i = t.name;
          (v[i] = t), (r = i);
        }
        return !n && r && (D = r), r || (!n && D);
      },
      w = function (t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return (n.date = t), (n.args = arguments), new _(n);
      },
      O = g;
    (O.l = S),
      (O.i = p),
      (O.w = function (t, e) {
        return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
      });
    var _ = (function () {
        function M(t) {
          (this.$L = S(t.locale, null, !0)), this.parse(t);
        }
        var m = M.prototype;
        return (
          (m.parse = function (t) {
            (this.$d = (function (t) {
              var e = t.date,
                n = t.utc;
              if (null === e) return new Date(NaN);
              if (O.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);
              if ("string" == typeof e && !/Z$/i.test(e)) {
                var r = e.match(l);
                if (r) {
                  var i = r[2] - 1 || 0,
                    s = (r[7] || "0").substring(0, 3);
                  return n
                    ? new Date(
                        Date.UTC(
                          r[1],
                          i,
                          r[3] || 1,
                          r[4] || 0,
                          r[5] || 0,
                          r[6] || 0,
                          s,
                        ),
                      )
                    : new Date(
                        r[1],
                        i,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        s,
                      );
                }
              }
              return new Date(e);
            })(t)),
              (this.$x = t.x || {}),
              this.init();
          }),
          (m.init = function () {
            var t = this.$d;
            (this.$y = t.getFullYear()),
              (this.$M = t.getMonth()),
              (this.$D = t.getDate()),
              (this.$W = t.getDay()),
              (this.$H = t.getHours()),
              (this.$m = t.getMinutes()),
              (this.$s = t.getSeconds()),
              (this.$ms = t.getMilliseconds());
          }),
          (m.$utils = function () {
            return O;
          }),
          (m.isValid = function () {
            return !(this.$d.toString() === $);
          }),
          (m.isSame = function (t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
          }),
          (m.isAfter = function (t, e) {
            return w(t) < this.startOf(e);
          }),
          (m.isBefore = function (t, e) {
            return this.endOf(e) < w(t);
          }),
          (m.$g = function (t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
          }),
          (m.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (m.valueOf = function () {
            return this.$d.getTime();
          }),
          (m.startOf = function (t, e) {
            var n = this,
              r = !!O.u(e) || e,
              h = O.p(t),
              $ = function (t, e) {
                var i = O.w(
                  n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                  n,
                );
                return r ? i : i.endOf(a);
              },
              l = function (t, e) {
                return O.w(
                  n
                    .toDate()
                    [t].apply(
                      n.toDate("s"),
                      (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e),
                    ),
                  n,
                );
              },
              y = this.$W,
              M = this.$M,
              m = this.$D,
              g = "set" + (this.$u ? "UTC" : "");
            switch (h) {
              case c:
                return r ? $(1, 0) : $(31, 11);
              case f:
                return r ? $(1, M) : $(0, M + 1);
              case o:
                var D = this.$locale().weekStart || 0,
                  v = (y < D ? y + 7 : y) - D;
                return $(r ? m - v : m + (6 - v), M);
              case a:
              case d:
                return l(g + "Hours", 0);
              case u:
                return l(g + "Minutes", 1);
              case s:
                return l(g + "Seconds", 2);
              case i:
                return l(g + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (m.endOf = function (t) {
            return this.startOf(t, !1);
          }),
          (m.$set = function (t, e) {
            var n,
              o = O.p(t),
              h = "set" + (this.$u ? "UTC" : ""),
              $ = ((n = {}),
              (n[a] = h + "Date"),
              (n[d] = h + "Date"),
              (n[f] = h + "Month"),
              (n[c] = h + "FullYear"),
              (n[u] = h + "Hours"),
              (n[s] = h + "Minutes"),
              (n[i] = h + "Seconds"),
              (n[r] = h + "Milliseconds"),
              n)[o],
              l = o === a ? this.$D + (e - this.$W) : e;
            if (o === f || o === c) {
              var y = this.clone().set(d, 1);
              y.$d[$](l),
                y.init(),
                (this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d);
            } else $ && this.$d[$](l);
            return this.init(), this;
          }),
          (m.set = function (t, e) {
            return this.clone().$set(t, e);
          }),
          (m.get = function (t) {
            return this[O.p(t)]();
          }),
          (m.add = function (r, h) {
            var d,
              $ = this;
            r = Number(r);
            var l = O.p(h),
              y = function (t) {
                var e = w($);
                return O.w(e.date(e.date() + Math.round(t * r)), $);
              };
            if (l === f) return this.set(f, this.$M + r);
            if (l === c) return this.set(c, this.$y + r);
            if (l === a) return y(1);
            if (l === o) return y(7);
            var M = ((d = {}), (d[s] = e), (d[u] = n), (d[i] = t), d)[l] || 1,
              m = this.$d.getTime() + r * M;
            return O.w(m, this);
          }),
          (m.subtract = function (t, e) {
            return this.add(-1 * t, e);
          }),
          (m.format = function (t) {
            var e = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || $;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ",
              i = O.z(this),
              s = this.$H,
              u = this.$m,
              a = this.$M,
              o = n.weekdays,
              f = n.months,
              h = function (t, n, i, s) {
                return (t && (t[n] || t(e, r))) || i[n].substr(0, s);
              },
              c = function (t) {
                return O.s(s % 12 || 12, t, "0");
              },
              d =
                n.meridiem ||
                function (t, e, n) {
                  var r = t < 12 ? "AM" : "PM";
                  return n ? r.toLowerCase() : r;
                },
              l = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: a + 1,
                MM: O.s(a + 1, 2, "0"),
                MMM: h(n.monthsShort, a, f, 3),
                MMMM: h(f, a),
                D: this.$D,
                DD: O.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h(n.weekdaysMin, this.$W, o, 2),
                ddd: h(n.weekdaysShort, this.$W, o, 3),
                dddd: o[this.$W],
                H: String(s),
                HH: O.s(s, 2, "0"),
                h: c(1),
                hh: c(2),
                a: d(s, u, !0),
                A: d(s, u, !1),
                m: String(u),
                mm: O.s(u, 2, "0"),
                s: String(this.$s),
                ss: O.s(this.$s, 2, "0"),
                SSS: O.s(this.$ms, 3, "0"),
                Z: i,
              };
            return r.replace(y, function (t, e) {
              return e || l[t] || i.replace(":", "");
            });
          }),
          (m.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (m.diff = function (r, d, $) {
            var l,
              y = O.p(d),
              M = w(r),
              m = (M.utcOffset() - this.utcOffset()) * e,
              g = this - M,
              D = O.m(this, M);
            return (
              (D =
                ((l = {}),
                (l[c] = D / 12),
                (l[f] = D),
                (l[h] = D / 3),
                (l[o] = (g - m) / 6048e5),
                (l[a] = (g - m) / 864e5),
                (l[u] = g / n),
                (l[s] = g / e),
                (l[i] = g / t),
                l)[y] || g),
              $ ? D : O.a(D)
            );
          }),
          (m.daysInMonth = function () {
            return this.endOf(f).$D;
          }),
          (m.$locale = function () {
            return v[this.$L];
          }),
          (m.locale = function (t, e) {
            if (!t) return this.$L;
            var n = this.clone(),
              r = S(t, e, !0);
            return r && (n.$L = r), n;
          }),
          (m.clone = function () {
            return O.w(this.$d, this);
          }),
          (m.toDate = function () {
            return new Date(this.valueOf());
          }),
          (m.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (m.toISOString = function () {
            return this.$d.toISOString();
          }),
          (m.toString = function () {
            return this.$d.toUTCString();
          }),
          M
        );
      })(),
      b = _.prototype;
    return (
      (w.prototype = b),
      [
        ["$ms", r],
        ["$s", i],
        ["$m", s],
        ["$H", u],
        ["$W", a],
        ["$M", f],
        ["$y", c],
        ["$D", d],
      ].forEach(function (t) {
        b[t[1]] = function (e) {
          return this.$g(e, t[0], t[1]);
        };
      }),
      (w.extend = function (t, e) {
        return t.$i || (t(e, _, w), (t.$i = !0)), w;
      }),
      (w.locale = S),
      (w.isDayjs = p),
      (w.unix = function (t) {
        return w(1e3 * t);
      }),
      (w.en = v[D]),
      (w.Ls = v),
      (w.p = {}),
      w
    );
  });
});

var isBetween = createCommonjsModule(function (module, exports) {
  !(function (e, i) {
    module.exports = i();
  })(commonjsGlobal, function () {
    return function (e, i, t) {
      i.prototype.isBetween = function (e, i, s, f) {
        var n = t(e),
          o = t(i),
          r = "(" === (f = f || "()")[0],
          u = ")" === f[1];
        return (
          ((r ? this.isAfter(n, s) : !this.isBefore(n, s)) &&
            (u ? this.isBefore(o, s) : !this.isAfter(o, s))) ||
          ((r ? this.isBefore(n, s) : !this.isAfter(n, s)) &&
            (u ? this.isAfter(o, s) : !this.isBefore(o, s)))
        );
      };
    };
  });
});

var isSameOrBefore = createCommonjsModule(function (module, exports) {
  !(function (e, i) {
    module.exports = i();
  })(commonjsGlobal, function () {
    return function (e, i) {
      i.prototype.isSameOrBefore = function (e, i) {
        return this.isSame(e, i) || this.isBefore(e, i);
      };
    };
  });
});

var fa$1 = createCommonjsModule(function (module, exports) {
  !(function (_, e) {
    module.exports = e(dayjs_min);
  })(commonjsGlobal, function (_) {
    function e(_) {
      return _ && "object" == typeof _ && "default" in _ ? _ : { default: _ };
    }
    var t = e(_),
      d = {
        name: "fa",
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
          "_",
        ),
        weekdaysShort:
          "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekStart: 6,
        months:
          "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_",
          ),
        monthsShort:
          "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_",
          ),
        ordinal: function (_) {
          return _;
        },
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال",
        },
      };
    return t.default.locale(d, null, !0), d;
  });
});

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/* eslint-disable */

/*
 JavaScript functions for the Fourmilab Calendar Converter
 by John Walker  --  September, MIM
 http://www.fourmilab.ch/documents/calendar/
 This program is in the public domain.
 */

/*  MOD  --  Modulus function which works for non-integers.  */
var $floor = Math.floor;

function mod(a, b) {
  return a - b * $floor(a / b);
} //  LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?

function lg(year) {
  return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
} //  GREGORIAN_TO_JD  --  Determine Julian day number from Gregorian calendar date
// GREGORIAN_EPOCH

var GE = 1721425.5;

function g2j(year, month, day) {
  return (
    GE -
    1 +
    365 * (year - 1) +
    $floor((year - 1) / 4) +
    -$floor((year - 1) / 100) +
    $floor((year - 1) / 400) +
    $floor(
      (367 * month - 362) / 12 + (month <= 2 ? 0 : lg(year) ? -1 : -2) + day,
    )
  );
} //  JD_TO_GREGORIAN  --  Calculate Gregorian calendar date from Julian day

function j2g(jd) {
  var wjd,
    depoch,
    quadricent,
    dqc,
    cent,
    dcent,
    quad,
    dquad,
    yindex,
    year,
    yearday,
    leapadj;
  wjd = $floor(jd - 0.5) + 0.5;
  depoch = wjd - GE;
  quadricent = $floor(depoch / 146097);
  dqc = mod(depoch, 146097);
  cent = $floor(dqc / 36524);
  dcent = mod(dqc, 36524);
  quad = $floor(dcent / 1461);
  dquad = mod(dcent, 1461);
  yindex = $floor(dquad / 365);
  year = quadricent * 400 + cent * 100 + quad * 4 + yindex;

  if (!(cent == 4 || yindex == 4)) {
    year++;
  }

  yearday = wjd - g2j(year, 1, 1);
  leapadj = wjd < g2j(year, 3, 1) ? 0 : lg(year) ? 1 : 2;
  var month = $floor(((yearday + leapadj) * 12 + 373) / 367),
    day = wjd - g2j(year, month, 1) + 1;
  return [year, month, day];
} // PERSIAN_EPOCH

var PE = 1948320.5; //  PERSIAN_TO_JD  --  Determine Julian day from Persian date

function p2j(year, month, day) {
  var epbase, epyear;
  epbase = year - (year >= 0 ? 474 : 473);
  epyear = 474 + mod(epbase, 2820);
  return (
    day +
    (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
    $floor((epyear * 682 - 110) / 2816) +
    (epyear - 1) * 365 +
    $floor(epbase / 2820) * 1029983 +
    (PE - 1)
  );
} //  JD_TO_PERSIAN  --  Calculate Persian date from Julian day

function j2p(jd) {
  var year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
  jd = $floor(jd) + 0.5;
  depoch = jd - p2j(475, 1, 1);
  cycle = $floor(depoch / 1029983);
  cyear = mod(depoch, 1029983);

  if (cyear == 1029982) {
    ycycle = 2820;
  } else {
    aux1 = $floor(cyear / 366);
    aux2 = mod(cyear, 366);
    ycycle = $floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
  }

  year = ycycle + 2820 * cycle + 474;

  if (year <= 0) {
    year--;
  }

  yday = jd - p2j(year, 1, 1) + 1;
  month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
  day = jd - p2j(year, month, 1) + 1;
  return [year, month, day];
}

var jdate = {
  J: function J(y, m, d) {
    return j2p(g2j(y, m, d));
  },
  G: function G(y, m, d) {
    return j2g(p2j(y, m, d));
  },
};

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})[-/]?(\d{0,2})(.*)?$/;
var REGEX_FORMAT =
  /\[.*?\]|jY{2,4}|jM{1,4}|jD{1,2}|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
var DATE = "date";
var D = "day";
var M = "month";
var Y = "year";
var W = "week";
var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
var fa = {
  jmonths:
    "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split(
      "_",
    ),
};

var plugin = function (o, Dayjs, dayjs) {
  var proto = Dayjs.prototype;
  var U = proto.$utils();

  var $isJalali = function $isJalali(v) {
    return v.$C === "jalali";
  };

  var $prettyUnit = U.prettyUnit || U.p;
  var $isUndefined = U.isUndefined || U.u;
  var $padStart = U.padStart || U.s;
  var $monthDiff = U.monthDiff || U.m;
  var $absFloor = U.absFloor || U.a;

  var wrapperOfTruth = function wrapperOfTruth(action) {
    return function () {
      var unsure = action.bind(this).apply(void 0, arguments);
      unsure.$C = this.$C;

      if (unsure.isJalali()) {
        unsure.InitJalali();
      }

      return unsure;
    };
  }; // keep calendar on date manipulation

  proto.startOf = wrapperOfTruth(proto.startOf);
  proto.endOf = wrapperOfTruth(proto.endOf);
  proto.add = wrapperOfTruth(proto.add);
  proto.subtract = wrapperOfTruth(proto.subtract);
  proto.set = wrapperOfTruth(proto.set);
  var oldParse = proto.parse;
  var oldInit = proto.init;
  var oldStartOf = proto.startOf;
  var old$Set = proto.$set;
  var oldAdd = proto.add;
  var oldFormat = proto.format;
  var oldDiff = proto.diff;
  var oldYear = proto.year;
  var oldMonth = proto.month;
  var oldDate = proto.date;
  var oldDaysInMonth = proto.daysInMonth;
  var oldToArray = proto.toArray;
  dayjs.$C = "gregory"; // First Day Of Week

  dayjs.$fdow = 6; // 0: sunday, ...

  dayjs.calendar = function (calendar) {
    dayjs.$C = calendar;
    return dayjs;
  };

  proto.calendar = function (calendar) {
    var that = this.clone();
    that.$C = calendar;

    if (that.isJalali()) {
      that.InitJalali();
    }

    return that;
  };

  proto.isJalali = function () {
    return $isJalali(this);
  };

  dayjs.en.jmonths =
    "Farvardin_Ordibehesht_Khordaad_Tir_Mordaad_Shahrivar_Mehr_Aabaan_Aazar_Dey_Bahman_Esfand".split(
      "_",
    );
  dayjs.locale("fa", Object.assign({}, fa$1, {}, fa), true);

  var wrapper = function wrapper(date, instance) {
    return dayjs(date, {
      locale: instance.$L,
      utc: instance.$u,
      calendar: instance.$C,
    });
  };

  proto.init = function () {
    var cfg =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    oldInit.bind(this)(cfg);

    if (this.isJalali()) {
      this.InitJalali();
    }
  };

  proto.parse = function (cfg) {
    var reg;
    this.$C = cfg.calendar || this.$C || dayjs.$C; // eslint-disable-next-line no-cond-assign

    if (
      cfg.jalali &&
      typeof cfg.date === "string" &&
      /.*[^Z]$/i.test(cfg.date) && // looking for a better way
      (reg = cfg.date.match(REGEX_PARSE))
    ) {
      // 1397-08-08 or 13970808
      var _jdate$G = jdate.G(
          parseInt(reg[1], 10),
          parseInt(reg[2], 10),
          parseInt(reg[3] || 1, 10),
        ),
        _jdate$G2 = _slicedToArray(_jdate$G, 3),
        y = _jdate$G2[0],
        m = _jdate$G2[1],
        d = _jdate$G2[2];

      cfg.date = ""
        .concat(y, "-")
        .concat(m, "-")
        .concat(d)
        .concat(reg[4] || "");
    }

    return oldParse.bind(this)(cfg);
  };

  proto.InitJalali = function () {
    var _jdate$J = jdate.J(this.$y, this.$M + 1, this.$D),
      _jdate$J2 = _slicedToArray(_jdate$J, 3),
      jy = _jdate$J2[0],
      jm = _jdate$J2[1],
      jd = _jdate$J2[2];

    this.$jy = jy;
    this.$jM = jm - 1;
    this.$jD = jd;
  };

  proto.startOf = function (units, startOf) {
    var _this = this;

    // startOf -> endOf
    if (!$isJalali(this)) {
      return oldStartOf.bind(this)(units, startOf);
    }

    var isStartOf = !$isUndefined(startOf) ? startOf : true;
    var unit = $prettyUnit(units);

    var instanceFactory = function instanceFactory(d, m) {
      var y =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : _this.$jy;

      var _jdate$G3 = jdate.G(y, m + 1, d),
        _jdate$G4 = _slicedToArray(_jdate$G3, 3),
        gy = _jdate$G4[0],
        gm = _jdate$G4[1],
        gd = _jdate$G4[2];

      var ins = wrapper(new Date(gy, gm - 1, gd), _this);
      return (isStartOf ? ins : ins.endOf(D)).$set("hour", 1); // prevent daylight saving issue in safari
    };

    var WModifier = (this.$W + (7 - dayjs.$fdow)) % 7;

    switch (unit) {
      case Y:
        return isStartOf
          ? instanceFactory(1, 0)
          : instanceFactory(0, 0, this.$jy + 1);

      case M:
        return isStartOf
          ? instanceFactory(1, this.$jM)
          : instanceFactory(
              0,
              (this.$jM + 1) % 12,
              this.$jy + parseInt((this.$jM + 1) / 12, 10),
            );

      case W:
        return isStartOf
          ? instanceFactory(this.$jD - WModifier, this.$jM)
          : instanceFactory(this.$jD + (6 - WModifier), this.$jM);

      default:
        return oldStartOf.bind(this)(units, startOf);
    }
  };

  proto.$set = function (units, _int) {
    var _this2 = this;

    if (!$isJalali(this)) {
      return old$Set.bind(this)(units, _int);
    }

    var unit = $prettyUnit(units);

    var instanceFactory = function instanceFactory(d, m) {
      var y =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : _this2.$jy;

      var _jdate$G5 = jdate.G(y, m + 1, d),
        _jdate$G6 = _slicedToArray(_jdate$G5, 3),
        gy = _jdate$G6[0],
        gm = _jdate$G6[1],
        gd = _jdate$G6[2];

      _this2.$d.setFullYear(gy);

      _this2.$d.setMonth(gm - 1);

      _this2.$d.setDate(gd);

      return _this2;
    };

    switch (unit) {
      case DATE:
      case D:
        instanceFactory(_int, this.$jM);
        break;

      case M:
        instanceFactory(this.$jD, _int);
        break;

      case Y:
        instanceFactory(this.$jD, this.$jM, _int);
        break;

      default:
        return old$Set.bind(this)(units, _int);
    }

    this.init();
    return this;
  };

  proto.add = function (number, units) {
    var _this3 = this;

    if (!$isJalali(this)) {
      return oldAdd.bind(this)(number, units);
    }

    number = Number(number); // eslint-disable-line no-param-reassign
    // units === 'ms' hard code here, will update in next release

    var unit =
      units && (units.length === 1 || units === "ms")
        ? units
        : $prettyUnit(units);

    var instanceFactory = function instanceFactory(u, n) {
      var date = _this3.set(DATE, 1).set(u, n + number);

      return date.set(DATE, Math.min(_this3.$jD, date.daysInMonth()));
    };

    if (["M", M].indexOf(unit) > -1) {
      var n = this.$jM + number;
      var y = n < 0 ? -Math.ceil(-n / 12) : parseInt(n / 12, 10);
      var d = this.$jD;
      var x = this.set(D, 1)
        .add(y, Y)
        .set(M, n - y * 12);
      return x.set(D, Math.min(x.daysInMonth(), d));
    }

    if (["y", Y].indexOf(unit) > -1) {
      return instanceFactory(Y, this.$jy);
    }

    if (["d", D].indexOf(unit) > -1) {
      var date = new Date(this.$d);
      date.setDate(date.getDate() + number);
      return wrapper(date, this);
    }

    return oldAdd.bind(this)(number, units);
  };

  proto.format = function (formatStr, localeObject) {
    var _this4 = this;

    if (!$isJalali(this)) {
      return oldFormat.bind(this)(formatStr, localeObject);
    }

    var str = formatStr || FORMAT_DEFAULT;
    var locale = localeObject || this.$locale();
    var jmonths = locale.jmonths;
    return str.replace(REGEX_FORMAT, function (match) {
      if (match.indexOf("[") > -1) return match.replace(/\[|\]/g, "");

      switch (match) {
        case "YY":
          return String(_this4.$jy).slice(-2);

        case "YYYY":
          return String(_this4.$jy);

        case "M":
          return String(_this4.$jM + 1);

        case "MM":
          return $padStart(_this4.$jM + 1, 2, "0");

        case "MMM":
          return jmonths[_this4.$jM].slice(0, 3);

        case "MMMM":
          return jmonths[_this4.$jM];

        case "D":
          return String(_this4.$jD);

        case "DD":
          return $padStart(_this4.$jD, 2, "0");

        default:
          return oldFormat.bind(_this4)(match, localeObject);
      }
    });
  };

  proto.diff = function (input, units, _float) {
    if (!$isJalali(this)) {
      return oldDiff.bind(this)(input, units, _float);
    }

    var unit = $prettyUnit(units);
    var that = dayjs(input);
    var result = $monthDiff(this, that);

    switch (unit) {
      case Y:
        result /= 12;
        break;

      case M:
        break;

      default:
        // milliseconds
        return oldDiff.bind(this)(input, units, _float);
    }

    return _float ? result : $absFloor(result);
  };

  proto.$g = function (input, get, set) {
    if ($isUndefined(input)) return this[get];
    return this.set(set, input);
  };

  proto.year = function (input) {
    if (!$isJalali(this)) {
      return oldYear.bind(this)(input);
    }

    return this.$g(input, "$jy", Y);
  };

  proto.month = function (input) {
    if (!$isJalali(this)) {
      return oldMonth.bind(this)(input);
    }

    return this.$g(input, "$jM", M);
  };

  proto.date = function (input) {
    if (!$isJalali(this)) {
      return oldDate.bind(this)(input);
    }

    return this.$g(input, "$jD", D);
  };

  proto.daysInMonth = function () {
    if (!$isJalali(this)) {
      return oldDaysInMonth.bind(this)();
    }

    return this.endOf(M).$jD;
  };
  /**
   * toArray function moved to official plugin
   * Check function existence before override
   */

  if (oldToArray) {
    proto.toArray = function () {
      if (!$isJalali(this)) {
        return oldToArray.bind(this)();
      }

      return [
        this.$jy,
        this.$jM,
        this.$jD,
        this.$H,
        this.$m,
        this.$s,
        this.$ms,
      ];
    };
  }

  proto.clone = function () {
    return wrapper(this.toDate(), this);
  };
};

dayjs_min.extend(plugin);
dayjs_min.extend(isBetween);
dayjs_min.extend(isSameOrBefore);
var dayjs = dayjs_min;

var dayjsLocalized = function (jalali, date) {
  if (jalali === void 0) {
    jalali = false;
  }
  var source = dayjs(date)
    .calendar(jalali ? "jalali" : "gregory")
    .locale(jalali ? "fa" : "en");
  return source;
};

/**
 * Author: https://gist.github.com/mir4ef/c172583bdb968951d9e57fb50d44c3f7
 */
/**
 * @description Method to check if an item is an object. Date and Function are considered
 * an object, so if you need to exclude those, please update the method accordingly.
 * @param item - The item that needs to be checked
 * @return {Boolean} Whether or not @item is an object
 */
var isObject = function (item) {
  return item === Object(item) && !Array.isArray(item);
};
/**
 * @description Method to perform a deep merge of objects
 * @param {Object} target - The targeted object that needs to be merged with the supplied @sources
 * @param {Array<Object>} sources - The source(s) that will be used to update the @target object
 * @return {Object} The final merged object
 */
var deepMerge = function (target) {
  var sources = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }
  // return the target if no sources passed
  if (!sources.length) {
    return target;
  }
  var result = target;
  if (isObject(result)) {
    var len = sources.length;
    for (var i = 0; i < len; i += 1) {
      var elm = sources[i];
      if (isObject(elm)) {
        for (var key in elm) {
          if (elm.hasOwnProperty(key)) {
            if (isObject(elm[key])) {
              if (!result[key] || !isObject(result[key])) {
                result[key] = {};
              }
              deepMerge(result[key], elm[key]);
            } else {
              if (Array.isArray(result[key]) && Array.isArray(elm[key])) {
                // concatenate the two arrays and remove any duplicate primitive values
                result[key] = Array.from(new Set(result[key].concat(elm[key])));
              } else {
                result[key] = elm[key];
              }
            }
          }
        }
      }
    }
  }
  return result;
};

var getDayFormat = function (day, jalali) {
  return dayjs(day, { jalali: jalali, format: "YYYY-MM-DD" })
    .calendar("gregory")
    .format("YYYY-MM-DD");
};

var theme = {
  primary: {
    light: "#d0f4f0",
    main: "#13c8b5",
    dark: "#12baa9",
  },
  grey: {
    700: "#707070",
    900: "#1b1b1d",
  },
  background: {
    default: "#f5f5f5",
  },
  text: {
    disabled: "#BABABA",
  },
};

var FORMAT_DATE = "YYYY-MM-DD";

var Wrapper$3 = styled.div(
  templateObject_1$3 ||
    (templateObject_1$3 = __makeTemplateObject(
      [
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  flex-direction: ",
        ";\n",
      ],
      [
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  flex-direction: ",
        ";\n",
      ],
    )),
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "row-reverse" : "row";
  },
);
var Month = styled.div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        "\n  height: 350px;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: column;\n  width: ",
        ";\n",
      ],
      [
        "\n  height: 350px;\n  display: flex;\n  position: relative;\n  align-items: center;\n  flex-direction: column;\n  width: ",
        ";\n",
      ],
    )),
  function (_a) {
    var numberOfMonths = _a.numberOfMonths;
    return 100 / numberOfMonths + "%";
  },
);
var Weeks = styled.div(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex-direction: ",
        ";\n",
      ],
      [
        "\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex-direction: ",
        ";\n",
      ],
    )),
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "row-reverse" : "row";
  },
);
var templateObject_1$3, templateObject_2, templateObject_3;

var TitleOfWeek = function (_a) {
  var jalali = _a.jalali,
    startOfWeek = _a.startOfWeek,
    components = _a.components;
  var titles = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  if (components === null || components === void 0 ? void 0 : components.titles)
    titles = __spreadArray(
      [],
      components === null || components === void 0 ? void 0 : components.titles,
    );
  else if (jalali) titles = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
  if (!jalali) {
    var sow = startOfWeek % 7;
    if (sow > 0) while (sow--) titles.push(titles.shift());
  }
  if (
    components === null || components === void 0 ? void 0 : components.wrapper
  ) {
    var WrapperC =
      components === null || components === void 0
        ? void 0
        : components.wrapper;
    return jsx(WrapperC, { jalali: jalali, startOfWeek: startOfWeek }, void 0);
  }
  return jsx(
    Wrapper$2,
    __assign(
      { jalali: jalali, startOfWeek: startOfWeek },
      {
        children: titles.map(function (item) {
          return jsx("p", { children: item }, item);
        }),
      },
    ),
    void 0,
  );
};
var Wrapper$2 = styled.div(
  templateObject_1$2 ||
    (templateObject_1$2 = __makeTemplateObject(
      [
        "\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex-direction: ",
        ";\n  border-bottom: 1px solid #e2e2e2;\n  margin: 30px 0 15px 0;\n  p {\n    width: 38px;\n    margin-bottom: 15px;\n    margin-left: 5px;\n  }\n",
      ],
      [
        "\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  flex-direction: ",
        ";\n  border-bottom: 1px solid #e2e2e2;\n  margin: 30px 0 15px 0;\n  p {\n    width: 38px;\n    margin-bottom: 15px;\n    margin-left: 5px;\n  }\n",
      ],
    )),
  function (_a) {
    var jalali = _a.jalali;
    return jalali ? "row-reverse" : "row";
  },
);
var templateObject_1$2;

var createCalendar = function (_a) {
  var source = _a.source,
    startOfWeek = _a.startOfWeek;
  var days = [];
  var daysInMonth = source.daysInMonth();
  var firstDay = source.startOf("month").day();
  var sow = startOfWeek < 0 ? 0 : startOfWeek % 7;
  var shift = 0;
  if (firstDay > sow) shift = firstDay - sow;
  else if (sow > firstDay) shift = 7 - (sow - firstDay);
  var tmpDay = source.startOf("month").subtract(shift, "day");
  var totalDays = daysInMonth + shift;
  var remaining = totalDays % 7;
  if (remaining > 0) totalDays += 7 - remaining;
  for (var i = 0; i < totalDays; i++) {
    days.push(tmpDay);
    tmpDay = tmpDay.add(1, "day");
  }
  return days;
};

var sliceDaysOfMonthToWeeks = function (days, len) {
  var i = 0;
  var weeks = [];
  while (i * len < days.length) {
    weeks.push(days.slice(i * len, ++i * len));
  }
  return weeks;
};

var classNames = function () {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var classes = [];
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (!arg) continue;
    var argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (argType === "object") {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
      } else {
        for (var key in arg) {
          if (arg.hasOwnProperty(key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  }
  return classes.join(" ");
};

/* eslint-disable */
var isMobile = function () {
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      navigator.userAgent || navigator.vendor || window.opera,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      (navigator.userAgent || navigator.vendor || window.opera).substr(0, 4),
    )
  );
};

var Day$1 = function (_a) {
  var day = _a.day,
    source = _a.source,
    jalali = _a.jalali,
    selectedDays = _a.selectedDays,
    disabledDays = _a.disabledDays,
    allowDisabledDaysSpan = _a.allowDisabledDaysSpan,
    hoverDay = _a.hoverDay,
    disabled = _a.disabled,
    components = _a.components,
    onChange = _a.onChange,
    setHoverDay = _a.setHoverDay,
    setSelectedDays = _a.setSelectedDays,
    numberOfMonth = _a.numberOfMonth,
    disabledBeforeToday = _a.disabledBeforeToday,
    disabledBeforeDate = _a.disabledBeforeDate,
    disabledAfterDate = _a.disabledAfterDate;
  if (disabledBeforeToday) {
    var today = dayjs().format(FORMAT_DATE);
    disabledBeforeDate =
      disabledBeforeDate && dayjs(disabledBeforeDate).isAfter(today)
        ? disabledBeforeDate
        : today;
  }
  var dateFormat = getDayFormat(day, jalali);
  var isDisabledDate = function (dateFormat) {
    return (
      disabledDays.includes(dateFormat) ||
      (disabledBeforeDate && dayjs(dateFormat).isBefore(disabledBeforeDate)) ||
      (disabledAfterDate && dayjs(dateFormat).isAfter(disabledAfterDate))
    );
  };
  var handleChangeState = function (from, to) {
    if (disabled) return;
    if (dayjs(from).isBefore(to)) {
      setSelectedDays({
        from: from,
        to: to,
      });
      onChange({
        from: from,
        to: to,
      });
    } else {
      setSelectedDays({
        from: to,
        to: from,
      });
      onChange({
        from: to,
        to: from,
      });
    }
  };
  var onClick = function () {
    if (disabled) return;
    // Handle disable dates
    if (disabledDays) {
      if (
        (disabledBeforeDate &&
          dayjs(dateFormat).isBefore(
            dayjsLocalized(jalali, disabledBeforeDate),
            "day",
          )) ||
        (disabledAfterDate &&
          dayjs(dateFormat).isAfter(
            dayjsLocalized(jalali, disabledAfterDate),
            "day",
          )) ||
        disabledDays.includes(dateFormat)
      ) {
        return false;
      }
    }
    // First click and set the from date
    if (
      !(selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.from) &&
      !(selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.to.length)
    ) {
      setHoverDay("");
      setSelectedDays({ from: dateFormat, to: "" });
      onChange({
        from: dateFormat,
        to: "",
      });
    }
    // Second click and set the second date
    if (
      disabledDays &&
      !(selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.to) &&
      (selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.from)
    ) {
      // Get list of disabled days between the from and the day
      var disables_1 = disabledDays.filter(function (item) {
        if (dayjs(item).isBetween(selectedDays.from, dateFormat, null, "[]")) {
          return true;
        }
        return false;
      });
      // Check if we have a disabled days between them
      if (disables_1.length && !allowDisabledDaysSpan) {
        disables_1.sort(function (prev, next) {
          return dayjs(disables_1[0]).isBefore(hoverDay)
            ? dayjs(prev).isSameOrBefore(next)
              ? -1
              : 1
            : dayjs(prev).isSameOrBefore(next)
            ? 1
            : -1;
        });
        // We check here to ensure we set the day before the disabled day
        if (dayjs(disables_1[0]).isBefore(hoverDay)) {
          handleChangeState(
            selectedDays === null || selectedDays === void 0
              ? void 0
              : selectedDays.from,
            getDayFormat(dayjs(disables_1[0]).subtract(1, "day"), jalali),
          );
        } else {
          handleChangeState(
            selectedDays === null || selectedDays === void 0
              ? void 0
              : selectedDays.from,
            getDayFormat(dayjs(disables_1[0]).add(1, "day"), jalali),
          );
        }
      } else {
        handleChangeState(
          selectedDays === null || selectedDays === void 0
            ? void 0
            : selectedDays.from,
          dateFormat,
        );
      }
    } else if (
      !(selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.to.length) &&
      (selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.from)
    ) {
      handleChangeState(
        selectedDays === null || selectedDays === void 0
          ? void 0
          : selectedDays.from,
        dateFormat,
      );
    } else if (
      (selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.from) &&
      (selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.to)
    ) {
      // Third click and set the from date and set the "to" date
      setHoverDay("");
      setSelectedDays({ from: dateFormat, to: "" });
      onChange({
        from: dateFormat,
        to: "",
      });
    }
  };
  var getEndDateForClasses = function () {
    if (selectedDays) {
      if (selectedDays.to) return selectedDays.to;
      if (hoverDay) return hoverDay;
      return selectedDays.from;
    }
    return "";
  };
  // Handle style between of days
  var handleRangeStyle = function () {
    if (!selectedDays || !selectedDays.from) return false;
    // Always apply style to the start date
    if (dateFormat === selectedDays.from) return true;
    var end_date = getEndDateForClasses();
    if (isDisabledDate(end_date)) return false;
    return dayjs(dateFormat).isBetween(selectedDays.from, end_date, null, "[]");
  };
  var hoverOnDay = function () {
    if (
      !(selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.to) &&
      (selectedDays === null || selectedDays === void 0
        ? void 0
        : selectedDays.from)
    ) {
      setHoverDay(dateFormat);
    }
  };
  var DayComponent =
    components === null || components === void 0 ? void 0 : components.days;
  return jsxs(
    Wrapper$1,
    __assign(
      {
        "data-test": day.format(FORMAT_DATE),
        onClick: onClick,
        onMouseEnter: isMobile() ? undefined : hoverOnDay,
        className: classNames({
          inactive: day.month() !== source.add(numberOfMonth, "month").month(),
          disabled: isDisabledDate(dateFormat) && !handleRangeStyle(),
          "range-select": handleRangeStyle(),
          jalali: jalali,
          disable: disabled,
          same:
            selectedDays && dayjs(selectedDays.from).isSame(selectedDays.to),
          "start-date":
            selectedDays &&
            dateFormat ===
              (dayjs(selectedDays.from).isSameOrBefore(getEndDateForClasses())
                ? selectedDays.from
                : selectedDays.to),
          "end-date":
            selectedDays &&
            dateFormat ===
              (dayjs(selectedDays.from).isSameOrBefore(getEndDateForClasses())
                ? selectedDays.to
                : selectedDays.from),
          today:
            dayjs()
              .calendar(jalali ? "jalali" : "gregory")
              .format(FORMAT_DATE) === day.format(FORMAT_DATE),
        }),
      },
      {
        children: [
          DayComponent &&
            jsx(
              DayComponent,
              { day: day.format(FORMAT_DATE), jalali: jalali },
              void 0,
            ),
          !DayComponent && day.format("DD"),
        ],
      },
    ),
    void 0,
  );
};
var Wrapper$1 = styled.div(
  templateObject_1$1 ||
    (templateObject_1$1 = __makeTemplateObject(
      [
        "\n  width: 40px;\n  height: 40px;\n  transition: all 0.15s ease-in-out;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 5px;\n  cursor: pointer;\n  color: ",
        ";\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n    &.disable {\n      background-color: transparent;\n      color: ",
        ";\n      cursor: default;\n    }\n  }\n\n  &.inactive {\n    color: transparent;\n    visibility: hidden;\n  }\n\n  &.today {\n    border: 1px solid #e2e2e2;\n    border-radius: 50%;\n  }\n\n  &.disabled {\n    color: ",
        ";\n    position: relative;\n\n    &:hover {\n      background-color: transparent;\n      color: ",
        ';\n      cursor: not-allowed;\n    }\n\n    &::after {\n      position: absolute;\n      content: "";\n      width: 15px;\n      height: 2px;\n      background-color: ',
        ";\n      transform: rotate(-20deg);\n    }\n  }\n\n  &.range-select {\n    background-color: ",
        ";\n    color: #fff;\n    border: 0;\n    border-radius: 0;\n\n    &:hover {\n      background-color: ",
        ";\n      color: #fff;\n    }\n    box-shadow: 0px 10px 30px -12px ",
        ";\n\n    &.jalali {\n      box-shadow: 0px 10px 30px -12px ",
        ";\n    }\n\n    &.end-date {\n      border-top-right-radius: 25px;\n      border-bottom-right-radius: 25px;\n\n      &.jalali {\n        border-top-left-radius: 25px;\n        border-bottom-left-radius: 25px;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n      }\n    }\n\n    &.start-date {\n      border-top-left-radius: 25px;\n      border-bottom-left-radius: 25px;\n\n      &.jalali {\n        border-top-left-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-right-radius: 25px;\n        border-bottom-right-radius: 25px;\n      }\n    }\n  }\n\n  &.same {\n    border-top-left-radius: 25px !important;\n    border-bottom-left-radius: 25px !important;\n    border-top-right-radius: 25px !important;\n    border-bottom-right-radius: 25px !important;\n  }\n",
      ],
      [
        "\n  width: 40px;\n  height: 40px;\n  transition: all 0.15s ease-in-out;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 5px;\n  cursor: pointer;\n  color: ",
        ";\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n    &.disable {\n      background-color: transparent;\n      color: ",
        ";\n      cursor: default;\n    }\n  }\n\n  &.inactive {\n    color: transparent;\n    visibility: hidden;\n  }\n\n  &.today {\n    border: 1px solid #e2e2e2;\n    border-radius: 50%;\n  }\n\n  &.disabled {\n    color: ",
        ";\n    position: relative;\n\n    &:hover {\n      background-color: transparent;\n      color: ",
        ';\n      cursor: not-allowed;\n    }\n\n    &::after {\n      position: absolute;\n      content: "";\n      width: 15px;\n      height: 2px;\n      background-color: ',
        ";\n      transform: rotate(-20deg);\n    }\n  }\n\n  &.range-select {\n    background-color: ",
        ";\n    color: #fff;\n    border: 0;\n    border-radius: 0;\n\n    &:hover {\n      background-color: ",
        ";\n      color: #fff;\n    }\n    box-shadow: 0px 10px 30px -12px ",
        ";\n\n    &.jalali {\n      box-shadow: 0px 10px 30px -12px ",
        ";\n    }\n\n    &.end-date {\n      border-top-right-radius: 25px;\n      border-bottom-right-radius: 25px;\n\n      &.jalali {\n        border-top-left-radius: 25px;\n        border-bottom-left-radius: 25px;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n      }\n    }\n\n    &.start-date {\n      border-top-left-radius: 25px;\n      border-bottom-left-radius: 25px;\n\n      &.jalali {\n        border-top-left-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-right-radius: 25px;\n        border-bottom-right-radius: 25px;\n      }\n    }\n  }\n\n  &.same {\n    border-top-left-radius: 25px !important;\n    border-bottom-left-radius: 25px !important;\n    border-top-right-radius: 25px !important;\n    border-bottom-right-radius: 25px !important;\n  }\n",
      ],
    )),
  function (_a) {
    var theme = _a.theme;
    return theme.grey[900];
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.light;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.grey[700];
  },
  function (_a) {
    var theme = _a.theme;
    return theme.grey[900];
  },
  function (_a) {
    var theme = _a.theme;
    return theme.text.disabled;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.text.disabled;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.text.disabled;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.dark;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.dark;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.dark;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.dark;
  },
);
var templateObject_1$1;

var Months$1 = function (_a) {
  var allowDisabledDaysSpan = _a.allowDisabledDaysSpan,
    numberOfMonths = _a.numberOfMonths,
    startOfWeek = _a.startOfWeek,
    selectedDays = _a.selectedDays,
    disabledDays = _a.disabledDays,
    hoverDay = _a.hoverDay,
    setHoverDay = _a.setHoverDay,
    components = _a.components,
    setSelectedDays = _a.setSelectedDays,
    disabledBeforeToday = _a.disabledBeforeToday,
    disabledBeforeDate = _a.disabledBeforeDate,
    disabledAfterDate = _a.disabledAfterDate,
    jalali = _a.jalali,
    disabled = _a.disabled,
    onChange = _a.onChange,
    sourceProp = _a.source;
  var renderMonths = function () {
    var months = [];
    var _loop_1 = function (i) {
      var source = sourceProp.add(i, "month");
      var weeksDays = sliceDaysOfMonthToWeeks(
        createCalendar({
          source: source,
          startOfWeek: jalali ? 6 : startOfWeek || 0,
        }),
        7,
      );
      months.push(
        jsxs(
          Month,
          __assign(
            {
              numberOfMonths: numberOfMonths || 1,
              "data-test": dayjs()
                .set("month", 1)
                .set("day", 1)
                .diff(source, "d"),
            },
            {
              children: [
                jsx(
                  TitleOfWeek,
                  {
                    jalali: jalali,
                    startOfWeek: startOfWeek,
                    components:
                      components === null || components === void 0
                        ? void 0
                        : components.titleOfWeek,
                  },
                  void 0,
                ),
                weeksDays.map(function (week) {
                  return jsx(
                    Weeks,
                    __assign(
                      {
                        jalali: jalali,
                        "data-test": dayjs()
                          .set("month", 1)
                          .set("day", 1)
                          .diff(week[0], "d"),
                      },
                      {
                        children: week.map(function (day) {
                          return jsx(
                            Day$1,
                            {
                              day: day,
                              jalali: jalali,
                              numberOfMonth: i,
                              hoverDay: hoverDay,
                              setHoverDay: setHoverDay,
                              onChange: onChange,
                              components: components,
                              source: sourceProp,
                              disabled: disabled,
                              disabledDays: disabledDays,
                              selectedDays: selectedDays,
                              setSelectedDays: setSelectedDays,
                              disabledBeforeToday: disabledBeforeToday,
                              allowDisabledDaysSpan: allowDisabledDaysSpan,
                              disabledBeforeDate: disabledBeforeDate,
                              disabledAfterDate: disabledAfterDate,
                            },
                            day.format("YYYY-MM-DD"),
                          );
                        }),
                      },
                    ),
                    dayjs().set("month", 1).set("day", 1).diff(week[0], "d"),
                  );
                }),
              ],
            },
          ),
          dayjs().set("month", 1).set("day", 1).diff(source, "d"),
        ),
      );
    };
    for (var i = 0; i < numberOfMonths; i++) {
      _loop_1(i);
    }
    return months;
  };
  return jsx(
    Wrapper$3,
    __assign({ jalali: jalali }, { children: renderMonths() }),
    void 0,
  );
};

var RangePicker = function (_a) {
  var _b = _a.jalali,
    jalali = _b === void 0 ? false : _b,
    _c = _a.startOfWeek,
    startOfWeek = _c === void 0 ? 0 : _c,
    _d = _a.numberOfMonths,
    numberOfMonthsProps = _d === void 0 ? 1 : _d,
    _e = _a.disabledDays,
    disabledDays = _e === void 0 ? [] : _e,
    _f = _a.disabledBeforeToday,
    disabledBeforeToday = _f === void 0 ? false : _f,
    disabledBeforeDate = _a.disabledBeforeDate,
    disabledAfterDate = _a.disabledAfterDate,
    _g = _a.disabled,
    disabled = _g === void 0 ? false : _g,
    _h = _a.allowDisabledDaysSpan,
    allowDisabledDaysSpan = _h === void 0 ? false : _h,
    components = _a.components,
    themeProps = _a.theme,
    _j = _a.autoResponsive,
    autoResponsive = _j === void 0 ? true : _j,
    selectedDaysProps = _a.selectedDays,
    onChange = _a.onChange,
    initialMonthAndYear = _a.initialMonthAndYear,
    onRangeDateInScreen = _a.onRangeDateInScreen;
  var _k = useState(selectedDaysProps),
    selectedDays = _k[0],
    setSelectedDays = _k[1];
  var _l = useState(),
    hoverDay = _l[0],
    setHoverDay = _l[1];
  var _m = useState(false),
    displayMonths = _m[0],
    setDisplayMonths = _m[1];
  var _o = useState(dayjsLocalized(jalali, initialMonthAndYear)),
    source = _o[0],
    setSource = _o[1];
  var _p = useState(numberOfMonthsProps),
    numberOfMonths = _p[0],
    setNumberOfMonths = _p[1];
  useEffect(
    function () {
      if (onRangeDateInScreen) {
        var endDate = source.add(Math.max(0, numberOfMonths - 1), "month");
        endDate = endDate.date(endDate.daysInMonth());
        var startDate = source.date(1);
        onRangeDateInScreen({
          start: getDayFormat(startDate, jalali),
          end: getDayFormat(endDate),
        });
      }
    },
    [jalali, numberOfMonths, onRangeDateInScreen, source],
  );
  useEffect(
    function () {
      if (
        !initialMonthAndYear &&
        (selectedDays === null || selectedDays === void 0
          ? void 0
          : selectedDays.from)
      ) {
        setSource(
          dayjsLocalized(
            jalali,
            selectedDays === null || selectedDays === void 0
              ? void 0
              : selectedDays.from,
          ),
        );
      } else if (initialMonthAndYear) {
        setSource(dayjsLocalized(jalali, initialMonthAndYear));
      }
      // we remove selectedDays  dependency to just run if we have any changes for initialMonthAndYear
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [jalali, initialMonthAndYear],
  );
  useEffect(
    function () {
      setSelectedDays(selectedDaysProps);
    },
    [selectedDaysProps],
  );
  useEffect(
    function () {
      var handleResize = function () {
        var width = document.querySelector(".tp-calendar").clientWidth;
        if (width < 580) {
          setNumberOfMonths(1);
        } else {
          setNumberOfMonths(Math.floor(width / 320));
        }
      };
      if (autoResponsive) {
        if (typeof window !== "undefined") {
          window.addEventListener("resize", handleResize);
          handleResize();
        }
      } else {
        setNumberOfMonths(numberOfMonthsProps);
      }
      return function () {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
    },
    [numberOfMonths, autoResponsive, numberOfMonthsProps],
  );
  return jsx(
    "div",
    __assign(
      { className: "tp-calendar" },
      {
        children: jsxs(
          ThemeProvider,
          __assign(
            { theme: themeProps ? deepMerge(theme, themeProps) : theme },
            {
              children: [
                jsx(
                  Header,
                  {
                    jalali: jalali,
                    source: source,
                    setSource: setSource,
                    components: components,
                    displayMonths: displayMonths,
                    numberOfMonths: numberOfMonths,
                    setDisplayMonths: setDisplayMonths,
                  },
                  void 0,
                ),
                displayMonths
                  ? jsx(
                      DisplayMonths,
                      {
                        jalali: jalali,
                        setDisplayMonths: setDisplayMonths,
                        setSource: setSource,
                        source: source,
                      },
                      void 0,
                    )
                  : jsx(
                      Months$1,
                      {
                        source: source,
                        jalali: jalali,
                        onChange: onChange,
                        disabled: disabled,
                        setSource: setSource,
                        hoverDay: hoverDay,
                        components: components,
                        setHoverDay: setHoverDay,
                        startOfWeek: startOfWeek,
                        disabledDays: disabledDays,
                        selectedDays: selectedDays,
                        numberOfMonths: numberOfMonths,
                        setSelectedDays: setSelectedDays,
                        disabledBeforeToday: disabledBeforeToday,
                        disabledBeforeDate: disabledBeforeDate,
                        disabledAfterDate: disabledAfterDate,
                        allowDisabledDaysSpan: allowDisabledDaysSpan,
                      },
                      void 0,
                    ),
              ],
            },
          ),
          void 0,
        ),
      },
    ),
    void 0,
  );
};

var Day = function (_a) {
  var day = _a.day,
    jalali = _a.jalali,
    source = _a.source,
    disabled = _a.disabled,
    onChange = _a.onChange,
    components = _a.components,
    selectedDays = _a.selectedDays,
    disabledDays = _a.disabledDays,
    numberOfMonth = _a.numberOfMonth,
    setSelectedDays = _a.setSelectedDays,
    disabledBeforeToday = _a.disabledBeforeToday,
    numberOfSelectableDays = _a.numberOfSelectableDays,
    disabledBeforeDate = _a.disabledBeforeDate,
    disabledAfterDate = _a.disabledAfterDate;
  if (disabledBeforeToday) {
    var today = dayjs().format(FORMAT_DATE);
    disabledBeforeDate =
      disabledBeforeDate && dayjs(disabledBeforeDate).isAfter(today)
        ? disabledBeforeDate
        : today;
  }
  var handleSelectedDate = function () {
    var date = getDayFormat(day, jalali);
    return selectedDays.includes(date);
  };
  var handleDisabledDate = function () {
    var date = getDayFormat(day, jalali);
    return (
      disabledDays.includes(date) ||
      (disabledBeforeDate && dayjs(date).isBefore(disabledBeforeDate)) ||
      (disabledAfterDate && dayjs(date).isAfter(disabledAfterDate))
    );
  };
  var handleClick = function () {
    if (disabled) return;
    var date = getDayFormat(day, jalali);
    if (
      (disabledBeforeDate && dayjs(date).isBefore(disabledBeforeDate)) ||
      (disabledAfterDate && dayjs(date).isAfter(disabledAfterDate)) ||
      disabledDays.includes(date) ||
      selectedDays.includes(date)
    ) {
      var dates = selectedDays.filter(function (item) {
        return item !== date;
      });
      setSelectedDays(dates);
      onChange(dates);
      return;
    }
    if (numberOfSelectableDays) {
      if (numberOfSelectableDays === 1) {
        setSelectedDays([date]);
        onChange([date]);
        return;
      }
      if (
        selectedDays.length < numberOfSelectableDays &&
        numberOfSelectableDays > 0
      ) {
        if (selectedDays.includes(date)) {
          var dates = selectedDays.filter(function (item) {
            return item !== date;
          });
          setSelectedDays(dates);
          if (jalali) {
            onChange(dates);
          } else {
            onChange(dates);
          }
        } else {
          setSelectedDays(
            __spreadArray(__spreadArray([], selectedDays), [date]),
          );
          if (jalali) {
            onChange(selectedDays.concat([date]));
          } else {
            onChange(__spreadArray(__spreadArray([], selectedDays), [date]));
          }
        }
      }
      return;
    }
    if (selectedDays.includes(date)) {
      var dates = selectedDays.filter(function (item) {
        return item !== date;
      });
      setSelectedDays(dates);
      if (jalali) {
        onChange(dates);
      } else {
        onChange(dates);
      }
    } else {
      setSelectedDays(selectedDays.concat([date]));
      if (jalali) {
        onChange(selectedDays.concat([date]));
      } else {
        onChange(selectedDays.concat([date]));
      }
    }
  };
  var DayComponent =
    components === null || components === void 0 ? void 0 : components.days;
  return jsxs(
    Wrapper,
    __assign(
      {
        "data-test": day.format(FORMAT_DATE),
        onClick: handleClick,
        className: classNames({
          inactive: day.month() !== source.add(numberOfMonth, "month").month(),
          selected: handleSelectedDate(),
          disabled: handleDisabledDate(),
          disable: disabled,
          today:
            dayjs()
              .calendar(jalali ? "jalali" : "gregory")
              .format(FORMAT_DATE) === day.format(FORMAT_DATE),
        }),
      },
      {
        children: [
          DayComponent &&
            jsx(
              DayComponent,
              { day: day.format(FORMAT_DATE), jalali: jalali },
              void 0,
            ),
          !DayComponent && day.format("DD"),
        ],
      },
    ),
    void 0,
  );
};
var Wrapper = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  width: 38px;\n  height: 38px;\n  transition: all 0.15s ease-in-out;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n  color: ",
        ";\n  user-select: none;\n\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n    &.disable {\n      cursor: default;\n      background-color: transparent;\n      color: ",
        ";\n    }\n  }\n\n  &.inactive {\n    color: transparent;\n    visibility: hidden;\n  }\n\n  &.today {\n    border: 1px solid #e2e2e2;\n  }\n\n  &.disabled {\n    color: ",
        ";\n    position: relative;\n\n    &:hover {\n      background-color: transparent;\n      color: ",
        ';\n      cursor: not-allowed;\n    }\n\n    &::after {\n      position: absolute;\n      content: "";\n      width: 15px;\n      height: 2px;\n      background-color: ',
        ";\n      transform: rotate(-20deg);\n    }\n  }\n  &.selected {\n    color: #fff;\n    background-color: ",
        ";\n    box-shadow: 0px 10px 30px -12px ",
        ";\n\n    &:hover {\n      background-color: ",
        ";\n      &.disable {\n        color: #fff;\n      }\n    }\n\n    p {\n      color: #fff;\n    }\n  }\n",
      ],
      [
        "\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-bottom: 5px;\n  width: 38px;\n  height: 38px;\n  transition: all 0.15s ease-in-out;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n  color: ",
        ";\n  user-select: none;\n\n  &:hover {\n    background-color: ",
        ";\n    color: ",
        ";\n    &.disable {\n      cursor: default;\n      background-color: transparent;\n      color: ",
        ";\n    }\n  }\n\n  &.inactive {\n    color: transparent;\n    visibility: hidden;\n  }\n\n  &.today {\n    border: 1px solid #e2e2e2;\n  }\n\n  &.disabled {\n    color: ",
        ";\n    position: relative;\n\n    &:hover {\n      background-color: transparent;\n      color: ",
        ';\n      cursor: not-allowed;\n    }\n\n    &::after {\n      position: absolute;\n      content: "";\n      width: 15px;\n      height: 2px;\n      background-color: ',
        ";\n      transform: rotate(-20deg);\n    }\n  }\n  &.selected {\n    color: #fff;\n    background-color: ",
        ";\n    box-shadow: 0px 10px 30px -12px ",
        ";\n\n    &:hover {\n      background-color: ",
        ";\n      &.disable {\n        color: #fff;\n      }\n    }\n\n    p {\n      color: #fff;\n    }\n  }\n",
      ],
    )),
  function (_a) {
    var theme = _a.theme;
    return theme.grey[900];
  },
  function (_a) {
    var theme = _a.theme;
    return theme.primary.light;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.grey[700];
  },
  function (_a) {
    var theme = _a.theme;
    return theme.grey[900];
  },
  function (_a) {
    var theme = _a.theme;
    return theme.text.disabled;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.text.disabled;
  },
  function (_a) {
    var theme = _a.theme;
    return theme.text.disabled;
  },
  function (props) {
    return props.theme.primary.dark;
  },
  function (props) {
    return props.theme.primary.main;
  },
  function (props) {
    return props.theme.primary.main;
  },
);
var templateObject_1;

var Months = function (_a) {
  var numberOfSelectableDays = _a.numberOfSelectableDays,
    numberOfMonths = _a.numberOfMonths,
    startOfWeek = _a.startOfWeek,
    selectedDays = _a.selectedDays,
    disabledDays = _a.disabledDays,
    setSelectedDays = _a.setSelectedDays,
    components = _a.components,
    disabledBeforeToday = _a.disabledBeforeToday,
    disabledBeforeDate = _a.disabledBeforeDate,
    disabledAfterDate = _a.disabledAfterDate,
    jalali = _a.jalali,
    disabled = _a.disabled,
    onChange = _a.onChange,
    sourceProp = _a.source;
  var renderMonths = function () {
    var months = [];
    var _loop_1 = function (i) {
      var source = sourceProp.add(i, "month");
      var weeksDays = sliceDaysOfMonthToWeeks(
        createCalendar({
          source: source,
          startOfWeek: jalali ? 6 : startOfWeek || 0,
        }),
        7,
      );
      months.push(
        jsxs(
          Month,
          __assign(
            {
              numberOfMonths: numberOfMonths || 1,
              "data-test": dayjs_min()
                .set("month", 1)
                .set("day", 1)
                .diff(source, "d"),
            },
            {
              children: [
                jsx(
                  TitleOfWeek,
                  {
                    jalali: jalali,
                    startOfWeek: startOfWeek,
                    components:
                      components === null || components === void 0
                        ? void 0
                        : components.titleOfWeek,
                  },
                  void 0,
                ),
                weeksDays.map(function (week) {
                  return jsx(
                    Weeks,
                    __assign(
                      {
                        jalali: jalali,
                        "data-test": dayjs_min()
                          .set("month", 1)
                          .set("day", 1)
                          .diff(week[0], "d"),
                      },
                      {
                        children: week.map(function (day) {
                          return jsx(
                            Day,
                            {
                              day: day,
                              jalali: jalali,
                              numberOfMonth: i,
                              disabled: disabled,
                              onChange: onChange,
                              source: sourceProp,
                              components: components,
                              disabledDays: disabledDays,
                              selectedDays: selectedDays,
                              setSelectedDays: setSelectedDays,
                              disabledBeforeToday: disabledBeforeToday,
                              disabledBeforeDate: disabledBeforeDate,
                              disabledAfterDate: disabledAfterDate,
                              numberOfSelectableDays: numberOfSelectableDays,
                            },
                            day.format("YYYY-MM-DD"),
                          );
                        }),
                      },
                    ),
                    dayjs_min()
                      .set("month", 1)
                      .set("day", 1)
                      .diff(week[0], "d"),
                  );
                }),
              ],
            },
          ),
          dayjs_min().set("month", 1).set("day", 1).diff(source, "d"),
        ),
      );
    };
    for (var i = 0; i < numberOfMonths; i++) {
      _loop_1(i);
    }
    return months;
  };
  return jsx(
    Wrapper$3,
    __assign({ jalali: jalali }, { children: renderMonths() }),
    void 0,
  );
};

var DatePicker = function (_a) {
  var _b = _a.jalali,
    jalali = _b === void 0 ? false : _b,
    _c = _a.disabled,
    disabled = _c === void 0 ? false : _c,
    _d = _a.autoResponsive,
    autoResponsive = _d === void 0 ? true : _d,
    _e = _a.startOfWeek,
    startOfWeek = _e === void 0 ? 0 : _e,
    _f = _a.numberOfMonths,
    numberOfMonthsProps = _f === void 0 ? 1 : _f,
    _g = _a.disabledDays,
    disabledDays = _g === void 0 ? [] : _g,
    components = _a.components,
    themeProps = _a.theme,
    _h = _a.numberOfSelectableDays,
    numberOfSelectableDays = _h === void 0 ? 0 : _h,
    _j = _a.disabledBeforeToday,
    disabledBeforeToday = _j === void 0 ? false : _j,
    disabledBeforeDate = _a.disabledBeforeDate,
    disabledAfterDate = _a.disabledAfterDate,
    selectedDaysProps = _a.selectedDays,
    onChange = _a.onChange,
    initialMonthAndYear = _a.initialMonthAndYear,
    onRangeDateInScreen = _a.onRangeDateInScreen;
  var _k = useState(selectedDaysProps || []),
    selectedDays = _k[0],
    setSelectedDays = _k[1];
  var _l = useState(numberOfMonthsProps),
    numberOfMonths = _l[0],
    setNumberOfMonths = _l[1];
  var _m = useState(false),
    displayMonths = _m[0],
    setDisplayMonths = _m[1];
  var _o = useState(dayjsLocalized(jalali, initialMonthAndYear)),
    source = _o[0],
    setSource = _o[1];
  useEffect(
    function () {
      if (onRangeDateInScreen) {
        var endDate = source.add(Math.max(0, numberOfMonths - 1), "month");
        endDate = endDate.date(endDate.daysInMonth());
        var startDate = source.date(1);
        onRangeDateInScreen({
          start: getDayFormat(startDate, jalali),
          end: getDayFormat(endDate),
        });
      }
    },
    [jalali, numberOfMonths, onRangeDateInScreen, source],
  );
  useEffect(
    function () {
      if (!initialMonthAndYear && selectedDays.length) {
        setSource(dayjsLocalized(jalali, selectedDays[0]));
      } else if (initialMonthAndYear) {
        setSource(dayjsLocalized(jalali, initialMonthAndYear));
      }
      // we remove selectedDays dependency to just run if we have any changes for initialMonthAndYear
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [jalali, initialMonthAndYear],
  );
  useEffect(
    function () {
      selectedDaysProps && setSelectedDays(selectedDaysProps);
    },
    [selectedDaysProps],
  );
  useEffect(
    function () {
      var handleResize = function () {
        if (document.querySelector(".tp-calendar")) {
          var width = document.querySelector(".tp-calendar").clientWidth;
          if (width < 580) {
            setNumberOfMonths(1);
          } else {
            setNumberOfMonths(Math.floor(width / 320));
          }
        }
      };
      if (autoResponsive) {
        if (typeof window !== "undefined") {
          window.addEventListener("resize", handleResize);
          handleResize();
        }
      } else {
        setNumberOfMonths(numberOfMonthsProps);
      }
      return function () {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", handleResize);
        }
      };
    },
    [numberOfMonths, autoResponsive, numberOfMonthsProps],
  );
  return jsx(
    "div",
    __assign(
      { className: "tp-calendar" },
      {
        children: jsxs(
          ThemeProvider,
          __assign(
            { theme: themeProps ? deepMerge(theme, themeProps) : theme },
            {
              children: [
                jsx(
                  Header,
                  {
                    jalali: jalali,
                    source: source,
                    setSource: setSource,
                    components: components,
                    displayMonths: displayMonths,
                    numberOfMonths: numberOfMonths,
                    setDisplayMonths: setDisplayMonths,
                  },
                  void 0,
                ),
                displayMonths
                  ? jsx(
                      DisplayMonths,
                      {
                        jalali: jalali,
                        setDisplayMonths: setDisplayMonths,
                        setSource: setSource,
                        source: source,
                      },
                      void 0,
                    )
                  : jsx(
                      Months,
                      {
                        source: source,
                        jalali: jalali,
                        onChange: onChange,
                        disabled: disabled,
                        setSource: setSource,
                        components: components,
                        startOfWeek: startOfWeek,
                        disabledDays: disabledDays,
                        selectedDays: selectedDays,
                        numberOfMonths: numberOfMonths,
                        setSelectedDays: setSelectedDays,
                        disabledAfterDate: disabledAfterDate,
                        disabledBeforeDate: disabledBeforeDate,
                        disabledBeforeToday: disabledBeforeToday,
                        numberOfSelectableDays: numberOfSelectableDays,
                      },
                      void 0,
                    ),
              ],
            },
          ),
          void 0,
        ),
      },
    ),
    void 0,
  );
};

var Calendar = function (_a) {
  var jalali = _a.jalali,
    _b = _a.startOfWeek,
    startOfWeek = _b === void 0 ? 1 : _b,
    children = _a.children;
  var source = dayjs();
  if (source.get("day") === 0) {
    source = source.add(1, "day");
  }
  var weeksDays = sliceDaysOfMonthToWeeks(
    createCalendar({
      source: source,
      startOfWeek: jalali ? 7 : startOfWeek,
    }),
    7,
  );
  return children(weeksDays);
};

export { Calendar, DatePicker, RangePicker };
//# sourceMappingURL=index.es.js.map
