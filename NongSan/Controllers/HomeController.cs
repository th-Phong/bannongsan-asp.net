using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NongSan.Logics.SanPhamLG;
using NongSan.Logics.DanhMucLG;
using NongSan.Models;

namespace NongSan.Controllers
{
    public class HomeController : Controller
    {
        private SanPhamLogic sanpham = new SanPhamLogic();
        private DanhMucSanPhamLogic danhmuc = new DanhMucSanPhamLogic();

        public ActionResult Index()
        {
            ViewBag.ListDanhMuc = danhmuc.LoadAllDanhMuc();
            ViewBag.ListAllSanPham = sanpham.LoadAllSanPham();
            ViewBag.ListSanPhamMoi = sanpham.ListNewProduct(10);
            ViewBag.ListBestSeller = sanpham.ListBestSeller(10);
            ViewBag.ListFeateredProduct = sanpham.ListFeateredProduct(10);
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public PartialViewResult ShopInIndex(int? iddanhmuc)
        {
            ViewBag.DanhMuc = new DanhMucSanPhamLogic().LoadAllDanhMuc();
            List<SanPham> list = new List<SanPham>();
            if (iddanhmuc == null)
            {
                list = sanpham.LoadAllSanPham();
            }
            else
            {
                list = sanpham.ListSanPhamTheoDanhMuc(iddanhmuc);
            }
            return PartialView(list);
        }

        public ActionResult Change_TabProduct(int iddanhmuc)
        {
            List<SanPham> list = new List<SanPham>();

            list = sanpham.ListSanPhamTheoDanhMuc(iddanhmuc);

            return PartialView(list);
        }
    }
}