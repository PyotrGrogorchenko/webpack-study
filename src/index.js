import Post from '@models/Post'
import json from './assets/json'
import pmgSmile from './assets/smile'
import xml from './assets/data.xml'

import './styles/styles.css'

const post = new Post('Webpack title', pmgSmile)

console.log('Post to string:', post.toString())
console.log('XML', xml)
