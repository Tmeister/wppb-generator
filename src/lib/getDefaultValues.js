import capitalize from './capitalize'

const getDefaultValues = (data, type = 'plugin') => {
  if (type === 'theme') {
    return getThemeDefaultValues(data)
  }

  return getPluginDefaultValues(data)
}

const getThemeDefaultValues = (data) => {
  console.log(data)
  const name = String(data.name).length ? data.name : 'Amazing Theme'

  return {
    name,
    slug: String(data.slug).length ? String(data.slug).toLowerCase() : 'amazing-theme',
    uri: String(data.uri).length ? data.uri : 'http://example.com/amazing-theme-uri/',
    author: String(data.author).length ? data.author : 'Theme Author',
    authorURI: String(data.authorURI).length ? data.authorURI : 'http://mydomain.tld',
    description: String(data.description).length ? data.description : 'This is a description of the theme.',
    slug: String(data.slug).length ? data.slug : 'amazing_theme',
    packageName: capitalize(name),
  }
}

const getPluginDefaultValues = (data) => {
  const pluginSlug = String(data.plugin?.slug).length ? String(data.plugin?.slug).toLowerCase() : 'amazing-plugin'
  const pluginNameInstance = pluginSlug.replace(/-/gi, '_')
  const pluginAuthor = String(data.author?.name).length ? data.author?.name : 'Plugin Author'
  const pluginAuthorEmail = String(data.author?.email).length ? data.author?.email : 'my@email.tld'

  return {
    pluginSlug: pluginSlug,
    pluginName: String(data.plugin?.name).length ? data.plugin?.name : 'Amazing Plugin',
    pluginURI: String(data.plugin?.uri).length ? data.plugin?.uri : 'http://example.com/amazing-plugin-uri/',
    pluginAuthorURI: String(data.author?.uri).length ? data.author?.uri : 'http://mydomain.tld',
    pluginNamePackage: capitalize(pluginSlug),
    pluginNameInstance: pluginNameInstance,
    pluginNameVersion: (pluginNameInstance + '_VERSION').toUpperCase(),
    pluginAuthor: pluginAuthor,
    pluginAuthorFull: pluginAuthor + ' <' + pluginAuthorEmail + '>',
    pluginDescription: String(data.plugin?.description).length
      ? data.plugin?.description
      : 'This is a description of the plugin.',
  }
}

export default getDefaultValues
