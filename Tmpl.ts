module Tmpl {

	export class SafeString extends String {
		constructor(private html: string) {
			super(html);
		}

		public getHtml() {
			return this.html;
		}
	}

	function isSafeString(str: any): str is SafeString {
		// return str && str.constructor && str.constructor.name === 'SafeString'
		return str instanceof SafeString;
	}

	var entityMap: { [s: string]: string } = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		"/": '&#x2F;'
	};

	/**
	 * Helper function used to escape the user's HTML input before rendering template.
	 */
	function escapeHtml(str: any): string {
		if (isSafeString(str)) {
			// This was already escaped so just return HTML
			return str.getHtml();
		}
		// We use String constructor for non-string types such as number
		// Example from here: http://stackoverflow.com/a/12034334/266535
		return String(str).replace(/[&<>"'\/]/g, function(s) {
			return entityMap[s];
		});
	}

	/**
	* Print the template and escape values if they have not been escaped yet.
	* This is only to be used with ES6 Tagged Template Strings.
	*/
	export function print(strings: string[], ...values: any[]) {
		var result = strings[0];
		var substitutions = values;
		for (var i = 0; i < substitutions.length; i++) {
			result += escapeHtml(substitutions[i]) + strings[i + 1];
		}
		return new SafeString(result);
	}

	function printNothing(strings: string[], ...values: any[]) {
		return new SafeString('');
	}

	/**
	 * Print a list of items, similar to Array.map
	 */
	export function printEach<T>(list: T[], fn: (item: T, i: number) => SafeString) {
		var s = '';
		for (var i = 0; i < list.length; i++) {
			s += fn(list[i], i).getHtml() + '  \n';
		}
		return new SafeString(s);
	}

	/**
	 * Print if the condition is true
	 */
	export function printIf(b: boolean) {
		return b ? print : printNothing;
	}

	/**
	 * Print if the condition is false
	 */
	export function printUnless(b: boolean) {
		return printIf(!b);
	}
}