/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SANITY_TOKEN?: string;
    readonly VITE_SANITY_DATASET?: string;
    readonly VITE_APP_ENV?: string;
    readonly VITE_SANITY_ENV?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
