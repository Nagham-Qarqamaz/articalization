import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig(() => {
    return {
        plugins: [react(), tsconfigPaths(), envCompatible()],
    };
});
