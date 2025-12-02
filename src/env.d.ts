/// <reference path="../.astro/types.d.ts" />

declare global {
  interface SDKTypeMode {
    strict: true;
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_WIX_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
