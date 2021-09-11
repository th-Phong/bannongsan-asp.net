using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NongSan.Logics.SanPhamLG;
using NongSan.Logics.DanhMucLG;
using NongSan.Models;

namespace NongSan.ViewModels
{

    public class ItemCartViewModel
    {
        public SanPham sanpham { get; set; }
        public int TrongLuong { get; set; }
        public int SoLuong { get; set; }
        public int Gia { get; set; }
    }
}