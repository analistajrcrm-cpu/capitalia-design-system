/* @ds-bundle: {"format":4,"namespace":"CapitaliaDesignSystem_369e3a","components":[{"name":"ArrowLink","sourcePath":"components/actions/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"ArcSteps","sourcePath":"components/brand/ArcSteps.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PetalFrame","sourcePath":"components/brand/PetalFrame.jsx"},{"name":"PetalTag","sourcePath":"components/brand/PetalTag.jsx"},{"name":"PriceCallout","sourcePath":"components/brand/PriceCallout.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"BeneficiosSlide","sourcePath":"slides/BeneficiosSlide.jsx"},{"name":"CierreSlide","sourcePath":"slides/CierreSlide.jsx"},{"name":"CoverSlide","sourcePath":"slides/CoverSlide.jsx"},{"name":"DetalleSlide","sourcePath":"slides/DetalleSlide.jsx"},{"name":"EtapaSlide","sourcePath":"slides/EtapaSlide.jsx"},{"name":"AdBanner","sourcePath":"ui_kits/collateral/AdBanner.jsx"},{"name":"EmailSignature","sourcePath":"ui_kits/collateral/EmailSignature.jsx"},{"name":"Feed","sourcePath":"ui_kits/social/Feed.jsx"},{"name":"PostFoto","sourcePath":"ui_kits/social/PostFoto.jsx"},{"name":"PostPlum","sourcePath":"ui_kits/social/PostPlum.jsx"},{"name":"PostTarjeta","sourcePath":"ui_kits/social/PostTarjeta.jsx"}],"sourceHashes":{"components/actions/ArrowLink.jsx":"2cd53b09cdc2","components/actions/Button.jsx":"e72088806709","components/actions/IconButton.jsx":"fd124ba949a6","components/brand/ArcSteps.jsx":"38f578089853","components/brand/Icon.jsx":"eb93683385fa","components/brand/Logo.jsx":"c0d08e1b7efe","components/brand/PetalFrame.jsx":"9e2fc1b48127","components/brand/PetalTag.jsx":"bcd8afbeee37","components/brand/PriceCallout.jsx":"58d7db4c11b7","components/display/Badge.jsx":"30d42327f247","components/display/Card.jsx":"3243639ff6ec","components/display/Stat.jsx":"6d6c2810471e","components/display/Tag.jsx":"ddedc6527513","components/feedback/Dialog.jsx":"e6917279748a","components/feedback/Toast.jsx":"f6e303d87e05","components/feedback/Tooltip.jsx":"6a351f4874ea","components/forms/Checkbox.jsx":"44712db0d372","components/forms/Input.jsx":"dd969755e439","components/forms/Radio.jsx":"7eaabe518952","components/forms/Select.jsx":"3b2a962b0411","components/forms/Switch.jsx":"332e4130a3c6","components/navigation/Tabs.jsx":"c58c5984ef56","slides/BeneficiosSlide.jsx":"99cec7993ed6","slides/CierreSlide.jsx":"523754e7249e","slides/CoverSlide.jsx":"06d773b26a24","slides/DetalleSlide.jsx":"8b716d6461b8","slides/EtapaSlide.jsx":"f9c57dcff935","ui_kits/collateral/AdBanner.jsx":"7d532013cb8a","ui_kits/collateral/EmailSignature.jsx":"860bde162962","ui_kits/social/Feed.jsx":"2cb5e7a73d71","ui_kits/social/PostFoto.jsx":"05fdcb1b7b38","ui_kits/social/PostPlum.jsx":"0b3539ac8b75","ui_kits/social/PostTarjeta.jsx":"01ed2a349059"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CapitaliaDesignSystem_369e3a = window.CapitaliaDesignSystem_369e3a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const useHot = () => {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return [{
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, h, a];
};
const DIR = {
  'down-right': '\u2198',
  'right': '\u2192',
  'down': '\u2193'
};

/** The brand's arrow + block-label motif (email signature, deck callouts). */
function ArrowLink({
  children,
  href = '#',
  direction = 'down-right',
  tone = 'default',
  style,
  ...rest
}) {
  const [bind, h] = useHot();
  const ink = tone === 'inverse' ? 'var(--bone-200)' : 'var(--plum-900)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, bind, rest, {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start',
      textDecoration: 'none',
      border: 0,
      color: ink,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: 'var(--type-h2)',
      lineHeight: 1,
      fontWeight: 'var(--fw-light)',
      transform: h ? 'translate(2px,2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-standard)'
    }
  }, DIR[direction]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 'var(--fs-body)',
      padding: '2px 10px',
      background: tone === 'inverse' ? 'var(--bone-200)' : 'var(--plum-900)',
      color: tone === 'inverse' ? 'var(--plum-900)' : 'var(--bone-200)'
    }
  }, children));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const useHot = () => {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return [{
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, h, a];
};
const SIZE = {
  sm: {
    height: 'var(--control-h-sm)',
    padding: '0 16px',
    fontSize: 14
  },
  md: {
    height: 'var(--control-h-md)',
    padding: '0 24px',
    fontSize: 16
  },
  lg: {
    height: 'var(--control-h-lg)',
    padding: '0 32px',
    fontSize: 18
  }
};
const TONE = {
  primary: {
    base: {
      background: 'var(--orange-500)',
      color: 'var(--white)'
    },
    hover: {
      background: 'var(--orange-600)'
    },
    active: {
      background: 'var(--orange-700)'
    }
  },
  secondary: {
    base: {
      background: 'var(--plum-900)',
      color: 'var(--bone-200)'
    },
    hover: {
      background: 'var(--plum-800)'
    },
    active: {
      background: 'var(--plum-900)'
    }
  },
  outline: {
    base: {
      background: 'transparent',
      color: 'var(--text-primary)',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)'
    },
    hover: {
      background: 'var(--plum-a08)'
    },
    active: {
      background: 'var(--plum-a12)'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    hover: {
      background: 'var(--plum-a08)'
    },
    active: {
      background: 'var(--plum-a12)'
    }
  },
  inverse: {
    base: {
      background: 'var(--bone-200)',
      color: 'var(--plum-900)'
    },
    hover: {
      background: 'var(--bone-100)'
    },
    active: {
      background: 'var(--bone-300)'
    }
  }
};

/** Primary action. Pill by default; petal for brand moments. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  style,
  ...rest
}) {
  const [bind, h, a] = useHot();
  const t = TONE[variant] || TONE.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, bind, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      width: fullWidth ? '100%' : undefined,
      border: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      borderRadius: shape === 'petal' ? 'var(--radius-petal)' : shape === 'square' ? 'var(--radius-sm)' : 'var(--radius-pill)',
      transition: 'var(--motion-hover)',
      opacity: disabled ? .4 : 1,
      ...SIZE[size],
      ...t.base,
      ...(!disabled && h ? t.hover : null),
      ...(!disabled && a ? t.active : null),
      ...style
    }
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const useHot = () => {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return [{
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, h, a];
};
const SIZE = {
  sm: 32,
  md: 40,
  lg: 48
};
const TONE = {
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    hover: {
      background: 'var(--plum-a08)'
    }
  },
  solid: {
    base: {
      background: 'var(--plum-900)',
      color: 'var(--bone-200)'
    },
    hover: {
      background: 'var(--plum-800)'
    }
  },
  accent: {
    base: {
      background: 'var(--orange-500)',
      color: 'var(--white)'
    },
    hover: {
      background: 'var(--orange-600)'
    }
  },
  outline: {
    base: {
      background: 'transparent',
      color: 'var(--text-primary)',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)'
    },
    hover: {
      background: 'var(--plum-a08)'
    }
  },
  inverse: {
    base: {
      background: 'transparent',
      color: 'var(--bone-200)',
      boxShadow: 'inset 0 0 0 1px var(--border-inverse)'
    },
    hover: {
      background: 'var(--bone-a24)'
    }
  }
};

/** Square-ish icon-only control. */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'pill',
  disabled = false,
  style,
  ...rest
}) {
  const [bind, h] = useHot();
  const s = SIZE[size];
  const t = TONE[variant] || TONE.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled
  }, bind, rest, {
    style: {
      width: s,
      height: s,
      display: 'inline-grid',
      placeItems: 'center',
      border: 0,
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'var(--motion-hover)',
      borderRadius: shape === 'petal' ? 'var(--radius-petal)' : shape === 'square' ? 'var(--radius-sm)' : 'var(--radius-pill)',
      ...t.base,
      ...(!disabled && h ? t.hover : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/ArcSteps.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered concentric arcs — the deck's "Beneficios" layout. */
function ArcSteps({
  items = [],
  tone = 'inverse',
  style,
  ...rest
}) {
  const line = tone === 'inverse' ? 'var(--bone-a40)' : 'var(--plum-a12)';
  const ink = tone === 'inverse' ? 'var(--bone-200)' : 'var(--plum-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'grid',
      gap: 'var(--space-12)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-22%',
      right: '-22%',
      top: 0,
      height: 170,
      borderTop: '1px solid ' + line,
      borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 40,
      height: 40,
      margin: '-20px auto 0',
      borderRadius: '999px',
      border: '1px solid ' + line,
      display: 'grid',
      placeItems: 'center',
      font: 'var(--type-body-sm)',
      color: ink
    }
  }, i + 1), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) auto 0',
      maxWidth: '34ch',
      textAlign: 'center',
      font: 'var(--type-body-sm)',
      color: ink,
      opacity: .9
    }
  }, it))));
}
Object.assign(__ds_scope, { ArcSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ArcSteps.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.441.0/icons/';

/** Lucide outline glyph tinted with currentColor (see readme, Iconography). */
function Icon({
  name = 'arrow-right',
  size = 20,
  strokeWidth,
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: 'currentColor',
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      flex: '0 0 auto',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  'lockup-vertical': {
    plum: 'lockup-vertical.png',
    bone: 'lockup-vertical-bone.png'
  },
  'lockup-horizontal': {
    plum: 'lockup-horizontal-plum.png',
    bone: 'lockup-horizontal-bone.png'
  },
  mark: {
    plum: 'mark-plum.png',
    orange: 'mark-orange.png',
    bone: 'mark-bone.png',
    white: 'mark-white.png'
  },
  wordmark: {
    plum: 'wordmark-plum.png',
    bone: 'wordmark-bone.png'
  }
};

/** Official Capitalia artwork. Never re-draw the mark — always render these files. */
function Logo({
  variant = 'lockup-horizontal',
  tone = 'plum',
  height,
  assetBase = 'assets/logo',
  style,
  ...rest
}) {
  const set = SRC[variant] || SRC['lockup-horizontal'];
  const file = set[tone] || Object.values(set)[0];
  const h = height || (variant === 'mark' ? 40 : variant === 'lockup-vertical' ? 96 : 32);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase + '/' + file,
    alt: "Capitalia",
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PetalFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SHAPE = {
  petal: {
    br: '68% 68% 0 68%',
    bl: '68% 68% 68% 0',
    tr: '68% 0 68% 68%',
    tl: '0 68% 68% 68%'
  },
  leaf: {
    br: '100% 0 100% 0',
    bl: '0 100% 0 100%',
    tr: '0 100% 0 100%',
    tl: '100% 0 100% 0'
  },
  circle: {
    br: '50%',
    bl: '50%',
    tr: '50%',
    tl: '50%'
  },
  arc: {
    br: '0 999px 999px 0',
    bl: '999px 0 0 999px',
    tr: '999px 999px 0 0',
    tl: '0 0 999px 999px'
  }
};

/** Photography masked into a brand shape. Wrap an <img> or pass src. */
function PetalFrame({
  src,
  alt = '',
  shape = 'petal',
  point = 'br',
  size,
  ratio = '1 / 1',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: size || '100%',
      aspectRatio: size ? undefined : ratio,
      height: size || undefined,
      borderRadius: (SHAPE[shape] || SHAPE.petal)[point],
      background: 'var(--surface-sunken)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : children);
}
Object.assign(__ds_scope, { PetalFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PetalFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/PetalTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CORNER = {
  br: '999px 999px 0 999px',
  bl: '999px 999px 999px 0',
  tr: '999px 0 999px 999px',
  tl: '0 999px 999px 999px'
};
const TONE = {
  bone: {
    background: 'var(--bone-200)',
    color: 'var(--plum-900)'
  },
  plum: {
    background: 'var(--plum-900)',
    color: 'var(--bone-200)'
  },
  orange: {
    background: 'var(--orange-500)',
    color: 'var(--white)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-primary)',
    boxShadow: 'inset 0 0 0 1px var(--border-strong)'
  }
};
const SIZE = {
  sm: {
    height: 24,
    padding: '0 12px',
    fontSize: 12
  },
  md: {
    height: 32,
    padding: '0 16px',
    fontSize: 14
  },
  lg: {
    height: 44,
    padding: '0 24px',
    fontSize: 18
  }
};

/** The petal tag: a pill with one squared corner — Capitalia's signature label shape. */
function PetalTag({
  children,
  tone = 'bone',
  size = 'md',
  corner = 'br',
  uppercase = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: uppercase ? 'var(--ls-eyebrow)' : '0',
      textTransform: uppercase ? 'uppercase' : 'none',
      whiteSpace: 'nowrap',
      borderRadius: CORNER[corner],
      ...SIZE[size],
      ...TONE[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PetalTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PetalTag.jsx", error: String((e && e.message) || e) }); }

// components/brand/PriceCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "Mensualidades desde $2,900 mxn" — the offer stack used across social and print. */
function PriceCallout({
  label = 'Mensualidades desde',
  amount = '$2,900',
  unit = 'mxn',
  note,
  tone = 'inverse',
  align = 'left',
  style,
  ...rest
}) {
  const ink = tone === 'inverse' ? 'var(--bone-200)' : 'var(--plum-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 'var(--fw-bold)',
      color: ink
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h1)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--orange-500)',
      letterSpacing: 'var(--ls-display)'
    }
  }, amount), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h3)',
      fontWeight: 'var(--fw-regular)',
      color: ink
    }
  }, unit)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      font: 'var(--type-body-sm)',
      color: ink,
      opacity: .85
    }
  }, note));
}
Object.assign(__ds_scope, { PriceCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PriceCallout.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  neutral: {
    background: 'var(--bone-200)',
    color: 'var(--plum-900)'
  },
  accent: {
    background: 'var(--orange-100)',
    color: 'var(--orange-700)'
  },
  success: {
    background: 'rgba(79,122,82,.14)',
    color: 'var(--green-600)'
  },
  warning: {
    background: 'rgba(192,138,46,.16)',
    color: 'var(--amber-600)'
  },
  danger: {
    background: 'rgba(179,59,43,.14)',
    color: 'var(--red-600)'
  },
  ink: {
    background: 'var(--plum-900)',
    color: 'var(--bone-200)'
  }
};

/** Small status marker. */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-medium)',
      ...TONE[tone],
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '999px',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const useHot = () => {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return [{
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, h, a];
};
/** Content container. Flat and square-ish by default; the brand is print-flat. */
function Card({
  children,
  tone = 'default',
  padding = 'var(--space-6)',
  interactive = false,
  media,
  mediaShape = 'arc',
  style,
  ...rest
}) {
  const [bind, h] = useHot();
  const TONE = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)'
    },
    bone: {
      background: 'var(--bone-100)',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    ink: {
      background: 'var(--plum-900)',
      color: 'var(--bone-200)',
      border: '1px solid transparent'
    },
    accent: {
      background: 'var(--orange-500)',
      color: 'var(--white)',
      border: '1px solid transparent'
    }
  };
  const MEDIA = {
    arc: '0 0 var(--radius-lg) var(--radius-lg) / 0 0 64px 64px',
    square: '0',
    petal: '0 0 0 68%'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, interactive ? bind : {}, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      transition: 'var(--motion-hover), box-shadow var(--dur-fast) var(--ease-standard)',
      boxShadow: interactive && h ? 'var(--shadow-card)' : 'var(--shadow-none)',
      cursor: interactive ? 'pointer' : 'default',
      ...TONE[tone],
      ...style
    }
  }), media && /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderRadius: MEDIA[mediaShape]
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      width: '100%',
      height: 200,
      objectFit: 'cover',
      display: 'block',
      transform: interactive && h ? 'scale(1.02)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Figure + label pair, e.g. "25k m² de áreas verdes". */
function Stat({
  value,
  label,
  tone = 'default',
  petal = false,
  align = 'left',
  style,
  ...rest
}) {
  const ink = tone === 'inverse' ? 'var(--bone-200)' : 'var(--plum-900)';
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...(petal ? {
        background: 'var(--orange-500)',
        color: 'var(--white)',
        borderRadius: 'var(--radius-petal)',
        padding: 'var(--space-5) var(--space-6)',
        display: 'inline-block'
      } : null)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h1)',
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      color: petal ? 'var(--white)' : tone === 'accent' ? 'var(--orange-500)' : ink
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontSize: 'var(--fs-body-sm)',
      fontFamily: 'var(--font-sans)',
      color: petal ? 'var(--white)' : tone === 'inverse' ? 'var(--bone-300)' : 'var(--text-muted)'
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: style
  }), body);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const useHot = () => {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return [{
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, h, a];
};
/** Metadata chip, optionally removable or selectable. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [bind, h] = useHot();
  return /*#__PURE__*/React.createElement("span", _extends({}, bind, rest, {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--motion-hover)',
      background: selected ? 'var(--plum-900)' : h && onClick ? 'var(--plum-a08)' : 'transparent',
      color: selected ? 'var(--bone-200)' : 'var(--text-primary)',
      boxShadow: selected ? 'none' : 'inset 0 0 0 1px var(--border-subtle)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Quitar",
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      fontSize: 14,
      lineHeight: 1
    }
  }, '\u00D7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal over a plum scrim. */
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'var(--plum-a60)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-8)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      margin: 0
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 20,
      lineHeight: 1,
      color: 'var(--text-muted)'
    }
  }, '\u00D7')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONE = {
  info: {
    background: 'var(--plum-900)',
    color: 'var(--bone-200)'
  },
  success: {
    background: 'var(--green-600)',
    color: 'var(--white)'
  },
  danger: {
    background: 'var(--red-600)',
    color: 'var(--white)'
  }
};

/** Transient confirmation strip. */
function Toast({
  children,
  tone = 'info',
  action,
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      font: 'var(--type-body-sm)',
      ...TONE[tone],
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", null, children), action, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      opacity: .8
    }
  }, '\u00D7'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover/focus label for an icon-only control. */
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'top' ? {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : placement === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 70,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--plum-900)',
      color: 'var(--bone-200)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-caption)',
      boxShadow: 'var(--shadow-card)',
      ...pos
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square check control. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  description,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gridTemplateColumns: '20px 1fr',
      gap: 'var(--space-3)',
      alignItems: 'start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      appearance: 'none',
      width: 20,
      height: 20,
      margin: 0,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (checked ? 'var(--orange-500)' : 'var(--border-strong)'),
      background: checked ? 'var(--orange-500)' : 'var(--surface-card)',
      cursor: 'inherit',
      transition: 'var(--motion-hover)'
    }
  })), checked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      color: 'var(--white)',
      fontSize: 13,
      fontWeight: 'var(--fw-bold)',
      pointerEvents: 'none'
    }
  }, '\u2713')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  height: 'var(--control-h-md)',
  padding: '0 14px',
  background: 'var(--surface-card)',
  color: 'var(--text-primary)',
  font: 'var(--type-body)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-md)',
  transition: 'var(--motion-hover)',
  outline: 'none'
};
/** Labelled text field. */
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
  rows = 4,
  disabled = false,
  required = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const auto = React.useMemo(() => 'in-' + Math.random().toString(36).slice(2, 8), []);
  const fid = id || auto;
  const border = error ? 'var(--status-danger)' : focus ? 'var(--orange-500)' : 'var(--border-subtle)';
  const common = {
    ...FIELD,
    borderColor: border,
    boxShadow: focus ? 'var(--ring-focus)' : 'none',
    opacity: disabled ? .5 : 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...common,
      height: 'auto',
      padding: '10px 14px',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)'
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: common
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio group: all options visible. */
function Radio({
  name,
  options = [],
  value,
  onChange,
  label,
  direction = 'column',
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": label,
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 'var(--space-6)' : 'var(--space-3)'
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    const on = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '999px',
        display: 'grid',
        placeItems: 'center',
        border: '1px solid ' + (on ? 'var(--orange-500)' : 'var(--border-strong)'),
        transition: 'var(--motion-hover)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '999px',
        background: on ? 'var(--orange-500)' : 'transparent'
      }
    })), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      onChange: onChange,
      disabled: disabled,
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body)'
      }
    }, l));
  })));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELD = {
  width: '100%',
  height: 'var(--control-h-md)',
  padding: '0 14px',
  background: 'var(--surface-card)',
  color: 'var(--text-primary)',
  font: 'var(--type-body)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-md)',
  transition: 'var(--motion-hover)',
  outline: 'none'
};
/** Native select with brand chrome. */
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  onChange,
  placeholder = 'Selecciona…',
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const auto = React.useMemo(() => 'sel-' + Math.random().toString(36).slice(2, 8), []);
  const fid = id || auto;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      ...FIELD,
      appearance: 'none',
      paddingRight: 36,
      cursor: 'pointer',
      opacity: disabled ? .5 : 1,
      borderColor: error ? 'var(--status-danger)' : focus ? 'var(--orange-500)' : 'var(--border-subtle)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none'
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-60%)',
      color: 'var(--text-muted)',
      fontSize: 12,
      pointerEvents: 'none'
    }
  }, '\u25BE')), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontFamily: 'var(--font-sans)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** On/off toggle for immediate settings. */
function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      borderRadius: '999px',
      flex: '0 0 auto',
      background: checked ? 'var(--orange-500)' : 'var(--bone-300)',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '999px',
      background: 'var(--white)',
      transition: 'left var(--dur-fast) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const useHot = () => {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return [{
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false)
  }, h, a];
};
/** Underlined tab strip. */
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const active = value ?? (typeof items[0] === 'string' ? items[0] : items[0] && items[0].value);
  const ink = tone === 'inverse' ? 'var(--bone-200)' : 'var(--plum-900)';
  const line = tone === 'inverse' ? 'var(--bone-a24)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      borderBottom: '1px solid ' + line,
      ...style
    }
  }), items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        border: 0,
        background: 'transparent',
        padding: '0 0 10px',
        cursor: 'pointer',
        font: 'var(--type-label)',
        fontSize: 'var(--fs-body)',
        color: on ? ink : tone === 'inverse' ? 'var(--plum-200)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--orange-500)' : 'transparent'),
        marginBottom: -1,
        transition: 'var(--motion-hover)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// slides/BeneficiosSlide.jsx
try { (() => {
/** Lámina de beneficios: campo plum, título centrado y arcos numerados. */
function BeneficiosSlide({
  title = 'Beneficios',
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 72,
      textAlign: 'center',
      margin: 0,
      font: 'var(--fw-regular) 40px/1.2 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 170,
      bottom: 60
    }
  }, items.map((it, i) => {
    const top = i * 150;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '-22%',
        right: '-22%',
        top: 0,
        height: 300,
        borderTop: '1px solid var(--bone-a40)',
        borderRadius: '50% 50% 0 0 / 100% 100% 0 0'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 44,
        height: 44,
        margin: '-22px auto 0',
        borderRadius: '999px',
        border: '1px solid var(--bone-a40)',
        background: 'var(--plum-900)',
        display: 'grid',
        placeItems: 'center',
        font: 'var(--fw-regular) 18px/1 var(--font-sans)',
        color: 'var(--bone-200)'
      }
    }, i + 1), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '18px auto 0',
        maxWidth: '42ch',
        textAlign: 'center',
        font: 'var(--fw-regular) 16px/1.5 var(--font-sans)',
        color: 'var(--bone-300)'
      }
    }, it));
  })));
}
Object.assign(__ds_scope, { BeneficiosSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/BeneficiosSlide.jsx", error: String((e && e.message) || e) }); }

// slides/CierreSlide.jsx
try { (() => {
/** Lámina de cierre: render a sangre con scrim plum, lockup, oferta y cápsula de URL. */
function CierreSlide({
  headline = ['Si se vive,', 'SE VENDE'],
  label = 'Mensualidades desde',
  amount = '$2,900',
  unit = 'mxn',
  note,
  photo,
  url = 'capitalia.mx',
  assetBase = '../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(49,30,52,.92) 0%,rgba(49,30,52,.72) 46%,rgba(49,30,52,.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/lockup-horizontal-bone.png',
    alt: "Capitalia",
    style: {
      position: 'absolute',
      left: 80,
      top: 64,
      height: 32
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: 80,
      top: 220,
      margin: 0,
      font: 'var(--fw-bold) 76px/1.02 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--bone-200)'
    }
  }, headline.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block',
      color: i ? 'var(--orange-500)' : undefined
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      bottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 18px/1.3 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 56px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--orange-500)'
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 26px/1 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, unit)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      font: 'var(--fw-regular) 16px/1.4 var(--font-sans)',
      color: 'var(--bone-300)'
    }
  }, note)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 80,
      bottom: 56,
      background: 'var(--bone-200)',
      color: 'var(--plum-900)',
      font: 'var(--fw-medium) 16px/1 var(--font-sans)',
      padding: '9px 18px',
      borderRadius: 'var(--radius-petal)'
    }
  }, url));
}
Object.assign(__ds_scope, { CierreSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/CierreSlide.jsx", error: String((e && e.message) || e) }); }

// slides/CoverSlide.jsx
try { (() => {
/** Portada: panel plum, borde en arco, pétalos naranjas en la costura, render a sangre. */
function CoverSlide({
  eyebrow,
  title = ['Una ciudad', 'no solo crece:', 'se planea'],
  lead,
  photo,
  assetBase = '../assets',
  url = 'capitalia.mx'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '56%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/mark-orange.png',
    alt: "",
    style: {
      position: 'absolute',
      left: '34%',
      top: 104,
      height: 520
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '50%',
      background: 'var(--plum-900)',
      borderRadius: '0 999px 999px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      top: 96,
      width: 520
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--bone-500)',
      marginBottom: 20
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-bold) 68px/1.05 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--bone-200)',
      margin: 0
    }
  }, title.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l)))), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      left: 80,
      bottom: 96,
      width: 400,
      font: 'var(--fw-regular) 20px/1.5 var(--font-sans)',
      color: 'var(--bone-300)',
      margin: 0
    }
  }, lead), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/lockup-horizontal-bone.png',
    alt: "Capitalia",
    style: {
      position: 'absolute',
      right: 64,
      bottom: 56,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 64,
      top: 56,
      background: 'var(--bone-200)',
      color: 'var(--plum-900)',
      font: 'var(--fw-medium) 18px/1 var(--font-sans)',
      padding: '10px 20px',
      borderRadius: 'var(--radius-petal)'
    }
  }, url));
}
Object.assign(__ds_scope, { CoverSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/CoverSlide.jsx", error: String((e && e.message) || e) }); }

// slides/DetalleSlide.jsx
try { (() => {
/** Lámina de detalle: foto en pétalo con placa naranja, lista con línea de tiempo y párrafo. */
function DetalleSlide({
  eyebrow = 'Amenidades',
  items = [],
  body,
  stat,
  statLabel,
  photo,
  assetBase = '../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--bone-200)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 96,
      top: 88,
      width: 420,
      height: 544,
      overflow: 'hidden',
      borderRadius: 'var(--shape-petal-photo)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), stat && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 330,
      top: 520,
      background: 'var(--orange-500)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-petal)',
      padding: '22px 34px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 34px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-display)'
    }
  }, stat), statLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--fw-regular) 14px/1.2 var(--font-sans)'
    }
  }, statLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 640,
      top: 96,
      right: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      fontSize: 14,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--plum-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      position: 'relative'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start',
      paddingBottom: i === items.length - 1 ? 0 : 28,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '999px',
      border: '1px solid var(--plum-900)',
      flex: '0 0 auto',
      marginTop: 5,
      background: 'var(--bone-200)',
      zIndex: 1
    }
  }), i !== items.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 6,
      top: 19,
      bottom: 0,
      width: 1,
      background: 'var(--plum-900)',
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 20px/1.35 var(--font-sans)',
      color: 'var(--plum-900)'
    }
  }, it)))), body && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48,
      font: 'var(--fw-regular) 16px/1.5 var(--font-sans)',
      color: 'var(--plum-800)',
      maxWidth: '46ch'
    }
  }, body)));
}
Object.assign(__ds_scope, { DetalleSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/DetalleSlide.jsx", error: String((e && e.message) || e) }); }

// slides/EtapaSlide.jsx
try { (() => {
/** Lámina de etapa: campo naranja, cápsula ETAPA, wordmark de submarca y banda de render en arco. */
function EtapaSlide({
  stage = 'Etapa 1',
  brand = 'RECOLETA',
  title = ['Recoleta, donde', 'la vida inicia'],
  body,
  photo,
  assetBase = '../assets'
}) {
  const letters = brand.split('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: 'var(--orange-500)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -160,
      top: -220,
      width: 620,
      height: 620,
      border: '1px solid rgba(255,255,255,.25)',
      borderRadius: '999px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 80,
      top: 64,
      background: 'var(--bone-200)',
      color: 'var(--plum-900)',
      font: 'var(--fw-medium) 18px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      padding: '11px 22px',
      borderRadius: 'var(--radius-petal)'
    }
  }, stage), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      top: 152,
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, letters.map((ch, i) => ch === 'C' ? /*#__PURE__*/React.createElement("img", {
    key: i,
    src: assetBase + '/logo/mark-bone.png',
    alt: "C",
    style: {
      height: 38,
      margin: '0 3px'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--fw-bold) 44px/1 var(--font-sans)',
      letterSpacing: '.04em',
      color: 'var(--bone-200)'
    }
  }, ch))), /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      left: 80,
      top: 228,
      width: 460,
      margin: 0,
      font: 'var(--fw-regular) 40px/1.2 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, title.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l))), body && /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      right: 80,
      top: 152,
      width: 320,
      margin: 0,
      font: 'var(--fw-regular) 16px/1.45 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 300,
      overflow: 'hidden',
      borderRadius: '240px 240px 0 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/plaza-recoleta.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })));
}
Object.assign(__ds_scope, { EtapaSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/EtapaSlide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/AdBanner.jsx
try { (() => {
/** Anuncio horizontal: panel plum en arco, cúmulo de pétalos en la costura, render a sangre. (sources/04-ad.png) */
function AdBanner({
  title = ['Una ciudad', 'no solo crece:', 'se planea'],
  lead = 'Una ciudad planeada no solo se construye; se vive, se recorre y se convierte en comunidad.',
  photo,
  url = 'capitalia.mx',
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1584,
      height: 772,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: '52%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/mark-orange.png',
    alt: "",
    style: {
      position: 'absolute',
      left: '36%',
      top: 92,
      height: 580
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '46%',
      background: 'var(--plum-900)',
      borderRadius: '0 999px 999px 0'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'absolute',
      left: 40,
      top: 52,
      margin: 0,
      font: 'var(--fw-bold) 46px/1.14 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--bone-200)'
    }
  }, title.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'absolute',
      left: 40,
      bottom: 56,
      width: 360,
      margin: 0,
      font: 'var(--fw-regular) 19px/1.45 var(--font-sans)',
      color: 'var(--bone-300)'
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 48,
      top: 34,
      textAlign: 'right',
      font: 'var(--fw-regular) 22px/1.35 var(--font-sans)',
      color: 'var(--white)'
    }
  }, "Conoce m\xE1s en:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, url.split('.')[0]), ".", url.split('.').slice(1).join('.')), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/lockup-horizontal-bone.png',
    alt: "Capitalia",
    style: {
      position: 'absolute',
      right: 48,
      bottom: 44,
      height: 40
    }
  }));
}
Object.assign(__ds_scope, { AdBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/AdBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/EmailSignature.jsx
try { (() => {
/** Firma de correo: banda plum con retrato y símbolo, banda naranja con datos, cápsula bone con el dominio. (sources/05-signature.png) */
function EmailSignature({
  name = ['Juan', 'Pérez'],
  role = 'Mánager de Ventas',
  email = 'juanperez@capitalia.mx',
  phone = '999 315 2501',
  portrait,
  url = 'capitalia.mx',
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1536,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 248,
      background: 'var(--plum-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: portrait || assetBase + '/img/retrato-ventas.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 38,
      top: 42,
      width: 168,
      height: 152,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 250,
      top: 34,
      font: 'var(--fw-light) 62px/1.08 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, name.map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, n))), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/mark-bone.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 620,
      top: -4,
      height: 250
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 1070,
      top: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: 'var(--fw-light) 46px/1 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, '\u2198'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'inline-block',
      background: 'var(--bone-200)',
      color: 'var(--plum-900)',
      font: 'var(--fw-regular) 30px/1 var(--font-sans)',
      padding: '10px 16px'
    }
  }, role))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1070px 1fr',
      height: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--orange-500)',
      display: 'flex',
      gap: 96,
      alignItems: 'center',
      padding: '0 38px',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 20px/1.3 var(--font-sans)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 22px/1.3 var(--font-sans)'
    }
  }, email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 20px/1.3 var(--font-sans)'
    }
  }, "Celular"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 22px/1.3 var(--font-sans)'
    }
  }, phone))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bone-100)',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--fw-regular) 26px/1 var(--font-sans)',
      color: 'var(--plum-900)'
    }
  }, url)));
}
Object.assign(__ds_scope, { EmailSignature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/EmailSignature.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Feed.jsx
try { (() => {
/** Marco de feed: avatar con el símbolo, handle y acciones en contorno. */
function Feed({
  children,
  handle = 'capitalia',
  assetBase = '../../assets',
  scale = 1
}) {
  const items = React.Children.toArray(children);
  const [liked, setLiked] = React.useState({});
  const [saved, setSaved] = React.useState({});
  const ico = n => 'https://unpkg.com/lucide-static@0.441.0/icons/' + n + '.svg';
  const glyph = (n, on, color) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 30,
      height: 30,
      background: on ? color : '#fff',
      WebkitMaskImage: 'url(' + ico(n) + ')',
      maskImage: 'url(' + ico(n) + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + items.length + ',1fr)',
      gap: 56,
      padding: '40px 44px',
      background: '#191919'
    }
  }, items.map((el, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '999px',
      background: 'var(--bone-200)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/mark-plum.png',
    alt: "",
    style: {
      height: 28
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 24px/1 var(--font-sans)',
      color: '#fff'
    }
  }, handle)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      width: '100%',
      aspectRatio: '1',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 1080,
      height: 1080,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left'
    }
  }, el)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(s => ({
      ...s,
      [i]: !s[i]
    })),
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer'
    }
  }, glyph('heart', liked[i], 'var(--orange-500)')), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer'
    }
  }, glyph('message-circle', false)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSaved(s => ({
      ...s,
      [i]: !s[i]
    })),
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      cursor: 'pointer',
      marginLeft: 'auto'
    }
  }, glyph('bookmark', saved[i], 'var(--bone-200)'))))));
}
Object.assign(__ds_scope, { Feed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Feed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostFoto.jsx
try { (() => {
/** Post 2 — render desenfocado, copy centrado con regla vertical. (sources/06-social.png, centro) */
function PostFoto({
  title = 'Una ciudad no solo crece:',
  accent = 'SE PLANEA',
  body = 'La plusvalía no nace solo del tiempo. Nace de la vida que un lugar es capaz de generar',
  photo,
  url = 'capitalia.mx',
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'blur(9px) saturate(1.05)',
      transform: 'scale(1.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(49,30,52,.22)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/wordmark-bone.png',
    alt: "Capitalia",
    style: {
      position: 'absolute',
      left: '50%',
      top: 86,
      transform: 'translateX(-50%)',
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 110,
      right: 110,
      top: 340,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 46px/1.24 var(--font-sans)',
      color: 'var(--white)'
    }
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, accent)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 120,
      margin: '52px auto',
      background: 'rgba(255,255,255,.85)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto',
      maxWidth: '34ch',
      font: 'var(--fw-regular) 26px/1.45 var(--font-sans)',
      color: 'var(--white)'
    }
  }, body)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 92,
      transform: 'translateX(-50%)',
      background: 'var(--bone-200)',
      color: 'var(--plum-900)',
      font: 'var(--fw-medium) 26px/1 var(--font-sans)',
      padding: '16px 30px',
      borderRadius: 'var(--radius-petal)'
    }
  }, url));
}
Object.assign(__ds_scope, { PostFoto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostFoto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostPlum.jsx
try { (() => {
/** Post 1 — campo plum, foto en círculo, oferta y cápsula de URL. (sources/06-social.png, izquierda) */
function PostPlum({
  lead = 'Una ciudad planeada no solo se construye;',
  accent = 'SE VIVE',
  label = 'Mensualidades desde',
  amount = '$2,900',
  unit = 'mxn',
  photo,
  url = 'capitalia.mx',
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -120,
      top: 0,
      width: 820,
      height: 1080,
      overflow: 'hidden',
      borderRadius: '50% 0 0 50%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/wordmark-bone.png',
    alt: "Capitalia",
    style: {
      position: 'absolute',
      left: 72,
      top: 72,
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      top: 190,
      width: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 46px/1.12 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--bone-200)'
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--fw-bold) 60px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--orange-500)'
    }
  }, accent)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      bottom: 230
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 26px/1.3 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 76px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--orange-500)'
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 40px/1 var(--font-sans)',
      color: 'var(--bone-200)'
    }
  }, unit))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 72,
      bottom: 110,
      background: 'var(--bone-200)',
      color: 'var(--plum-900)',
      font: 'var(--fw-medium) 26px/1 var(--font-sans)',
      padding: '16px 30px',
      borderRadius: 'var(--radius-petal)'
    }
  }, url));
}
Object.assign(__ds_scope, { PostPlum });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostPlum.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/PostTarjeta.jsx
try { (() => {
/** Post 3 — render a sangre con tarjeta crema encima: titular, foto en pétalo y oferta. (sources/06-social.png, derecha) */
function PostTarjeta({
  head = 'Si se vive,',
  accent = 'SE VENDE',
  url = 'capitalia.mx',
  amount = '$2,900',
  amountPre = 'Desde',
  amountPost = 'al mes',
  note = 'Lotes desde 140 m²',
  delivery = 'Entrega Julio 2030',
  photo,
  cardPhoto,
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1080,
      height: 1080,
      overflow: 'hidden',
      background: 'var(--plum-900)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo || assetBase + '/img/parque-render.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo/wordmark-bone.png',
    alt: "Capitalia",
    style: {
      position: 'absolute',
      left: '50%',
      top: 80,
      transform: 'translateX(-50%)',
      height: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 170,
      right: 170,
      top: 190,
      bottom: 150,
      background: 'var(--bone-100)',
      padding: '44px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-regular) 42px/1.15 var(--font-sans)',
      color: 'var(--plum-900)'
    }
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 52px/1.05 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--plum-900)'
    }
  }, accent), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      font: 'var(--fw-medium) 22px/1 var(--font-sans)',
      color: 'var(--plum-700)'
    }
  }, url), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '30px auto 0',
      width: 400,
      height: 300,
      overflow: 'hidden',
      borderRadius: '50%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: cardPhoto || assetBase + '/img/plaza-recoleta.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      font: 'var(--fw-bold) 24px/1.2 var(--font-sans)',
      color: 'var(--plum-900)'
    }
  }, amountPre), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 62px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--orange-500)'
    }
  }, amount), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 28px/1 var(--font-sans)',
      color: 'var(--plum-900)'
    }
  }, amountPost)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--fw-bold) 24px/1.2 var(--font-sans)',
      color: 'var(--plum-900)'
    }
  }, "Lotes desde ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, note.replace('Lotes desde ', '')))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 78,
      textAlign: 'center',
      font: 'var(--fw-regular) 26px/1 var(--font-sans)',
      color: 'var(--white)'
    }
  }, "Entrega ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, delivery.replace('Entrega ', ''))));
}
Object.assign(__ds_scope, { PostTarjeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/PostTarjeta.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ArcSteps = __ds_scope.ArcSteps;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PetalFrame = __ds_scope.PetalFrame;

__ds_ns.PetalTag = __ds_scope.PetalTag;

__ds_ns.PriceCallout = __ds_scope.PriceCallout;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.BeneficiosSlide = __ds_scope.BeneficiosSlide;

__ds_ns.CierreSlide = __ds_scope.CierreSlide;

__ds_ns.CoverSlide = __ds_scope.CoverSlide;

__ds_ns.DetalleSlide = __ds_scope.DetalleSlide;

__ds_ns.EtapaSlide = __ds_scope.EtapaSlide;

__ds_ns.AdBanner = __ds_scope.AdBanner;

__ds_ns.EmailSignature = __ds_scope.EmailSignature;

__ds_ns.Feed = __ds_scope.Feed;

__ds_ns.PostFoto = __ds_scope.PostFoto;

__ds_ns.PostPlum = __ds_scope.PostPlum;

__ds_ns.PostTarjeta = __ds_scope.PostTarjeta;

})();
