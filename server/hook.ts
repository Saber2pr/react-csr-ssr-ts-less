import csshook from "css-modules-require-hook"
import { parse } from "postcss-less"
import assethook from "asset-require-hook"

csshook({
  generateScopedName: "[name]__[local]___[hash:base64:5]",
  extensions: ".less",
  processorOpts: { parser: parse }
})

assethook({
  extensions: ["png", "jpg"]
})
