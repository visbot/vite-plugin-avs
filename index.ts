// @ts-ignore
import { convertPreset } from '@visbot/webvsc';
import { basename, extname } from 'node:path';
import { stat } from 'node:fs/promises';

export default function ViteAvsPlugin() {
		return {
				name: 'avs',
				async transform(code: string, id: string) {
						if (!/\.avs$/.test(id) && !/\.wvs$/.test(id)) {
								return;
						}

						const textEncoder = new TextEncoder();

						const input = textEncoder.encode(code)
						const ext = extname(id);
						const name = basename(id, ext);
						const date = ((await stat(id)).mtime || new Date()).toISOString();

						const output = convertPreset(input, name, date);

						return {
								code: [
										`const data = ${JSON.stringify(output)};`,
										'export default data;'
								].join('')
						};
				}
		}
}
