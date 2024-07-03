import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json'

export default defineConfig({
  server: {
    port: 3001,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'navegacao',
          remotes: {
            fundamentos:
              'fundamentos@http://localhost:3000/remoteEntry.js',
          },
          shared: {
            ...dependencies,
            react: {
              singleton: true, eager: true, requiredVersion: dependencies.react
            }
          }
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});