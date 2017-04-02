(function (window) {
// 当前页
    var current = 5; //  1
    // 共有几页
    var total = 30;
    // 显示几个(单数)
    var show = 7; // 5:2 7:3
    // 1. 根据显示数量算出正常情况当前页的左右各有几个
    var region = Math.floor(show / 2);
    // 2. 计算出当前界面上的起始值
    var begin = current - region; // 可能小于 1
    begin = begin < 1 ? 1 : begin;
    var end = begin + show; // end必须小于total
    if (end > total) {
        end = total + 1;
        begin = end - show;
        begin = begin < 1 ? 1 : begin;
    }

    // 获取分页展示容器
    var container = document.getElementsByClassName('pagination')[0];

    // 先append上一页
    var prevElement = document.createElement('li');
    prevElement.innerHTML = '<a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>';
    if(current == 1){
        prevElement.classList.add('disabled');
    }
    container.appendChild(prevElement);
    for (var i = begin; i < end; i++) {
        var liElement = document.createElement('li');
        liElement.innerHTML = '<a href="#">' + i + '</a>';
        if (i == current) {
            // 此时是当前页
            liElement.classList.add('active');
        }
        container.appendChild(liElement);
    }
    var nextElement = document.createElement('li');
    nextElement.innerHTML = '<a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>';
    if(current == total){
        nextElement.classList.add('disabled');
    }
    container.appendChild(nextElement);

})(window)
