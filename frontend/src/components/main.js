import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Authors} from './authors'
import {Books} from './books'
import {AddWriter} from './addwriter'
import {AddBook} from './addbook'
import {DelBook} from './delbook'
import {DelWriter} from './delwriter'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Authors}/>
      <Route path='/books' component={Books}/>
      <Route path='/addwriter' component = {AddWriter}/>
      <Route path='/addbook' component = {AddBook}/>
      <Route path='/delbook' component = {DelBook}/>
      <Route path='/delwriter' component = {DelWriter}/>
     {/*  <Route path='/editbook' component = {EditBook}/>
      <Route path='/editwriter' component = {EditWriter} */}
    </Switch>
  </main>
)

export default Main
