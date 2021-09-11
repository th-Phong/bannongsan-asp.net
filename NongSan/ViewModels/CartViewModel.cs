using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NongSan.Logics.SanPhamLG;
using NongSan.Logics.DanhMucLG;
using NongSan.Models;

namespace NongSan.ViewModels
{
    public class CartViewModel
    {
        public int IDDonHang { get; set; }
        public TaiKhoan khachhang { get; set; }
        public List<ItemCartViewModel> listitem { get; set; }
    }
}