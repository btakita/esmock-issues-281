import esmock from 'esmock'
await esmock.p('./sut/index.js', {
	'node:fs/promises': {
		access: 'ESMOCK_access',
		readFile: 'ESMOCK_readFile',
	}
})
