using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NongSan.Models;
using NongSan.Logics.DanhMucLG;

namespace NongSan.Areas.Admin.Controllers
{
    public class CategoryController : BaseController
    {
        // GET: Admin/Category
        private DanhMucSanPhamLogic danhmuc = new DanhMucSanPhamLogic();

        public ActionResult TableCategory()
        {
            return View(GetAllCateGory());
        }

        public IEnumerable<DanhMucSanPham> GetAllCateGory()
        {
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                return db.DanhMucSanPham.ToList<DanhMucSanPham>();
            }
        }

        public PartialViewResult FormCategory()
        {
            return PartialView();
        }

        //Method for Adding an DanhMuc
        [HttpPost]
        public ActionResult Add(DanhMucSanPham dmuc)
        {
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var temp = context.DanhMucSanPham.Where(x =>
                    x.TenDanhMuc.Equals(dmuc.TenDanhMuc.Trim())).Count();
                    if (temp > 0)
                    {
                        return Content("Tên danh mục đã tồn tại. Vui lòng nhập tên khác !");
                    }
                    DanhMucSanPham danhmuc = new DanhMucSanPham();
                    danhmuc.TenDanhMuc = dmuc.TenDanhMuc;

                    context.DanhMucSanPham.Add(danhmuc);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                return Content("Có lỗi không thể thêm. Vui lòng thử lại " + ex.Message);
            }
            return Content("Thêm danh mục '" + dmuc.TenDanhMuc + "' thành công");
        }

        //xóa danh mục sản phẩm
        public ActionResult Delete(int idcate)
        {
            //0 : thành công ;
            int resultDel = 0;
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var item = context.DanhMucSanPham.Where(x => x.IDDanhMuc == idcate).FirstOrDefault();
                    if (item == null)
                    {
                        resultDel = 1;//1: Không tồn tại Mã ;
                    }
                    context.DanhMucSanPham.Remove(item);
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

        public JsonResult GetbyID(int ID)
        {
            var danhMuc = danhmuc.LoadAllDanhMuc().Find(x => x.IDDanhMuc.Equals(ID));
            return Json(danhMuc, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update(DanhMucSanPham dmuc)
        {
            //0 : thành công ;
            int resultFix = 0;
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var item = context.DanhMucSanPham.Where(x => x.IDDanhMuc == dmuc.IDDanhMuc).FirstOrDefault();
                    if (item == null)
                    {
                        resultFix = 1;//1: Không tồn tại Mã ;
                    }
                    item.TenDanhMuc = dmuc.TenDanhMuc;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                resultFix = 2; //2: Có lỗi ngoại lệ
            }
            return Json(resultFix, JsonRequestBehavior.AllowGet);
            //0 : thành công ;
        }
    }
}