// todo: Add bad code tests more.

export default function foo() {};

const _underscore_ = () => {
    const underscore_ = 1;
    const test = {
        _bar: "test"
    }
    return [test._bar, underscore_]
}
_underscore_()
