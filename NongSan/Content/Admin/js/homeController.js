var homeconfig = {
    pageSize: 5,
    pageIndex: 1,
}
var homeController = {
    init: function () {
        homeController.loadData();
        homeController.registerEvent();
    },
    loadData: function (changePageSize) {
        $.ajax({
            url: '/SanPham/LoadData',
            type: 'GET',
            data: {
                page: homeconfig.pageIndex,
                pageSize: homeconfig.pageSize
            },
            dataType: 'json',
            success: function (response) {
                if (response.status) {
                    var data = response.data;
                    var html = '';
                    var template = $('#data-template').html();
                    $.each(data, function (i, item) {
                        html += Mustache.render(template, {
                            SanPhamID: item.SanPhamID,
                            Image: item.Image,
                            TenSanPham: item.TenSanPham,
                            GiaGoc:item.GiaGoc,
                            PromotionPrice: item.PromotionPrice,
                            TomTat:item.TomTat,
                            Description: item.Description,
                            MetaKeyword: item.MetaKeyword,
                            Quantity: item.Quantity,
                            DanhMucSanPham: item.DanhMucSanPham,
                            Status: item.Status=1?"Kích hoạt":"Khóa"
                        });        
                                   
                    });          
                    $('#tblData').html(html);
                    homeController.paging(response.total, function () {
                        homeController.loadData();
                    }, changePageSize);
                    homeController.registerEvent();
                }
            }
        })
    },
    paging: function (totalRow, callback, changePageSize) {
        var totalPage = Math.ceil(totalRow / homeconfig.pageSize);

        //Unbind pagination if it existed or click change pagesize
        if ($('#pagination a').length === 0 || changePageSize === true) {
            $('#pagination').empty();
            $('#pagination').removeData("twbs-pagination");
            $('#pagination').unbind("page");
        }

        $('#pagination').twbsPagination({
            totalPages: totalPage,
            first: "Đầu",
            next: "Tiếp",
            last: "Cuối",
            prev: "Trước",
            visiblePages: 10,
            onPageClick: function (event, page) {
                homeconfig.pageIndex = page;
                setTimeout(callback, 50);
            }
        });
    }
}
homeController.init();