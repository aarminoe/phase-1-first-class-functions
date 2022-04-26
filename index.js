

const receivesAFunction = cb => cb()

const returnsANamedFunction = () => function hi() {console.log('hi')}

const returnsAnAnonymousFunction = () => function() {console.log('bye')}