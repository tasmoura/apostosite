module.exports = {

    trailingSlash:true,

    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/noticias': { page: '/noticias' },
        '/noticias/0': { page: '/noticiaid', query: { id: '0' } },
        '/noticias/1': { page: '/noticiaid', query: { id: '1' } },
        '/noticias/2': { page: '/noticiaid', query: { id: '2' } },
        '/noticias/3': { page: '/noticiaid', query: { id: '3' } },
        '/noticias/4': { page: '/noticiaid', query: { id: '4' } },
        '/noticias/5': { page: '/noticiaid', query: { id: '5' } },
        '/noticias/6': { page: '/noticiaid', query: { id: '6' } },
      }
    },
  }