exports.sourceNodes = async (
  { actions, getNode, getNodes, createNodeId, store, cache, reporter },
  pluginOptions
) => {
  const { createNode, deleteNode, touchNode, setPluginStatus } = actions

