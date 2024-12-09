//zyp python like functikons, it receives a [] containing th e vectors to zip
const zip= rows=>rows[0].map((_,c)=>rows.map(row=>row[c]))

export const sortJSON = (jsObject, prop) => (
  jsObject.sort((a, b) => {
    if (a[`${prop}`] > b[`${prop}`]) return 1
    if (a[`${prop}`] < b[`${prop}`]) return -1
    return 0
  })
) 

export const sortJSONByCategorieAndString = (jsObject, catProp, stringProp) => {
  //catProp debe ser ordinal, y empezar en 1.
  //stringProp, para ordenar alfabeticamente

  //saco categories de var cagtegorica (preferiblemente numerica)
  const categories = []
  jsObject.map(element => {
    categories.includes(element[`${catProp}`]) ?
      null :
      categories.push(element[`${catProp}`])
  })

  //hago un range segun el numero de categories, y leugo creo un zip con el cual mapear cada categoria)
  const categoriesRange = Array(categories.length).fill(1).map((x, y) => x + y)
  const categoriesMap = zip([categoriesRange, categories])

  //creo array de array vacios. EN cada uno, voy a meter todas las elementos del objeto con la misma categorie
  let splittedCategorieList = Array(categories.length).fill().map(e => [])

  //organizo la lista por categorical prop, y la divido en arrays segun cada categoria. -1, asumiendo que categorical prop, empieza en 1.
  sortJSON(jsObject, catProp).map(element => {
    for (const categorie of categoriesMap) {
      //veo si vales realeas/categorias coincides, si es as;i, los voy ubicndo en valores mapeados (desde 0...n)
      categorie[1] == element[`${catProp}`] ?
        splittedCategorieList[categorie[0] - 1]?.push(element)
        : null
    }
  })

  //organizo cada lista alfabéticamente/segun strin y las junto
  let sortedBycatandStrinPropsList = []

  splittedCategorieList.forEach((list) => //por cada cat, la ordeno por StringProp, y concateno todo 
    sortedBycatandStrinPropsList = sortedBycatandStrinPropsList.concat(sortJSON(list, stringProp))
  )
  

  return sortedBycatandStrinPropsList

}