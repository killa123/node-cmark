"use strict";

const cmark = require("bindings")("cmark.node");

/**
 * @enum ConvertOption
 * @enum {number}
 */
const ConvertOption = {
  CMARK_OPT_DEFAULT: 0,
  CMARK_OPT_SOURCEPOS: 1 << 1,
  CMARK_OPT_HARDBREAKS: 1 << 2,
  CMARK_OPT_SAFE: 1 << 3,
  CMARK_OPT_NOBREAKS: 1 << 4,
  CMARK_OPT_VALIDATE_UTF8: 1 << 9,
  CMARK_OPT_SMART: 1 << 10,
  CMARK_OPT_GITHUB_PRE_LANG: 1 << 11,
  CMARK_OPT_LIBERAL_HTML_TAG: 1 << 12
};

/**
 * convert markdown to html
 * @param {string} markdown
 * @param {ConvertOption|number} [options]
 */
exports.markdown2html = function (markdown, options) {
  if (!markdown) return;
  if (typeof markdown !== 'string' && !(markdown instanceof String)) {
    throw new TypeError('markdown is not string');
  }
  options = +options || ConvertOption.CMARK_OPT_DEFAULT;
  return cmark.toHtml(markdown, options);
};

exports.options = ConvertOption;
