
/**
 * Manage Portfolio based on language custom Field,
 * @param {String: "it", "en"} locale 
 * @param {array} portfolio 
 */
export const handlePortfolioLanguage = (locale, portfolio)=>{
  const localePortfolio = [];
  if (portfolio){
    localePortfolio = portfolio.filter(item => item.node.acf.language===locale);
  }
  return localePortfolio;
}