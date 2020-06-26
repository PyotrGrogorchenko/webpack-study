import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import pmgSmile from './assets/smile'
import xml from './assets/data.xml'
import './styles/less.less'
import './styles/scss.scss'
import './babel'
import React from 'react'
import {render} from 'react-dom'

import './styles/styles.css'

const post = new Post('Webpack title', pmgSmile)

// $('pre').html(post.toString());

console.log('Post to string:', post.toString())
console.log('XML', xml)

const App = () => (
    <div className="container">
        <h1>Webpack</h1>
        <hr />
        <div className="logo" />
        <hr />
        <pre />
        <hr />
        <div className="box">
            <h2>Less</h2>
        </div>
        <hr />
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))