const fs = require('fs');
const ejse = require('ejs-electron');
const { app, BrowserWindow } = require('electron');

app.once('ready', async () => {
    // await win.loadURL(`file://${__dirname}/index.html`);

    const resumeData = require('./resume.json');

    // Keep personal contact info in environment variables
    // to avoid getting weird calls from internet people
    const location = process.env['RESUME_LOCATION'];
    const email = process.env['RESUME_EMAIL'];
    const phone = process.env['RESUME_PHONE'];

    if ([location, email, phone].includes(undefined)) {
        console.error('Missing one or more contact info environment variables');
        app.exit(-1);
    }

    resumeData.location = location;
    resumeData.email = email;
    resumeData.phone = phone;

    ejse.data(resumeData);

    const win = new BrowserWindow({ show: false });
    await win.loadURL(`file://${__dirname}/index.ejs`);

    if (process.argv[2] !== '--pdf') {
        win.setContentSize(960, 560);
        win.show();
        return;
    }

    console.log('Generating PDF...');

    const pdfOptions = {
        landscape: false,
        pageSize: 'Letter',
        printBackground: true,
    };

    const pdfBuffer = await win.webContents.printToPDF(pdfOptions);
    fs.writeFileSync('./resume.pdf', pdfBuffer);
    console.log('Done!');

    app.exit(0);
});