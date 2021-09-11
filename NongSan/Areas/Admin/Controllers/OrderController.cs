using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NongSan.Models;
using NongSan.Logics.DonHangLG;

namespace NongSan.Areas.Admin.Controllers
{
    public class OrderController : Controller
    {
        private DonHangLogic donhang = new DonHangLogic();
        // GET: Admin/Order
        public ActionResult TableOrder()
        {
            return View(GetAllOrder());
        }

        public IEnumerable<DonHang> GetAllOrder()
        {
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                return db.DonHang.ToList<DonHang>();
            }
        }
        public PartialViewResult FormOrder()
        {
            return PartialView();
        }
        public JsonResult GetbyID(int ID)
        {
            var donHang =donhang.LoadAllDonHang().Find(x => x.IDDonHang.Equals(ID));
            return Json(donHang, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update(DonHang dhang)
        {
            //0 : thành công ;
            int resultDel = 0;
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var item = context.DonHang.Where(x => x.IDDonHang == dhang.IDDonHang).FirstOrDefault();
                    if (item == null)
                    {
                        resultDel = 1;//1: Không tồn tại Mã ;
                    }
                    item.ShipGhiChu = dhang.ShipGhiChu;
                    item.TrangThaiDonHang = dhang.TrangThaiDonHang;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                resultDel = 2; //2: Có lỗi ngoại lệ
            }
            return Json(resultDel, JsonRequestBehavior.AllowGet);
            //0 : thành công ;
        }
    }
}