console.log('sut_dep|debug|1', {
	access: (await import('node:fs/promises')).access,
	readFile: (await import('node:fs/promises')).readFile,
})
