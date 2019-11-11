$(document).ready(() => {
  $('#main-holder-address-add-btn').click(function () {
    let address = $('#address-value')[0].value
    address = address.replace(/\s/g, '')
    $.ajax({
      url: '/coin',
      method: 'POST',
      data: { address },
      success: (res, body, { status }) => {
        if (status === 201) {
          alert('등록성공')
          window.location.href = '/admin'
          return
        }
        alert('등록실패')
      }
    })
  })

  $('#main-holder-address-remove-btn').click(function () {
    let address = $('#address-value')[0].value
    address = address.replace(/\s/g, '')

    $.ajax({
      url: '/coin',
      method: 'delete',
      data: { address },
      success: (res, body, { status }) => {
        if (status === 201) {
          alert('삭제성공')
          window.location.href = '/admin'
          return
        }
        alert('삭제실패')
      }
    })
  })

  $('.holders-address').click(function () {
    let address = $(this).attr('value')
    console.log(address)

    $('#address-value')[0].value = address
  })

  $('#desktop-token-address-search-btn').click(function () {
    let tokenAddress = $('#desktop-token-address')[0].value
    console.log(tokenAddress)
    window.open(`https://etherscan.io/token/${tokenAddress}`, "_blank");

  })

  $('#mobile-token-address-search-btn').click(function () {
    let tokenAddress = $('#mobile-token-address')[0].value
    console.log(tokenAddress)
    window.open(`https://etherscan.io/token/${tokenAddress}`, "_blank");
  })

  $('#report-download').click(function () {
    $("#main-holders").tableToCSV({
      name: "holders",
      filename: "holders.xls",
      fileext: ".xls",
      exclude_img: true,
      exclude_links: true,
      exclude_inputs: true,
      preserveColors: true
    });
  })
})