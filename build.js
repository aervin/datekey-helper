const uglify = require('uglify-js')
const prettier = require('prettier')
const fs = require('fs')

console.log('Building datekey-helper...')

const src = __dirname + '/_src/src.js'
let sourceFile = prettier.format(fs.readFileSync(src, { encoding: 'utf-8' }), {
    semi: true
})

sourceFile = uglify.minify(sourceFile)

fs.writeFileSync('datekey-helper.js', sourceFile.code, error => {
    console.error(error)
    console.log('Problem writing minified source to file.', __filename)
})

function replaceFileContents(newContents) {
    fs.writeFileSync('./usd-please.js', newContents, error => {
        console.error(error)
        console.log(`Problem writing minified contents to dist file...`)
        process.exit(1)
    })
}