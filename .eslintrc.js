"use strict";

module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "overrides": [
    {
      "files": ".eslintrc.js",
      "env": {
        "node": true
      }
    },
    {
      "files": "vite.config.js",
      "parserOptions": {
        "sourceType": "module"
      },
      "env": {
        "es2021": true
      }
    },
    {
      "files": "*.jsx",
      "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "env": {
        "browser": true,
        "es2021": true
      }
    }
  ],
  "rules": {
    "react/boolean-prop-naming": [
      "error",
      {
        "message": "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})",
        "validateNested": true
      }
    ],
    "react/button-has-type": [
      "error",
      {
        "button": true,
        "reset": true,
        "submit": true
      }
    ],
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": true
      }
    ],
    "react/destructuring-assignment": [
      "error",
      "always"
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "react/hook-use-state": [
      "error"
    ],
    "react/iframe-missing-sandbox": [
      "error"
    ],
    "react/no-access-state-in-setstate": [
      "error"
    ],
    "react/no-adjacent-inline-elements": [
      "error"
    ],
    "react/no-array-index-key": [
      "error"
    ],
    "react/no-arrow-function-lifecycle": [
      "error"
    ],
    "react/no-children-prop": [
      "error",
      {
        "allowFunctions": false
      }
    ],
    "react/no-danger": [
      "error"
    ],
    "react/no-danger-with-children": [
      "error"
    ],
    "react/no-deprecated": [
      "error"
    ],
    "react/no-did-mount-set-state": [
      "error"
    ],
    "react/no-did-update-set-state": [
      "error"
    ],
    "react/no-direct-mutation-state": [
      "error"
    ],
    "react/no-find-dom-node": [
      "error"
    ],
    "react/no-invalid-html-attribute": [
      "error"
    ],
    "react/no-is-mounted": [
      "error"
    ],
    "react/no-multi-comp": [
      "error",
      {
        "ignoreStateless": false
      }
    ],
    "react/no-namespace": [
      "error"
    ],
    "react/no-redundant-should-component-update": [
      "error"
    ],
    "react/no-render-return-value": [
      "error"
    ],
    "react/no-set-state": [
      "off"
    ],
    "react/no-string-refs": [
      "error"
    ],
    "react/no-this-in-sfc": [
      "error"
    ],
    "react/no-typos": [
      "error"
    ],
    "react/no-unescaped-entities": [
      "error"
    ],
    "react/no-unknown-property": [
      "error"
    ],
    "react/no-unsafe": [
      "error",
      {
        "checkAliases": true
      }
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        "allowAsProps": false
      }
    ],
    "react/no-unused-class-component-methods": [
      "error"
    ],
    "react/no-unused-prop-types": [
      "error"
    ],
    "react/no-unused-state": [
      "error"
    ],
    "react/no-will-update-set-state": [
      "error"
    ],
    "react/prefer-es6-class": [
      "error"
    ],
    "react/prefer-read-only-props": [
      "error"
    ],
    "react/prefer-stateless-function": [
      "error",
      {
        "ignorePureComponents": false
      }
    ],
    "react/prop-types": [
      "error",
      {
        "skipUndeclared": false
      }
    ],
    "react/react-in-jsx-scope": [
      "error"
    ],
    "react/require-default-props": [
      "error"
    ],
    "react/require-optimization": [
      "error"
    ],
    "react/require-render-return": [
      "error"
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/sort-comp": [
      "error"
    ],
    "react/sort-prop-types": [
      "error"
    ],
    "react/state-in-constructor": [
      "error"
    ],
    "react/static-property-placement": [
      "error"
    ],
    "react/style-prop-object": [
      "error"
    ],
    "react/void-dom-elements-no-children": [
      "error"
    ],
    "react/jsx-boolean-value": [
      "error",
      "never"
    ],
    "react/jsx-child-element-spacing": [
      "error"
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      "after-props"
    ],
    "react/jsx-closing-tag-location": [
      "error"
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "never",
        "children": "never",
        "propElementValues": "always"
      }
    ],
    "react/jsx-curly-newline": [
      "error",
      {
        "multiline": "require",
        "singleline": "forbid"
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never",
        "children": true
      }
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-filename-extension": [
      "error"
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop"
    ],
    "react/jsx-fragments": [
      "error",
      "syntax"
    ],
    "react/jsx-handler-names": [
      "error",
      {
        "eventHandlerPrefix": "on",
        "eventHandlerPropPrefix": "on",
        "checkLocalVariables": true,
        "checkInlineFunction": true
      }
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        "checkAttributes": true,
        "indentLogicalExpressions": true
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-key": [
      "error",
      {
        "checkFragmentShorthand": true,
        "checkKeyMustBeforeSpread": true,
        "warnOnDuplicates": true
      }
    ],
    "react/jsx-newline": [
      "error",
      {
        "prevent": true
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreDOMComponents": false,
        "ignoreRefs": false,
        "allowArrowFunctions": false,
        "allowFunctions": false,
        "allowBind": false
      }
    ],
    "react/jsx-no-comment-textnodes": [
      "error"
    ],
    "react/jsx-no-constructed-context-values": [
      "error"
    ],
    "react/jsx-no-duplicate-props": [
      "error"
    ],
    "react/jsx-no-script-url": [
      "error"
    ],
    "react/jsx-no-target-blank": [
      "error",
      {
        "allowReferrer": false,
        "enforceDynamicLinks": "always",
        "warnOnSpreadAttributes": true,
        "links": true,
        "forms": true
      }
    ],
    "react/jsx-no-undef": [
      "error",
      {
        "allowGlobals": true
      }
    ],
    "react/jsx-no-useless-fragment": [
      "error",
      {
        "allowExpressions": false
      }
    ],
    "react/jsx-one-expression-per-line": [
      "error",
      {
        "allow": "literal"
      }
    ],
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": false,
        "allowNamespace": true,
        "allowLeadingUnderscore": false,

      }
    ],
    "react/jsx-props-no-multi-spaces": [
      "error"
    ],
    "react/jsx-space-before-closing": [
      "error",
      "always"
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        "closingSlash": "never",
        "beforeSelfClosing": "always",
        "afterOpening": "never",
        "beforeClosing": "never"
      }
    ],
    "react/jsx-uses-react": [
      "error"
    ],
    "react/jsx-uses-vars": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "react-hooks/exhaustive-deps": [
      "error"
    ],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": false,
        "checkForEach": true
      }
    ],
    "constructor-super": [
      "error"
    ],
    "for-direction": [
      "error"
    ],
    "getter-return": [
      "error",
      {
        "allowImplicit": false
      }
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-await-in-loop": [
      "error"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-constant-condition": [
      "error",
      {
        "checkLoops": true
      }
    ],
    "no-constructor-return": [
      "error"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-dupe-else-if": [
      "error"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-duplicate-imports": [
      "error",
      {
        "includeExports": true
      }
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-import-assign": [
      "error"
    ],
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": [
      "error",
      "allowConstructorFlags"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-loss-of-precision": [
      "error"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-new-symbol": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-promise-executor-return": [
      "error"
    ],
    "no-prototype-builtins": [
      "error"
    ],
    "no-self-assign": [
      "error"
    ],
    "no-self-compare": [
      "error"
    ],
    "no-setter-return": [
      "error"
    ]
  }
};
