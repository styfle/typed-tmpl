module Tmpl {

	export class SafeString extends String {
		constructor(public html: string) {
			super(html);
		}

		public toString() {
			return this.html;
		}
	}

//	function isSafeString(str: any): str is SafeString {
//      return str && str.constructor && str.constructor.name === 'SafeString'
//	}

	/**
	 * Helper function used to sanitize the user's HTML input before rendering template
	 */
	function sanitize(str: any): string {
		if (str instanceof SafeString) {
			// This was already converted to HTML so return HTML
			return (<SafeString>str).html;
		}
		// We use String constructor for non-string types such as number
		// Replace example from https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en
		return String(str)
		.replace('<', '&lt;')
		.replace('>', '&gt;')
		.replace("'", '&#39;')
      	.replace('"', '&quot;')
		.replace('&', '&amp;');
	}

	/**
	* Print the template and sanitize values if they have not been sanitzed yet.
	* This is only to be used with ES6 Tagged Template Strings.
	*/
	export function print(strings: string[], ...values: any[]) {
		var result = strings[0];
		var substitutions = values;
		for (var i = 0; i < substitutions.length; i++) {
        	result += sanitize(substitutions[i]) + strings[i + 1];
		}
		return new SafeString(result);
	}
}