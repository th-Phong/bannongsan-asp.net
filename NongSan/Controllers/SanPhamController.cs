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
    public class SanPhamController : Controller
    {
        // GET:
        private SanPhamLogic sanpham = new SanPhamLogic();

        private DanhMucSanPhamLogic danhmuc = new DanhMucSanPhamLogic();
        public int limitPerPage = 8;

        public ActionResult ShopIndex()
        {
            ViewBag.ListDanhMuc = danhmuc.LoadAllDanhMuc();
            List<SanPham> productperpage = new List<SanPham>();

            using (var context = new BanNongSanEntities())
            {
                productperpage = context.SanPham.Take(limitPerPage).ToList();

                ViewBag.Count = Math.Ceiling((double)context.SanPham.Count() / limitPerPage);
            }

            return View(productperpage);
        }

        public ActionResult ChiTietSanPham(int idpro)
        {
            var product = sanpham.ProductDetail(idpro);//get detail product
            ViewBag.ListRelatedProduct = sanpham.ListRelatedProduct(idpro);//get related products
            return PartialView(product);
        }

        public ActionResult SanPhamTheoDanhMuc(int id)
        {
            ViewBag.ListDanhMuc = danhmuc.LoadAllDanhMuc();
            List<SanPham> productperpage = new List<SanPham>();
            using (var context = new BanNongSanEntities())
            {
                productperpage = context.SanPham.Where(x => x.IDDanhMuc == id).Take(limitPerPage).ToList();

                ViewBag.Count = Math.Ceiling((double)context.SanPham.Where(x => x.IDDanhMuc == id).Count() / limitPerPage);
            }
            return PartialView(productperpage);
        }

        public ActionResult LoadAjax_SanPhamDanhMuc(int id)
        {
            List<SanPham> productperpage = new List<SanPham>();

            using (var context = new BanNongSanEntities())
            {
                productperpage = context.SanPham.Where(x => x.IDDanhMuc == id).Take(limitPerPage).ToList();
                ViewBag.Count = Math.Ceiling((double)context.SanPham.Where(x => x.IDDanhMuc == id).Count() / limitPerPage);
            }

            return PartialView(productperpage);
        }

        public ActionResult PhanTrang_ShopIndex(int page, int? iddanhmuc)
        {
            List<SanPham> productperpage = new List<SanPham>();
            int offset = (page - 1) * limitPerPage;
            if (iddanhmuc == null)
            {
                using (var context = new BanNongSanEntities())
                {
                    productperpage = context.SanPham.OrderBy(i => i.IDSanPham).Skip(offset).Take(limitPerPage).ToList();
                    ViewBag.Count = Math.Ceiling((double)context.SanPham.Where(x => x.IDDanhMuc == iddanhmuc).Count() / limitPerPage);
                }
            }
            else
            {
                using (var context = new BanNongSanEntities())
                {
                    productperpage = context.SanPham.Where(x => x.IDDanhMuc == iddanhmuc).OrderBy(i => i.IDSanPham).Skip(offset).Take(limitPerPage).ToList();
                    ViewBag.Count = Math.Ceiling((double)context.SanPham.Count() / limitPerPage);
                }
            }
            return PartialView(productperpage);
        }
    }
}