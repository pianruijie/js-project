import {compileIns} from './tapable';

const type: string[] = process.argv.splice(2);

switch(type[0]) {
    case 'tapable':
        compileIns.run();
        break
    default:
        break;
}