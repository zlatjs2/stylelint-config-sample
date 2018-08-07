module.exports = {
  "plugins": ['stylelint-scss', 'stylelint-selector-bem-pattern'],
  "defaultSeverity": "warning",
  "rules": {
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "string-no-newline": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-max-id": 0,
    "indentation": 2,
    "selector-list-comma-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "block-opening-brace-space-before": "always",
    "declaration-block-single-line-max-declarations": 1,
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    },
    "declaration-property-value-blacklist": {
      "/^border/": ["none"]
    },
    "at-rule-blacklist": ["extend"],
    "max-nesting-depth": 3,
    "declaration-no-important": true,
    "selector-max-compound-selectors": 3,
    "selector-no-qualifying-type": true,
    "no-duplicate-selectors": true,
    "block-no-empty": true,
    "at-rule-name-case": "lower",
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-no-invalid-hex": true,
    "string-quotes": "single",
    "value-no-vendor-prefix": true,
    "value-list-comma-space-after": "always-single-line",
    "shorthand-property-no-redundant-values": true,
    "comment-whitespace-inside": "always",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "length-zero-no-unit": true,
    "number-no-trailing-zeros": true,
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-no-duplicate-properties": true,
    "scss/selector-no-redundant-nesting-selector": true
  }
};