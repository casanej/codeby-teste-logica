const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {
  const object = {}
  
  products.map(product => {
    const item = product.split('-');

    if(!Object.keys(object).includes(item[0])) {
      object[item[0]] = {}
    }

    if(!Object.keys(object[item[0]]).includes(item[1])) {
      object[item[0]][item[1]] = 0;
    }

    object[item[0]][item[1]] += 1;
  })

  return object;
}