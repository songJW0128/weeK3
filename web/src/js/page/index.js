require(['../config'], function() {
    require(['mui', 'flex', 'better'], function(mui, flex, better) {
        console.log(mui)
        init()

        function init() {

            getlist();
        }

        function getlist() {
            mui.ajax('api/getList', {
                success: function(data) {
                    render(data.data)
                }
            })
        }

        function render(data) {
            var html = '';
            data.forEach(function(item) {
                html += ` <dl>
                            <dt><img src="images/tu1_08.png" alt=""></dt>
                            <dd>蔡徐坤</dd>
                        </dl>`
            })
            dls.innerHTML = html
        }
    })
})