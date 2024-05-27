import { Injectable } from '@nestjs/common';
import { IronPdfGlobalConfig, PdfDocument } from '@ironsoftware/ironpdf';
import { readFile } from 'fs/promises';

@Injectable()
export class AppService {
  async getHello(): string {
    IronPdfGlobalConfig.getConfig().licenseKey =
      'IRONSUITE.ALTHAF.NEWAGESYSIT.COM.9461-7950AF0B16-BPRI76XPGV2TDXGB-OJKKEUBFBBVX-PQY56KJIAHAS-G2X6YSCSBEMG-LB4Q6FQVCIKQ-UXUCNCW7ZQ2Y-ILSUJK-TRQ2PFQN7TCMUA-DEPLOYMENT.TRIAL-5AWZR2.TRIAL.EXPIRES.26.JUN.2024';
    const file = await readFile(process.cwd() + '/public/test.html', {
      encoding: 'utf-8',
    });
    const pdf = await PdfDocument.fromHtml(file);
    await pdf.saveAs(process.cwd() + '/public/example.pdf');
    return 'Hello World!';
  }
}
