$(document).ready(() => {
  $('#main-holder-address-add-btn').click(function() {
    let address = $('#address-value')[0].value
    address = address.replace(/\s/g, '')
    $.ajax({
      url: '/coin',
      method: 'POST',
      data: { address },
      success: (res, body, {status}) => {
        if (status === 201) {
          alert('등록성공')
          window.location.href='/admin'
          return
        }
        alert('등록실패')
      }
    })
  })

  $('#main-holder-address-remove-btn').click(function() {
    let address = $('#address-value')[0].value
    address = address.replace(/\s/g, '')

    $.ajax({
      url: '/coin',
      method: 'delete',
      data: { address },
      success: (res, body, {status}) => {
        if (status === 201) {
          alert('삭제성공')
          window.location.href='/admin'
          return
        }
        alert('삭제실패')
      }
    })
  })

  $('.holders-address').click(function() {
    let address = $(this).attr('value')
    console.log(address)

    $('#address-value')[0].value = address
  })
})