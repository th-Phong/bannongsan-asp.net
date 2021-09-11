using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NongSan.Logics.DanhMucLG;

namespace NongSan.Controllers
{
    public class DanhMucSanPhamController : Controller
    {
        // GET: DanhMucSanPham
        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult DanhMucOnHeader()
        {
            ViewBag.DanhMuc = new DanhMucSanPhamLogic().LoadAllDanhMuc();

            return PartialView();
        }
    }
}