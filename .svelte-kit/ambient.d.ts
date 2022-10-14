
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const npm_config_leveldown_binary_host_mirror: string;
	export const npm_config_couchbase_binary_host_mirror: string;
	export const NVMW_NODEJS_ORG_MIRROR: string;
	export const MANPATH: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const npm_config_zmq_prebuilt_binary_host_mirror: string;
	export const npm_config_flow_bin_binary_host_mirror: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_config_gl_binary_host_mirror: string;
	export const npm_config_metrics_registry: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const npm_config_chromedriver_cdnurl: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_config_grpc_node_binary_host_mirror: string;
	export const COLOR: string;
	export const npm_config_sodium_prebuilt_binary_host_mirror: string;
	export const NODIST_IOJS_MIRROR: string;
	export const TERM_SESSION_ID: string;
	export const npm_config_noproxy: string;
	export const npm_config_registry: string;
	export const npm_config_local_prefix: string;
	export const ZSH: string;
	export const NVMW_NPM_MIRROR: string;
	export const USER: string;
	export const npm_config_phantomjs_cdnurl: string;
	export const npm_config_globalconfig: string;
	export const IOJS_ORG_MIRROR: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_config_utp_native_binary_host_mirror: string;
	export const npm_config_node_tk5_binary_host_mirror: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_config_hackrf_binary_host_mirror: string;
	export const PAGER: string;
	export const LSCOLORS: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const npm_config_mknod_binary_host_mirror: string;
	export const npm_config_engine_strict: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const npm_config_sqlite3_binary_site: string;
	export const NVM_NODEJS_ORG_MIRROR: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_config_node_sqlite3_binary_host_mirror: string;
	export const NODIST_NODE_MIRROR: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const npm_config_nodegit_binary_host_mirror: string;
	export const XPC_FLAGS: string;
	export const npm_config_rabin_binary_host_mirror: string;
	export const npm_config_electron_mirror: string;
	export const npm_config_debug_binary_host_mirror: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const npm_config_sass_binary_site: string;
	export const XPC_SERVICE_NAME: string;
	export const NVMW_IOJS_ORG_MIRROR: string;
	export const SHLVL: string;
	export const HOME: string;
	export const HOMEBREW_PREFIX: string;
	export const npm_config_leveldown_hyper_binary_host_mirror: string;
	export const npm_config_disturl: string;
	export const npm_config_cache: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const NODEJS_ORG_MIRROR: string;
	export const npm_config_user_agent: string;
	export const NVM_IOJS_ORG_MIRROR: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const npm_config_git4win_mirror: string;
	export const npm_config_fse_binary_host_mirror: string;
	export const npm_config_utf_8_validate_binary_host_mirror: string;
	export const npm_config_python_mirror: string;
	export const npm_config_profiler_binary_host_mirror: string;
	export const npm_config_operadriver_cdnurl: string;
	export const SECURITYSESSIONID: string;
	export const npm_config_fuse_bindings_binary_host_mirror: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const npm_config_puppeteer_download_host: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_config_leveldown_binary_host_mirror: string;
		npm_config_couchbase_binary_host_mirror: string;
		NVMW_NODEJS_ORG_MIRROR: string;
		MANPATH: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		npm_config_zmq_prebuilt_binary_host_mirror: string;
		npm_config_flow_bin_binary_host_mirror: string;
		SHELL: string;
		TERM: string;
		npm_config_gl_binary_host_mirror: string;
		npm_config_metrics_registry: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		npm_config_chromedriver_cdnurl: string;
		TERM_PROGRAM_VERSION: string;
		npm_config_grpc_node_binary_host_mirror: string;
		COLOR: string;
		npm_config_sodium_prebuilt_binary_host_mirror: string;
		NODIST_IOJS_MIRROR: string;
		TERM_SESSION_ID: string;
		npm_config_noproxy: string;
		npm_config_registry: string;
		npm_config_local_prefix: string;
		ZSH: string;
		NVMW_NPM_MIRROR: string;
		USER: string;
		npm_config_phantomjs_cdnurl: string;
		npm_config_globalconfig: string;
		IOJS_ORG_MIRROR: string;
		SSH_AUTH_SOCK: string;
		npm_config_utp_native_binary_host_mirror: string;
		npm_config_node_tk5_binary_host_mirror: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_config_hackrf_binary_host_mirror: string;
		PAGER: string;
		LSCOLORS: string;
		PATH: string;
		npm_package_json: string;
		npm_config_mknod_binary_host_mirror: string;
		npm_config_engine_strict: string;
		_: string;
		LaunchInstanceID: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		npm_config_sqlite3_binary_site: string;
		NVM_NODEJS_ORG_MIRROR: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		npm_config_node_sqlite3_binary_host_mirror: string;
		NODIST_NODE_MIRROR: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_name: string;
		LANG: string;
		npm_config_nodegit_binary_host_mirror: string;
		XPC_FLAGS: string;
		npm_config_rabin_binary_host_mirror: string;
		npm_config_electron_mirror: string;
		npm_config_debug_binary_host_mirror: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		npm_config_sass_binary_site: string;
		XPC_SERVICE_NAME: string;
		NVMW_IOJS_ORG_MIRROR: string;
		SHLVL: string;
		HOME: string;
		HOMEBREW_PREFIX: string;
		npm_config_leveldown_hyper_binary_host_mirror: string;
		npm_config_disturl: string;
		npm_config_cache: string;
		LESS: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		NODEJS_ORG_MIRROR: string;
		npm_config_user_agent: string;
		NVM_IOJS_ORG_MIRROR: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		npm_config_git4win_mirror: string;
		npm_config_fse_binary_host_mirror: string;
		npm_config_utf_8_validate_binary_host_mirror: string;
		npm_config_python_mirror: string;
		npm_config_profiler_binary_host_mirror: string;
		npm_config_operadriver_cdnurl: string;
		SECURITYSESSIONID: string;
		npm_config_fuse_bindings_binary_host_mirror: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		npm_config_puppeteer_download_host: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
