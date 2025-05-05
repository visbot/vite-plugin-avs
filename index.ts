import { stat } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { convertPreset } from '@visbot/webvsc';

export default function ViteAvsPlugin() {
	return {
		name: 'avs',
		async transform(code: string, id: string) {
			if (!/\.avs$/.test(id) && !/\.wvs$/.test(id)) {
				return;
			}

			const textEncoder = new TextEncoder();

			const input = textEncoder.encode(code);
			const ext = extname(id);
			const name = basename(id, ext);
			const date = (await stat(id)).mtime || new Date();

			const output = convertPreset(input, name, date);

			return {
				code: [`const data = ${JSON.stringify(output)};`, 'export default data;'].join(''),
			};
		},
	};
}
