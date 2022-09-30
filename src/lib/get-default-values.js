import capitalize from './capitalize'

const getDefaultValues = (data) => {
  const pluginSlug = String(data.plugin?.slug).length ? String(data.plugin?.slug).toLowerCase() : 'amazing-plugin'
  const pluginNameInstance = pluginSlug.replace(/-/gi, '_')
  const pluginAuthor = String(data.author?.name).length ? data.author?.name : 'Plugin Author'
  const pluginAuthorEmail = String(data.author?.email).length ? data.author?.email : 'my@email.tld'

  const defaultValues = {
    pluginSlug: pluginSlug,
    pluginName: String(data.plugin?.name).length ? data.plugin?.name : 'Amazing Plugin',
    pluginURI: String(data.plugin?.uri).length ? data.plugin?.uri : 'http://example.com/amazing-plugin-uri/',
    pluginAuthorURI: String(data.author?.uri).length ? data.author?.uri : 'http://mydomain.tld',
    pluginNamePackage: capitalize(pluginSlug),
    pluginNameInstance: pluginNameInstance,
    pluginNameVersion: (pluginNameInstance + '_VERSION').toUpperCase(),
    pluginAuthor: pluginAuthor,
    pluginAuthorFull: pluginAuthor + ' <' + pluginAuthorEmail + '>',
    pluginDescription : String(data.plugin?.description).length ? data.plugin?.description : 'This is a description of the plugin.',
  }

  return defaultValues
}

export default getDefaultValues
