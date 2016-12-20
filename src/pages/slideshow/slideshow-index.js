import {just, periodic, mergeArray} from 'most'
import {div, canvas} from '@motorcycle/dom'

const Slideshow = (sources) => {
  return {
    DOM: just(
      div('.slideshow', [
        'Slide',
      ])
    )
  }
}

export default Slideshow
