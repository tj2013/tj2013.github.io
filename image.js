var suffix = ".gif"

function show_image(src) {
    var img = document.createElement("IMG");
    img.src = src;
    document.body.appendChild(img);
}

function show_image_all(intradayUrl, minWeekUrl, dailyUrl, weeklyUrl, monthlyUrl, stockcode) {
    //show_image(intradayUrl + stockcode + suffix);
    show_image(minWeekUrl + stockcode + suffix);
    show_image(dailyUrl + stockcode + suffix);
    show_image(weeklyUrl + stockcode + suffix);
    show_image(monthlyUrl + stockcode + suffix);
}

function show_sina_us_stock_image(stockcode) {
    var intradayUrl = "http://image.sinajs.cn/newchart/v5/usstock/min/"
    var minWeekUrl = "http://image.sinajs.cn/newchart/v5/usstock/min_week/"
    var dailyUrl = "http://image.sinajs.cn/newchart/v5/usstock/daily/"
    var weeklyUrl = "http://image.sinajs.cn/newchart/v5/usstock/weekly/"
    var monthlyUrl = "http://image.sinajs.cn/newchart/v5/usstock/monthly/"
    show_image_all(intradayUrl, minWeekUrl, dailyUrl, weeklyUrl, monthlyUrl,stockcode)
}

function show_stockchart_dot_com_image(stockcode) {
    sizecode_guess = "t2475716334c"
    dailyUrl = "https://c.stockcharts.com/c-sc/sc?s=" + stockcode + "&p=D&yr=1&mn=6&dy=0&i=" + sizecode_guess
    weeklyUrl = "https://c.stockcharts.com/c-sc/sc?s=" + stockcode + "&p=W&yr=5&mn=0&dy=0&i=" + sizecode_guess
    show_image(dailyUrl)
    show_image(weeklyUrl)
}

function show_sina_stock_image(stockcode) {
    var intradayUrl = "http://image.sinajs.cn/newchart/min/n/"
    var dailyUrl = "http://image.sinajs.cn/newchart/daily/n/"
    var weeklyUrl = "http://image.sinajs.cn/newchart/weekly/n/"
    var monthlyUrl = "http://image.sinajs.cn/newchart/monthly/n/"
    show_image_all(intradayUrl, dailyUrl, weeklyUrl, monthlyUrl,stockcode)
}

function show_stock_in_list(stock_list) {
    stock_list.forEach(function (item, index) {
        show_stockchart_dot_com_image(item);
    })
}

function show_sina_us_stock_in_list(stock_list) {
    stock_list.forEach(function (item, index) {
        show_sina_us_stock_image(item);
    });
}
