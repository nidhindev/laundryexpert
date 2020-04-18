const fs = require('fs')
const path = require('path')
const utils = require('util')
const puppeteer = require('puppeteer')
const hb = require('handlebars')
const readFile = utils.promisify(fs.readFile)
async function getTemplateHtml() {
    try {
        const invoicePath = path.resolve("src/invoice/invoice.html");
        return await readFile(invoicePath, 'utf8');
    } catch (err) {
        return Promise.reject("Could not load html template");
    }
}
async function generatePdf() {
    let data = {
        invoice: 'asdhj-123-asd',
        createdDate: '17th April, 2020',
        dueDate: '27th April, 2020',
        branch: 'Veloor',
        shopAddres: 'The Laundry Expert,Kerala',
        businessPhoneNumber: '+12291231231',
        customerName: 'Nidhin Dev',
        customerPhoneNumber: '+9192837474',
        items: [{
            count: 1,
            name: 'Pant',
            cost: '10',
            rate: '10'
        }, {
            count: 2,
            name: 'Sari',
            cost: '50',
            rate: '25'
        }, {
            count: 3,
            name: 'Shirt',
            cost: '60',
            rate: '20'
        }, {
            count: 1,
            name: 'Suit',
            cost: '100',
            rate: '100'
        }, {
            count: 1,
            name: 'Jacket',
            cost: '50',
            rate: '50'
        },],
        total: '270'
    };
    getTemplateHtml().then(async (res) => {
        const template = hb.compile(res, { strict: true });
        const result = template(data);
        const html = result;
        const browser = await puppeteer.launch();
        const page = await browser.newPage()
        await page.setContent(html)
        await page.pdf({ path: 'dist/invoice.pdf', format: 'A4' })
        await browser.close();
        console.log("Invoice is created for user")
    }).catch(err => {
        console.error(err)
    });
}

module.exports = {
    generatePdf
}