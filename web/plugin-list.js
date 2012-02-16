/*jslint browser: true*/
/*global window*/
var pluginsData = [
	{	name: "JS Beautify",
		description: 'Cleans up the formatting of your JavaScript code using <a href="http://jsbeautifier.org/">jsbeautifier</a>.',
		versions: {
			/*"0.2 M6/M7": [
				"/m6/beautify/jsbeautify.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/m6/beautify"
			],*/
			"0.2": [
				"/0.2/plugins/beautify/jsbeautify.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/m6/beautify"
			],
			"0.3": [
				"/0.2/plugins/beautify/jsbeautify.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/m6/beautify"
			]
		}
	},
	{	name: "Uglify",
		description: 'Minifies your JavaScript code using <a href="https://github.com/mishoo/UglifyJS">uglify-js</a>.',
		versions: {
			/*"0.2 M6/M7": [
				"/m6/uglify/uglify-plugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/m6/uglify"
			],*/
			"0.2": [
				"/0.2/plugins/uglify/uglify-plugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/uglify"
			],
			"0.3": [
				"/0.2/plugins/uglify/uglify-plugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/uglify"
			]
		}
	},
	{	name: "CSSLint",
		description: 'Provides validation and style tips on your CSS files using <a href="https://github.com/stubbornella/csslint">CSS Lint</a>. (Included with Orion by default starting in 0.4)',
		versions: {
			"0.2": [
				"/0.2/plugins/csslint/csslintPlugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/csslint"
			],
			"0.3": [
				"/0.3/plugins/csslint/csslintPlugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.3/plugins/csslint"
			]
		}
	},
	{	name: "reverse",
		description: 'A minimal plugin example used as part of a <a href="http://wiki.eclipse.org/Orion/Documentation/Developer_Guide/Simple_plugin_example">tutorial</a>.',
		versions: {
			/*"0.2 M6/M7": [
				"/m6/uglify/uglify-plugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/m6/reverse"
			],*/
			"0.2": [
				"/0.2/plugins/reverse/reversePlugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/reverse"
			],
			"0.3": [
				"/0.2/plugins/reverse/reversePlugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/reverse"
			]
		}
	},
	{	name: "Bugzilla",
		description: 'A <a href="http://dev.eclipse.org/mhonarc/lists/orion-dev/msg00688.html">Bugzilla integration</a> plugin for Orion.',
		versions: {
			"0.3": [
				"/0.3/plugins/bugzilla/plugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.3/plugins/bugzilla"
			],
			"0.4": [
				"/0.3/plugins/bugzilla/plugin.html",
				"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.3/plugins/bugzilla"
			]
		}
	},
	//{	name: "language.js",
	//	description: 'Provides content assist suggestions JavaScript identifiers using <a href="http://languagejs.com/">language.js</a>.',
	//	experimental: true,
	//	versions: {
	//		"0.2": [
	//			"/0.2/plugins/language/languagejsPlugin.html",
	//			"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/language/"
	//		],
	//		"0.3": [
	//			"/0.2/plugins/language/languagejsPlugin.html",
	//			"https://github.com/mamacdon/mamacdon.github.com/tree/master/0.2/plugins/language/"
	//		]
	//	}
	//},
	{	name: "JavaScript hierarchical outline",
		description: 'Provides a simple tree view of the functions in a JavaScript file.',
		experimental: true,
		versions: {
			"0.3": [
				"http://mamacdon.github.com/outliner/outlinerPlugin.html",
				"https://github.com/mamacdon/outliner"
			],
			"0.4": [
				"http://mamacdon.github.com/outliner/outlinerPlugin.html",
				"https://github.com/mamacdon/outliner"
			]
		}
	},
	{	name: "Nonymous outline",
		description: 'Provides a tree view of JavaScript functions using the \"Function-Object Consumption\" algorithm to generate meaningful names for anonymous functions.',
		experimental: true,
		versions: {
			"0.3": [
				"http://johnjbarton.github.com/outliner/nonymousPlugin.html",
				"https://github.com/johnjbarton/outliner"
			],
			"0.4": [
				"http://johnjbarton.github.com/outliner/nonymousPlugin.html",
				"https://github.com/johnjbarton/outliner"
			]
		}
	},
	{	name: "CodeMirror highlighting",
		description: 'Uses <a href="http://codemirror.net/">CodeMirror</a> modes to highlight your code.',
		experimental: true,
		versions: {
			"0.4": [
				"http://mamacdon.github.com/orion-codemirror/codeMirrorPlugin.html",
				"https://github.com/mamacdon/orion-codemirror"
			]
		}
	},
	{	name: "HTML Outline",
		description: 'Provides a hierarchical outline of the elements in an HTML file.',
		versions: {
			"0.4": [
				"http://jarthorn.github.com/html-tools/htmlOutlinePlugin.html",
				"https://github.com/jarthorn/html-tools"
			]
		}
	},
	{	name: "Esprima outline",
		description: 'Uses the <a href="http://esprima.org">esprima</a> JavaScript parser to provide a detailed outline of your JavaScript code.',
		versions: {
			"0.4": [
				"http://aclement.github.com/esprima-outline/esprimaOutlinerPlugin.html",
				"https://github.com/aclement/esprima-outline"
			]
		}
	}];

var TARGET = "target", VERSION = "version";

// TODO listen to hashChange
document.addEventListener("DOMContentLoaded", function() {
	function getPlugins(params) {
		var version = params[VERSION], plugins = [];
		for (var i=0; i < pluginsData.length; i++) {
			var plugin = pluginsData[i];
			if (!version || plugin.versions[version]) {
				plugins.push(plugin);
			}
		}
		return plugins;
	}
	function getVersions(plugins) {
		function keys(obj) {
			var a = [];
			for (var p in obj) { if (Object.hasOwnProperty.call(obj, p)) { a.push(p); } }
			return a;
		}
		var versions = {};
		for (var i=0; i < plugins.length; i++) {
			var pluginVersions = keys(plugins[i].versions);
			for (var j=0; j < pluginVersions.length; j++) {
				versions[pluginVersions[j]] = null;
			}
		}
		return keys(versions);
	}
	
	function parseParameters() {
		// TODO URITemplates?
		var params = {};
		var hash = window.location.hash && window.location.hash.substr(1);
		if (hash) {
			var array = hash.split(/\?|,|&|(=)/);
			for (var i=0; i < array.length; i++) {
				var key = array[i];
				if (key && array[i + 1] === "=") {
					params[key] = array[i + 2];
					i++;
				}
			}
		}
		return params;
	}

	function createTbody(tableId, plugins, params) {
		function createHeaderRow(table, versions) {
			var headerRow = table.insertRow(-1);
			var th = document.createElement("th");
			th.innerHTML = "";
			headerRow.appendChild(th);
			if (params[VERSION]) {
				th = document.createElement("th");
				th.innerHTML = "";
				headerRow.appendChild(th);
			} else {
				for (var i=0; i < versions.length; i++) {
					th = document.createElement("th");
					th.innerHTML = "Orion " + versions[i];
					headerRow.appendChild(th);
				}
			}
		}
		function getInstallURL(target, plugin, version) {
			function qualify(url) {
				var a = document.createElement('a');
				a.href = url;
				return a.href;
			}
			var url = plugin.versions[version][0];
			return target + "#plugins?installPlugin=" + qualify(url);
		}
		function generatePluginCell(cell, plugin, versionId) {
			var html = ""; 
			var pluginVersion = plugin.versions[versionId];
			if (params[TARGET] && pluginVersion) {
				var url = getInstallURL(params[TARGET], plugin, versionId);
				html = '<a href="' + url + '" title="Install into Orion">Install</a>';
			} else {
				if (pluginVersion) {
					var installURL = pluginVersion[0], sourceURL = pluginVersion[1];
					html = '<div class="pluginURL"><a href="' + installURL + '">Plugin</a></div>';
					if (sourceURL) {
						html += '<div class="pluginSource"><a href="' + sourceURL + '">Source</a></div>';
					}
				} else {
					html = "&ndash;";
					cell.title = "Not available for Orion " + versionId;
				}
			}
			cell.innerHTML = html;
		}
		
		var table = document.getElementById(tableId);
		var versions = getVersions(plugins);
		createHeaderRow(table, versions);
		plugins.sort(function(p1, p2) {
			return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase());
		});
		for (var i=0; i < plugins.length; i++) {
			var plugin = plugins[i];
			var row = table.insertRow(-1);
			var desc = row.insertCell(-1);
			desc.innerHTML = '<div class="pluginName">' + plugin.name + '</div>' + 
					'<div class="pluginDesc">' + plugin.description + '</div>';
			var cell, versionId;
			if (params[VERSION]) {
				cell = row.insertCell(-1);
				cell.className = "dl";
				versionId = params[VERSION];
				generatePluginCell(cell, plugin, versionId);
			} else {
				for (var j=0; j < versions.length; j++) {
					cell = row.insertCell(-1);
					cell.className = "dl";
					versionId = versions[j];
					generatePluginCell(cell, plugin, versionId);
				}
			}
		}
	}

	var params = parseParameters();
	createTbody("pluginTable", getPlugins(params), params);
}, false);