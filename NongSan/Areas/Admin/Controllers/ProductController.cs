using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NongSan.Models;
using NongSan.Logics.DanhMucLG;
using NongSan.Logics.SanPhamLG;
using System.IO;

namespace NongSan.Areas.Admin.Controllers
{
    public class ProductController : BaseController
    {
        // GET: Admin/Product
        private SanPhamLogic sanpham = new SanPhamLogic();

        public ActionResult TableProduct()
        {
            return View(GetAllProduct());
        }

        public void SetViewBag()
        {
            DanhMucSanPhamLogic dao = new DanhMucSanPhamLogic();
            ViewBag.DanhMuc = dao.LoadAllDanhMuc();
        }

        public IEnumerable<SanPham> GetAllProduct()
        {
            using (BanNongSanEntities db = new BanNongSanEntities())
            {
                return db.SanPham.Include("DanhMucSanPham").ToList<SanPham>();
            }
        }

        public PartialViewResult FormProduct()
        {
            SetViewBag();
            return PartialView();
        }

        //Add product
        [HttpPost]
        public ActionResult Add(SanPham sanphamthem)
        {
            int resultAdd = 0;
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var temp = context.SanPham.Where(x =>
                    x.TenSanPham.Equals(sanphamthem.TenSanPham.Trim())).Count();
                    if (temp > 0)
                    {
                        resultAdd = 1;//trùng tên sản phẩm
                        return Json(resultAdd, JsonRequestBehavior.AllowGet);
                    }
                    SanPham sanphammoi = new SanPham();
                    sanphammoi.TenSanPham = sanphamthem.TenSanPham;
                    sanphammoi.IDDanhMuc = sanphamthem.IDDanhMuc;
                    sanphammoi.DonGia = sanphamthem.DonGia;
                    sanphammoi.GiaKhuyenMai = sanphamthem.GiaKhuyenMai;
                    sanphammoi.GioiThieu = sanphamthem.GioiThieu;
                    sanphammoi.MoTa = sanphamthem.MoTa;
                    sanphammoi.SoLuongTon = sanphamthem.SoLuongTon;

                    context.SanPham.Add(sanphammoi);
                    context.SaveChanges();

                    ///////
                    string fileName = Path.GetFileNameWithoutExtension(sanphamthem.ImageFile.FileName);
                    string extension = Path.GetExtension(sanphamthem.ImageFile.FileName);
                    fileName = string.Format("{0}_{1}{2}", sanphammoi.IDSanPham, fileName, extension);
                    sanphammoi.Hinh = fileName;

                    context.SaveChanges();
                    // c:\xxx =>
                    fileName = Path.Combine(Server.MapPath("~/assets/img/product/"), fileName);
                    sanphamthem.ImageFile.SaveAs(fileName);
                }
            }
            catch (Exception ex)
            {
                resultAdd = 2;//Thêm thất bại
                return Json(resultAdd, JsonRequestBehavior.AllowGet);
            }
            return Json(resultAdd, JsonRequestBehavior.AllowGet);
        }

        //Fix product
        //Get detail product
        public JsonResult GetbyID(int ID)
        {
            var sanPham = sanpham.LoadAllSanPham2().Find(x => x.IDSanPham.Equals(ID));
            return Json(sanPham, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update(SanPham spham)
        {
            //0 : thành công ;
            int resultFix = 0;
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var item = context.SanPham.Where(x => x.IDSanPham == spham.IDSanPham).FirstOrDefault();
                    if (item == null)
                    {
                        resultFix = 1;//1: Không tồn tại Mã ;
                    }
                    item.TenSanPham = spham.TenSanPham;
                    item.IDDanhMuc = spham.IDDanhMuc;
                    item.DonGia = spham.DonGia;
                    item.GiaKhuyenMai = spham.GiaKhuyenMai;
                    item.GioiThieu = spham.GioiThieu;
                    item.MoTa = spham.MoTa;
                    item.SoLuongTon = spham.SoLuongTon;
                    var fileName2 = spham.ImageFile;
                    if ((fileName2 != null))
                    {
                        //Hình
                        string fileName = Path.GetFileNameWithoutExtension(spham.ImageFile.FileName);
                        string extension = Path.GetExtension(spham.ImageFile.FileName);
                        fileName = string.Format("{0}_{1}{2}", spham.IDSanPham, fileName, extension);
                        spham.Hinh = fileName;

                        fileName = Path.Combine(Server.MapPath("~/assets/img/product/"), fileName);
                        spham.ImageFile.SaveAs(fileName);
                        //////
                        item.Hinh = spham.Hinh;
                    }
                    else
                    {
                        item.Hinh = spham.Hinh;
                    }

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

        //xóa sản phẩm
        public ActionResult Delete(int idpro)
        {
            //0 : thành công ;
            int resultDel = 0;
            try
            {
                using (var context = new BanNongSanEntities())
                {
                    var item = context.SanPham.Where(x => x.IDSanPham == idpro).FirstOrDefault();
                    if (item == null)
                    {
                        resultDel = 1;//1: Không tồn tại Mã ;
                    }
                    context.SanPham.Remove(item);
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