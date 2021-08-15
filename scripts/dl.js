/* global hexo */

hexo.extend.tag.register(
  'dtdd',
  function(args, content) {
    const options = parseTagOptions(args);

    let typespan = '';
    if (options.type) {
      typespan = `<span class="type">${options.type}</span>`;
    }

    let idstr = '';
    if (options.id) {
      idstr = `id="${options.id}"`;
    }
    const namespan = `<span class="name" ${idstr}>${options.name}</span>`;

    return hexo.render
      .render({ text: content, engine: 'md' })
      .then(function(markdownContent) {
        return `<dt>${namespan}${typespan}</dt><dd>${markdownContent}</dd>`;
      });
  },
  { ends: true, async: true }
);

/**
 * Get page path given a certain language tag
 */
hexo.extend.helper.register('i18n_path', function(language) {
  const { path, lang } = this.page;
  const base = path.startsWith(lang) ? path.slice(lang.length + 1) : path;
  return this.url_for(`/${language}/${base}`);
});

/**
 * Get the language name
 */
hexo.extend.helper.register('language_name', function(language) {
  const name = hexo.theme.i18n.__(language)('name');
  return name === 'name' ? language : name;
});
