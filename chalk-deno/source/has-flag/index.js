let args = []
try {
    args = Deno.args
} catch (error) {
    try {
        const [_1,_2, ...argvs] = require('process').argv
        args = argvs
    } catch (error) {
        
    }
}

export default function hasFlag(flag, argv = args) {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
