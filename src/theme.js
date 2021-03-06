const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = (hex) => getVariant(hex, style);

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const primer = getColors(style);
  return {
    name: name,
    colors: {
      focusBorder: pick({ light: primer.blue[4], dark: primer.blue[3] }),
      foreground: pick({ light: primer.gray[7], dark: primer.gray[6] }),
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],

      "textLink.foreground": pick({ light: primer.blue[5], dark: primer.blue[6] }),
      "textLink.activeForeground": pick({ light: primer.blue[6], dark: primer.blue[7] }),
      "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.border": primer.gray[2],
      "textCodeBlock.background": primer.gray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],

      "button.background": pick({ light: "#159739", dark: primer.green[2] }),
      "button.foreground": pick({ light: primer.white, dark: primer.green[8] }),
      "button.hoverBackground": pick({ light: "#138934", dark: primer.green[3] }),

      "checkbox.background": pick({ light: primer.gray[0], dark: primer.gray[2] }),
      "checkbox.border": pick({ light: primer.gray[3], dark: primer.white }),

      "dropdown.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "dropdown.border": pick({ light: primer.gray[2], dark: primer.white }),
      "dropdown.foreground": primer.gray[9],
      "dropdown.listBackground": pick({ light: primer.white, dark: primer.gray[0] }),

      "input.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "input.border": pick({ light: primer.gray[2], dark: primer.white }),
      "input.foreground": primer.gray[9],
      "input.placeholderForeground": pick({ light: primer.gray[4], dark: primer.gray[5] }),

      "badge.foreground": pick({ light: primer.blue[6], dark: primer.blue[7] }),
      "badge.background": pick({ light: primer.blue[1], dark: primer.blue[2] }),

      "progressBar.background": primer.blue[4],

      "titleBar.activeForeground": primer.gray[9],
      "titleBar.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "titleBar.inactiveForeground": primer.gray[5],
      "titleBar.inactiveBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "titleBar.border": pick({ light: primer.gray[2], dark: primer.white }),

      "activityBar.foreground": primer.gray[9],
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "activityBarBadge.foreground": pick({ light: primer.white, dark: primer.black }),
      "activityBarBadge.background": pick({ light: primer.blue[4], dark: primer.blue[4] }),
      "activityBar.activeBorder": "#f9826c",
      "activityBar.border": pick({ light: primer.gray[2], dark: primer.white }),

      "sideBar.foreground": primer.gray[7],
      "sideBar.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "sideBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "sideBarTitle.foreground": primer.gray[9],
      "sideBarSectionHeader.foreground": primer.gray[9],
      "sideBarSectionHeader.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "sideBarSectionHeader.border": pick({ light: primer.gray[2], dark: primer.white }),

      "list.hoverForeground": primer.gray[9],
      "list.inactiveSelectionForeground": primer.gray[9],
      "list.activeSelectionForeground": primer.gray[9],
      "list.hoverBackground": pick({ light: "#ebf0f4", dark: primer.gray[0] }),
      "list.inactiveSelectionBackground": pick({ light: "#e8eaed", dark: "#282e34" }),
      "list.activeSelectionBackground": pick({ light: "#e2e5e9", dark: "#39414a" }),
      "list.inactiveFocusBackground": pick({ light: primer.blue[1], dark: "#1d2d3e" }),
      "list.focusBackground": pick({ light: "#cce5ff", dark: primer.blue[2] }),

      "tree.indentGuidesStroke": pick({ light: primer.gray[2], dark: primer.gray[1] }),
      "notificationCenterHeader.background": primer.gray[0],
      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": primer.gray[9],
      "quickInput.background": primer.gray[0],
      "quickInput.foreground": primer.gray[9],

      "statusBar.foreground": primer.gray[6],
      "statusBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "statusBar.noFolderBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.debuggingBackground": auto("#f9826c"),
      "statusBar.debuggingForeground": primer.white,

      "editorGroupHeader.tabsBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "editorGroupHeader.tabsBorder": pick({ light: primer.gray[2], dark: primer.white }),
      "editorGroup.border": pick({ light: primer.gray[2], dark: primer.white }),

      "tab.activeForeground": primer.gray[9],
      "tab.inactiveForeground": primer.gray[5],
      "tab.inactiveBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "tab.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.hoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedHoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.border": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.unfocusedActiveBorderTop": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.activeBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedActiveBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.activeBorderTop": "#f9826c",

      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": primer.gray[9],
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      "breadcrumbPicker.background": pick({ light: primer.gray[0], dark: "#2b3036" }),

      "editor.foreground": primer.gray[9],
      "editor.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "editor.foldBackground": pick({ light: primer.gray[0], dark: "#282e33" }),
      "editor.lineHighlightBackground": pick({ light: primer.gray[1], dark: "#2b3036" }),
      "editorLineNumber.foreground": pick({ light: "#1b1f234d", dark: primer.gray[2] }),
      "editorLineNumber.activeForeground": primer.gray[9],
      "editorIndentGuide.background": pick({ light: "#eff2f6", dark: primer.gray[1] }),
      "editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: primer.gray[2] }),
      "editorWhitespace.foreground": pick({ light: primer.gray[4], dark: primer.gray[4] }),
      "editorCursor.foreground": primer.blue[7],
      "editor.inactiveSelectionBackground": pick({ light: "#0366d611", dark: "#79b8ff11" }),
      "editor.selectionBackground": pick({ light: "#0366d625", dark: "#2188ff33" }),
      "editor.wordHighlightBackground": pick({ light: "#0366d622", dark: "#2188ff22" }),
      "editor.findMatchBackground": pick({ light: primer.yellow[4], dark: "#ffd33d44" }),
      "editor.findMatchHighlightBackground": pick({ light: "#ffdf5d66", dark: "#ffd33d22" }),
      "editorBracketMatch.background": pick({ light: primer.blue[2], dark: primer.blue[3] }),
      "editorBracketMatch.border": pick({ light: primer.blue[2], dark: primer.blue[3] }),
      "editorGutter.modifiedBackground": pick({ light: primer.blue[4], dark: primer.blue[5] }),
      "editorGutter.addedBackground": pick({ light: primer.green[5], dark: primer.green[4] }),
      "editorGutter.deletedBackground": primer.red[5],

      "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74511" }),
      "diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#d73a4918" }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
      "scrollbarSlider.background": pick({ light: "#959da533", dark: "#6a737d33" }),
      "scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#6a737d44" }),
      "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88" }),
      "editorOverviewRuler.border": primer.white,

      "panel.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "panel.border": pick({ light: primer.gray[2], dark: primer.white }),
      "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeForeground": primer.gray[9],
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": pick({ light: primer.gray[2], dark: primer.gray[1] }),

      "terminal.foreground": primer.gray[6],

      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.orange[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],

      "debugToolBar.background": pick({ light: primer.white, dark: "#2b3036" }),
      "editor.stackFrameHighlightBackground": primer.yellow[1],
      "editor.focusedStackFrameHighlightBackground": primer.yellow[2],
      "settings.headerForeground": primer.gray[9],
      "settings.modifiedItemIndicator": primer.blue[4],
      "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({ light: primer.gray[5], dark: primer.gray[4] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
        ],
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: pick({ light: primer.red[5], dark: primer.red[6] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          foreground: pick({ light: primer.red[5], dark: primer.red[6] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "support",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.property-name",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          foreground: primer.orange[6],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          foreground: primer.green[6],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: primer.yellow[9],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          foreground: primer.green[6],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: primer.blue[8],
          fontStyle: "underline",
        },
      },
    ],
  };
}

module.exports = getTheme;
