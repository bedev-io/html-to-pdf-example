import * as path from 'path';
import { promises as fs } from 'fs';
import * as Mustache from 'mustache';
import { AvailableTemplateFile } from './index.d';

export class MustacheRenderer {
  async render(filePath: AvailableTemplateFile, data?: Record<string, unknown>): Promise<string> {
    const templatePath = path.resolve(__dirname, '../templates', filePath);

    return Mustache.render(await fs.readFile(templatePath, 'utf-8'), data);
  }
}
