import {just, periodic, from, fromPromise, fromEvent, combine} from 'most'
import {div, p} from '@motorcycle/dom'
import {objOf, assocPath} from 'ramda'
import List from '../../components/list/list-index'
import ListItem from '../../components/list-item/list-item-index'
const initialListState = [
  {isChecked: true, hasFocus: false, value: 'this'}
, {isChecked: false, hasFocus: false, value: 'is'}
, {isChecked: true, hasFocus: false, value: 'motor'}
, {isChecked: false, hasFocus: false, value: 'cycle'}
]

const view = (list$) => {
  return list$
}

const Home = (sources) => {
  const list = List(sources, {initialState: initialListState})
  const view$ = view(list.DOM)
  return {
    DOM: view$
  }
}

export default Home
