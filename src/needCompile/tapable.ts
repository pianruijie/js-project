import {SyncHook} from 'tapable';

class B {
    constructor(){
        this.hooks = {
            makeHook : new SyncHook(['make']),
            compileHook: new SyncHook(['compile'])
        };
    }
    make() {
        // xxxxx
        // ...
        // xxx
        this.hooks.makeHook.call('this is make');
    }
    compile() {
        // xxxxx
        // ...
        // xxx
        this.hooks.makeHook.call('this is compile');
    }
    run() {
        this.make();
        this.compile();
    }
}
class A {
    constructor(plugins){
        this.compilation = new B();
        this.plugins = plugins;
        this.plugins.forEach(fn => fn(this.compilation))
    }
    run() {
        this.compilation.run();
    }
}
const plugin1 = (compilation) => {
    compilation.hooks.makeHook.tap('plugin1', (name)=>{
        console.log(name);
    });
};
const plugin2 = (compilation) => {
    compilation.hooks.compileHook.tap('plugin2', (name)=>{
        console.log(name);
    });
};
export const compileIns = new A([plugin1, plugin2]);