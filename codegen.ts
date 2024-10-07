
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://hotham.vn/wordpress/rYkOy1HCCRD0JZZcrshVYaUR39QfcG15QWUC437BMM5Pk3gNLu",
  generates: {
    "types/wordpress.ts": {
      plugins: ["typescript", "typescript-document-nodes"]
    }
  }
};

export default config;
