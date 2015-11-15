var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tmpl;
(function (Tmpl) {
    var SafeString = (function (_super) {
        __extends(SafeString, _super);
        function SafeString(html) {
            _super.call(this, html);
            this.html = html;
        }
        SafeString.prototype.getHtml = function () {
            return this.html;
        };
        return SafeString;
    })(String);
    Tmpl.SafeString = SafeString;
    function isSafeString(str) {
        return str instanceof SafeString;
    }
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };
    function escapeHtml(str) {
        if (isSafeString(str)) {
            return str.getHtml();
        }
        return String(str).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        });
    }
    function print(strings) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var result = strings[0];
        var substitutions = values;
        for (var i = 0; i < substitutions.length; i++) {
            result += escapeHtml(substitutions[i]) + strings[i + 1];
        }
        return new SafeString(result);
    }
    Tmpl.print = print;
    function printEach(list, fn) {
        var s = '';
        for (var i = 0; i < list.length; i++) {
            s += fn(list[i], i).getHtml() + '  \n';
        }
        return new SafeString(s);
    }
    Tmpl.printEach = printEach;
})(Tmpl || (Tmpl = {}));
