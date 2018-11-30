import $ from 'jquery';

export const createText = text => {
  return $.ajax({
    method: 'POST',
    url: 'api/texts',
    data: {
      text: {
        text: text
      }
    }
  })
}


export const fetchTexts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/texts'
  })
}
