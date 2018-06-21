/**
 * Useful Regular Expressions
 */


/**
 * URL Parser
 */
var urlParser = new RegExp(/([a-z]{1,2}tps?):\/\/((?:(?!(?:\/|#|\?|&)).)+)(?:(\/(?:(?:(?:(?!(?:#|\?|&)).)+\/))?))?(?:((?:(?!(?:\.|$|\?|#)).)+))?(?:(\.(?:(?!(?:\?|$|#)).)+))?(?:(\?(?:(?!(?:$|#)).)+))?(?:(#.+))?/, "g");

/**
 * tripleQuotedStrings
 */
var tripleQuotedStrings = new RegExp(/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, "");

/**
 * multiLineStrings
 */
var multiLineStrings1 = new RegExp(/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, "");
var multiLineStrings2 = new RegExp(/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, "");

/**
 * verbatimStrings
 */
var verbatimStrings = new RegExp(/^@\"(?:[^\"]|\"\")*(?:\"|$)/, "");

/**
 * cStyleComments
 */
var cStyleComments1 = new RegExp(/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, "");
var cStyleComments2 = new RegExp(/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, "");
var cStyleComments3 = new RegExp(/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, "");
var cStyleComments4 = new RegExp(/^#[^\r\n]*/, "");
var cStyleComments5 = new RegExp(/^\/\/[^\r\n]*/, "");
var cStyleComments6 = new RegExp(/^\/\*[\s\S]*?(?:\*\/|$)/, "");
var cStyleComments7 = new RegExp(/^.[^\\s\\w.$@'\"`/\\\\]*/, "");

/**
 * regexLiterals
 */
var regexLiterals1 = new RegExp(/^.[^\\s\\w.$@'\"`/\\\\]*(?!s*\/)/, "");
var regexLiterals2 = new RegExp(/^@[a-z_$][a-z_$@0-9]*/, "i");
var regexLiterals3 = new RegExp(/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, "");
var regexLiterals4 = new RegExp(/^[a-z_$][a-z_$@0-9]*/, "i");
var regexLiterals5 = new RegExp(/^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*/, "i");
var regexLiterals6 = new RegExp(/^\\[\s\S]?/, "");

/**
 * scriptTags
 */
var scriptTags = new RegExp(/<.*?script.*\/?>/, "ig");

/**
 * USD Currency
 */
var usdCurrency = new RegExp(/^(\$)?([1-9]{1}[0-9]{0,2})(\,\d{3})*(\.\d{2})?$|^(\$)?([1-9]{1}[0-9]{0,2})(\d{3})*(\.\d{2})?$|^(0)?(\.\d{2})?$|^(\$0)?(\.\d{2})?$|^(\$\.)(\d{2})?$/, "mg");

/**
 * Comma Separated Values
 */
var commaSeparatedValues = new RegExp(/((\\\\)|(\\,)|[^,])+/, "g");

/**
 * CSS Colour Codes
 */
var cssColourCodes = new RegExp(/#(?:[a-f\d]{3}){1,2}\b|rgb\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){2}\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)|\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%(?:\s*,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%){2})\s*\)|hsl\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2}\)|(?:rgba\((?:(?:\s*0*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,){3}|(?:\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*,){3})|hsla\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%\s*){2},)\s*0*(?:1|0(?:\.\d+)?)\s*\)/, "ig");

/**
 * HTML Tags
 */
var htmlTags = new RegExp(/(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)/, "g");

/**
 * Non-ASCII
 */
var nonAscii = new RegExp(/[^\x00-\x7F]+\ *(?:[^\x00-\x7F]| )*/, "g");

/**
 * IPv4 Adresses
 */
var ipv4Adresses = new RegExp(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/, "ig");

/**
 * Email Adresses (per RFC2822 standards)
 */
var emailAdresses = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, "g");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");

/**
 * 
 */
var _ = new RegExp(, "");
