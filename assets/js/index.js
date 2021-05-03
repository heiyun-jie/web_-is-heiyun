$(function () {
    getUserInof();
 })

//获取用户的基本信息
function getUserInof() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        Headers: {
            Authorization:localStorage.getItem('token')||''
        },
        success: function (res) {
            console.log(res)
        }
    })
}