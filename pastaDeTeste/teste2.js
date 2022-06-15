const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');

(async function firstScrit() {
 try {
    let driver = await new Builder().forBrowser('chrome').build(); // inicia a sessão

    await driver.get('https://www.google.com'); // abre o navegador

    await driver.getTitle(); // Solicitar informações do navegador

    await driver.manage().setTimeouts({implicit: 1000}) // Ajuste de timeout 1 segundo

    let searchBox = await driver.findElement(By.name('q'));     // Encontrar os elementos de campo de busca e 
    let searchButton = await driver.findElement(By.name('btnK'));   // Pesquisar

    await searchBox.sendKeys('SENAI MG');   // Insere um valor no campo de busca
    await searchButton.click();             // Aciona ao botão de clique

    let value = await searchBox.getAttribute("value"); // Realocar o valor dentro do campo
    assert.deepStrictEqual(value, "SENAI MG");

    await driver.quit();    // Encerra a sessão
    
 } catch (error) {
    console.log(error)
 }
})();