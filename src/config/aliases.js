const aliases = (prefix = `src`) => ({
  '@components': `${prefix}/components`,
  '@constants': `${prefix}/constants`,
  '@store': `${prefix}/store`,
  '@reducers': `${prefix}/reducers`,
  '@utils': `${prefix}/utils`,
  '@actions': `${prefix}/actions`,
});

module.exports = aliases;